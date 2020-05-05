import { TODO_INPUT, DELETE_TODO } from "./actionType";

const initialState = {
  todos: [],
  newTodoId : 0
};

const todoReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case TODO_INPUT: {
      state.newTodoId++
      // const { id, content } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
         {
           id: state.newTodoId,
           content: action.params
         }
        ]
      };
    }
    case DELETE_TODO: {
      const newTodoList = state.todos.filter(item => item.id !== action.deleteId)
      return {
        ...state,
        todos: [
          ...newTodoList
        ]
      }
    }
    default:
      return state;
  }
};

export default todoReducer;
