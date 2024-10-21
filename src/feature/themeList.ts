import { createSlice } from '@reduxjs/toolkit'

import { ITheme } from '../models/ITheme'

import { themes } from '../styles/themes'

export interface ThemeState {
	theme: ITheme
}

const initialState: ThemeState = {
	theme: themes['light']
}

export const themeSlice = createSlice({
	name: 'themeList',
	initialState,
	reducers: {
		toggleAction: state => {
			state.theme =
				state.theme.name === 'light' ? themes['dark'] : themes['light']
		}
	}
})

export const { toggleAction } = themeSlice.actions

export default themeSlice.reducer
