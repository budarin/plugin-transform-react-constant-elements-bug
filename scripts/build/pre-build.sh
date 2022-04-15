#!/bin/sh

BASEDIR=$(dirname "$0");

echo ;
echo "start prebuilding ...";

yarn zx ./scripts/build/generateVersion.mjs
yarn zx ./scripts/build/build-global-styles.mjs

