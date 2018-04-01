import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"
import styled from 'styled-components'

import Option from "./Option"
import ErrorMessage from "./ErrorMessage"

const StyledDropdown = styled.div`
  position: relative;
`

const StyledOptions = styled.div`
  width: inherit;
  position: absolute;
  top: 40px;
  left: 0;
  max-height: 45vh;
  overflow-y: auto;
  z-index: 1;
  background: #FFF;
  box-shadow: 3px 9px 19px 9px rgba(#000, 0.09);
`

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showOptions: false,
      selectedText: "Please select an item in the list"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSelectedText = this.handleSelectedText.bind(this)
  }

  handleClick() {
    if(this.state.showOptions === false) {
      this.setState({
        showOptions: true
      })
    }
  }

  handleSelectedText(event) {
    this.setState({
      selectedText: event.target.getAttribute("title"),
      showOptions: false
    })
  }

  renderOptions() {
    if(this.state.showOptions) {
      return (
        <StyledOptions className="options">
        {
          this.props.options.map((option, index) => {
            return ([
              <Option key={option.slug} options={option}
                handleSelect={this.props.handleSelect}
                handleSelectedText={this.handleSelectedText}/>,
              <hr key={index} />
            ])
          })
        }
        </StyledOptions>
      )
    }
  }
  render() {
    return (
      <StyledDropdown
        onClick={this.handleClick} >
        <span className="placeholder"> {this.state.selectedText} </span>
        {this.renderOptions()}
      </StyledDropdown>
    )
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default Dropdown
