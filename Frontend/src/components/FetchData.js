import React, { useState, useEffect } from 'react'

function FetchData() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/admin/Frontend/post/', {
            'method': 'GET',
            headers: {
                'content-Type': 'application/json',
                'Authorization': 'Token 7370120907b5c5b705eb43ac6520e8a84968f9a2'
            }
        }).then(resp => resp.json())
            .then(resp => setPosts(resp))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="fetchposts">
            <h1></h1>
            {posts.map(post => {
                return <div>{post.title}</div>
            })}
        </div>
    )
}

export default FetchData
