###### Запуск в docker:
`docker-compose build`

`docker-compose up`


###### Установка redis:
`apt install redis`

###### Установка venv:
`python3 -m venv venv`

`source venv/bin/activate`

###### Установка зависимостей:
`pip install -r requirements.txt`

`cd edtech_platform`

###### Миграция БД:
`python manage.py migrate`

###### Загрузка тестовых данных:
`python manage.py loaddata dump.json`

###### Запуск веб-сервера:
`python manage.py runserver`

###### Запуск rqworker:
`python manage.py rqworker`

###### Аутентификация, авторизация и система прав
Аутентификация и авторизация только по токену

`/auth-jwt/token/` - получение пары токенов. POST запрос с user/password

`/auth-jwt/token/refresh/` - обновление access-токена. POST запрос с refresh-токеном

###### Система прав: 
Всё API могут просматривать только аутентифицированные пользователи, неаутентифицированные не видят ничего, даже api root.
Редактировать, удалять, добавлять может только админ-пользователь.

###### GraphQL:

`/graphql` - адрес с GraphQL

Запрос к `/graphql`:
```graphql
{
  allUsers {
  id,
  username
}
allTeachers {
  id,
  bio,
  user {
    id
  }
}
allStudents {
  id,
  user {
    id
  }
}
allCourses {
  id,
  title,
  description,
  students {
    id,
    user {
      id,
      username
    }
  },
  teachers {
    id,
    user {
      id,
      username
    }
  }
}
}
```
Запрос к `/graphql` c reverse relation:
```graphql 
{
  allTeachers {
    id,
    user {
      username
    }
    courses {
      id,
      title
    }
  } 
}
```

###### Оптимизация:
[Отчет по оптимизации](https://docs.google.com/spreadsheets/d/1jUT0T2rmiO9Sc0PVIR0JKyjeqagjxrwECPhk_57q-po/edit?usp=sharing)
