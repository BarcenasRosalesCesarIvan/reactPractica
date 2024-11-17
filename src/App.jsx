// En este archivo 
// Importar App.css 
/*
*/

//Importar componente
import { TwiterFollowCard } from "./C-TFC"

    const formatUserName = (userName) => `@${userName}`

export function App(){
    return (
        <section className='editLevelApp'> 
            <TwiterFollowCard formatUserName={formatUserName} isFollowing userName='midudev'>
                Miguel Angel Duran
            </TwiterFollowCard>
           
            <TwiterFollowCard formatUserName={formatUserName} isFollowing={false} userName='peralph'>
                Peralph
            </TwiterFollowCard>

            <TwiterFollowCard formatUserName={formatUserName} isFollowing userName='code'>
                Code Inc.
            </TwiterFollowCard>
        </section>
    )
}
 
