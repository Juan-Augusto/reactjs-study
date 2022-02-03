import Links from "../Pages/PageLinks";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const NavbarHeader = () => {
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1)
    };
    return (
        <header className="flex justify-center" style={{fontFamily: 'Source Code Pro', borderBottom: '1px solid black'}}>
            <button onClick={handleBackButton}>Go back</button>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className='navbar-brand' to={'/'}>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tasks completed
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                Links.map((item, key) => (
                                    <Link to={`${item.link}`}><li className="dropdown-item" key={key}>{`${item.name}`}</li></Link>
                                ))
                            }
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
