import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getApplications, getSearchedApps, deleteApp } from "./ApplicationManager";
import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export const ApplicationCard =() => {
const [applications, setApplications] = useState([])
const [query, setQuery] = useState([])
const [columns, setColumns] = useState({});
const history = useHistory()

useEffect(() => {
    setColumns({
        1: {
          name: "Researching",
          items: applications
        },
        2: {
          name: "Applied",
          items: []
        },
        3: {
          name: "Finished",
          items: []
        }
      })
}, [applications])



const fetchApplications = () => {
    getApplications().then(data => setApplications(data))
}

useEffect(() => {
    if (query) {
        getSearchedApps(query).then(data => setApplications(data))
    } else {
        fetchApplications()
    }
}, [query])




const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

  
  return (
      <>
      <form>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                onChange={(event)=>                            
                    setQuery(event.target.value)}                         
                    />
                
            </form>
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns)?.map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#00897b"
                            : "#004d40",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                                key={item.id}
                                draggableId={(item.id).toString()}
                                index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? '#004d40'
                                        : '#00897b',
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    <div className="application__role">{item.job_post.role} by {item.job_post.company}</div>
                                    <div className="application__date">Date Applied: {item.date_applied}</div>
                                    <Button type="submit" size="small" style={{ color: "darkblue" }}
                                        onClick={() => {
                                        history.push({ pathname: `/applications/${item.id}`})
                                        }}><MoreHorizOutlinedIcon/></Button>
                                    <Button type="submit" size="small" style={{ color: "darkblue" }}
                                        onClick={() => {
                                        history.push({ pathname: `/applications/edit/${item.id}`})
                                        }}><EditOutlinedIcon/></Button>
                                    <Button type="submit" size="small" style={{ color: "darkblue" }}
                                    onClick={evt => {
                                    // Prevent form from being submitted
                                    evt.preventDefault()
                                    deleteApp(item.id)
                                    .then(() => fetchApplications())
                                    }}><DeleteForeverOutlinedIcon/></Button>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
    </>
  );
}


