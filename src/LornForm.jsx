import React from 'react'
import './FormStyle.css'
import Model from './Model';
import { useState } from 'react';

const LornForm = () => {
const [errorMessage,setErrorMessage] = useState(null);
const [showModel,setShowModel] = useState(false);
const [loanInputs, setLoanInputs] = useState({
    name:'',
    phoneNumber:'',
    age:'',
    salary:'',
    isEmployee:'false'
  });

function handleFormSubmit(event){
  event.preventDefault();
  setErrorMessage(null);
  const {age , phoneNumber} = loanInputs;
  if(age <18 || age>100 )
  {
    setErrorMessage("Age is not valid");
  }else if (phoneNumber.length < 10 || phoneNumber.length > 12){
    setErrorMessage("Phone number is not valid");
  }
  setShowModel(true);
}



const btnIsDisabled =   loanInputs.name === "" || 
                        loanInputs.phoneNumber === "" || 
                        loanInputs.age === "" ;

function handleDivClick(){
   if(showModel){
    setShowModel(false);
   }
}

  return (
    <div 
        onClick={handleDivClick}
        className='form' 
        style={{flexDirection:'column'}}
    >
      <form id='loan-form' className='form' style={{flexDirection:'column'}}>
        <h1>Loan Request Form</h1>
        <hr></hr>
        <label>Name:</label>
        <input 
            value={loanInputs.name}
                onChange={(e)=>
                    setLoanInputs({...loanInputs,name:e.target.value})}
        />
        <label>Phone Number:</label>
        <input 
            value={loanInputs.phoneNumber}
            onChange={(e)=>
                setLoanInputs({...loanInputs,phoneNumber:e.target.value})}
        />
        <label>Age:</label>
        <input 
            value={loanInputs.age}
            onChange={(e)=>
                setLoanInputs({...loanInputs,age:e.target.value})}
        />
        <label style={{marginTop:'30px'}}>Are you an employee?</label>
        <input 
            type='checkbox'
            checked={loanInputs.isEmployee}
            onChange={(e)=>
                setLoanInputs({...loanInputs,isEmployee:e.target.checked})}
        />
        <label>Salary:</label>
        <select 
            value={loanInputs.salary}
            onChange={(e)=>
                setLoanInputs({...loanInputs,salary:e.target.value})}
        >
          <option>Less than $500</option>
          <option>$500 - $2000</option>
          <option>More than $2000</option>
        </select>
        <button 
        className={btnIsDisabled ? "disabled" : ""}
        onClick={handleFormSubmit}
        disabled={btnIsDisabled} id='submit-loan-btn'>Submit</button>
      </form>



       <Model  isVisible={showModel} errorMessage={errorMessage}/> 
    </div>
  )
}

export default LornForm
