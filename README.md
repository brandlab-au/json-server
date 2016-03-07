# json-server
## This is basicly the same as the confusionApp - working
##### Now trying to conect with data on http://localhost:3000/dishes

- [ ] data dishes    
- [ ] bd.json
- [ ] baseURL = localhost above
- [ ] http.get

## Set up local server with json
- npm install json-server -g
- 
## Then conect views with data 
- baseURL in services.js line 6 
- line 21 dishes not returning db.json
- line 11 15 MenuController using http
- line 76 DishDetailController using http
- line 108 12  IndexController using http
- uses $http baseURL= http://localhost:3000/
- json-server --watch db.json


