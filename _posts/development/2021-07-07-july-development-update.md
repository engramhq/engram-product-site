---
layout: post
title:  "July 2021 Development Update: iOS & Android Apps"
author_staff_member: adam
---

I am pleased to announce that engram has officially made it's way on to the [iOS App Store](https://apps.apple.com/ca/app/engram/id1568952668) and [Google Play Store](https://play.google.com/store/apps/details?id=com.xyzdigital.engram&utm_source=engramhq&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1)

<div style="text-align: center">
  <a
    href='https://apps.apple.com/ca/app/engram/id1568952668'
  >
    <img alt='Download on the App Store'
      src='/images/ios-app-badge.svg'
      height="58px"	/>
  </a>
  <br />
  <a
    href='https://play.google.com/store/apps/details?id=com.xyzdigital.engram&utm_source=engramhq&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
  >
    <img alt='Get it on Google Play'
      src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
      width="auto"
      height="86px"
      style="width: auto;"	
    />
  </a>
</div>

## Promo Video & Updated Home Page

A huge shoutout to my dad for helping me put together a promo video. Filming, directing, editing, etc! Without his help this never would have seen the light of day.

 I still have some work to do with narrating, but considering this was my first attempt at something like this I'm reasonably happy.

<div>
  <div style="text-align: center;">
    <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/5gCFA9vbKAM' frameborder='0' allowfullscreen></iframe></div>
  </div>
</div>

## Canada Software & Mobile Development Digital Forum

On June 16, 2021, I gave a talk titled [What is a Progressive Web App and Why You Should(n't) Build One](https://www.crowdcast.io/e/react-js--node-js) that largely focused on what I learned from building the PWA, iOS, and Android versions of engram.

**Spoiler alert:** I am largely in favor of a PWA future, but we'll see how my experience goes with the two app stores.

![CSMD Presentation](/images/csmd-presentation.jpg)
<figcaption>PWA, iOS, and Android version of engram</figcaption>

## Android - React Native

The Android version of engram landed on the Google Play Store late June. I built it using React Native as an excuse to explore how it worked.  

Overall, I was impressed with how familiar it felt and how easy it was to get up and running.  I finally incorporated Redux at this point (eventually porting these changes to the PWA version as well). 

I was not a huge fan of how much it felt like I was just gluing together giant pieces of code. This becomes even more obvious when you see the final apk size of 50MB.

All that said, it was the perfect place to prototype the app. React Native does a great job of consolidating the main components of a mobile app (e.g. menu, bottom tab navigation, etc). 

An additional benefit was the ability to share code. Data fetching and redux code code be identical across the PWA and the React Native app.  Something that would make continuing progress on both much more pleasant.

## iOS - SwiftUI

After completing the React Native app, I was determined to complete a native iOS app as well. After playing with CloudKit, I was particularly interested in getting the iOS version to sync across devices without requiring an account or my servers.  

My initial CloudKit build worked fine in development, but for some reason would consistently crash in production. After exhausting myself googling for answers, I eventually abandoned CloudKit and decided that if requiring a user account was the easier way to get something out, that was the approach I should take.

I rewrote the app to have a sign up, login, and fetch data from the api.  After some hurdles learning how to even perform requests in Swift, I again finally had a functional build that I was happy with.  I pulled the trigger and submitted to the App Store.

Unfortunately, they got back to me the next day with a message saying that the app must work without an account.  This was difficult news, because that was the version of the app I aborted thinking it would get me on the App Store more quickly.

I set the project aside for a bit and then entered one last time with the most stripped down attempt I could imagine.  A completely offline version using CoreData.  I ripped out anything network related and swapped in a CoreData backend.

I submitted this version of the app this past weekend, and it was successfully accepted in to the app store on Tuesday.

### WatchOS

The iOS version also comes with an Apple Watch companion app. This app allows you to quickly dictate thoughts on the go straight from your watch.

Unfortunately, the utility of this is not quite what it should be as those notes are currently stuck only on the watch.  Now that I have a base to work off of, I will slowly add the pieces back to support proper synced notes.

## Where to go From Here

Looking back on my [last update](https://engramhq.xyz/2021/03/28/march-development-update/), I have taken a fairly large detour from the direction I was headed. I strongly believe that the mobile experience of engram is critical to the experience and that is why I have focused my attention there. 

I have a decent bit of work to get the iOS and WatchOS apps where they should be (iOS 15 will support Markdown and you better believe engram will use it). From there, I may plunge myself into the native Android side of things with a WearOS app.  Once all of the base apps exist, small improvements can be made incrementally.