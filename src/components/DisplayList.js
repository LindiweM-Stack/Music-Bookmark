import React, { useState } from "react";


    
function DisplayList (props){

  const handleDelete = () =>{
    props.Delete()
  }


  return(
    <div className="container">
    <ul className="list-group w-75 mt-3">

      {props.data.map(item=>(
        <div className="col-sm-mt-5 mb-5">
          <div className="card">
            <div className="card-body">
              <li className="list-group-item">

                <div>
                  <img src="https://th.bing.com/th/id/R.73e9d6f859fd2645ca5eb400d46f1d76?rik=rqBPMdmBC3YMvA&pid=ImgRaw&r=0" alt=""width="200px" height="200px"></img>
                </div>

                <h3>My Favourite!</h3>
                <br />
              <h4 style={{display:'flex'}}>Song: {item.song}</h4>
            <h4 style={{display:'flex'}}>Artist:{item.artist}</h4>
            <h4 style={{display:'flex'}}>Album: {item.album}</h4>
            <h4 style={{display:'flex'}}>Year Released:{item.year}</h4>
            <h4 style={{display:'flex'}}>Link:{item.link}</h4>
            <button onClick={()
            =>handleDelete(item.id)}>
          delete 
          </button>
          </li>
          </div>
        </div>
        </div>

      ))}
      </ul>
      </div>
  )
}

export default DisplayList;