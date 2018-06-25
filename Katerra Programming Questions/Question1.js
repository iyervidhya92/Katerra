function length_of_(msg)
{
	//converting the string to array using regex
	var arr = msg.split(/(?=.)/u)
	var length = arr.length
	return length
}


var input_msg = 'Hello Hello world!𝟛';
length = length_of_(input_msg);
console.log(length);

