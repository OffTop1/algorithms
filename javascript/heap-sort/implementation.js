
/*
Let's build a binary tree from our array:
      5      <= This does not violate max-heap property
    /   \
   4     3
  / \
 2   1
 So we swap arr[i] and arr[0]: [5, 4, 3, 2, 1] -> [1, 4, 3, 2, 5]
 decrement heapSize: heapSize--;
      1   // But this violates max-heap property, 
    /   \  // so we first get the largest of its children and swap it with the root
   4     3     // From there both nodes do not violate max-heap property
  / 
 2            
      1      // 4 is the largest so           4                                                          4
    /   \                                   /   \                                                      /   \
   4     3                                 1     3     // 1 violates max-heap property                2     3   // Now, OK
  /                                       /                                                          /
 2                                       2                                                          1
So, the array now looks like: [4, 2, 3, 1, 5]. Now we swap again arr[i] and arr[0] and decrement heapSize: heapSize--:
[4, 2, 3, 1, 5]   => [1, 2, 3, 4, 5]
        1   // The root - 1, violates max-heap property                      3           // Now, it's OK
      /   \   // so let's swap it with the largest children                /   \
     2     3                                                              1     2
So, the array now looks like: [3, 1, 2, 4, 5]. Now we swap again arr[i] and arr[0] and decrement heapSize: heapSize--:
[3, 1, 2, 4, 5]   => [2, 1, 3, 4, 5]    
        2  // So, now our binary tree looks like this 
      /     // It does respect max-heap property
     1
Now we swap again arr[i] and arr[0] and decrement heapSize: heapSize--:
[2, 1, 3, 4, 5]   => [1, 2, 3, 4, 5]    
Let's now design heapSort using the above logic
*/

function heapSort(arr) {
  let heapSize = arr.length - 1;
  buildMaxHeap(arr, heapSize);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0);
    heapSize--;
    maxHeapify(arr, 0, heapSize);
  }
}

function buildMaxHeap(arr, heapSize) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    maxHeapify(arr, heapSize);
  }
}

function maxHeapify(arr, i, heapSize) {
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  let max;
  if (l <= heapSize && arr[i] < arr[l]) {
    max = l;
  } else {
    max = i;
  }
  if (r <= heapSize && arr[max] < arr[r]) {
    max = r;
  }
  if (i !== max) {
    swap(arr, i, max);
    maxHeapify(arr, max, heapSize);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = {
    heapSort
};

// Live demo:  https://stackblitz.com/edit/js-cnn2qu