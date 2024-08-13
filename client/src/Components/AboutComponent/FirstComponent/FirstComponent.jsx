import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function FirstComponent() {
  const ref = useRef();
  const inView = useInView(ref, { once: true }); // Set once to true to animate only once
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="first-about w-full h-screen grid md:grid-cols-2 -z-10">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="justify-start self-center  overflow-hidden text-white space-y-6 bg-neutral-400 bg-opacity-50 rounded-lg p-4"
      >
        <h1 className="font-extrabold text-[1.8rem] ">ABOUT US</h1>
        <p className=" tracking- font-semibold">
          We are one of the largest agricultural producers in the Southern
          States. Serving as a vital link between farmers and consumers, we take
          crops and process them to make food ingredients, animal feed
          ingredients, renewable fuels and naturally derived alternatives to
          industrial chemicals.
        </p>
        <p className=" tracking- font-semibold">
          As Florida-based agribusiness and land management company built for
          today’s world, we’re known for our legacy of achievement and
          innovation in citrus, sugarcane, cattle, and resource conservation.
        </p>
        <p className=" tracking- font-semibold">
          With approximately 7.6 million tons produced on more than 6.8 million
          acres every year, wheat is a significant agricultural crop produces by
          us.
        </p>
        <p className=" tracking- font-semibold">
          However, we never focus on crops only, we also cultivate tobacco,
          miscellaneous vegetables and fruits, just as well as nuts and other
          produce…
        </p>
      </motion.div>
    </div>
  );
}

export default FirstComponent;
