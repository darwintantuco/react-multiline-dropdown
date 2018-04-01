# WIP react-multiline-dropdown

Example
```
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from "react-multiline-dropdown"

const options = [
  { id: 1, title: "Simple Fruits", slug: "simple-fruits",
    summary: "Simple fruits may either be fleshy, like plums and peaches" },
  { id: 2, title: "Aggregate Fruits", slug: "aggregate-fruits",
    summary: "a fruit formed from several ovaries of one flower that produces many tiny fruits clustered tightly together." },
  { id: 3, title: "Multiple Fruits", slug: "multiple-fruits",
    summary: "a fruit formed from the fusion of the ovaries of many different flowers which develop closely together to form one bigger fruit." },
  { id: 4, title: "Accessory Fruits", slug: "accessory-fruits",
    summary: "are another kind of fruit that is not formed from the ovary, but from a different part of the flower." }
]

class App extends React.Component {
  constructor(props)  {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = { selected: null }
  }

  handleSelect(value, type) {
    this.setState({
      selected: value
    })
  }

  render() {
    return(
      <div>
        <h2> Please select a fruit </h2>
        <Dropdown options={options} handleSelect={this.handleSelect}></Dropdown>
      </div>
    )
  }
}

export default App;
```
