import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBarContainer from './Components/NavBarContainer/NavBarContainer';
import PostsContainer from './Components/PostsContainer/PostsContainer';
import NewPostContainer from './Components/NewPostContainer/NewPostContainer';
import PostInfoContainer from './Components/PostInfo/PostInfoContainer';
import SortPostsContainer from './Components/SortPosts/SortPostsContainer';

const App = () => {
 	 return (
      	<BrowserRouter>
          	<Route 
          		render={() => <NavBarContainer />}
          	 />

	        <Route
	          	exact path='/'
	          	render={ () => <PostsContainer />}
	        />

	        <Route
	          	path='/addPost'
	          	render={ () => <NewPostContainer />}
	        />

	         <Route
	          	path='/postInfo'
	          	render={ () => <PostInfoContainer />}
	        />

	        <Route
	          	path='/sortPosts'
	          	render={ () => <SortPostsContainer />}
	        />
      	</BrowserRouter>
  )
}

export default App
