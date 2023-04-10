import React, { useEffect, useState } from 'react'
import LinkBtn from '../LinkBtn';

const ArticlesList = ({ sectionId }) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const resp = await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/${sectionId}/article`)
            const articlesData = await resp.json();
            setArticles(articlesData)
        }

        getArticles()

    }, [])
    return (
        <div className='articles' style={{ display: 'flex' }}>
            {
                articles?.map((article) =>
                    <LinkBtn text={article.article_name}
                        link={`/admin/article/${article.article_id}/edit`}
                        btnStyle={{ fontSize: '13px', 'backgroundColor': '#F3FAFA', padding: '10px', fontSize: 14, margin: 10 }}
                        key={article.article_id}
                    />
                )
            }
        </div>
    )
}

export default ArticlesList;