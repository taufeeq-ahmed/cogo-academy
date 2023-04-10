import LogoutSVG from "/assets/logout.svg";
import styles from './styles.module.css'
import SearchSVG from "/assets/search.svg";

const Header = ({ text, user, isSearch = false, query = "", setQuery = () => { } }) => {
	return (
		<div className={styles.header}>
			<div className={styles.course_title}>{text}</div>
			<div className={styles.header_right}>
				{isSearch && <div className={styles.search_box}>
					<img src={SearchSVG} alt="search-icon" />
					<input
						className={styles.search_input}
						type="text"
						id="search-bar"
						placeholder="Search for Content"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>}
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
					<div className={styles.logout_box}>
						<img src={LogoutSVG} alt="logout-icon" />
					</div>
				</div>
			</div>
		</div >
	)
}

export default Header