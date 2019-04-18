import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";



class App extends Component {

  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=0a5144d8aa10aa93cfc182edce516452",
    base_url: "https://www.food2fork.com/api/search?key=0a5144d8aa10aa93cfc182edce516452",
    recipe_id: 35390,
    pageIndex: 1,
    search: "",
    query: "&q="
  }

  async getRecipes(){
     
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      
      this.setState({
        recipes: jsonData.recipes
      });

    }catch(error){

       console.log(error);
    }

  }

  componentDidMount(){

     this.getRecipes();
  }

  handleIndex = index =>{
    this.setState({
      pageIndex: index
    });
  }

  handleDetails = (id,index)=>{
    this.setState({
       pageIndex: index,
       recipe_id: id
    });
  }

  handleChange = (e)=>{
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit = (e) => {

     e.preventDefault();

     const {base_url,search,query} = this.state;

     this.setState(()=>{
       return (
         {url: `${base_url}${query}${search}`, search:""}
       );
     },()=>{
       this.getRecipes();
     })
  }

  displayPages(index){
    switch(index){
       default: 
       case 1:
          return( <RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.search} />);
       case 0: 
         return(<RecipeDetails id={this.state.recipe_id} handleIndex={this.handleIndex} />);
    }
  }

  render() {

    
    return (
     <React.Fragment>
       
       {this.displayPages(this.state.pageIndex)}
     </React.Fragment>
    );
  }
}

export default App;
