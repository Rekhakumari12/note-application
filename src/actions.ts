export type Action = {
  type:"ADD_NOTE";
  payload:string
}
//import {Action} from './noteReduser'
export const addNote = (note:string):Action => ({
  type:"ADD_NOTE",
  payload:note,
})