import React, {useState} from 'react';
import Set1 from './Set1';
import Set2 from './Set2';
import Set3 from './Set3';
import Submit from './Submit';
import rightImage from '../images/display.jpg';

const Form = () =>{
  const [name, setName] = useState('');
  const callBack = (childData) => {setName(childData)};
    return(
        <>
    <div class="reg-page">
      <div class="left-container">
        <Set1 callBack = {callBack}/>
        <Set2/>  
        <Set3/>  
        <Submit name={name}/>  
      </div>
      <div class="right-container">
        <img src={rightImage} alt="SpaceX" />
      </div>
    </div>
        </>
    )
}

export default Form;