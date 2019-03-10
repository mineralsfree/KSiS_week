import React, {Component} from 'react';
import Diagram from './components/Diagram/Diagram.js'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'
import './App.css';
import axios from 'axios';
import stats from './stats.js'

class App extends Component {
    constructor() {

        super();
        this.state = {
            stats: stats
        };
        console.log(stats)
    }

    tick() {
        // this.setState(prevState =>({
        //   stats: JSON.parse("[{\"id\":1,\"name\":\"BrakhMen\",\"points\":30,\"house\":\"G\"},{\"id\":2,\"name\":\"Vox\",\"points\":0,\"house\":\"G\"}]")
        // }));
        axios.get('https://ksis.brakh.men/api/teams/all').then(response => {
            this.setState({stats: response.data})
            console.log(response.data)
        })

    }

    componentDidMount() {
        this.interval = setInterval(()=>{this.tick()}, 1000);
    }

    render() {
        return (
            <div className="App">

                <Diagram stats={this.state.stats}/>
                <LeaderBoard stats={this.state.stats}/>
                <p className={'advertisement'}>Powered by Brakhmen</p>
            </div>
        );
    }
}

export default App;
