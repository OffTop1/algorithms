public class BinarySearch {
    public static void main(String[] args) {
        int[] A = new int[] { 12, 23, 34, 49, 51, 63, 77, 89, 91, 99, 100 };
        int idx = binarySearch(A, 99);
        System.out.println("The number 99 is " + idx + "th element of the [A]rray");
    }

    public static int binarySearch(int[] A, int D) {
        int i = 0;
        int j = A.length - 1;
        while(i <= j) {
            int middle = (i + j) / 2;
            if(A[middle] == D) return middle;
            if(A[middle] > D) {
                j = middle - 1;
            } else {
                i = middle + 1;
            }
        }
        return -1;
    }
}