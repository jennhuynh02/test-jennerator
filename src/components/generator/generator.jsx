import React from 'react';
import './generator.css';
import string from '../../util/string';
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
    return (
      <div className="generator">
        <div className="input">
          <label>
            Input type:
            <br/>
            <select name="type" value={this.state.type} onChange={this.update('type')}>
              <option value="string">String</option>
              <option value="array">Array</option>
              <option value="hash">Hash</option>
              <option value="integer">Integer</option>
            </select>
          </label>

          <label>
            Capitalized
            <input type="checkbox" onChange={(e) => this.check('capitalized')} value={this.state.capitalized}/>
          </label>
          <label>
            Lowercase
            <input type="checkbox" onChange={(e) => this.check('lowercase')} value={this.state.lowercase}/>
          </label>
          <label>
            Integer
            <input type="checkbox" onChange={(e) => this.check('integer')} value={this.state.integer}/>
          </label>
          <label>
            Specialized
            <input type="checkbox" onChange={(e) => this.check('specialized')} value={this.state.specialized}/>
          </label>
          
          <label>
            Length:
            <br/>
            <input name="length" value={this.state.length} onChange={this.update('length')}/>
          </label>
          
          <br/>
          <button onClick={this.createOutput}>Generate Test Case!</button>
        </div>
        
        <Output output={this.state.output} update={this.update} clear={this.clear}/>

      </div>
    )
  }
};

export default Generator;