import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/noteSlice';

const AddNoteForm = () => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (note) {
      dispatch(
        addNote({
          title: note.title,
          content: note.content,
        })
      );
    }
  };
  return (
    <div className='col-sm-3'>
      <div className='card m-2' style={{ width: '18rem' }}>
        <form onSubmit={onSubmit} className='form-inline '>
          <div className='card-header'>
            <input
              type='text'
              name='title'
              className='form-control border-0 bg-light'
              placeholder='Title...'
              value={note.title}
              onChange={handleChange}
            />
          </div>
          <textarea
            name='content'
            className='form-control border-0 mb-2 mr-sm-2 '
            style={{ width: '100%' }}
            placeholder='Add note...'
            value={note.content}
            onChange={handleChange}
          />
          <div className='d-flex justify-content-end p-2'>
            <button
              type='submit'
              className='btn btn-primary mb-2'
              style={{ width: '6rem' }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNoteForm;
