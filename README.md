frontend-nanodegree-feedreader
===============================
# Udacity-FEND NanoDegree Feed Reader Testing

## Table of Contents

* [Test Summary](#test-summary)
* [How to run Tests](#how-to-run-tests)
* [Required Tests](#required-tests)
* [Start Testing](#start-testing)

## Test Summary
Writing Test suites for a web-based application "Feed Reader application" that reads RSS Feeds using Jasmine Testing Framework.
When complete- all of the tests should pass.

## How to run Tests
To start the app, open index.html in your browser.
The tests were written in the feedreader.js file. The test results appears at the bottom of the index.html page.
Tests that are green have passed and red have failed.

## Required Tests
1. A test to make sure that the allFeeds variable has been defined and that it is not empty.
2. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. A test that ensures the menu element is hidden by default.
5. A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again i.e proper functioning of the menu icon toggle.
6. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container i.e it ensures that there is atleast one entry in feed.
7. A Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Start Testing
Go to [repository link](https://github.com/geetakri/frontend-nanodegree-feedreader.git). Either clone or download the repository to your local computer and open the index.html file in your browser.
