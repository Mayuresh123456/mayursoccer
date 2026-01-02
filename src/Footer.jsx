import { Link } from "react-router-dom";
import mylogo from "./assets/mylogo.jpg";

const Footer = () => {
    return(
        <>
        <div className="footcontainer">
        <div className="footer">
            <div className="ptag">
                <p>MayurSoccer is the first modern football website in 
                    india. The best in business.
                </p>
            </div>
            <div>
                <ul className="footul">
                    <li><Link to="/">Home</Link></li>
                     <li><Link to="/products">Products</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/account">Account</Link></li>

                </ul>
            </div>
            <div id="logotext">
                <img src={mylogo} id="logo" alt="" />
                <span>MayurSoccer</span>
            </div>
        </div>
        <div className="copyright">
            <p>©2025, MayurSoccer, Inc. or its affiliates</p>
        </div>
        </div>

        
        
        </>

    )
}
export default Footer;