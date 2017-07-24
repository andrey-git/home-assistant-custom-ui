#!/bin/bash 

function get_file {
  DOWNLOAD_PATH=${2}?raw=true
  SAVE_PATH=${3}
  TMP_NAME=${1}.tmp
  echo "Getting $1"
  wget $DOWNLOAD_PATH -q -O $TMP_NAME
  rv=$?
  if [ $rv != 0 ]; then
    rm $TMP_NAME
    echo "Download failed with error $rv"
    exit
  fi
  diff ${SAVE_PATH}$1 $TMP_NAME &>/dev/null
  if [ $? == 0 ]; then
    echo "File up to date."
    rm $TMP_NAME
    return 0
  else
    mv $TMP_NAME ${SAVE_PATH}$1
    if [ $1 == $0 ]; then
      chmod u+x $0
      echo "Restarting"
      $0
      exit $?
    else
      return 1
    fi
  fi
}

function get_file_and_gz {
  get_file $1 $2 $3
  r1=$?
  get_file ${1}.gz ${2}.gz $3
  r2=$?
  if (( $r1 != 0 || $r2 != 0 )); then
    return 1
  fi
  return 0
}

get_file $0 https://github.com/andrey-git/home-assistant-custom-ui/blob/master/update.sh .



if [ ! -d "www/custom_ui" ]; then
  echo "www/custom_ui dir not found."
  exit
fi

get_file_and_gz state-card-custom-ui.html https://github.com/andrey-git/home-assistant-custom-ui/blob/master/state-card-custom-ui.html www/custom_ui/

if [ $? != 0 ]; then
  echo "Updated to Custom UI `grep -o -e "'[0-9][0-9]*'" www/custom_ui/state-card-custom-ui.html`"
fi




if [ ! -d "panels" ]; then
  echo "panels dir not found."
  exit
fi

get_file_and_gz panels/ha-panel-custom-ui.html https://github.com/andrey-git/home-assistant-custom-ui/blob/master/ha-panel-custom-ui.html panels/

if [ $? != 0 ]; then
  echo "Updated Panel to `grep -o -e "'[0-9][0-9]*'" panels/ha-panel-custom-ui.html`"
fi

