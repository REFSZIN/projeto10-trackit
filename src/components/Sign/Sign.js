import "./style.js";
import {Anime, LogoSign , FormSign , InputSign, BtnSign,SpanLink } from "./style.js";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Sing(){
    return(
        <Anime>
            <LogoSign src={logo} alt="Track-It"/>
            <FormSign>
                <InputSign placeholder="email"></InputSign>
                <InputSign placeholder="senha"></InputSign>
                <Link to="/habitos"><BtnSign>Entrar</BtnSign></Link>
            </FormSign>
            <Link to="/cadastro"><SpanLink>Não tem uma conta? Cadastre-se!</SpanLink></Link>
        </Anime>
    )
}