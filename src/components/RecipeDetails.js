import React, { Component } from 'react';
import {recipe} from "../tempDetails";

export default class RecipeDetails extends Component {

  state = {
    recipe: recipe
  }
  async componentDidMount(){
    
     const {id} = this.props;
     
     const url = `https://www.food2fork.com/api/get?key=502a4340b02015341aebd843637dc210&rId=${id}`;

     try {

      const data = await fetch(url);
      const jsonData = await data.json();

      this.setState(()=>{

        return {recipe: jsonData.recipe} 
        
      },()=>{});


     } catch(error){
         
       console.log(error);
     }
  }
  render() {

    const {handleIndex} = this.props;

    const {f2f_url,image_url,ingredients,publisher,publisher_url,source_url,title} = this.state.recipe;
    
    return (
       <React.Fragment>
           <div className="container my-3">
             <div className="row">
               <div className="col-md-6 mx-auto">
                  <button className="btn btn-warning text-white" onClick={()=>handleIndex(1)}>Back To Home</button>
                  <img src={image_url} className="img-fluid d-block mt-3"/>
               </div>
               <div className="col-md-6">
                  <h4 className="text-capitalize">{title}</h4>
                  <h6 className="text-warning text-capitalize">Published By - {publisher}</h6>
                  <a href={f2f_url} className="btn btn-info mr-4" target="_blank">Recipe Url</a>
                  <a  className="btn btn-warning my-3" href={source_url}>Source </a>
                  <h5>ingredients</h5>
                  <ul className="list-group">
                    {ingredients.map((item,index)=>{
                       return (
                        <li key={index} className="list-group-item">
                           {item}
                        </li>
                       );
                    })}
                  </ul>
               </div>
             </div>
           </div>
       </React.Fragment>
    )
  }
}
