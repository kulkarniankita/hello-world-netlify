import React from "react";
import "./App.css";
import { getUserService } from "./api/services";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    getUserService().then(res => {
      this.setState({ data: res.data });
    });
  };

  render() {
    return <div className="App">{JSON.stringify(this.state.data)}</div>;
  }
}

export default App;
