import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {
    let navigate = useNavigate();
    const [data,setData] = useState({
        name:'',
        email:'',
        phoneNumber:''
    })
    const initialState = {
        name:'',
        email:'',
        phoneNumber:''
    }
    const [btnDisabled,setBtnDisabled] = useState(true)

    const [message,setMessage] = useState('')
    
    const clearState = ()=>{
        setData({...initialState});
    }
    const handleInputChange = (event) =>{
        if(data.name.length < 2){
            setMessage('El nombre minimo tiene que ser 3 letras')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        clearState();
        setMessage('Te llevamos all home')
        setTimeout(()=>{
            navigate('/')
        },3000)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name"
                value={data.name}
                onChange={handleInputChange}
                name="name"
            />
            <input
                type="email"
                placeholder="email"
                value={data.email}
                onChange={handleInputChange}
                name="email"
            />
            <input
                type="phoneNumber"
                placeholder="phoneNumber"
                value={data.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
            />
            <button type="submit" disabled={btnDisabled}>Enviar</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default UserForm