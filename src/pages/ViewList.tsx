import { FC } from 'react'

import { ListItem } from '../components/listItem/ListItem'

import { ITodo } from '../models/ITodo'

interface IViewList {
	todos: ITodo[]
}

export const ViewList: FC<IViewList> = ({ todos }) => {
	return (
		<div className='container'>
			{todos.map((todo, index) => (
				<ListItem key={index} todo={todo} id={index} />
			))}
		</div>
	)
}
