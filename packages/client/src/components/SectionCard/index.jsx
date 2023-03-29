import LessonsSVG from "/assets/lessons.svg";
import ClockSVG from "/assets/clock.svg";
import ArrowSVG from "/assets/arrow.svg"
import LinkBtn from "../LinkBtn";
import styles from './styles.module.css'

const SectionCard = ({ section }) => {
    return (
        <div className={styles.section}>
            <div className={styles.imgDiv}>
                <svg
                    width="60"
                    height="72"
                    viewBox="0 0 60 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <mask
                        id="mask0_46019_86793"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="60"
                        height="72"
                    >
                        <path
                            d="M55.3304 1H4.66958C4.15873 1.00006 3.65352 1.10677 3.18628 1.3133C2.71904 1.51983 2.30006 1.82163 1.95616 2.19938C1.61226 2.57714 1.35102 3.02253 1.18914 3.50705C1.02726 3.99157 0.968313 4.50455 1.01608 5.01316L5.94857 57.6155C6.00831 58.2557 6.2352 58.8689 6.60652 59.3939C6.97784 59.9188 7.48056 60.337 8.06434 60.6065L28.4623 70.0201C28.9444 70.2426 29.469 70.3578 30 70.3578C30.531 70.3578 31.0556 70.2426 31.5377 70.0201L51.9357 60.6065C52.5198 60.3372 53.0229 59.9192 53.3945 59.3942C53.7662 58.8693 53.9934 58.2559 54.0533 57.6155L58.9839 5.01316C59.0317 4.50455 58.9727 3.99157 58.8109 3.50705C58.649 3.02253 58.3877 2.57714 58.0438 2.19938C57.6999 1.82163 57.281 1.51983 56.8137 1.3133C56.3465 1.10677 55.8413 1.00006 55.3304 1Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"></path>
                        <path
                            d="M44.6802 13.8452H15.3201L17.1551 30.3602H42.8452L41.0102 50.5453L30.0001 56.0503L18.9901 50.5453L18.0726 41.3702"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                    </mask>
                    <g mask="url(#mask0_46019_86793)">
                        <path d="M-14 -8H74.0803V80.0803H-14V-8Z" fill="currentColor"
                        ></path>
                    </g>
                </svg>
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
                        <div className={styles.progress}></div>
                    </div>
                    <div className={styles.pill}>73%</div>
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
                    <LinkBtn icon={ArrowSVG} iconPlacement="right" text="Continue" link={`playground/${section.section_id}/${section.first_article_id}`} />
                </div>
            </div>
        </div >
    )
}

export default SectionCard