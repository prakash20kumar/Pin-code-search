import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Pincode from './Pincode';

class App extends Component {
    state = { pin: '', dt: [], msg: '' }

    handleChange = (evt) => {
        if (evt.target.value >= 0 && evt.target.value <= 999999) {
            this.setState({ pin: evt.target.value })
        }


    }
    handleClick = () => {
        if (this.state.pin !== '') {
            axios.get(`https://api.postalpincode.in/pincode/${ this.state.pin }`)
                .then((response) => {
                    this.setState({ dt: [] })
                    const pn = response.data[0].PostOffice;
                    this.setState({ msg: response.data[0].Message })
                    this.setState({ dt: pn })
                })
                .catch((error) => {
                    console.log("Error: ", error);
                })
        }
        else {
            this.setState({ msg: 'No records found' })
        }
    }

    handleEnter = (evt) => {
        if (evt.keyCode === 13) {
            if (this.state.pin !== '') {
                axios.get(`https://api.postalpincode.in/pincode/${ this.state.pin }`)
                    .then((response) => {
                        this.setState({ dt: [] })
                        const pn = response.data[0].PostOffice;
                        this.setState({ msg: response.data[0].Message })
                        this.setState({ dt: pn })
                    })
                    .catch((error) => {
                        console.log("Error: ", error);
                    })
            }
            else {
                this.setState({ msg: 'No records found' })
            }
        }
    }
    render() {
        let output = null;
        if (this.state.msg === 'No records found') {
            output = (
                <h2>Please Enter Correct Pin Code.</h2>
            )

        } else {
            output = (this.state.dt.map((rcd, i) => {
                return (
                    <Pincode key={ i }
                        Name={ rcd.Name }
                        BranchType={ rcd.BranchType }
                        Block={ rcd.Block }
                        Division={ rcd.Division }
                        District={ rcd.District }
                        Region={ rcd.Region }
                        State={ rcd.State }
                        Country={ rcd.Country }
                        DeliveryStatus={ rcd.DeliveryStatus }
                    />
                )
            }))
        }
        return (
            <div id="content">
                <h1>INDIA POST (Search by Pin Code)</h1>
                <input type="text" value={ this.state.pin } onChange={ this.handleChange } id="inp" onKeyDown={ this.handleEnter } />
                <input type="button" value="Search" onClick={ this.handleClick } className="btn" />
                <hr />
                {this.state.msg }<br />
                {output }
            </div>
        );
    }
}

export default App;