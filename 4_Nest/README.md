### NEST ###

1. Poskładamy teraz wszystko w całość
2. Przetestuj działanie apollo server na podanym przykładzie
3. Wyedytuj plik `/src/ormconfig.ts` aby dodać swoje połączenie do bazy danych
4. Wygeneruj nowe entity zgodnie ze schematem – możesz to zrobić przy pomocy komendy `nest g resource nazwa_zasobu`
```
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },```

  ```
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },```
  5. Skonfiguruj server apollo z podejściem code-first osobno dla obu przypadków
  6. Połącz obie encje relacją - dopasuj ustawienia apollo