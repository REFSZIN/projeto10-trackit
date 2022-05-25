import "./style.js";
import {LogoSign , FormSign , InputSign, BtnSign,SpanLink } from "./style.js";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Sing(){
    return(
        <>
            <LogoSign src={logo} alt="Track-It"/>
            <FormSign>
                <InputSign placeholder="email"></InputSign>
                <InputSign placeholder="senha"></InputSign>
                <Link to="/habitos"><BtnSign>Entrar</BtnSign></Link>
            </FormSign>
            <Link to="/cadastro"><SpanLink>Não tem uma conta? Cadastre-se!</SpanLink></Link>
        </>
    )
}