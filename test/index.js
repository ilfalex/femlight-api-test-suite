const axios = require('axios')
const expect = require('chai').expect

describe('API Initialization', async () => {

  it('API should return status of 200', async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      expect(res.status).to.equal(200)
    })
  })

  it('API should return a title and a status', async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      expect(res.data.title).to.be.ok
      expect(res.data.userId).to.be.ok
      expect(res.data.id).to.be.ok
    })
  })

})
