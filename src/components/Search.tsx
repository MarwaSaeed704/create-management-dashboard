
import { CiSearch } from "react-icons/ci";
interface SearchProps{
    value: string,
    onChange:(value:string)=>void
}


const Search: React.FC<SearchProps> = ({value,onChange}) => {
    
  return (
      <>
          <div className='w-4/6 text-gray-700 relative mt-20 mb-5 ml-5 '>
              
              <input
                  type='text'
                  placeholder='search by course name'
                  className='px-8 py-2 w-full  border-1 rounded-lg border-gray-500'
                  value={value}
                  onChange={(e)=>{onChange(e.target.value)}}
              />
              <CiSearch className='absolute mx-2 top-3 w-5 h-5'/>

          </div>
      </>
  )
}

export default Search
