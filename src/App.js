import React from 'react';  
import { Toaster } from 'react-hot-toast';
import './App.css';       
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import EventPage from './pages/event'
import Loader from './Components/Loader/loader'
// import BlogPage from './pages/blogs'
//import TechTeamPage from './pages/techTeam';
import FaqPage from './pages/faq'
//import OutreachTeamPage from './pages/outreachTeam';
//import EventTeamPage from './pages/eventTeam';
//import MediaTeamPage from './pages/mediaTeam';
//import ResearchTechTeam from './pages/researchTeam';
import TeamPage from './pages/team';
import SponsorUsForm from './pages/sponsorPage';
import CollaborateUsForm from './pages/collaborateForm';
import HackDay from './pages/hackDay';
import EventPagePseudo from './pages/eventpseudo';
//import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter} from '@fortawesome/free-brands-svg-icons';
library.add(fas, faXTwitter)


//window.$crisp=[];
//window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {
  return (
    <BrowserRouter>
    <Toaster position="bottom-center" gutter={14} containerStyle={{ fontSize: '14px' }}></Toaster>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/event" element={<EventPage />} />
        <Route exact path="/eventpseudo" element={<EventPagePseudo/>}/>
        {/* <Route exact path="/blogs" element={<BlogPage/>}/> */}
        <Route exact path="/faq" element={<FaqPage/>}/>
        {/* <Route exact path="/techTeam" element={<TechTeamPage/>}/> */}
        {/* <Route exact path="/eventTeam" element={<EventTeamPage/>}/> */}
        {/* <Route exact path="/mediaTeam" element={<MediaTeamPage/>}/> */}
        {/* <Route exact path="/researchTeam" element={<ResearchTechTeam/>}/>
        <Route exact path="/outreachTeam" element={<OutreachTeamPage/>}/> */}
        <Route exact path="/TeamPage" element={<TeamPage/>}/>
        <Route exact path='/sponsorPage' element={<SponsorUsForm/>}/>
        <Route exact path='/collaboratePage' element={<CollaborateUsForm/>}/>
        <Route exact path='/hackday' element={<HackDay/>}/>
        <Route exact path='/loader' element={<Loader/>}/>

           
      </Routes>
    </BrowserRouter>
  );
}

export default App;
