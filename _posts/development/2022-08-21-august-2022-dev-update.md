---
layout: post
title:  "August 2022 Development Update"
author_staff_member: adam
---

It's been 5 months since the [last development update](/2022/03/12/march-2022-dev-update/) and both a lot has changed and nothing has changed at the same time.

## engram Command Line Interface `eg`

Last November, I released the [first CLI version of engram written in Rust](/2021/11/07/cli-0-0-1/).  After some pondering, I have [decided to swap over to C](https://devtails.xyz/@adam/switching-to-c-over-modern-programming-languages).

This 0.0.1 version would simply send the note over to the engram server so it could also be viewed in the current web application https://engram.xyzdigital.com.  

With this new version, I'm rewinding things a bit to better serve my [objective of following offline-first development](2021/04/24/why-engram-will-be-offline-first/).

The initial data storage mechanism will be super simple, but I hope to cover how to add new functionality that slowly grows towards a reasonably capable database.

## engram Operating System (eOS)

After some exploring and investigating, I'm becoming more convinced that each component of what I'm building brings me closer to building an operating system.  Initially, eOS won't be what you normally think of when you hear the words: "operating system".  Instead it will be a graphical user interface program that looks and runs the same across all devices (iOS, Android, macOS, Windows, Linux, etc.).

A lot of the reasoning behind this is inspired by my complete frustration with not getting access to a decent terminal in iOS or Android.  A terminal-like environment provides the perfect place for distraction free gathering of thoughts.

Initially, eOS will simply be the GUI version of the `eg` CLI program. This creates a fairly small scope of features, so I can instead focus on learning SDL2 and the multi-platform quirks. Once this is complete, it should be possible to "load" up eOS with the different "apps" I intend to support under the engram umbrella.  Opening eOS would default to the CLI for quick note taking, but pressing the "Super" key would open up an application switcher (much like macOS' Spotlight Search).

### engram Music

While a music app seems like an unlikely candidate for one of the first apps, I suspect this is one of the ones I'd be most interested in getting sorted sooner rather than later.  I am increasingly frustrated with Spotify and disappointed in myself for not simply buying music these last few years.  Now after years of monthly payments if I unsubscribe I have absolutely nothing to show for it.  I would like to get out of this loop as quickly as possible, and I'm hoping engram Music can be just the thing.  

engram Music will have a much larger focus on storing music on the device you are using instead of streaming it from some cloud service. Storage is cheap these days, there is no reason you can't have 1000s of the common songs you listen to on your mobile device ready to go whenever you need.  This saves battery on your phone by not requiring a constant internet connection and 

## What's Next?

At this point, these updates are more for me to write out my intentions.  This project is intentionally still all over the place as I explore what I truly want to build.  Looking back on previous updates helps me remember and follow the vision that is slowly becoming clearer to me.

I think the most immediate next step is to get out a version of the new offline cli program `eg`.  I'm reasonably confident this will become the backbone of everything that is to come.  I have some work to do in terms of documentation and ensuring that installation can work across all platforms.  First I'll focus on desktop and then I will get things ported to iOS and Android.  The initial foundation will probably be the most difficult part, but I think once it's been laid the rest should start coming together pretty quickly.