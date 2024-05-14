import { createSlice } from "@reduxjs/toolkit";
import { Walk, Workout, Drink, Sleep, Read } from "../public/icons";

const initialState = {
  todos: [
    {
      id: 1,
      icon: Workout,
      text: "Workout for 20 mins",
      completed: true,
    },
    {
      id: 2,
      icon: Read,
      text: "Read book for 15 mins",
      completed: false,
    },
    {
      id: 3,
      icon: Walk,
      text: "30 mins walk",
      completed: false,
    },
    {
      id: 4,
      icon: Sleep,
      text: "Sleep at 11 sharp",
      completed: false,
    },
    {
      id: 5,
      icon: Drink,
      text: "Drink 3L water",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
