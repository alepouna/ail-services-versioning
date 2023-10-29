export default async function (request, reply) {

    return reply.send({
        name: 'cloudflare-dynip-worker',
        version: '1.1.0',
        release: '2021-10-18T20:55:00.000Z',
        branch: 'main',
        sha: 'fbd79c8c3ebe03e9dca9c5ceb065aef67f2018de',
        homepage: 'https://github.com/auroraisluna/cloudflare-dynip-updater/',
    });

};
