import React from 'react'
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { deleteNote, editMode } from '../redux/noteSlice';
const Note = ({ noteTitle }) => {
    const dispatch = useDispatch();


    return (                 
        <div className="note flex w-full bg-white  my-2
        font-bold text-xl shadow-xl shadow-center  shadow-black border-2 border-black justify-between items-center">
            <a href={`/note/${noteTitle}`} className='block w-full flex hover:bg-gray-300 transition-75 h-full justify-center items-center'>
                <div className='my-auto'>{noteTitle}</div>
            </a>
            <b onClick={(e) => { dispatch(editMode(noteTitle)) }} className='bg-black mx-auto p-4 h-full hover:text-blue-500 transition ease-in-out text-white cursor-pointer'>
                <FaPencil />
            </b>
            <b onClick={(e) => { dispatch(deleteNote(noteTitle)) }} className='bg-black mx-auto p-4 h-full hover:text-red-500 transition ease-in-out text-white cursor-pointer'>
                <FaTrash />
            </b>
        </div>
    )
}

export default Note