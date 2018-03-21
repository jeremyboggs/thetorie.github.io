
d3.json("http://search.lib.virginia.edu/catalog/u3703560.json", function (data)
 {
      console.log(data['response']['docs'][0]['title_display']);
      let needle1 = 'Cabell';
      let needle2 = 'Charlottesville';
      let needle3 = 'Albemarle';
      let needle4 = 'Virginia';
      let needle5 = 'Va.';
      let needle6 = 'Va';
      let needle7 = 'Music';
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
          console.log("Related to Music at UVa");
}
      });
});

d3.json("http://search.lib.virginia.edu/catalog/u3703560.json", function(data)
{
  console.log(data['response']['docs'][0]['title_display']);
  let needle1 = 'Cabell';
  let needle2 = 'Charlottesville';
  let needle3 = 'Albemarle';
  let needle4 = 'Virginia';
  let needle5 = 'Va.';
  let needle6 = 'Va';
  let needle7 = 'Music';
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
      console.log("Related to Music at UVa");
}
     });
});

d3.json("http://search.lib.virginia.edu/catalog/u3903400.json", function(data)
{
  console.log(data['response']['docs'][0]['title_display']);
  let needle1 = 'Cabell';
  let needle2 = 'Charlottesville';
  let needle3 = 'Albemarle';
  let needle4 = 'Virginia';
  let needle5 = 'Va.';
  let needle6 = 'Va';
  let needle7 = 'Music';
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
      console.log("Related to Music at UVa");
}
     });

});
d3.json("http://search.lib.virginia.edu/catalog/u3902988.json", function(data)
{
  console.log(data['response']['docs'][0]['title_display']);
  let needle1 = 'Cabell';
  let needle2 = 'Charlottesville';
  let needle3 = 'Albemarle';
  let needle4 = 'Virginia';
  let needle5 = 'Va.';
  let needle6 = 'Va';
  let needle7 = 'Music';
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
      console.log("Related to Music at UVa");

}
     });
});
