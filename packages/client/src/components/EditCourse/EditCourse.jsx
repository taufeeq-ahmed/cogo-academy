import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import UploadSVG from '/assets/upload.svg'
import styles from './styles.module.css'
import Dropdown from '../DropDown/Dropdown'

// const courseDetails = {
//     course_name: 'HTML',
//     sections_data: [
//         {
//             section_name: "Web Development Basics",
//             description: "What do web developers do? Web development could be a good profession for you if you like solving logical problems, building useful things, and experimenting with new technologies."
//         },
//         {
//             section_name: "GIT Basics",
//             description: "Git is like a really epic save button for your files and directories. Officially, Git is a version control system."
//         },
//         {
//             section_name: "HTML Basics",
//             description: "Learn the basics of HTML like Portfolio creation, tic-tac-toe game."
//         },
//         {
//             section_name: "HTML Text",
//             description: "Learn how to add links to your website. Go to a different page, website or open in new tab"
//         },
//         {
//             section_name: "HTML Lists",
//             description: "Learn to show lists in your website"
//         },
//         {
//             section_name: "HTML Links and Images",
//             description: "Learn how to add images to your websites."
//         },
//         {
//             section_name: "HTML Forms",
//             description: "Learns how to create, use and submit forms using HTML"
//         }
//     ]
// }
// const EditSection = ({ section_name = '', section_description = '', section_banner = '' }) => {
//     const [sectionName, setSectionName] = useState(section_name);
//     const [sectionDescription, setSectionDescription] = useState(section_description);
//     const [banner, setBanner] = useState(section_banner);

//     return (
//         <div className={styles.section_details}>
//             <div className={styles.section_data}>
//                 <div className="section_name">
//                     <label htmlFor="section_name" >Section Name</label>
//                     <Input
//                         placeholder='Course Name'
//                         size='md'
//                         style={{ width: '500px' }}
//                         name='section_name'
//                         value={sectionName}
//                         onChange={(e) => { setSectionName(e.target.value) }} />
//                 </div>
//                 <div className={styles.section_banner}>
//                     <input
//                         type="file"
//                         id="file_input"
//                         className={styles.file_input}
//                         hidden
//                         value={banner}
//                         onChange={(e) => { setBanner(e.target.value) }} />
//                     <label htmlFor="file_input" className={styles.upload_button}>
//                         <img src={UploadSVG} alt="upload_icon" />
//                         Browse To Upload Image
//                     </label>
//                 </div>
//             </div>
//             <label htmlFor="section_description">Section Description</label>
//             <Textarea
//                 size='md'
//                 placeholder='Section Description'
//                 rows={6}
//                 name='section_description'
//                 value={sectionDescription}
//                 onChange={(e) => { setSectionDescription(e.target.value) }}
//             />
//         </div>
//     )
// }

const EditCourse = () => {

    const [score, setScore] = useState(0);
    const options = [
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" },
    ]
    useEffect(() => {
        setScore((s) => s + 10)
    }, [])

    const handleClick = () => {
        alert("hello")
        setScore((s) => s + 1)
    }
    return (
        <div className='add_game' style={{ width: '50vw' }}>
            <p>The score is : {score}</p>
            <Dropdown placeHolder={"Select .."} options={options} />
            {/* <Button variant="contained" onClick={handleClick} text='clink + ' /> */}
            <Button onClick={handleClick} variant="contained">Hello World</Button>
        </div>
    )

}

export default EditCourse;

