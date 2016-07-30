#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals


# Basic Settings

AUTHOR = u'Team Droste'
SITENAME = u'Droste'
SITEURL = ''

TIMEZONE = 'Asia/Hong_Kong'

DEFAULT_LANG = u'en'

USE_FOLDER_AS_CATEGORY = False
DEFAULT_CATEGORY = 'general'
# DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = False
DEFAULT_METADATA = {}

DELETE_OUTPUT_DIRECTORY = True

# JINJA_EXTENSIONS = []
# JINJA_FILTERS = {} # See http://jinja.pocoo.org/docs/dev/api/#custom-filters

# MD_EXTENSIONS = ['codehilite(css_class=highlight)','extra'] # See http://pythonhosted.org/Markdown/extensions/

# OUTPUT_PATH = 'output/'
PATH = 'content'
# PAGE_PATHS = ['pages']
# PAGE_EXCLUDES = []

# TEMPLATE_PAGES = None # See http://docs.getpelican.com/en/3.6.3/settings.html#template-pages
STATIC_PATHS = ['images', 'extra']
EXTRA_PATH_METADATA = {
    'extra/CNAME': {'path': 'CNAME'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

TYPOGRIFY = True
# TYPOGRIFY_IGNORE_TAGS = []

DIRECT_TEMPLATES = ['index', 'categories', 'archives']
# PAGINATED_DIRECT_TEMPLATES = ['index']
# EXTRA_TEMPLATES_PATHS = []

# SUMMARY_MAX_LENGTH = 50

# SLUGIFY_SOURCE = 'title'

# Url Settings

# ARTICLE_URL = '{slug}.html'
# ARTICLE_SAVE_AS = '{slug}.html'
# ARTICLE_LANG_URL = '{slug}-{lang}.html'
# ARTICLE_LANG_SAVE_AS = '{slug}-{lang}.html'
# DRAFT_URL = 'drafts/{slug}.html'
# DRAFT_SAVE_AS = 'drafts/{slug}.html'
# DRAFT_LANG_URL = 'drafts/{slug}-{lang}.html'
# DRAFT_LANG_SAVE_AS = 'drafts/{slug}-{lang}.html'
# PAGE_URL = 'pages/{slug}.html'
# PAGE_SAVE_AS = 'pages/{slug}.html'
# PAGE_LANG_URL = 'pages/{slug}-{lang}.html'
# PAGE_LANG_SAVE_AS = 'pages/{slug}-{lang}.html'
# CATEGORY_URL = 'category/{slug}.html'
# CATEGORY_SAVE_AS = 'category/{slug}.html'
# TAG_URL = 'tag/{slug}.html'
# TAG_SAVE_AS = 'tag/{slug}.html'
# AUTHOR_URL = 'author/{slug}.html'
AUTHOR_SAVE_AS = ''
# YEAR_ARCHIVE_SAVE_AS = '' 
# MONTH_ARCHIVE_SAVE_AS = '' 
# DAY_ARCHIVE_SAVE_AS = '' 
# SLUG_SUBSTITUTIONS = () Substitutions to make prior to stripping out non-alphanumerics when generating slugs. Specified as a list of 2-tuples of (from, to) which are applied in order.

# ARCHIVES_SAVE_AS = 'archives.html'
# YEAR_ARCHIVE_SAVE_AS = '' 
# MONTH_ARCHIVE_SAVE_AS = '' 
# DAY_ARCHIVE_SAVE_AS = '' 
# AUTHORS_SAVE_AS = 'authors.html'
# CATEGORIES_SAVE_AS = 'categories.html'
# TAGS_SAVE_AS = 'tags.html'
# INDEX_SAVE_AS = 'index.html'

# Themes

# THEME = 'themes/drostehk' # See http://docs.getpelican.com/en/3.6.3/themes.html
THEME_STATIC_DIR = 'theme'
THEME_STATIC_PATHS = ['static']
CSS_FILE = 'main.css'

# Feeds

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = True
DISPLAY_PAGES_ON_MENU = True

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# Plugins 

PLUGINS = ['ipynb.markup'] # See http://docs.getpelican.com/en/3.6.3/plugins.html#plugins
PLUGIN_PATHS = ['./plugins']

# Jupyter Plugin

MARKUP = ('md', 'ipynb')
IGNORE_FILES = ['.ipynb_checkpoints']