import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	place-items: center;
	height:100vh;
	background-image: url('../../../background-login.jpg');
	background-size: cover;
	background-position: center;

	@media(max-width:1080px){
		background-image: none;
		background-color: #15072b;
	}
`
export const AreaLogin = styled.div`
	background-color: rgba(20,20,20,0.98);
	padding: 2rem;
	text-align: center;
	width:500px;
	border-radius: 5px;
	box-shadow: 0 0 10px #1C1919;
	color:#E8E8E8;

	@media(max-width:1080px){
		width:300px;
	}

	div{
		padding:0.5rem;
	}
	a{
		color:#fff;
	}
	p{
		font-size:.9rem;
		color: rgba(232,232,232, .8);
	}
	.iconTitle{
		display: flex;

		a{
			color:#E8E8E8;
		}
	}
`