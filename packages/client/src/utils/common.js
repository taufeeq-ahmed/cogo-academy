export const getNextArticle1 = (all_articles, articleId) => {
    let next_article = "/"
    all_articles.forEach((article, i) => {
        if (article.article_id === articleId) {
            if (i === all_articles.length - 1) {
                return next_article
            }
            next_article = all_articles[i + 1].article_id
        }
    })
    return next_article
}

export async function fetchData(url, token) {
    console.log("---das-das-dsa-d-asd-as-d-asd-asd-as-")

    try {
        const response = await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/${url}`, {
            headers: {
                authorization: `Bearer ${token}`
            },
        });
        const data = await response.json();
        if (!response.ok) {
            const error = (data && data.message) || response.status;
            throw new Error('Network response was not ok : ' + error);
        }
        return data;
    } catch (error) {
        // console.log(error)
        return false;
    }
}

export const parseCookie = str => str?.split(';')?.map(v => v.split('='))?.reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
}, {});
