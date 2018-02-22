

let json = $.getJSON("text.json", function(json){
  let i = 2;
    json.actions[i] = {'notification':{'title':null,'message':'some message'}};
    delete json.actions[0].params.link

  let jsonStr = JSON.stringify(json, null, 4);
  let textarea = document.getElementById("textarea");
  textarea.innerHTML = jsonStr;
    console.log(json);

});

let underscoreArray = [2,'0', 4, 6, null, [], 8, 10];

var sum = _.reduce(underscoreArray, function (memoizer, number) {
    console.log('Calculating: ' + memoizer + ' + ' + number,);
    if(typeof number !== 'number'){
      number = 0;
    }
    return memoizer + number;
});

console.log(sum);
