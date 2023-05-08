import { useState, useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
// import styles from './styles.module.css'
import Button from '../Button/Button'
import InputBox from '../InputBox/InputBox'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import instance from '../../utils/axios';
import cross from '/assets/cross.svg';
import './styles.css'
const AddArticle = ({ sectionId }) => {

    const methods = useForm({
        defaultValues: {
            Links: [{ link_name: '' }]
        }
    });

    const { register, control, handleSubmit, reset, watch } = methods;
    const [text, setText] = useState('');
    const {
        fields,
        append,
        prepend,
        remove,
        swap,
        move,
        insert,
        replace
    } = useFieldArray({
        control,
        name: "Links"
    });

    // const { register, handleSubmit } = useForm();
    // const onSubmit = async data => {  };
    // const [text, setText] = useState('');
    const addArticle = async (data) => {
        data.article_content=text;
        data.article_time_in_mins=parseInt(data.article_time_in_mins);
        try {
            await instance.post(`/article/${sectionId}/add`, data)
            window.location.href = '/admin/courses'

        } catch (err) {

        }
    }

    return (
        <FormProvider {...methods}>
            <form className="edit_article_container" onSubmit={handleSubmit(addArticle)}>
                <div className="inputs">
                    <div className="name_time">
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
                            <label htmlFor="">Time to read</label>
                            <InputBox
                                register={register}
                                registerQuery='article_time_in_mins'
                                placeholder='Article Time In Minutes'
                                type='number'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Additional Links</label>
                        {fields?.map((item, index) => {
                            return (
                                <div className="">
                                    <div className="additional_link">
                                        <div className="link">
                                        <label htmlFor="">Link Name</label>
                                            <InputBox
                                                placeholder={"Link Name"}
                                                style={{ fontSize: '16px', marginTop: "5px" }}
                                                name="link_name"
                                                register={register}
                                                style_box={{ marginBottom: "5px" }}
                                                registerQuery={`Links.${index}.link_name`}
                                                required />
                                        </div>
                                        {/* <img src={cross} alt="delete" /> */}
                                        <div className='url'>
                                        <label htmlFor="">Link Url</label>
                                            <InputBox
                                                placeholder={"Link_url"}
                                                style={{ fontSize: '16px', marginTop: "5px" }}
                                                name="link_url"
                                                register={register}
                                                style_box={{ marginBottom: "5px" }}
                                                registerQuery={`Links.${index}.link_url`}
                                                required />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className='button'> 
                        <div>
                        <Button
                            text="+ Add Additional link"
                            onClick={() => {
                                append({ link_name: '', link_url: '' });
                            }}
                        />
                        </div>
                        <div>
                        <Button text='Reset' onClick={() => reset({
                            Links: []
                        })

                        } /></div>
                        </div>
                    </div>
                </div>
                <div className="editor">
                    <RichTextEditor
                        value={text}
                        onChange={setText}
                        register={register}
                        registerQuery='article_content'
                    />

                </div>
                <div className="submit_article">
                    <Button btnStyle={{ margin: "10px 0" }} text='Save Article' type='submit' />
                </div>
            </form>
        </FormProvider>
    );
}

export default AddArticle;
