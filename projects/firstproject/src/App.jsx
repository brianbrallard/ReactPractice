import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    const [isFollowing, setIsFollowing] = useState(false)

    return (
        <section className='App'>
        <TwitterFollowCard userName='brianbrallard' initialIsFollowing={true}>
            Brian Polo
            </TwitterFollowCard>
        <TwitterFollowCard userName="brianbrallard" >
            Brian Polo
            </TwitterFollowCard>

        <button onClick={()=> setIsFollowing(!isFollowing)}>Cambiar estado de app</button>    
        <TwitterFollowCard isFollowing userName="brianbrallard" name="Brian Polo"/>
        <TwitterFollowCard isFollowing userName="brianbrallard" name="Brian Polo"/>
       
        </section>
        

    )
}
