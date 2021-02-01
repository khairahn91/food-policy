import React, {useState} from "react";
import Form from './Form.jsx';
import Card from "./CardNew.jsx";
import Income from './Income';
import Tabs from './Tabs.jsx';
import avatar from './avatar.jpg';





function Result(){

    const [parentCounter, setParentCounter] = useState({
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
        fruits:0,  
        age: 23,
        totalHousehold: "2",
        genderN: "male",
        ethnic: "malay",
        married: "notMarried",
        educationL: "spm",
        employment: "public",
        locality: "urban",
        residential: "Banglo",
        ownership: "owned",
        skill: "professional",
        income: 2000
    })
    const income = parseFloat(parentCounter.income.toFixed(2))
    const rice = parseInt(parentCounter.rice)
    const biscuit = parseInt(parentCounter.biscuit)
    const freshmeat = parseInt(parentCounter.freshmeat)
    const frozenmeat = parseInt(parentCounter.frozenmeat)
    const processedmeat = parseInt(parentCounter.processedmeat)
    const freshfish = parseInt(parentCounter.freshfish)
    const seafood = parseInt(parentCounter.seafood)
    const coconut = parseInt(parentCounter.coconut)
    const tubers = parseInt(parentCounter.tuber)
    const processedfish = parseInt(parentCounter.processedfish)
    const vege = parseInt(parentCounter.vegetables)
    const butter = parseInt(parentCounter.butter)
    const fruit = parseInt(parentCounter.fruits)
    const age = parseInt(parentCounter.age)
    const house = parseInt(parentCounter.totalHousehold)
    const gender = parentCounter.genderN
    const ethnic = parentCounter.ethnic
    const married = parentCounter.married
    const educationL = parentCounter.educationL
    const employment = parentCounter.employment
    const locality = parentCounter.locality
    const residential = parentCounter.residential
    const ownership = parentCounter.residential
    const skill = parentCounter.skill

  var coef_B40_rice = -63.7664;
  var coef_B40_biscuit = -43.7765;
  var coef_B40_freshmeat = 28.6529;
  var coef_B40_frozenmeat = 19.1415;
  var coef_B40_processedmeat = 5.1117;
  var coef_B40_freshfish = -27.1802;
  var coef_B40_seafood = -0.8054;
  var coef_B40_coconut = -32.0846;
  var coef_B40_tuber = -8.5024;
  var coef_B40_processedFish = -10.3426;
  var coef_B40_vegetables = 103.6551;
  var coef_B40_butter = -25.1670;
  var coef_B40_fruits = -41.8270;

  var coef_M40_rice = -80.9125;
  var coef_M40_biscuit = -124.9097;
  var coef_M40_freshmeat = 23.9216;
  var coef_M40_frozenmeat = 25.2990;
  var coef_M40_processedmeat = -3.7109;
  var coef_M40_freshfish = -18.8379;
  var coef_M40_seafood = -2.5788;
  var coef_M40_coconut = -66.7216;
  var coef_M40_tuber = 37.9392;
  var coef_M40_processedFish = -30.7674;
  var coef_M40_vegetables = 112.6490;
  var coef_M40_butter = -2.0398;
  var coef_M40_fruits = 1.3082;

  var coef_T20_rice = -188.5761;
  var coef_T20_biscuit = -173.4464;
  var coef_T20_freshmeat = -19.8682;
  var coef_T20_frozenmeat = 29.1846;
  var coef_T20_processedmeat = 10.6513;
  var coef_T20_freshfish = -46.5616;
  var coef_T20_seafood = 27.1776;
  var coef_T20_coconut = -182.2972;
  var coef_T20_tuber = 279.0388;
  var coef_T20_processedFish = -30.7369;
  var coef_T20_vegetables = 91.4544;
  var coef_T20_butter = -4.2790;
  var coef_T20_fruits = -29.6082;


  var coef_B40_income = 0.1103;
  var coef_B40_age = 0.9167;
  var coef_B40_gender = -28.9794;
  var coef_B40_married = 70.3221;
  var coef_B40_ethnic = -15.1750;
  var coef_B40_locality = -22.3458;
  var coef_B40_house =30.0800;
  var coef_B40_house_banglo = 4.1639;
  var coef_B40_house_semid = 45.7911;
  var coef_B40_house_terrace = -9.8566;
  var coef_B40_house_flat = 0.1369;
  var coef_B40_education_spm = -9.9659;
  var coef_B40_education_diploma = -3.6103;
  var coef_B40_education_degree =18.9469;
  var coef_B40_job_public = -21.7852;
  var coef_B40_job_private = -16.0737;
  var coef_B40_job_self = -10.9389;
  var coef_B40_ownership = 32.8727;
  var coef_B40_skill_professional= -36.4009;
  var coef_B40_skill_workman =-9.0918;
  var coef_B40_sales = 8.1560;
  var stdB40 = 1849.8231;

  var coef_M40_income = 0.0390;
  var coef_M40_age = 0.8824;
  var coef_M40_gender = -21.0487;
  var coef_M40_house =43.4703;
  var coef_M40_married = 54.2683;
  var coef_M40_ethnic = -19.1628;
  var coef_M40_locality = -46.1381;
  var coef_M40_house_banglo = 17.7436;
  var coef_M40_house_semid = 66.9784;
  var coef_M40_house_terrace = 13.5184;
  var coef_M40_house_flat = 22.1712;
  var coef_M40_education_spm = 12.8313;
  var coef_M40_education_diploma = 21.8569;
  var coef_M40_education_degree =18.9469;
  var coef_M40_job_public = -56.0265;
  var coef_M40_job_private = -59.7962;
  var coef_M40_job_self = -16.4178;
  var coef_M40_ownership = 35.6073;
  var coef_M40_skill_professional= -24.6270;
  var coef_M40_skill_workman =-7.7013;
  var coef_M40_sales = 2.1761;
  var stdM40 = 2556.2541;


  var coef_T20_income = 0.0129;
  var coef_T20_age = 1.0492;
  var coef_T20_gender = -24.8303;
  var coef_T20_married = 31.5471;
  var coef_T20_ethnic = -62.9247;
  var coef_T20_locality = -89.3523;
  var coef_T20_house =56.3610;
  var coef_T20_house_banglo = -12.9199;
  var coef_T20_house_semid = 13.9619;
  var coef_T20_house_terrace = -16.8730;
  var coef_T20_house_flat = 9.3780;
  var coef_T20_education_spm = -4.4914;
  var coef_T20_education_diploma = 27.5202;
  var coef_T20_education_degree =33.0565;
  var coef_T20_job_public = -10.4123;
  var coef_T20_job_private = -43.2259;
  var coef_T20_job_self = -12.2766;
  var coef_T20_ownership = 75.9905;
  var coef_T20_skill_professional= -21.1299;
  var coef_T20_skill_workman =-15.8404;
  var coef_T20_sales = 26.8417;
  var stdT20 = 6693.9727;

  
      let incomeVal
      function onChangeIncome(){
          if (income <2848 ){
              incomeVal="B40"
          }
          else if (income>2848  && income<6503){
              incomeVal="M40"
              
          }else {incomeVal="T20"}

          return incomeVal   
      }
      incomeVal = onChangeIncome();

      let genderVal, foodExpenditure , ethnicVal, marriedVal, localityVal, educationSPMVal, educationDiplomaVal, educationDegreeVal, employmentpublicVal, employmentprivateVal, employmentselfVal,
      residentialBangloVal, residentialSemiDVal, residentialFlatVal, residentialTerraceVal, ownershipVal, skillProVal, skillWorkVal, skillSalesVal;
      function calculateFoodExpenditure (){
        //check for gender 
        if (gender === "male"){
            genderVal = 1
            console.log(genderVal)
        } else {genderVal = 0}

        //Check for married
        if (married === "isMarried"){
            marriedVal=1
        } else { marriedVal=0 }

        //Check for locality
        if (locality === "urban")
        {localityVal = 1}
        else {
         localityVal = 0}

         //Check for ethnic
         if(ethnic ==="malay"){
             ethnicVal =1
         } else {ethnicVal = 0}


        if(educationL==="spm"){
            educationSPMVal=1;
            educationDiplomaVal=0;
            educationDegreeVal=0;} 
          else if(educationL==="diploma"){
            educationSPMVal=0;
            educationDiplomaVal=1;
            educationDegreeVal=0; }
          else if(educationL==="degree"){
            educationSPMVal=0;
            educationDiplomaVal=0;
            educationDegreeVal=1; }
          else{
            educationSPMVal=0;
            educationDiplomaVal=0;
            educationDegreeVal=0;
          }
          if(employment==="public"){
            employmentpublicVal = 1;
            employmentprivateVal = 0;
            employmentselfVal= 0;
          } else if(employment==="private")
          {
            employmentpublicVal = 0;
            employmentprivateVal = 1;
            employmentselfVal= 0;
          } else if(employment==="self"){
            employmentpublicVal = 0;
            employmentprivateVal = 0;
            employmentselfVal= 1;
          } else {
            employmentpublicVal = 0;
            employmentprivateVal = 0;
            employmentselfVal= 0;
          }

          if (residential==="Banglo") {
            residentialBangloVal = 1;
            residentialSemiDVal = 0;
            residentialFlatVal=0;
            residentialTerraceVal=0;
          } else if (residential==="Semi-D")
          {
            residentialBangloVal = 0;
            residentialSemiDVal = 1;
            residentialFlatVal=0;
            residentialTerraceVal=0;
          }
          else if(residential === "terrace"){
            residentialBangloVal = 0;
            residentialSemiDVal = 1;
            residentialFlatVal=0;
            residentialTerraceVal=1;

          }
          else if (residential==="flat"){
            residentialBangloVal = 0;
            residentialSemiDVal = 0;
            residentialFlatVal=1;
            residentialTerraceVal=0;
          } else {     residentialBangloVal = 0;
            residentialSemiDVal = 0;
            residentialFlatVal=0;
            residentialTerraceVal=0;}

            if (ownership === "owned") {
                ownershipVal=1
            }else {ownershipVal =0}

            if (skill === "professional"){
                skillProVal = 1;
                skillWorkVal = 0;
                skillSalesVal = 0;
            } else if(skill === "skilled_workman"){
                skillProVal = 0;
                skillWorkVal = 1;
                skillSalesVal = 0;
            } else if(skill==="sales"){
                skillProVal = 0;
                skillWorkVal = 0;
                skillSalesVal = 1;
            } else {skillProVal = 0;
                skillWorkVal = 0;
                skillSalesVal = 0;}


          genderVal = parseInt(genderVal);
          marriedVal = parseInt(marriedVal);
          localityVal = parseInt(localityVal);
          educationSPMVal = parseInt(educationSPMVal);
          educationDegreeVal = parseInt(educationDegreeVal);
          educationDiplomaVal = parseInt(educationDiplomaVal);
          employmentprivateVal = parseInt(employmentprivateVal);
          employmentpublicVal = parseInt(employmentpublicVal);
          employmentselfVal = parseInt(employmentselfVal);
          residentialBangloVal = parseInt(residentialBangloVal);
          residentialFlatVal = parseInt(residentialFlatVal);
          residentialSemiDVal = parseInt(residentialSemiDVal);
          ownershipVal = parseInt(ownershipVal);
          skillProVal = parseInt(skillProVal);
          skillWorkVal =parseInt(skillWorkVal);
          skillSalesVal = parseInt(skillSalesVal);


        if (incomeVal === "B40") {
      
          foodExpenditure = stdB40 + (rice* coef_B40_rice) + (biscuit * coef_B40_biscuit) + (freshmeat * coef_B40_freshmeat) + (frozenmeat* coef_B40_frozenmeat)
          + (processedmeat * coef_B40_processedmeat) + (freshfish* coef_B40_freshfish) + (seafood* coef_B40_seafood) + (processedfish* coef_B40_processedFish)
          + (butter * coef_B40_butter) + (fruit * coef_B40_fruits) + (coconut * coef_B40_coconut) + (vege* coef_B40_vegetables) + (tubers * coef_B40_tuber)
          + (income * coef_B40_income) + (age * coef_B40_age) + (genderVal* coef_B40_gender) + (marriedVal*coef_B40_married) + (ethnicVal* coef_B40_ethnic) + (localityVal* coef_B40_locality) 
          + (house * coef_B40_house) + (educationSPMVal * coef_B40_education_spm) + (educationDegreeVal* coef_B40_education_degree) + (educationDiplomaVal*coef_B40_education_diploma)
          + (employmentprivateVal * coef_B40_job_private) + (employmentpublicVal * coef_B40_job_public) + (employmentselfVal* coef_B40_job_self) + (residentialBangloVal* coef_B40_house_banglo)
          + (residentialSemiDVal* coef_B40_house_semid) + (residentialFlatVal * coef_B40_house_flat) + (residentialTerraceVal* coef_B40_house_terrace) + (ownershipVal* coef_B40_ownership) 
          + (skillProVal* coef_B40_skill_professional) + (skillWorkVal* coef_B40_skill_workman)+ (skillSalesVal*coef_B40_sales);
  
  
        }else if(incomeVal === "M40"){
          
          foodExpenditure = stdM40 + (rice* coef_M40_rice) + (biscuit * coef_M40_biscuit) + (freshmeat * coef_M40_freshmeat) + (frozenmeat* coef_M40_frozenmeat)
          + (processedmeat * coef_M40_processedmeat) + (freshfish* coef_M40_freshfish) + (seafood* coef_M40_seafood) + (processedfish* coef_M40_processedFish)
          + (butter * coef_M40_butter) + (fruit * coef_M40_fruits) + (coconut * coef_M40_coconut) + (vege* coef_M40_vegetables) + (tubers * coef_M40_tuber)
          + (income * coef_M40_income) + (age * coef_M40_age) + (genderVal* coef_M40_gender) + (marriedVal*coef_M40_married)+ (ethnicVal* coef_M40_ethnic) + (localityVal* coef_M40_locality) 
          + (house * coef_M40_house) + (educationSPMVal * coef_M40_education_spm) + (educationDegreeVal* coef_M40_education_degree) + (educationDiplomaVal*coef_M40_education_diploma)
          + (employmentprivateVal * coef_M40_job_private) + (employmentpublicVal * coef_M40_job_public) + (employmentselfVal* coef_M40_job_self)+(residentialBangloVal* coef_M40_house_banglo)
          + (residentialSemiDVal* coef_M40_house_semid) + (residentialFlatVal * coef_M40_house_flat)+(residentialTerraceVal* coef_M40_house_terrace) + (ownershipVal* coef_M40_ownership) 
          + (skillProVal* coef_M40_skill_professional) + (skillWorkVal* coef_M40_skill_workman)+ (skillSalesVal*coef_M40_sales);
  
  
        } else{
          
          foodExpenditure = stdT20+ (rice* coef_T20_rice) + (biscuit * coef_T20_biscuit) + (freshmeat * coef_T20_freshmeat) + (frozenmeat* coef_T20_frozenmeat)
          + (processedmeat * coef_T20_processedmeat) + (freshfish* coef_T20_freshfish) + (seafood* coef_T20_seafood) + (processedfish* coef_T20_processedFish)
          + (butter * coef_T20_butter) + (fruit * coef_T20_fruits) + (coconut * coef_T20_coconut) + (vege* coef_T20_vegetables) + (tubers * coef_T20_tuber)
          + (income * coef_T20_income) + (age * coef_T20_age) + (genderVal* coef_T20_gender) + (marriedVal*coef_T20_married)+ (ethnicVal* coef_T20_ethnic) + (localityVal* coef_T20_locality) 
          + (house * coef_T20_house) + (educationSPMVal * coef_T20_education_spm) + (educationDegreeVal* coef_T20_education_degree) + (educationDiplomaVal*coef_T20_education_diploma)
          + (employmentprivateVal * coef_T20_job_private) + (employmentpublicVal * coef_T20_job_public) + (employmentselfVal* coef_T20_job_self) + (residentialBangloVal* coef_T20_house_banglo)
          + (residentialSemiDVal* coef_T20_house_semid) + (residentialFlatVal * coef_T20_house_flat)+ (residentialTerraceVal* coef_T20_house_terrace) + (ownershipVal* coef_T20_ownership) 
          + (skillProVal* coef_T20_skill_professional) + (skillWorkVal* coef_T20_skill_workman)+ (skillSalesVal*coef_T20_sales);
  
  
        }
  
        return foodExpenditure.toFixed(2);


      }

     const total = calculateFoodExpenditure();
     





return(

<div  className="content-sc">

    <div className="grid-box">
        <div>
        <Tabs>
        <div label="Income Group">
        <Income setParentCounter = {setParentCounter} />
        </div>
        <div label="Demography">
        <div className="scroll">
            <div className="food-policy-container">
            <Form  setParentCounter = {setParentCounter}/>
            <button className="button-demography">Previous</button>
            <button className="button-demography">Next</button>
            </div>
        </div>
     
        </div>
        <div label="Food Policy">
        <div className="scroll">
        <div className="food-policy-container">
        <Card  setParentCounter = {setParentCounter}/>
        <button className="button-demography">Previous</button>
        </div>
     
        
        </div>
        

        </div>
   
   </Tabs>
        
        
        </div>
        <div className="calculate">
        <div className="total-expenditure-top"></div>
            <img className="img" src={avatar} alt={"empty"}/>
            <div className="income-group">
                    <div>Income: RM {parentCounter.income.toFixed(2)}</div>
                    <div>Income Group: {incomeVal}</div>
            </div>
            <div className="total-expenditure">
            <div className="title-food-expenditure"> Total Food Expenditure: </div> 
            <div className="total-food-expenditure"> RM: {total} </div>
            
            </div>

        </div>

    </div>



</div>

)

}

export default Result;
