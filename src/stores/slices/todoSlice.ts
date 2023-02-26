import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { fetchTodoListApi } from './todoAPI';

export type TodoState = {
  todoList: { id: string; title: string; content: string; isDone: boolean }[];
};
const initialState: TodoState = {
  todoList: [],
};

export const fetchTodoListAsync = createAsyncThunk(
  'todo/fetchTodoList',
  async () => {
    const response = await fetchTodoListApi();
    return response;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchTodoRealTime: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    updateTodoRealTime: (state, action) => {
      const targetTodo = state.todoList.find((todo) => {
        return todo.id === action.payload.id;
      });
      if (targetTodo) {
        targetTodo.isDone = action.payload.isDone;
      }
    },

    editTodoRealTime: (state, action) => {
      const targetTodo = state.todoList.find((todo) => {
        return todo.id === action.payload.id;
      });
      if (targetTodo) {
        targetTodo.content = action.payload.content;
      }
    },

    deleteTodoRealTime: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
  },
  // createTodo: (state, action) => {
  //   const newTodo = {
  //     id: uuidv4(),
  //     title: action.payload.title,
  //     content: action.payload.content,
  //     isDone: false,
  //   };
  //   state.todoList = [newTodo, ...state.todoList];
  // },
  // updateTodo: (state, action) => {
  //   const todo = state.todoList.find((todo) => {
  //     return todo.id === action.payload;
  //   });
  //   if (todo) {
  //     todo.isDone = !todo.isDone;
  //   }
  // },
  // editTodo: (state, action) => {
  //   const todo = state.todoList.find((todo) => {
  //     return todo.id === action.payload.id;
  //   });
  //   if (todo) {
  //     todo.content = action.payload.content;
  //   }
  // },
  // deleteTodo: (state, action) => {
  //   state.todoList = state.todoList.filter((todo) => {
  //     return todo.id !== action.payload;
  //   });
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchTodoListAsync.fulfilled, (state, action) => {
      state.todoList = action.payload;
    });
  },
});

export const {
  fetchTodoRealTime,
  updateTodoRealTime,
  editTodoRealTime,
  deleteTodoRealTime,
} = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodoList = (state: RootState) => state.todo.todoList;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default todoSlice.reducer;
