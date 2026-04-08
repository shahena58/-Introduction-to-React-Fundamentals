// import './App.css'
import './app.css'
import BioData from './components/BioData'


const bioDatqaInfo = [

  {
    name: 'Mahir Asief',
    email:'asiefmahirl@mail.com',
    phone: '0189045888',
    skills: ["JS", "React", "redux"],
    interests: ["chess", "football", "cricket"]
  },

   {
    name: 'SR setu',
    email:'asiefmahirl@mail.com',
    phone: '0189045888',
    skills: ["JS", "React", "redux", "Zoom"],
    interests: ["chess", "football", "cricket", "Boliboll"]
  },
  
]

function App() {
  return (
    <>
      <div className="app">
      <h2>personal information practice</h2>

      {
        bioDatqaInfo.map(bio =>(
         <>
          <BioData
          name = {bio.name}
          phone = {bio.phone}
          email = {bio.email}
          skills = {bio.skills}
          interests = {bio.interests}
          />
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

