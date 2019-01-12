import React, { Component } from 'react';
import './CarouselCompany.css';
import Flickity from 'react-flickity-component';
import CompanyItem from './carousel-item/CompanyItem';

class CarouselCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options : {
                initialIndex: 2,
                autoplay: 1000,
                adaptiveHeight: true,
                wrapAround: true,
                prevNextButtons: false,
            }
        }
    }

    render() {
        return (
            <div className="carousel-container">
                <h2 className="title">The Dunder Mifflin Difference</h2>
                <div className="CarouselCompany__carousel-container">
                <Flickity
                    className={'carousels'} // default ''
                    elementType={'div'} // default 'div'
                    options={this.state.options} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate>
                        <CompanyItem 
                            icon="hospital"
                            title="We Supply Local Hospitals"
                            text="We have been supplying all local hospitals in Lackawanna & neighboring Counties For over 10 years without fail."
                            linkText="Learn More"
                            link="/#"></CompanyItem>
                        <CompanyItem 
                            icon="users"
                            title="We Believe In Family"
                            text="We love family so much here at Dunder Mifflin that even our very own Regional Manager concieved a child on premise."
                            linkText="Our Team"
                            link="/#"></CompanyItem>
                        <CompanyItem
                            icon="hand-holding-heart"
                            title="Personal Liason"
                            text="Every account is assigned it's own personal salesperson, on call, 5-days a week, whose goal is to satisfy all your paper needs."
                            linkText="Learn More"
                            link="/#"></CompanyItem>
                        <CompanyItem
                            icon="people-carry"
                            title="Quality Assurance"
                            text="We treat our paper with the utmost respect and guarantee that you will love the quality of our products."
                            linkText="Our History"
                            link="/#"></CompanyItem>
                        <CompanyItem
                            icon="shopping-cart"
                            title="Now Serving Residential"
                            text="Thanks to our new website, residential customers can now buy their favorite Dunder Mifflin products online!"
                            linkText="Learn More"
                            link="/#"></CompanyItem>
                </Flickity>
                </div>
                <br/>
                <br/>
            </div>
            
        )
    }

}

export default CarouselCompany;

