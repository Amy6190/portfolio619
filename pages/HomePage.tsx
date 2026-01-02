import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Expertise } from '../components/Expertise';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Experience />
      <Projects />
    </>
  );
};