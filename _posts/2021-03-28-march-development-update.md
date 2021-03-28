---
layout: post
title:  "March 2021 Development Update"
author_staff_member: adam
---

Spring has sprung and engram is almost ready to spring in to beta.  Work is in progress on core pieces of functionality: offline mode, pages, and hierarchical note taking.  Once completed, engram will enter a beta period to gather feedback.

## Offline

Lately I've been interested in seeing what "progressive web apps" (PWAs) enable for browser applications. I strongly believe in an offline first approach - in almost any variety of application.  [Building Progressive Web Apps](https://www.oreilly.com/library/view/building-progressive-web/9781491961643/) by Tal Ater further inspired me to ensure that engram is built with offline in mind from the start.

### Use Without an Account

![Use Offline Without Account](/images/use-offline.png)

My favorite thing this enables is a completely offline version of the application.  Notes can be only stored on your local device and there is no need to create an account.  I plan to keep the offline version free so long as it continues to not require server resources.

## Pages

![Beta Pages](/images/beta-pages.png)

It's already possible to click in to a specific note and add sub notes beneath it.  I frequently use this on a day to day basis to put some light organization to daily notes and to help myself concentrate on the currently selected topic.  Pages wil`l take this concept a few step further. 

### Escape From Daily Notes

The current dashboard places a heavy emphasis on daily notes.  When you wake up and access the app, it will either be empty or include what you have pre-scheduled for yourself.  I find this helps start the day with a fresh plate.  Pages, on the other hand, will be more useful for ideas and projects that span several days, weeks, or months.  

## Hierarchical Note Taking

We're all familiar with bullet lists or numbered lists.  As one takes notes, it's helpful to see how notes relate to others.  This is one area where handwritten notes falls short.  If I have unrelated thoughts running in parallel, capturing them leaves me with out of order notes.  I would then need to re-write in order to properly visualize the relationships between ideas.

As I slowly take more and more notes, I "note"-iced that the hierarchy of information is as important or possibly more important than the styling of the information.  With a properly structured hierarchy you could then export to a variety of different formats all based on the same underlying data.

Take this article as an example.  There is a title, headings, sub-headings and paragraphs.  I'm currently using markdown to write this, which means that I use "##" or "###" to denote what level of heading something is.  With hierarchical note taking this would instead look more like:

![Hierarchical Notes](/images/hierarchical-notes.png)

This structure should enable future functionality where a page in engram can be directly exported to your preferred output format.  In this case could be markdown or on a larger scale you could export an entire Jekyll website including your selected notes.

## Re-arranging of Notes

As I mentioned above, the biggest benefit of taking notes digitally is the ease with which you can modify and re-organize them.  For now, engram will support reorganization via dragging and dropping of notes.  You will be able to reorder notes, send notes to different days, and categorize them.  

Conceptually this is a simple idea.  However, getting the user experience of this working well is a challenge.  This will be initially released in the simplest form as possible and slowly improved from there.

## Conclusion

This month has been focused on the fundamental building blocks of engram.  It is important to me to understand these and getting them working as expected, as everything from here builds on top of them.  

### Beta

In its current form, engram is useful in some very specific ways, but it falls short in a few key areas.  The set of updates above addresses many of these concerns and brings the app significantly closer to being useful for a wider audience.  The next post from me should be a formal beta announcement, stay tuned in the next few weeks.