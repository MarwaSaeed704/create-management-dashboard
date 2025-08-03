import { useNavigate } from "react-router";
import backgroundImg from "../assets/register-cover.png"
import { useState } from "react";
const RegisterationForm: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleRegisteration = () => {
        if (userName === '' || email === '' || password === '') {
            alert("please fill your data !!! ")
        } else {
            localStorage.setItem('userName', userName);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('/login');
        }
            
    }


    return (
        <>
            {/* container */}
            <div className="flex w-full h-full max-sm:flex-col ">

                {/* cover-container */}
                <div className="w-1/2 relative max-sm:w-full ">
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
                    <div className="absolute inset-0 m-20 w-80  max-sm:w-full max-sm:m-0 max-sm:p-8">
                            <p className="mb-10 text-white text-[42px] font-semibold max-sm:text-[24px]">
                            Selangkah Lebih Dekat Dengan Impianmu
                        </p>
                        <p className="text-white max-sm:text-[14px]"> 
                        Sebuah layanan E-Learning gratis yang siap membantumu menjadi seorang ahli
                        </p>


                        </div>
                        {/*== content ==*/}

                    

                </div>
                {/*== cover-container ==*/}

                {/* RegisterationForm-container */}
                <div className="w-1/2  bg-[#1C1E53] text-[#fff] py-20  px-10 max-sm:w-full ">
                    <p className="mb-10 text-[28px] font-semibold">Register</p>
                    <p className="my-10 text-[16px] text-[#F4F6FC] ">
                    Persiapkan diri untuk masa depan yang penuh dengan bintang
                    </p>

                    {/* Registeration form */}
                    <form className="w-full"  onSubmit={handleRegisteration}>
                        <input
                            type="text"
                            placeholder="your name"
                            className="p-4 mb-8 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC] "
                            onChange={(e)=>{setUserName(e.target.value)}}
                        />
                        <input
                            type="email"
                            placeholder="Email"                          
                            className="p-4 mb-8 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC] "
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <input
                            type="password"
                            placeholder="pas****" 
                            className="p-4  mb-8 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC] "
                            onChange={(e)=>{setPassword(e.target.value)}}
                        /> 

                        <button
                            type="submit"
                            className="w-full p-4 rounded-lg text-center text-[#282938] bg-[#FCD980]"
                        >
                           Register
                        </button>
                        
                    </form>
                    {/*== Registeration form ==*/}
                    <p className="text-white text-center my-4 text-[16px]">
                        Do you have a new account?
                        <span
                            className="cursor-pointer underline ml-1"
                            onClick={()=>{navigate('/login')}}
                        >
                            Login
                        </span>
                    </p>

                </div>
                {/*== RegisterationForm-container ==*/}

            </div>
            {/*== container ==*/}
            
           
        </>
    )
}

export default RegisterationForm;