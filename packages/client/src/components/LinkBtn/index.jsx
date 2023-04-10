import styles from "./styles.module.css"

const LinkBtn = ({ text, link, iconPlacement, icon, iconStyle, btnStyle }) => {
    return (
        <a href={link === "back" ? "/" : link} className={styles.link_btn} style={btnStyle} >
            {iconPlacement === "left" && <img style={iconStyle} src={icon} alt="arrow-icon" />}
            <span>{text}</span>
            {iconPlacement === "right" && <img style={iconStyle} src={icon} alt="arrow-icon" />}
        </a>
    )
}

export default LinkBtn