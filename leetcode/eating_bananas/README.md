Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.

- H 时间
- K K*H
- K min  1 吃不完
    20  H  就吃完了
    1 -> N(尝试)  20（Max）

1. 把香焦表达一下 数据结构 处理的数据 .length H
    [3, 6, 7, 11] H = 8  KMax = 11, KMin = 4
    [30, 11, 23, 4, 20]  H = 5  K = 30
2. Max  规则 Max(arr)
3. Max--  正好在H 小时内吃完
   小于 H  这个合适的K 就找到了
4. 怎么可以高效一点  二分查找


- JS数据类型
    基础数据整型 Numbr String Boolen Undefined Null Symbol
    复杂数据类型 Object
    [Array, Function, Math, Regexp, Date]
    Math.max()

- 	... spread 展开一个数组，多个参数
	... reset 收起

- koko 
    while(1 -> Math.max(...piles))
    每把香焦花的小时数之和
    piles => pile => Math.ceil(pile / low)

- 如何减少一些尝试
    1 -> max  二分查找