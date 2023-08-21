---
title: 黑马大厂面试题
date: 2022-08-12
sidebar: 'auto'
categories:
 - Train
tags:
 - Train
---

::: tip 介绍
黑马大厂面试题
:::

```markdown
课程内容
P2 - P8 二分查找法
P9 - P15 冒泡排序
P16 - 18 选择排序
P19 - 21 插入排序
P22 希尔排序
P23 插入与选择推到
P24 - P31 快速排序
P31 - P38 List
P39 - P55 Map *
P56 - P61 单例模式
并发篇：
P63 - P65 线程状态
P66 - P67 线程池
P68 - P67 wait&sleep
P70 lock与synchronized区别
P71 - P73 lock
P74 - P80 volatile *
P81 - P83 乐观锁与悲观锁
P84 - P85 HashTable
P86 - P94 ConcurrentHashMap
P 95- P100 ThreadLocal
虚拟机：
P101 - P104 基础
P105 - P112 垃圾回收
P113 - P116 内存溢出
P117 - P126 类加载
P127 - P130 四种引用
P131 - P133 finalize
框架 Spring 无分类，具有原子性，要看就一次性看完。（循环依赖常考！）
```

### 1. 二分查找

#### 1.1 二分查找的思路

1. 前提必须是数组（arr）是排好序的
2. 确定左（L）右（R）边界，目标值（T），循环执行二分查找
3. 获取中间索引M = Floor((L+R) /2)
4. 中间索引的元素值与要搜索的目标值进行比较
   - arr[M] = T,则直接返回搜索值所在的索引M
   - arr[M] > T,则索引M右边的值也大于T，无需比较，将右边界R 缩小到M-1，重新进行查找
   - arr[M] < T,则索引M左边的值也小于T，无需比较，将左边界扩大为M+1，重新进行查找
5. 当L>R时，表示在数组(arr)中未寻找到目标值T，则退出

Java实现

```java
public class BinarySearch {

    public static void main(String[] args) {
        int[] arr = {1,2,5,7,9,56,8586,856685,85685,85688,56886};
        int i = binarySearch(arr, 2);
        System.out.println(i);
    }

    public static int binarySearch(int[] arr,int target){
        // 确定左右边界
        int left = 0,right = arr.length -1;
        while (left <= right){
            int mid = (left + right) / 2;
            if (arr[mid] > target){
                right = mid -1;
            }else if (arr[mid] < target){
                left = mid + 1;
            }else  {
                return mid;
            }
        }
        return -1;

    }

}
```

Go实现

```go
import (
	"fmt"
	"testing"
)

func TestBinarySearch(t *testing.T) {
	var arrs [15]int = [15]int{1, 2, 4, 5, 234, 423, 523, 623, 623, 6326, 623236, 23623623}
	i := BinarySearch(arrs[:], 2)
	fmt.Println(i)
}

func BinarySearch(arr []int, search int) int {
	// 确定左右边界
	left := 0
	right := len(arr) - 1
	for {
		if left > right {
			break
		}
		mid := (left + right) / 2
		if arr[mid] < search {
			left = mid + 1
		} else if arr[mid] > search {
			right = mid - 1
		} else {
			return mid
		}
	}
	return -1
}
```

#### 1.2 

#### 1.3 二分搜索变种

1. 查找第一个值等于给定值的元素
2. 查找最后一个值等于给定值的元素
3. 查找第一个大于等于给定值的元素
4. 查找最后一个小于等于给定值的元素

https://books.halfrost.com/leetcode/ChapterFour/0001~0099/0034.Find-First-and-Last-Position-of-Element-in-Sorted-Array/