import React, { Component } from 'react';
import ParallaxHeader from './components/parallax-header/Parallax-Header';
import CarouselCompany from './components/carousel/CarouselCompany';
import Footer from '../../components/footer/Footer';
import Reviews from './components/reviews/Reviews';
import CompanyInfo from './components/company-info/CompanyInfo';

class Home extends Component {

    render() {
        return(
            <React.Fragment>
                <ParallaxHeader />
                <CarouselCompany />
                <CompanyInfo />
                <br />
                <br />
                <Reviews />
                <Footer />
            </React.Fragment>
        );
    }

}

export default Home;
