

"use client";
import {useEffect,useState } from 'react'
 

function Data() {
  const [data, setData] = useState([])
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

 
  useEffect(() => {
   
     
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
      .then(response => {
           return response.json();
       })
        .then((data) => {
        setData(data.results.slice(0, 10))})
  }, [])
 
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };
 
  return (
    <div>
      {data.map((item)=>{
         return(
            <div>
               <div>
                   <div >
                        <img className="image-container" src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`}/>
                   </div>
                   <div className="detail-container">
                   	<div className="s">
                        <h2>{item.original_title}</h2>
                       
                        <h3 className="s1">a</h3>
                        <p>{item.release_date}</p>
                        <h3>Description</h3>
                        <p>{item.overview}</p>
                       </div>
                        <div className="d">
                        
                           <img onClick={handleLike} className="icon_like" src="like.png"/>
                           <img onClick={handleDislike} className="icon_like ic_dislike" src="dislike.png"/>
                           <img className="icon_like ic1_delete" src="delete.png"/>

                        </div>
                       
                   </div>
                </div>
            </div>
   
           
         );
         
      })};
		  <div className="down">
		  		<h1>Add A New Movie</h1>
		  		<p>To add a movie you have to fill a form .The added movie will appear in the list above</p>
		  		<div className="x">New Movie</div>
		  			
		   </div>
		   
    </div>
   
  )
}
 export default Data

      
                 
