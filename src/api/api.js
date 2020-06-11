import * as axios from 'axios'


const axiosTodo = axios.create({
    baseURL: 'http://todoBackEnd/'
})

export const todoAPI = {
  async getTask(id) {
    let response = await axiosTodo.get(`?id=${id}`)
    return response.data
  },
  async getAllTasks() {
    let response = await axiosTodo.get('')
    return response.data
  },
  async updateTask(id, newData) {
    let response = await axiosTodo.post('', newData)
    return response.data
  },
  async deleteTask(id) {
    let response = await axiosTodo.delete(`?id=${id}`)
    return response.data
  },
  async addTask(newTask) {
    let response = await axiosTodo.post('', newTask)
    return response.data;
  }
}
