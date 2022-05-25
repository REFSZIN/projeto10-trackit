import "./style.js";
import { Head, LogoHeader, UserImg} from "./style.js";
import logo from "../../assets/images/logoheader.svg"
import { Link } from "react-router-dom";

export default function Header(){
    return(
            <Head>
                <Link to="/"><LogoHeader src={logo}/></Link>
                <UserImg src=""/>
            </Head>
    )
}