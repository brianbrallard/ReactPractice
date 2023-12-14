import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){

const users = [
    {
        userName: 'brianbrallard',
        name: 'Brian Polo', 
        isFollowing: true
    },
    {
        userName: 'brianbrallard', 
        name: 'Brian Polo', 
        isFollowing: true
    },
    {
        userName: 'brianbrallard', 
        name: 'Brian Polo', 
        isFollowing: false
    },
    {
        userName: 'brianbrallard', 
        name: 'Brian Polo', 
        isFollowing: false
    }
    
]


    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing })=>(
                

                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            >
                             {name}
                            </TwitterFollowCard>

                ))
            }
       
        </section>
        

    )
}
