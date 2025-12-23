import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <div className="items-container">
        <TodoItem />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
