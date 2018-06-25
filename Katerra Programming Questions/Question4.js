function isWhiteSpace(char)
{
  
    if (char.charCodeAt(0) == 32)
      return 1;
    else 
      return 0;
      
}

var msg = 'Hello Hello world!𝟛;';

result = length_of_(msg);

var arr = [];
var word = '';
var count = 0;

for (var i = 0; i < msg.length; i++) 
  {
    bool = isWhiteSpace(msg.charAt(i));
    console.log(bool)
    
    if(bool)
    {
      arr[count] = word;
      word = '';
      count = count + 1;
      continue
    }
    else
    {
      word += msg[i];
      continue
    } 
  }
arr[count] = word;

var unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique)

