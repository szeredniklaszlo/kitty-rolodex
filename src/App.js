import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChangeSearch = e => this.setState( { searchValue: e.target.value } );

  render() {
    const { monsters, searchValue } = this.state;
    const searchedMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <div className='App'>
        <h1>Kitty Catalog</h1>

        <SearchBox
          placeholder='Keress a macskák között'
          handleChange = { this.handleChangeSearch }
        />

        <CardList monsters={searchedMonsters} />
      </div>
    );
  }
}

export default App;
