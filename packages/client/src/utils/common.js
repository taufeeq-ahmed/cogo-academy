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



export async function fetchData(url) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/${url}`, {
            headers: {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJTYWkgVGFydW4iLCJlbWFpbCI6InNhaXRhcnVuc3N0QGdtYWlsLmNvbSIsImlhdCI6MTY4MDc4Mjc1N30.LKGBNau60yrLGGlTUgJcvFv5lJoDj3LWe1gD1uKQkbk`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return false
        // Handle the error, such as by displaying an error message to the user
    }
}