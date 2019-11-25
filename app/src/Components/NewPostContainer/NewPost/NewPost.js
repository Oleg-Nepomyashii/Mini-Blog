import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NewPost.module.css';

const NewPost = (props) => {
	return (
		<div className={style.contact_wrapper}>
                <h2 
                    className={style.post_title}
                >Create New Post</h2>

                <NavLink 
                    to='/'
                    className={style.btn_close} 
                >X</NavLink>
                <form 
                    onSubmit={props.addNewPost} 
                    className={style.new_post_form} 
                >
                    <div className={style.inner} >
                        <label 
                            className={style.form_label} 
                            htmlFor='new_post_title' 
                        >Title</label>
                        <input 
                            onChange={props.newPostTitleChange} 
                            className={style.post_text} 
                            id="new_post_title" 
                            type='text' 
                            name='title' 
                            required
                        />
                    </div>
                    <div className={style.inner} >
                        <label 
                            className={style.form_label} 
                            htmlFor='new_post_text'
                        >Post Content</label>
                        <textarea 
                            onChange={props.newPostBodyChange} 
                            className={style.post_text} 
                            id='new_post_text' type='text' 
                            name='body' 
                            required
                        ></textarea>
                    </div>
                    <button 
                        disabled={props.isDisabled} 
                        className={style.btn_create} 
                    >Create</button>
                </form>
        </div>
	)
}

export default NewPost