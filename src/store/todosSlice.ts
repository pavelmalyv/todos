import type { TodosState } from '@/types/todos';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TodosState = {};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
});

export default todosSlice.reducer;
