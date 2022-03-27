import { Link } from "react-router-dom";
import React from "react";
import '../css/About.css'

const AboutUsPage = (props) => {
    return (
        <div className="container">
            
            
            <div className="about-info">
               <div className="quote">
                <blockquote >You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose. You're on your own. And you know what you know. And you are the one who'll decide where to go.
                <br></br>
        <p className="quote-author">-Dr Seuss,<i> Oh The Places You'll Go!</i></p>
        </blockquote>
        </div>

        <h2>Why reading is so important</h2>
        <p className="about-text">
        Reading helps to expand the mind and give us more ideas. Reading has been proven to keep our minds young, healthy and sharp. <br></br>
        Reading is also a way to escape your own life, and can take you to faraway lands, other times, and put you in other people’s shoes. By viewing the world from a point of view that is not your own, you become more empathetic.
        </p>
        
        <p className="about-text">
        The following application was created by Nancy.
        This bookcase app displays a list of books that a user can
        save to a local bookcase.
        <br></br>
        Click on the "<span>Add + </span>" button to add a book to your bookcase.
        Use the search bar to find the latest books by name, author
        or description
        </p>
        <p className="last-text">So open a book and decide where you want to go...</p>
            </div>
        </div>
    )
}
export default AboutUsPage;