import React from 'react'
import style from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={style.links}>
            <a target="blank" href='https://github.com/marco5x'>
                <img src={'https://raw.githubusercontent.com/seasonfif/github/master/icon/icon_192.png'} alt="GitHub" width='40px' />
            </a>
            <a target="blank" href='https://www.linkedin.com/in/marcos-cruz-dev/' >
                <img src={'https://freepngimg.com/thumb/social_media/74290-icons-media-wallpaper-linkedin-desktop-computer-social.png'} alt="Linkedin" width='70px' />
            </a>
            <a target="blank" href='https://marco5x.github.io/developer/' >
                <img src={'https://hamiltonrising.com/wp-content/uploads/2018/09/website-logo-png.png'} alt="Web" width='50px' />
            </a>
        </div>
    )
}
