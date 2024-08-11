import { useEffect, useRef } from "react";
import style from "./ThirdCard.module.css";
import { motion, useInView, useAnimation } from "framer-motion";

function Slide({ image, date, title, content }) {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const controller = useAnimation();

  useEffect(() => {
    if (view) {
      controller.start("visible");
    }
  }, [view]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controller}
      transition={{ duration: 0.5, delay: 0.75 }}
      className="flex flex-col justify-center gap-4 p-4 second-card-fruit"
    >
      <img src={image} alt="" />
      <p className="text-[14px] font-normal">{date}</p>
      <p className={`${style.track}`}>{title}</p>
      <p className="track">{content}</p>
    </motion.div>
  );
}

export default Slide;
