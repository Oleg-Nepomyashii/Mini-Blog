import { postsAPI } from '../Api/Api';

import {
	GET_ALL_POSTS,
	ADD_POST,
	GET_POST_INFO,
	DELETE_POST,
	SET_VIEW,
	SORT_POSTS,
	SORT_VALUE,
	SET_FETCHING,
	SET_DISABLE,
	POST_BY_TEXT,
	NEW_POST_TITLE_CHANGE,
	NEW_POST_BODY_CHANGE
} from '../Constants/Constants'



const initialState = {
	isFetching: false,
	isDisabled: false,
	posts: [],
 	currentPost: null,
 	sortPosts: [],
 	sortBy: '',
 	newPostTitleChange:'',
 	newPostBodyChange: ''
}

const postReducer = (state = initialState , action) => {
	switch(action.type) {
		case GET_ALL_POSTS: {
			return {
				...state,
				posts: [...action.posts]
			}
		}

		case ADD_POST: {
			return {
				...state,
				posts: [action.post, ...state.posts ] 
			}
		}

		case GET_POST_INFO: {
			return {
				...state,
				currentPost: state.posts.filter(post => post.id === action.id)
			}
		}

		case DELETE_POST: {
			return {
				...state,
				sortPosts: state.sortPosts.filter(post => post.id !== action.id),
				posts : state.posts.filter(post => post.id !== action.id)
			}
		}

		case SET_VIEW: {
			return {
				...state,
				posts: state.posts.map(post => {
					if(post.id === action.id) {
						return {...post , views: post.views + 1}
					}
					return post;
				})
			}
		}

		case SORT_POSTS: {
			return {
				...state ,
				sortPosts: [...action.sortPost]
			}
		}

		case SORT_VALUE: {
			return {
				...state,
				sortBy: action.value
			}
		}

		case SET_FETCHING: {
			return {
				...state ,
				isFetching: action.value
			}
		}

		case SET_DISABLE: {
			return {
				...state ,
				isDisabled: action.value
			}
		}

		case POST_BY_TEXT: {
			return {
				...state,
				sortPosts: state.posts.filter(post => post.title.includes(action.text) || post.body.includes(action.text))
			}
		}

		case NEW_POST_TITLE_CHANGE: {
			return {
				...state,
				newPostTitleChange: action.value
			}
		}

		case NEW_POST_BODY_CHANGE: {
			return {
				...state,
				newPostBodyChange: action.value
			}
		}

		default:
			return state
	}
}



const getPosts = (posts) => {
	return {
		type: GET_ALL_POSTS,
		posts
	}
}

export const setPost = (id) => {
	return {
		type: GET_POST_INFO,
		id
	}
}

const deleteSortPost = (id) => {
	return {
		type: DELETE_POST,
		id
	}
}

const setView = (id) => {
	return {
		type: SET_VIEW,
		id
	}
}

export const sortPosts = (e,posts) => {
	let value;
	if(e.target.innerText === 'Sort by view') {value = 'views'}
	if(e.target.innerText === 'Sort by date') {value = 'date'}
	const sortPost = posts.sort((nextPost , prevPost) => {
		if(nextPost[value] < prevPost[value]) return 1;
		if(nextPost[value] === prevPost[value]) return 0;
		if(nextPost[value] > prevPost[value]) return -1;
	})

	return { 
		type: SORT_POSTS,
		sortPost
	}
}

export const sortValue = (value) => {
	return {
		type: SORT_VALUE,
		value
	}
}

export const sortPostsByText = (e) => {
	e.preventDefault()
	return (dispatch) => {
		dispatch(postByText(e.target.value));
	}
}

export const newPostTitleChange = (e) => {
	const value = e.target.value;
	return {
		type: NEW_POST_TITLE_CHANGE,
		value
	}
}

export const newPostBodyChange = (e) => {
	const value = e.target.value;
	return {
		type: NEW_POST_BODY_CHANGE,
		value
	}
}


export const postByText = (text) => {
	return {
		type: POST_BY_TEXT,
		text
	}
}

const setFetching = (value) => {
	return {
		type: SET_FETCHING,
		value
	}
}

const setDisable = (value) => {
	return {
		type: SET_DISABLE,
		value
	}
}

export const getAllPosts = () => {
	return (dispatch) => {
		postsAPI.getAllPosts()
			.then(response => response.json())
		  	.then(json => dispatch(getPosts(json)))
	}
}

export const addNewPost = (e) => {
	e.preventDefault()
	const data = new FormData(e.target);
	const dataObj = Array.from(data.entries()).reduce((accum , item) => {
		accum[item[0]] = item[1];
		return accum;
	}, {})
	e.target.reset()

	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();

	const currentHours = currentDate.getHours();
	const currentMinutes = currentDate.getMinutes();

	dataObj.date = `${currentDay}.${currentMonth}.${currentYear}`;
	dataObj.time = `${currentHours}:${currentMinutes}`;
	dataObj.views = 0;
	
	return (dispatch) => {
		dispatch(setFetching(true))
		dispatch(setDisable(true))
		postsAPI.addNewPost(dataObj)
			.then(response => response.json())
			.then(json => {
				dispatch(setFetching(false))
				dispatch(setDisable(false))
				alert('Post created successfull')	
			})
			.catch(reject => {
				alert('sorry , server problem')
				dispatch(setFetching(false))
			})
	}
}

export const deletePost = (id) => {
	return (dispatch) => {
		dispatch(setFetching(true))
		dispatch(setDisable(true))
		postsAPI.deletePostByID(id)
			.then(response => {
				dispatch(setFetching(false))
				dispatch(setDisable(false))
				dispatch(deleteSortPost(id))			
			})
			.catch(reject => {
				alert('sorry , server problem')
				dispatch(setFetching(false))
			})
	}	
}

export const addView = (id , obj) => {
	obj.views = obj.views + 1;
	return (dispatch) => {
		dispatch(setFetching(true))
		dispatch(setDisable(true))
		postsAPI.addNewView(id , obj)
			.then(response => {
				dispatch(setFetching(false))
				dispatch(setDisable(false))
			})
			.catch(reject => {
				alert('sorry , server problem')
				dispatch(setFetching(false))
			})
	}
}

export default postReducer