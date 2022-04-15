#!/bin/sh
export "NODE_ENV"="production";

sh ./scripts/clean.sh;

sh ./scripts/build/pre-build.sh;
webpack serve --config ./config/webpack/client/webpack.config.js;