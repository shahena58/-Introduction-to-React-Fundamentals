import './App.css'
import BioData from './components/BioData'

function App() {


  const bioDatqaInfo= [

  {
    name: "Asief Mahir",
    email: "asiefmahir@gmail.com",
    skills: ["JS", "React", "Node", "MongoDB"],
    interests: ["chess", "Football"]
    
  },
  {
    name: "SR Setu",
    email: "srsetu@gmail.com",
    phone: "0189*******96",
    skills: ["JS", "React", "Node", "MongoDB", "typescript", "PHP", "Phython"],
    interests: ["chess", "Football", "cricket", "System Design", "badmenton"]
    
  },

  {
    name: "sumon",
    email: "srsetu@gmail.com",
    phone: "0189*******96",
    skills: ["JS", "React", "Node", "MongoDB", "typescript", "PHP", "Phython"],
    interests: ["chess", "Football", "cricket", "System Design", "badmenton"]
    
  }


  ]

  const eListener = () =>{
    alert("hello world")
  }

  return (
    <>
    <div className="app">
      <h2>personal bio data </h2>

      {/* <div className="bio-data">

        <div className="personal-info">
          <h2>Bio data of Ashif Mahir </h2>
          <p>
            <strong>email</strong> asiefmahirl@gmail.com
          </p>

          <p>
            <strong>phone</strong> 018*********58
          </p>         
        </div>

        <div className="skills">
          <ul>
            <li>JS</li>
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
          </ul>
        </div>

      </div>

      <BioData 
      name = "Ashif Mahir "
      email = "asiefmahirl@gmail.com"
      phone = "018*********58"
      skills = {["JS", "React", "Node", "MongoDB", "typescript"]}
      interests = {["chess", "Football", "cricket", "System Design"]}
      />
       */}


    {
      bioDatqaInfo.map(bio =>(
      <>

        <BioData 
        name = {bio.name}
        email = {bio.email}
        phone = {bio.phone}
        skills = {bio.skills}
        interests = {bio.interests}
        />
        <button onClick = {eListener}>click me</button>
        <hr />
        <hr />
      </>
      ))
    }

    </div>

    </>
  );
}

export default App;


// {name: "Mahir Ashif", email: "asiefmahirl@gmail.com", phone: "+0189045155258", skill: ["JS", "react", "redux"], interests: ["Chess", "football"]}

