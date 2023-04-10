
import { useState } from "react";
import Header from "../Header/Header";
import SectionCard from "../SectionCard";
import styles from "./styles.module.css"

const CourseSections = ({ sections }) => {
    const [query, setQuery] = useState("")
    return (
        <>
            <Header
                text={"Course"}
                user={{ user_name: "Tarun", user_rank: "12" }}
                isSearch
                query={query}
                setQuery={setQuery}
            />
            <div className={styles.container_body}>
                {sections?.filter((item) => item.section_name.toLowerCase().includes(query.toLowerCase())).map((sec) => {
                    return <SectionCard section={sec} />;
                })}
            </div>
        </>
    )
}

export default CourseSections