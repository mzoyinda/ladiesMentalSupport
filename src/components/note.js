import React from 'react';
import '../App.css'
import Blog from '../images/blog.jpg';
import Chat from '../images/livechat.jpg';
import Ngos from '../images/ngos.jpg';


function Note() {
    return(
        <div className="note">
            <div className="note-section">
                <img className="note-img" src= {Blog} alt="blog" />
                <h3 className="note-header">Blog</h3>
                <p className="note-paragraph">There is always information out there to help with everything you are going through, we want to provide all the information you would need to navigate this.</p>
                <button className="note-button">Blog</button>
            </div>

            <div className="note-section">
                <img className="note-img" src= {Chat} alt="livechat" />
                <h3 className="note-header">Live Chat</h3>
                <p className="note-paragraph">We want you to know we will always be here to talk about whatever is on your mind</p>
                <button className="note-button">Live Chat</button>
            </div>

            <div className="note-section">
                <img className="note-img" src= {Ngos} alt="ngos" />
                <h3 className="note-header">Ngos</h3>
                <p className="note-paragraph">Here is a list of organizations that would love to provide support for you during this period.</p>
                <button className="note-button">Ngos</button>
            </div>
        </div>
    )
}

export default Note;