import Search from './Search';
// import ProfileCard from './ProfileCard'
import { useState } from 'react';
import {useQuery} from '@tanstack/react-query'

const App = ({onSearch}) => {
  // const [username,setUsername] = useState<string>('')
  

  return (
    <div>
      <Search />
      
    </div>
  )
}

export default App