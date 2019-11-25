import React from 'react';
import preloader from '../assets/icons/30.gif';
import style from './Preloader.module.css';

const Preloader = (props) => {
	return (
		<div className={style.preloader_wrapper} >
			<img src={preloader} />
		</div>
	)
}

export default Preloader 