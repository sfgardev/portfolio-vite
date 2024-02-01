import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { About } from "./sections/About/About";
import { Hero } from "./sections/Hero/Hero";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
