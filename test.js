
var path = require('path')
  , rack = require('asset-rack');

new rack.Rack(
  [ new rack.StaticAssets(
    { urlPrefix: '/'
    , dirname: path.resolve(__dirname, 'public')
    })
  ]
);

