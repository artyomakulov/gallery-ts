import { CommonClassProps, Photo } from "../types";
import cl from "classnames";
import css from "./MainPhoto.module.scss";

interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photo;
  activePhoto: Photo;
  nextPhoto?: Photo;
}

const MainPhoto: React.FC<MainPhotoProps> = ({
  prevPhoto,
  activePhoto,
  nextPhoto,
  className,
}) => {
  return (
    <div className={cl(className, css.mainPhoto)}>
      {prevPhoto && (
        <img
          className={css.mainPhotoImagePrev}
          src={prevPhoto.src}
          alt={prevPhoto.description}
        />
      )}
      <img
        className={css.mainPhotoImage}
        src={activePhoto.src}
        alt={activePhoto.description}
      />
      {nextPhoto && (
        <img
          className={css.mainPhotoImageNext}
          src={nextPhoto.src}
          alt={nextPhoto.description}
        />
      )}
    </div>
  );
};

export default MainPhoto;
