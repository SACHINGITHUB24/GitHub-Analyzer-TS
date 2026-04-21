import {  useState } from 'react'
import {useQuery} from '@tanstack/react-query'
import {Spinner} from './components/ui/spinner'
import ProfileCard from './ProfileCard'
interface GithubUser{
  login: string
  name: string
  avatar_url: string
  public_repos: number
  followers: number
  bio: string | null

}



const fetchGithubUser = async (username: string): Promise<GithubUser> => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  if(!res.ok) throw new Error("User Not Found")
    return res.json()

}



const Search = () => {

  const [query,setQuery] = useState<string>('')
  const [username,setUsername] = useState<string>('')


  const {data,isLoading,error} = useQuery<GithubUser>({
    queryKey: ['github-user', username],
    queryFn: () => fetchGithubUser(username),
    enabled:username.length > 0,
    staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10
  })





const handlesearch = (e: React.FormEvent) => {
  
 e.preventDefault()
 if(query.trim()) setUsername(query.trim())

}


if(isLoading) return (
  <div className='min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center'>
    <Spinner className='text-white w-10 h-10'/>
  </div>
)
console.log(data)


if(error) return (
  <div className='min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center'>
    <p className='text-white text-xl'>User Not Found</p>
  </div>
)





  return (
  
  <div className='min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center'>
   <div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 w-96 border border-white/20'>
    <form onSubmit={handlesearch}>
      <h1 className='text-2xl  font-bold  text-white  text-center  mb-2'>Github Profile Analyzer with Tanstack</h1>
      <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search Github Profile' className='w-full + bg-white/10 + border border-white/20 + rounded-xl + px-4 py-3 + text-white + placeholder-white/50 + outline-none + mb-4'/><br />
      <button className='w-full + bg-gradient-to-r from-purple-500 to-indigo-500 + text-white + font-semibold + py-3 + rounded-xl + hover:opacity-90' type='submit' >Search</button>
    </form>

<div className='bg-transparent text-center text-white mt-2 text-2xl'>
    {data && <ProfileCard {...data} />}
    </div>
    </div>
   </div>

  )
}

export default Search