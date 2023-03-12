import { dev } from '$app/environment'

export const apiRouter = dev? 'http://localhost:3001' : 'api.modularlab.com';