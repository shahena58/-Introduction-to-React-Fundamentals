

const BioData = (props) =>{

    const {name, email, phone, skills, interests} = props

    return(
        <>
         <div className="bio-data">

        <div className="personal-info">
          <h2>Bio data of {name}</h2>
          <p>
            <strong>email:</strong> {email}
          </p>

          {phone && (
          <p>
            <strong>phone:</strong> {phone}
          </p> 
          )}        
        </div>

        <div className="skills">
          <ul>
            {
                skills.map(skill =>(
                    <li key = {skill}>{skill}</li>
                ))
            }
          </ul>
        </div>

        <div className="interest">
          <ul>
           {interests.map( interest =>(
            <li>{interest}</li>
           ))}
          </ul>
        </div>

      </div>
        </>
    )
}

export default BioData