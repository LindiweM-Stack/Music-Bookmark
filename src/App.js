import React, { Component} from "react";
import "./style.css";
import BookmarkForm from './components/BookmarkForm';
import DisplayList from './components/DisplayList';
import MyFilter from './MyFilter';






class  App extends Component{
  state = {
    list: []
      
    
  };

  handleSubmit = (song, artist, album, year, link)=>{
    let obj = {
      song:song,
      artist:artist,
      album:album,
      year:year,
      link:link
    }
    
    if(song === ""){
      alert("Please enter text")
    }

     else if(artist  === "" ){
      alert("Please enter text")
     }

     else if(album  === "" ){
      alert("Please enter text")
     }

     else if(year  === "" ){
      alert("Please enter text")
     }

     else if(link  === "" ){
      alert("Please enter text")
     }
    
    else{
      this.setState({
        list:
        [...this.state.list,
        obj]
      })
    }
    }


    handleDelete = id =>{
      this.setState({
        list: this.state.list.filter
        (item =>item.id !==id)
      })
      console.log(this.state.list)
    }
    

   
  render(){
    
    const info =
    [
      
    ];
    
    return (
        
      <div> 
         <BookmarkForm   handleSubmit={this.handleSubmit}/>
         <DisplayList  data={this.state.list} Delete={this.handleDelete}/>
         <div>
         <MyFilter content={info} />
         
        


         </div>
         
      </div>
     
      
    

    )
  }
  

  
}


export default App ;