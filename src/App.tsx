import React from 'react'
import {NewNoteInput} from './NewNoteInput';
import {useDispatch, useSelector} from 'react-redux';
import { NoteState } from './noteReduser';
import { addNote } from './actions';
import { Wrapper } from './style';
function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>((state)=>state.notes)
  //dispatcher is used to update state
  const dispatch = useDispatch()
  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }
  console.log(notes)
  return (
    <Wrapper>
      <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ol>
        {notes.map(item => {
          return <li key={item}>{item}</li>
        }
      )}
      </ol>
    </Wrapper>
  );
}

export default App;
