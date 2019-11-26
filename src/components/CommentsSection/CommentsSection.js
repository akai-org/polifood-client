import React from 'react';
import './CommentsSection.scss';

const CommentsSection = (props) => {
    return(
        <div className="comments">
        <h1 className="Header">Komentarze</h1>
        <div className="Comment">  
            <h3 className="Username">Dominik</h3>
            <span className="date">20-09-2019</span>
            <p className="Commenttext" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        </div>
        <div className="Comment">  
            <h3 className="Username">Dominik</h3>
            <span className="date">20-09-2019</span>
            <p className="Commenttext" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        </div>
        <div className="Comment">
            <h3 className="had">Zostaw komentarz:</h3>
            <textarea className="Area" placeholder="Remember, be nice!" rows="8"></textarea>
            <button type="submit" className="btn">Wyślij</button>
        </div>
        </div>
    );
};
export default CommentsSection;