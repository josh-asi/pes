import React from 'react';
import { Link } from 'react-router-dom';

import wdhbLogo from '../media/WDHB_Logo.svg';
import netflixLogo from '../media/netflix.png';
import spotifyLogo from '../media/spotify.png';
import gameIcon from '../media/games.svg';

const Main = () => {
	return (
		<main className="interface">
			<header className="interface__header">
				<img src={wdhbLogo} alt="WDHB Logo" className="interface__logo wdhb-logo" />
				<h1 className="heading-primary">Welcome to Lakeview</h1>
			</header>

			<div className="interface__apps">
				<a className="interface__app interface__app--netflix" href="nflx://">
					<img src={netflixLogo} alt="Netflix logo" className="logo netflix-logo" />
					Watch
				</a>
				<a className="interface__app interface__app--spotify" href="spotify://">
					<img src={spotifyLogo} alt="Spotify logo" className="logo spotify-logo" />
					Listen
				</a>

				<Link className="interface__app interface__app--games" to="/games">
					<img src={gameIcon} alt="Game icon" className="logo game-icon" />
					Play
				</Link>
			</div>
		</main>
	);
};

export default Main;
