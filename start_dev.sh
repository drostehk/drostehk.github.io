#! /bin/bash
source drostehk-env/bin/activate
npm install
gulp build
make html
make devserver
gulp watch
