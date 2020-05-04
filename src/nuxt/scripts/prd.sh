# copy production config to the current .env (which is used in nuxt.config.js)
cp ./env/.env.prd ./.env

# node env
export NODE_ENV=production 

nuxt-ts build

rm -rf dist
mkdir dist
cp -r .nuxt dist/.nuxt
cp -r static dist/static
cp package.json dist/package.json

echo 'all that is left is running "npm i --production" in the dist folder'
echo 'than running "./node_modules/.bin/nuxt-ts start"'
