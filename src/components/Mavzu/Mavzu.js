import React from 'react';
import './Mavzu.css';
import vday from '././assets/vday.png';

export default function Mavzu() {
	return(
		<div className="mavzu">
			<h2 className="text-ceter">Mavzu tanlash</h2>
			<div className="cards">
				<div className="row">
					{/*cards*/}
					{/*1*/}
					<div className="cards_item col-xl-4 text-center">
						<div className="img_block">
							<img src={vday} className="w-100" />
						</div>
						<p>The Mosque</p>
					</div>
					{/*2*/}
					<div className="cards_item col-xl-4 text-center">
						<div className="img_block">
							<img src={vday} className="w-100" />
						</div>
						<p>The Mosque</p>
					</div>
					{/*3*/}
					<div className="cards_item col-xl-4 text-center">
						<div className="img_block">
							<img src={vday} className="w-100" />
						</div>
						<p>The Mosque</p>
					</div>
					<div className="cards_item col-xl-4 text-center">
					{/*4*/}
						<div className="img_block">
							<img src={vday} className="w-100" />
						</div>
						<p>The Mosque</p>
					</div>
					{/*5*/}
					<div className="cards_item col-xl-4 text-center">
						<div className="img_block">
							<img src={vday} className="w-100" />
						</div>
						<p>The Mosque</p>
					</div>
					{/*6*/}
					<div className="cards_item col-xl-4 text-center">
						<div className="img_block">
							<img src={vday} className="w-100" />
						</div>
						<p>The Mosque</p>
					</div>
				</div>
			</div>
		</div>
	)
}