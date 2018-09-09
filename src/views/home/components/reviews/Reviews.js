import React, { Component } from 'react';
import './Reviews.css';
import Jan from '../../../../assets/pictures/jan.png';
import Daniel from '../../../../assets/pictures/Daniel.png';
import DuoContainer from '../../../../components/duocontainer/DuoContainer';
import Christian from '../../../../assets/pictures/christian.png';
import Business from '../../../../assets/pictures/Business.png';
import ReviewItem from './review-item/ReviewItem';


class Reviews extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Customer Reviews</h1>
                <DuoContainer>
                    <div>
                        <p className="quote"><em>"I love the variety of salesmen at Dunder Mifflin, very diverse,
                            they really know how to fill my paper needs!"</em></p>
                        <p className="quote-by" >Jan Levinson <br/>Scranton White Pages</p>
                    </div>
                    <img className="d-inline-block w-50 quote-img" src={ Jan } alt="Jan Customer Review" />
                </DuoContainer>
                <hr className="rotate-left"/>
                <DuoContainer>
                    <img className="d-inline-block w-50 quote-img" src={ Daniel } alt="Daniel Customer Review" />
                    <div>
                        <p className="quote" ><em>"I have dealt with Dwight and Dunder Mifflin for over 20 years; 
                            very intense and professional"</em></p>
                        <p className="quote-by" >Daniel Schofield <br />HarperCollins Publishing</p> 
                    </div>
                </DuoContainer>
                <hr className="rotate-right"/>  
                <DuoContainer>
                    <div>
                        <p className="quote" ><em>“The customer service here was awesome, 
                            the salesperson took me out to chillis! We ate ribs and split a blooming onion, 
                            I love Dunder Mifflin! They will have our business for years to come!”</em></p>
                        <p className="quote-by" >Christian Deloda<br />Lackawanna County Township</p> 
                    </div>
                    <img className="d-inline-block w-50 quote-img" src={ Christian } alt="Christian Customer Review" />
                </DuoContainer>
                <hr className="rotate-left"/>
                <DuoContainer>
                    <img className="d-inline-block w-50 quote-img" src={ Business } alt="Tom Customer Review" />
                    <div>
                        <p className="quote" ><em>"Great Company, even better service, 
                            and once we even won a 50% discount from a golden ticket in Willy Wonka fashion"</em></p>
                        <p className="quote-by" >Tom Smith<br />Blue Cross</p> 
                    </div>
                </DuoContainer>
            </div>
        )
    }

}

export default Reviews;

