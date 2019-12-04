import React from 'react';
import './CommentsSection.scss';
import burger from '../../assets/icons/burger.svg';
import burger2 from '../../assets/icons/burger-2.svg';

const CommentsSection = (props) => {
    return(
        <div className="comments">
        <h1 className="Header">Komentarze</h1>
        <div className="Comment">  
            <h3 className="Username">Dominik</h3>
            <div className="burgers">
                <img src={burger2} alt="icon-1" className="burger" />
                <img src={burger2} alt="icon-1" className="burger" />
                <img src={burger} alt="icon-1" className="burger" />
                <img src={burger} alt="icon-1" className="burger" />
                <img src={burger} alt="icon-1" className="burger" />
            </div>
            <span className="date">20-09-2019</span>
            <p className="Commenttext" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        </div>
        <div className="Comment">  
            <h3 className="Username">Dominik</h3>
            <div className="burgers">
                <img src={burger2} alt="icon-1" className="burger" />
                <img src={burger2} alt="icon-1" className="burger" />
                <img src={burger2} alt="icon-1" className="burger" />
                <img src={burger2} alt="icon-1" className="burger" />
                <img src={burger} alt="icon-1" className="burger" />
            </div>
            <span className="date">20-09-2019</span>
            <p className="Commenttext" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        </div>
        <div className="Comment">
            <h3>Zostaw komentarz:</h3>    
                <input className="name" placeholder="Imię"></input>
                <div className="burgers">
                    <img src={burger} alt="icon-1" className="burger" />
                    <img src={burger} alt="icon-1" className="burger" />
                    <img src={burger} alt="icon-1" className="burger" />
                    <img src={burger} alt="icon-1" className="burger" />
                    <img src={burger} alt="icon-1" className="burger" />
                </div>
            <textarea className="Area" placeholder="Remember, be nice!" rows="8"></textarea>
            <button type="submit" className="btn">Wyślij</button>
        </div>
        </div>
    );
};
export default CommentsSection;