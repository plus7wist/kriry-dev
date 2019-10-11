exports.book_c = (title) => {
    return [
        '',
	{
            title: '编程基础',
            collapsable: true,
            children: [
            '编程基础/start',
	        '编程基础/计算机系统结构',
            '编程基础/动态库',
            '编程基础/动态库的使用',
            '编程基础/动态库升级成框架案例',
	        '编程基础/共享库',
	        '编程基础/宏定义',
	        '编程基础/静态库',
	        '编程基础/接口的封装和设计',
            ]
    },
	'初探C语言/C语言初探',
	{
            title: '数据类型和运算符',
            collapsable: true,
            children: [
            '数据类型和运算符/start',
	        '数据类型和运算符/关键字',
            '数据类型和运算符/数据类型',
            '数据类型和运算符/变量和常量',
            '数据类型和运算符/void类型',
	    '数据类型和运算符/宽窄字符',
	    '数据类型和运算符/强制类型转换',
	    '数据类型和运算符/浮点数的存储原理',
	    '数据类型和运算符/数据存储的原理',
	    '数据类型和运算符/位运算',
	    '数据类型和运算符/运算符与表达式',
	    '数据类型和运算符/printf函数',
	    '数据类型和运算符/scanf函数'
            ]
        },
	{
            title: '结构化程序设计',
            collapsable: true,
            children: [
            '结构化程序设计/语句和逻辑结构',
	    '结构化程序设计/流程控制',
            '结构化程序设计/顺序结构',
            '结构化程序设计/if分支',
            '结构化程序设计/switch多分支',
	    '结构化程序设计/while循环',
	    '结构化程序设计/for循环',
	    '结构化程序设计/break关键字',
	    '结构化程序设计/continue关键字',
	    '结构化程序设计/goto关键字',
	    '结构化程序设计/递归'
            ]
        },
	{
            title: '函数',
            collapsable: true,
            children: [
            '函数/函数',
	    '函数/函数指针',
	    '函数/库函数'
            ]
        },
	{
            title: '数组',
            collapsable: true,
            children: [
            '数组/start',
	        '数组/数组',
	        '数组/数组与指针.md',
	        '数组/二维数组',
	        '数组/动态数组'
            ]
        },
        {
            title: '字符串',
            collapsable: true,
            children: [
            '字符串/字符串',
	        '字符串/封装字符串',
	        '字符串/字符串函数'
            ]
        },
        {
            title: '结构体和共用体',
            collapsable: true,
            children: [
            '结构体和共用体/结构体',
	        '结构体和共用体/union',
            '结构体和共用体/字符串函数',
            '结构体和共用体/container_of宏',
            '结构体和共用体/offsetof宏'
            ]
        },
        {
            title: '指针',
            collapsable: true,
            children: [
            '指针/理解C语言指针的概念',
	        '指针/指针',
            '指针/指针地址与取值运算符',
            '指针/指针的本质',
            '指针/野指针和空指针',
            '指针/void指针',
            '指针/指针的强制类型转换',
            '指针/玩转多级指针',
            '指针/指针与数组',
            '指针/指针与函数',
            '指针/指针与字符串',
            '指针/函数接口的传入参数与传出参数',
            '指针/回调函数',
            '指针/征服指针',
            '指针/指针与内存',
            '指针/指针知识体系搭建-1',
            '指针/指针知识体系搭建-2',
            '指针/句柄handle',
            '指针/指针的应用场景'
            ]
        },
        {
            title: '文件操作',
            collapsable: true,
            children: [
            '文件操作/文件',
	        '文件操作/文件加密',
	        '文件操作/配置文件读写'
            ]
        },
        {
            title: '网络编程',
            collapsable: true,
            children: [
            '网络编程/网络套接字编程',
	        '网络编程/Socket编程',
	        '网络编程/网络编程'
            ]
        },
        {
            title: '面向对象',
            collapsable: true,
            children: [
            '面向对象/面向对象编程',
	        '面向对象/封装与继承',
            '面向对象/继承详解',
            '面向对象/虚函数与多态',
            '面向对象/面向接口编程',
            '面向对象/单链表实现',
            '面向对象/配置文件解析'
            ]
        },
        {
            title: 'C语言与汇编',
            collapsable: true,
            children: [
            'C语言与汇编/汇编语言',
	        'C语言与汇编/C语言与汇编之计算机结构',
            'C语言与汇编/C语言与汇编之用汇编写一个Helloword',
            'C语言与汇编之寄存器和寻址方式',
            'C语言与汇编之函数调用的本质'
            ]
        },
        {
            title: 'C语言与内存',
            collapsable: true,
            children: [
            'C语言与内存/内存结构',
	        'C语言与内存/C语言与内存',
            'C语言与内存/运算符标签操作',
            'C语言与内存/C语言指针',
            'C语言与内存/多级指针',
            'C语言与内存/volatile与typedef',
            'C语言与内存/C语言数组',
            'C语言与内存/结构体字节对齐',
            'C语言与内存/内存分布思想',
            'C语言与内存/只读空间',
            'C语言与内存/内存分布之数据段',
            'C语言与内存/内存分布之堆空间'
            ]
        }
    ]
}
