# Overview

A Chrome Extension that improves some of the common Github pages in your daily workflow.

At the moment this only includes an update to the "Pull Requests" Dashboard that adds a "Filter by Team" dropdown option to filter PRs that have a review requested of one your teams.

## Installation

### Method 1: Download a Prebuilt Release

- From the releases page, go to the most recent release, and download the `better-gh-views-{release-number}.tgz` asset. This is a prebuilt release.
- Follow the [instructions for installing an unpacked extension with chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).
  - **Note: Make sure you point this at the dist directory inside the tarball**

### Method 2: Build from source

- Clone this repo
- `npm install`
- `npm run build`
- Follow the [instructions for installing an unpacked extension with chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).
  - **Note: Make sure you point this at the dist directory inside the tarball**
