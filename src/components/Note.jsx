import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/noteSlice';

const Note = ({ id, title, content }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteNote({ id }));
  };

  return (
    <div className='col-sm-3'>
      <div className='card m-2'>
        <div className='card-header py-3'>{title}</div>
        <div className='card-text p-3'>{content}</div>
        <div className='d-flex justify-content-end p-2'>
          <button onClick={handleDeleteClick} className='btn btn-danger mx-2'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
