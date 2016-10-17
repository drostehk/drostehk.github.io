#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from pelican.readers import HTMLReader

# Basic Settings

AUTHOR = u'Team Droste'
SITENAME = u'Droste'
SITEURL = ''

TIMEZONE = 'Asia/Hong_Kong'

DEFAULT_LANG = u'en'

USE_FOLDER_AS_CATEGORY = False
DEFAULT_CATEGORY = 'general'
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
# DEFAULT_METADATA = {}

DELETE_OUTPUT_DIRECTORY = True

# JINJA_EXTENSIONS = []
# JINJA_FILTERS = {} # See http://jinja.pocoo.org/docs/dev/api/#custom-filters

# MD_EXTENSIONS = ['codehilite(css_class=highlight)','extra'] # See http://pythonhosted.org/Markdown/extensions/

PATH = 'content'
# PAGE_PATHS = ['pages']
OUTPUT_PATH = 'output/'

READERS = {"html": HTMLReader}

# TEMPLATE_PAGES = None # See http://docs.getpelican.com/en/3.6.3/settings.html#template-pages
# TEMPLATE_PAGES = {
#     'themes/drostehk/templates/playground.html': 'themes/drostehk/templates/playground.html',
#     'themes/drostehk/templates/about.html': 'themes/drostehk/templates/about.html'
# }
STATIC_PATHS = ['extra/CNAME', 'extra/favicon.ico','img','fonts']
EXTRA_PATH_METADATA = {
    'extra/CNAME': {'path': 'CNAME'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
    'img': {'path': 'img'},
    'fonts': {'path': 'static/fonts'}
}

TYPOGRIFY = False
# TYPOGRIFY_IGNORE_TAGS = []

# DIRECT_TEMPLATES = ['index', 'categories', 'archives']
# PAGINATED_DIRECT_TEMPLATES = ['index']
EXTRA_TEMPLATES_PATHS = ['templates']

# SUMMARY_MAX_LENGTH = 50

# SLUGIFY_SOURCE = 'title'

# Url Settings

ARTICLE_URL = 'posts/{slug}.html'
ARTICLE_SAVE_AS = 'posts/{slug}.html'
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
CATEGORY_SAVE_AS = ''
# TAG_URL = 'tag/{slug}.html'
TAG_SAVE_AS = ''
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
AUTHORS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''
# INDEX_SAVE_AS = 'index.html'

# Feeds

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Themes

THEME = 'themes/drostehk' # See http://docs.getpelican.com/en/3.6.3/themes.html
THEME_STATIC_DIR = 'static'
THEME_STATIC_PATHS = ['static']

# DROSTEHK THEME SETTINGS

# Add 'We're Hiring'
MENUITEMS = [
    ('Services', '/pages/services.html'),
    ('Case Studies', '/pages/casestudies.html'),
    ('Playground', '/pages/playground.html'),
    ('About Us', '/pages/about.html')
]

CSS_FILE = 'semantic.min.css'
JS_FILE = 'semantic.min.js'

# Plugins 

PLUGIN_PATHS = ['./plugins']

PLUGINS = ['liquid_tags.img', 'liquid_tags.video',
           'liquid_tags.youtube', 'liquid_tags.vimeo',
           'liquid_tags.include_code', 'liquid_tags.notebook','representative_image']

## Liquid-style Tags

NOTEBOOK_DIR = 'notebooks'
# EXTRA_HEADER = open('_nb_header.html').read().decode('utf-8')


