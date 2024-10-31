import './Home.css'
import {Link} from "react-router-dom";
export default function Home() {
    return (
        <div id='Home'>
            <header>
                <Link className='navBar' to="/todo" >Todo</Link>
                <Link className='navBar' to="/login" >Login</Link>
                <Link className='navBar' to="/mean" >Mean</Link>
            </header>

        </div>
    );
}
