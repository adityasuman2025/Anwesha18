$(document).ready( function(){
  $('#inpage a').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $("html, body").animate({ scrollTop: $(target).offset().top }, "slow");
  });
  
  function getCurrent(){
    
  };
  
  
  // Cache selectors
var topMenu = $("#inpage"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href=#"+id+"]").parent().addClass("active");
});
});
