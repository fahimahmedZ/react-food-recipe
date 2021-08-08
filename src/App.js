import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import axios from 'axios';

function App() {
  
  const  [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  // Api ID and KEY
  const APP_ID = "a7f43cf1";
  const APP_KEY = "f9e934b862cad2d61a857c940fc4739b";

  useEffect(() => {
    getRecipes()
  }, [])
  // get the data from api
  const getRecipes = async ()=> {
    const result = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(result.data.hits);
  }
 
  const onInputChange = (e) => {
    setSearch(e.target.value)
  }

  // when click button recall the api and search dayenamicly
  const onSearchClick = () => {
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} 
        onSearchClick={onSearchClick} 
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
