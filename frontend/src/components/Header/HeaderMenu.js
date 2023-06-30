import '../../style/Header.css'
import {Link} from 'react-router-dom'

const dict = {
    "а":"a",    "б":"b",    "в":"v",    "г":"g",    "д":"d",    "е":"e",    "ё":"ei",   "ж":"j",    "з":"z",
    "и":"i",    "й":"i",    "к":"k",    "л":"l",    "м":"m",    "н":"n",    "п":"p",    "р":"r",    "о":"o",
    "с":"s",    "т":"t",    "у":"u",    "ф":"f",    "х":"h",    "ц":"c",    "ч":"ch",   "ш":"sh",   "щ":"sh",
    "ъ":"",     "ы":"i",     "ь":"",    "э":"e",    "ю":"y",    "я":"ua",   " ":"_",
    }

export function translateEng (string) {
    let buf = ""
    string = string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        buf += dict[string[i]];
    }
return buf
}



function HeaderMenu(props){
    const iconSrcImg = require(`../../ico/${translateEng(props.greetTarget)}.png`)
    return(
        <div className='header-menu-link'> 
                <Link 
                to={translateEng(props.greetTarget)}
                >
                <div className='header-menu-link__icon'>
                    <img 
                    src = {iconSrcImg}
                    alt = {props.greetTarget}
                    />
                </div>
                    <div className='header-menu-link__name'><b>{props.greetTarget}</b></div>
                </Link>
        </div>    
    )
}

export default HeaderMenu