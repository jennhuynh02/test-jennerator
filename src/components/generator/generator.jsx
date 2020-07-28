import React from 'react';
import './generator.css';
import InputType from "../input/inputType";
import Output from "../output/output";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
    }
    this.updateOutput = this.updateOutput.bind(this);
    this.clear = this.clear.bind(this);
  } 
  
  updateOutput(result) {
    if (result && result !== "output") {
      this.setState({ output : result });
    } else {
      return (e) => this.setState({ output: e.currentTarget.value });
    }
  }

  clear() {
    this.setState({ output: '' });
  }

  render() {
    return (
      <div className="generator">
        <InputType updateOutput={this.updateOutput}/> 
        {/* We need this update passed in as a prop so that we can update the state of the output through this parent component. */}
        <Output output={this.state.output} updateOutput={this.updateOutput} clear={this.clear}/>
      </div>
    )
  }
};

export default Generator;