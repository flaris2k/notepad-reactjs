import { useDispatch, useSelector } from "react-redux";
import NavReact from "./components/NavReact";
import { useEffect, useState } from "react";
import { editMode, editNote, saveNote } from "./redux/noteSlice";
import Note from "./components/Note";
function App() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [error,setError] = useState('invisible');

  const dispatch = useDispatch();
  const {notes} = useSelector(state => state);
  localStorage.setItem('notesJSON', JSON.stringify(notes));




  let submitMode = notes?.filter(nt => nt?.editMode == true);

  useEffect(()=>{
    if(submitMode?.length != 0){
      console.log('submit mode',submitMode)
      setNoteTitle(submitMode[0]?.noteTitle);
      setNoteContent(submitMode[0]?.note)
    }else{
      console.log('edit mode deactive')
      
    }
  },[notes])
 
  console.log(submitMode);


  return (
    <div className="App">
      <NavReact/>
      <div className="wrong text-red-600 text-center text-xl invisible">Something went wrong!</div>
      <div className="notes flex flex-wrap w-[30%] ml-[35%]">
        <input value={noteTitle} className="my-2 w-full text-xl p-2 outline-none" placeholder="Title" type="text" onChange={(e)=>{setNoteTitle(e.target.value)}} />
        <textarea placeholder="Note" value={noteContent} className="text-xl p-2 w-full outline-none" rows='6' onChange={(e)=>{setNoteContent(e.target.value)}}/>
        {
          submitMode?.length != 0 ? <button onClick={()=>{dispatch(editNote({noteTitle:noteTitle,note:noteContent,editMode:false}))}}  className="note bg-black font-bold text-white w-full border-2 shadow-md shadow-white shadow-center text-center text-xl p-4 my-2">
          Edit
        </button> : <button onClick={()=>{dispatch(saveNote({ noteTitle:noteTitle, note:noteContent,editMode:false }))}} className="note bg-black font-bold text-white w-full border-2 shadow-md shadow-white shadow-center text-center text-xl p-4 my-2">
          Submit
        </button>
        }
        {
          notes?.map((nt,key) =>(
            <Note key={key} noteTitle={nt?.noteTitle}/>
            ))
        }
      </div>
      

    </div>
  );
}

export default App;
