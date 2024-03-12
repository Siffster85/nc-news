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

export function getComments(id) {
    return newsAPI.get(`/articles/${id}/comments`).then(({ data }) => {
        return data
    })
}

export function patchArticle(vote, id){
    return newsAPI.patch(`/articles/${id}`, {inc_votes: vote}).then(({ data }) => {
        return data
    })
}