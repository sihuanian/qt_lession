运算
- 发的总金额等于收的总金额，不能多，不能少
- 每人至少要有一分钱
- 保证所有人抢到金额的机率相等

15/38
平行机会，抢的机会

10 个人  100元
10元  0.01 - 20元
抢钱是有先后的          0 - 剩余 随机
1       0 - 100       50元
2       0 - 50        25元
3       0 - 25        12.5元
不公平的  设计一个比较公平的随机算法

随机区间 = 数量 / 金额 * 2      发出去的总金额 = 总金额

- 数组存储已发出的金额
- Math.random() 