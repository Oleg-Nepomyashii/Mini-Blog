export const postsAPI = {
	getAllPosts() {
		return fetch('http://localhost:3001/posts');
	},

	addNewPost(post) {
		return fetch('http://localhost:3001/posts', {
		    method: 'POST',
		    body: JSON.stringify(post),
    		headers: {
     			 "Content-type": "application/json; charset=UTF-8"
    		}
 		 });
	},

	deletePostByID(postId) {
		return fetch(`http://localhost:3001/posts/${postId}`, {
		    method: 'DELETE',
    		headers: {
     			 "Content-type": "application/json; charset=UTF-8"
    		}
 		 });
	},

	addNewView(postId , obj) {
		return fetch(`http://localhost:3001/posts/${postId}` , {
			method: 'PUT',
			headers: {
     			 "Content-type": "application/json; charset=UTF-8"
    		},
    		body: JSON.stringify(obj)
		});
	}
}