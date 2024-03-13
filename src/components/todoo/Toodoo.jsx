export const Toodoo = ({ todo, handSetComplete }) => {
  const { id, title, completed } = todo;

  return (
    <div className="Container">
      <div className="Item  ">
        {completed ? (
          <button
            type="button"
            className="btn btn-success rounded-circle m-2 border-white"
            onClick={() => handSetComplete(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="25"
              fill="currentColor"
              className="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success rounded-circle m-2 border-white"
            onClick={() => handSetComplete(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            </svg>
          </button>
        )}
        <p className={"m-1 " + (completed ? "line-through" : "")}>{title}</p>
      </div>
    </div>
  );
};
