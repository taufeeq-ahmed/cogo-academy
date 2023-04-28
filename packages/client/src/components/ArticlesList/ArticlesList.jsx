import React, { useEffect, useState } from 'react'
import LinkBtn from '../LinkBtn';
import instance from '../../utils/axios';
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
        <div>
            <p>Articles</p>
            <div style={{ display: 'flex', gap: '15px', margin: "10px 0" }}>
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