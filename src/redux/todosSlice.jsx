import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: []},
  reducers: {
    addTodo(state, action) {
        // console.log(action.payload);
        state.items.push(action.payload);
    },
    deleteTodo(state, action) {
       
        state.items = state.items.filter((todo) => todo.id !== action.payload)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo} = todoSlice.actions

