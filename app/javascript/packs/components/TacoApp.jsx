import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Tacos from "./Tacos";
import Taco from "./Taco";
import TacoForm from "./TacoForm";
import _ from "lodash";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

class TacoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tacos: [],
      isLoading: true,
      errorMessage: null,
    };
    this.getTacos = this.getTacos.bind(this);
    this.createTaco = this.createTaco.bind(this);
  }

  componentDidMount() {
    this.getTacos();
  }

  getTacos() {
    axios
      .get("/api/v1/tacos")
      .then((response) => {
        this.setState({ isLoading: true });
        const tacos = response.data;
        this.setState({ tacos });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: true });
        console.log(error);
      });
  }

  createTaco() {
    const taco = [taco, ...this.state.tacos];
    this.setState({ tacos });
  }

  render() {
    return (
      <>
        {this.state.errorMessage && (
          <ErrorMessage errorMessage={this.state.errorMessage} />
        )}
        {!this.state.isLoading && (
          <>
            <TacoForm createTaco={this.createTaco} />
            <Tacos>
              {this.state.tacos.map((taco) => (
                <Taco key={taco.id} taco={taco} getTacos={this.getTacos} />
              ))}
            </Tacos>
          </>
        )}
        {this.state.isLoading && <Spinner />}
      </>
    );
  }
}

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("taco-app");
  app && ReactDOM.render(<TacoApp />, app);
});
