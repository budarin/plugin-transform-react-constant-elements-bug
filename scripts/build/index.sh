#!/bin/sh

export "NODE_ENV"="production";

rm -rf ./dist;
rm -rf .tmp;
mkdir .tmp

sh ./scripts/build/pre-build.sh;

echo;
echo 'start building...';
yarn webpack-cli --config ./config/webpack/webpack.config.js;
node ./scripts/build/postbuild-script/waitForBuildingClient.js;
node ./scripts/build/postbuild-script/index.js;
