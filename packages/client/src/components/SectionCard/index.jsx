import LessonsSVG from "/assets/lessons.svg";
import ClockSVG from "/assets/clock.svg";
import ArrowSVG from "/assets/arrow.svg"
import LinkBtn from "../LinkBtn";
import styles from './styles.module.css'

const SectionCard = ({ section }) => {

    console.log("section", section)

    const getLink = () => {
        let type = "article"
        let link_id = section.first_article_id
        if (section.first_article_id) {
            type = "article"
            link_id = section.first_article_id
        }
        else if (section.first_submission_id) {
            type = "submission"
            link_id = section.first_submission_id
        }
        return `playground/${section?.section_id}/${type}/${link_id}`
    }

    const getProgress = () => {
        const {
            number_of_articles = 0,
            number_of_exercises = 0,
            number_of_submissions = 0,

            number_of_articles_read = 0,
            number_of_submissions_done = 0
        } = section
        const denominator = number_of_articles + number_of_exercises + number_of_submissions

        if (denominator === 0) {
            return 0
        }

        const res = ((number_of_articles_read + number_of_submissions_done) / denominator) * 100

        if (res >= 100) return 100

        return res.toPrecision(2)
    }


    return (
        <div className={styles.section}>
            <div className={styles.imgDiv}>
                <img
                    src="https://source.unsplash.com/random"
                    alt="profile-pic"
                />
            </div>
            <div className={styles.section_content}>
                <div className={styles.section_header}>
                    <span>{section.section_name}</span>
                </div>
                <div className={styles.section_body}>
                    <p>
                        {section.description}
                    </p>
                </div>
                <div className={styles.section_progress}>
                    <div className={styles.progress_bar}>
                        <div className={styles.progress} style={{ width: getProgress() + '%' }}></div>
                    </div>
                    <div className={styles.pill}>{getProgress()}%</div>
                </div>
                <div className={styles.section_footer}>
                    <div className={styles.data_boxes}>
                        <div className={styles.data_box}>
                            <img src={LessonsSVG} alt="lessons-icon" />
                            <span>{section.number_of_section_materials} lessons</span>
                        </div>
                        <div className={styles.data_box}>
                            <img src={ClockSVG} alt="clock-icon" />
                            <span>{section.duration_in_minutes} Minutes</span>
                        </div>
                    </div>
                    {(section.first_article_id || section.first_submission_id) ?
                        <LinkBtn icon={ArrowSVG} iconPlacement="right" text="Continue" link={getLink()} /> :
                        <p style={{ fontSize: '12px' }}>Coming soon..</p>}
                </div>
            </div>
        </div >
    )
}

export default SectionCard