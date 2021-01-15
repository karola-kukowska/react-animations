import React, { Component } from "react";
import Pixel from "./Pixel/Pixel";
import classes from "./Sketch.css";

class Sketch extends Component {
    constructor(props) {
        super(props);
        this.state = { isReset: false, isBlue: false, isGray: false };
    }

    generateRandomColor(event) {
        let randomNum = Math.floor(Math.random() * 65 + 185);
        event.target.style.backgroundColor = `hsl(${randomNum}, 100%, 70%)`;
    }

    handleReset() {
        // this.setState({ isReset: true });
    }

    render() {
        return (
            <div className="SketchPanel">
                <div className="ButtonPanel">
                    <button onClick={this.handleReset}>Reset</button>
                    <button>Gray Scale</button>
                    <button>Blue Scale</button>
                </div>
                <div className={classes.SketchContainer}>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                </div>
            </div>
        );
    }
}

export default Sketch;
