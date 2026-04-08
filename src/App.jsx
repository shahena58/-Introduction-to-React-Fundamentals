// import './App.css'
import './app.css'
import BioData from './components/BioData'


function App() {
  return (
    <>
      <div className="app">
      <h2>personal information practice</h2>
{/* Bio data of Ashif Mahir */}
      <div className="bio-data">
        <div className="personal-info">
          <h2>Bio data of Ashif Mahir</h2>
          <p>
            <strong>email</strong> asiefmahirl@gmail.com
          </p>
          <p>
            <strong>phone</strong> 01890455872
          </p>
        </div>
        <hr />
        <div className="skills">
          <ul>
            <li>Js</li>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
            <li>typescript</li>
          </ul>
        </div>

        <div className="interest">
          <ul>
            <li>Chess</li>
            <li>Football</li>
            <li>Cricket</li>
            <li>System Design</li>
            <li>DSA</li>
          </ul>
        </div>

      </div>

    </div>

   <BioData 
    name = "shahena"
    email = "asiefmahirl@mail.com"
    phone = "0189045888"
    skills = {["JS", "React", "redux",]}
    interests = {["chess", "football", "cricket"]}
   />
   <BioData 
    name = "rojina"
    email = "asiefmahirl@mail.com"
    phone = "0189045888"
    skills = {["JS", "React", "redux", "Node", "Ts"]}
    interests = {["chess", "football", "cricket"]}
   />
    </>
  );
}

export default App;


// {name: "Mahir Ashif", email: "asiefmahirl@gmail.com", phone: "+0189045155258", skill: ["JS", "react", "redux"], interests: ["Chess", "football"]}

