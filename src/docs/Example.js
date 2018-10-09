import React from 'react'
import PropTypes from 'prop-types'
import CodeExample from './CodeExample'

// This way is easy, but adds 214K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showCode: false }
  }

  toggleCode = event => {
    event.preventDefault()
    this.setState(prevState => ({ showCode: !prevState.showCode }))
  };

  render () {
    const { showCode } = this.state
    const {
      example: { code, description, name }
    } = this.props
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const { componentName } = this.props
    const ExampleComponent = require(`./examples/${componentName}/${name}`) // eslint-disable-line global-require, import/no-dynamic-require
      .default
    return (
      <div className="example">
        {description && <h4>{description}</h4>}

        <ExampleComponent />

        <p>
          <button type="button" onClick={this.toggleCode}>
            {showCode ? 'Hide' : 'Show'} Code
          </button>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  componentName: PropTypes.string.isRequired
}

export default Example
