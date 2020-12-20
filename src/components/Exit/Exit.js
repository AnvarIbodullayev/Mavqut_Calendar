import React from 'react';
import './Exit.css';

import user_ava_1 from '././assets/user_ava_1.png';

export default function Exit() {
	return(
		<div className="exit">
			<div className="blur"></div>
			<div className="blur_in">
				<div className="top_name">
					<img src={user_ava_1}/>
					<h6>Ali Usmon</h6>
				</div>
				<div className="bottom_block">
					<h4>
						Rostdan ham akkauntingizdan chiqishni istaysizmi?
					</h4>
					<div className="buttons">
						<button>Ha</button>
						<button>Yo'q</button>
					</div>
				</div>
			</div>
		</div>
	)
}