#! /bin/bash
source activate drostehk
npm install semantic-ui --save
gulp build
make html
make devserver
gulp watch
