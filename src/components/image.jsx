import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState,  useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const Image = ({ title, description, thumbnail, gallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imageGallery, setImageGallery] = useState([]);

  const collectionName = "fl_files";
  const storage = getStorage();

  const images = () =>
    gallery.map(async (item) => {
      const docRef = doc(db, collectionName, item.id);
      const name = await (await getDoc(docRef)).data().file;

      await getDownloadURL(ref(storage, `flamelink/media/${name}`)).then(
        (data) => setImageGallery((prevState) => [...prevState, data])
      );
    });

  useEffect(() => {
    return images();
  }, []);

  return (
    <div className="portfolio-item">
      <Card sx={{ maxWidth: 320, marginBottom: 5 }}>
        <CardActionArea onClick={() => setIsOpen(true)}>
          <CardMedia
            component="img"
            height="170"
            image={thumbnail}
            alt={title}
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {title}
          </Typography>
          <Typography paragraph={true} variant="inherit" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setIsOpen(true)}>Galeria</Button>
        </CardActions>
      </Card>

      {isOpen && (
        <Lightbox
          mainSrc={imageGallery[photoIndex]}
          nextSrc={imageGallery[(photoIndex + 1) % imageGallery.length]}
          prevSrc={
            imageGallery[
              (photoIndex + imageGallery.length - 1) % imageGallery.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageGallery.length - 1) % imageGallery.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageGallery.length)
          }
          // clickOutsideToClose={true}
        />
      )}
    </div>
  );
};
