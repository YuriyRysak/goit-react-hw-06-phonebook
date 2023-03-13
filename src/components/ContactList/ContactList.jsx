// import PropTypes from 'prop-types';
import './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleTodos } from 'redux/selectors'; 
import { deleteTodo } from 'redux/todosSlice';

export const ContactList = () => { 
  const todos = useSelector(selectVisibleTodos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteTodo(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   id: PropTypes.string,
//   deleteContact: PropTypes.func,
// };