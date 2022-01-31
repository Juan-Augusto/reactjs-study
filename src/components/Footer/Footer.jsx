import './StyleFooter.css';
export const Footer = () => {
    return(
        <footer className="flex justify-center items-center flex-col p-4" style={{backgroundColor: '#4F4F4F', color: '#FFFFFF'}}>
            <h2 className='main-footer-text'>Thank you for being here, I hope that I've helped you with the solutions presented, please, consider connecting with me using the links bellow:</h2>
            <div class="flex p-4">
                <a href={"https://www.instagram.com/juannaugusto/"} target='blank'><i className="icon-instagram"></i></a>
                <a href={"https://www.facebook.com/juan.augusto.7169"} target='blank'><i className="icon-facebook2"></i></a>
                <a href={"https://www.youtube.com/channel/UCO_mBpadEe467FAJjNQWD1g"} target='blank'><i className="icon-youtube"></i></a>
                <a href={"https://www.linkedin.com/in/juan-soares-881877177/"} target='blank'><i className="icon-linkedin"></i></a>
                <a href={"https://github.com/Juan-Augusto"} target='blank'><i className="icon-github"></i></a>

            </div>

        </footer>
    );
}