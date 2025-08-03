
import homeImage from '../assets/homeimage.png';
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomePage: React.FC = () => {
    return (
        <>
            {/* HomePage-container */}
            <div className="">
                

                {/* HomePage-content */}
                <div className="flex justify-between h-[100vh] pt-40 bg-[#1C1E53] text-[#fff] px-8 max-sm:px-1 max-sm:pt-20">

                    {/* HomePage-description */}
                    <div className="w-3/5">
                        <p className="text-[42px] font-extrabold max-sm:text-[14px] max-sm:font-bold max-lg:text-[16px] max-xl:text-[16px] ">
                            Bangun dan Wujudkan Cita Bersama EDUFREE
                        </p>
                        <p className="w-4/5 my-4 max-sm:text-[12px] max-lg:text-[14px] max-xl:text-[14px] ">
                            EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.
                        </p>

                        {/* buttons */}
                        <div className="flex mt-10 ">
                            <button className="bg-[#FCD980] text-[#282938] rounded-md py-2 px-8 mr-8 cursor-pointer max-sm:text-[10px] max-sm:px-2 max-sm:w-50   ">Lihat Kursus</button>
                            <div className="flex justify-center items-center max-sm:text-[10px] max-sm:w-50">
                                <Link to="#" >
                                Lihat Alur Belajar
                                </Link>

                               <IoIosArrowRoundForward className="w-[30px] h-[25px] "/>
                            </div>

                        </div>
                        {/*== buttons ==*/}
                    </div>
                    {/*== HomePage-description ==*/}

                    {/* HomePage-Image */}
                    <div className="w-2/5 max-xl:w-2/7">
                        <img src={homeImage} alt="image"  className=""/>

                    </div>
                    {/*== HomePage-Image ==*/}

                </div>
                {/*== HomePage-content ==*/}
                
            </div>
             {/*== HomePage-container ==*/}
        </>
    )
};

export default HomePage;
