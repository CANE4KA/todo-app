import { createBrowserRouter } from 'react-router-dom'

import { ToDoList } from '../pages/ToDoList'
import { ViewList } from '../pages/ViewList'
import { ViewListItem } from '../pages/ViewListItem'
import { NotFound } from '../pages/not-found/NotFound'

import { Layout } from '../layout/Layout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <ToDoList />
			},
			{
				path: '/list',
				element: <ViewList />
			},
			{
				path: '/list/:id',
				element: <ViewListItem />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
])
