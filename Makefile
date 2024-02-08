setup:
	@make build
	@make up 
	@make composer-update
build:
	docker compose build 
stop:
	docker compose stop
up:
	docker compose up -d

composer-update:
	docker exec taic_app bash -c "composer update"
	docker exec taic_app bash -c "cp .env.example .env"
	docker exec taic_app bash -c "php artisan key:generate"
	
optimize:
	docker exec taic_app bash -c "php artisan optimize:fresh"
data:
	docker exec taic_app bash -c "php artisan migrate:fresh --seed"

bash:
	docker exec -it taic_app bash

fresh:
	docker compose restart
rmi:
	docker image rm -f taic_app-taic_app
logs: 
	docker logs -f taic_app

# backup_db: 
	# docker exec mysql_db bash -c "./home/backups/backup_script.sh"
