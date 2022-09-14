
import {Link} from 'react-router-dom'
function HomePage(props) {
    return(
        <div>
            <h1>HomePage</h1>
            <h3>Product</h3>
            <ul>
            <li><Link to='product/1'>Pepsi</Link></li>
            <li><Link to='product/2'>Fanta</Link></li>
            <li><Link to='product/3'>Coke</Link></li>
            <li><Link to='product/4'>Est.</Link></li>
        </ul>
        </div>
    )
}
export default HomePage;