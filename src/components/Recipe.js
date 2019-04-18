import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {

    const {recipe_id,image_url,title,publisher,source_url} = this.props.recipe;
    const {recipe,handleDetails} = this.props;

    return (
      <React.Fragment>
          <div className="col-md-4 my-4">
           <div className="card">
             <div className="card-top-image">
                <img className="img-fluid" src={image_url} alt={title}/>
             </div>
             <div className="card-body">
               <h6>{title}</h6>
               <b className="text-info">{publisher}</b>
             </div>
             <div className="card-footer d-flex">
               <button className="btn btn-primary" onClick={handleDetails}>Details</button>
               <a className="btn btn-success ml-3" href={source_url} target="_blank">Recipes Url</a>
             </div>
           </div>
          </div>
      </React.Fragment>
    )
  }
}
