public class MergeSort {
    public static void main(String[] args) {
        int[] array = new int[] { 9, 8, 7, 6, 5, 3 };
        printArray(array);
        mergeSort(array, 0, array.length - 1);
        printArray(array);

    }

    public static void printArray(int[] A) {
        for(int i:A) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void merge(int[] A, int p, int q, int r) {
        int n1 = q - p + 1;
        int n2 = r - q;
        int[] L = new int[n1 + 1];
        int[] R = new int[n2 + 1];
        L[n1] = Integer.MAX_VALUE;
        R[n2] = Integer.MAX_VALUE;
        for(int i = 0; i < n1; i++) {
            L[i] = A[i + p];
        } 
        for(int j = 0; j < n2; j++) {
            R[j] = A[j + q + 1];
        }
        int i = 0;
        int j = 0;
        for(int k = p; k <= r; k++) {
            if(L[i] <= R[j]) {
                A[k] = L[i];
                i++;
            } else {
                A[k] = R[j];
                j++;
            }
        }
    }

    public static void mergeSort(int[] A, int p, int r) {
        if(p < r) {
            int q = (p + r) / 2;
            mergeSort(A, p, q);
            mergeSort(A, q + 1, r);
            merge(A, p, q, r);
        }
    }
}