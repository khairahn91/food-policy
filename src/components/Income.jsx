import React, {useState} from "react";


function Income ({setParentCounter}){

    const [income, setIncome] = useState({
        income:2000
    })

    function handleChangeInputText(event){
        const {name, value} = event.target;
        setIncome(prevIncome => {
          return {
            ...prevIncome,
            [name]:value
          };
      
        });
      
        setParentCounter(prevIncome => {
          return {
            ...prevIncome,
            [name]:value
          };
      
        });
      
      
      }

    return(

       
            <div className="income-grid">
                <div className="card-income">
          
                <p>Please Enter your Income</p>
                
                <input type="text" onChange= {handleChangeInputText} name="income" value={income.income}/>
               
                
                <div>
                <button className="button-income">Next </button>
                </div>
                </div>
               
            </div>

        
  
    )
}

export default Income;
