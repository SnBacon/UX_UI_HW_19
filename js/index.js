console.log("loaded correctly");

$("#resume").on("click", function(){
console.log("you clicked view resume");
$(".openModal")
});

$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });