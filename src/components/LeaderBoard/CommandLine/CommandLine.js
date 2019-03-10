import React, {Component} from 'react';
import './commandLine.css'

class CommandLine extends Component {
    render() {
        return (
            <li>
                <div className={'team-info'}>
                    <img className={'label-img'} src={require("./embl_" + this.props.content.house + ".png")}
                         alt={"kek"}/>
                    <p>{this.props.index + ". " + this.props.content.name+ " " + this.props.content.points}</p>
                </div>
            </li>
        )
    }
}

export default CommandLine