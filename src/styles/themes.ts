import { ITheme } from '../models/ITheme'

const light: ITheme = {
	name: 'light',
	colors: {
		backgroundPrimary: '#4682b4',
		backgroundSecondary: 'rgb(237, 240, 241)'
	}
}

const dark: ITheme = {
	name: 'dark',
	colors: {
		backgroundPrimary: 'black',
		backgroundSecondary: 'gray'
	}
}

export const themes = {
	light,
	dark
}
