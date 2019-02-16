import React, { Component } from 'react'
import './BMI.css'

export default class BMI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 5 * 12, //five feet
            weight: 150 // 150 lbs
        };
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
    }

    handleHeightChange(event) {
        this.setState({height: event.target.value});
    }

    handleWeightChange(event) {
        this.setState({weight: event.target.value});
    }

    displayHeight() {
        const feet = Math.floor(this.state.height / 12);
        const inches = this.state.height % 12;
        return `${feet} ft ${inches} ` + this.pluralize(this.state.height, 'inch', 'inches')

    }

    displayWeight() {
        return this.state.weight + ' ' + this.pluralize(this.state.weight, 'pound', 'pounds')
    }

    pluralize(count, singular, plural) {
        if (count ===1) {
            return singular
        }
        return plural
    }

    displayBMI() {
        let bmiMath =  703 * this.state.weight / (this.state.height * this.state.height); //actual formula
        let bmiRound = bmiMath.toFixed(2); // to fixed!  great for 2 decimal places
        return bmiRound;  //value in now a STRING from tofixed()
    }

    displayClassification() {
        const bmi = parseInt(this.displayBMI());

        if (bmi < 18.5) {
            return 'Underweight'
        } else if (bmi < 24.9) {
            return 'Normal'
        } else if (bmi < 29.9) {
            return "Overweight"
        } else {
            return "Obese"
        }
    }



    render() {
        return (
            <div className='container'>
                <h1>BMI Calculator</h1>
                <p>Height</p>
                <p>
                    <input type='range' value={this.state.height}
                           min='1' max={8 * 12}
                           onChange={this.handleHeightChange}/>
                </p>
                <p>Weight</p>
                <p>
                    <input type='range' value={this.state.weight}
                           min='1' max={350}
                           onChange={this.handleWeightChange}/>
                </p>

                <div className='result'>
                    {this.displayHeight()}
                </div>

                <div className='result'>
                    {this.displayWeight()}
                </div>

                <div className='result'>
                    {this.displayBMI()}
                </div>

                <div className='result'>
                    {this.displayClassification()}
                </div>
            </div>
        );
    }
}