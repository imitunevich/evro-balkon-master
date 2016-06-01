` run script: etc/init/evrobalkon-master.conf`

# evrobalkon-master.conf
``` 
 start on filesystem and started networking`
 respawn`
 chdir /home/evro-balkon-master`
 exec nodejs node-index.js`
```

# comands
```
 initctl list - list all process
```
