import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

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
			state.todos = [
				...state.todos,
				{ id: uuid(), text: action.payload, isCheck: false }
			]
		},
		updateAction: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.map(todo => {
				if (todo.id === action.payload) {
					todo.isCheck = !todo.isCheck
				}
				return todo
			})
		},
		deleteAction: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
		}
	}
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer
