import '../App.css'
import securityIcon from '../assets/confirmdelete.png'

interface SuccessMessageProps{
    message:string,
    onClose: () => void,
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({message,onClose}) => {
    return (
        <>
            <div className='overlay '  onClick={onClose}>
                <div className='position-element w-2/6 h-fit rounded-lg bg-white text-center p-8 max-sm:w-5/6 max-lg:w-3/6' >
                    <button
                        className='absolute text-[#888] cursor-pointer top-5 left-5 font-bold '
                        onClick={onClose}
                    >
                        X
                    </button>
                <div className='w-2/6 bg-[#C29062] rounded-full p-8 m-auto max-sm:p-5'>
                    <img src={securityIcon} className='w-full'/>
                </div>
                <p className='text-[22px] font-bold mt-4 mb-4 max-sm:text-[14px] max-lg:text-[16px] max-xl:text-[14px]'>{message}</p>
            </div>
            </div>
        </>
    )
}

export default SuccessMessage;