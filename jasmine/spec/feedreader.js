$(function() {

  describe('RSS Feeds', function() {

    // Test to see if feeds are defined and not equal to zero
    it('feeds are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

     //Test to see if feeds have a defined url and that the ural is not empty
     it('feeds have defined url and url is not empty', function(){
       for(let index in allFeeds) {
         expect(allFeeds[index].url).toBeDefined();
         expect(allFeeds[index].length).not.toBe(0);
       }
     });


     // Test to see if feeds have defined name and is not empty
     it('feeds have defined name and name is not empty', function(){
       for(let index in allFeeds) {
         expect(allFeeds[index].name).toBeDefined();
         expect(allFeeds[index].name.length).not.toBe(0);
       }
     });
  });

  describe('The menu', function(){

     // Test to see that menu element is hidden by default using jQuery
     it('menu element is hidden by default', function(){
       expect($('body').hasClass('menu-hidden')).toEqual(true);
     });


      // Test to see if menu changes visibility when menu icon is clicked
      it('menu changes visibility when menu icon is clicked', function(){

        // Create clicked function using jQuery to call for a click
        function clicked() {
          $('.menu-icon-link').click();
        }

        // Call clicked and see if the menu toggles to being visible
        clicked();
        expect($('body').hasClass('menu-hidden')).toEqual(false);

        // Call clicked and see if the menu toggles to being hidden
        clicked();
        expect($('body').hasClass('menu-hidden')).toEqual(true);
      });
  });

  describe('Initial Entries', function(){

     // BeforeEach to load the feed
     beforeEach(function(done){
       loadFeed(0, done);
     });

     // Check the entry to be sure that there is at least one
     it("loadFeed it completes it's work and there is at least a single entry in the feed container", function(){
       expect($('.entry').length).not.toBeLessThan(0);
     });
  });

  describe('New Feed Selection', function(){
    // Define new variable previousFeed to store first loaded feed
    let previousFeed;

    //Before each to load the first feed and store it in previousFeed variable
    beforeEach(function(done){
      loadFeed(0, function() {
        previousFeed = $('.feed').html();

        //Load the current feed to compare to the previous feed
        loadFeed(1, done);
      });
    });

    // Check to be sure that the feeds do not match.
    it('feed to be different from previous feed', function(){
      expect($('.feed').html()).not.toBe(previousFeed);
    });
  });
}());
