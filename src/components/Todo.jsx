import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo, editTodo } from "../redux/actions";
import { Link } from "react-router-dom";
import "./Todo.css";

export const Todo = () => {
  const [text, setText] = useState("");
  const [des, setDes] = useState("");

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    getTodos();
  }, []);

  const dispatch = useDispatch();

  const addTodos = () => {
    if (text.length === 0 || des.length === 0) {
      alert("Please provide complete details !!");
    } else {
      fetch("http://localhost:3002/todos", {
        method: "POST",
        body: JSON.stringify({ status: false, title: text, description: des }),
        headers: { "Content-Type": "application/json" },
      })
        .then((d) => d.json())
        .then((res) => {
          dispatch(addTodo(res));
          getTodos();
          setText("");
          setDes("");
          alert("Task added successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const editTodos = (id, status) => {
    let toggleStatus;
    if (status) {
      toggleStatus = false;
    } else {
      toggleStatus = true;
    }
    fetch(`http://localhost:3002/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: toggleStatus }),
      headers: { "Content-Type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(editTodo(res));
        getTodos();
        alert("Task updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodos = (id) => {
    fetch(`http://localhost:3002/todos/${id}`, {
      method: "Delete",
    });
    alert("Task deleted successfully !!");
    getTodos();
  };

  const getTodos = () => {
    try {
      fetch("http://localhost:3002/todos")
        .then((d) => d.json())
        .then((data) => {
          dispatch(getTodo(data));
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div id="inputDiv">
        <input
          id="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Title"
        />
        <input
          id="input"
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="Description"
        />

        <button id="addBtn" onClick={addTodos}>
          Add Todo
        </button>
      </div>
      <p id="todoCount">{todos.length}</p>
      <div className="listDiv">
     
        {todos.map((e, i) => {
          return (
            <div className="todoDiv" key={i}>
              <Link className="Link" to={`/todo/${e.id}`}>
                <p className="task">✨ {e.title} </p>
              </Link>

              <div className="btnDiv">
                <button
                  onClick={() => {
                    editTodos(e.id, e.status);
                  }}
                >
                  {e.status === false ? "Not Done" : "Done"}
                </button>
                <Link className="Link" to={`/todo/${e.id}/edit`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => {
                    deleteTodos(e.id);
                  }}
                >
                  Delete
                </button>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};