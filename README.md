### Hexlet tests and linter status:
[![Actions Status](https://github.com/Artoym1234/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Artoym1234/frontend-project-46/actions)
[![project](https://github.com/Artoym1234/frontend-project-46/actions/workflows/project.yml/badge.svg)](https://github.com/Artoym1234/frontend-project-46/actions/workflows/project.yml)
<a href="https://codeclimate.com/github/Artoym1234/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/879cd59e98497d8d745e/maintainability" /></a>
<a href="https://codeclimate.com/github/Artoym1234/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/879cd59e98497d8d745e/test_coverage" /></a>

### Описание
Вычислитель отличий - CLI программа, которая показывает различия между двумя файлами.
Поддерживаемые форматы файлов: JSON, YAML, YML.

### Минимальные системные требования:
Node.js 13.2.0

### Установка
* Клонировать репозиторий: `https://github.com/Artoym1234/frontend-project-46.git`
```
git clone
```
* Установить 
```
make install
```
```
sudo npm link
```

### Запуск тестов
```
make test
```
### Как использовать использовать
Можно выводить изменения в трёх форматах: stylish (default), plain и json.
```
gendiff [options] <filepath1> <filepath2>
```
### Демонстрация 
пример для файлов JSON:
[![asciicast](https://asciinema.org/a/sYOlHoelItsfHk314iXyqvD4I.svg)](https://asciinema.org/a/sYOlHoelItsfHk314iXyqvD4I)
пример для файлов YAML:
[![asciicast](https://asciinema.org/a/CpDvBOl2HLzt7qjOpkg5nAc67.svg)](https://asciinema.org/a/CpDvBOl2HLzt7qjOpkg5nAc67)
пример для файлов c вложенной структурой:
[![asciicast](https://asciinema.org/a/qe7Hr382C0SGsl1nXxZy4TbOg.svg)](https://asciinema.org/a/qe7Hr382C0SGsl1nXxZy4TbOg)
пример вывода плоского формата:
[![asciicast](https://asciinema.org/a/rBmM2RAiWiL71esVeDLem88U6.svg)](https://asciinema.org/a/rBmM2RAiWiL71esVeDLem88U6)
пример вывода в JSON формате:
[![asciicast](https://asciinema.org/a/7luVU9P2lkOcHA3fYBdLplPoN.svg)](https://asciinema.org/a/7luVU9P2lkOcHA3fYBdLplPoN)

