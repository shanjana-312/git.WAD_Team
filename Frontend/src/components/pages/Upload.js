import React from 'react'

function Upload() {
    const FileSelectHandler = event => {
        console.log(event);
    }
    return (
        <div className="upload">
            Upload here!!
            <input type="file" onChange={FileSelectHandler} />
            <button>Upload</button>
        </div>
    )
}

export default Upload
