function isWhiteSpace(char)
{
    //Check for whitespace (32) and return "True" if found
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
    
    //To separate the words if whitespace is found
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
for (var i = 0; i < arr.length; i++) 
  console.log(arr[i]);
