import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import regImg from '../../assets/login/registration.png'


const Registration = () => {
    

    return (
            <div className="w-11/12 mx-auto mt-20 text-center">
                <div className="flex mx-auto flex-col gap-8 md:flex-row md:px-4">
                    <div className='w-full lg:w-1/2 mt-32 mx-auto'>
                        <img src={regImg} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 mx-auto'>
                        <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                        <div className="rounded-lg w-full shadow-2xl bg-base-100 px-4 py-6">
                            <form onSubmit=''>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your name" className="input rounded-md w-full border-blue-600" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input rounded-md w-full border-blue-600" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Phone Number</span>
                                    </label>
                                    <input type="number" name='phoneNumber' placeholder="Your phone number" className="input rounded-md w-full border-blue-600" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Please give your photo url" className="input rounded-md w-full border-blue-600" required />
                                </div>
                                {/* user type */}
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="text-xl font-medium">Your Types</span>
                                    </label>
                                    <select name="type" className="select select-bordered text-lg border-blue-600">
                                        <option disabled selected>Please select your type</option>
                                        <option value='user'>User</option>
                                        <option value='deliveryMen'>DeliveryMen</option>
                                    </select>
                                </div>


                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input rounded-md w-full border-blue-600" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary capitalize text-xl font-semibold' type="submit" value="Register" />
                                </div>
                                <div className='text-center mt-4'>
                                    <p>Already have account ? Please <Link to='/login' className='font-medium hover:underline text-primary ml-2'>Login</Link></p>
                                </div>
                            </form>
                            <div>
                                <div className="divider">OR</div>
                                <button onClick='' className='btn btn-outline w-full text-lg border-blue-600 capitalize'><FcGoogle className='text-3xl mr-4'></FcGoogle>Login With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Registration;