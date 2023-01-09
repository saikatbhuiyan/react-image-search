import React from "react";

class SearchBar extends React.Component {
  state = { query: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query);
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
