import {Link} from 'react-router-dom'
function Menu (){
    return (
        <ul className='nav nav-pills p-3 mb-2  text-white' style={{backgroundColor:"Aquamarine"}}>
            <li className='nav-item active' ><Link className='nav-link active' to=''>Home</Link></li>
            <li className='nav-item '> <Link className='nav-link ' to='about'>About</Link></li>
            <li className='nav-item '><Link className='nav-link ' to='login'>LoginPage</Link></li>

            <li className='nav-item '><Link className='nav-link ' to='contact'>Contact</Link></li>
        </ul>
    )
}
export default Menu