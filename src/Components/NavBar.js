import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import './NavBar.css'

const NavBar = () => {

    const auth = useAuth();

    return (
        <div className = "nav-bar">
            <h2>Blogger 2.0 </h2>
            <Link to="/"> Home   </Link> 
            <Link to="/login"> Login      </Link>
            <Link to="/registration"> Registration New User   </Link>
            <Link to="/list"> List Blogs   </Link>
            <Link to="/blog-form"> Create Blog </Link>
            
            
            <button onClick={()=>{
                auth.logout()
            }}>Logout</button>
        </div>
    )
}
export default NavBar;