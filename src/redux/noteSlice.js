import { createSlice } from "@reduxjs/toolkit";
let initialState;
if(JSON.parse(localStorage.getItem('notesJSON'))) initialState = JSON.parse(localStorage.getItem('notesJSON'));
else{ initialState = []

}
const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        saveNote: (state, action) => {
            
            if(state.some(st => st.noteTitle === action.payload.noteTitle)){
                return state
            }else{
                return [...state,action.payload]
            }

        },
        deleteNote: (state,action) => {
            return state.filter(nt => nt.noteTitle !== action.payload);
            
        },
        editMode: (state,action) => {
            const updatedState = state.map(st=> {
                if (st.noteTitle === action.payload) {
                    return { ...st, editMode: true };
                  } else {
                    return { ...st, editMode: false };
                  }
            });
            return updatedState;
        },
        editNote:(state,action) =>{
            if(state.some(st => st.noteTitle === action.payload.noteTitle)){
                return state;
            }else{
                const updatedState =state.map(st => {
                    if(st.editMode === true)return action.payload
                    else{
                        return st
                    }
                })
                return updatedState;
                
            }
        }
    }
});



export const { saveNote,deleteNote,editMode,editNote } = noteSlice.actions;
export default noteSlice.reducer;
