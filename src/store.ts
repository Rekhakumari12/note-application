import {createStore} from 'redux'
import { notesReduser } from './noteReduser'
export const store = createStore(notesReduser)
