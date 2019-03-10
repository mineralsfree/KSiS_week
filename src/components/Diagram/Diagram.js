import React, {Component} from 'react';
import './Diagram.css'
import Beaker from "./Beaker/Beaker";

class Diagram extends Component {
    total = [];
    scores = [
        {name: "slytherin", points: 0, color: "#005E2C", house:"S"},
        {name: "ravenclaw", points: 0, color: "#025d8c", house:"R"},
        {name: "gryffindor", points: 0,  color: "#A70200", house:"H"},
        {name: "hufflepuff", points: 0,color: "#C2A41E", house:"G"}
        ];


    render() {
        this.props.stats.forEach((el) => {
            if (el.house === "S" ) {
                this.scores[0].points += el.points;
            }
            if (el.house === "R") {
                this.scores[1].points += el.points;
            }
            if (el.house === "H") {
                this.scores[3].points+= el.points;
            }
            if (el.house === "G") {
                this.scores[2].points += el.points;
            }
        });

        this.total = this.scores.map((el) => {
            return <Beaker val={el}/>

        })
        return (
            <div className={"diagram"}>

                <div className={"beaker-container"}>{this.total}</div>
                <div className={"image"}><img src={require('../../1x/Resurs_26.png')} alt={"lol"}/></div>

            </div>

        );
    }
}

export default Diagram