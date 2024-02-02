import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { About } from "./sections/About/About";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { TechStack } from "./sections/TechStack/TechStack";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>
    </>
  );
}

export default App;
