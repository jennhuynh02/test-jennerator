import React from 'react';
import string from '../../util/string'

class StringInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capitalized: false,
      lowercase: false,
      integer: false,
      specialized: false,
      length: 0,
    }
    this.type = this.type.bind(this);
    this.update = this.update.bind(this);
    this.createStringInput = this.createStringInput.bind(this);
  }

  update(field, range) {
    if (this.state[field] && range) {
      return (e) => {
        let minMax = this.state[field]
        minMax[range] = e.currentTarget.value
        this.setState({ [field]: minMax });
      };
    }
    if (field === "length") {
      return (e) => this.setState({ [field]: e.currentTarget.value });
    }
  }

  type(field) {
    if (!this.state[field]) {
      this.setState({ [field]: {min: 0, max: 0} });
    } else {
      this.setState({ [field]: false});
      document.getElementById(`${field}min`).value = 0
      document.getElementById(`${field}max`).value = 0
    }
  }
  
  createStringInput() {
    const { updateOutput } = this.props;
    updateOutput(string(this.state));
  }
  
  render() {
    console.log(this.state)
    const characters = ["capitalized", "lowercase", "integer", "specialized"];

    return (
      <div className="input">

        <div className="input-section">
          Length:
            <br />
          <input type="number" min="0" name="length" value={this.state.length} onChange={this.update('length')} />
        </div>

        <div className="input-section">
          <table>
            <thead>
              <tr>
                <th>Include</th>
                <th>?</th>
                <th>Min</th>
                <th>Max</th>
              </tr>
            </thead>
            {characters.map(type => (
              <tbody key={type}>
                <tr>
                  <td><span className="checkbox-label">{type[0].toUpperCase() + type.slice(1)}</span></td>
                  <td><input className="checkbox" type="checkbox" onChange={(e) => this.type(type)}/></td>
                  <td> <input type="number" className="num" min="0" id={`${type}min`} onChange={this.update(type, "min")} readOnly={!this.state[type]}/> </td>
                  <td> <input type="number" className="num" min="0" id={`${type}max`} onChange={this.update(type, "max")} readOnly={!this.state[type]}/> </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="input-section">
          Specifications:
            <br />
            <table>
              <thead>
                <tr>
                  <th>Ensure</th>
                  <th>Restrict</th>
                  <th>Min</th>
                  <th>Max</th>
                </tr>
              </thead>
               {characters.map(type => (
                <tbody key={type}>
                  <tr>
                    <td> <input /> </td>
                    <td> <input /> </td>
                     <td> <input className="num"/> </td>
                     <td> <input className="num"/> </td>
                  </tr>
                </tbody>
                ))}
            </table>
        </div>

        <button className="generate-button" onClick={this.createStringInput}>Generate Test Case!</button>
      </div>
    )
  }
}

export default StringInput;