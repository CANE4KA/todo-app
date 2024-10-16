import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderBlock = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	display: flex;
	align-items: center;
`

export const HeaderContainer = styled.div`
	position: relative;
	max-width: 97%;
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const HeaderLink = styled(NavLink)`
	text-decoration: none;
	padding: 10px;
	color: #fff;
	font-size: 16px;
	font-weight: 400;

	&.active {
		color: #ffffff33;
	}
`

export const HeaderButton = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	background: transparent;
	border: none;
	font-size: 25px;
	color: ${({ theme }) =>
		theme.name === 'light' ? '#fff' : theme.colors.backgroundSecondary};
`
