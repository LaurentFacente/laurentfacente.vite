import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProjetsCards from "./components/projetCards/projetCards";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      <ProjetsCards />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
