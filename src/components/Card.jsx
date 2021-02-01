import React, {useState} from "react";
import './Card.css';





function Card (props){

    const [rangeval, setRangeVal] = useState(0)
    

    


    return (

     

        <div>

      
            <div className="card">
            <div className = "box">
            <label> {props.name}: {rangeval} </label> <br></br>
            <input type= "range" min= {-20} max={50} name= {props.var} value={rangeval} id= {props.id} className="slider"
            onChange= { (event)=> setRangeVal(event.target.value)}
            /> 
            </div>
            </div>

        
        </div>


    )

}

export default Card;