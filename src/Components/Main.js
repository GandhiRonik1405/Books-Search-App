import React,{useState} from 'react' 
import herotf from '../resources/A2.jpg'
import Card from './Card'
import axios from 'axios';


const Main = () => {

const [search, setsearch] = useState("");
const [bookData, setbookData] = useState([])

const searchBook=(e)=>{
  if(e.key==="Enter"){
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA3Lr2tfUZDlrgkOv3quQ-Uy_pS1WQpdt8'+'&maxResults=40')
    .then(Response=>setbookData(Response.data.items))
    .catch(error=>console.log(error))
  }
}

  return (
    <>  
       <div clasName="header">

        <div className="row1">
        <div className="header"  style={{ backgroundImage: `url(${herotf})`,content:'', 
        position:'absolute',width:'100%',height:'100%',clipPath: 'circle(60% at left 300px)'
        ,zIndex: '-1', top:'0',left:'0'}}>
            <h1> A ROOM WITHOUT BOOKS IS LIKE  <br/>A BODY WITHOUT A SOUL.</h1>
        </div>
        <div className="row2">

          <h2>FIND YOUR BOOKS</h2>
          <div className="Search">
            <input type="text" placeholder="Enter Your Book Name"
            value={search} onChange={e=>setsearch(e.target.value)}
            onKeyPress={searchBook}/>
            <button><i class="fa fa-search"></i></button>
          </div>
          <img src="./Img/A1.jpg" alt=""></img>
          
        <div className="container">
       { 
       <Card book={bookData}/>
}
        </div>
        </div>
        
        </div> 
        </div>
        </>

  )
}

export default Main
