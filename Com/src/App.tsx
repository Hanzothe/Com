import "./App.css";
import AboutSection from "./components/AboutSection";
import Actions from "./components/Actions";
import BusinessSection from "./components/BusinessSection";
import CarouselSection from "./components/CarouselSection";
import Header from "./components/Header";
import IndexForm from "./components/IndexForm";
import ODSSection from "./components/ODSSection";

function App() {
  return (
    <div className="App">
      <Header />
      <IndexForm />
      <Actions />
      <AboutSection />
      <BusinessSection />
      <ODSSection />
    </div>
  );
}

export default App;
