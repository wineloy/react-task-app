import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 sm:h-max md:h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>

      {/* paso el la variable task al componente task list */}
    </main>
  );
}

export default App;
