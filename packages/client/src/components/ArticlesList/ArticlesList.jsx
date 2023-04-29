import React, { useEffect, useState } from 'react'
import LinkBtn from '../LinkBtn';
import instance from '../../utils/axios';
import styles from "./styles.module.css"


const ArticlesList = ({ sectionId }) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const resp = await instance.get(`/${sectionId}/article`)
            const articlesData = await resp.data;
            setArticles(articlesData)
        }

        getArticles()

    }, [])
    return (
        <div className={styles.existing_articles}>
            <p>Articles : </p>
            <div className={styles.articles_list}>
                {
                    articles?.map((article) =>
                        <LinkBtn text={article.article_name}
                            link={`/admin/article/${article.article_id}/edit`}
                            btnStyle={{ fontSize: '13px', 'backgroundColor': '#F3FAFA', padding: '10px', fontSize: 14 }}
                            key={article.article_id}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ArticlesList;