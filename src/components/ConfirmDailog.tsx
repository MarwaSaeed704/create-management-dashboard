import deleteImg from '../assets/assest4.png'
import '../App.css'

interface ConfirmDailogProps{
    message:string,
    onConfirm:()=>void,
    onCancle: () => void,
   
}

const ConfirmDailog: React.FC<ConfirmDailogProps> = ({ message,onConfirm,onCancle}) => {
    
    return (
        <>
                       
               {/* overlay */}
      <div className="overlay"> 

        {/* accept-content */}
        <div className="position-element  w-2/6 h-fit rounded-lg bg-white text-center p-8 max-sm:w-5/6 max-lg:w-3/6">
          <div className='w-3/6 m-auto '> <img src={deleteImg} className='w-full'/> </div>
          <p className='text-[22px] font-medium mt-4 mb-6'>  {message}  </p>

          <div className='flex'>
            <button
             onClick={onConfirm}                 
              className='bg-[#C29062]  text-white rounded-md w-3/6 p-2 font-bold text-[22px] ml-4'              
            >
             cofirm 
            </button>
            <button
              onClick={onCancle}
              className='text-[#C29062] main-font border-maincolor bg-white rounded-md w-3/6 p-2 font-bold text-[22px] mr-4'
            >
              cancle
            </button>
          </div>

        </div>
        {/*== accept-content ==*/}

      </div>
      {/*== overlay ==*/}
                

            
         
        </>       

          
    )
    
}

export default ConfirmDailog;