import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NoteGrid from './components/NoteGrid';
import AddNoteForm from './components/AddNoteForm';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <AddNoteForm />
          <NoteGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
