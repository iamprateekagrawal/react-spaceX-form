import react, { useState } from 'react';

const Set2 = () => {
    
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();

    return(
        <>
        <div class="set">
          <div class="email">
            <label for="email-id">Email ID:</label>
            <input placeholder=" Ex: abcd@example.com" type="email" id="email-id" value = {email} onChange = {event => setEmail(event.target.value)} />
          </div>
          <div class="phone">
            <label for="phone-number">Contact Number:</label>
            <input placeholder=" Ex: +91-1234567890" type="text" id="phone-number" value = {phone} onChange = {event => setPhone(event.target.value)}/>
          </div>
        </div>
        </>
    );
}

export default Set2;