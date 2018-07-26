/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not empty */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('urls are defined', function() {
             for(let feed of allFeeds) {
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             }

         });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
             for(let feed of allFeeds) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
               }

         });
    });


    /* a new test suite named "The menu" */
    describe('The menu', function() {
        /*a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden', function() {
             const body = document.querySelector('body');
             expect(body.classList.contains('menu-hidden')).toBe(true);
          });

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('toggles on and off on click', function() {
              const body = document.querySelector('body');
              const menu = document.querySelector('.menu-icon-link');

              menu.click();
              expect(body.classList.contains('menu-hidden')).toBe(false);

              menu.click();
              expect(body.classList.contains('menu-hidden')).toBe(true);

           });
    });
    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // Calls a function to an asynchronous request
         beforeEach(function(done) {
              loadFeed(0, done);
          });


         // tests if there is at least a single .entry element within the .feed container.
        it('has atleast a single entry', function() {
            const feedEntries = document.querySelectorAll('.feed .entry');
            expect(feedEntries.length).toBeGreaterThan(0);
         });

    });

    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         const feed = document.querySelector('.feed');
         //empty Array variable called firstFeed
         const firstFeed = [];

         //new feed loads automatically when this code runs
         //since done can only be called once, we call it in the final async function to let Jasmine know when to continue.
         beforeEach(function(done) {
              //calls the first feed
               loadFeed(0, function() {
                 //converts the first feed's children elements into an array list , then lopp over each entry
                 //pushing the InnerText to our firstFeed Array
                 Array.from(feed.children).forEach(function(entry){
                      firstFeed.push(entry.innerText);
                 });
                 //calls the new feed
                 loadFeed(1);
               });

               //calls done()
               loadFeed(1,function() {
                    done();
               });
          });

          //In the test, this time we convert the new feed children into an array and loop over each entry.
          //then we use an index parameter to compare the first feed against the new feed
          it('a new feed is loaded', function() {
              Array.from(feed.children).forEach(function(entry,index){
                  expect(entry.innerText === firstFeed[index]).toBe(false);
              });
         });

    });
}());
