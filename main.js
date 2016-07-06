console.log("main.js linked");
var divString = "<a href=\"\"><div><img src=\"\" /><p class=\"title\"></p><p class=\"seller\"></p><p class=\"price\"></p></div></a>";

var data = {
  type: "GET",
  dataType: "jsonp",
  success: function(response) {
    // console.log(response);
    response.results.forEach(function(item, index){
      $newEl = $(divString);
      $newEl.attr("href", item.url);
      $newEl.children("div").children("img").attr("src", item.Images[0].url_170x135);
      $newEl.children("div").children("p.title").text(item.title);
      $newEl.children("div").children("p.seller").text(item.Shop.shop_name);
      $newEl.children("div").children("p.price").text("$" + item.price);
      $("main").append($newEl);
    });
  }
};

var searchTerm = "whiskey";
$.ajax("https://openapi.etsy.com/v2/listings/active.js?api_key=5icz9kbt7y8a3qnuu1iixoff&keywords=" + searchTerm + "&includes=Images,Shop", data);

$search = $(".searchText");
$searchButton = $(".searchButton");
$searchButton.on("click", function(evt){
  searchTerm = $search.val();
  console.log(searchTerm);
  $("main").empty();
  $.ajax("https://openapi.etsy.com/v2/listings/active.js?api_key=5icz9kbt7y8a3qnuu1iixoff&keywords=" + searchTerm + "&includes=Images,Shop", data);
});
