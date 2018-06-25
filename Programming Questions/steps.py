def number_of_ways(nums):
	if(nums == 1):
		return 1;

	elif (nums == 2):
		return 2;

	else:
		return number_of_ways(nums - 1) + number_of_ways(nums - 2);

		
def main():
	total_steps = input('The number of steps : ')
	total_ways = number_of_ways(total_steps)
	print("Number of ways"); print(total_ways);

main();