import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "../Framer-motion/framer";
import { FaCompressArrowsAlt, FaTools, FaPaintRoller } from "react-icons/fa";
import { GoPaintcan } from "react-icons/go";
import { GiStoneWall } from "react-icons/gi";
import { BsLampFill } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <AnimatePresence>
        <motion.div
          className="container"
          variants={opacityAnimation}
          initial={opacityAnimation.initial}
          whileInView={opacityAnimation.whileInView}
          transition={opacityAnimation.transition}
        >
          <div className="section-title">
            <h2>Usługi</h2>
            <p>Zakres wykonywanych usług</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <i className="fa">
                <FaCompressArrowsAlt className="service-icons" />
              </i>
              <div className="service-desc">
                <h3>Spoinowanie płyt gipsowo-kartonowych</h3>
                <p>Przygotowanie do wykończenia na gotowo</p>
              </div>
            </div>

            <div className="col-md-6">
              <i className="fa">
                <FaTools className="service-icons" />
              </i>
              <div className="service-desc">
                <h3>Szpachlowanie ścian</h3>
                <p>
                  Wyrównywanie powierzchni oraz uzupełnianie braków jak dziury w
                  tynku czy płytach gipsowo-kartonowych
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <i className="fa">
                <FaPaintRoller className="service-icons" />
              </i>
              <div className="service-desc">
                <h3>Przygotowanie ścian pod malowanie</h3>
                <p>Szlifowanie łączeń oraz szpachli gipsowej.</p>
              </div>
            </div>
            <div className="col-md-6">
              <i className="fa">
                <GoPaintcan className="service-icons" />
              </i>
              <div className="service-desc">
                <h3>Malowanie</h3>
                <p>
                  Sufity oraz ściany wewnętrzne. Nie zajmujemy się malowaniem
                  elewacji.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <i className="fa">
                <BsLampFill className="service-icons" />
              </i>
              <div className="service-desc">
                <h3>Montaż lamp</h3>
                <p>Np. halogeny LED w sufitach podwieszanych.</p>
              </div>
            </div>
            <div className="col-md-6">
              <i className="fa">
                <GiStoneWall className="service-icons" />
              </i>
              <div className="service-desc">
                <h3>Ściany i stelaże</h3>
                <p>
                  Podwieszanie sufitów, montaż konstrukcji z profili stalowych
                  czy montaż płyt gipsowo-kartonowych.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <i className="fa">
                <FiTruck className="service-icons" />
              </i>
              <div className="service-desc">
                <h3>Dowóz materiału</h3>
                <p>
                  Zapewniamy dowóz materiału potrzebnego do przeprowadzenia
                  prac.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
