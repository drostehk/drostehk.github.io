# Droste HQ

The Droste site is based on [Pelican](https://blog.getpelican.com/), a Static Site Generator, Powered by Python.

## Contents

* [Installation](#installation)
* [Quickstart](#quickstart)
* [Project Structure](#project-structure)
* [Contribution](#contribution)
    - [Development](#development)
    - [Design](#design)
    - [Content](#content)
* [Tasks](#tasks)
* [Configuration Options](#tasks)

## Installation

### Option 1 : Native

#### Source Code

Clone repo & submodules from Github

```
git clone git@github.com:drostehk/drostehk.github.io.git
cd drostehk.github.io
git submodule update --init --recursive
```

#### Python Dependencies

Use python > 3.5 with its built-in virtual environment support

```
python3 -m venv drostehk-env
source drostehk-env/bin/activate
pip install -U pip
pip install -r requirements.txt
```

#### JavaScript Dependencies

We make use of `package.json` to manage our JS depenencies

```
npm install
```

### Option 2 : Docker

Install [Docker native](http://www.docker.com/products/overview), or on Fedora install docker-compose:

```
sudo dnf install docker-compose
```

To setup the docker container, run the following commands:

```
git clone git@github.com:drostehk/drostehk.github.io.git
cd drostehk.github.io
git submodule update --init --recursive
sudo docker-compose up
```

After it finishes, open a browser at [localhost:8000](http://localhost:8000)

## Quickstart

### Option 1 : Native

Development is done on the `src` branch.

The dev server watches for changes, builds the static site, and serves up the site on [localhost:8000](localhost:8000). From the project root run

```bash
source drostehk-env/bin/activate
make devserver
```

Semantic UI has a seperate build system. Gulp provides live reload. From the project root run

```bash
gulp watch
```

### Option 2 : Docker

```
sudo docker-compose up
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

## Contribution

### Development 

Site development is done following the conventions for `Pelican` [themes](http://docs.getpelican.com/en/3.7.1/themes.html) which uses [Jinja](http://jinja.pocoo.org/docs/dev/) for its templates.

The Jinja templates are located at `themes/drostehk/templates`. Inspect the following three Jinja templates to get an idea of the site structure:

```bash
themes/drostehk/templates/base.html # All pages should extend the base template
themes/drostehk/templates/index.html # The landing page
themes/drostehk/templates/blog.html # An example of a `list` view
```

#### Pelican and Markdown Extensions

* [Available Markdown Extensions](http://pythonhosted.org/Markdown/extensions/)
* [Available Pelican Plugins](https://github.com/getpelican/pelican-plugins#pelican-plugins)

#### Adding a Python Dependency

```
pip install <PACKAGE>
pip freeze > requirements.txt
```

### Design

Theme development is done in line with `SemanticUI` [best practices](http://semantic-ui.com/usage/theming.html).

You can learn about SemanticUI through [Learn Semantic](http://learnsemantic.com/)

Source files for the theme are in `src` from which the pelican theme is generated into `themes/drostehk/static/`.

The two LESS stylesheets you will most commonly edit are:

```bash
src/site/globals/site.variables # Change SemanticUI Defaults
src/site/globals/site.overrides # Additional Styles
```

**Never make changes in `themes/drostehk/static/` directly**

### Content

Content can be marked up in Markdown or as Jupyter Notebooks:

* **Markdown** posts should be added to `content/`.
* **Notebook** posts should be added to `content/notbooks/` with a Markdown posts referencing them.

Content can be extended through [Liquid Tags](https://github.com/getpelican/pelican-plugins/tree/master/liquid_tags#liquid-style-tags).


## Tasks

From the project root

#### Publish to Github Pages

```bash
pelican content -s publishconf.py # generate for production
ghp-import -b master output
git push origin master
# or
make github
```

##### Build all Semantic UI files in the `src` directory:

```bash
gulp build
```

##### To watch for changes in the `src` directory

```bash
gulp watch
```

##### Static Site Generation

```bash
pelican # generates the site into the `ourput` folder
# or
make html
```

#### Pelican Live Reload

```bash
pelican -r # tell Pelican to watch for your modifications
# or
make regenerate
```

#### Web Server with Pelican Live Reload

```bash
./develop_server.sh start # generate & run server
./develop_server.sh stop # stop backgrounded server
# or
make devserver
```


## Extra

## LiveReload

Optionally, you can use LiveReload to speed up your development experience. From the project root run

```bash
livereload output -w WAIT
```

and activate the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) extension in Google Chrome.