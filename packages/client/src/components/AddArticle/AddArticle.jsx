import { useState, useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
import styles from './styles.module.css'
import Button from '../Button/Button'
import InputBox from '../InputBox/InputBox'
import { useForm } from 'react-hook-form'
import instance from '../../utils/axios';


const AddArticle = ({ sectionId }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {  };
    const [text, setText] = useState('');
    const addArticle = async (data) => {

        try {
            await instance.post(`/article/${sectionId}/add`, {
                article_name: data.article_name,
                article_time_in_mins: parseInt(data.article_time_in_mins),
                article_content: text,
                total_score: 1,
            })

        } catch (err) {

        }
    }

    return (
        <div className="edit_article">
            <form className={styles.inputs}>
                <InputBox
                    register={register}
                    registerQuery='article_name'
                    placeholder='Article Name'

                />
                <InputBox
                    register={register}
                    registerQuery='article_time_in_mins'
                    placeholder='Article Time In Minutes'
                    type='number'
                />
            </form>
            <div className={styles.editor}>
                <RichTextEditor
                    value={text}
                    onChange={setText}
                />

            </div>
            <div className={styles.submit_article}>
                <Button text='Save Article' onClick={handleSubmit(addArticle)} />
            </div>
        </div>

    );
}

export default AddArticle;
