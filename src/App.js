import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBox from "./components/search-bar/search-box.component";
import CardList from "./components/card-list/card-list.component";

function App() {
  const [searchField, setSearchField] = useState("");

  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setLoading(false);
        setMonsters(users);
        // setFilterMonsters(users);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Index</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder="Search Monsters"
        className="monsters-search-box"
      />

      <CardList monsters={monsters} searchValue={searchField} />
    </div>
  );
}

export default App;
