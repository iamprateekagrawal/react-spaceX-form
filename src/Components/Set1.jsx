import React, { useState } from 'react';  

const Set1 = (props) => {
  const [name, setName] = useState('');
  props.callBack(name);
    return(
        <>
        {/* <!-- name and resume input --> */}
        <div class="set">
          <div class="name">
            <label for="name">Full Name:</label>
            <input placeholder=" Ex: Prateek Agrawal" type="text" id="full-name" value = {name} onChange = {event => setName(event.target.value)}  />
          </div>
          <div class="resume">
            <button id="resume-button" onClick = {()=> {alert("Dummy file uploaded")}}></button>
            <label for="upload-resume">&nbsp; Upload your Resume</label>
          </div>
        </div>
        </>
    )
}

export default Set1;