import { AnimatePresence, motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { opacityAnimation } from "../Framer-motion/framer";

export const About = (props) => {
  return (
    <div id="informacje">
      <AnimatePresence>
        <motion.div
          className="container"
          variants={opacityAnimation}
          initial={opacityAnimation.initial}
          whileInView={opacityAnimation.whileInView}
          transition={opacityAnimation.transition}
        >
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <LazyLoadImage
                src="img/about.jpg"
                className="img-responsive"
                alt="remonty nowak"
                loading="lazy"
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <motion.h2>Informacje</motion.h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                {/* <motion.h3>Dlaczego my?</motion.h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <motion.li key={`${d}-${i}`}>{d}</motion.li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
