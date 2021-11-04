import React from 'react';
import { useDispatch } from 'react-redux';
import { getRandomNoteAsync } from '../redux/noteSlice';


const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getRandomNoteAsync());
  }
  return (
    <div class='jumbotron jumbotron-fluid bg-light p-4'>
      <div class='container'>
        <h1 class='display-4 my-2'>A Simple Notes App</h1>
        <button 
        type="button" 
        class="btn btn-info my-2"
        onClick= { handleClick }
        >Click here to randomly generate notes</button>

      </div>
    </div>
  );
};

export default Header;
