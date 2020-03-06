import React, { Component } from 'react';

class Turtles extends Component{
    render(){
        const { turtles } = this.props;
        const turtleList = turtles.map(turtle => {
            return(
                <div className="turtle" key={ turtle.id }>
                    <div>Name: { turtle.name } </div>
                    <div>Mask: { turtle.mask } </div>
                </div>
            )
        })
        return(
            <div className="turtlelist">
                { turtleList }
            </div>
        )
    }
}

export default Turtles