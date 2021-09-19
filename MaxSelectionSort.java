class MaxSelectionSort {
    public static void main(String[] args) {
        int[] array = new int[] {9, 22, 32, 11, 2};
        printArray(array);
        selectionSort(array);
    }

    public static void printArray(int[] array) {
        for(int num:array) {
            System.out.println(num);
        }
        System.out.println();
    }

    public static int indexOfMaximum(int[] array, int startIndex) {
        int maxIndex = startIndex;
        for(int i = startIndex - 1; i > -1; i--) {
            if(array[maxIndex] < array[i]) {
                maxIndex = i;
            }
        } 
        return maxIndex;
    }

    public static void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    public static void selectionSort(int[] array) {
        for(int i = array.length - 1; i > -1; i--) {
            int maxIndex = indexOfMaximum(array, i);
            if(maxIndex != i) {
                swap(array, i, maxIndex);
            }
        }
        printArray(array);
    }



}