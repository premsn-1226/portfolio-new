"use client";
import NavBar from "./Components/Navbar/NavBar";
import HomeBanner from "./Components/Home/HomeBanner";
import About from "./Components/About/About";
import Feature from "./Components/Features/Feature";
import Project from "./Components/Projects/Project";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <HomeBanner />
        <About />
        <Feature />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
