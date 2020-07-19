import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../utils/auth_context';
import axios from 'axios';
import styles from './profile.module.css';

const Profile = () => {
  const [todos, setTodos] = useState(null);
  const [formTitle, setTitle] = useState('');
  const [formDescription, setDescription] = useState('');

  const context = useContext(AuthContext);
  const { authState } = context;
  const { user } = authState;

  //Edit Todo state and form state
  const [isEditting, setEdit] = useState(false);
  const [editTodoID, setTodoID] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const fetchTodos = async () => {
    let author = user ? user.username : '';
    let params = { author };
    if (user) {
      let results = await axios.get(`${process.env.GATSBY_SERVER_URL}/api/get/todos`, { params });
      setTodos(results.data);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const postTodo = async event => {
    event.preventDefault();
    let author = user ? user.username : '';
    let title = event.target.title.value;
    let description = event.target.description.value;

    let data = { title, description, author };
    await axios.post(`${process.env.GATSBY_SERVER_URL}/api/post/todo`, data);
    fetchTodos();
    setTitle('');
    setDescription('');
  };

  const deleteTodo = async todo => {
    let todo_id = todo.todo_id;

    let data = { todo_id };
    await axios.delete(`${process.env.GATSBY_SERVER_URL}/api/delete/todo`, { data });
    setEdit(false);
    fetchTodos();
  };

  const putTodo = async (event, todo) => {
    event.preventDefault();
    let title = event.target.title.value;
    let description = event.target.description.value;
    let author = user ? user.username : '';
    let todo_id = todo.todo_id;

    let data = { title, description, author, todo_id };
    await axios.put(`${process.env.GATSBY_SERVER_URL}/api/put/todo`, data);
    setEdit(false);
    fetchTodos();
  };

  const editTodo = todo => {
    setEdit(true);
    setTodoID(todo.todo_id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescChange = event => {
    setDescription(event.target.value);
  };

  const handleEditTitleChange = event => {
    setEditTitle(event.target.value);
  };

  const handleEditDescChange = event => {
    setEditDescription(event.target.value);
  };

  return (
    <div>
      <form onSubmit={postTodo} className={styles.main_form}>
        <div className={styles.form_row}>
          <label>Title:</label>
          <input onChange={handleTitleChange} value={formTitle} name="title" />
        </div>
        <div className={styles.form_row}>
          <label>Description:</label>
          <textarea onChange={handleDescChange} value={formDescription} name="description" />
        </div>
        <button className={styles.submit_button} type="submit">
          Send
        </button>
      </form>
      <h2>Todos: </h2>
      {todos ? (
        todos.map(todo => (
          <div key={todo.todo_id}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <div className={styles.edit_button_row}>
              <button onClick={() => editTodo(todo)}>Edit</button>

              <button onClick={() => deleteTodo(todo)}>Delete</button>
            </div>

            {isEditting && todo.todo_id === editTodoID && (
              <form onSubmit={event => putTodo(event, todo)} className={styles.main_form}>
                <div className={styles.form_row}>
                  <label>Title:</label>
                  <input onChange={handleEditTitleChange} value={editTitle} name="title" />
                </div>
                <div className={styles.form_row}>
                  <label>Description:</label>
                  <textarea
                    onChange={handleEditDescChange}
                    value={editDescription}
                    name="description"
                  />
                </div>
                <button className={styles.submit_button} type="submit">
                  Send
                </button>
                <button onClick={() => setEdit(false)}>Cancel</button>
              </form>
            )}
            <hr />
          </div>
        ))
      ) : (
        <p> No Todos to Show...</p>
      )}
    </div>
  );
};

export default Profile;
