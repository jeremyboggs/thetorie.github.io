d3.json("http://search.lib.virginia.edu/catalog/u3703560.json", function (data)
 {
      console.log(data['response']['docs'][0]);
      let needle1 = 'Cabell';
      let needle2 = 'Virginia';
      let needle3 = 'Music';
      let data_parsed = data['response']['docs'][0];
      let final_list = [];
      Object.entries(data_parsed).map( (b) => {
        let key = b[0];
        let items = b[1];
        if (typeof(key) === "number" || typeof(items) === "number"){
          console.log('ignore');      }
         else if (key.includes(needle1) || items.includes(needle1))        {
          // final_list.push(b);
           console.log("Related to Cabell Hall(s)");
        }
        else if (key.includes(needle2) || items.includes(needle2)) {
             // final_list.push(b);
                  console.log("Related to Charlottesville");
}
else if (key.includes(needle3) || items.includes(needle3)) {
     // final_list.push(b);
          console.log("Related to Music at UVa");
}
      });
      // console.log(final_list);
});

d3.json("http://search.lib.virginia.edu/catalog/u3703560.json", function(data)
{
     console.log(data['response']['docs'][0]);
     let needle1 = 'Cabell';
     let needle2 = 'Virginia';
     let needle3 = 'Music';
     let data_parsed = data['response']['docs'][0];
     let final_list = [];
     Object.entries(data_parsed).map( (b) => {
       let key = b[0];
       let items = b[1];
       if (typeof(key) === "number" || typeof(items) === "number"){
         console.log('ignore');      }
        else if (key.includes(needle1) || items.includes(needle1))        {
         // final_list.push(b);
         console.log("Related to Cabell Hall(s)");

       }
       else if (key.includes(needle2) || items.includes(needle2)) {
            // final_list.push(b);
            console.log("Related to Charlottesville");

}
else if (key.includes(needle3) || items.includes(needle3)) {
    final_list.push(b);
    console.log("Related to Music at UVa");

}
     });
     // console.log(final_list);
});

d3.json("http://search.lib.virginia.edu/catalog/u3903400.json", function(data)
{
     console.log(data['response']['docs'][0]);
     let needle1 = 'Cabell';
     let needle2 = 'Virginia';
     let needle3 = 'music';
     let data_parsed = data['response']['docs'][0];
     let final_list = [];
     Object.entries(data_parsed).map( (b) => {
       let key = b[0];
       let items = b[1];
       if (typeof(key) === "number" || typeof(items) === "number"){
         console.log('ignore');      }
        else if (key.includes(needle1) || items.includes(needle1))        {
         // final_list.push(b);
         console.log("Related to Cabell Hall(s)");

       }
       else if (key.includes(needle2) || items.includes(needle2)) {
            // final_list.push(b);
            console.log("Related to Charlottesville");

}
else if (key.includes(needle3) || items.includes(needle3)) {
    final_list.push(b);
    console.log("Related to Music at UVa");

}
     });
     // console.log(final_list);
});
d3.json("http://search.lib.virginia.edu/catalog/u3902988.json", function(data)
{
     console.log(data['response']['docs'][0]);
     let needle1 = 'Cabell';
     let needle2 = 'Virginia';
     let needle3 = 'music';
     let data_parsed = data['response']['docs'][0];
     let final_list = [];
     Object.entries(data_parsed).map( (b) => {
       let key = b[0];
       let items = b[1];
       if (typeof(key) === "number" || typeof(items) === "number"){
         console.log('ignore');      }
        else if (key.includes(needle1) || items.includes(needle1))        {
         // final_list.push(b);
         console.log("Related to Cabell Hall(s)");

       }
       else if (key.includes(needle2) || items.includes(needle2)) {
            // final_list.push(b);
            console.log("Related to Charlottesville");

}
else if (key.includes(needle3) || items.includes(needle3)) {
    final_list.push(b);
    console.log("Related to Music at UVa");

}
     });
     // console.log(final_list);
});
d3.json("http://search.lib.virginia.edu/catalog/u1750128.json", function(data)
{
     console.log(data['response']['docs'][0]);
     let needle1 = 'Cabell';
     let needle2 = 'Virginia';
     let needle3 = 'music';
     let data_parsed = data['response']['docs'][0];
     let final_list = [];
     Object.entries(data_parsed).map( (b) => {
       let key = b[0];
       let items = b[1];
       if (typeof(key) === "number" || typeof(items) === "number"){
         console.log('ignore');      }
        else if (key.includes(needle1) || items.includes(needle1))        {
         // final_list.push(b);
         console.log("Related to Cabell Hall(s)");

       }
       else if (key.includes(needle2) || items.includes(needle2)) {
            // final_list.push(b);
            console.log("Related to Charlottesville");

}
else if (key.includes(needle3) || items.includes(needle3)) {
    final_list.push(b);
    console.log("Related to Music at UVa");

}
     });
     // console.log(final_list);
});
