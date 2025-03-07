# Используем официальный образ Node.js на основе Alpine Linux
FROM node:latest AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Используем официальный образ Node.js на основе Alpine Linux для production
FROM node:latest AS production

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем только необходимые файлы из стадии builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Указываем порт, который будет использовать приложение
ENV PORT 3000

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]