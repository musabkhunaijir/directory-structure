# db schema
```
    CREATE DATABASE `directories-db` CHARACTER SET utf8 COLLATE utf8_general_ci;
    CREATE USER `root`@`localhost` IDENTIFIED BY '';
    GRANT ALL PRIVILEGES ON `directories`.* TO `root`@`localhost` IDENTIFIED BY '';
    FLUSH PRIVILEGES;
```

# to setup the db:
````
    npm run setup
````