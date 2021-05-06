import React, { useState, useEffect } from 'react';
const Postscard = ({ post }) => {
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const handleClick = () => setClick(!click);
    const handleClick2 = () => setClick2(!click2);
    const [comment, setComment] = useState("");
    const handleClick3 = e => {
        e.preventDefault();
        alert(" Comment Added : " + comment);
    }
    const handleChange = e => {
        setComment(e.target.value);

    }
    useEffect(() => {

    }, [])
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
                <div><i onClick={handleClick} class={click ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}  ></i>
                    <i onClick={handleClick2} class={click2 ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}></i></div>
                <div className="posts-comment">
                    <input type="text" name="comment" placeholder="Add a comment" value={comment} className="comm" onChange={handleChange} />
                    <button className="addcomm" onClick={handleClick3}>+</button>
                </div>
            </div>
        </div >
    )
}
export default Postscard;
