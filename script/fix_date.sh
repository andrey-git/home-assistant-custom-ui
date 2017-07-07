#!/bin/bash
sed -i -r "s/(Using CustomUI )[^']+/\1`date +%Y%m%d`/" src/state-card-custom-ui.html
