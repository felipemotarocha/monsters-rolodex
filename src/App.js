import React, { Component } from "react";

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.setState({ monsters: data })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // Filtering the monsters according to the user search
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} searchField={this.state.searchField} />
      </div>
    );
  }
}

export default App;
