import React, {useState} from "react";


function Card ({ setParentCounter },props){

    const [rangeval, setRangeVal] = useState({
        rice: 0,
        biscuit: 0,
        freshmeat: 0,
        frozenmeat: 0,
        processedmeat:0,
        freshfish:0,
        seafood:0,
        coconut: 0,
        tuber: 0,
        processedfish:0,
        vegetables: 0,
        butter: 0,
        fruits:0
      
    })
    


    function handleChange(event){
        const {name, value} = event.target;
        setRangeVal(prevrangeval => {
          return {
            ...prevrangeval,
            [name]:value
          };
        });

        setParentCounter(prevrangeval => {
            return {
              ...prevrangeval,
              [name]:value
            };
          });
        

      }

    
    

    return (

     

        <div>
        <div className="grid-style-2">

          
        <div className="card-2">
          <label> Rice: {rangeval.rice} </label>
            <div className = "box">
            <div class="value right">-20</div>
            <div class="slider-container">
            <span class="bar"><span class="fill"></span></span>
            <input type= "range" min= {-20} max={30} name="rice" value={rangeval.rice} className="slider"onChange= {handleChange}/>  </div>
            <div class="value right">30</div>
            </div>
         
   
        </div>


        <div className="card-2">
        <label> Biscuit: {rangeval.biscuit} </label>
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
            <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="biscuit" value={rangeval.biscuit} className="slider"onChange= {handleChange}/>  </div>
        <div class="value right">30</div>
        </div>
        </div>


        <div className="card-2">
        <label> Fresh Meat: {rangeval.freshmeat} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="freshmeat" value={rangeval.freshmeat} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>

        <div className="card-2">
        <label> Frozen Meat: {rangeval.frozenmeat} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="frozenmeat" value={rangeval.frozenmeat} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>
        

        <div className="card-2">
        <label> Processed Meat: {rangeval.processedmeat} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="processedmeat" value={rangeval.processedmeat} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>


        <div className="card-2">
        <label>Fresh Fish: {rangeval.freshfish} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="freshfish" value={rangeval.freshfish} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>

        <div className="card-2">
        <label>Seafood: {rangeval.seafood} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="seafood" value={rangeval.seafood} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>

        <div className="card-2">
        <label>Coconut: {rangeval.coconut} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="coconut" value={rangeval.coconut} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>

        <div className="card-2">
        <label>Tuber: {rangeval.tuber} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="tuber" value={rangeval.tuber} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>

        <div className="card-2">
        <label>Processed Fish: {rangeval.processedfish} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="processedfish" value={rangeval.processedfish} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>


        <div className="card-2">
        <label>Vegetables: {rangeval.vegetables} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="vegetables" value={rangeval.vegetables} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>


        <div className="card-2">
        <label>Butter: {rangeval.butter} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="butter" value={rangeval.butter} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>

        <div className="card-2">
        <label>Fruits: {rangeval.fruits} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="fruits" value={rangeval.fruits} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>
            
        </div>
            
         

        
        </div>


    )

}

export default Card;