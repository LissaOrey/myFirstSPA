import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message:'Hi, how are you?', likesCount: 11},
        {id: 2, message:'Love is love', likesCount: 11},
        {id: 3, message:'It\'s my second post', likesCount: 0},
        {id: 4, message:'It\'s my first post', likesCount: 22}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />
        )

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}
export default MyPosts;