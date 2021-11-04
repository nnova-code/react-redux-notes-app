import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomNoteAsync = createAsyncThunk(
  'notes/getRandomNoteAsync',
  async () => {
    const response = await fetch('https://www.boredapi.com/api/activity');
    if (response.ok) {
      const note = await response.json();
      return { note };
    }
  }
);

export const noteSlice = createSlice({
  name: 'notes',
  initialState: [],

  reducers: {
    addNote: (state, action) => {
      const note = {
        id: new Date(),
        title: action.payload.title,
        content: action.payload.content,
      };
      state.push(note);
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getRandomNoteAsync.fulfilled]: (state, action) => {
      const note = {
        id: new Date(),
        title: action.payload.note.type,
        content: action.payload.note.activity,
      };
      state.push(note);
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
