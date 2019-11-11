var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    fs.readFile('./input.txt', function(err, data) {
        console.log(data)
        let string = new String(data.toString());
        var index = 1;
        sttrArray  = new Array(string.length).fill('hello');
        var strings = []
        sttrArray.forEach((element, i) => {
            strings.push(string[i]);
        });
      let finalSring = '';
        sttrArray.forEach((element, i) => {
            try {
                if(typeof parseInt(strings[i]) === "number" 
                && strings[i-1] === " " 
                && strings[i-2] === "p" 
                && strings[i-3] === "e" 
                && strings[i-4] === "t" 
                && strings[i-5] === "S" ){
                    strings[i] = index;
                    finalSring += strings[i] + ''
                    index++
                } 
                else{
                    finalSring += strings[i] + ""
                }
            } catch (error) {
                console.log(error);
            }
         
        });
        // string = string.map((ele)=>{
        //  if(ele.includes("Step")){
        //      ele = `Step ${index}`;
        //      index ++
        //      return ele;
        //  }
        //  return ele;
        // })
        string = new String(strings);
    
        fs.writeFile('output.txt',finalSring, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });

        res.end();
      });
}).listen(8080);