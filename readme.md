# Pelican : Droste.hk

### Site Generation

From the project root

```bash
pelican # generates the site into the `ourput` folder
# or
make html
```

```bash
pelican -r # tell Pelican to watch for your modifications
# or
make regenerate
```

```bash
pelican content -s publishconf.py # generate for production
# or
make publish
```

```bash
./develop_server.sh start # generate & run server
./develop_server.sh stop # stop backgrounded server
# or
make devserver
```

#### Config Options

* [Available Markdown Extensions](http://pythonhosted.org/Markdown/extensions/)