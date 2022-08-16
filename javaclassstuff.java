package main;

public class Main {
	
	public static void main(String[] args) {
		
		//int x = 5;
		
		//String hello = "Hello World";
		
		//System.out.println(x);
		//System.out.println(hello);
		
		//System.out.println(4 % 2);
		//System.out.println(x++);
		
		//int totalSugarInGlass = 0;
		
		//int sugar = 5;
		
		//int maxSugar = 10;
		
		//if (sugar <= maxSugar) {
		//	totalSugarInGlass += sugar;
		//	System.out.println(totalSugarInGlass);
		//} else {
		//	System.out.println("We only allow 10 tsp. of sugar per glass.");
		//}
		
		int[] numbers = new int[] {1, 2, 3, 4, 5};
		
		int max = (int) (Math.random() * 10) + 1;
		
		int currentNumber = 6;
		for (int i = 0; i < max; i++, currentNumber++) {
			int temp[] = new int[numbers.length + 1];
			for (int j = 0; j < numbers.length; j++) {
				temp[j] = numbers[j];
			}
			temp[temp.length - 1] = currentNumber;
			numbers = temp;
		}
		
		
		for (int i = 0; i < numbers.length; i++) {
			System.out.println(numbers[i]);
		}
		
	}

}
