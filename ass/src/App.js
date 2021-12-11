// App.js
import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';
import { Card } from './components/Card';
import { Card1 } from './components/Card1';
import { Data } from "./dataJ";

import { Datafile } from './Datafile';
import Details from "./Details";


const options = [
  { value: JSON.stringify((Data[0]), null, 4), label: 'Bugatti' },
  { value: JSON.stringify(Data[1]), label: 'Ferrari' },
  { value: JSON.stringify(Data[2]), label: 'Aston Martin' },
  { value: ["ARAIMileade : ", Data[0].ARAIMileage, "bhp : ", Data[0].bhp], label: 'Koenigsegg' },
  { value: JSON.stringify(Data[4], null), label: 'BMW' },

  {
    value: "ARAIMileade :  " + Data[0].ARAIMileage +
      "bhp : " + Data[0].bhp, label: 'Cadillac'
  },
];











console.log(Card)
class App extends Component {
  state = {
    selectedOption: [],
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    console.log(options);

    return (
      <div className='cont'>

        <div className="App" >
          <Card />
          <Card1 />

          <h3>You Favorite Car</h3>
          <Select
            isMulti={true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          {selectedOption.length > 0 ? (
            <div>
              <h3>Selected Cars</h3>
              <ul>
                {this.state.selectedOption.map((option) =>
                  <li key={option.value}>
                    {option.value}

                  </li>

                )}
              </ul>
            </div>) : ''
          }
        </div>
      </div>
    );
  }
}

export default App;

