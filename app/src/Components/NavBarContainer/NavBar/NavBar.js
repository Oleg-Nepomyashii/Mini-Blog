import React from 'react';
import {NavLink,Redirect} from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = (props) => {
	return (
		<div className={style.wrapper} >
			<NavLink 
				to='/addPost' 
				className={style.btn} 
			>New Post</NavLink>

			<NavLink 
				to='/sortPosts' 
				onClick={(e) => props.sortPosts(e,props.posts)} 
				className={style.btn} 
			>Sort by view</NavLink>

			<NavLink 
				to='/sortPosts' 
				onClick={(e) => props.sortPosts(e,props.posts)} 
				className={style.btn} 
			>Sort by date</NavLink>

			<div className={style.search} >
				<form 
					onChange={(e) => props.sortPostsByText(e)}
				>
					<input type='text' name="find_text"/>
				</form>
				<NavLink 
					to='/sortPosts' 
					className={style.search_btn}
				> Search by text</NavLink>
			</div>
		</div>
	)
}

export default NavBar