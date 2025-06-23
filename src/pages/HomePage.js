import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Meetvideo from '../components/Meetvideo';
import FAQ from '../components/FAQ';
import CoursesSection from '../components/CoursesSection';
import ScrollSection from '../components/ScrollSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <CoursesSection />
      <ScrollSection/>
      <Meetvideo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
