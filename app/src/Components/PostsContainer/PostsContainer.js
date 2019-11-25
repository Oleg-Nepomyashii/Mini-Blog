import React , { useEffect} from 'react';
import style from './PostsContainer.module.css';
import {connect} from 'react-redux';
import AllPosts from './Post/AllPosts';
import { 
	setPost,
	getAllPosts,
	deletePost,
	addView } from '../../Reducers/post_reducer';
import Preloader from '../../Preloader/Preloader';

const PostsContainer = (props) => {
	useEffect(() => {
    	props.getAllPosts()
 	});

	return (
		<>
			{props.isFetching ? <Preloader /> : null}
			<div className={style.wrapper}>
				<AllPosts 
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
		posts: state.postPage.posts,
		isFetching: state.postPage.isFetching,
		isDisabled:state.postPage.isDisabled
	}

}

export default connect(mapStateToProps,{
	setPost,
	getAllPosts,
	deletePost,
	addView
})(PostsContainer) 