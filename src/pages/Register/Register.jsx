import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
        <div className="hero  py-6">
          
<div className="card  shadow-2xl  w-5/12 ">
<h1 className="text-center text-4xl font-bold pt-5">Register Now</h1>
  <form className="card-body">


  <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Name</span>
      </label>
      <input type="text" placeholder="Name" className="input input-bordered" required />
    </div>
    
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Photo URL</span>
      </label>
      <input type="text" placeholder="phot URL" className="input input-bordered"  />
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered"  />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Password</span>
      </label>
      <input type="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </form>

<p className="text-center text-xl pb-4 font-semibold">Already have an account? <Link className="text-red-700 font-bold hover:underline" to = "/login">Login</Link> </p>
</div>

</div>
    </div>
    );
};

export default Register;