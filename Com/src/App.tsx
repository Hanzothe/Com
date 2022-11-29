import "./App.css";
import AboutSection from "./components/AboutSection";
import Actions from "./components/Actions";
import BusinessSection from "./components/BusinessSection";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexForm from "./components/IndexForm";
import ODSSection from "./components/ODSSection";
import Parters from "./components/Parters";

function App() {
  return (
    <div className="App">
      <Header />
      <IndexForm />
      <Actions />
      <AboutSection />
      <Parters />
      <BusinessSection />
      <ODSSection />
      <Footer />
    </div>
  );
}

export default App;
