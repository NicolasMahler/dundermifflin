import React from 'react';
import DuoContainer from '../../../../components/duocontainer/DuoContainer';
import Video from '../../../../components/youtube/Youtube';
import './CompanyInfo.css';

const CompanyInfo = () => {
    return (
        <React.Fragment>
            <DuoContainer>
                <Video id="FIUSPM7xjAk"/>
                <section>
                    <h2 className="info-header">Limitless Paper, in a Paperless World</h2>
                    <br />
                    <p className="info-text">We're sure you've seen our commercial 
                    airing on local networks, 
                    but here's a behind the scenes of our 
                    staff getting to see the director's cut for the first time!</p>
                </section>
            </DuoContainer>
            <br />
            <br />
            <DuoContainer leftTop>
                <section>
                    <h2 className="info-header">Dunder Mifflin Salesmen</h2>
                    <br />
                    <p className="info-text">Our Salespeople are ready to serve and 
                    fill your paper needs. At Dunder Mifflin, 
                    we have quite the variety! We recently even 
                    hired a spanish-speaking salesperson.</p>
                </section>
                <section>
                    <img className="info-img" src={require ("../../../../assets/pictures/employees.jpg")} width="100%" alt="employees"/>
                </section>
            </DuoContainer>
        </React.Fragment>
    )
}

export default CompanyInfo;
