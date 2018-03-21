
    d3.json("http://search.lib.virginia.edu/catalog/u7004813.json", function(data) {
      console.log(data['response']['docs'][0]);
      
      var needle = 'Jean';
      for (var i = 0; i < data.length; i++){
        console.log(data['response']['docs'][i])
         if (data['response']['docs'][i].includes(needle)){
                    console.log('success');
                  }
                 }
               });
