FROM microsoft/aspnet:1.0.0-rc1-update1

RUN printf "deb http://ftp.us.debian.org/debian jessie main\n" >> /etc/apt/sources.list
RUN apt-get -qq update && apt-get install -qqy sqlite3 libsqlite3-dev && rm -rf /var/lib/apt/lists/*
RUN apt-get -qqy nodejs npm
RUN npm install -g grunt
RUN npm install -g bower

COPY . /app
WORKDIR /app
RUN ["dnu", "restore"]
RUN ["npm", "install"]
RUN ["bower", "install"]
RUN ["grunt", "dev"]

EXPOSE 5000/tcp
ENTRYPOINT ["dnx", "-p", "project.json", "web"]
