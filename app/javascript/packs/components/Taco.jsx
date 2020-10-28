import React from 'react'
import PropTypes from 'prop-types'

class Taco extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: this.props.taco.complete,
    }
  }
  render() {
    const { taco } = this.props
    return (
      <tr className={`${this.state.complete ? 'table-light' : ''}`}>
        <td>
          <input
            type="text"
            defaultValue={taco.title}
            disabled={this.state.complete}
            className="form-control"
            id={`taco__title-${taco.id}`}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={taco.base}
            disabled={this.state.complete}
            className="form-control"
            id={`taco__base-${taco.id}`}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={taco.filling}
            disabled={this.state.complete}
            className="form-control"
            id={`taco__filling-${taco.id}`}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={taco.sauce}
            disabled={this.state.complete}
            className="form-control"
            id={`taco__sauce-${taco.id}`}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={taco.garnish}
            disabled={this.state.complete}
            className="form-control"
            id={`taco__garnish-${taco.id}`}
          />
        </td>
        <td className="text-right">
          <button className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default Taco

Taco.propTypes = {
  taco: PropTypes.object.isRequired,
}