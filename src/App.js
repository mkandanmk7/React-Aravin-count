import React from "react";

class Mai extends React.Component {
  constructor() {
    console.log("contstructor done");
    super();
    this.state = {
      count: 0,
      name: "muthu",
      age: 34,
    };
  }
  componentDidMount() {
    console.log("Mounted Api done");
  }
  componentDidUpdate(prevP, prevS) {
    console.log("updated successfully", prevP, prevS);
    if (prevS.count === this.state.count) {
      console.log(prevS.count);
    }
    if (prevS.name !== this.state.name) {
      console.log(this.state.name);
    }
  }

  // increment = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // decrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  // reset = () => {
  //   this.setState({ count: 0 });
  // };
  changeName = () => {
    console.log("name changeed");
    this.setState({ name: "gabbie" });
  };
  counterApp = (oper) => {
    if (oper === "increment") this.setState({ count: this.state.count + 1 });
    else if (oper === "decrement")
      this.setState({ count: this.state.count - 1 });
    else this.setState({ count: 0 });
  };

  render() {
    console.log("render done");
    return (
      <>
        <p>Count: {this.state.count}</p>
        <p>Count: {this.state.name}</p>
        <button onClick={this.changeName}>changeName</button>
        <button onClick={() => this.counterApp("increment")}>Increment</button>
        <br></br>
        <br></br>
        <button onClick={() => this.counterApp("decrement")}>Decrement</button>
        <br></br>
        <br></br>
        <button onClick={() => this.counterApp("reset")}>Reset</button>
      </>
    );
  }
}

export default Mai;
