---
layout: post
title:  "engram Long Term Vision"
author_staff_member: adam
---

It's been about 3 months since I last posted an update.  I have taken it a bit easy on developing new functionality as I try to determine what the end goal or product is for engram.  This update will force me to put some of these thoughts into words.  Some aspects have become more clear to me and others are still just vague ideas.  I'll organize this so that the presented topics are sorted by how refined the idea is.  

## engram Journal and Planner

The "Journal and Planner" component of engram is pretty much the only component publically available.  This is the app you see on https://engram.xyzdigital.com or on the Android/iOS app stores.  I recently wrote about [giving up my smart phone](https://devtails.xyz/breaking-up-with-apple) and immediately the first app I truly missed was this one.  I often found myself somewhere wanting to jot some quick notes for myself and pretty much completely unable to. 

I am in the process of figuring out what improvements to make to this app.  One thing that has become clear to me is that especially on mobile the tasks and events tabs leave a lot to be desired.  I tentatively am thinking of splitting this up into engram Journal and engram Planner (two separate apps).

### engram Journal

engram Journal strips away pretty much everything except writing a note.  The challenge I faced with the Journal and Planner is that sometimes opening the app brings you to a different tab than you expect to be in.  The Journal app will allow for always having a single click to open the app and then immediately taking a note.  

The other big benefit of spinning this off is that it is the smallest possible app that has some functionality.  I am planning to drop React (probably across the board).  This will be used as an opportunity to put together tutorials for how to make this work.  The [first few lessons](https://devtails.xyz/tags/learntocode) for this have already been put together.  The main intent here is to demonstrate a web application for those just learning how to code.  Stripping away all the libraries and other cruft allows us to focus on the fundamentals.

### engram Planner

The existing "Journal and Planner" will likely just get renamed to "Planner".  The planning aspect refers to the tasks and events.  The tasks as currently designed are intended to be a todo list for the current day. This mostly works well enough to ignore for a while.  

The events probably need the most attention.  The first step would be to integrate with external calendars.  To start, the events tab would mostly be for viewing your schedule for the current day.  Most of us already have some kind of cloud calendar (Google, Microsoft, or Apple).  While an engram Calendar is likely somewhere in the pipeline, integrating with cloud providers makes the most sense.

After events are read in, it would make sense to be able to easily create events that then get synced to the external calendar.  I would be particularly keen to see the ability to type a human readable string (e.g. "Meeting at 4PM") and have it automatically entered as an event that starts at 4PM with the title "Meeting".  I previously experimented with an agenda like view that had the day broken down in to 15 minute time slots.  This would allow you to click the time slot you wanted to add and event to.  This was one of my favorite ways to enter events and will likely be re-explored.

On desktop, there's a whole array of things that would improve "planning" abilities.  Drag and dropping items between types seems like the preferred way to go.  I often like to lay out a list of tasks for the day and then schedule them in to my calendar.  How this works and looks visually is still very TBD.

## engram Command Line Interface (CLI)

[`ego`](https://github.com/adamjberg/engram/tree/main/clients/cli/ego) (engram online) was just a random project I started to learn Rust.  I think there's tons of useful stuff that could be done with this.  As it currently exists, it's extremely useful as a place to quickly capture notes from the terminal.

## engram Paper

This one deserves it's own announcement post, which may come sometime soon.  engram Paper is a drawing enabled application for drafting handwritten digital notes. This started as a [web application](https://paper.engramhq.xyz/), but I have shifted my attention towards an iPad app (will return to the web app after making some decisions).  Neither have hit the main engram repository yet.  When they do, the top level organization will start reflecting the individual engram products.  e.g. engram/journal, engram/paper, engram/planner and then any relevant code for those projects will live in their respective folders.

## engram Pages

If I had a nickel for every time I told myself I needed engram Pages, I'd be rich.  This is essentially the engram equivalent of Notion, OneNote, Obsidian, etc. The main difference here is that this information is not date based.  This is where your hierarchical organization comes into play.  There will need to be some appropriate and clean way to start writing a "page" in the journal or planner and somehow organize it inside engram Pages.

There's so much that could be done here, but the initial focus will just be getting something functional together. The initial design will be very Notion like, as I will also likely be targeting the ability to export Notion directly to engram Pages.  

## engram Recorder

I have also experimented with a voice memos component to engram (https://record.engramhq.xyz/).  The recorder will be like the Voice Memos app on iOS.  One of the key differences is that ideally it makes it easy to transcribe the audio so along with the audio you can see a transcript of the recorded audio.  Speaking out thoughts is much faster than typing (especially on mobile), but listening is much slower than reading.  

### engram Recorder Hardware

Sometimes I find myself walking and just wanting to verbally rattle off some thoughts.  Holding a phone is incredibly awkward and annoying for this.  I'm working on a purpose built device that allows you to press a button to start recording, speak your thought, and then release to save that audio clip.  Clips will be stored locally on the device until gaining access to internet where it would then upload to the cloud.

## engram Watch

The current iOS app for Journal and Planner also includes an Apple Watch app.  When first developed it was possible to dictate a thought as a note, task, or event with a single tap.  A recent WatchOS update now makes it impossible to do this and instead requires an additional click every time to specify that you want to dictate the note.  

This was frustrating enough to make it almost completely unusable.  Like any sane person, my solution is to build my own watch.  I've started learning with the [Watchy](https://watchy.sqfmi.com/), but this one doesn't come with a microphone.  I will likely work towards my own design that I will open source.  

## Wrap-up

This is an ambitious set of projects for a team... let alone an individual. I'm working on figuring out how to organize this and get help with different aspects.  If any of these projects really speaks to you, please reach out on [Twitter](https://twitter.com/devtails) or by email (adam@xyzdigital.com).