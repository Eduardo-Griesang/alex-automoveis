import Header from "./components/Header";
import Types from "./components/TypesV";
import Listing from "./components/Listing";
import Reasons from "./components/Reasons";
import AboutUs from "./components/AboutUs";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden scroll-smooth">
      <Header />
      <Types />
      <Listing />
      <Reasons />
      <AboutUs />
      <Visit />
      <Footer />
    </main>
  );
}
