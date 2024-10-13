import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='container'>
			<h1>404 Page Not Found</h1>
			<Link to='/'>Go to home</Link>
		</div>
	)
}
