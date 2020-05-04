# copy local config to the current .env (which is used in nuxt.config.js)
cp ./env/.env.local ./.env

# allow local certificates (for https://wereldvrede.test)
export NODE_TLS_REJECT_UNAUTHORIZED=0 

# node env
export NODE_ENV=development 

# run the nuxt project on the following host
export HOST=0.0.0.0 

nuxt
