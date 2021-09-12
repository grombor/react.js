import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faWrench} from '@fortawesome/free-solid-svg-icons'


const biurowe = <FontAwesomeIcon icon={faBuilding} />
const socialne = <FontAwesomeIcon icon={faUserFriends} />
const warsztatowe = <FontAwesomeIcon icon={faWrench} />

const MenuLeft = ( props ) => {


    return (
        <div className='col-1'>
            <h4>Menu</h4>
            <ul className='list-group'>
                <li className='list-group-item' onClick={()=>{props.onMenuClick('biurowe')}}>
                    { biurowe }
                </li>
                <li className='list-group-item' onClick={()=>{props.onMenuClick('socjalne')}}>
                    { socialne }
                </li>
                <li className='list-group-item' onClick={()=>{props.onMenuClick('warsztatowe')}}>
                    { warsztatowe }
                </li>
            </ul>
        </div>
    )
}

export default MenuLeft
