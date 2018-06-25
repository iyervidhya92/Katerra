function length_of_(msg)
{
var arr = msg.split(/(?=.)/u);
var length = arr.length;
var new_length = 0;

for (var i = 0; i < length; i++) {
    if (arr[i].charCodeAt(0) < 127)
    {
      new_length = new_length + 1;
    }
    else if(arr[i].charCodeAt(0)>=128){
      new_length = new_length + 1;
      i = i + 1;
    }
    }


return(new_length)
}
var msg = 'Hello Hello world!𝟛;';
result = length_of_(msg);
console.log(result);