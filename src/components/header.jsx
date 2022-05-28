import { AnimatePresence, motion } from "framer-motion";
import { headerAnimation } from "../Framer-motion/framer";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <AnimatePresence>
          <div className="overlay">
            <div className="container">
              <motion.div
                className="row"
                variants={headerAnimation}
                initial={headerAnimation.initial}
                animate={headerAnimation.animate}
                transition={headerAnimation.transition}
              >
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Wiecej informacji
                  </a>{" "}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </header>
  );
};
