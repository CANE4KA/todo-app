import { configureStore } from '@reduxjs/toolkit'

import themeReducer, { ThemeState } from './feature/themeList'
import todoReducer, { TodoState } from './feature/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export interface RootState {
	todoList: TodoState
	themeList: ThemeState
}

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		themeList: themeReducer
	},
	preloadedState: loadFromLocalStorage() as RootState
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type AppDispatch = typeof store.dispatch
