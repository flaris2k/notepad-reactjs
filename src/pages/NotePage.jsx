import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {

    const {title} = useParams();
    const notes = JSON.parse(localStorage.getItem('notesJSON'))|| [];
    const filteredNotes = notes?.filter(nt => nt.noteTitle === title)[0];

  return (
    <div className='h-[100vh] flex flex-col'>
    <a href='/' className='text-center font-serif bg-white font-bold text-4xl block my-4 mx-[25%] cursor-pointer text-black border-2 border-white p-2'>{title}</a>
    <div className="content text-black p-2 font-serif w-[50%] ml-[25%] h-full bg-white  overflow-auto flex-initial">
        {
            filteredNotes.note
        }
    </div>
    </div>
  )
}

export default NotePage