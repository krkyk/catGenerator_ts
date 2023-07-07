import { useEffect, useState } from "react";
import { fetchCatImg } from "./catApi";
import "./styles.css";

export default function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetchCatImg().then((newImg) => {
      setImgUrl(newImg.url);
      setLoading(false);
    });
  }, []);

  const handleClickFavorite = (num: number): void => {
    setNum(num + 1);
  };

  const handleClickNext = async () => {
    setLoading(true);
    const newImg = await fetchCatImg();
    setImgUrl(newImg.url);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Nyanko</h1>
      <div>
        {loading ? (
          <img src="../images/cat_loading.jpeg" alt="" className="cat-img" />
        ) : (
          <img src={imgUrl} alt="" className="cat-img" />
        )}
      </div>
      <div className="btn-box">
        <button
          onClick={() => handleClickFavorite(num)}
          className="favorite-btn"
        >
          ♡&nbsp;{num}
        </button>
        <button onClick={() => handleClickNext()} className="next-btn">
          See Other Nyanko
        </button>
      </div>
    </div>
  );
}
