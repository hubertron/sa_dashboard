Handlebars.registerHelper('formatTime', function (date, format) {
    var mmnt = moment(date);
    return mmnt.format(format);
});
Handlebars.registerHelper('notNull', function(value, options) {
    if((value instanceof Window) == false) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('dateformat', function(date) {
  return moment(date, "YYYY MM DD HH:mm:ss Z").format("M/DD/YYYY hh:mm a"); 
});
Handlebars.registerHelper('frDateFormat', function(date) {
  return moment(date, "YYYY MM DD HH:mm:ss Z").format("DD/MM/YY HH [h] mm"); 
});
Handlebars.registerHelper('eventDateFormat', function(date) {
  return moment(date, "YYYY MM DD HH:mm:ss Z").format("DD/MM/YY"); 
});
Handlebars.registerHelper('daydateformat', function(date) {
    return moment(date, "YYYY MM DD HH:mm:ss Z").format("ddd, MMM D @ h:mm a"); 
  });
Handlebars.registerHelper('toLowerCase', function(str) {
    if (str == null) {
        return str;
  
    } else {
        return str.replace(" ", "").toLowerCase();
    }
});
Handlebars.registerHelper("zero", function(val) {
    if(val === "") {
        return "0";
    }
    return val;
});
Handlebars.registerHelper("round", function(val) {
    return parseInt(val);
});
Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});
Handlebars.registerHelper('ifnoteq', function (a, b, options) {
    if (a != b) { return options.fn(this); }
    return options.inverse(this);
});

// Setup the helpers
Handlebars.registerHelper('sum', function(left, right) {
    return left + right;
 });
 
 Handlebars.registerHelper('numFormat', function(num) {
    // Hack around Handlebars by testing for function and using
    // that to calculate the num.
    if (typeof(num) == 'function') {
       num = num.apply(null, Array.prototype.slice.call(arguments, 1));
    }
    // Do that actual work
    return d3.round(num, 1);
 });
 
 // Use this template
 var t = Handlebars.compile("{{ numFormat sum 1 2}} === {{ numFormat 3 }}");
 assert('3 === 3', t());