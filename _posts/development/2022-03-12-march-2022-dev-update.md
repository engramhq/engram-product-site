---
layout: post
title:  "March 2022 Development Update"
author_staff_member: adam
---

It's almost been a year since my first development update.  Looking back it's interesting to reflect on what's changed and what hasn't.  The core of what engram does (and will do) hasn't changed much since the start.  I have, however, been better able to refine how I want things to work.  This post will break down some of those newer realizations.

## Self-Hosted

I've always intended to release a self hosted version of engram, but I'm increasingly starting to think that this is the option I would most suggest for those looking to use engram.  Since the start, I found it uncomfortable that I am able to view anything you uploaded to the hosted version of engram. I played around with encryption as a way around this, but that introduces it's own complications.  I would like to build engram in such a way that I am confident I am the only person that has access to my data.

I still have yet to fully set this up for myself, but when I do, I will add instructions for how you can do so yourself as well.  It's time we stop handing over our data to tech companies because it's the "convenient" thing to do.  This will take some conditioning and a bit of effort on your part, but the freedom and cost savings in the long term are well worth it.

## One App, One Responsibility

I'm a fan of having an app that has a very small set of responsibilties. As soon as an app tries to do everything, it makes sacrifices in order to make sure *everything* can be done within that application.  Instead of this, all engram apps will be backed by the same database and file system.  All of the data is linked across the apps, but each app only allows you to do what is relevant to that particular app.

## Subdomains Are Key

When I started using Notion at work, I thought "wow, what a great application, I should use this for my personal life as well".  I started to do so until I eventually became so frustrated by having to tell Notion to open as my work account or my personal one.  It's a "small" hurdle, but hitting it several times a day was incredibly frustrating.

engram pages is essentially a replacement for Notion.  Instead of running multiple users to manage different workspaces, they can instead be spread across completely different domains.  pages.engramhq.xyz could be documentation about all things related to engram, while pages.adam.engramhq.xyz can be my personal workspace. With this scheme, I can now have bookmarks directly to the workspace that I'm looking to work with.  When I open the application, it will be where I left off in that workspace, rather than me trying to get switched into the correct workspace. 

This goes a step further when it comes to the different apps that are a part of engram.  At the time of writing, engram now has:

- Planner
- Chat
- Calendar
- Pages
- Notes

There are some other more experimental ones, but these are very likely to always stick around.  Instead of needing a different domain for each of these things, they all become their own subdomain.  It's now possible to register domains for less than $10 per year, after which an unlimited number of subdomains become available.  This makes subdomains a cheap and easy way to deploy multiple apps under the same domain while having them treated as separate entities.  

## System Architecture

The architecture of the codebase is always a moving target.  I have recently decided to stop using React for any of the web portions of engram.  Instead a common set of components will be slowly developed using vanilla JS.  This decision deserves it's own lengthier post outlining reasons and showcasing the chosen path.  For now, this is still in experimental mode as I learn what works and what doesn't.

I am planning to consolidate the backend into a single API.  This is mostly for ease of deployment, but I think also makes sense as all of the apps are intertwined.  The backend should be allowed to do things that cross-over between apps.  Keeping this all in a central place should make this process easier.

## What's Next?

I've spent the last couple of months firming up my vision and laying down some basic foundations.  From here I hope to get some of the key pieces more functional and presentable.  

