#! /bin/bash
pip install -U -r requirements.txt
npm install
gulp build
make html
make devserver
gulp watch