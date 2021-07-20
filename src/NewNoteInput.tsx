import React,{ChangeEvent, useState} from 'react'
interface Props{
  addNote(note:string):void;
}
export const NewNoteInput:React.FC<Props>=({addNote})=>{
  const [note,setNote] = useState("")
  const updateNote = (e:ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value)
  }
  const onAddNoteClick = () => {
    addNote(note)
    setNote("")
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="write notes" 
        onChange={updateNote} 
        value={note}
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  )
}
