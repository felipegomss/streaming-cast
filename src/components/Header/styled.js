import styled from 'styled-components'

export const AreaHeader = styled.div`
	background-image: linear-gradient(to right, #141414 , #000);
	color: #E8E8E8;

	.container{
		padding: 0.5rem 2rem;
		display: flex;
		align-items: center;
	}

		.brand{
			flex: 1;
			font-size: 2rem;
			font-style: italic;
			font-weight: 100;
		}

		nav{
				display: flex;
			ul{
				display: flex;
			}
				li{
					list-style: none;
					margin-left: 1rem;
				}
			.avatar{
				display: flex;
				align-items: center;

				img{
					max-width: 30px;
					border-radius: 100%;
					margin-left: 1rem;
					cursor: pointer;
				}	
			}
		}
	a {
		text-decoration: none;
		color: #E8E8E8;

		&:hover{
						color: #fff;
						border-bottom: 1px solid #fff;
					}
	}
`