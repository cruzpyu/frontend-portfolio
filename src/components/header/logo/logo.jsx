import logo from "../../../assets/images/name.png";
import "../logo/logo.css";

export default function Logo () {
    return (
        <div>
            <img className="logo" src={logo} alt="O nome Yu desenhado em Pixel Art." />
        </div>
        
    )
}