import myFoto from '../../assets/dark-souls-cosplay-main-pj81nz8h9ip4b73kzq3qbwruzal5x0q1vsu3g8lx56.png';
import './Home.css'


const Home = (props) => {
  const information = props.info.map((person)=>{
      function handleSubmit(e){
        e.preventDefault();
        console.log('You clicked submit siiiiiiiiiiii!')//function,math etc...
      }
      return (
        <div  className='font2-0' key={person.id}>
        <button onClick={handleSubmit}>Buenos dias, soy {person.name}</button>
        <p>Mi trabajo es {person.job}</p>
        <p>Tengo {Math.floor(Math.random()*person.age) } años</p>
        <p>Mi correo es {person.email}</p>
        <p>Mi telefono es {person.phoneNumber}</p>
        <p>Estamos en {Date()}</p>
        <p>Estamos en {new Date().getFullYear()}</p>
        <img src={myFoto} alt="Una foto mia"/>
      </div>
      )
  })
  return (
    <div>{information}</div>
  )
}

export default Home