import React from 'react';

class Tacos extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Base</th>
                <th scope="col">Filling</th>
                <th scope="col">Garnish</th>
                <th scope="col">Sauce</th>
                <th scope="col" className="text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </>
    )
  }
}
export default Tacos