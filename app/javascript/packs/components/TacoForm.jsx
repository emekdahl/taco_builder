import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import setAxiosHeaders from "./AxiosHeaders"

class TacoForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.titleRef = React.createRef()
    this.baseRef = React.createRef()
    this.fillingRef = React.createRef()
    this.garnishRef = React.createRef()
    this.sauceRef = React.createRef()
  }

  handleSubmit(e) {
    e.preventDefault()
    setAxiosHeaders()
    axios
      .post('/api/v1/tacos', {
        taco: {
          title: this.titleRef.current.value,
          base: this.baseRef.current.value,
          filling: this.fillingRef.current.value,
          sauce: this.sauceRef.current.value,
          garnish: this.garnishRef.current.value,
        },
      })
      .then(response => {
        const taco = response.data
        this.props.createTaco(taco)
      })
      .catch(error => {
        console.log(error)
      })
    e.target.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="my-3">
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              name="title"
              ref={this.titleRef}
              required
              className="form-control"
              id="title"
              placeholder="Title your taco..."
            />
            <br></br>
            <input
              type="text"
              name="base"
              ref={this.baseRef}
              required
              className="form-control"
              id="base"
              placeholder="Add your base"
            />
            <br></br>
            <input
              type="text"
              name="filling"
              ref={this.fillingRef}
              required
              className="form-control"
              id="filling"
              placeholder="Add your filling"
            />
            <br></br>
            <input
              type="text"
              name="sauce"
              ref={this.sauceRef}
              required
              className="form-control"
              id="sauce"
              placeholder="Add your sauce"
            />
            <br></br>
            <input
              type="text"
              name="garnish"
              ref={this.garnishRef}
              required
              className="form-control"
              id="garnish"
              placeholder="Add your garnish"
            />
          </div>
          <div className="form-group col-md-4">
            <button className="btn btn-outline-success btn-block">
              Add Taco
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default TacoForm

TacoForm.propTypes = {
  createTaco: PropTypes.func.isRequired,
}