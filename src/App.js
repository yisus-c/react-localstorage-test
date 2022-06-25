import './App.css';
import {TaskCreator} from './components/TaskCreator'
import { useState , useEffect } from 'react';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from './components/Container';

function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if(!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}]);
    }
  }

  const toggleTask = (task) =>
  setTaskItems(
    taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
  );

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done));
    setShowCompleted(false);
  }

  useEffect(()=>{
    let data = localStorage.getItem("tasks");
    if(data){
      setTaskItems(JSON.parse(data));
    }
  }, [  ]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(taskItems))
  }, [taskItems])

 
  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={false}
          />
          <VisibilityControl
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            cleanTask={cleanTask}
          />
          {showCompleted && (
            <TaskTable
              tasks={taskItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
            />
          )}
      </Container>
    </main>
  );
}

export default App;
