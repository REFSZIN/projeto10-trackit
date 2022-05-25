import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/global.js';
import DailyProgress from "./contexts/DailyProgress";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import SignScreen from "./pages/SignScreen.js";
import RegisterScreen from "./pages/RegisterScreen.js";
import HabitScreen from "./pages/HabitScreen.js";
import TodayScreen from "./pages/TodayScreen.js";
import HistoryScreen from "./pages/HistoryScreen.js";

export default function App (){
    const [user, setUser] = useState();
    const [dailyProgress, setDailyProgress] = useState(0);
    const weekDays = new Map([
        [1,"Segunda"], [2,"Terça"], [3,"Quarta"], [4,"Quinta"],
        [5,"Sexta"], [6,"Sábado"], [0,"Domingo"]
    ]);
    return (
    <DailyProgress.Provider value={{dailyProgress, setDailyProgress}}>
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                            <Route path="/" element={<SignScreen />}/>
                            <Route path="/cadastro" element={<RegisterScreen />}/>
                            <Route path="/habitos" element={<HabitScreen weekDays={weekDays} />}/>
                            <Route path="/hoje" element={<TodayScreen weekDays={weekDays} />}/>
                            <Route path="/historico" element={<HistoryScreen />}/>
                    </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    </DailyProgress.Provider>
    );
};