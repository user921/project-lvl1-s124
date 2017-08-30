install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

startEven:
	npm run babel-node -- src/bin/games/brain-even.js

startCalc:
	npm run babel-node -- src/bin/games/brain-calc.js

publish:
	npm publish

lint:
	npm run eslint ./src/
