public class InsertionSort {
    public static void main(String[] args) {
        int[] A = new int[] { 12, 43, 54, 23, 35, 44, 98, 67, 31 };
        printArray(A);
        insertionSort(A);
        printArray(A);
    }

    public static void printArray(int[] A) {
        for(int i:A) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void insertionSort(int[] A) {
        for(int i = 1; i < A.length; i++) {
            int j = i - 1;
            int k = A[i];
            while(j >= 0 && A[j] > k) {
                A[j + 1] = A[j];
                j = j - 1;
            }
            A[j + 1] = k;
        }
    }
}