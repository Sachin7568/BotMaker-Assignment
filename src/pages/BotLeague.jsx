import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EventsSection from '../components/EventsSection';
import UserJourney from '../components/UserJourney';
import AboutLeague from '../components/AboutLeague';
import Categories from '../components/Categories';
import CompetitionDisciplines from '../components/CompetitionDisciplines';
import LeagueAdvantage from '../components/LeagueAdvantage';
import EcosystemForms from '../components/EcosystemForms';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BotLeague = () => {
  // Initialize scroll animation
  useScrollAnimation();

  return (
    <div className="botleague-app">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <UserJourney />
      <AboutLeague />
      <Categories />
      <CompetitionDisciplines />
      <LeagueAdvantage />
      <EcosystemForms />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default BotLeague;
