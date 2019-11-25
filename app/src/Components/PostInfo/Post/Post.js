import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div className={style.post_wrapper} >
			<NavLink 
				className={style.btn_close} 
				to='/'
			>X</NavLink>			
			<h1 className={style.post_title} >{`${props.post.title[0].toUpperCase()}${props.post.title.slice(1)}`}</h1>
			<p className={style.post_text} >{`${props.post.body[0].toUpperCase()}${props.post.body.slice(1)}`}</p>
			<span className={style.time} >{props.post.time}</span>
			<span className={style.date} >{props.post.date}</span>
			<div className={style.views} >{props.post.views} views</div>
		</div>
	)
}

export default Post