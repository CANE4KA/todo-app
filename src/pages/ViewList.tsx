import { useSelector } from 'react-redux'

import { ListItem } from '../components/listItem/ListItem'

import { RootState } from '../store'

export const ViewList = () => {
	const todoList = useSelector((state: RootState) => state.todoList.todos)

	return (
		<div className='container'>
			{todoList.map(todo => (
				<ListItem key={todo.id} todo={todo} id={todo.id} />
			))}
		</div>
	)
}
