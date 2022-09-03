install:
	npm install
.PHONY: install

start-electron: 
	npm run dev:electron
.PHONY: start-electron

build-electron: 
	npm run build:electron
.PHONY: build-electron

start-react: 
	npm run dev:react
.PHONY: start-react

build-react: 
	npm run build:react
.PHONY: build-react
