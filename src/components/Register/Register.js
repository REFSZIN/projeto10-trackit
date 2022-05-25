import "./style.js";
import {Anime, LogoRegis, FormRegis, InputRegis, BtnRegis, SpanLink } from "./style.js";
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom";

export default function Sing(){
    return(
        <Anime>
            <LogoRegis src={logo} alt="Track-It"/>
            <FormRegis>
                <InputRegis placeholder="email"></InputRegis>
                <InputRegis placeholder="senha"></InputRegis>
                <InputRegis placeholder="nome"></InputRegis>
                <InputRegis placeholder="foto"></InputRegis>
                <BtnRegis>Cadastrar</BtnRegis>
            </FormRegis>
            <Link to="/" ><SpanLink>Já tem uma conta? Faça login!</SpanLink></Link>
        </Anime>
    )
}