import React from 'react'
import styles from './styles.module.css'
const ArticleContent = ({ htmlContent }) => {
    return (
        <div className={styles.article_content} >
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>

    )
}

export default ArticleContent
