#! /bin/bash
source activate drostehk
npm install --global gulp-cli
npm install semantic-ui --save
gulp build
make html
