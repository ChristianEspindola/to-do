import "./App.css";
import { useState } from "react";
import { Title } from "./components/titulo/Title";
import { Agregardato } from "./components/agregar/Agregardato";
import { Toodolist } from "./components/Todolist/Toodolist";
import { Cantidad, ItemsFaltantes } from "./components/filtrocantidad/Cantidad";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/titulo/Title.css";
import "./components/agregar/Agregardato.css";
import "./components/todoo/Toodoo.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: `terminar el ejercicio`,
      completed: false,
    },
    {
      id: 2,
      title: `repasar documentacion`,
      completed: false,
    },
    {
      id: 3,
      title: `ir a comprar al super`,
      completed: false,
    },
    {
      id: 4,
      title: `cocinar`,
      completed: false,
    },
  ]);

  const addTodo = (title) => {
    const LastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: LastId + 1,
      title,
      completed: false,
    };
    const todolist = [...todos];
    todolist.push(newTodo);
    setTodos(todolist);
  };

  const handSetComplete = (id) => {
    const updateList = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateList);
  };
  const tasksLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <Title />
      <Agregardato addTodo={addTodo} />

      <Toodolist todos={todos} handSetComplete={handSetComplete} />
      <Cantidad>
        <ItemsFaltantes total={tasksLeft} />
      </Cantidad>
    </>
  );
}

export default App;
