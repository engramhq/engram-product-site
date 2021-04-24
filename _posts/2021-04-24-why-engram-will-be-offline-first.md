---
date: 2021-04-24
title: Why engram Will be Offline First
author_staff_member: adam
---

![Cabin in the Woods](https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=90)

Despite the explosion in software as a service (SaaS) applications, it's still a challenge to find applications that have added offline functionality.  While it seems rare to find ourselves without an internet connection these days, there are other substantial benefits to having your application work offline. 

## Availability

The shift to remote work with Covid-19 has stress tested all aspects of the web.  We've seen major outages across web applications big and small ([Slack](https://www.theverge.com/2021/1/4/22213105/slack-outage-down-2021-server-error), [Microsoft](https://techcrunch.com/2021/04/01/microsoft-outage-knocks-sites-and-services-offline/) and [Notion](https://techcrunch.com/2021/02/12/notion-outage-dns-domain-issues/) to name a few).

### Notion's Struggle to Keep Up

Notion's infrastructure is currently struggling to keep up with demand, so much so, that they issued a [formal statement](https://www.notion.so/Focus-on-performance-reliability-89f937a6ccc04905b1dcfa878537e08d) about their focus on performance to address issues.

As an avid Notion user, I have seen how frustrating these performance issues are.  Searching for a note via the keyboard shorcut (Ctrl + P) often opens the browser print dialog as the page hasn't fully loaded yet.  Even if you do manage to get it open, it can take up to a minute to get search results returned.

As per their statement, offline capabilities in Notion have been put on hold in order to focus on performance and reliability.  While I think this is the correct choice given the circumstances, if Notion had an offline mode from the start, they likely wouldn't be facing the massive amount of load they are currently experiencing.

### How Offline Helps

An offline first model ensures the application is ready for you, even if the servers aren't.  Actions performed in the app no longer need to wait for a server response before proceeding.  Updates can be seamlessly synced in the background when online connectivity is restored. Server downtime is inevitable, but we shouldn't have to temporarily lose access when these situations occur.

## Data Ownership and Privacy

Data ownership and privacy are quickly becoming top concerns for SaaS application users.  An offline mode allows for one of the most secure data storage options - one where the data never leaves your device.

While I believe ownership and privacy of data is important in all apps, a personal note taking app should emphasize this even more so. *engram* is designed for you to capture raw unfiltered thoughts. Much like a journal, these should only be accessible by you as these may contain sensitive information.

The online version of *engram* transmits encrypted data over HTTPS and stores data on an encrypted storage volume.  The unencrypted version, however, can still be accessed by a database administrator (e.g. me).  I will be investigating client side encryption in the near future to provide a stronger guarantee that your information can only be accessed by you.  Until then, the offline version of the app allows you to store everything locally on your device.

## No Account Necessary

Tired of handing out your email everywhere you go?  With an offline first approach, an account is no longer necessary.  Creating an account is a huge barrier for people that want to test out a new application, but aren't quite ready to commit to creating an account.

*engram*'s [signup page](https://engram.xyzdigital.com/signup) displays a "Try Offline Without Account" button. Pressing this immediately gives you access to the app's functionality on whatever device you are using.  Any information you add will be stored in your browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and ready for you on your next visit to the site.  

If you eventually choose to upgrade your account to enable cross device syncing, any information stored locally on your device can be synced to the cloud for access on all of your devices.

## Conclusion

With an offline first model, *engram* is always there when you need it.  By primarily operating on offline data, the application won't slow down as more users use the system.  *engram* is one of the few web applications you can use offline, without tracking, and without an account.  These are all important to me and I hope this article has shown why they should be important to you as well.