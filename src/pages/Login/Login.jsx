import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import stadium1 from '../../assets/login/stadium1.jpg'
import stadium2 from '../../assets/login/stadium2.jpeg'


const Login = () => {


    return (
        <div className="min-h-screen bg-cover bg-opacity-80" style={{backgroundImage:`url(${stadium2})`}}>
            <div className="w-11/12 mx-auto">
                <div className="w-fit mx-auto">
                    <div className='pt-16'>
                        <h1 className="text-5xl font-bold mb-4 text-white text-center">Login now!</h1>
                        <div className="rounded-lg shadow-2xl backdrop-blur-sm border-2 border-indigo-600 bg-transparent text-white px-4 py-6">
                            <form onSubmit=''>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="h-6 focus:h-8 rounded-md px-2 outline-none w-full border-b-2 bg-transparent" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="h-6 focus:h-8 rounded-md px-2 outline-none w-full border-b-2 bg-transparent" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-outline border-indigo-500 text-white hover:bg-pink-500 rounded-md capitalize text-xl font-semibold' type="submit" value="Login" />
                                </div>
                                <div className='text-center mt-4'>
                                    <p>Do not have account ? Please <Link to='/registration' className='font-medium hover:underline ml-2 text-white'>Create an account</Link></p>
                                </div>
                            </form>
                            <div>
                                <div className="divider divider-primary text-indigo-600 font-bold">OR</div>
                                <button onClick='' className='btn btn-outline text-white w-full text-lg hover:bg-secondary border-blue-600 capitalize'><FcGoogle className='text-3xl mr-4'></FcGoogle>Login With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;