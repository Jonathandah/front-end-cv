import React from "react";
import "../sass/Home.sass";
import profile from "../DSC07606.jpg";
import githubLogo from "../images/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png"

function Home() {
  return (
    <div className="Home">
      <ol className="Home__container --cards">
        <li className="Home__container__card">
            <span className="Home__container__card__box --imgBox">
                <img src={githubLogo}/>
            </span>
            <span className="Home__container__card__box --textBox">
                 <p className="Home__container__card__box__text">testar med lite text ok hej på dig </p>
            </span>
        </li>
        <li className="Home__container__card"></li>
        <li className="Home__container__card"></li>
      </ol>
    </div>
  );
}
export default Home;
