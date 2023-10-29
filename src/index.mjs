import Fastify from 'fastify';
import { loadRoutes } from 'fastifyrouter.js';

const fastify = Fastify({
    trustProxy: true,
    trailingSlash: true
});

await loadRoutes(fastify, { dir: './src/routes', log: false, method: 'GET', prefix: '/' });

fastify.listen({port: 8080, host: '0.0.0.0'}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address} || http://localhost:8080`);
});