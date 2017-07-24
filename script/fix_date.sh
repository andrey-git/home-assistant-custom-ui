#!/bin/bash
sed -i -r "s/(VERSION: ')[^']+/\1`date +%Y%m%d`/" src/hooks.js
