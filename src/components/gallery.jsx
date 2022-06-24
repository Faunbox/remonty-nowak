import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Image } from "./image";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "../Framer-motion/framer";
import Test from "./test";

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const collectionName = "fl_content";

  const getData = async () => {
    const data = await getDocs(collection(db, collectionName));
    data.forEach((doc) =>
      setGallery((prevState) => [...prevState, doc.data()])
    );
  };

  useEffect(() => {
    return getData();
  }, []);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nasze realizacje</h2>
          <p>Galeria zdjęć wraz z opisem wykonanych prac</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <AnimatePresence>
              {gallery.length > 0 ? (
                gallery?.map((data) => (
                  <>
                    <motion.div
                      className="col-sm-6 col-md-4 col-lg-4"
                      key={data.id}
                      variants={opacityAnimation}
                      initial={opacityAnimation.initial}
                      whileInView={opacityAnimation.whileInView}
                      transition={opacityAnimation.transition}
                    >
                      <Image
                        title={data.title}
                        gallery={data.gallery}
                        thumbnail={data.thumbnail}
                        description={data.description}
                        id={data.id}
                      />
                    </motion.div>
                  </>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
