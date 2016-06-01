# evro-balkon-master

run script: etc/init/evrobalkon-master.conf

initctl list - list all process


-------evrobalkon-master.conf-------
start on filesystem and started networking
respawn
chdir /home/evro-balkon-master
exec nodejs node-index.js
------------------------------------
