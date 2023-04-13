import LogoutSVG from "/assets/logout.svg";
import styles from './styles.module.css'
import SearchSVG from "/assets/search.svg";
import InputBox from "../InputBox/InputBox";
import LinkBtn from "../LinkBtn/index"
import AdminSVG from '/assets/admin.svg'

const Header = ({ text, user, isSearch = false, query = "", setQuery = () => { } }) => {
	return (
		<div className={styles.header}>
			{!isSearch && (<div className={styles.course_title}>{text}</div>)}
			{isSearch &&
				<div className={styles.search_box}>
					<InputBox icon={SearchSVG} type={"text"} value={query} setValue={(e) => setQuery(e.target.value)} placeholder={'Search for Content'} />
				</div>
			}
			<div className={styles.header_right}>
				{user.isAdmin && <LinkBtn text="Admin Dashboard"
					link={`/admin`}
					btnStyle={{ padding: '10px' }}
					icon={AdminSVG}
					iconStyle={{ width: '16px' }}
				/>}
				<div className={styles.profile_box}>
					<div className={styles.prof_pic}>
						<img
							src="https://source.unsplash.com/random"
							alt="profile-pic"
						/>
					</div>
					<div className={styles.profile_details}>
						<div className={styles.profile_name}>{user?.user_name}</div>
						{/* <div className={styles.profile_rank}>Rank {user.user_rank}</div> */}
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