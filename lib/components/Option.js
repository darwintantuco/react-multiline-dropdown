import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledOption = styled.div`
  font-weight: bold;
`

const Title = styled.div`
  color: #2b2b2b;
`

const Summary = styled.div`
  color: #7f7f7f;
  font-size: 11.67px;
`

const Option = props => {
  const { slug, title, summary } = props.options
  const handleEvents = event => {
    props.handleSelect(event.target.getAttribute('value'), 'selected')
    props.handleSelectedText(event)
  }
  return (
    <StyledOption
      className='option'
      value={slug}
      title={title}
      onClick={handleEvents}
    >
      <Title className='title' value={slug} title={title}>
        {title}
      </Title>
      <Summary className='summary' value={slug} title={title}>
        {summary}
      </Summary>
    </StyledOption>
  )
}

Option.propTypes = {
  options: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleSelectedText: PropTypes.func.isRequired
}

export default Option
