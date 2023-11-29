import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
   
    return (
        <section className='App'>
        <TwitterFollowCard isFollowing userName="brianbrallard" name="Brian Polo"/>
        <TwitterFollowCard isFollowing userName="brianbrallard" name="Brian Polo"/>
        <TwitterFollowCard isFollowing userName="brianbrallard" name="Brian Polo"/>
        <TwitterFollowCard isFollowing userName="brianbrallard" name="Brian Polo"/>
        
        </section>
    )
}
