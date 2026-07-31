---
project: instakobo
date: 2026-07-14
title: "Port to Go and running on Kobo devices"
---

Finished the initial port from Deno to Go, and spent some time debugging on the Elipsa 2E. Hooking into the sync event provided some pretty janky and unstable UI, so I decided that the app will need at minimum NickelMenu and, for better experience, NickelDBus.

Spent some time working on the collections code, which had the unfortunate habit of corrupting the device filesystem due to how I was accessing the Kobo sqlite database. I think it's fixed now, but before releasing I will need to test this for a while to make sure the fix works.
