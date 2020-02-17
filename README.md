# Digital Collection Homepage
https://github.com/utkdigitalinitiatives/utk_lib_digital_front

## Introduction
The  homepage of Digital Collections at [digital.lib.utk.edu](digital.lib.utk.edu) is a lightweight ReactJS app the renders all available collections. As with most JavaScript based applications, the site runs entirely in the browser, connecting to sourced APIs to deliver data to the DOM.

### API
A multi step process exists to bring the data from to the homepage. A middleware application exists to transcribe the data and elevate to a publicly available endpoint.

1. A cron on lib.utk.edu runs a Solr query of `https://porter.lib.utk.edu/solr/collection1/select?q=...` is run every 5 minutes to update the data store.
2. On every pageload of `digital.lib.utk.edu`, the ReactJS app pulls the stored data from the WP-JSON REST API at https://www.lib.utk.edu/wp-json/dc/all.

### Special Notes
- The development directory is `./src/` and and development must be completed here. Manipulation of compiled files in `./dist` directory should not be done.
- A NoJS fallback exists for users who either are using a browser that doesn't support JavaScript or have made the decision to disable JS. The fallback is a meta redirect. Note that this fallback is only for this accessibility driven purpose.

## Requirements

Make sure all dependencies have been installed before moving on:

- [Node.js](https://nodejs.org/en/download/) or as a [binary](https://nodejs.org/en/download/)
- [Yarn](https://www.npmjs.com/package/yarn)

## Getting Started

### Local Development & Debugging
```
cd {local_working_directory}
git clone git@github.com:utkdigitalinitiatives/utk_lib_digital_front.git
yarn
yarn start
```

### Fresh Installation
```
yarn
yarn build
```

### Deployment Process
```
ssh user@digital.lib.utk.edu
cd /vhosts/digital/web
git pull origin master
yarn build
```
