#!/bin/sh

yarn audit --level high --prod; [[ $? -ge 16 ]] && exit 1 || exit 0;
