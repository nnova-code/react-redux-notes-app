import {createSlice} from '@reduxjs/toolkit';

export const noteSlice = createSlice ({
  name: 'notes',
  initialState: [
    { id:1, title: 'note2', content: 'Some note content here.'},
    { id:2, title: 'note3', content: 'Some special content here.'},
    { id:3, title: 'note1', content: 'Some note content here.'},
  ],

  reducers: { 
    addNote: (state, action) => {
      const note = {
        id: new Date(),
        title: action.payload.title,
        content: action.payload.content
      };
      state.push(note);
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;