# Pelican : Droste.hk

### Theme Development

From the project root

#### Build all files:

```bash
gulp build
```

##### To watch for changes

```
gulp watch
```

### Site Generation

From the project root

#### Generation for Development

```bash
pelican # generates the site into the `ourput` folder
# or
make html
```

#### Live Reload

```bash
pelican -r # tell Pelican to watch for your modifications
# or
make regenerate
```

#### Web Server with Live Reload

```bash
./develop_server.sh start # generate & run server
./develop_server.sh stop # stop backgrounded server
# or
make devserver
```

#### Publish to Github Pages

```bash
pelican content -s publishconf.py # generate for production
ghp-import -b master output
git push origin master
# or
make github
```


#### Config Options

* [Available Markdown Extensions](http://pythonhosted.org/Markdown/extensions/)