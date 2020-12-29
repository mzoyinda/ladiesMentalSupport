import React from 'react';
import './index.css';

const Index = () => {
    return(
        <div className="note">
            <div className="note-section">
                <h2 className="note-header">Live Chat</h2>
                <img className="note-img" src="/livechat.jpg" alt="livechat" />
                <p className="note-paragraph">We want you to know we will always be here to talk about whatever is on
                 your mind</p>
                 <div className="btn-wrapper">
                    <a href="https://www.tidio.com/talk/ah1isddqryi86dbqiicdsu2cpxjkysr0" target="_blank" rel="noreferrer"><div className="btn">Live Chat</div></a>
                </div>
            </div>

            <div className="note-section">
                <h2 className="note-header">NGO Support</h2>
                <img className="note-img" src="/ngos.jpg" alt="ngos" />
                <p className="note-paragraph">Here is a list of organizations that would love to provide support for you 
                during this period.</p>
                <div className="btn-wrapper">
                    <a href="/"><div className="btn">List of NGOs</div></a>
                </div>
            </div>
        </div>
    )
}

export default Index;