# graphql-react-demo-crud

commands: 

cd react-graphql-demo
npm install
npm run start


cd nodejs-graphql-demo
npm install
npm run start:dev
docker run -d -e "MYSQL_ROOT_PASSWORD=Admin12345" -e "MYSQL_USER=usr" -e "MYSQL_PASSWORD=User12345" -e "MYSQL_DATABASE=development" -p 3306:3306 --name some-mysql bitnami/mysql:5.7.27
