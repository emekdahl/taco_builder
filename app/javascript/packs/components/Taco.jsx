import React from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import setAxiosHeaders from './AxiosHeaders'

class Taco extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: this.props.taco.complete,
    }
    this.handleDestroy = this.handleDestroy.bind(this);
    this.path = `/api/v1/tacos/${this.props.taco.id}`;
  }

  handleDestroy() {
    setAxiosHeaders();
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      axios
        .delete(this.path)
        .then(response => {
          this.props.getTacos();
        })
        .catch(error => {
          console.log(error);
        });
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
            <button 
                onClick={this.handleDestroy}
                className="btn btn-outline-danger"
            >
                Delete
            </button>
        </td>
      </tr>
    )
  }
}

export default Taco

Taco.propTypes = {
  taco: PropTypes.object.isRequired,
  getTodoItems: PropTypes.func.isRequired
}