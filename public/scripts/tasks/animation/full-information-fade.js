angular.module('taskModule')
	.animation('.full-information-fade', function() {

		var me=this;

		this.getBlocks= function(infowrapper) {
			return infowrapper.children().children();
		};

		this.anchorClick = function() {
			console.log('anchorClick');
		};

		this.expandBlocks = function(blocks) {

			jQuery.each(blocks, function(i, val) {
				(function(i, val) {
					setTimeout(function() {

						jQuery(blocks[i]).css('opacity', 0);

						jQuery(blocks[i]).animate({
							opacity: 1
						});

						console.log('Animando');
					}, i * 500);
				})(i, val);
			});
		};

		this.hideBlocks= function(blocks) {
			blocks.css('opacity', '0');
		};

		this.hideBars= function(anchor) {
			var closestTr = anchor.closest('tr');
    		var littleProgressbarList= jQuery(closestTr.children('td').splice(4,8));

    		jQuery.each(littleProgressbarList, function(i, val) {
	        	(function(i, val) {
	        		setTimeout(function() {
	        			jQuery(littleProgressbarList[i]).children('.progress-bar-wrapper')
	        				.animate({
	        					opacity: 0
	        				});
	        		}, i * 450);
	        	})(i, val);
	        });
		};

		this.showBars= function(anchor) {
			var closestTr = anchor.closest('tr');
    		var littleProgressbarList= jQuery(closestTr.children('td').splice(4,8));

    		jQuery.each(littleProgressbarList, function(i, val) {
	        	(function(i, val) {
	        		setTimeout(function() {
	        			jQuery(littleProgressbarList[i]).children('.progress-bar-wrapper')
	        				.animate({
	        					opacity: 1
	        				});
	        		}, i * 450);
	        	})(i, val);
	        });
		};

		return {
		  enter: function(element, done) {

		  	var anchor= jQuery(element).find('a');
		  	var fullInformationContainer = anchor.closest('tr').next('tr.full-information-block');
		  	
		  	var blocks = me.getBlocks(fullInformationContainer);
		  		blocks.css('opacity', '0');

		  	fullInformationContainer.hide();

		  	console.log('fullInformationContainer', fullInformationContainer);

		  	anchor.on('click', function() {

		  		if(fullInformationContainer.is(':visible')) {
		  			fullInformationContainer.hide({
		  				duration: 100,
		  				complete: function() {
		  					me.hideBlocks(blocks);
		  					me.showBars(anchor);
		  				}
		  			});
		  			
		  		} else {
		  			fullInformationContainer.show({
		  				duration: 100,
		  				complete: function() {
		  					me.expandBlocks(blocks);
		  					me.hideBars(anchor);
		  				}
		  			});			
		  			
		  		}

		  		
		  		return false;
		  	});

		  	done();
		    // Animation code goes here
		    // Use done() in your animation callback
		  },
		  move: function(element, done) {
		  	console.log('move');
		    // Animation code goes here
		    // Use done() in your animation callback
		  },
		  leave: function(element, done) {
		  	console.log('leave');
		    // Animation code goes here
		    // Use done() in your animation callback
		  }
		}
	});