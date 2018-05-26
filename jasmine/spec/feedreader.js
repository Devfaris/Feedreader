$(function() {
    // test all feeds has been defined
    describe('RSS Feeds', function() {
        it('RSS feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         // Test allFeeds have a url and that the url is not empty
          it('URLs are defined', function () {
              for (var i = 0; i < allFeeds.length; i++) {
                   expect(allFeeds[i].url).toBeDefined();
                   expect(allFeeds[i].url.length).not.toBe(0);
                  }
           });
         // Test allFeeds have a name and that the name is not empty
         it('Names are defined', function () {
             for (var i = 0; i < allFeeds.length; i++) {
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name.length).not.toBe(0);
             }
         });
    });
    // New test suite that will test the hiding/showing of the menu element
    describe('The Menu', function () {
          it('menu element is hidden by default', function () {
          expect($('body').hasClass('menu-hidden')).toEqual(true);
    });
    // Test toggles on click event if the menu hiding or showing
     it('Working toggle on click event', function () {
          // Calls the class of 'menu-icon-link'
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(true);
       });
    });
    // New test suite that will test initial entries
    describe('Initial Entries', function () {
          // Make an asynchronous request by calling function
          beforeEach(function (done) {
            loadFeed(0, function () {
                  done();
              });
          });
          // Tests if the loadFeed function has at least a single entry
          it('Feed has at least a single entry', function () {
             expect($('.feed .entry').length).toBeGreaterThan(0);
          });
    });
    // New test suite that looks for new feed selections
    describe('New Feed Selection', function() {
       let oldFeed;
       beforeEach(function(done) {
           loadFeed(0, function() {
               oldFeed = $('.feed').html();
               // newer feed
               loadFeed(1, done);
           });
       });

       it('Two entries are different', function() {
           expect($('.feed').html()).not.toBe(oldFeed);
       });
   });
   }());
