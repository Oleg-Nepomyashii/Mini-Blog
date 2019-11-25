import React, {useEffect} from 'react';
import {NavLink } from 'react-router-dom';
import style from './AllPosts.module.css';

const Post = (props) => {
	return (
		props.posts.map(post => {
			return (
				<div onClick={() => props.setPost(post.id)} className={style.post_wrapper}>
					<NavLink onClick={() => props.addView(post.id , post)} className={style.redirect} to={`/postInfo/${post.id}`}>
						<h1 className={style.title} >{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</h1>
						<p className={style.post_text} >{`${post.body[0].toUpperCase()}${post.body.slice(1)}`}</p>
						<span className={style.time} >{post.time}</span>
						<span className={style.date} >{post.date}</span>
						<div className={style.views} >{post.views} views</div>
					</NavLink>
					<button 
						className={style.delete_btn}
						disabled={props.isDisabled} 
						onClick={() => props.deletePost(post.id)}
					>DELETE</button>
				</div>		
			)
		})
	)
}

export default Post
 