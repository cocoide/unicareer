.PHONY: dev build stop down up curl image nextjs

dev:
	docker-compose up -d db
	docker-compose up dev
deploy:
	docker-compose up -d db
	docker-compose up --build -d app 
stop:
	docker-compose stop
up:
	docker-compose up
down:
	docker-compose down --rmi all
golang:
	docker-compose exec go /bin/sh
mysql:
	docker-compose exec db /bin/sh -c 'mysql -u root -p'
nextjs:
	cd frontend && yarn run dev