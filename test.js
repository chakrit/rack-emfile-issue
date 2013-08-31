
var express = require('express')
  , path = require('path')
  , rack = require('asset-rack')
  , app = express();

app.use(new rack.Rack(
  [ new rack.StaticAssets(
    { urlPrefix: '/'
    , dirname: path.resolve(__dirname, 'public')
    })
  ]
));

