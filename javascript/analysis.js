
d3.json("http://thetorie.github.io/javascript/testing.json", function(data)
 {
      console.log(data['response']['docs'][0]);
      let needle1 = 'Charlottesville';
      let needle2 = 'Women';
      let needle3 = 'Stacks';
      let data_parsed = data['response']['docs'][0];
      let final_list = [];
      Object.entries(data_parsed).map( (b) => {
        let key = b[0];
        let items = b[1];
        if (typeof(key) === "number" || typeof(items) === "number"){
          console.log('ignore');      }
         else if (key.includes(needle1) || items.includes(needle1))        {
          // final_list.push(b);
           console.log("It's about Cville");
        }
        else if (key.includes(needle2) || items.includes(needle2)) {
             // final_list.push(b);
                  console.log("It's about women");

}
else if (key.includes(needle3) || items.includes(needle3)) {
     // final_list.push(b);
          console.log("It's in stacks");
}
      });
      // console.log(final_list);
});

d3.json("http://search.lib.virginia.edu/catalog/u3703560.json", function(data)
{
     console.log(data['response']['docs'][0]);
     let needle1 = 'Charlottesville';
     let needle2 = 'Women';
     let needle3 = 'Stacks';
     let data_parsed = data['response']['docs'][0];
     let final_list = [];
     Object.entries(data_parsed).map( (b) => {
       let key = b[0];
       let items = b[1];
       if (typeof(key) === "number" || typeof(items) === "number"){
         console.log('ignore');      }
        else if (key.includes(needle1) || items.includes(needle1))        {
         // final_list.push(b);
         console.log("It's from Cville");

       }
       else if (key.includes(needle2) || items.includes(needle2)) {
            // final_list.push(b);
            console.log("It's about women");

}
else if (key.includes(needle3) || items.includes(needle3)) {
    final_list.push(b);
    console.log("It's in stacks");

}
     });
     // console.log(final_list);
});
