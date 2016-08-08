# Pelican : Droste.hk

## Installation

### Clone Repo & Submodules from Github
```
git clone git@github.com:drostehk/drostehk.github.io.git
cd drostehk.github.io && git checkout src
git submodule update --init --recursive
```

### Install python dependencies
```
conda env create -n drostehk -f environment.yml
source activate drostehk
```
**NOTE** : You should always run `source activate drostehk` when running the pelican project locally as it activated the conda environment with all the python dependencies in it.

### Install JS dependencies
```
npm install semantic-ui --save
```

## Project Structure

```bash
drostehk.github.io
|-- content # Markdown posts for the blog
|   |-- extra # Misc files - explicitly mapped to output in pelicanconf.py
|   `-- notebooks # Jupyter notebooks
|-- develop_server.sh
|-- environment.yml # Conda Environement with Python Dependencies
|-- gulpfile.js # Gulp Tasks
|-- Makefile # Make Tasks
|-- node_modules # Node Dependencies - don't edit
|-- pelicanconf.py # Main config
|-- plugins # Submodules - don't edit
|-- publishconf.py # Config file with additional settings for production
|-- readme.md # You are here
|-- semantic.json # Config file for Semantic UI
|-- src # CSS Styles
|   |-- definitions # SemanticUI defaults - ignore
|   |-- semantic.less # ignore
|   |-- site
|   |   |-- collections # A heterogeneous group of several elements which can usually be found together.
|   |   |-- elements # A basic building block of a website
|   |   |-- globals # Styles that are applied across the site.
|   |   |   |-- reset.overrides # ignore
|   |   |   |-- reset.variables # ignore
|   |   |   |-- site.overrides # additional CSS rules to be added to a definition for a theme.
|   |   |   `-- site.variables #  theme-wide defaults that each component can extend.
|   |   |-- modules # An element where its behavior is an essential part of its definition
|   |   `-- views # A way to present common website content like comments, activity feeds
|   |-- theme.config # Theme Selection - ignore
|   |-- theme.less # Import Directives - mostly ignore
|   `-- themes # available themes - ignore
|-- tasks
|   |-- admin
|   |-- build
|   |-- build.js
|   |-- check-install.js
|   |-- clean.js
|   |-- collections
|   |-- config
|   |-- docs
|   |-- install.js
|   |-- README.md
|   |-- rtl
|   |-- version.js
|   `-- watch.js
`-- themes
    `-- drostehk
```


### Config Files

So based on the project structure, the config is managed by :

* `pelicanconf.py`
* `publishconf.py`
* `semantic.json`


## Theme Development

Theme development is done in line with `SemanticUI` [best practices](http://semantic-ui.com/usage/theming.html).

You can learn about SemanticUI through [Learn Semantic](http://learnsemantic.com/)

Source files for the theme are in `src` from which the pelican theme is generated into `themes/drostehk/static/`.

The two LESS stylesheets you will most commonly edit are:

```bash
src/site/globals/site.variables # Change SemanticUI Defaults
src/site/globals/site.overrides # Additional Styles
```

**Never make changes in `themes/drostehk/static/` directly**

### Tasks

From the project root

#### Build all Semantic UI files in the `src` directory:

```bash
gulp build
```

##### To watch for changes in the `src` directory

```bash
gulp watch
```

## Site Development

Site development isdone following the conventions for `Pelican` [themes](http://docs.getpelican.com/en/3.6.3/themes.html) which uses [Jinja](http://jinja.pocoo.org/docs/dev/) for its templates.

The Jinja templates are located at `themes/drostehk/templates`. Inspect the following three Jinja templates to get an idea of the site structure:

```bash
themes/drostehk/templates/base.html # All pages should extend the base template
themes/drostehk/templates/index.html # The landing page
themes/drostehk/templates/blog.html # An example of a `list` view
```

### Tasks

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


## Content Development

Content can be marked up in Markdown or as Jupyter Notebooks:

* **Markdown** posts should be added to `content/`.
* **Notebook** posts should be added to `content/notbooks/` with a Markdown posts referencing them.

Content can be extended through [Liquid Tags](https://github.com/getpelican/pelican-plugins/tree/master/liquid_tags#liquid-style-tags).


#### Config Options

* [Available Markdown Extensions](http://pythonhosted.org/Markdown/extensions/)
* [Available Pelican Plugins](https://github.com/getpelican/pelican-plugins#pelican-plugins)


## Alternative install / setup / run option.

1. [Install Docker native](http://www.docker.com/products/overview)
2. Run docker-compose up
3. After it finishes, [connect](http://localhost:8000)
