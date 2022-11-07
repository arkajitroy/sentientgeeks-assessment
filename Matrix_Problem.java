// Question: Find the sum of the element of an matrix

import java.util.Scanner;

class Main {

    // Sum functions
    public static void sumMatrix(int mat[][], int n){
        int pri = 0, sec = 0;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(i == j){
                    pri += mat[i][j];
                }
                if((i+j) == (n-1)){
                    sec += mat[i][j];
                }
            }
        }
        System.out.println("\nSum from (left to right) => "+pri);
        System.out.println("Sum from (right to left) => "+sec);
    }

    // matrix-printing function
    public static void matPrint(int arr[][], int n){
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.print("\n");
        }
    }

    // matrix-input function
    public static void matInp(int arr[][], int n){
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                System.out.print("input for row "+i+"and col "+j+" -> ");
                Scanner sc = new Scanner(System.in);
                arr[i][j] = sc.nextInt();
            }
        }
    }

    // main-method
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array -> ");
        int size = sc.nextInt();
        int arr[][] = new int[size][size];  // creating a new array

        // calling the functions
        matInp(arr, size);
        System.out.print("\nOverview of the Matrix");
        matPrint(arr, size);
        System.out.print("\nOutput");
        sumMatrix(arr, size);
    }
}
