import LogoutSVG from "/assets/logout.svg";
import styles from './styles.module.css'
import SearchSVG from "/assets/search.svg";
import InputBox from "../InputBox/InputBox";
const Header = ({ text, user, isSearch = false, query = "", setQuery = () => { } }) => {
	return (
		<div className={styles.header}>
			<div className={styles.course_title}>{text}</div>
			<div className={styles.header_right}>
				{isSearch && <InputBox icon={SearchSVG} query={query} setQuery={setQuery} placeholder={'Search for Content'} />}
				<div className={styles.profile_box}>
					<div className={styles.prof_pic}>
						<img
							src="https://source.unsplash.com/random"
							alt="profile-pic"
						/>
					</div>
					<div className={styles.profile_details}>
						<div className={styles.profile_name}>{user.user_name}</div>
						<div className={styles.profile_rank}>Rank {user.user_rank}</div>
					</div>
					<a className={styles.logout_box} href="/logout">
						<img src={LogoutSVG} alt="logout-icon" />
					</a>
				</div>
			</div>
		</div >
	)
}

export default Header