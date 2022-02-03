import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import './Style.css'
export const GalleryList = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadAlbums()
        }, []);
    const loadAlbums = async () => {
        setLoading (true);
        let albums = await api.getAllAlbums();
        setLoading(false);
        setAlbums(albums)
    }    
    return (
        <>
            {
                loading && 
                <div className="flex justify-center items-center m-5">
                    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
                </div>
            }
            <div>    
                {!loading && albums.length>0 &&
                <div>
                    <h1>Number of albums available: {albums.length}</h1>
                    <ul className="m-5">
                        {
                            albums.map((album, albumKey) => (
                                <Link to={`/gallery/${album.id}`}> 
                                    <li className="request-item p-3 m-4" key={albumKey} style={{border: '1px solid black', margin: '10px'}}><h2>{album.title}</h2></li>
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