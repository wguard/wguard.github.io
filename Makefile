
push: build push_web
	git add .
	git commit -m "push"
	git push origin master
.PHONY: push

setup:
	npm i

build:
	rm -rf public
	rm -rf /tmp/public
	npm run build
.PHONY: build

push_web:
	cd /tmp/public && \
	rm -rf /tmp/public/.git && \
	git init && \
	git checkout -b master && \
	git remote add origin git@github.com:wushengly/wushengly.github.io.git && \
	git add -A && \
	git commit -m 'push' && \
	git push -f git@github.com:wushengly/wushengly.github.io.git master
.PHONY: push_web	



