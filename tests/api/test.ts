import request from 'supertest'
import server from '../../app/api/create/route' // replace with the path to your server file

describe('POST /api/create', () => {
  it('should create a new URL and return a 201 status code', async () => {
    const response = await request(server)
      .post('/api/url')
      .send({
        originalUrl: 'https://silver-fishstick-w5wpw4p4v7q35q7j-3000.app.github.dev/api/create',
        shortCode: 'example',
      })

    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('originalUrl')
    expect(response.body).toHaveProperty('shortCode')
    expect(response.body).toHaveProperty('title')
  })
})
