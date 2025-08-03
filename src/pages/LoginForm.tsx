import { useState } from "react";
import { useNavigate } from "react-router";
import backgroundImg from "../assets/login-cover.png"
import { useDispatch } from "react-redux";
import { login } from "../Redux/features/authSlice";


const LoginForm: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // handle login function
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (email === "" || password === "") {
            alert("please enter your data !!!");
        } else {
            const savedEmail = localStorage.getItem("email");
            const savedPassword = localStorage.getItem("password");
            if (savedEmail === email && savedPassword === password) {
                dispatch(login(email));
                navigate("/courselist"); 
            } else {
                alert('email or password are wrong ')
            }
           

            
        }

       
    }


    return (
        <>
            {/* container */}
            <div className="flex w-full h-full  max-sm:flex-col ">

                {/* cover-container */}
                <div className="w-1/2 relative max-sm:w-full">
                    {/* background-img */}
                    <img
                        src={backgroundImg}
                        alt="background img"
                        className="w-full h-full"
                    />
                    {/*== background-img ==*/}

                    {/* overlay */}
                    <div className="absolute inset-0 bg-[#1C1E53] opacity-50">
                    </div>
                    {/*== overlay ==*/}

                    {/* content */}
                    <div className="absolute inset-0 m-20 w-80 max-sm:w-full max-sm:m-0 max-sm:p-8 ">
                            <p className="mb-10 text-white text-[42px] font-semibold max-sm:text-[24px] ">
                            Selangkah Lebih Dekat Dengan Impianmu
                        </p>
                        <p className="text-white max-sm:text-[14px]"> 
                        Sebuah layanan E-Learning gratis yang siap membantumu menjadi seorang ahli
                        </p>


                        </div>
                        {/*== content ==*/}

                    

                </div>
                {/*== cover-container ==*/}

                {/* loginForm-container */}
                <div className="w-1/2  bg-[#1C1E53] text-[#fff] py-20  px-10 max-sm:w-full">
                    <p className="mb-10 text-[28px] font-semibold">Login</p>
                    <p className="my-10 text-[16px] text-[#F4F6FC] ">
                        Persiapkan diri untuk masa depan yang penuh dengan bintang
                    </p>

                    {/* login form */}
                    <form className="w-full" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className="p-4 mb-8 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC] "
                        />
                        <input
                            type="password"
                            placeholder="pas****"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="p-4  mb-8 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC] "
                        /> 

                        <button
                            type="submit"
                            className="w-full p-4 rounded-lg text-center text-[#282938] bg-[#FCD980]"
                        >
                            Login
                        </button>
                        
                    </form>
                    {/*== login form ==*/}
                    <p className="text-white text-center my-4 text-[16px] ">
                        Do you have a new account?
                        <span
                            className="cursor-pointer underline ml-1"
                            onClick={()=>{navigate('/register')}}
                        >
                            Register
                        </span>
                    </p>

                </div>
                {/*== loginForm-container ==*/}

            </div>
            {/*== container ==*/}
            
           
        </>
    )
};

export default LoginForm;