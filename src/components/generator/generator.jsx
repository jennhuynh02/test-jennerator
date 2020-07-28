import React from 'react';
import './generator.css';
import string from '../../util/string';
import Input from "../input/input";
import Output from "../output/output";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'string',
      length: 0,
      output: '',
      capitalized: false,
      lowercase: false,
      integer: false,
      specialized: false,
    }
    this.createOutput = this.createOutput.bind(this);
    this.update = this.update.bind(this);
    this.clear = this.clear.bind(this);
    this.check = this.check.bind(this);
  } 
  
  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  createOutput() {
    if (this.state.type === "string") {
      return this.setState({ output: string(this.state.length) });
    }
  }

  check(field) {
    if (field) {
      this.setState({ [field]: !this.state[field] });
    }
  }

  clear() {
    this.setState({ output: '' });
  }

  render() {
    console.log(this.state)
    return (
      <div className="generator">
        <Input update={this.update} check={this.check} length={this.state.length} createOut={this.createOutput}/>
        
        <Output output={this.state.output} update={this.update} clear={this.clear}/>
      </div>
    )
  }
};

export default Generator;