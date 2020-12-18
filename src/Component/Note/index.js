import React from 'react';
import './index.css';

const Index = () => {
    return(
        <div className="note">
            <div className="note-section">
                <img className="note-img" src="/blog.jpg" alt="blog" />
                <h2 className="note-header">Blog</h2>
                <p className="note-paragraph">There is always information out there to help with everything you are going through, we want to provide all the information you would need to navigate this.</p>
                <button className="note-button">Blog</button>
            </div>

            <div className="note-section">
                <img className="note-img" src="/livechat.jpg" alt="livechat" />
                <h2 className="note-header">Live Chat</h2>
                <p className="note-paragraph">We want you to know we will always be here to talk about whatever is on your mind</p>
                <button className="note-button">Live Chat</button>
            </div>

            <div className="note-section">
                <img className="note-img" src="/ngos.jpg" alt="ngos" />
                <h2 className="note-header">Ngos</h2>
                <p className="note-paragraph">Here is a list of organizations that would love to provide support for you during this period.</p>
                <button className="note-button">Ngos</button>
            </div>
        </div>
    )
}

export default Index;