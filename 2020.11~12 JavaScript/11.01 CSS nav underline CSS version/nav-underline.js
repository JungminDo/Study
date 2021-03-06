/**
 * Mobile Navigation Menu
 */
window.MobileNavMenu = {};
( function( window, $, that ) {

    // Constructor
    that.init = function() {
        that.cache();

        if ( that.meetsRequirements ) {
            that.bindEvents();
        }
    };

    // Cache all the things
    that.cache = function() {
        that.$c = {
            window: $(window),
            mobileNavMenuContainer: $( '.mobile-nav-menu' ),
            menuItemCount: $( '.mobile-nav-menu .mobile-nav > li' ).length
        };
    };

    // Combine all events
    that.bindEvents = function() {

    	// Do nothing if there are not more than 5 links
    	if ( that.$c.menuItemCount <= 5 ) {
    		exit;
    	}

    	// Replace the fifth menu item with a "more" link
    	that.replaceLastMenuItem();

    	// Show more items when the "more" item is clicked
        $( 'body' ).on( 'click', '.mobile-menu-more-link', that.displayMoreItems );

        // Add the more classes when hovering a parent menu item
        $( 'body' ).on( 'click', '.mobile-nav-menu .menu-item-has-children a', that.setSecondClick );

        // Hide the menu when the close button is clicked
        $( 'body' ).on( 'click', '.close-mobile-menu', that.hideMoreItems );
    };

    // Do we meet the requirements?
    that.meetsRequirements = function() {
        return that.$c.mobileNavMenuContainer.length;
    };

    // Replace the fifth menu item with a "more" link
    that.replaceLastMenuItem = function() {

    	// By this point, we know we have at least 5 items
    	// Add our "more" link
		$( '.mobile-nav-menu .mobile-nav > li:nth-child(4)' ).after( '<li class="mobile-menu-more-link"><a href="#"><span><i class="more-icon"></i>More</span></a></li>' );
    }

    // Toggle the menu items on a click of the "more" link
    that.displayMoreItems = function(event) {

        event.preventDefault();

        // Hide the menu if it's already opened
        if ( $( 'body' ).hasClass( 'mobile-menu-more' ) && ! $( 'body' ).hasClass( 'sub-menu-more' ) ) {
            that.removeMenuClasses();
            return;
        }

        // Remove any instances of classes already in place
        // This makes sure we can click to switch between submenus
        that.removeMenuClasses();

        that.$c.mobileNavMenuContainer.toggleClass( 'more' );
        $( 'body' ).toggleClass( 'mobile-menu-more' );

    };

    // Let the submenu parent be a normal link on the second click
    that.setSecondClick = function(event) {

        console.log( 'child click', this );

        // Check to see if this parent has the visible class
        if( ! $( this ).parent( 'li' ).hasClass( 'visible' ) ) {

            // Don't let the link fire as a normal link
            event.preventDefault();
        }

        // Remove any instances of classes already in place
        // This makes sure we can click to switch between submenus
        that.removeMenuClasses();

        // Toggle the class to display the submenu
        $( this ).parent( 'li' ).toggleClass( 'visible' );

        // Add our "more" classes as we do when clicking the "More" link
        that.$c.mobileNavMenuContainer.toggleClass( 'more' );
        $( 'body' ).toggleClass( 'mobile-menu-more sub-menu-more' );
    };

    // Hide the menu items
    that.hideMoreItems = function() {
        that.removeMenuClasses();
    };

    that.removeMenuClasses = function() {

        // Remove any instances of classes already in place
        // This makes sure we can click to switch between submenus
        $( 'body' ).removeClass( 'mobile-menu-more sub-menu-more' );
        that.$c.mobileNavMenuContainer.removeClass( 'more' );
        $( '.menu-item-has-children' ).removeClass( 'visible' );
    }

    // Engage
    $( that.init );


})( window, jQuery, window.MobileNavMenu );