import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map((favorite) => {
          return (
            <div
              key={favorite.id}
              style={{ position: "relative", display: "inline-block" }}
            >
              <img
                src={favorite.src.tiny}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Favorites;
