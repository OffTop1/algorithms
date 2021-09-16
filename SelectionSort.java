class SelectionSort {
    public static void main(String[] args) {

        int[] array = new int[] { 4, 2, 1, 7, 9 };
        printArray(array);
        _selectionSort(array);
    }

    public static void printArray(int[] array) {
            for(int i : array) {
                System.out.println(i);
            }
            System.out.println();
        }

        public static void swap(int[] array, int i, int j) {
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        public static int indexOfMinimum(int[] array, int startIndex) {
            int minIndex = startIndex;
            for(int i = startIndex + 1; i < array.length; i++) {
                if(array[i] < array[minIndex]) {
                    minIndex = i;
                }
            }
            return minIndex;
        }

        public static void _selectionSort(int[] array) {
            for(int i = 0; i < array.length; i++) {
                int idx = indexOfMinimum(array, i);
                if(i != idx) {
                    swap(array, i, idx);
                }
            }
            printArray(array);
        }
}