import { createBrowserRouter } from 'react-router-dom'

import { ToDoList } from '../pages/ToDoList'
import { ViewList } from '../pages/ViewList'
import { ViewListItem } from '../pages/ViewListItem'
import { NotFound } from '../pages/not-found/NotFound'

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
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <ToDoList />
			},
			{
				path: '/list',
				element: <ViewList todos={todos} />
			},
			{
				path: '/list/:id',
				element: <ViewListItem todos={todos} />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
])
