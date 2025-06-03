import profilePic from "./assets/Profile pic.jpeg"

function Card(){
    return(

        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Oshan Hettiarachchi</h2>
            <p className="card-text">Hey! I am Undergraduate from University of Colombo, who pursuing career in Software Development.</p>
        </div>
    );

}

export default Card