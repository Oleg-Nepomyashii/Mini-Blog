import React , { useEffect} from 'react';
import style from './SortPostsContainer.module.css';
import {connect} from 'react-redux';
import SortPosts from './SortPosts/SortPosts';
import { 
	setPost,
	getAllPosts,
	deletePost,
	addView } from '../../Reducers/post_reducer';
import Preloader from '../../Preloader/Preloader';

const SortPostsContainer = (props) => { 
	return (
		<> 
		{props.isFetching ? <Preloader /> : null}
		<div className={style.wrapper}>
			<SortPosts 
				posts={props.posts}
				setPost={props.setPost}
				deletePost={props.deletePost}
				addView={props.addView}
				isDisabled={props.isDisabled}
			/>
		</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		posts: state.postPage.sortPosts,
		isFetching: state.postPage.isFetching,
		isDisabled: state.postPage.isDisabled
	}

}

export default connect(mapStateToProps,{
	setPost,
	getAllPosts,
	deletePost,
	addView
})(SortPostsContainer)