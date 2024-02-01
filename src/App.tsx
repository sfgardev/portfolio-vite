import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Hero } from "./sections/Hero/Hero";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
