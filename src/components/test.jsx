import { db, storage } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Lightbox from "react-image-lightbox";

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
    <div id="test">
      <h1>{data?.title}</h1>
      <div className="container">
        {data ? (
          <p className="test-description">{data.longDesc}</p>
        ) : (
          <p>Loading...</p>
        )}
        <div className="test-gallery">
          <h4>Galeria zdjęć</h4>
          <div className="test-gallery-image-wrapper">
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
            prevSrc={
              gallery[(photoIndex + gallery.length - 1) % gallery.length]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % gallery.length)
            }
            // clickOutsideToClose={true}
          />
        )}
      </div>
    </div>
  );
};

export default Test;
