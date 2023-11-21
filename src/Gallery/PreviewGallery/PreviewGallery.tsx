import React, { useRef, useEffect } from "react";
import { CommonClassProps, Photo } from "../types";
import cl from "classnames";
import css from "./PreviewGallery.module.scss";

interface PreviewGalleryProps extends CommonClassProps {
  activePhotoIndex: number;
  photos: Photo[];
}

const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  activePhotoIndex,
  photos,
  className,
}) => {
  if (!photos.length) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const previewContainer = useRef<HTMLUListElement>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!previewContainer.current) {
      return;
    }
    previewContainer.current.style.transform = `translate3d(-${
      activePhotoIndex * 164
    }px, 0, 0)`;
  }, [activePhotoIndex]);

  return (
    <div className={cl(className, css.gallery)}>
      <ul className={css.galleryCount} ref={previewContainer}>
        {photos.map((photo) => (
          <li key={photo.id} className={css.galleryPreview}>
            <img
              src={photo.preview}
              alt={photo.description}
              className={css.galleryImage}
            />
          </li>
        ))}
      </ul>
      <div className={css.galleryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PreviewGallery;
