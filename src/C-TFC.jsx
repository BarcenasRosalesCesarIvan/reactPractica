import './C-TFC.css'
import {useState} from 'react' // usando estado añadir funcionalidad a componentes

export function TwiterFollowCard ({formatUserName ,userName, children}) { 

    const [isFollowing, setIsFollowing] = useState(false)

    const text= isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
    ? 'md-followCard-button is-following'
    : 'md-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)    
    }

    return(
        <article className='md-followCard'>
            <header className='md-followCard-header'>
                <img className='md-followCard-avatar'
                src={`https://unavatar.io/${userName}`} alt="Un tipo de React" />
                <div className='md-followCard-info'>
                    <strong>{children}</strong>
                    <span className='md-followCard-infoUserName'>
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>
 

            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    {text}
                </button>
            </aside>
        </article>
    )
}