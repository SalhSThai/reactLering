import Menu from "./Menu";
import Footer from "./Footer";
import {Outlet} from 'react-router-dom'

function Layout(){
    return (<>
        <Menu/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout