class BubbleSort {
    public static void main(String[] args) {
        int[] array = new int[] { 9, 5, 3, 2, 1};
        printArray(array);
        bubbleSort(array);
    }

    public static void printArray(int[] array) {
        for(int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    public static void bubbleSort(int[] array) {
        for(int i = 0; i < array.length; i++) {
            for(int j = array.length - 1; j > i; j--) {
                if(array[i] > array[j]) {
                    swap(array, i, j);
                }
            }
        }
        printArray(array);
    }
}