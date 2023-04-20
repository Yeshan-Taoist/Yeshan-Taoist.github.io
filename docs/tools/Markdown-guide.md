---
tags:
  - MarkDown
---

# Markdown 语法整理

> Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素：
> 专注于文字内容；
> 纯文本，易读易写，可以方便地纳入版本控制；
> 语法简单，没有什么学习成本，能在轻松码字的同时做出美观大方的排版。
> [Markdown 英文官方](https://www.markdownguide.org)<br>[Markdown 中文](https://markdown.com.cn/)

## 工具介绍

> 向只是将其用作文字编辑工作推荐本地编辑器
> 在线编辑器仅作为初次接触学习语法使用

### 在线编辑器

- [Markdown 中文在线编辑器](https://markdown.com.cn/editor/)

### 本地编辑器

- [Typora](https://www.typora.io/)
  - 支持 Windows 和 MAC OS
- [MarkdownPad](http://markdownpad.com/)
- [TEXTS](http://www.texts.io/)
  - 支持 Windows 和 MAC OS

## 基本语法-Basic Syntax

### 标题语法-Headings

- 一级标题 `# Heading level 1`
  - HTML `<h1>Heading level 1</h1>`
  - 效果
    <h1>Heading level 1</h1>
- 二级标题 `## Heading level 2`
  - HTML `<h2>Heading level 2</h2>`
  - 效果
    <h2>Heading level 2</h2>
- 三级标题 `### Heading level 3`
  - HTML `<h3>Heading level 3</h3>`
  - 效果
    <h3>Heading level 3</h3>
- 四级标题 `#### Heading level 4`
  - HTML `<h4>Heading level 4</h4>`
  - 效果
    <h4>Heading level 4</h4>
- 五级标题 `##### Heading level 5`
  - HTML `<h5>Heading level 5</h5>`
  - 效果
    <h5>Heading level 5</h5>
- 六级标题 `###### Heading level 6`
  - HTML `<h6>Heading level 6</h6>`
  - 效果
    <h6>Heading level 6</h6>

### 段落语法-Paragraphs

- 使用空白行将一行或多行文本进行分隔

- HTML

  ```html
  <p>
    有生之初，人各自私也，人各自利也。天下有公利而莫或兴之，有公害而莫或除之。有人者出，不以一己之利为利，而使天下受其利；不以一己之害为害，而使天下释其害。此其人之勤劳，必千万于天下之人。夫以千万倍之勤劳，则己又不享其利，必非天下之人情所欲居也。故古人之君，量而不欲入者，许由、务光是也；入而又去之者，尧、舜是也；初不欲入而不得去者，禹是也。岂古之人有所异哉？好逸恶劳，亦犹夫人之情也。
  </p>
  <p>
    后之为人君者不然。以为天下利害之权皆出于我，我以天下之利尽归于己，以天下之害尽归于人，亦无不可。使天下之人不敢自私，不敢自利，以我之大私为天下之公。始而惭焉，久而安焉，视天下为莫大之产业，传之子孙，受享无穷。汉高帝所谓“某业所就，孰与仲多”者，其逐利之情，不觉溢之于辞矣。
  </p>
  ```

- 有生之初，人各自私也，人各自利也。天下有公利而莫或兴之，有公害而莫或除之。有人者出，不以一己之利为利，而使天下受其利；不以一己之害为害，而使天下释其害。此其人之勤劳，必千万于天下之人。夫以千万倍之勤劳，则己又不享其利，必非天下之人情所欲居也。故古人之君，量而不欲入者，许由、务光是也；入而又去之者，尧、舜是也；初不欲入而不得去者，禹是也。岂古之人有所异哉？好逸恶劳，亦犹夫人之情也。
  后之为人君者不然。以为天下利害之权皆出于我，我以天下之利尽归于己，以天下之害尽归于人，亦无不可。使天下之人不敢自私，不敢自利，以我之大私为天下之公。始而惭焉，久而安焉，视天下为莫大之产业，传之子孙，受享无穷。汉高帝所谓“某业所就，孰与仲多”者，其逐利之情，不觉溢之于辞矣。

- **_段落语法不要用空格 (spaces) 或制表符 (tabs) 缩进段落_**

### 换行语法-Line Breaks

- 在一行的末尾添加两个或多个空格，然后按回车键，即可创建一个换行 (<br>)。
- 或者直接使用 HTML 的`<br>`标签

### 强调语法-Emphasis

#### 加粗-Bold

- 加粗英文文本或短语
  - 在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）
    - 加粗英文单词或短语
      - `I just love **bold text**.`
        - I just love **bold text**.
      - `I just love __bold text__.`
        - I just love **bold text**.
    - 加粗英文单词中的单个或多个字母，这里为了保持兼容性只能使用星号 (\*)
      - `I just love b**o**ld t**ex**t.`
        - I just love b**o**ld t**ex**t.
      - `I just love b**o**ld t__ex__t.`
        - I just love b**o**ld t**ex**t.
        - 结果未生效，为保持语法兼容性不推荐使用下划线 (\_)
- 加粗中文文本或短语
  - 在汉字或短语的前后各添加两个星号（asterisks）或下划线（underscores）
    - 加粗中文汉字或短语
      - `我只喜欢**加粗文本**.`
        - 我只喜欢**加粗文本**.
      - `我只喜欢 __加粗文本__.`
        - 我只喜欢 **加粗文本**.
        - 经过实践**下划线语法**要生效必须在开始的**下划线**前面加上**空格**
    - 经过实践，中文强调时亦不推荐使用**下划线 (\_) 语法**.

#### 斜体-Italic

- 要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）
  - `世间万物总是有其一定的*运行规律*去遵循`
    - 世间万物总是有其一定的*运行规律*去遵循
  - `世间万物总是有其一定的_运行规律_去遵循`
    - 世间万物总是有其一定的*运行规律*去遵循
  - `Everything in the world always has its own *operating law* to follow`
    - Everything in the world always has its own _operating law_ to follow
  - `Everything in the world always has its own _operating law_ to follow`
    - Everything in the world always has its own _operating law_ to follow
  - `lo*v*e`
    - lo*v*e
  - `lo_v_e`
    - lo_v_e
  - `lo _v_ e`
    - lo _v_ e
  - **以上可以看出斜体的最佳实践为使用星号 (asterisk)**

### 引用语法-Blockquotes

#### 用法

- **要创建块引用，需要在引用的段落前添加`<`符号**

  - `> 若时间能重回，我愿时光为失意人倒流一回`
    - > 若时间能重回，我愿时光为失意人倒流一回

- **块引用可以包含多个段落。为段落之间的空白行添加一个`>`符号**

  - 写法

    ```HTML
    > 若时间能重回，我愿时光为失意人倒流一回
    >
    > 若时间能重回，我愿时光为失意人倒流一回
    ```

  - 效果
    > 若时间能重回，我愿时光为失意人倒流一回
    >
    > 若时间能重回，我愿时光为失意人倒流一回

- **嵌套块引用：在要嵌套的段落前添加一个`>>`符号**

  - 写法

    ```HTML
    > 若时间能重回，我愿时光为失意人倒流一回
    >> 若时间能重回，我愿时光为失意人倒流一回
    ```

  - 效果

    > 若时间能重回，我愿时光为失意人倒流一回
    >
    > > 若时间能重回，我愿时光为失意人倒流一回

- **块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效**
  - 写法
    ```HTML
    > #### The quarterly results look great!
    >
    > - Revenue was off the chart.
    > - Profits were higher than ever.
    >
    >  *Everything* is going according to **plan**.
    ```
  - 效果
    > #### The quarterly results look great!
    >
    > - Revenue was off the chart.
    > - Profits were higher than ever.
    >
    > _Everything_ is going according to **plan**.

### 列表语法-Lists

> 可以将多个条目组织成有序或无序列表
> 缩进一个或多个列表项可以创建嵌套列表

#### 有序列表-Ordered Lists

> 要创建有序列表，需要在每个项目 (item) 前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是应当以数字 1 为起始

- 代码

  ```HTML
  - 你喜欢的水果
    1. 苹果
    2. 草莓
    3. 香蕉
       1. 有时候喜欢
       2. 有时候不喜欢
    4. 桃子
  ```

- 效果
  - 你喜欢的水果
    1. 苹果
    2. 草莓
    3. 香蕉
       1. 有时候喜欢
       2. 有时候不喜欢
    4. 桃子

#### 无序列表-Unordered Lists

> 要创建无序列表，需要在每个项目 (item) 前添加破折号 (-) 或星号 (\*)

- 代码

  ```HTML
  - 你的爱好
    - 平常喜欢读什么书
      - 《平凡的世界》
      - 《三国演义》
      - 《红楼梦》
    - 喜欢的体育运动
      - 足球
      - 羽毛球
    - 常做的户外运动
      - 爬山
  ```

- 效果

  - 你的爱好
    - 平常喜欢读什么书
      - 《平凡的世界》
      - 《三国演义》
      - 《红楼梦》
    - 喜欢的体育运动
      - 足球
      - 羽毛球
    - 常做的户外运动
      - 爬山

### 代码语法-Code

- 要将单词或短语表示为代码，需要将其包裹在反引号 (`) 中
  - 代码 `` At the command prompt,type `nano`. ``
  - 效果 At the command prompt,type `nano`.
- 表示为代码的单词或短语中包含一个或多个反引号，需要将其包裹在双反引号 (``) 中
  - 代码
    ```html
    `` At the command prompt,type `nano`. ``
    ```
  - 效果 `` At the command prompt,type `nano`. ``
- 要创建代码块，需要在代码块之前和之后的行添加三个反引号 (```)
  > 该方法为围栏代码块，为保证有效和安全性，建议使用围栏代码块
  > 首行三个反引号 (`) 后面紧跟语言代码，可高亮语法
  - 代码
    ```HTML
        <html>
          <head>
          </head>
          <body>
            <div><em>Hello World</em></div>
          </body>
        </html>
    ```

### 分割线语法-Horizontal Rules

> 要创建分隔线，需要在单独一行上使用三个或多个星号 (**\*)，并且不能包含其他内容，**为了兼容性前后添加空白行

- 代码

  ```html
  ***
  ```

- 效果

  ***

### 链接语法-Links

#### 基本语法：[超链接显示名](超链接地址 "超链接 title")

- 代码

  ```html
  这是一个链接 [MarkDown 语法](https://markdown.com.cn "最好的 MarkDown 教程")
  ```

- 效果
  这是一个链接 [MarkDown 语法](https://markdown.com.cn "最好的 MarkDown 教程")

#### 网址和 Email 地址

- 使用建好号可以很方便地把 URL 或者 email 地址变成可点击的链接
  ```HTML
    <https://markdown.com.cn>
    <fake@example.com>
  ```
- 效果
  <https://markdown.com.cn>
  <fake@example.com>

#### 可以对链接进行格式化

- 加粗
  - 代码 `**[百度一下，就知道](www.baidu.com)**`
  - 效果 **[百度一下，就知道](https://www.baidu.com)**
- 斜体
  - 代码 `*[百度一下，就知道](www.baidu.com)*`
  - 效果 _[百度一下，就知道](https://www.baidu.com)_
- 代码
  - 代码 `` [`百度一下，就知道`](www.baidu.com) ``
  - 效果 [`百度一下，就知道`](https://www.baidu.com)

#### 引用类型链接

> 引用类型链接分为两部分：与文本保持内联的部分以及存储在文档其他位置的部分，以使文本易于阅读

- 链接的第一部分格式
  - 使用两个中括号进行格式设置
    1. 第一组中括号包围应显示为链接的文本
    2. 第二组中括号显示了一个标签，该标签用于指向您存储在文档其他位置的链接
    3. 尽管没有必要，但在两个中括号中间插入一个空格，结构上看起来更美观
  - 代码
    - `[百度一下][1]`
    - `[hobbit-hole] [2]`
  - 效果
    - [百度一下][1]
    - [Bing][2]
- 链接的第二部分格式
  - 引用类型链接的第二部分使用以下属性设置格式：
    1. 放在括号中的标签，其后紧跟一个冒号和至少一个空格（例如 [label]:）
    2. 链接的 URL，可以选择将其括在尖括号中
    3. 链接的可选标题，可以将其括在双引号，单引号或括号中
  - 代码
    - `[1]: www.baidu.com "百度一下，就知道"`
    - `[2]: <www.baidu.com> 百度一下，就知道`
  - 效果 (**这里什么原因看不见？**)
    - [1]: https://www.baidu.com "百度一下，就知道"
    - [2]: https://www.Bing.com "Bing"

### 图片语法-Images

> 要添加图像，使用感叹号 (!), 然后在中括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本

- 图片展示，代码及效果
  - `![图片 alt](图片链接 "图片 title")`
  - ![这是图片](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080 "Magic Gardens")
- 图片链接，代码及效果
  - 代码
    - `[![兰州小西湖图片](https://youimg1.c-ctrip.com/target/100p1f000001gpgsq931A.jpg)](https://youimg1.c-ctrip.com/target/100p1f000001gpgsq931A.jpg)`
  - 效果
    - [![兰州小西湖图片](https://youimg1.c-ctrip.com/target/100p1f000001gpgsq931A.jpg)](https://youimg1.c-ctrip.com/target/100p1f000001gpgsq931A.jpg)

### 转义字符语法-Escaping Characters

> 要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 ( \ )
> 代码：`\* Without the backslash, this would be a bullet in an unordered list.`
> 效果：\* Without the backslash, this would be a bullet in an unordered list.

#### 可做转义的字符

| Character |    Name     | Character |     Name     | Character |       Name       |
| :-------: | :---------: | :-------: | :----------: | :-------: | :--------------: |
|    \\     |  backslash  |    \`     |   backtick   |    \*     |     asterisk     |
|    \_     | underscore  |   \{\}    | curly braces |   \[\]    |     brackets     |
|   \(\)    | parentheses |    \#     |  pound sign  |    \+     |    plus sign     |
|    \-     | minus sign  |    \.     |     dot      |    \!     | exclamation mark |
|    \|     |    pipe     |

#### 特殊字符自动转义

> 在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `& `。 `<` 符号用于起始标签，`&`符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 `&lt;` 和 `&amp;`

& 符号其实很容易让写作网页文件的人感到困扰，如果你要打「AT&T」 ，你必须要写成「AT&amp;T」 ，还得转换网址内的 & 符号，如果你要链接到：

```HTML
  http://images.google.com/images?num=30&q=larry+bird
```

你必须要把网址转成：

```HTML
  http://images.google.com/images?num=30&amp;q=larry+bird
```

才能放到链接标签的 href 属性里。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

### 内嵌 HTML 标签

> 边实践边使用

#### 行级內联标签

> HTML 的行级內联标签如 `<span>、<cite>、<del>` 不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。

> HTML 行级內联标签和区块标签不同，在內联标签的范围内， Markdown 的语法是可以解析的。

#### 区块标签

> 区块元素 ── 比如 `<div>、<table>、<pre>、<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些元素的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。

## 扩展语法-Extended-Syntax

> 这里只记录部分通用的扩展语法，不同的 MarkDown 编辑器对扩展语法支持程度不同

### 表格-Tables

#### 基础用法

> 要添加表，请使用三个或多个连字符（---）创建每列的标题，并使用管道（|）分隔每列

- 代码示例
  ```
  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  |Paragraph | Text |
  ```
- 渲染效果
  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |

#### 对齐

> 以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心

- 代码示例
  ```
  | 姓名 | 性别 |家乡|
  | :----------- | :-----------: |---:|
  | `陈陈陈陈陈陈大哥` | 男 |甘肃|
  | **张三** | \--------男&#124;&#124;\| |河南|
  | *李四* | 男 |安徽、---------|
  ```
- 渲染效果
  | 姓名 | 性别 |家乡|
  | :----------- | :-----------: |---:|
  | `陈陈陈陈陈陈大哥` | 男 |甘肃|
  | **张三** | \--------男&#124;&#124; \||河南|
  | _李四_ | 男 |安徽---------|

#### 格式化表格中的文字

> 可以在表格中设置文本格式。例如，您可以添加链接，代码（仅反引号（`）中的单词或短语，而不是代码块）和强调

#### 在表中转义管道字符

> 可以使用表格的 HTML 字符代码（&#124;）在表中显示竖线（|）字符
> 也可以用`\|`方式转义，同样有效

### 围栏代码块-Fenced Code Blocks

> 具体看代码块介绍

> 这里举例链接向标题 id,[标题编号](#custom-id)

### 脚注-Footnotes

- 代码示例

  ```HTML
  Here's a simple footnote,[^1] and here's a longer one.[^bignote]
  <br><br><br><br>
  [^1]: This is the first footnote.
  [^bignote]: Here's one with multiple paragraphs and code.
  Indent paragraphs to include them in the footnote.
  `{ my code }`
  Add as many paragraphs as you like.
  ```

- 渲染效果
  Here's a simple footnote,[^1] and here's a longer one.[^bignote]
  <br><br><br><br>
  [^1]: This is the first footnote.
  [^bignote]:Here's one with multiple paragraphs and code.
  Indent paragraphs to include them in the footnote.
  `{ my code }`
  Add as many paragraphs as you like.

### 标题编号-Heading IDs {#custom-id}

- 代码示例
  ```HTML
    ### My Great Heading {#custom-id}
  ```

### 定义列表-Definition Lists

> 要创建定义列表，在第一行上键入术语。在下一行，键入一个冒号，后跟一个空格和定义

- 代码示例

  ```json

  First Term
    : This is the definition of the first term.

  Second Term
    : This is one definition of the second term.
    : This is another definition of the second
  term.
  ```

- 渲染效果

  First Term
  : This is the definition of the first term.

  Second Term
  : This is one definition of the second term.
  : This is another definition of the second
  term.

### 删除线-Strikethrough

> 在单词前后使用两个波浪号~~

- 代码示例
  ```html
  ~~世界是平坦的。~~ 我们现在知道世界是圆的。
  ```
- 渲染效果
  ~~世界是平坦的。~~ 我们现在知道世界是圆的。

### 任务列表语法-Task Lists

> 创建任务列表，在任务列表项之前添加破折号-和方括号 [ ] （方括号中有空格），并在 [ ] 前面加上空格。要选择一个复选框，在方括号 [x] 之间添加 x

- 代码示例

  ```
  `- [x]` Write the press release
  `- [ ]` Update the website
  `- [ ]` Contact the media
  ```

- 渲染效果
  - [x] Write the press release
  - [ ] Update the website
  - [ ] Contact the media

### 使用 Emoji 表情-Emoji

> 有两种方法可以将表情符号添加到 Markdown 文件中：将表情符号复制并粘贴到 Markdown 格式的文本中，或者键入 emoji shortcodes

#### 复制和粘贴表情符号

> 从[Emojipedia](https://emojipedia.org/) 等来源复制表情符号并将其粘贴到文档中

#### 使用表情符号简码

> 一些 Markdown 应用程序允许通过键入表情符号短代码来插入表情符号。这些以冒号开头和结尾，并包含表情符号的名称

- 代码示例

  ```html
  去露营了！ :tent: 很快回来。 真好笑！ :joy:
  ```

- 渲染效果
  去露营了！ :tent: 很快回来。 真好笑！ :joy:

### 高亮-Highlight

> To highlight words, use two equal signs (==) before and after the words

- 代码示例

  ```html
  I need to highlight these ==very important words==.
  ```

- 渲染效果
  I need to highlight these ==very important words==.

### 下标-Subscript

> To create a subscript, use one tilde symbol (~) before and after the characters.

- 代码示例
  ```html
  - 二氧化碳 CO~2~ - 水分子 H~2~O
  ```
- 渲染效果
  - 二氧化碳 CO~2~
  - 水分子 H~2~O

### 上标-Superscript

> To create a superscript, use one caret symbol (^) before and after the characters

- 代码示例
  ```html
  - 平方 x^2^ - 立方 y^3^
  ```
- 渲染效果
  - 平方 x^2^
  - 立方 y^3^
