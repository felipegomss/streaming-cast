import styled from 'styled-components'

export const CardService = styled.div`
	display:flex;
	flex-direction:row;
 	text-align: center;
	width:20vw;
	justify-content: center;
	border: 1px solid #E8E8E8;
	color:#E8E8E8;
	margin: 1rem;
	
		img{
			max-width:25rem;
			margin: 0;
			filter: grayscale(100%);
			transition: .2s linear;
			&:hover{
				filter: grayscale(0);
			}
		}
		@media (max-width:1080px){
			width:80vw;
			img{
			max-width:10rem;
			filter: grayscale(0);
		}
	}
`

export const Container = styled.div`
	display:flex;
	flex-direction:row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 3rem 0;
`