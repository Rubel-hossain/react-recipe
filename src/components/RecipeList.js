import React, { Component } from 'react';
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const {recipes, handleDetails, handleChange, handleSubmit, value} = this.props;
    return (
      <React.Fragment>
        <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
         <div className="container">
           <div className="row">
              <div className="col-md-10 mx-auto text-center">
                <h2>Recipes List</h2>
              </div>
           </div>
         </div>
          <div className="container">
             <div className="row">
             {(recipes.map(recipe=>{
                       return (
                        <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={()=>handleDetails(recipe.recipe_id,0)}/>
                       )
             }))}

             </div>
          </div>
      </React.Fragment>
    )
  }
}
