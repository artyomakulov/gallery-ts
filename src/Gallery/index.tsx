import { Photo } from "./types";
import css from "./index.module.scss";
import PreviewGallery from "./PreviewGallery/PreviewGallery";
import MainPhoto from "./MainPhoto/MainPhoto";
import Navigation from "./Navigation/Navigation";
import { useState } from "react";

interface GalleryProps {
  photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  if (!photos.length) {
    return null;
  }

  return (
    <div className={css.gallery}>
      <div className={css.galleryContainer}>
        <MainPhoto
          prevPhoto={prevPhoto}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
          className={css.galleryMainPhoto}
        />
        <Navigation
          className={css.galleryNavigation}
          disabledPRev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={css.galleryPreviewList}
      />
    </div>
  );
};
