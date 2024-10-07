import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "../components/Image";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhotos = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/photo/all");
      console.log(response.data.photos);
      setPhotos(response.data.photos);
      console.log("logging photos", photos);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Image photos={photos} />
        </div>
      )}
    </div>
  );
};

export default Photos;
