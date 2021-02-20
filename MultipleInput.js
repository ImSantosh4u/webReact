import React, { useState } from 'react';

const MultipleInput = ()=> {
    const [user , setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
    const [records,setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newRecords= {...user,id:new Date().getTime().toString()}
        console.log(records);
        setRecords([...records,newRecords])
        setUser({username:"",email:"",phone:"",password:""})
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleInput} value={user.username} id="username" />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleInput} value={user.email} id="email" />
            </div>
            
            <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" onChange={handleInput} value={user.phone} id="phone" />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={handleInput} value={user.password} id="password" />
            </div>
            <button type="submit">Registrations</button>
            </form>
            <div>
            {
                records.map((item)=>{
                    const {id,username,email,phone,password}=item;
                    return(
                        <div key={id}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{password}</p>
                        
                        
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default MultipleInput;