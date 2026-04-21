import React, { useState } from 'react'


interface ProfileCardProps{
    name: string,
    login:string,
    avatar_url: string,
    bio: string | null,
    followers: number,
    public_repos: number,

}

const ProfileCard = ({name,login,avatar_url,bio,followers,public_repos}: ProfileCardProps) => {
    
  return (
    // <div><hr className='mt-6'/>
    //     <h1 className='mt-3'>Github Analyzed Data Card</h1>
    //     <img src={avatar_url} className='w-15 h-15 justify-center items-center text-center ml-35 rounded-full mt-3'/>
    //     <p className='p-2 bg-transparent text-black rounded-full mt-2 ml-5'>{name}</p>
    //     <p className=''>Followers: {followers}</p>
    //     <p className=''>{public_repos}</p>
    //     </div>

      <div className='mt-6 text-white text-center'>
      <img src={avatar_url} className='w-20 h-20 rounded-full mx-auto mb-3' />
      <h2 className='text-xl font-bold'>{name}</h2>
      <p className='text-purple-300'>@{login}</p>
      <p className='text-sm mt-2'>{bio}</p>
      <div className='flex justify-center gap-6 mt-4'>
        <div>
          <p className='font-bold'>{followers}</p>
          <p className='text-xs text-purple-300'>Followers</p>
        </div>
        <div>
          <p className='font-bold'>{public_repos}</p>
          <p className='text-xs text-purple-300'>Repos</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

// import React from "react"

// interface ProfileCardProps {
//   name: string
//   login: string
//   avatar_url: string
//   bio: string | null
//   followers: number
//   public_repos: number
// }

// const ProfileCard = ({ name, login, avatar_url, bio, followers, public_repos }: ProfileCardProps) => {
//   return (
//     <div className='mt-6 text-white text-center'>
//       <img src={avatar_url} className='w-20 h-20 rounded-full mx-auto mb-3' />
//       <h2 className='text-xl font-bold'>{name}</h2>
//       <p className='text-purple-300'>@{login}</p>
//       <p className='text-sm mt-2'>{bio}</p>
//       <div className='flex justify-center gap-6 mt-4'>
//         <div>
//           <p className='font-bold'>{followers}</p>
//           <p className='text-xs text-purple-300'>Followers</p>
//         </div>
//         <div>
//           <p className='font-bold'>{public_repos}</p>
//           <p className='text-xs text-purple-300'>Repos</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfileCard