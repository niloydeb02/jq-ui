$(document).ready(function(){
// drag
$('#dragg').draggable();

// drag trigger
var $start_counter = $( "#e_start" ),
      $drag_counter = $( "#e_drag" ),
      $stop_counter = $( "#e_stop" ),
      counts = [ 0, 0, 0 ];
 
    $( "#drag" ).draggable({
      start: function() {
        counts[ 0 ]++;
        updateCounterStatus( $start_counter, counts[ 0 ] );
      },
      drag: function() {
        counts[ 1 ]++;
        updateCounterStatus( $drag_counter, counts[ 1 ] );
      },
      stop: function() {
        counts[ 2 ]++;
        updateCounterStatus( $stop_counter, counts[ 2 ] );
      }
    });
 
    function updateCounterStatus( $event_counter, new_count ) {
      // first update the status visually...
      if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
        $event_counter.addClass( "ui-state-hover" )
          .siblings().removeClass( "ui-state-hover" );
      }
      // ...then update the numbers
      $( "span.count", $event_counter ).text( new_count );
    };


   // drag and drop
    $('#dr_able').draggable();
    $('#drop_able').droppable({
    	classes:{
    		"ui-droppable-active":"ui-state-active",
    		"ui-droppable-hover":"ui-state-hover"

    	},
    	drop:function(event,ui) {
    		$(this).addClass('ui-state-highlight').find('p').html('Dropped!');

    	}
    });
       
// sortable
       $('#s_able').sortable();


// accordian
      
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accor" ).accordion({
      collapsible: true,
      icons: icons,
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accor" ).accordion( "option", "icons" ) ) {
        $( "#accor" ).accordion( "option", "icons", null );
      } else {
        $( "#accor" ).accordion( "option", "icons", icons );
      };

});
// autocomplete
        var data = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
   
    $( "#examp" ).autocomplete({
      source:data 
    });

// button
    $( ".widget button" )
      .eq( 0 ).button()
      .end().eq( 1 ).button( {
        icon: "ui-icon-gear",
        showLabel: false
      } ).end().eq( 2 ).button( {
        icon: "ui-icon-gear"
      } ).end().eq( 3 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "end"
      } ).end().eq( 4 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "top"
      } ).end().eq( 5 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "bottom"
      } );
    

     //datepicker
     $('#datepicker').datepicker({
     	changeMonth:true,
     	changeYear:true
     }) ;
     // menu

     $('#menu').menu(); 

     // progressbar
      var progressTimer,
      progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" ),
      dialogButtons = [{
        text: "Cancel Download",
        click: closeDownload
      }],
      dialog = $( "#dialog" ).dialog({
        autoOpen: false,
        closeOnEscape: false,
        resizable: false,
        buttons: dialogButtons,
        open: function() {
          progressTimer = setTimeout( progress, 2000 );
        },
        beforeClose: function() {
          downloadButton.button( "option", {
            disabled: false,
            label: "Start Download"
          });
        }
      }),
      downloadButton = $( "#downloadButton" )
        .button()
        .on( "click", function() {
          $( this ).button( "option", {
            disabled: true,
            label: "Downloading..."
          });
          dialog.dialog( "open" );
        });
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
        dialog.dialog( "option", "buttons", [{
          text: "Close",
          click: closeDownload
        }]);
        $(".ui-dialog button").last().trigger( "focus" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
 
      if ( val <= 99 ) {
        progressTimer = setTimeout( progress, 50 );
      }
    }
 
    function closeDownload() {
      clearTimeout( progressTimer );
      dialog
        .dialog( "option", "buttons", dialogButtons )
        .dialog( "close" );
      progressbar.progressbar( "value", false );
      progressLabel
        .text( "Starting download..." );
      downloadButton.trigger( "focus" );
    };

// color picker


 function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );

// tabs
      $( "#tabs" ).tabs({
      	event:"mouseover"
      });
  
// tooltip

      var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });

      // addClass
       // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#ef_type" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).toggle( selectedEffect, options, 500 );
    };
 
    // Set effect from select menu value
    $( "#e_button" ).on( "click", function() {
      runEffect();
    });
   

});