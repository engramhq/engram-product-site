---
title: Core engram Concepts
heading: Core engram Concepts
description: 
---

### Anatomy of a Note

```
{
  localId: String,
  type: "note" | "task" | "task_completed" | "event",
  body: String,
  date: string,
  start: Date,
  createdAt: Date,
  updatedAt: Date
}
```

Above is the JSON schema of a note in engram.  I believe it is important to understand how the data is structured in order to know what is possible to achieve.  I have attempted to keep the data model as simple as possible. 

#### localId

The `localId` is a uuid (universally unique identifier) generated when a new note is created.

#### date

The `date` property is a YYYY-MM-DD formatted string that represents the day it corresponds to. This property allows for notes to be made on future or past dates.

#### body

The `body` is the contents of the note. engram supports [Markdown](https://guides.github.com/features/mastering-markdown/), which means that this simple text field enables all kinds og functionality.

#### type - Notes, Tasks, and Events

The basic building blocks of engram are notes, tasks, and events. Each one carries a slight distinction that carries additional information.  

A `note` can be anything.  This is the default type in engram. These might be random thoughts, links, or a structured brainstorm.

A `task` should have a tangible completion condition. Once completed, it can be transitioned to `task_completed` so it can be filtered out of tasks that are in flight.

An `event` is usually something that you do at a specific time.  These notes will have a `start` date associated with them.

#### createdAt

The `createdAt` property holds the Date that the note was created.

#### updatedAt

The `updatedAt` property holds the Date that the note was edited at.