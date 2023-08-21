---
title: 面试题---java基础
date: 2022-04-12
sidebar: 'auto'
categories:
 - 面试题系列
tags:
 - 面试题系列
---

::: tip 面试题
java基础
:::

### 集合篇

------

#### ArrayList的扩容流程

#### **HashMap的实现原理是什么？**

jdk1.8中HashMap采用数组、链表、红黑树构成。

```java
// Hashmap的默认容量
static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16

// 最大容量
static final int MAXIMUM_CAPACITY = 1 << 30;

// 默认加载因子
static final float DEFAULT_LOAD_FACTOR = 0.75f;

// 链表转红黑树的阈值
static final int TREEIFY_THRESHOLD = 8;

// 红黑树转链表的阈值
static final int UNTREEIFY_THRESHOLD = 6;

// 转红黑树Hash桶的最小的数量
static final int MIN_TREEIFY_CAPACITY = 64;

// hash桶扩容阈值，threshold=capacity*loadFactor
int threshold;

// 加载因子
final float loadFactor;
```

#### **HashMap中Put方法的流程？**

1. 如果HashMap未初始化，则先初始化
2. 判断hash桶的当前位置是否存在数据，若无数据则直接赋值
3. 若当前桶位置有数据，判断要put进去的key值是否与当前值相同，相同则进行覆盖。
4. 不同的话则判断当前节点是否为红黑树结构，若是则往红黑树上继续添加数据
5. 若当前桶位置key值与添加的key不同并且当前节点不为红黑树结构，则遍历当前链表节点，判断当前链表节点是否达到扩容的阈值，则进行转换成后红黑树，判断是否相同。

```java
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
               boolean evict) {
    Node<K,V>[] tab; Node<K,V> p; int n, i;
    // 判断hash桶是否为null
    if ((tab = table) == null || (n = tab.length) == 0)
        // 初始化
        n = (tab = resize()).length;
    // 若当前桶位置无数据,则New一个Node出来赋给table中指定索引下的这个元素
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
    else {
        Node<K,V> e; K k;
        // 判断put进去的key值是否相同
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k))))
            e = p;
        // 判断当前桶位置下是否为红黑数结构
        else if (p instanceof TreeNode)
            // 给当前节点添加子节点
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
        else {
            // 遍历当前桶节点下的节点
            for (int binCount = 0; ; ++binCount) {
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, null);
                    // 若链表节点数量大于阈值扩容阈值，则转换为红黑树
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash);
                    break;
                }
                // 判断当前节点的key是否相同，相同进行覆盖处理
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                p = e;
            }
        }
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
    }
    ++modCount;
    if (++size > threshold)
        resize();
    afterNodeInsertion(evict);
    return null;
}


// 初始化和扩容方法
final Node<K,V>[] resize() {
    Node<K,V>[] oldTab = table;
    int oldCap = (oldTab == null) ? 0 : oldTab.length;
    int oldThr = threshold;
    int newCap, newThr = 0;
    if (oldCap > 0) {
        if (oldCap >= MAXIMUM_CAPACITY) {
            threshold = Integer.MAX_VALUE;
            return oldTab;
        }
        // 新的容量扩容2倍
        else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                 oldCap >= DEFAULT_INITIAL_CAPACITY)
            newThr = oldThr << 1; // double threshold
    }
    else if (oldThr > 0) // initial capacity was placed in threshold
        newCap = oldThr;
    else {               // zero initial threshold signifies using defaults
        // 未进行初始化时的赋值
        newCap = DEFAULT_INITIAL_CAPACITY;
        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
    }
    if (newThr == 0) {
        float ft = (float)newCap * loadFactor;
        newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                  (int)ft : Integer.MAX_VALUE);
    }
    threshold = newThr;
    @SuppressWarnings({"rawtypes","unchecked"})
    Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
    table = newTab;
    if (oldTab != null) {
        for (int j = 0; j < oldCap; ++j) {
            Node<K,V> e;
            if ((e = oldTab[j]) != null) {
                oldTab[j] = null;
                if (e.next == null)
                    newTab[e.hash & (newCap - 1)] = e;
                else if (e instanceof TreeNode)
                    ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                else { // preserve order
                    Node<K,V> loHead = null, loTail = null;
                    Node<K,V> hiHead = null, hiTail = null;
                    Node<K,V> next;
                    do {
                        next = e.next;
                        if ((e.hash & oldCap) == 0) {
                            if (loTail == null)
                                loHead = e;
                            else
                                loTail.next = e;
                            loTail = e;
                        }
                        else {
                            if (hiTail == null)
                                hiHead = e;
                            else
                                hiTail.next = e;
                            hiTail = e;
                        }
                    } while ((e = next) != null);
                    if (loTail != null) {
                        loTail.next = null;
                        newTab[j] = loHead;
                    }
                    if (hiTail != null) {
                        hiTail.next = null;
                        newTab[j + oldCap] = hiHead;
                    }
                }
            }
        }
    }
    return newTab;
}
```

#### JDK8中链表转为红黑树的条件？



#### **HashMap扩容流程是怎样的？**



#### **为什么HashMap的数组的大小是2的幂次方数？**

#### **为什么HashMap在多线程扩容时会出现循环链表的** 

#### ConcurrentHashMap 的实现原理是什么？

#### ConcurrentHashMap 的put方法执行逻辑是什么？

#### ConcurrentHashMap 的get方法执行逻辑是什么？

#### ConcurrentHashMap 的并发度是什么？