import React from 'react';
import { Link } from 'react-router-dom';
import { AreaHeader } from './styled'

const Header = (props) => {
	return (
		<>
			<AreaHeader>
				<div className="container">
					<div className="brand">
						<Link to='/'>
							streamingcast
						</Link>
					</div>

					<nav>
						<ul>
							<li>
								<Link to='/'>
									Home
								</Link>
							</li>
							<li>
								<Link to='/services'>
									Manage
								</Link>
							</li>
							<li>
								<Link to='/signout'>
									SignOut
								</Link>
							</li>
						</ul>
						<div className="avatar">
							<img src={props.user.avatar} alt='User' />
						</div>
					</nav>
				</div>
			</AreaHeader>
		</>
	);
}

export default Header;