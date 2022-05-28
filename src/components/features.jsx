import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "../Framer-motion/framer";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <AnimatePresence>
        <motion.div
          className="container"
          variants={opacityAnimation}
          initial={opacityAnimation.initial}
          whileInView={opacityAnimation.whileInView}
          transition={opacityAnimation.transition}
        >
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Indywidualne podejście do zlecenia, wyjaśniamy zakres prac oraz doradzamy jakich materiałów użyć</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
