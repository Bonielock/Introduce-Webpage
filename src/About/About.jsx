import "./About.css";

const About = ()=>{

  return(
  <div className="about-container">
    <div className="resume">
      <div className="skill">
        <h1>SKILLS</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Java</li>
          <li>MySQL</li>
        </ul>
      </div>


      <div className="education">
        <ul>
          <h1>Education</h1>
          <li>
            <h3>Master of Computer Science</h3>
            <h4>Universiti Putra Malaysia</h4>
            <p>10&#47;2023-10&#47;2025 <span>CGPA 3.85&#47;4.0</span></p>
          </li>
          <br />
          <li>
            <h3>Bachelor of Engineering &#40;Honours&#41; Civil Engineering</h3>
            <h4>Universiti Tunku Abdul Rahman</h4>
            <p>10&#47;2017-10&#47;2021 <span>CGPA 2.79&#47;4.0</span></p>
          </li>
        </ul>

      </div>


      <div className="working-exp">
        <ul>
          <h1>Working Experience</h1>
          <li>
            <h3>Pembantu Ahli Majlis</h3>
            <h4>Majlis Perbandaraan Kajang</h4>
            <p>03&#47;2023&#45;12&#47;2025</p>
          </li>
          <li>
            <h3>Project Engineer</h3>
            <h4>Double&#45;Trans Pte Ltd</h4>
            <p>05&#47;2022&#45;02&#47;2023</p>
          </li>
        </ul>

      </div>


    </div>
    

  </div>
  )
}

export default About;