---
date: 2021-03-01
title: Why engram Will be an Offline First Web App
categories:
  - sales
author_staff_member: adam
---

![Cabin in the Woods](https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=90)

Software as a service (SaaS) applications are growing at an unprecedented rate.<sup><a href="https://www.bmc.com/blogs/saas-growth-trends/">1</a></sup>  Despite the massive market, it's a challenge to find applications that have added offline functionality.  While it does seem rare to find ourselves without an internet connection these days, there are some substantial benefits to having your application work offline.

## Availability

The shift to remote work with Covid-19 has stress tested all aspects of the web.  We've seen major outages across web applications big and small.  Recently, Notion has been plagued by a slow internet hug of death.

### Notion's Struggle to Keep Up

Notion's infrastructure is currently struggling to keep up with demand, so much so, that they issued a [formal statement](https://www.notion.so/Focus-on-performance-reliability-89f937a6ccc04905b1dcfa878537e08d) about their focus on performance to address issues.

As an avid Notion user, I have seen how frustrating these performance issues are.  Searching for a note via the keyboard shorcut (Ctrl + P) often opens the browser print dialog as the page hasn't fully loaded yet.  Even if you do manage to get it open, it can take up to a minute to get search results returned.

### How Offline Helps

An offline first model ensures the application is ready for you, even if the servers aren't.  Actions performed in the app no longer need to wait for a server response before proceeding.  Updates can be seamlessly synced in the background when online connectivity is restored.

## Data Ownership and Privacy

Data ownership and privacy are slowly becoming top concerns for SaaS application users.  An offline mode allows for one of the most secure data storage options.  One where the data never leaves your device.

A notes app is primarily centered around your thoughts.  It's important to remember that this is **your** data.  

Currently, *engram* transmits encrypted data over HTTPS and stores data on an encrypted storage volume.  The unencrypted version can however still be accessed by a database administrator (only me).  I will be investigating client side encryption in the near future to provide a stronger guarantee that your information can only be accessed by you.  Until then, an offline account is the best I can offer to protect your information.

## No Account Necessary

Tired of handing out your email every where you go?  With an offline first approach, an account is no longer necessary.  Creating an account is a huge barrier for people that want to test out a new application, but aren't quite ready to commit to creating an account.

*engram*'s login page displays a "Use without account" button. Pressing this immediately gives you access to the app's functionality on whatever device you are using.  Any information you add will be stored in your browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and ready for you on your next visit to the site.  

If you eventually choose to upgrade your account to enable cross device syncing, any information stored locally on your device will be automatically synced to the device you've added.

## Conclusion

With an offline first model, *engram* is always there when you need it.  By primarily operating on offline data, the application won't slow down as more users use the system.  *engram* is one of the few web applications you can use offline, without tracking, and without an account.  These are all important to me and I hope this article has shown why it should be important to you.