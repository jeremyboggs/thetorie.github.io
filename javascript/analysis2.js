d3.json("https://search.lib.virginia.edu/catalog/u3861020.json", function (data)
 {
      console.log(data['response']['docs'][0]['title_display']);
      let needle1 = 'Cabell';
      let needle2 = 'Charlottesville';
      let needle3 = 'Albemarle';
      let needle4 = 'Virginia';
      let needle5 = 'Va.';
      let needle6 = 'Va';
      let needle7 = 'Women'
      let needle8 = 'women';
      let needle9 = 'suffrage';
      let needle10 = 'female';
      let needle11 = 'feminine';
      let needle12 = 'co-ed';
      let needle13 = 'feminism';
      let needle14 = 'feminist';
      let data_parsed = data['response']['docs'][0];
      let final_list = [];
      Object.entries(data_parsed).map( (b) => {
        let key = b[0];
        let items = b[1];
        if (typeof(key) === "number" || typeof(items) === "number"){
          console.log('ignore');      }
         else if (key.includes(needle1) || items.includes(needle1))        {
           console.log("Related to Cabell Hall(s)");
        }
        else if (key.includes(needle2) || items.includes(needle2)) {
                  console.log("Related to Charlottesville");
}
else if (key.includes(needle3) || items.includes(needle3)) {
          console.log("Related to Charlottesville");
}
else if (key.includes(needle4) || items.includes(needle4)) {
          console.log("Related to Charlottesville");
}
else if (key.includes(needle5) || items.includes(needle5)) {
          console.log("Related to Charlottesville");
}
else if (key.includes(needle6) || items.includes(needle6)) {
          console.log("Related to Charlottesville");
}
else if (key.includes(needle7) || items.includes(needle7)) {
          console.log("Related to Women at UVa");
}
else if (key.includes(needle8) || items.includes(needle8)) {
          console.log("Related to Women at UVa");
}
else if (key.includes(needle9) || items.includes(needle9)) {
          console.log("Related to Women at UVa");
}
else if (key.includes(needle10) || items.includes(needle10)) {
          console.log("Related to Women at UVa");
}
else if (key.includes(needle11) || items.includes(needle11)) {
          console.log("Related to Women at UVa");
}
else if (key.includes(needle12) || items.includes(needle12)) {
          console.log("Related to Women at UVa");
}
else if (key.includes(needle13) || items.includes(needle13)) {
          console.log("Related to Women at UVa");
}
else if (key.includes(needle14) || items.includes(needle14)) {
      console.log("Related to Women at UVa");
}
      });
});

d3.json("http://search.lib.virginia.edu/catalog/u3502961.json", function(data)
{
  console.log(data['response']['docs'][0]['title_display']);
  let needle1 = 'Cabell';
  let needle2 = 'Charlottesville';
  let needle3 = 'Albemarle';
  let needle4 = 'Virginia';
  let needle5 = 'Va.';
  let needle6 = 'Va';
  let needle7 = 'Women'
  let needle8 = 'women';
  let needle9 = 'suffrage';
  let needle10 = 'female';
  let needle11 = 'feminine';
  let needle12 = 'co-ed';
  let needle13 = 'feminism';
  let needle14 = 'feminist ';
  let data_parsed = data['response']['docs'][0];
  let final_list = [];
  Object.entries(data_parsed).map( (b) => {
    let key = b[0];
    let items = b[1];
    if (typeof(key) === "number" || typeof(items) === "number"){
      console.log('ignore');      }
     else if (key.includes(needle1) || items.includes(needle1))        {
       console.log("Related to Cabell Hall(s)");
    }
    else if (key.includes(needle2) || items.includes(needle2)) {
              console.log("Related to Charlottesville");
}
else if (key.includes(needle3) || items.includes(needle3)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle4) || items.includes(needle4)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle5) || items.includes(needle5)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle6) || items.includes(needle6)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle7) || items.includes(needle7)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle8) || items.includes(needle8)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle9) || items.includes(needle9)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle10) || items.includes(needle10)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle11) || items.includes(needle11)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle12) || items.includes(needle12)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle13) || items.includes(needle13)) {
      console.log("Related to Women at UVa");

}
else if (key.includes(needle14) || items.includes(needle14)) {
      console.log("Related to Women at UVa");
}
     });
});

d3.json("http://search.lib.virginia.edu/catalog/u4043867.json", function(data)
{
  console.log(data['response']['docs'][0]['title_display']);
  let needle1 = 'Cabell';
  let needle2 = 'Charlottesville';
  let needle3 = 'Albemarle';
  let needle4 = 'Virginia';
  let needle5 = 'Va.';
  let needle6 = 'Va';
  let needle7 = 'Women'
  let needle8 = 'women';
  let needle9 = 'suffrage';
  let needle10 = 'female';
  let needle11 = 'feminine';
  let needle12 = 'co-ed';
  let needle13 = 'feminism';
  let needle14 = 'feminist';
  let data_parsed = data['response']['docs'][0];
  let final_list = [];
  Object.entries(data_parsed).map( (b) => {
    let key = b[0];
    let items = b[1];
    if (typeof(key) === "number" || typeof(items) === "number"){
      console.log('ignore');      }
     else if (key.includes(needle1) || items.includes(needle1))        {
       console.log("Related to Cabell Hall(s)");
    }
    else if (key.includes(needle2) || items.includes(needle2)) {
              console.log("Related to Charlottesville");
}
else if (key.includes(needle3) || items.includes(needle3)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle4) || items.includes(needle4)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle5) || items.includes(needle5)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle6) || items.includes(needle6)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle7) || items.includes(needle7)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle8) || items.includes(needle8)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle9) || items.includes(needle9)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle10) || items.includes(needle10)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle11) || items.includes(needle11)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle12) || items.includes(needle12)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle13) || items.includes(needle13)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle14) || items.includes(needle14)) {
      console.log("Related to Women at UVa");
}
     });

});
d3.json("http://search.lib.virginia.edu/catalog/u3731176.json", function(data)
{
  console.log(data['response']['docs'][0]['title_display']);
  let needle1 = 'Cabell';
  let needle2 = 'Charlottesville';
  let needle3 = 'Albemarle';
  let needle4 = 'Virginia';
  let needle5 = 'Va.';
  let needle6 = 'Va';
  let needle7 = 'Women'
  let needle8 = 'women';
  let needle9 = 'suffrage';
  let needle10 = 'female';
  let needle11 = 'feminine';
  let needle12 = 'co-ed';
  let needle13 = 'feminism';
  let needle14 = 'feminist ';
  let data_parsed = data['response']['docs'][0];
  let final_list = [];
  Object.entries(data_parsed).map( (b) => {
    let key = b[0];
    let items = b[1];
    if (typeof(key) === "number" || typeof(items) === "number"){
      console.log('ignore');      }
     else if (key.includes(needle1) || items.includes(needle1))        {
       console.log("Related to Cabell Hall(s)");
    }
    else if (key.includes(needle2) || items.includes(needle2)) {
              console.log("Related to Charlottesville");
}
else if (key.includes(needle3) || items.includes(needle3)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle4) || items.includes(needle4)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle5) || items.includes(needle5)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle6) || items.includes(needle6)) {
      console.log("Related to Charlottesville");
}
else if (key.includes(needle7) || items.includes(needle7)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle8) || items.includes(needle8)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle9) || items.includes(needle9)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle10) || items.includes(needle10)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle11) || items.includes(needle11)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle12) || items.includes(needle12)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle13) || items.includes(needle13)) {
      console.log("Related to Women at UVa");
}
else if (key.includes(needle14) || items.includes(needle14)) {
      console.log("Related to Women at UVa");
}
     });
});
