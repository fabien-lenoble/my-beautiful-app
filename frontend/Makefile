dev:
	docker-compose run --rm --service-ports node npm run serve

install:
	docker-compose run --rm node npm install

postinstall:
	docker-compose run --rm node npm run postinstall

exec-node:
	docker-compose run --rm --entrypoint="/bin/sh" node