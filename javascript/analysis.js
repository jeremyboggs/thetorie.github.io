

    d3.json("http://search.lib.virginia.edu/catalog/u7004813.json", function(data) {
      console.log(data['response']['docs'][0]);
      // the code you're looking for
      var needle = 'a';
      // iterate over each element in the array
      for (var i = 0; i < data.length; i++){
        // look for the entry with a matching `code` value
        console.log(data['response']['docs'][i])
        if (data['response']['docs'][i].includes(needle)){
           // we found it
          // obj[i].name is the matched result
          console.log('success');
        }
      }
    });
