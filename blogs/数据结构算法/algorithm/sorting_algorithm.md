---
title: 排序算法
date: 2021-12-18
sidebar: 'auto'
categories:
 - 数据结构与算法
tags:
 - 数据结构与算法
---

::: tip
排序算法
:::

## 排序算法

###   1.  简介

1. 排序也称为排序算法，排序是将一组数据依照指定顺序进行排列的过程。

2. 排序算法分类

   比较类排序

   - 选择排序：简单选择排序、堆排序
   - 插入排序：直接插入排序、希尔排序
   - 交换排序：冒泡排序、快速排序
   - 归并排序

   非比较类排序

   - 基数排序
   - 计数排序
   - 桶排序

3. 算法复杂度

   ![](./img/sort/001.png)

4. 时间复杂度

   - **稳定**：如果a原本在b前面，而a=b，排序之后a仍然在b的前面。
   - **不稳定**：如果a原本在b的前面，而a=b，排序之后 a 可能会出现在 b 的后面。
   - **时间复杂度**：对排序数据的总的操作次数。反映当n变化时，操作次数呈现什么规律。
   - **空间复杂度：**是指算法在计算机内执行时所需存储空间的度量，它也是数据规模n的函数。
   - **时间频度：**一个算法中的语句执行次数称为时间频度。

###   2.  冒泡排序

##### 介绍

通过对待排序序列从前往后，依次比较相邻元素的值，若发现逆序则交换，使值较大的元素主键从前往后移动。

##### 图解

![](./img/sort/002.gif)

##### 代码实现

```java
public class BubbleSort {

    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] =(int) (Math.random() * 80000);
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format1 = simpleDateFormat.format(new Date());
        System.out.println("排序前的时间为" + format1);
        bubbleSort(arr);
        String format2 = simpleDateFormat.format(new Date());
        System.out.println("排序后的时间为" + format2);
    }


    public static void bubbleSort(int[] arr){
        int temp = 0;
        boolean flag = false;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length -1 - i; j++) {
                if (arr[j] > arr[j+1]){
                    flag = true;
                    temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
            if (!flag){
                break;
            }else {
                flag = true;
            }
        }
    }

}


执行结果
排序前的时间为2022-02-18 16:10:45
排序后的时间为2022-02-18 16:10:54
```

###   3.  选择排序

##### 介绍

首先在未排序序列中找到最小（大）的值，存放在排序序列的起始位置。然后再从未排序序列中继续寻找最小（大）元素，将其放在已排序序列的末尾。

##### 图解

![](./img/sort/003.gif)

##### 代码实现

```java
public class SelectSort {


    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] =(int) (Math.random() * 80000);
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format1 = simpleDateFormat.format(new Date());
        System.out.println("排序前的时间为" + format1);
        selectSort(arr);
        String format2 = simpleDateFormat.format(new Date());
        System.out.println("排序后的时间为" + format2);
    }

    public static void selectSort(int[] arg){
        int minIndex = 0;
        int temp = 0;
        for (int i = 0; i < arg.length -1; i++) {
            minIndex = i;
            for (int j = i+1; j < arg.length; j++) {
                if (arg[minIndex] > arg[j]){
                    minIndex = j;
                }
            }
            temp = arg[i];
            arg[i] = arg[minIndex];
            arg[minIndex] = temp;
        }
    }

}


执行结果
排序前的时间为2022-02-19 12:48:08
排序后的时间为2022-02-19 12:48:11
```

###   4.  插入排序

##### 介绍

对于未排序的数据，在已排序的数据从后往前扫描找到相应的位置并插入。

##### 图解

![](./img/sort/insert_sort_001.gif)

##### 代码实现

```java
public class InsertSort {

    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] =(int) (Math.random() * 80000);
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format1 = simpleDateFormat.format(new Date());
        System.out.println("排序前的时间为" + format1);
        insertSort(arr);
        String format2 = simpleDateFormat.format(new Date());
        System.out.println("排序后的时间为" + format2);
    }

    public static void insertSort(int[] arr){
        for (int i=1;i<arr.length;i++){
            for (int j=i;j>0 && (arr[j] < arr[j-1]);j--){
                int temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }

}

执行结果：
排序前的时间为2022-03-10 15:31:37
排序后的时间为2022-03-10 15:31:38
```

###   5.  希尔排序

##### 介绍

希尔排序是将记录按照一定增量分组，在每个组里面进行简单插入排序。随着增量逐渐减少，每组包含的关键字越来越多，当增量减到1时，整个记录恰好被分为一组，算法便终止。

##### 图解

![](./img/sort/shell_sort_001.png)

##### 代码实现

```java
public class ShellSort {

    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] =(int) (Math.random() * 80000);
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format1 = simpleDateFormat.format(new Date());
        System.out.println("排序前的时间为" + format1);
        shellSort(arr);
        String format2 = simpleDateFormat.format(new Date());
        System.out.println("排序后的时间为" + format2);
    }

    public static void shellSort(int[] arg){
        //grap，并逐步缩小增量
        for (int grap = arg.length /2; grap >0; grap/=2) {
            //从第grap个元素，逐个对其所在组进行直接插入排序操作
            for (int i = grap; i < arg.length; i++) {
                int j = i;
                while (j-grap>=0 && arg[j] <arg[j-grap]){
                    int temp = arg[j];
                    arg[j] = arg[j-grap];
                    arg[j-grap] = temp;
                }
            }
        }
    }
}

执行结果
排序前的时间为2022-03-10 15:26:51
排序后的时间为2022-03-10 15:26:51
```

###   6.  快速排序

##### 介绍

通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。快速排序通过多次比较和交换和实现排序。

步骤：

1. 首先设定一个分界值，通过该分界值将数组分为左右两个部分。
2. 将大于或等于分界值得数据中到数组右边，小于分界值得数据集中在数组左边。
3. 然后，左边和右边的数据可以独立排序。对于左侧的数组数据，又可以取一个分界值，将该部分数据分成左右两部分，同样在左边放置较小值，右边放置较大值。右侧的数组数据也可以做类似处理。
4. 重复上述过程，可以看出，这是一个递归定义。通过递归将左侧部分排好序后，再递归排好右侧部分的顺序。当左、右两个部分各数据排序完成后，整个数组的排序也就完成了

##### 图解

![]()

##### 代码实现

###   7.  归并排序

##### 介绍

##### 图解

##### 代码实现

###   8.  基数排序

##### 介绍

##### 图解

##### 代码实现

###   9.  堆排序

##### 介绍

##### 图解

##### 代码实现

###   10.  桶排序

##### 介绍

##### 图解

##### 代码实现

