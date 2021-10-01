import React, {useState} from "react";
import LoadUserInfo from  "./LoadUserInfo";

// Import the CSS
import Styles from "./UserModal.module.css";

const dummyData = [
  {
  id : 1,
  name: "Web_mekanic",
  designation: "frontEnd Developer",
  },
  {
    id : 2,
  name: "Odiri",
  designation: "FrontEnd developer",
  },
  {
  id : 3,
  name: "Bombos",
  designation: "UI/UX || Creative Design", 
  },
  {
  id : 4,
  name: "Eni4sure",
  designation: "BackEnd developer",
  }
]

const LoadUser = () => {

    const [usersDetails, setUsersDetails] = useState([...dummyData]);
    const [tempUsersDetails, setTempUsersDetails] = useState([...dummyData]);
    const [noUser, setNoUser] = useState(false)
  
  
      const handleInput = (e) => {
        let obj = usersDetails
  
        obj = tempUsersDetails.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
        if (obj.length === 0) {
          setNoUser(true);
        } else {
          setNoUser(false)
        }
        setUsersDetails(obj)
      }

      return (
        <div className={Styles["load-user__backdrop"]}>
         <div className={Styles["load-user__modal"]}>
           <h3 className={Styles["room_header"]}># Chess</h3>
           <div className={Styles["room_notification"]}>
           <h4 className={Styles["room_notify"]}>Get Notifcation for @ Mentions</h4>
           <h4 className={Styles["room_notify"]}>Start a Call</h4>
           </div>
           <p className={Styles["room_para"]}>Members</p>
           <form className={Styles["load-user__form"]}>
            <input className={Styles["searchbar"]} type="text" autoComplete="off" name="text" onChange={handleInput} placeholder="Find Members"/>
          </form>

          <div className={Styles["load-user__users"]}>
            {!noUser && <LoadUserInfo users={usersDetails}/>}
            {noUser && <p className={Styles["load-user__no-user"]}>No Member found..</p>}
          </div>
         </div>
        </div>
    )
}

export default LoadUser;