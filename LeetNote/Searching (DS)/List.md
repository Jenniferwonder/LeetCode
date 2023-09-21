---
Title: List
Type: D
tags:
  - List
DateStarted: 2023-09-07
DateModified: 2023-09-12
status: 
mindmap-plugin: basic
aliases:
  - 线性表
---

# List (线性表) ![[1693573540387.png]]![[1693628790889.png|100]]

## 概念

### 3.2　线性表的定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=71946dbe-b715-918b)
- 是一种数据项构成的**有限**序列，即按照一定的**线性**顺序，排列而成的数据项 的集合 [📌](obsidian://jump-to-pdf?id=LC-array&annotate=08a6ba04-7342-07a8)
<!--SR:!2023-09-13,3,250!2023-09-13,3,250-->

### 3.3　线性表的抽象数据类型 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=838f4a51-f62d-3771)

### 3.4　线性表的顺序存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=71589955-4e57-a3cd)
- 3.4.1　顺序存储定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=06755542-b712-897b)
- 3.4.2　顺序存储方式 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=20a2615c-9ca3-396d)
- 3.4.3　数组 (Array) 长度与线性表长度区别 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=9e95df2c-e8da-718d)
- 3.4.4　地址计算方法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=5f3dc5bb-9f31-173a)
- 3.5　顺序存储结构的插入与删除 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=a94739c2-3cb4-1564)
    - 3.5.1　获得元素操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=5d1d3dea-69b9-2393)
    - 3.5.2　插入操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=fe4c2009-1369-6e33)
    - 3.5.3　删除操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=3b7330cb-5c24-537a)
    - 3.5.4　线性表顺序存储结构的优缺点 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=5c79c782-e47f-a3bf)

### 3.6　线性表的链式存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=b690bc90-a1ea-7a25)
- 3.6.1　顺序存储结构不足的解决办法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=dfbbf455-63d8-80dd)
- 3.6.2　线性表链式存储结构定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=35564dc8-5d29-796a)
- 3.6.3　头指针与头结点的异同 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=ac43a396-1e38-bb2e)
- 3.6.4　线性表链式存储结构代码描述 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=6cf1d0a5-0886-086d)

## ==[[Array]]==

### 数组会用一些名为 **索引** 的数字来标识每项数据在数组中的位置 [📌](obsidian://jump-to-pdf?id=LC-array&annotate=a2a476bb-7bd7-10cf)
<!--SR:!2023-09-13,3,250-->

### 操作
- 读
    - O(1)
- 增
- 删
    - O(n)
- 查
    - O(n)

## ==链表 ([[Linked List]])==

### ==单链表==
- 3.7　单链表的读取 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=e286fcd3-c6ee-9b6e)
- 3.8　单链表的插入与删除 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=8adfd090-74cd-0180)
    - 3.8.1　单链表的插入 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=a5999233-40f6-825c)
    - 3.8.2　单链表的删除 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=3759bac2-7f9e-dbdc)
- 3.9　单链表的整表创建 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=023ae99b-5445-ffe4)
- 3.10　单链表的整表删除 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=43005c54-b81e-d814)
- 3.11　单链表结构与顺序存储结构优缺点 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=2e00105c-afe9-c46a)

### 3.12　==静态链表== [📌](obsidian://jump-to-pdf?id=DHDS&annotate=ad6dac42-eac3-1140)
- 3.12.1　静态链表的插入操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=733fc34f-032b-2e9e)
- 3.12.2　静态链表的删除操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=47ef5736-3378-0df2)
- 3.12.3　静态链表优缺点 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f4c4471b-6467-3c90)

### 3.13　==循环链表== [📌](obsidian://jump-to-pdf?id=DHDS&annotate=31e2b64d-a0f5-c2cc)

### 3.14　==双向链表== [📌](obsidian://jump-to-pdf?id=DHDS&annotate=7cc1f0ed-223e-ee72)

## [[Stack and Queue]]

### ==Stack (栈)==
- 4.2　栈的定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=63e1c5b7-e07e-ead8)
    - 后进先出 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=e8401aab-598c-08e9)
    - 案例
        - 撤销
        - 返回上级页面
    - ![[1693574753074.png|150]] ![[1693574770147.png|150]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=5f7d4460-2d9c-bf27)
    - 4.2.2　进栈出栈变化形式 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=9e7a24c8-6b11-10a4)
        - ![[1693574945553.png]] [📌](obsidian://jump-to-pdf?id=DHDS&annotate=db160dd7-949a-bccb)
        - 3个元素，就有5种可能的出栈次序， 如果元素数量多，其实出栈的变化将会更多 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=b50d08bc-3206-a7c5)
- 4.3　栈的抽象数据类型 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=7cf20f9f-bbb6-0ef7)
- 4.4　栈的顺序存储结构及实现 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=1c2c41b5-0c01-c02a)
    - 4.4.1　栈的顺序存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=e6997365-fb00-75bb)
    - 4.4.2　栈的顺序存储结构 ——进栈操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=857573a5-0136-9021)
    - 4.4.3　栈的顺序存储结构 ——出栈 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=529320e6-8454-85bb)
- 4.5　两栈共享空间 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=c169cc62-fcae-04d8)
- 4.6　栈的链式存储结构及实现 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=2daacb91-e9d9-448d)
    - 4.6.1　栈的链式存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=78d901c8-65be-6d26)
    - 4.6.2　栈的链式存储结构 ——进栈操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=4831dec1-12c0-9249)
    - 4.6.3　栈的链式存储结构 ——出栈操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=24be4079-dd9f-d9d3)
- 4.7　栈的作用 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=234df949-841a-9b79)
- 4.8　栈的应用 ——***递归*** [📌](obsidian://jump-to-pdf?id=DHDS&annotate=72a136db-57d6-4925)
    - 4.8.1　斐波那契数列实现 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=4c352462-33d8-2c35)
    - 4.8.2　递归定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f9af6ce7-d1d4-2be5)
- 4.9　栈的应用 ——四则运算表达式求值 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=b27620b2-b5f2-bb0f)
    - 4.9.1　后缀（逆波兰）表示法定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=510c79dd-1523-971a)
    - 4.9.2　后缀表达式计算结果 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=0a11dcbc-8dfc-50f6)
    - 4.9.3　中缀表达式转后缀表达式 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=4efbdca0-f133-2f1a)
<!--SR:!2023-09-13,3,250-->

### ==Queue (队列)==
- 4.10　队列的定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=bc66c32b-e9d8-9267)
    - 先进先出（First In First Out） [📌](obsidian://jump-to-pdf?id=DHDS&annotate=2b906e52-267e-d005)
    - 案例
        - 键盘输入打字 > 屏幕显示
- 4.11　队列的抽象数据类型 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=42de5f75-00c4-3f82)
- 4.12　循环队列 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f8352200-a1dc-b369)
    - 4.12.1　队列顺序存储的不足 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=15c6bd53-4d4d-f39f)
    - 4.12.2　循环队列定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=c1494ed7-f3df-a344)
- 4.13　队列的链式存储结构及实现 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=fc7812f5-39ae-bd45)
    - 4.13.1　队列的链式存储结构 ——入队操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=398cd0a4-02b0-0b8e)
    - 4.13.2　队列的链式存储结构 ——出队操作 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=4d2b3582-4b00-6fdc)

## ==[[String]] (串)==

### 5.2　串的定义 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=aa712695-e167-d6d6)
- 是由零个或多个字符组成的有限序列，又名叫字符串 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=ada59bad-4cb7-3ec8)
- 空格串 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=9680b46e-31ab-3e59)
- 子串 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=aff99902-b531-a986)
- 主串 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=6703314d-b615-b0c8)

### 5.3　串的比较 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=d7ed0743-922c-a8e1)

### 5.4　串的抽象数据类型 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=67ad79c4-1cef-0f0f)

### 5.5　串的存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=cf8cae61-0450-6689)
- 5.5.1　串的顺序存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=bac2ae79-bd36-0d48)
- 5.5.2　串的链式存储结构 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=93a12549-7bc2-d4af)

### 5.6　朴素的模式匹配算法 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=50f7e4d2-cce9-61ef)

### 5.7　***KMP模式匹配算法*** [📌](obsidian://jump-to-pdf?id=DHDS&annotate=d6fdce97-9de0-2890)
- 5.7.1　KMP模式匹配算法原理 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=d39833dd-cbbd-7063)
- 5.7.2　next数组值推导 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=9dafb086-88f5-d427)
- 5.7.3　KMP模式匹配算法实现 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=7c0408d9-86ff-1683)
- 5.7.4　KMP模式匹配算法改进 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=85020357-647b-49fd)
- 5.7.5　nextval数组值推导 [📌](obsidian://jump-to-pdf?id=DHDS&annotate=f05a2e0f-473e-21ef)
<!--SR:!2023-09-13,3,250-->