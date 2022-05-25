import "./style.js";
import { Head, LogoHeader, UserImg} from "./style.js";
import logo from "../../assets/images/logoheader.svg"
import avatar from "../../assets/images/avatar.gif"
import { Link } from "react-router-dom";

export default function Header(){
    return(
            <Head>
                <Link to="/"><LogoHeader src={logo}/></Link>
                <UserImg src={avatar}/>
            </Head>
    )
}