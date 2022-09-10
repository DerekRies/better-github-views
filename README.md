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
  - **Note: Make sure you point this at the dist directory**

## Contributing

Some general things to be aware of:

### Github API

This isn't using the Github REST API. That would require an access token, and the user already has a browser session. So we use what the browser session has access to: The turbolinks rendered pages.

Internally that means our API Client wraps:

- Sending a request
- Parsing HTML
- Extracting Data into a shape like `GithubTeam`

It's awkward, but it means a user never has to either configure an access token or grant access to this plugin for something. **If you know of a way to convert the browser session into an access token, please let me know.**

### Views

This project uses JSX as a templating language. Take note: This is not React. You don't have access to react functionality like lifecycle, state, or hooks. These views will not automatically re-render. The JSX is turned into a simple function that purely renders some HTML, once.

Everything in the `gh-views/` directory is intended to be a wrapper around Github's markup and components.

Everything in the `pages/` directory is intended to be the views that this plugin renders.

### Development

There's no development build or `start` script at the moment. So you'll have to run `npm run build` and reload your chrome extension (which you can install with the same directions above under method 2) to see your changes.
