FROM continuumio/anaconda:4.1.1
MAINTAINER Bill McCord <bill@droste.hk>

RUN apt-get update && apt-get install -y curl make

RUN curl -sL https://deb.nodesource.com/setup_4.x | /bin/bash -

RUN apt-get install -y nodejs

RUN npm install --global gulp-cli

COPY ./ /var/www/drostehk

WORKDIR /var/www/drostehk

RUN conda env create -n drostehk -f environment.yml

EXPOSE 8000

ENTRYPOINT ["/bin/bash", "-c", "set -x && ./start_dev.sh"]
