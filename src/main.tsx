import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/scss/style.scss'
import { ToDoListPage } from './pages/ToDoListPage'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ToDoListPage />
	</StrictMode>
)
