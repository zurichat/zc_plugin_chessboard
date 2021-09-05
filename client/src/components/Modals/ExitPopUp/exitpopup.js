
import ExitAvatar from '../../../assets/Group 328.png'

import './exitpopup.css'
const Component = () => {
    return ( 
        <div className="component">    
            <div>
                <img src={ExitAvatar} alt='avatar'/>
                <p>Do you want to exit the game?</p>
            </div>
            <div>
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>
    );
}
 
export default Component;