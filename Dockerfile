# 빌드용 베이스 이미지
FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 배포용 nginx 이미지
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80