import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { Header } from '../components/header/Header'

export const Layout = () => {
	return (
		<>
			<HelmetProvider>
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
		</>
	)
}
