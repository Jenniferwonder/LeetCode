---
Title: DS Intro
Type: D
tags:
  - Algo
DateStarted: 2023-09-07
DateModified: 2023-09-12
status: 
mindmap-plugin: basic
---

# DS Intro

## 程序设计= **数据结构+算法**  [📌](obsidian://jump-to-pdf?id=DHDS&annotate=16bb85c9-b1ed-52f0)

## ⭐重点

### 为什么需要

### 特性

### 案例

### 优劣

### 操作

### 应用

## 1.4　基本概念和术语 ![[1693552954849.png]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=efec07c9-5f58-763d)

### 1.4.1　数据 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=ed553e9f-ada9-d3b4)
- 是描述客观事物的符号，是计算机中可以操作的对象，是能被计 算机识别，并输入给计算机处理的符号集合 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=fda39230-056c-5762)

### 1.4.2　数据元素 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=418a394e-03ea-6d6b)
- 是组成数据的、有一定意义的基本单位，在计算机中通常作 为整体处理。也被称为记录 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=18056bd6-2be5-80eb)

### 1.4.3　数据项 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=a34861b0-89fc-aac8)
- 是数据不可分割的最小单位 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=51ec3774-0087-5839)

### 1.4.4　数据对象 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=aeba39fe-62e2-8f57)
- 是性质相同的数据元素的集合，是数据的子集 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=354cd4ad-ba63-3009)

### 1.4.5　数据结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=c7ce42d3-807e-8cb1)
- 结构
    - 关系 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=6347b701-8198-5e50)
    - 是指各个组成部分相互搭配和排列的方式 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=c3932a8f-4ddb-7158)
- 数据结构：是**相互之间存在一种或多种特定关系的数据元素的集合** [📌](obsidian://jump-to-pdf?id=DHDS&annotate=380676c2-91f1-5503)

## 1.5　逻辑结构与物理结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=a97aaa05-1128-12c4)

### 1.5.1　逻辑结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=a043eda1-c562-98e5)
- 集合结构 (散列结构, ==散列表==) [📌](obsidian://jump-to-pdf?id=DHDS&annotate=a2ed4181-f76f-e0a3)
    - 集合结构中的数据元素除了同属于一个集合外，它们之间没有其他关系 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=14fb084e-548f-0558)
    - ![[1693551791349.png|200]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=118d7c5c-dfd7-9337)
    - 案例
        - 题库
        - 商店商品
    - 特性
        - 集合里的元素类型不一定相同
        - 集合里的元素没有顺序
    - 为什么需要散列表 [📌](obsidian://jump-to-pdf?id=AlgoMH&annotate=0e9a218d-9c49-f94c)
    - 散列表的读写操作 [📌](obsidian://jump-to-pdf?id=AlgoMH&annotate=fe5cb981-414d-6398)
    - ==集合==
    - ==映射==
    - ==BitMap==
        - ***Bitmap 算法 (图算法)*** [📌](obsidian://jump-to-pdf?id=AlgoMH&annotate=2112722a-879f-2d63)
    - ***哈希函数*** [📌](obsidian://jump-to-pdf?id=AlgoMH&annotate=710b08d9-d900-a3f8)
- 线性结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=ac5c1c87-f2ff-8c0a)
    - 线性结构中的数据元素之间是**一对一**的关系 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=de20acc9-d146-0d18)
    - ![[1693551921768.png|200]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=5455df63-38e1-3bd1)
- 树形结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=7c8411d7-9503-8d7e)
    - 树形结构中的数据元素之间存在一种**一对多**的层次关系 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=fb7092e8-62f4-fa87)
    - ![[1693551970530.png|250]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=77e44df9-7e1a-ea9d)
- 图形结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=c890fef7-727c-47a2)
    - 图形结构的数据元素是**多对多**的关系 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=e54a9049-7f2f-7407)
    - ![[1693552009255.png|250]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=03945716-c74a-7ac8)

### 1.5.2　物理结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=332f6050-7fdf-4810)
- ![[z-Assets/Paste image 1693553718264image.png|60]] 顺序存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=2ad77d5d-a86a-5e2a)
    - ![[1693553223233.png]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=89af4967-2576-58f2)
- ![[z-Assets/Paste image 1693553831167image.png|60]]链式存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=55531972-89b7-62f5)
    - ![[1693553231318.png|200]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=3fc20d0f-871a-93c6)

## 1.6　抽象数据类型 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=5a1ab398-387e-75c8)

### ![[z-Assets/Paste image 1693554002377image.png|60]]1.6.1　数据类型 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f7e6a23b-25eb-2401)
- 是指一组性质相同的值的集合及定义在此集合上的一些操作的总称 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f407b94c-3358-3c1c)
- 按照值的不同进行划分的 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=06b6b30c-ccc8-9563)

### 1.6.2　抽象数据类型 (ADT) [📌](obsidian://jump-to-pdf?id=DHDS&annotate=b9dec4eb-7ec3-9dcb)
- 是指一个数学模型及定 义在该模型上的一组操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=e22ca056-840c-79c8)
    - “抽象”的意义在于数据类型的 数学抽象特性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=147947d0-5a5a-82c3)
    - 一个抽象数据类型定义了：一个数据对象、数据对象中各数据元素之间的关系及对数据元素的操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=bd6fa38b-86fb-6f08)
- 体现了程序设计中问题分解、抽象和信息隐藏的特性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=405b239b-55c6-ab18)