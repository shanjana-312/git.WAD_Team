import React, { useState } from 'react';
const Postscard = ({ post }) => {
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const handleClick = () => setClick(!click);
    const handleClick2 = () => setClick2(!click2);
    return (
        <div className="posts-cardcontainer">
            <div>
                <div className="posts-title">
                    {post.title}
                </div>
                <div className="image-posts">
                    <img src={post.upload} alt="post-1" />
                </div>
                <div className="posts-desc">
                    {post.description}
                </div>
                <div><i onClick={handleClick} class={click ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}  ></i> <i onClick={handleClick2} class={click2 ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}></i></div>
                <div className="posts-comment">
                    <input type="text" placeholder="Add a comment" className="comm" />
                </div>
            </div>
        </div>
    )
}
export default Postscard;