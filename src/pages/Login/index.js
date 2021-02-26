import React from 'react';
import { AreaLogin, Container } from './styled'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { BtnDefaultIcon } from '../../components/Styled'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import Api from '../../Api'


const Login = ({ onReceiveGoogle, onReceiveFacebook }) => {
	const loginGoogle = async () => {
		let result = await Api.googleAuth()
		if (result) {
			onReceiveGoogle(result.user)
		} else {
			alert('erro')
		}
	}
	const loginFace = async () => {
		let result = await Api.faceAuth()
		if (result) {
			onReceiveFacebook(result.user)
		} else {
			alert('erro')
		}
	}

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="*" >
					<Container>
						<AreaLogin>
							<h2>
								Sing In
							</h2>
							<p>
								streamingcast
							</p>
							<div>
								<BtnDefaultIcon onClick={loginGoogle}>
									<EmailIcon />
									<div className="center">
										Login with Google
									</div>
								</BtnDefaultIcon>
								<BtnDefaultIcon>
									<FacebookIcon onClick={loginFace} />
									<div className="center">
										Login with Facebook
									</div>
								</BtnDefaultIcon>
							</div>
							<p>
								Join us, it's free!
							</p>
						</AreaLogin>
					</Container>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Login;