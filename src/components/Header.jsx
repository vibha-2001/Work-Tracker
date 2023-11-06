import Work from '../assets/Logo.svg'

export default function Header() {
    return (
        <header className='Header'>
            <img src = {Work} className="icon" alt= "Work logo" />
            <h1 className='Title'>Work Tracker</h1>
      </header>  
    )
}