import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import ContactForm from './components/ContactForm';
import InteractiveGrid from './components/InteractiveGrid';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark-theme');
  };

  return (
    <ThemeProvider theme={{ isDark }}>
      <AppContainer>
        <GlobalStyles />
        <Header>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </Header>
        <Hero />
        <Content />
        <Section>
          <SectionTitle>インタラクティブ要素</SectionTitle>
          <InteractiveGrid />
        </Section>
        <Section id="contact">
          <SectionTitle>お問い合わせ</SectionTitle>
          <ContactForm />
        </Section>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
