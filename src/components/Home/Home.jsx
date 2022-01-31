import Links from '../Pages/PageLinks';
import { Link } from 'react-router-dom';
import './StyleHome.css';
export const Home = () => {
    return(
        <div className='flex justify-center items-center flex-col p-5' style={{backgroundColor: '#4F4F4F'}}>
            <div className="flex justify-center">
                <h1 className='main-title'>Hey, my name is Juan Augusto, I'm glad you're here.</h1>
            </div>
            <div className="card" style={{ width: "24rem"}}>
              <img src="https://reactjs.org/logo-og.png" className="card-img-top" alt="..."/>
                <div className="card-body flex flex-col justify-center items-center">
                    <p className="card-text">This is a compilation of exercises using ReactJS, with different methods and solutions.</p>
                    <p>
                        <a className="btn btn-primary m-1" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Show exercises
                        </a>
                    </p>
                    <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <ul>
                            {
                                Links.map((item, key) => (
                                    <Link to={`${item.link}`}><li className="dropdown-item" key={key}>{`${item.name}`}</li></Link>
                                ))
                            }
                        </ul>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    );
} 