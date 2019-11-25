import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar/NavBar';
import {
	sortPosts,
	sortValue,
	sortPostsByText } from '../../Reducers/post_reducer';

const NavBarContainer = (props) => {
	return (
		<NavBar
			sortPosts={props.sortPosts}
			posts={props.posts}
			sortValue={props.sortValue}
			sortPostsByText={props.sortPostsByText}
		/>
	)
}

const mapStateToProps = (state) => {
	return {
		posts: state.postPage.posts
	}
}

export default connect(mapStateToProps,{
	sortPosts,
	sortValue,
	sortPostsByText
})(NavBarContainer) 