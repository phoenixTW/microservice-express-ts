import request from 'supertest';
import app from '../../app';

describe('Health', () => {
    it('should respond with success', async () => {
        const { status, body } = await request(app).get('/api/health');
        expect(status).toEqual(200);
        expect(body).toEqual({ status: 'Service is up and running' });
    });
});
