---
DateStarted: 2023-09-06
DateModified: 2023-09-12
---

```dataview
Table WITHOUT ID LCID as ID, file.link AS Title, Difficulty, Time, Space, Like, Solution 
FROM "/" WHERE contains(Type,"A")
sort DateDone desc
```

