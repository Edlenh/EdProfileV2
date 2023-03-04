import React from "react";
import Container from 'react-bootstrap/Container';

const Home =()=>{
    return(
        <main>
        <div>
            <h1>Hello there!</h1>
            <h1>My name is Edward</h1>
            <h2>Web Developer By Day, Web Developer by Night</h2>
        </div>

    <Container>
        <h1>Skill Set</h1>
        <ul className="skillLi">
            <li> JavaScript
            </li>
            <li> HTML5
            </li>
            <li> CSS
            </li>
            <li> BootStrap
            </li>
            <li> Bulma
            </li>
            <li> JQuery
            </li>
            <li> MySql
            </li>
            <li> MongoDB
            </li>
            <li> Jest
            </li>
            <li> Github
            </li>
            <li> Chart.js
            </li>

        </ul>
    </Container>
    </main>
    )
}

export default Home;