import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import './Style.css'
export const GalleryItem = () => {
  const params = useParams();

  const [photoInfo, setPhotoInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.id) {
      loadPhoto(params.id);
    }
  }, []);
  const loadPhoto = async (id) => {
    setLoading(true);
    const photo = await api.getPhoto(id);
    setPhotoInfo(photo);
    setLoading(false);
  };
  return (
    <>
      <div>
            {
                loading && 
                <div className="flex justify-center items-center m-5">
                    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
                </div>
            }
            {
                !loading &&
                photoInfo && (
                <div className="m-5 flex justify-evenly"> 
                    <h1> Title: {photoInfo.title.toUpperCase()}</h1>
                    <img className="item-photo" src={photoInfo.url} alt={photoInfo.title} />
                </div>
            )}
      </div>
    </>
  );
};
