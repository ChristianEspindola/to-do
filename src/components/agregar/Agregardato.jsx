import { useState } from "react";
import { BotonAgregar } from "../botones/BotonAgregar";

export const Agregardato = ({ addTodo }) => {
  const [title, setTitle] = useState(``);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="container">
      <div className="agregar mt-3 relative ">
        <div className="input-fields">
          <input
            type="text"
            required
            value={title}
            onChange={handleChange}
          ></input>
          <p>Tarea a realizar</p>
          <BotonAgregar addTodo={addTodo} setTitle={setTitle} title={title} />
        </div>
      </div>
    </div>
  );
};
