import React from 'react';
import { PrivateRoute } from './PrivateRoute';
import { Map } from './Map';
import Profile from './Profile';
import { LogInWithAuth } from './logInPage';
import { Register } from './Register';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import background from './img/background.png';

const App = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
			}}
		>
			<main>
				<section>
					<Switch>
						<PrivateRoute path="/map" component={Map} />
						<PrivateRoute path="/profile" component={Profile} />
						<Route exact path="/" component={LogInWithAuth} />
						<Route exact path="/register" component={Register} />
					</Switch>
				</section>
			</main>
		</div>
	);
};

export default App;
