 java.util.Scanner;

public class Matsidiso.S { 

    
    final static int BOLT_PRICE = 6; 
    final static int NUT_PRICE = 4;   
    final static int WASHER_PRICE = 2;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.print;
        int bolts = scanner.nextInt();

        System.out.print;
        int nuts = scanner.nextInt();

        System.out.print;
        int washers = scanner.nextInt();

        
        boolean hasError = false;

        
        if (nuts < bolts) {
            System.out.println;
            hasError = true;
        }
        if (washers < 2 * bolts) {
            System.out.print;
            hasError = true;
        }

        
        if (!hasError) {
            System.out.println;
        }

        
        int totalCost = (bolts * BOLT_PRICE) + (nuts * NUT_PRICE) + (washers * WASHER_PRICE);
        System.out.println("Total cost: " + totalCost + " cents");

    
        scanner.close();
    }
}