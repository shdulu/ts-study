/**
 * 快速排序(Quick Sort) 是一种常用的排序算法，采用了分治的思想，是一种高效的排序算法之一。
 * 快速排序的基本思想是选择一个基准元素，将小于基准的元素移到基准的左边，将大于基准的元素移到基准的右边，然后递归地对基准左边的子数组和右边的子数组进行排序，直到整个数组有序。
 * 
 * 操作步骤：
 * 1. 选择基准元素（Pivot）：从数组中选择一个元素作为基准（通常是数组的第一个元素、最后一个元素或者随机选择），将数组分为左右两个子数组。
 * 2. 分区过程（Partition）：对数组进行分区，将小于基准元素的元素放到基准元素的左边，将大于基准元素的元素放到基准元素的右边，相同大小的元素可以放到任意一边。分区过程可以采用多种方法，常见的是 Hoare 分区和 Lomuto 分区。
 * 3. 递归排序：对基准元素左右两边的子数组分别进行递归排序，直到子数组的长度为 0 或 1。
 * 4. 合并结果：将左边子数组、基准元素和右边子数组合并起来，得到最终的排序结果
 * 
 * 
 * */

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(quickSort(arr)); // 输出排序后的数组