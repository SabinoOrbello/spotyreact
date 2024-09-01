import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api/deezer/artist/14/top?limit=16";

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/artist/${id}`, {
          headers: {
            "X-RapidAPI-Key": "{6cd6bdd956mshb421bad6c576300p1eb9adjsn738e05e53003}",
          },
        });
        setArtist(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtist();
  }, [id]);

  return (
    <div>
      <h1>Artist Page</h1>
      {artist && <h2>{artist.name}</h2>}
      <h3>Ciao bello</h3>
    </div>
  );
};

export default Artist;
