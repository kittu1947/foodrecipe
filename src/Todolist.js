const Todolist = ({ todos, deleteHandler }) => {
    return (
      <div>
        {todos.map((todo, index) => (
          <div>
            {todo}
            <button onClick={() => deleteHandler(index)}>DELETE</button>
          </div>
        ))}
      </div>
    );
  };
  export default Todolist;