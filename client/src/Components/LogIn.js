import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const LogIn = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()



    const postLoginDetails = ()=>{
        fetch("http://localhost:4000/api/login",{
            method:"POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers:{
                "Content-Type":'application/json'
            }
        }).then((res)=>res.json())
        .then((data)=>{
            if(data.error_message){
                alert(data.error_message)
            }else
            {
                localStorage.setItem('username',data.data.username)
                navigate('/phone/verify')
            }
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        postLoginDetails()
       // console.log({email,password})
        setEmail("")
        setPassword("")

    }



    const gotoSignUpPage = ()=> navigate("/register")

  return (
    <div className='login__container'>
    <h2>Login </h2>
    <form className='login__form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
            type='email'
            id='email'
            name='email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
            type='password'
            name='password'
            id='password'
            minLength={8}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button className='loginBtn'>SIGN IN</button>
        <p>
            Don't have an account?{" "}
            <span className='link' onClick={gotoSignUpPage}>
                Sign up
            </span>
        </p>
    </form>
    </div>
  )
}

export default LogIn
