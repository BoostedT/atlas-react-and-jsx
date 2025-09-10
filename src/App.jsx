import React from "react";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import HelpfulResource from "./components/HelpfulResource.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />

      {/* What is React section */}
      <Section title="What is react?">
        <p>
          React is an open-source JavaScript library for building user interfaces. 
          It allows developers to create reusable UI components and efficiently 
          update the browser’s DOM using a virtual DOM. React is often used to 
          build single-page applications and interactive web experiences.
        </p>
      </Section>

      {/* Benefits of React section */}
      <Section title="Benefits of react">
        <ul>
          <li>Component-based architecture for reusable code</li>
          <li>Virtual DOM for efficient rendering</li>
          <li>Large ecosystem of libraries and community support</li>
          <li>Supports declarative UI development</li>
          <li>Works seamlessly with modern tools and frameworks</li>
        </ul>
      </Section>
      {/* Helpful resources section */}
      <Section title="Helpful resources">
        <HelpfulResource
          label="React Docs – Learn"
          link="https://react.dev/learn"
        />
        <HelpfulResource
          label="React Docs – Describing UI"
          link="https://react.dev/learn/describing-the-ui"
        />
        <HelpfulResource
          label="Vite + React Guide"
          link="https://vitejs.dev/guide/"
        />
      </Section>
      {/* About Me section */}
      <AboutMe />
      {/* Footer */}
      <Footer />
    </div>
  );
}
