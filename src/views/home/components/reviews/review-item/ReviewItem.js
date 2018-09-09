import React from 'react';
import Jan from '../../../../../assets/pictures/jan.png';
import './ReviewItem.css';

const ReviewItem = () => {
    return (
        <div className="review-wrapper">
            <div className="review-image-wrapper">
                <img className="review-image" src={ Jan } width="75" alt={ Jan } />
             </div>
             <h4 className="quote-by-card">Jan Levinson <br /> Scranton White Pages</h4>
             <div className="quote-wrapper">
                <p className="quote-card">"I love the variety of salesmen at Dunder Mifflin, very diverse,
                            they really know how to fill my paper needs!"</p>
            </div>
        </div>
    )
}

export default ReviewItem;