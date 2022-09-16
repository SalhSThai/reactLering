import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

//localStorage.setItem(key,value)
//localStorage.getItem(key)
//localStorage.removeItem(key)
//localStorage.clear()
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const a = localStorage.getItem('token') ? setIsLogged(true) : null;
  }, [])

  const handleClickShow = async e => {
    try {
      const res = await axios.get('http://localhost:8080/todos',{
        headers:{
          Authorization:'Bearer '+localStorage.getItem('token')
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/auth/login', { username, password })
      console.log(res.data.login_token);
      const a = res.data.login_token ? setIsLogged(true) : null;
      localStorage.setItem("token", res.data.login_token)
    } catch (error) {
      console.log(error);
    }
  }
  const logout = e => {
    localStorage.removeItem('token');
    setIsLogged(false);
  }



  return (
    <div className="container">
      <nav className='navbar navbar-expand-lg bg-light d-flex justify-content-between'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Login</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>

        {isLogged ? <div className='d-flex justify-content-between align-items-center' >
          <h5 className='m-1'>{username}</h5>
          <i class="fa-regular fa-circle-user m-1"></i>
          <button type="button m-2" className="btn btn-primary" onClick={logout}>LOGOUT</button>
        </div> : null}
      </nav>


      {!isLogged ? (<form onSubmit={handleSubmit}>

        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row ">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary ">Confirm</button>
      </form>) :
        (<><h1 className='position-absolute top-50 start-50 translate-middle'>WELCOME BACK {username}</h1>
          <button className='position-absolute start-50 translate-middle' onClick={handleClickShow}>Show todo</button>
        </>)}

    </div>
  );
}

export default App;
