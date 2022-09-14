import {useNavigate} from 'react-router-dom'



function LoginPage(props) {
    const navigate = useNavigate();
    
function handleSubmit(event){
    event.preventDefault();
    navigate('/');
}
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">Login</button>
    </form>
    
    
}

export default LoginPage;