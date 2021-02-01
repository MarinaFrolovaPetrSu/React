import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import { Logout } from './Logout';

const Header = () => {
	return (
		<>
			<header
				id="mainHeader"
				style={{
					backgroundColor: '#fff',
					boxShadow:
						'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
					position: 'relative',
					zIndex: '1',
				}}
			>
				<div style={{ display: 'flex' }}>
					<div style={{ width: '65%' }}>
						<img src={logo} alt={'logo'} />
					</div>
					<nav>
						<ul
							style={{
								margin: '18px',
								display: 'inline-flex',
								textDecoration: 'none',
							}}
						>
							<li>
									<Link to="/Map">
										<button className="btnHeader">Карта</button>
									</Link>
							</li>
							<li>
								<Link to="/Profile">
									<button className="btnHeader">Профиль</button>
								</Link>
							</li>
							<li className="linkFromHeader">
								<Logout />
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

Header.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(Header);
