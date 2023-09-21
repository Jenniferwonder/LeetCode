---
Title: Algo Intro
Type: D
tags:
  - Algo
DateStarted: 2023-09-07
DateModified: 2023-09-12
status: 
mindmap-plugin: basic
---

# Algo Intro

## 2.4　算法定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=00e5df13-0858-bf98)

### 算法是描述解决问题的方法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=9a8488be-fdf3-f2e6)

### 算法是解决特定问题求解步骤的描述，在计算机中表现为指令 的有限序列，并且每条指令表示一个或多个操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=98205695-ebe2-e484)

## 2.5　算法的特性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f10c032a-75be-2f9d)

### 2.5.1　输入输出 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=2d688784-fbe0-8535)
- 此算法的输入可 以是零个。算法至少有一个或多个输出 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=2adceba3-d9ca-0425)

### 2.5.2　有穷性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f56207ec-ce21-e28f)

### 2.5.3　确定性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=eaaabd5e-d412-934a)

### 2.5.4　可行性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=c99e61bc-8f6a-e0f0)

## 2.6　算法设计的要求 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=677f6cc2-20fe-ab1b)

### 2.6.1　正确性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=9afcae48-8135-fc7e)

### 2.6.2　可读性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=c533f1c3-102d-7311)

### 2.6.3　健壮性 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=643b2d2e-0729-78e6)

### 2.6.4　时间效率高和存储量低 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=20c6b2c2-84b3-fae3)

## 2.7　算法效率的度量方法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=8987c769-1c33-06e7)

### 2.7.1　事后统计方法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=0a3572f0-b39d-fd7e)

### 2.7.2　事前分析估算方法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=b5eb4502-db6a-0648)

## 2.8　函数的渐近增长 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=4d30739a-295e-6d2b)

## ⭐2.9　算法时间复杂度 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=322c8b5f-0475-0344)

### 2.9.1　算法时间复杂度定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=272b35b1-2a4e-9be7)
- 表示随问题规模n 的增大，算法执行时间的增长率和f(n)的增长率相同 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=3381c434-6127-0aee)

### 2.9.2　推导大O阶方法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=568f8d47-ff93-ceb1)
- ![[1693563772552.png]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=124c41e2-6f60-e976)

### 2.9.3　常数阶 O(1) [📌](obsidian://jump-to-pdf?id=DHDS&annotate=6e8200f0-58c5-91df)
- 与问题的大小无关（n的多少），执行时间恒定的算法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=0e993e55-4c87-67b8)

### 2.9.4　线性阶 O(n) [📌](obsidian://jump-to-pdf?id=DHDS&annotate=0040da10-57aa-32fe)
- 单循环 O(1)

### 2.9.5　对数阶 O(logn) [📌](obsidian://jump-to-pdf?id=DHDS&annotate=8defdea2-bcc5-8537)
- 单循环中包含 `count = count * 2`

### 2.9.6　平方阶 O(n^2) [📌](obsidian://jump-to-pdf?id=DHDS&annotate=14143c11-d50b-0d70)
- 循环嵌套 O(1)

### 2.10　常见的时间复杂度 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=369b3ede-2c45-70f7)
- ![[1693560064778.png]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=7d6b6432-b4c8-e9f4)
- ![[1693560075885.png]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=55ad8947-50ca-612f)

## ⭐2.12　算法空间复杂度 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=b43ee08d-2dcd-cef7)

### 可以用空间来换取时间 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=947fcda4-ca67-1684)

### 当不用限定词地使用“复杂度”时，通常都是指时间复杂 度 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=1adff5a5-71b5-bf47)