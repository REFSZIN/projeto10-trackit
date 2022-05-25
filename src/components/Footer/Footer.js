import "./style.js";
import { Foter, LinkFoter,LinkFoterMid, Mid } from "./style.js";
import { Link } from "react-router-dom";
export default function Footer(){
    return(
            <Foter>
                <Link to="/habitos"><LinkFoter>Hábitos</LinkFoter></Link>
                <Mid>
                    <Link to="/hoje"><LinkFoterMid>Hoje</LinkFoterMid></Link>
                </Mid>
                <Link to="/historico"><LinkFoter>Histórico</LinkFoter></Link>
            </Foter>
    );
};