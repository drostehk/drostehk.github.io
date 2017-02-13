#! /bin/bash
source activate drostehk
npm install
gulp build
make html
make devserver
gulp watch
