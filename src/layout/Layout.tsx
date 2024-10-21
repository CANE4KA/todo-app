import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/header/Header'

import { RootState } from '../store'
import { GlobalStyle } from '../styles/GlobalStyle'

export const Layout = () => {
	const theme = useSelector((state: RootState) => state.themeList.theme)

	return (
		<>
			<ThemeProvider theme={theme}>
				<HelmetProvider>
					<GlobalStyle />
					<Helmet>
						<meta charSet='UTF-8' />
						<meta
							name='viewport'
							content='width=device-width, initial-scale=1.0'
						/>
						<link rel='preconnect' href='https://fonts.googleapis.com' />
						<link
							rel='preconnect'
							href='https://fonts.gstatic.com'
							crossOrigin=''
						/>
						<link
							href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
							rel='stylesheet'
						/>
						<title>Todo App by CANE4KA</title>
					</Helmet>
					<Header />
					<Outlet />
				</HelmetProvider>
			</ThemeProvider>
		</>
	)
}
