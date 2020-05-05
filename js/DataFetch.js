var url = "https://snowreporting.herokuapp.com/feed?format=json&resortId=61";

var trailreport = function(url, entrytemplateId, anchor) {
  $.getJSON(url, function(data) {
    console.log(data);
    var template = $(entrytemplateId).html();
    var results = Handlebars.compile(template)(data);
    $(".content-placeholder").html(results);
  });
};
trailreport(url, "#entrytemplate", "#content-placeholder");

