
import { useState } from "react";
import Header from "../Header/Header";
import SectionCard from "../SectionCard";
import styles from "./styles.module.css"

const CourseSections = ({ sections, userData }) => {
    const [query, setQuery] = useState("")
    const fileteredarray=sections?.filter((item) => item.section_name.toLowerCase().includes(query.toLowerCase()))
    return (
        <>
            <Header
                text={"Course"}
                user={{ user_name: userData?.user_name, user_rank: userData?.user_rank }}
                isSearch
                query={query}
                setQuery={setQuery}
            />
            <div className={styles.section_cards}>
                <div className={styles.container_body}>
                    {fileteredarray?.length >0 ? (
                    fileteredarray?.map((sec) => {
                        return <SectionCard section={sec} />;
                    })):<div className={styles.nocontent}><img className={styles.nocontentimage} src="https://cdn.cogoport.io/cms-prod/cogo_partner/vault/original/empty_item.svg"></img>
                    <div className={styles.nocontenttext}>No content found</div></div>}
                </div>
            </div>
        </>
    )
}

export default CourseSections