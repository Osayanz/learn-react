
function ProfilePicture() {
    
    const imageUrl = "/assets/Profile pic.jpeg";

    const handlClick = (e) => e.target.style.display = "none";

    return(
        <div>
            <img onClick={(e) => handlClick(e)} src={imageUrl} alt="Profile Picture" ></img>
        </div>
    );
  
}

export default ProfilePicture