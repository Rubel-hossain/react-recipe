import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const {handleChange, handleSubmit, value} = this.props;
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto text-center">
                 <h2 className="my-3">Search For <span className="text-danger">Recipes</span></h2>
                 <form onSubmit={handleSubmit}>
                   <div className="form-group">
                      <div className="input-group"> 
                      <input type="text" className="form-control" value={value} id="search" placeholder="chicken,onions,carrots" onChange={handleChange}/>
                      <div className="input-group-append">
                        <button className="btn btn-info" type="submit">Search</button>
                      </div>
                      </div>
                   </div>
                 </form>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
