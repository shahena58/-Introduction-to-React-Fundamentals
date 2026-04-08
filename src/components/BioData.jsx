
const BioData = (props) =>{

    return(
        <>
        <div className="bio-data">
        <div className="personal-info">
          <h2>Bio data of {props.name}</h2>
          <p>
            <strong>email</strong> {props.email}
          </p>
          {props.phone && (
            <p>
            <strong>phone</strong> {props.phone}
          </p>
          )}
        </div>
        <hr />
        <div className="skills">
          <ul>
        { props.skills.map(skill =>(
            <li key = {skill} >{skill}</li>
        ))}
          </ul>
        </div>

        <div className="interest">
           <ul>
        { props.interests.map(interest =>(
            <li key = {interest} >{interest}</li>
        ))}
          </ul>
        </div>

      </div>
        </>
    )
}

export default BioData