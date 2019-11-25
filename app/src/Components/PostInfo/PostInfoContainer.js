import React from 'react';
import { connect } from 'react-redux';
import Post from './Post/Post';
import Preloader from '../../Preloader/Preloader';

const PostInfoContainer = (props) => {
	console.log(props)
	return (
		<>
			{props.isFetching ? <Preloader /> : null}
			<Post 
				post={props.currentPost}
			/>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		currentPost: state.postPage.currentPost[0],
		isFetching: state.postPage.isFetching,
	}
}

export default connect(mapStateToProps)(PostInfoContainer)