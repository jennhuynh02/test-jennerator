import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const characters = ["capitalized", "lowercase", "integer", "specialized"];

    return(
      <div className="input">
        <label>
          Input Type:
            <br />
          <select name="type" onChange={this.props.update('type')}>
            <option value="string">String</option>
            <option value="array">Array</option>
            <option value="hash">Hash</option>
            <option value="integer">Integer</option>
          </select>
        </label>

        Character Types:
        <div className="character-checkboxes">
          {characters.map(type => (
            <div key={type}>
              <span className="checkbox-label">{type[0].toUpperCase() + type.slice(1)}</span>
              <input type="checkbox" onChange={(e) => this.props.check(type)} value={this.state.capitalized} />
            </div>
          ))}
        </div>

        Length:
          <br />
        <input name="length" value={this.props.length} onChange={this.props.update('length')} />

        <button className="generate-button" onClick={this.props.createOutput}>Generate Test Case!</button>

      </div>
    )
  }
}

export default Input;