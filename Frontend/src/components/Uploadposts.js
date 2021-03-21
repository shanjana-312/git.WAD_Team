import React from 'react'
import './Uploadposts.css'
function Uploadposts() {
    return (
        <div className="form-content-right">
            <form className="formsignup" >
                <h1>
                    Add your post
                </h1>
                <div className="form-inputs">
                    <label htmlFor="Title" className="form-label">
                        Title
                    </label>
                    <input id="Title"
                        type="text"
                        name="Title"
                        className="form-input"
                        placeholder="Enter title"

                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="link"
                        className="form-label">
                        Google Drive Link
                    </label>
                    <input id="link"
                        type="url"
                        name="link"
                        className="form-input"
                        placeholder="Enter the Google drive link"


                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="image1" className="form-label">
                        Image
                    </label>
                    <input id="image1"
                        type="file"
                        name="image1"
                        className="form-input"

                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="image2" className="form-label">
                        Sub Image
                    </label>
                    <input id="image2"
                        type="file"
                        name="image"
                        className="form-input"


                    />
                </div>
                <button className="form-input-btn" type="submit">Create</button>
            </form>
        </div>
    );
}
export default Uploadposts;