import React, { useState, useEffect } from 'react'
import Postscard from './Postscard'
import "./Postscard.css";
function Postcomponent() {
    const [posts, setPosts] = useState([{
        title: 'Wow! Momo',
        drivelink: "",
        description: 'This is a food chain who are growing ever so fast in India. You will find branches in Delhi, Chennai, Kochi, and many other spots. Wow! Sell burgers, Tibetan food and just about anything you can imagine. You will never go hungry when a Wow! Branch is nearby!',
        upload: 'https://uploads-ssl.webflow.com/5fadb14c46b287ad224b60b9/60538f1bb60576525b61120f_wow-momo-min.png',
    }, {
        title: 'FreshMenu',
        description: 'Fresh Menu is another delivery service. Food will be cooked and delivered to you within minutes. The company was founded in 2014. In 2016, they saw 3x growth when it came to orders. This company is a clear example of how to grow.',
        drivelink: "",
        image: 'https://uploads-ssl.webflow.com/5fadb14c46b287ad224b60b9/60392863c1c9a5eba8ea3cc1_FreshMenu-min.png',
    }, {
        title: 'Cure.Fit',
        description: 'CureFit operates a platform to a healthy power lifestyle and holistic cure across fitness, food, and mental well-being. The Company offers both digital and offline experiences across fitness, nutrition, and psychological well-being through its three products: cult.fit, eat.fit and mind.fit.',
        drivelink: "",
        upload: 'https://uploads-ssl.webflow.com/5fadb14c46b287ad224b60b9/60392870aedf9385449c49b9_CureFit-min.png',
    }])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/Frontend/posts/", {
            'method': "GET",
            headers: {
                'content-Type': 'application/json',

            }
        })
            .then(resp => resp.json())
            .then(resp => setPosts(resp))
    }, [])
    return (
        <div className="postscomp">
            {posts.map((post, index) => { return (<Postscard key={`${index}-${post.title}`} post={post} />); })}
        </div>
    )
}

export default Postcomponent
