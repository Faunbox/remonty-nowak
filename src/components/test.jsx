import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Lightbox from "react-image-lightbox";
import { Helmet } from "react-helmet-async";

const Test = () => {
  const [data, setData] = useState();
  const [gallery, setGallery] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const { id } = useParams();

  const collectionName = "fl_content";
  const imageCollectionName = "fl_files";
  const storage = getStorage();
  const searchedId = id.slice(1);
  const idRef = doc(db, collectionName, searchedId);

  const getData = async () => {
    const document = await getDoc(idRef);
    setData(await document.data());
    console.log(document.data());
    document.exists() &&
      (await document.data().gallery.map(async (item) => {
        const docRef = doc(db, imageCollectionName, item.id);
        const name = await (await getDoc(docRef)).data().file;

        await getDownloadURL(ref(storage, `flamelink/media/${name}`)).then(
          (data) => setGallery((prevState) => [...prevState, data])
        );
      }));
  };

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  useEffect(() => {
    return getData();
  }, []);

  return (
    <>
    <Helmet>
        <meta
          name="keywords"
          content="remont żywiec, remont zywiec, uslugi budowlane zywiec, malowanie scian zywiec, remonty, usługi budowlane żywiec"
        />
        <meta
          name="description"
          content="Usługa budowlana wykonana przez firmę Remonty Nowak"
        />
        <title>Remonty Nowak - {data?.title}</title>
      </Helmet>
    <div id="test">
      <div className="container">
      <div className="section-title">
        <h2>{data?.title}</h2>
      </div>
        {data ? (
          <p className="test-description">{data.longDesc}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="test-gallery">
        <div className="section-title">
          <h2 style={{ color: "white" }}>Galeria zdjęć</h2>
        </div>
        <div className="test-gallery-image-wrapper container">
          {gallery.map((image, index) => (
            <div key={image} onClick={() => setIsOpen(true)}>
              <img
                {...srcset(image, 400)}
                alt={image.title}
                onClick={() => setPhotoIndex(index)}
                loading="lazy"
                className="test-gallery-item"
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={gallery[photoIndex]}
          nextSrc={gallery[(photoIndex + 1) % gallery.length]}
          prevSrc={gallery[(photoIndex + gallery.length - 1) % gallery.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.length)
          }
          enableZoom={true}
          wrapperClassName="test"
          // clickOutsideToClose={true}
        />
      )}
    </div>
    </>
  );
};

export default Test;
