import React, {useState} from "react";



function Form({ setParentCounter }, props) {

const [demography, setDemography] = useState({

  age: 23,
  totalHousehold: 2,
  genderN: "male",
  ethnic: "malay",
  married: "notMarried",
  educationL: "spm",
  employment: "public",
  locality: "urban",
  residential: "Banglo",
  ownership: "owned",
  skill: "professional"
});





function handleChangeInputText(event){
  const {name, value} = event.target;
  setDemography(prevDemography => {
    return {
      ...prevDemography,
      [name]:value
    };

  });

  setParentCounter(prevDemography => {
    return {
      ...prevDemography,
      [name]:value
    };

  });


}




  return (
 <div>
    <div className = "container">


      <div className="title-for-card"> Please key in the demography </div>

      <div className= "card-demogrphy">
      <div className="card">
      <label>Age:</label><br></br>
      <input type="text" onChange= {handleChangeInputText} name="age" value={demography.age}/>
      </div>

      <div className= "card">
      <label>Total Household :</label><br></br>
      <input type="text"  onChange= {handleChangeInputText} name="totalHousehold" value={demography.totalHousehold} />
      </div>

      <div className="card card-radiobtn-2">
      <label>Gender :</label><br></br>
      <input onChange= {handleChangeInputText} type="radio" id="male" name="genderN" value="male" checked={demography.genderN === "male"}/>
      <label>Male</label><br></br>
      <input type="radio" id="female" name="genderN" value="female" onChange= {handleChangeInputText} checked={demography.genderN === "female"}/>
      <label >Female</label>
      </div>

      <div className="card card-radiobtn-3">
      <label>Ethnic :</label><br></br>
      <input type="radio" id="malay" name="ethnic" value="malay" onChange= {handleChangeInputText} checked={demography.ethnic==="malay"}/>
      <label>Malay</label><br></br>
      <input type="radio" id="chinese" name="ethnic" value="chinese" onChange= {handleChangeInputText} checked={demography.ethnic==="chinese"}/>
      <label>Chinese</label><br></br>
      <input type="radio" id="indian" name="ethnic" value="indian" onChange= {handleChangeInputText} checked={demography.ethnic==="indian"}/>
      <label>Indian</label><br></br>
      <input type="radio" id="others" name="ethnic" value="others" onChange= {handleChangeInputText} checked={demography.ethnic==="others"}/>
      <label>Others</label><br></br>
      </div>

      <div className="card card-radiobtn-2">
      <label>Marital Status :</label><br></br>
      <input type="radio" id="isMarried" onChange= {handleChangeInputText} name="married" value="isMarried" checked= {demography.married === "isMarried"}/>
      <label>Yes</label><br></br>
      <input type="radio" id="notMarried" onChange= {handleChangeInputText} name="married" value="notMarried" checked= {demography.married === "notMarried"}/>
      <label>No</label><br></br>
      </div>



      <div className="card card-radiobtn-3">
      <label>Education Level : </label><br></br>
      <input type="radio" id="spm" name="educationL" value="spm" onChange= {handleChangeInputText} checked= {demography.educationL === "spm"}/>
      <label>SPM</label><br></br>
      <input type="radio" id="diploma" name="educationL" value="diploma" onChange= {handleChangeInputText} checked= {demography.educationL === "diploma"} />
      <label>Diploma </label><br></br>
      <input type="radio" id="degree" name="educationL" value="degree" onChange= {handleChangeInputText} checked= {demography.educationL === "degree"}/>
      <label>Degree</label><br></br>
      <input type="radio" id="other" name="educationL" value="other" onChange= {handleChangeInputText} checked= {demography.educationL === "other"}/>
      <label>Others</label><br></br>
      </div>

      <div className="card card-radiobtn-3">
      <label>Employment Status : </label><br></br>
      <input type="radio" id="public" name="employment" value="public" onChange= {handleChangeInputText} checked= {demography.employment === "public"} />
      <label>Public</label><br></br>
      <input type="radio" id="private" name="employment" value="private" onChange= {handleChangeInputText} checked= {demography.employment === "private"} />
      <label>Private </label><br></br>
      <input type="radio" id="self" name="employment" value="self" onChange= {handleChangeInputText} checked= {demography.employment === "self"}/>
      <label>Self-employed</label><br></br>
      </div>


      <div className="card card-radiobtn-2">
      <label>Locality :</label><br></br>
      <input type="radio" id="urban" name="locality" value="urban" onChange= {handleChangeInputText} checked= {demography.locality === "urban"}/>
      <label>Urban</label><br></br>
      <input type="radio" id="rural" name="locality" value="rural" onChange= {handleChangeInputText} checked= {demography.locality === "rural"}/>
      <label>Rural </label><br></br>
      </div>

      <div className="card card-radiobtn-4">
      <label>Residential :</label><br></br>
      <input type="radio" id="Banglo" name="residential" value="Banglo" onChange= {handleChangeInputText} checked= {demography.residential === "Banglo"}/>
      <label>Banglo</label><br></br>
      <input type="radio" id="Semi-D" name="residential" value="Semi-D" onChange= {handleChangeInputText} checked= {demography.residential === "Semi-D"}/>
      <label>Semi-D </label><br></br>
      <input type="radio" id="terrace" name="residential" value="terrace" onChange= {handleChangeInputText} checked= {demography.residential === "terrace"} />
      <label>Terrace</label><br></br>
      <input type="radio" id="flat" name="residential" value="flat" onChange= {handleChangeInputText} checked= {demography.residential === "flat"} />
      <label>Flat</label><br></br>
      <input type="radio" id="other" name="residential" value="other" onChange= {handleChangeInputText} checked= {demography.residential === "other"} />
      <label>Others</label><br></br>
      </div>

      <div className="card card-radiobtn-2">
      <label htmlFor="ownership">Ownership :</label><br></br>
      <input type="radio" id="owned" name="ownership" value="owned" onChange= {handleChangeInputText} checked= {demography.ownership === "owned"} />
      <label htmlFor="urban">Owned</label><br></br>
      <input type="radio" id="rent" name="ownership" value="rent" onChange= {handleChangeInputText} checked= {demography.ownership === "rent"} />
      <label htmlFor="rural">Rent </label><br></br>
      </div>

      <div className="card card-radiobtn-3">
      <label htmlFor="skill">Skill :</label><br></br>
      <input type="radio" id="professional" name="skill" value="professional" onChange= {handleChangeInputText} checked= {demography.skill === "professional"}/>
      <label htmlFor="Banglo">Professional</label><br></br>
      <input type="radio" id="skilled_workman" name="skill" value="skilled_workman" onChange= {handleChangeInputText} checked= {demography.skill === "skilled_workman"}/>
      <label htmlFor="skilled_workman">Skilled Workman </label><br></br>
      <input type="radio" id="sales" name="skill" value="sales" onChange= {handleChangeInputText} checked= {demography.skill === "sales"} />
      <label htmlFor="sales">Sales</label><br></br>
      <input type="radio" id="other" name="skill" value="other" onChange= {handleChangeInputText} checked= {demography.skill === "other"} />
      <label htmlFor="sales">Others</label><br></br>
      </div>

      
      
      </div>

    </div>

 
 </div>

  )

}

export default Form;
