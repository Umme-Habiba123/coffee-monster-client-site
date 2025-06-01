import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegistration = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                };

                return fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                });
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your Account has been created..!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl mt-20">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign-Up now!</h1>
                    <form onSubmit={handleRegistration} className="fieldset">

                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Your Name" required />

                        <label className="label">Address</label>
                        <input name='address' type="text" className="input" placeholder="Your Address" required />

                        <label className="label">Phone Number</label>
                        <input name='phoneNumber' type="number" className="input" placeholder="Phone Number" required />

                        <label className="label">Photo</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" />

                        <label className="label">E-mail</label>
                        <input name='email' type="email" className="input" placeholder="email" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Registration</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
