import { Toodoo } from "../todoo/Toodoo";
import { Filtro } from "../filtros/Filtroo";

export const Toodolist = ({ todos, handSetComplete }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => {
        return (
          <Toodoo key={todo.id} todo={todo} handSetComplete={handSetComplete} />
        );
      })}
      <Filtro />
    </div>
  );
};
