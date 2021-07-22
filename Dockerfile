# 1. alpine-node 이미지 사용
FROM   mhart/alpine-node

# 2. 패키지 우선 복사
COPY    ./src/package* /usr/src/app/
WORKDIR /usr/src/app
RUN     npm install

# 3. 소스 복사
COPY ./src /usr/src/app

# 4. WEB 서버 실행 (Listen 포트 정의)
EXPOSE 3000

CMD    node app.js