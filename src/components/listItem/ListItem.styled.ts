import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListItemLink = styled(Link)<{ $isCheck: boolean }>`
	text-decoration: none;
	padding: 10px;
	color: ${props => (props.$isCheck ? 'green' : 'red')};
`
