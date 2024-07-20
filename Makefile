setup:
	@make build
	@make up 
	@make composer-update
build:
	docker-compose build --no-cache --force-rm
stop:
	docker-compose stop
up:
	docker-compose up -d
composer-update:
	docker exec crm_app bash -c "composer update"
data:
	docker exec crm_app bash -c "php artisan migrate:fresh"
