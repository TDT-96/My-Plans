import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED, CLEAR_ALL } from '../constants/actionTypes';

const initialState = [];

export default function todos(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
          id: (state.length === 0) ? 0 : state.length + 1,
          marked: false,
          text: action.text
      }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case EDIT_TODO:
      return state.map((todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);
    case MARK_TODO:
      return state.map((todo) => todo.id === action.id ? { ...todo, marked: !todo.marked } : todo);
    case MARK_ALL:
      const areAllMarked = state.every((todo) => todo.marked);
      return state.map((todo) => ({...todo, marked: !areAllMarked}));
    case CLEAR_MARKED:
      return state.filter((todo) => todo.marked === false);
    case CLEAR_ALL:
      return []
    default:
      return state;
  }
}
