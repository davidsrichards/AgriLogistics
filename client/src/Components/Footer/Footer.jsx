import About from "./FooterItems/About";
import Contact from "./FooterItems/Contact";
import FooterImage from "./FooterItems/FooterImage";
import Produce from "./FooterItems/Produce";

function Footer() {
  return (
    <>
      <footer className="bg-[#0b1803] w-full bottom-0 grid lg:grid-cols-4 p-4 lg:gap-10 gap-6 transition-all duration-300 ease-in-out">
        <FooterImage />
        <About />
        <Produce />
        <Contact />
      </footer>
    </>
  );
}

export default Footer;
