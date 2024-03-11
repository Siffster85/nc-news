import axios from 'axios'

const newsAPI = axios.create({
	baseURL: 'https://yls-news.onrender.com/api/',
})

export function getArticles() {
    return newsAPI.get('/articles')
}

export function getArticleByID(id) {
    return newsAPI.get(`/articles/${id}`).then(({ data }) => {
        return data
    })
}