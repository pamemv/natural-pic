import IconHeart from "./IconHeart";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Gallery = ({ photos }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => {
        const isFavorite = favorites.some(({ id }) => id === photo.id);

        return (
          <div
            key={photo.id}
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src={photo.src.tiny}
              style={{ width: "100%", height: "auto" }}
            />
            <div
              onClick={() => {
                const updatedPhotos = isFavorite
                  ? favorites.filter(({ id }) => id !== photo.id)
                  : [...favorites, ...[{ id: photo.id, src: photo.src }]];

                setFavorites(updatedPhotos);
              }}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
            >
              <IconHeart filled={isFavorite} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
