import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import { store } from './store'
import { GlobalStyle } from './styles/GlobalStyle'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
)
