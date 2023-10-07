import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Login = () => {
const [error , setError] = useState(null)
  const {login} = useContext(AuthContext)

  const navigate = useNavigate()


  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    login(email, password)
    .then(() => {
     navigate('/')
    })
    .catch(error => {
    
      setError(error)
    })
  }
    return (
        <div>
            <div className="hero  py-6">
              
    <div className="card  shadow-2xl  w-5/12 ">
    <h1 className="text-center text-4xl font-bold pt-5">Login Now</h1>
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

    <p className="text-center text-xl pb-4 font-semibold">Do not have an account? <Link to = "/register" className="text-red-700 font-bold hover:underline">Register</Link> </p>

    <div className="pb-5">
      {
        error && <p className="text-center text-red-700">Wrong Email Or passWord</p>
      }
    </div>
    </div>

 
 
</div>
        </div>
    );
};

export default Login;