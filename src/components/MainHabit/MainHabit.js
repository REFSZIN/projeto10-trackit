import "./style.js";
import { MainHab } from "./style.js";

export default function MainHabit(){
    return(
        <MainHab>
            <div>
                <h2>Meus hábitos</h2>
                <div>
                <ion-icon name="trash-outline"></ion-icon>
                </div>
            </div>
            <article>
                <input></input>
                <div>
                    <span>D</span>
                </div>
                <div>
                    <span>s</span>
                </div>
                <div>
                    <span>T</span>
                </div>
                <div>
                    <span>Q</span>
                </div>
                <div>
                    <span>Q</span>
                </div>
                <div>
                    <span>S</span>
                </div>
                <div>
                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                </div>
                <div>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>
            </article>
            <article>
                <div>
                    <h3>Ler 1 capítulo de livro</h3>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <div>
                    <span>D</span>
                </div>
                <div>
                    <span>S</span>
                </div>
                <div>
                    <span>T</span>
                </div>
                <div>
                    <span>Q</span>
                </div>
                <div>
                    <span>Q</span>
                </div>
                <div>
                    <span>S</span>
                </div>
                <div>
                    <span>S</span>
                </div>
            </article>
        </MainHab>
    );
};