import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

import * as S from "./styles";

function EditTaskPageContainer() {
  const task = useLoaderData();

  return (
    <S.EditTaskPageContainer>
      <S.EditTaskForm method="put">
        <S.BackButton to={`/tasks/${task.id}`}>Back</S.BackButton>
        <S.Title>
          Edit task <b>{task.id}</b>
        </S.Title>
        <input type="text" name="task-name" defaultValue={task.name} />
        <textarea name="task-description" defaultValue={task.description} />
        <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Completed</span> 
    <input  type="checkbox"
            name="task-completed"
            defaultChecked={task.completed} className="radio checked:bg-blue-500"/>
  </label>
  <button className="btn btn-primary" type="submit">Change</button>

</div>

      </S.EditTaskForm>
    </S.EditTaskPageContainer>
  );
}

export { EditTaskPageContainer };
