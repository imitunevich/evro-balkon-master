run script: etc/init/evrobalkon-master.conf

initctl list - list all process



` start on filesystem and started networking`
` respawn`
` chdir /home/evro-balkon-master`
` exec nodejs node-index.js`
