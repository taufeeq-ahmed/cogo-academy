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
        <div className={styles.edit_article_container}>
            <form className={styles.inputs}>
                <div
                    className={styles.input_box_container}
                >
                    <label htmlFor="">Article Name</label>
                    <InputBox
                        register={register}
                        registerQuery='article_name'
                        placeholder='Article Name'

                    />
                </div>
                <div
                    className={styles.input_box_container}
                >
                    <label htmlFor="">Time to read</label>
                    <InputBox
                        register={register}
                        registerQuery='article_time_in_mins'
                        placeholder='Article Time In Minutes'
                        type='number'
                    />
                </div>

            </form>
            <div className={styles.editor}>
                <RichTextEditor
                    value={text}
                    onChange={setText}
                />

            </div>
            <div className={styles.submit_article}>
                <Button btnStyle={{ margin: "10px 0" }} text='Save Article' onClick={handleSubmit(addArticle)} />
            </div>
        </div>

    );
}

export default AddArticle;
