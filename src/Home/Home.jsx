
import Head from "../assets/PassportPhoto.jpg";
import "./Home.css";


const Home = ()=>{
  return (
    <div className="home-container">
      <img className="home-head" src={Head} alt="" />
      <p className="name">Hi, I am <span style={{color:"black"}}>LOCK KUON KEONG 😊</span> </p>
      <p className="description">A Computer Science Student ready to make an impact</p>
    </div>
  )
}

export default Home;