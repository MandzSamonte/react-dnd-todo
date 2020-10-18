import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Todo(props) {
  const { todo, index } = props;

  return (
    <Draggable
      draggableId={todo.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="todo"
        >
          { todo.name }
        </div>
      )}
    </Draggable>
  )
}

export default Todo;
