const request = require('supertest');
const { app, server } = require('./app');

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('should return service info with status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe('logistics-pickup');
    expect(res.body.status).toBe('running');
    expect(res.body).toHaveProperty('environment');
    expect(res.body).toHaveProperty('version');
  });
});

describe('GET /health', () => {
  it('should return status ok with status 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.service).toBe('logistics-pickup');
  });
});

describe('GET /version', () => {
  it('should return version info with status 200', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('version');
    expect(res.body.service).toBe('logistics-pickup');
  });
});
