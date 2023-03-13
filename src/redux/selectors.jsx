import { createSelector } from "@reduxjs/toolkit";

export const getTodos = state => state.todos.items;

const getFilter = (state) => state.filter.value;

export const selectVisibleTodos = createSelector(
    [getTodos, getFilter],
    (todos, filter) => {
      return todos.filter(todo => todo.name.toLowerCase().includes(filter.toLowerCase()))
      
 })