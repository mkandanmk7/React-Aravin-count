// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

import Mai from "./App";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          AGe{" "}
        </button>
        <p>{this.state.age}</p>
        <Mai age={this.state.age} />;
      </>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
