import React, { useState } from 'react';
const FormLogin = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [allEntry, setAllEntry]=useState([]);

    const submitForm = (e) =>{
        e.preventDefault();

        const newEntry = {email:email, password:password}
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);

    }
    return (
        <>
            <form action="" onSubmit={submitForm}>
            <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            autoComplete="off"
            />
            </div>
            <br/>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="email" value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="off"/>
            </div>
            <button type="submit" >Login</button>
            </form>
            <div>
            {
                allEntry.map((item)=>{
                    return(
                        <div>
                        <p>{item.email}</p>
                        <p>{item.password}</p>
                        </div>
                    )
                })
            }
            </div>
        </>
    );
}


export default FormLogin;