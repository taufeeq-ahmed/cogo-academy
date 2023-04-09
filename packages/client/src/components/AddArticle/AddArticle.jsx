import { useState, useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
import styles from './styles.module.css'
import Button from '../Button/Button'



const AddArticle = ({ sectionId = '549fa7ed-4f49-4ae1-a105-ae68b3ad4e11' }) => {

    const [text, setText] = useState('');
    // const getArticle = async () => {
    //     const response = await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/article/${articleId}`);
    //     const article = await response.json();
    //     setText(article)
    // }
    const addArticle = async () => {
        try {
            await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/article/${sectionId}/add`, {
                method: "POST",
                body: JSON.stringify({
                    article_name: 'DOM-INTRO',
                    article_time_in_mins: 4,
                    article_content: text,
                    total_score: 6,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="edit_article">
            <div className={styles.editor}>
                <RichTextEditor
                    value={text}
                    onChange={setText}
                />

            </div>
            <div className={styles.submit_article}>
                <Button text='Save Article' onClick={addArticle} />
            </div>
        </div>

    );
}

export default AddArticle;
