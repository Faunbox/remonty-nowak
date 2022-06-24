import { db, storage } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Lightbox from "react-image-lightbox";

const Test = () => {
  const [data, setData] = useState();
  const [gallery, setGallery] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const { id } = useParams();

  const collectionName = "fl_content";
  const storage = getStorage();
  const searchedId = id.slice(1);
  const idRef = doc(db, collectionName, searchedId);

  const getData = async () => {
    const doc = await getDoc(idRef);
    setData(await doc.data());
    doc.exists() &&
      data.map(async (item) => {
        const docRef = doc(db, collectionName, item.id);
        const name = await (await getDoc(docRef)).data().file;

        await getDownloadURL(ref(storage, `flamelink/media/${name}`)).then(
          (data) => setGallery((prevState) => [...prevState, data])
        );
      });
  };

  useEffect(() => {
    return getData();
  }, []);

  return (
    <div className="container">
      {data ? <p id="informacje">{data.description}</p> : <p>brak daty</p>}
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
          // clickOutsideToClose={true}
        />
      )}
    </div>
  );
};

export default Test;
