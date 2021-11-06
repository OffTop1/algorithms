public class RecursiveBinarySearch {
    public static void main(String[] args) {
        int[] array = new int[] { 12, 23, 34, 54, 78, 99, 123, 434, 543, 999, 1001 };
        System.out.println("The element 34 is in: " + binarySearch(array, 0, array.length - 1, 34) + "th index");
    }

    public static int binarySearch(int[] A, int i, int j, int D) {
        if(i > j) return -1;
        int middle = (i + j) / 2;
        if(A[middle] == D) return middle;
        if(A[middle] > D) {
            return binarySearch(A, i, middle - 1, D);
        } else {
            return binarySearch(A, middle + 1, j, D);
        }
    }
}