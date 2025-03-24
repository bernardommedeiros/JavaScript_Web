import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"

function App() {

  return (
    <div>
      <h1 className="text-red-500 text-3xl"> Gerenciador de Tarefas </h1>
      <AddTask />
      <Tasks />
    </div>


  );
}

export default App;
