import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Option from './Option'

const StyledDropdown = styled.div`
  position: relative;
`

const StyledOptions = styled.div`
  width: inherit;
  position: absolute;
  top: 40px;
  left: 0;
  max-height: 30vh;
  overflow-y: auto;
  z-index: 1;
  background: #fff;
  box-shadow: 3px 9px 19px 9px rgba(0, 0, 0, 0.09);
`

class MultilineDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showOptions: false,
      selectedText: 'Please select an item in the list'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSelectedText = this.handleSelectedText.bind(this)
  }

  handleClick () {
    if (this.state.showOptions === false) {
      this.setState({
        showOptions: true
      })
    }
  }

  handleSelectedText (event) {
    this.setState({
      selectedText: event.target.getAttribute('title'),
      showOptions: false
    })
  }

  renderOptions () {
    if (this.state.showOptions) {
      return (
        <StyledOptions className='options'>
          {this.props.options.map((option, index) => {
            return [
              <Option
                key={option.slug}
                options={option}
                handleSelect={this.handleClick}
                handleSelectedText={this.handleSelectedText}
              />,
              <hr key={index} />
            ]
          })}
        </StyledOptions>
      )
    }
  }
  render () {
    return (
      <StyledDropdown onClick={this.handleClick}>
        <span className='placeholder'> {this.state.selectedText} </span>
        {this.renderOptions()}
      </StyledDropdown>
    )
  }
}

MultilineDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired
}

export default MultilineDropdown
