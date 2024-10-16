import { GoMoon, GoSun } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'

import { toggleAction } from '../../feature/themeList'
import { RootState } from '../../store'

import {
	HeaderBlock,
	HeaderButton,
	HeaderContainer,
	HeaderLink
} from './Header.styled'

export const Header = () => {
	const dispatch = useDispatch()
	const theme = useSelector((state: RootState) => state.themeList.theme)

	return (
		<HeaderBlock>
			<HeaderContainer>
				<HeaderLink to='/'>Todo</HeaderLink>
				<HeaderLink to='/list'>List</HeaderLink>
				<HeaderButton
					className='toggleButton'
					onClick={() => dispatch(toggleAction())}
				>
					{theme.name === 'light' ? <GoSun /> : <GoMoon />}
				</HeaderButton>
			</HeaderContainer>
		</HeaderBlock>
	)
}
