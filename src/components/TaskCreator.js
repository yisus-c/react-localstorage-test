import { useState } from 'react';
 
export const TaskCreator = ({createNewTask}) => {
    const [newTaskName, setNewTaskName] = useState('');
    const handleSubmit = (e) => { //manejando el evento "submit"
      e.preventDefault();
      createNewTask(newTaskName);
      setNewTaskName("");
    };
    return (
      <form onSubmit={handleSubmit} className='my-2 row'>
        <div className='col-9'>
          <input
            type="text"
            placeholder="Ingresa una nueva tarea"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='col-3'>
          <button className='btn btn-primary btn-sm '>Guardar tarea</button>
        </div>
      </form>
    );
}