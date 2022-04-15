#!/bin/sh
export "NODE_ENV"="production";
export "PLUGIN"="true";

sh ./scripts/clean.sh;

sh ./scripts/build/pre-build.sh;
webpack serve --config ./config/webpack/client/webpack.config.js;