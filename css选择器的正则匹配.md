## css样式的匹配规则：

| 选择器               | 例子                  | 描述                                            | 优先级 |
| :------------------- | :-------------------- | ----------------------------------------------- | ------ |
| .class               | .intro                | 应用于class="intro"的所有标签                   |        |
| #id                  | #firstname            | 应用于id="firstname"的标签                      |        |
| *                    | *                     | 通配符，应用于所有标签                          |        |
| element              | p                     | 应用于所有的p标签                               | 低     |
| element1,element2    | div,p                 | 应用于所有的div和p标签                          |        |
| element1 element2    | div p                 | 应用于div标签内部的所有p标签                    | 低     |
| element1>element2    | div > p               | 应用于父标签为div的所有p标签                    | 高     |
| element + element2   | div + p               | 应用于紧接在div后面的p标签                      | 较高   |
| [attribute]          | [target]              | 应用于带有target属性的标签                      | 高     |
| [attribute=value]    | [target=_blank]       | 应用于***带有***target=_blank属性的标签         | 高     |
| [attribute~=value]   | [title~=flower]       | 应用于title属性中***包含***单词flower的所有标签 | 高     |
| [attribute\|=value]  | [lang\|=en]           | 应用于lang属性中以en***开头***的所有标签        | 高     |
| :link                | a:link                | 应用于所有**未被访问**的链接                    |        |
| :visited             | a:visited             | 应用于所有**已经访问过**的链接                  |        |
| :active              | a:active              | 应用于所有**活动**链接                          |        |
| :hover               | a:hover               | 应用于所有光标**位于其上**的链接                |        |
| :focus               | a:focus               | 应用于所有**获得焦点**的链接                    |        |
| :first-letter        | p:first-letter        | 应用于所有p标签的首字母                         |        |
| :first-line          | p:first-line          | 应用于所有p标签的第一行                         |        |
| :first-child         | p:first-child         | 应用于所有不在同一层级下的第一个p标签           |        |
| :before              | p:before              | 在每个p标签的内容之前插入内容                   |        |
| :after               | p:after               | 在每个p标签的内容之后插入内容                   |        |
| :lang(language)      | p:lang(it)            | 应用于带有以it开头的lang属性值的每个p标签       |        |
| :element1~element2   | p~ul                  | 应用于前面带有p标签的ul标签                     |        |
| [attribute^=value]   | a[src^="http"]        | 应用于src属性值以https开头的所有a标签           |        |
| [attribute$=value]   | a[src$=".pdf"]        | 应用于src属性值以.pdf结尾的所有a标签            |        |
| [attribute*=value]   | a[src*="abc"]         | 应用于src属性值中包含abc子串的每个a元素         |        |
| :first-of-type       | p:first-of-type       | 应用于所有层级下的第一个p标签                   |        |
| :last-of-type        | p:last-of-type        | 应用于所有层级下的最后一个p标签                 |        |
| :only-child          | p:only-child          | 应用于不同层级下的父标签的所有子标签p           |        |
| :nth-child(n)        | p:nth-child(2)        | 应用于父标签下的第二个p标签                     |        |
| :nth-last-child(n)   | p:nth-last-child(2)   | 从最后一个开始计数                              |        |
| :nth-of-type(n)      | p:nth-of-type(2)      |                                                 |        |
| :nth-of-last-type(n) | p:nth-of-last-type(2) |                                                 |        |
| :last-child          | p:last-child          |                                                 |        |
| :root                | :root                 | 应用于文档的根标签                              |        |
| :empty               | p:empty               | 应用于没有子标签的p标签                         |        |
| :target              | #news:target          | 应用于当前活动的#news标签                       |        |
| :enabled             | input:enabled         | 应用于当前启用的input标签                       |        |
| :disabled            | input:disabled        | 应用于当前禁用的input标签                       |        |
| :checked             | input:checked         | 应用于当前被选中的input标签                     |        |
| :not(selector)       | :not(p)               | 应用于p标签之外的所有标签                       |        |
| ::selection          | ::selection           | 应用于被用户选取的标签部分                      |        |

