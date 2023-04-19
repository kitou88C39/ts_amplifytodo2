import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export type TodoState = {
  todoList: { id: string; title: string; content: string; isDone: boolean }[];
};
const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    createTodo: (state, action) => {
      console.log('関数が呼ばれているか？');

      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        content: action.payload,
        isDone: false,
      };
      state.todoList = [newTodo, ...state.todoList];
    },
    updateTodo: (state, action) => {
      const todo = state.todoList.find((todo) => {
        return todo.id === action.payload;
      });
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    fetchTodoList: (state, action: PayloadAction<[]>) => {
      state.todoList = action.payload;
    },
    fetchReadList: (state, action: PayloadAction<[]>) => {
      state.todoList = action.payload;
    },
    //fetchTodoRealTime: (state, action: PayloadAction<[]>) => {
    //state.todoList = action.payload;
    // },
    editTodoRealTime: (state, action) => {
      const { todoId, updatedTodo } = action.payload;
      const todoIndex = state.todoList.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        state.todoList[todoIndex] = updatedTodo;
      }
    },
    updateTodoRealTime: (state, action) => {
      const id = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
    deleteTodoRealTime: (state, action) => {
      const id = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
    fetchTodoRealTime: (state, action) => {
      const id = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
    fetchTodoListAsync: (state, action) => {
      const id = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
  },
});

export const {
  createTodo,
  updateTodo,
  deleteTodo,
  editTodoRealTime,
  updateTodoRealTime,
  deleteTodoRealTime,
  fetchTodoListAsync,
  fetchTodoRealTime,
  fetchReadList,
  fetchTodoList,
} = todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.todoList;
export default todoSlice.reducer;
