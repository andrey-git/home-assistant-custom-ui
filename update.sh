echo "Downloading new update.sh"
wget https://github.com/andrey-git/home-assistant-custom-ui/blob/master/update.sh?raw=true -q -O update.sh.tmp
rv=$?
if [ $rv != 0 ]; then
  rm update.sh.tmp
  echo "Download failed with error $rv"
  exit
fi

diff $0 update.sh.tmp &>/dev/null
if [ $? != 0 ]; then
  echo "Files different."
  mv update.sh.tmp $0
  chmod u+x $0
  echo "Restarting"
  $0
  exit $?
else
  echo "update.sh is up to date."
  rm update.sh.tmp
fi

if [ ! -d "www/custom_ui" ]; then
  echo "www/custom_ui dir not found."
  exit
fi

wget https://github.com/andrey-git/home-assistant-custom-ui/blob/master/state-card-custom-ui.html?raw=true -q -O www/custom_ui/state-card-custom-ui.html.tmp
if [ $? != 0 ]; then
  echo "Couldn't download state-card-custom-ui.html"
  rm www/custom_ui/state-card-custom-ui.html.tmp
  exit
else
  mv www/custom_ui/state-card-custom-ui.html.tmp www/custom_ui/state-card-custom-ui.html
fi

wget https://github.com/andrey-git/home-assistant-custom-ui/blob/master/state-card-custom-ui.html.gz?raw=true -q -O www/custom_ui/state-card-custom-ui.html.gz.tmp
if [ $? != 0 ]; then
  echo "Couldn't download state-card-custom-ui.html.gz"
  rm www/custom_ui/state-card-custom-ui.html.gz.tmp
  exit
else
  mv www/custom_ui/state-card-custom-ui.html.gz.tmp www/custom_ui/state-card-custom-ui.html.gz
fi

echo "Updated to Custom UI `grep -o -e "'[0-9][0-9]*'" www/custom_ui/state-card-custom-ui.html`"

if [ ! -d "panels" ]; then
  echo "panels dir not found."
  exit
fi

wget https://github.com/andrey-git/home-assistant-custom-ui/blob/master/ha-panel-custom-ui.html?raw=true -q -O panels/ha-panel-custom-ui.html.tmp
if [ $? != 0 ]; then
  echo "Couldn't download ha-panel-custom-ui.html"
  rm panels/ha-panel-custom-ui.html.tmp
  exit
else
  mv panels/ha-panel-custom-ui.html.tmp panels/ha-panel-custom-ui.html
fi

wget https://github.com/andrey-git/home-assistant-custom-ui/blob/master/ha-panel-custom-ui.html.gz?raw=true -q -O panels/ha-panel-custom-ui.html.gz.tmp
if [ $? != 0 ]; then
  echo "Couldn't download ha-panel-custom-ui.html.gz"
  rm panels/ha-panel-custom-ui.html.gz.tmp
  exit
else
  mv panels/ha-panel-custom-ui.html.gz.tmp panels/ha-panel-custom-ui.html.gz
fi

echo "Updated Panel to `grep -o -e "'[0-9][0-9]*'" panels/ha-panel-custom-ui.html`"
