import React from 'react'
import TechTeam from '../../images/TechTeam.png'
import EventTeam from '../../images/EventTeam.png'
import MediaTeam from '../../images/MediaTeam.png'
import ResearchTeam from '../../images/ResearchTeam.png'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
const Services = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const navigate = useNavigate();

    const techTeam = () => {
       scrollToTop();
       navigate('/techTeam');
    }
 
    const eventTeam = () => {
        scrollToTop();
        navigate('/eventTeam');
    }

    const mediaTeam = () => {
        scrollToTop();
        navigate('/mediaTeam');
    }
    
    const researchTeam = () => {
        scrollToTop();
        navigate('/researchTeam');
    }

    const outreachTeam = () => {
        scrollToTop();
        navigate('/outreachTeam');
    }
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Team</ServicesH1>
            <ServicesWrapper>
                    <ServicesCard onClick={techTeam}>
                        <ServicesIcon src={TechTeam} />
                        <ServicesH2><b>TECH TEAM</b></ServicesH2>
                    </ServicesCard>
                
                    <ServicesCard onClick={eventTeam}>
                        <ServicesIcon src={EventTeam} />
                        <ServicesH2><b>EVENT MANAGEMENT TEAM</b></ServicesH2>
                    </ServicesCard>
                    <ServicesCard onClick={mediaTeam}>
                        <ServicesIcon src={MediaTeam} />
                        <ServicesH2><b>GRAPHICS & MEDIA TEAM</b></ServicesH2>
                    </ServicesCard>
                    <ServicesCard onClick={researchTeam}>
                        <ServicesIcon src={ResearchTeam} />
                        <ServicesH2><b>RESEARCH & CONTENT TEAM</b></ServicesH2>
                    </ServicesCard>

                    <ServicesCard onClick={outreachTeam}>
                        <ServicesIcon src={MediaTeam} />
                        <ServicesH2><b>OUTREACH TEAM</b></ServicesH2>
                    </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services