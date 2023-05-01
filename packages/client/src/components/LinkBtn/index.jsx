import styles from "./styles.css"

const LinkBtn = ({ text, link, iconPlacement = "left", icon, iconStyle, btnStyle }) => {
    return (
        <a href={link === "back" ? "/" : link} className='link_btn' style={btnStyle} >
            {iconPlacement === "left" && icon && <img style={iconStyle} src={icon} alt="arrow-icon" />}
            <span className='text'>{text}</span>
            {iconPlacement === "right" && icon && <img style={iconStyle} src={icon} alt="arrow-icon" />}
        </a>
    )
}

export default LinkBtn