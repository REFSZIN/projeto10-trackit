import "./style.js";
import { Head, LogoHeader, UserImg} from "./style.js";
import logo from "../../assets/images/logoheader.svg"
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Header(){
    const { user } = useContext(UserContext);

    return(
            <Head>
                <Link to="/"><LogoHeader src={logo}/></Link>
                <UserImg src={user.image}/>
            </Head>
    )
}