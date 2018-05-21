#!/bin/bash
sed -i -r "s/(export default ')[^']+/\1`date +%Y%m%d`/" src/utils/version.js
