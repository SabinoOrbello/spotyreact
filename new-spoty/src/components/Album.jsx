import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://deezerdevs-deezer.p.rapidapi.com/album/75621062";

const Album = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("albumId");
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(URL + id, {
          headers: {
            "X-RapidAPI-Key": "6cd6bdd956mshb421bad6c576300p1eb9adjsn738e05e53003",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });
        setAlbum(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbum();
  }, [id]);

  return (
    <div>
      <h1>Album Page</h1>
      {album && (
        <>
          <img src={album.cover} alt="" />
          <h2>{album.title}</h2>
        </>
      )}
    </div>
  );
};
export default Album;
