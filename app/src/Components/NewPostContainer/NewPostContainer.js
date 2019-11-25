import React from 'react';
import { connect } from 'react-redux';
import NewPost from './NewPost/NewPost';
import {
	addNewPost,
	newPostTitleChange,
	newPostBodyChange } from '../../Reducers/post_reducer';
import Preloader from '../../Preloader/Preloader';



const NewPostContainer = (props) => {
	console.log(props)
	return (
		<>
			{props.isFetching ? <Preloader /> : null}
			<NewPost 
				addNewPost={props.addNewPost}
				isDisabled={props.isDisabled}
				newPostTitleChange={props.newPostTitleChange}
				newPostBodyChange={props.newPostBodyChange}
			/>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		isFetching: state.postPage.isFetching,
		isDisabled: state.postPage.isDisabled
	}
}

export default connect(mapStateToProps, {
	addNewPost,
	newPostTitleChange,
	newPostBodyChange
})(NewPostContainer)