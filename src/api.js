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

export function getUsers() {
	return newsAPI.get('/users').then(({ data }) => {
		return data
	})
}

export function postComment(data, id) {
    return newsAPI.post(`/articles/${id}/comments`, data).then(({ data }) => {
        return data
    })
}

export function deleteComment(id) {
    return newsAPI.delete(`/comments/${id}`)
}