import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="d-flex bg-dark">
            <div className="nav col-md-6 justify-content-start">
                <span className="my-4 ms-4 text-white "><h5>© 2022 Erick Rios</h5></span>
            </div>
            <ul className="nav col-md-6 justify-content-end me-4 my-4">
                <li><a className="text-white h4 me-4" href="#">
                    <FaFacebookSquare/>
                </a></li>
                <li><a className="text-white h4 me-4" href="#">
                    <FaGithub/>
                </a></li>
                <li><a className="text-white h4 me-4" href="#">
                    <FaInstagram/>
                </a></li>
            </ul>
        </footer>
    );

}
export default Footer;