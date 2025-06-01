import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const LogIn = () => {

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();
         console.log(email,password)

    //   signIn user-------------
         signInUser(email,password)
         .then(result=>{
            console.log(result.user)
         }).catch(error=>{
            console.log(error)
         })



    }   

    return (
        <div className="max-w-sm mx-auto mt-10">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Log In</h1>
                    <form onSubmit={handleSignIn}>
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="input input-bordered w-full"
                            placeholder="Your Email"
                        />

                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="input input-bordered w-full"
                            placeholder="Password"
                        />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type="submit" className="btn btn-neutral mt-6 w-full">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
;

export default LogIn;
