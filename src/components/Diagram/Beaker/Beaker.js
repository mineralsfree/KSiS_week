import React, {Component} from 'react';
import './beaker.css'
function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.3)';
    }
    throw new Error('Bad Hex');
}
class Beaker extends Component {
    render() {
      //  console.log(this.props.val.color);
        this.divStyle = {
            backgroundColor: this.props.val.color,
            height: this.props.val.points*2
        };
        this.opacStyle ={
            backgroundColor: hexToRgbA(this.props.val.color),
            color: this.props.val.fontcolor
        };

        return (

            <div className={'opacitor'} style={this.opacStyle}><div style={this.divStyle} className={"Beaker"}><p style={this.opacStyle}>{this.props.val.points}</p></div></div>

        );
    }
}

export default Beaker