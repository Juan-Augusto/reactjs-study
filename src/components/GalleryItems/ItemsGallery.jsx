import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../api";

export const GalleryItems = () => {
    const params = useParams();
    const [items, setItems] = useState([]);
    const [galleryInfo, setGalleryInfo] = useState({id:0, title:'', userId: 0});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(params.id){
            loadGalleryItems(params.id);
            loadGalleryInfo(params.id);
        }   
        }, []);   
    const loadGalleryItems = async (id) => {
        setLoading(true);
        let items = await api.getAllPhotosAlbum(id);
        setLoading(false);
        setItems(items)
    };
    const loadGalleryInfo = async (id) => {
        setLoading(true);
        let galleryInfo = await api.getAlbum(id);
        setGalleryInfo(galleryInfo)
    };
    return( 
        <>
            {
                loading && 
                <div className="flex justify-center items-center m-5">
                    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading-icon" />
                </div>
            }
            <div>    
                {!loading && items.length>0 &&
                <div className="m-2">
                    <h1>Album name: {galleryInfo.title.toUpperCase()}</h1>
                    <ul className="grid grid-cols-5 gap-2 m-7">
                        {
                            items.map((galleryItems, galleryItemsKey) => (
                                <Link to={`/photo/${galleryItems.id}`}>
                                    <li key={galleryItemsKey} className="p-2 flex flex-col justify-center" style={{border: '2px solid black'}}>
                                        <img src={galleryItems.thumbnailUrl} alt={galleryItems.title}/>
                                        <h2>Tilte: {galleryItems.title}</h2>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                }
            </div>
        </>
    );
}