---
title: Java中的常用算法
date: 2022-03-17
sidebar: 'auto'
categories:
 - 数据结构与算法
tags:
 - 数据结构与算法
---

::: tip
offer来了------Java中的常用算法
:::

## Java中的常用算法

###   1.  二分查找算法

​		二分查找算法又叫折半查找，要求待查找的序列有序，每次查找都取中间位置的值与待查关键字进行比较，如果中间位置的值比待查关键字大，则在序列的左半部分继续执行该查找过程，如果中间位置的值比待查关键字小，则在序列的右半部分继续执行该查找过程，直到查找到关键字位置，否则在序列中没有待查关键字。

#### 1.1 二分查找算法的原理

​		在有序数组[3,4,6,20,40,45,51,62,70,99,110]中查找key=20的数据，根据二分查找算法，只需查找两次便能命中目标。这里需要强调的是，二分查找算法要求要查找的集合是有序的，如果不是有序的集合，则先要通过排序算法排序后再进行查找。

#### 1.2 二分查找算法的Java实现

Java实现

```java
public class BinarySearch {

    public static void main(String[] args) {
        int[] arr = {3,4,6,20,40,45,51,62,70,99,110};
        int i = binarySearch(arr, 20);
        System.out.println(i);
    }

    public static int binarySearch(int[] arr,int key){
        int low = 0;
        int high = arr.length -1;
        int mid= 0;
        while (low<=high){
            mid = (low + high)/2;
            if (arr[mid] == key){
                return mid;
            }else if (arr[mid] < key){
                low = mid + 1;
            }else{
                high = mid + 1;
            }
        }
        return  -1;

    }
}

执行结果：
3
```

###   2.  冒泡排序算法

