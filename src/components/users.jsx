import React, {useState} from "react";
import api from "../api"

const Users = () => {
  console.log(api.users.fetchAll());
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter(user => user!=userId))
    console.log(users.length)
  };
  const renderPhrase = (number) => {
    number = users.length;
    return number === 1 || number >= 5 ? <h2>{number} человек тусанет с тобой сегодня</h2> 
    : number === 0 ? <h2>Никто с тобой не тусанет сегодня</h2> 
    : <h2>{number} человека тусанут с тобой сегодня</h2>
  };
  const getBageClasses = ()=> {
    let classes = "badge ";
    classes += users.length === 0 ? "bg-dangery" : "bg-primary"; 
    return classes;
  };
  //if (users.length === 0 ) {
    //<span className={getBageClasses()}>{renderPhrase()}</span>
  //}
  return (
    <>
      <span className={getBageClasses()}>{renderPhrase()}</span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
            key = {user._id}>
              <td>{user.name}</td>
              <td>{user.name}</td>
              <td>{user.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
              <button 
              className="btn btn-danger"
              onClick={() => handleDelete(user)}>
                Delete
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;