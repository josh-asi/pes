import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../media/back.png';
import crosswordIcon from '../media/Games/Crossword.jpg';
import sudokuIcon from '../media/Games/Sudoku.jpg';
import tetrisIcon from '../media/Games/Tetris.jpg';

import '../styles/_games.scss';

const Games = () => {
	return (
		<div className="games">
			<Link className="games__return" to="/">
				<img src={backIcon} alt="Back icon" className="games__back-icon" />
				Take me back
			</Link>

			<div className="games__header heading-secondary">Games</div>

			<div className="games__content">
				<a href="nytxwd://" className="games__game games__game--crossword">
					<img src={crosswordIcon} alt="Crossword Icon" className="games__icon crossword" />
					Crossword
				</a>
				<a href="fb352087441476409://" className="games__game games__game--sudoku">
					<img src={sudokuIcon} alt="Sudoku Icon" className="games__icon sudoku" />
					Sudoku
				</a>
				<a href="fb201726756564188://" className="games__game games__game--tetris">
					<img src={tetrisIcon} alt="Tetris Icon" className="games__icon tetris" />
					Tetris
				</a>
			</div>
		</div>
	);
};

export default Games;
