import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';


let getUser = (id) => {

  
}

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Task Page</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
