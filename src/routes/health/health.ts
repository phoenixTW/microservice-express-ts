import { RequestHandler } from 'express';

export const health: RequestHandler = (_, res) =>
    res.json({ status: 'Service is up and running' });
