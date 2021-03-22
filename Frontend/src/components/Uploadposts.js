import React, { useState } from 'react'
import './Uploadposts.css'
function Uploadposts() {
    const [title, setTitle] = useState("");
    const [driveLink, setdriveLink] = useState("");
    const [description, setDescription] = useState("")
    const [upload, setUpload] = useState();
    const newPost = () => {
        const uploadData = new FormData()
        uploadData.append('title', title);
        uploadData.append('driveLink', driveLink);
        uploadData.append('description', description);
        uploadData.append('upload', upload, upload.name);
        fetch("http://127.0.0.1:8000/Frontend/posts/", {
            method: 'POST',
            body: uploadData
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    return (
        <div className="formup-content-right">
            <form className="formup">
                <h1>
                    Add your post
                </h1>
                <div className="formup-inputs">
                    <label htmlFor="Title" className="formup-label">
                        Title
                    </label>
                    <input id="Title"
                        type="text"
                        name="Title"
                        className="formup-input"
                        placeholder="Enter title"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="formup-inputs">
                    <label htmlFor="link"
                        className="formup-label">
                        Google Drive Link
                    </label>
                    <input id="link"
                        type="url"
                        name="link"
                        className="formup-input"
                        placeholder="Enter the Google drive link"
                        value={driveLink} onChange={(e) => setdriveLink(e.target.value)}


                    />
                </div>
                <div className="formup-inputs">
                    <label htmlFor="image1" className="formup-label">
                        Image
                    </label>
                    <input id="image1"
                        type="file" multiple
                        name="image1"
                        className="formup-input"
                        onChange={(e) => setUpload(e.target.files[0])}
                    />
                </div>
                <div className="formup-inputs">
                    <label htmlFor="Description" className="formup-label">
                        Description
                    </label>
                    <input id="image2"
                        type="text"
                        name="Description"
                        className="formup-input"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className="formup-input-btn" type="submit" onClick={() => newPost()}>Create</button>
            </form>
        </div>
    );
}
export default Uploadposts;
