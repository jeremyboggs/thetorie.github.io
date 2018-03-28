
d3.json("http://search.lib.virginia.edu/catalog/u3703560.json", function(data)
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


  d3.json("http://search.lib.virginia.edu/catalog/u3903400.json", function(data)
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
  d3.json("http://search.lib.virginia.edu/catalog/u3902988.json", function(data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u4454941.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u4402836.json", function (data)

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
  d3.json("https://search.lib.virginia.edu/catalog/u4388877.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u4697122.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u3902531.json", function (data)

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
  d3.json("https://search.lib.virginia.edu/catalog/u3901059.json", function (data)

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
  d3.json("https://search.lib.virginia.edu/catalog/u3562234.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u2478997.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u4395005.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u1749488.json", function (data)

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
  d3.json("https://search.lib.virginia.edu/catalog/u2101073.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u6731744.json", function (data)

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
  d3.json("https://search.lib.virginia.edu/catalog/u6098997.json", function (data)

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

  d3.json("https://search.lib.virginia.edu/catalog/u5390684.json", function (data)

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

  d3.json("https://search.lib.virginia.edu/catalog/u4043091.json", function (data)
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
  d3.json("https://search.lib.virginia.edu/catalog/u3929874.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u5231958.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u4819899.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u4819897.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u2457806.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u2341851.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u2016117.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u4443191.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u4441703.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u4865718.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u3904369.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u3902632.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u2478969.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u1749353.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u2369217.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u3971356.json", function (data)
  { console.log(data['response']['docs'][0]['title_display']);
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

  d3.json("https://search.lib.virginia.edu/catalog/u2397669.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u4015815.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u3903347.json", function (data)
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

  d3.json("https://search.lib.virginia.edu/catalog/u2636604.json", function (data)
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
