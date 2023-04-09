import { useState, useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
import styles from './styles.module.css'
import Button from '../Button/Button'

const EditArticle = ({ articleId = 'c1d40b6a-ea92-4de2-ab9e-d4f7202d41c8' }) => {

    const [text, setText] = useState('');
    const getArticle = async () => {
        const response = await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/article/${articleId}`);
        const article = await response.json();
        setText(article.article_content)
    }
    const updateArticle = async () => {
        try {
            await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/article/${articleId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    new_data: {

                        article_name: 'DOM-INTRO',
                        article_time_in_mins: 4,
                        article_content: text,
                        total_score: 6
                    }
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        getArticle()
    }, [])
    return (
        <div className="add_article">
            <div className={styles.editor}>
                <RichTextEditor
                    value={text}
                    onChange={setText}
                />

            </div>
            <div className={styles.submit_article}>
                <Button text='Save Article' onClick={updateArticle} />
            </div>
        </div>

    );
}

export default EditArticle;

