import React, {Component} from 'react';
import CommandLine from './CommandLine/CommandLine'
import './LeaderBoard.css'
class LeaderBoard extends Component{
    total = [];
    render(){
        //{this.props.stats[0].points}
        this.total = this.props.stats.map((el,i)=>{
            return <CommandLine content={el} index={i}/>
        })
        return (<div className={'leaderBord'}><h2 className={'leaderBoard-capture'}>TOP</h2><div className={'leaderBord-inner'}><ul>{this.total}</ul></div></div>);
    }
}
export default LeaderBoard