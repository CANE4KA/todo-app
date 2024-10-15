import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ITodo } from '../models/ITodo'

export interface TodoState {
	todos: ITodo[]
}

const initialState: TodoState = {
	todos: []
}

export const todoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		createAction: (state, action: PayloadAction<string>) => {
			state.todos = [...state.todos, { text: action.payload, isCheck: false }]
		},
		updateAction: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.map((todo, index) => {
				if (index === action.payload) {
					todo.isCheck = !todo.isCheck
				}
				return todo
			})
		},
		deleteAction: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter((_, index) => index !== action.payload)
		}
	}
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer
