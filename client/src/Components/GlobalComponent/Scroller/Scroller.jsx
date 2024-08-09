import { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function Scroller() {
  const [isScrolled, setIsScrolled] = useState(false);

  /*  useEffect(() => {
    const handeScrolled = () => {
      if (window.screenY === 0) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handeScrolled);
    return () => {
      window.removeEventListener("scroll", handeScrolled);
    };
  }, []); */

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isScrolled && (
        <div className="fixed bottom-12 bg-primary p-3 rounded-full text-white right-6 cursor-pointer">
          <FaLongArrowAltUp
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      )}
    </div>
  );
}

export default Scroller;
