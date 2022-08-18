const full05Handler = require('./handlers/product');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/full05',
        handler: full05Handler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/full05/{id}',
        handler: full05Handler.find
    },
    {
        method: 'POST',
        path: '/api/v1/full05',
        handler: full05Handler.save
    },
    {
        method: 'DELETE',
        path: '/api/v1/full05/{id}',
        handler: full05Handler.remove,
        options: {
          cors: true
        }
    }
]