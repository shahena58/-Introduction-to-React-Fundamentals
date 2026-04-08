
const BioData = (props) =>{

    return(
        <>
        <div className="bio-data">
        <div className="personal-info">
          <h2>Bio data of {props.name}</h2>
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