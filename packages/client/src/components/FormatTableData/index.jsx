import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Table from '../Table/Table';
const FormatTable = ({ studentData }) => {
    console.log("...........--------------------")
    console.log("daslkndasld", studentData)

    const [showModal, setshowModal] = useState(false);
    const [exe, setexercise] = useState("");
    const reportHandler = (exercise) => {
        setshowModal(true);
        setexercise(exercise);
    }
    const closeModalHandler = () => {
        setshowModal(false);
    };
    const formatTableData = () => {
        const tableData = {
            head: ["Title", "Section", "Course", "Score", "Action"],
            rows: [
                ...studentData.readArticles?.map((article) => {
                    const newArticle = [
                        { name: article?.article?.article_name },
                        { name: article?.article?.section?.section_name },
                        { name: article?.article?.section?.course?.course_name },
                        { name: article?.score || 0 },
                        // { name: <button onClick={reportHandler}>Report</button> },
                    ];
                    return newArticle;
                }),
                ...studentData.exercises?.map((exercise) => {
                    const newArticle = [
                        { name: exercise?.exercise?.exercise_name },
                        { name: exercise?.exercise?.section?.section_name },
                        { name: exercise?.exercise?.section?.course?.course_name },
                        { name: exercise?.score || 0 },
                        { name: <Button onClick={() => reportHandler(exercise)} text={'Report'} /> },
                    ];
                    return newArticle;
                }),
            ],
        };
        return tableData;
    };
    return (
        <>
            <Table data={formatTableData()} />
            <Modal
                isShowing={showModal}
                heading={"Code"}
                toggle={closeModalHandler}
                submitText={"Close"} >
                {exe?.code}
            </Modal>
        </>
    )
}
export default FormatTable;