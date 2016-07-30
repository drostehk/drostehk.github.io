# Pelican : Droste.hk

### Installation

```
git clone git@github.com:drostehk/drostehk.github.io.git # Clone repository
cd drostehk.github.io && git checkout src # Checkout development branch
conda env create -n drostehk -f environment.yml # Install python dependencies
npm install semantic-ui --save # Install JS dependencies
```

### Theme Development

Theme development is done in line with `SemanticUI` [best practices](http://semantic-ui.com/usage/theming.html).

Source files for the theme are in `src` which build the pelican theme which is generated in `themes/drostehk`.

**Never make changes in `themes/drostehk` directly**

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