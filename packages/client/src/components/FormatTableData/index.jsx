import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Table from '../Table/Table';
const FormatTable = ({ studentData }) => {
    const [header, setheader]=useState("Code")
    const [showModal, setshowModal] = useState(false);
    const [exe, setexercise] = useState("");
    const [sub, setSubmission]=useState("");
    const reportHandlerSub=(submission)=>{
        console.log(submission);
        setshowModal(true);
        setSubmission(submission);
        setheader("Submission_link");
    }
    const reportHandler = (exercise) => {
        setshowModal(true);
        setexercise(exercise);
        setheader("Code");
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
                ...studentData.submissions?.map((submission) => {
                    const newArticle = [
                        { name: submission?.submission?.submission_name },
                        { name: submission?.submission?.section?.section_name },
                        { name: submission?.submission?.section?.course?.course_name },
                        { name: submission?.score || 0 },
                        { name: <Button onClick={() => reportHandlerSub(submission)} text={'Report'} /> },
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
                heading={header}
                toggle={closeModalHandler}
                submitText={"Close"} >
                {exe? exe.code : sub.submission_url}
            </Modal>
        </>
    )
}
export default FormatTable;