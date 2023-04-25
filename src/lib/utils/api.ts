import { dev } from '$app/environment';

export const apiRouter = dev
	? 'http://localhost:8080'
	: 'api.modularlab.net';
