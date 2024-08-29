import { Link } from "react-scroll"

const links = [
    {
        path: 'home',
        name: 'Home'
    },
    {
        path: 'tours',
        name: 'Tours',
    },
    {
        path: 'discographies',
        name: 'Discography'
    },
    {
        path: 'contacts',
        name: 'Contact'
    }
]

interface INav {
    containerStyles?: string;
    linkStyles?: string;
}

const Nav = ({ containerStyles, linkStyles } : INav) => {
    return  (
        <nav className={`${ containerStyles}`}>
        {   
            links.map((link, index) => {
                return ( <Link 
                    to={`${link.path}`}
                    key={ index }  
                    className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}   
                    smooth
                    spy
                    offset={-50}
                    activeClass='active'
                > 
                    { link.name } 
                    </Link>)
            })
        }
        </nav> 
    )
      
}

export default Nav;