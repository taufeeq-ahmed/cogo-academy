import styles from "./styles.module.css"

const LinkBtn = ({ text, link, iconPlacement = "left", icon, iconStyle, btnStyle }) => {
    return (
        <a href={link === "back" ? "/" : link} className={styles.link_btn} style={btnStyle} >
            {iconPlacement === "left" && <img style={iconStyle} src={icon} alt="arrow-icon" />}
            <span className={styles.text}>{text}</span>
            {iconPlacement === "right" && <img style={iconStyle} src={icon} alt="arrow-icon" />}
        </a>
    )
}

export default LinkBtn