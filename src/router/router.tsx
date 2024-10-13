import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { ItemDescription } from '../pages/ItemDescription'
import { NotFound } from '../pages/NotFound'
import { ToDoListPage } from '../pages/ToDoListPage'

import { ITodo } from '../models/ITodo'

import { Layout } from '../layout/Layout'

const todos: ITodo[] = [
	{
		text: 'First action',
		isCheck: false
	},
	{
		text: 'Second action',
		isCheck: true
	},
	{
		text: 'Third action',
		isCheck: false
	},
	{
		text: 'Fourth action',
		isCheck: true
	}
]

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage todos={todos} />
			},
			{
				path: '/todo',
				element: <ToDoListPage />
			},
			{
				path: '/list/:id',
				element: <ItemDescription todos={todos} />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
])
