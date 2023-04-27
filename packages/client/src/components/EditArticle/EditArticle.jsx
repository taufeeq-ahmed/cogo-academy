import { useState, useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
import './styles.css'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import InputBox from '../InputBox/InputBox';
import instance from '../../utils/axios';
const EditArticle = ({ article }) => {

    const [text, setText] = useState('');
    const { article_name, article_time_in_mins, article_content, article_id } = article;

    const { register, handleSubmit } = useForm({
        defaultValues: {
            article_name: article_name,
            article_time_in_mins: article_time_in_mins,
        }
    });

    const onSubmit = async data => { };

    const updateArticle = async (data) => {

        try {
            await instance.patch(`/article/${article_id}`, {
                new_data: {
                    article_name: data.article_name,
                    article_time_in_mins: data.article_time_in_mins,
                    article_content: text,
                    total_score: 1
                }
            })
            window.location.href='/admin/courses';
        } catch (err) {

        }
    }
    useEffect(() => {
        setText(article_content);
    }, [])
    return (
        <div className="add_article_container">
            <form className="inputs">
                <div
                    className="input_box_container"
                >
                    <label htmlFor="">Article Name</label>
                    <InputBox
                        register={register}
                        registerQuery='article_name'
                        placeholder='Article Name'

                    />
                </div>
                <div
                    className="input_box_container"
                >
                    <label htmlFor="">Article Name</label>
                    <InputBox
                        register={register}
                        registerQuery='article_time_in_mins'
                        placeholder='Article Time In Minutes'
                        type='number'
                    />
                </div>
            </form>
            <div className="editor">
                <RichTextEditor
                    value={text}
                    onChange={setText}
                />

            </div>
            <div className="submit_article">
                <Button btnStyle={{ margin: "10px 0" }} text='Save Article' onClick={handleSubmit(updateArticle)} />
            </div>
        </div>

    );
}

export default EditArticle;

