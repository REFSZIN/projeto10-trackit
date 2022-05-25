import "./style.js";
import { MainHisto, Aviso, TitleHisto, BoxAviso,BoxCalendar } from "./style.js";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MainHabit(){
    return(
        <MainHisto>
            <TitleHisto>Histórico</TitleHisto>
            <BoxAviso>
                <Aviso>Em breve você poderá ver o histórico dos seus hábitos aqui!</Aviso>
            </BoxAviso>
            <BoxCalendar>
                <Calendar />
            </BoxCalendar>
        </MainHisto>
    );
};