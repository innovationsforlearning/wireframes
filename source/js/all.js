

$(function() {

// TABS --------------------------

  // activity page tabs

  $('.activity-tabs .tab-link').click(function() {
    var theClickedTab = $(this);
    var theClickedTabId = theClickedTab.attr('data-tab');
    selectActivityTab(theClickedTab);
    showTabContent(theClickedTabId);
  });

  function selectActivityTab(tab){            
    $('.activity-tabs .tab-link').removeClass('active');
    $(tab).addClass('active');
  }

  function showTabContent(tab) {
    $('.activity-content').removeClass('active');
    $('#' + tab).addClass('active');
  }



  // resources tabs

  $('.resource-tabs .tab-link').click(function () {
    var theClickedTab = $(this);
    var theClickedTabId = theClickedTab.attr('data-tab');  //.attr('data-tab');
    selectResourceTab(theClickedTab);
    showSubNav(theClickedTabId);
  });

  $('.tab-submenu-link').click(function() {
    var theClickedTabSubMenuLink = $(this);
    var theClickedTabSubMenuLinkId = theClickedTabSubMenuLink.attr('data-tab');
    selectTabSubMenuLink(theClickedTabSubMenuLink);
    showTabSubMenuContent(theClickedTabSubMenuLinkId);

  });  

  function selectResourceTab(tab){            
    $('.resource-tabs .tab-link').removeClass('active');
    $(tab).addClass('active');
  }

  function showSubNav(tab) {
    $('.tab-submenu-list').removeClass('active');
    $('#' + tab).addClass('active');
  }

  function selectTabSubMenuLink(tab) {
    $('.tab-submenu-link').removeClass('active');
    $(tab).addClass('active');
  }

  function showTabSubMenuContent(tab) {
    $('.tab-submenu-content').removeClass('active');
    $('#' + tab).addClass('active');
  }

// CONNECTION MODAL --------------------------------

  $('a[rel*=leanModal]').leanModal({  
    overlay: 0.9, 
    closeButton: ".modal_close" 
  });


// THE NOTEPAD TAB --------------------------------

    $('#note-tab').click(function(event) {
        var panel = $('#note-panel');
        if (panel.hasClass('open')) {
            panel.removeClass('open');
            $('.note-content').fadeOut('slow', function() {
                $('#note-panel').stop().animate({
                    width: '0',
                    opacity: 0.0
                }, 500)
            })
        } else {
            panel.addClass('open');
            $('#note-panel').stop().animate({
                width: '400',
                opacity: 1
            }, 500, function() {
                $('.note-content').fadeIn('fast');
            });
        }
    });  



}); // end function