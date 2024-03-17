// 插入排序通常不适用于大型数据集，因为其时间复杂度为O(n^2)，在大规模数据排序时，更高效的排序算法如快速排序或归并排序更为合适。但对于小型数据集或部分有序的数据，插入排序可能是一个不错的选择。
const A = [5, 8, 1, 3, 2, 4, 9];

function insertion_sort(A) {
  for (let i = 0; i < A.length; i++) {
    insert(A, i, A[i]);
  }
  return A;
}

function insert(A, i, x) {
  // 当前对别的索引
  let p = i - 1;
  while (p >= 0 && A[p] > x) {
    A[p + 1] = A[p];
    p--;
  }
  A[p + 1] = x;
}

console.log(insertion_sort(A));
