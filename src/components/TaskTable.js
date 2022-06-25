import { TaskRow } from "./TaskRow"

export const TaskTable = ({tasks, toggleTask, showCompleted}) => {
    
    const taskTableRows = (doneValue) => {

      return(
        tasks
        .filter(task => task.done === doneValue )
        .map((task) => (
          <TaskRow task={task} toggleTask={toggleTask} key ={task.name}/>
        ))
      );

    }
    return (
      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRows(showCompleted)
          }
        </tbody>
      </table>
    );
}