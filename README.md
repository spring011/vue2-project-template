# PC 端任务-聚能空间与 ERM

## pages 下页面与文件名对应表

### 达人商单

| 所属模块 | 角色 | 页面名称         | 文件名称         | 备注                  |
| -------- | ---- | ---------------- | ---------------- | --------------------- |
| 聚能空间 | 商户 | 商单/任务列表    | taskManage       | 商单/广场任务共享页面 |
| 聚能空间 | 商户 | 创建达人商单     | taskCreate       |                       |
| 聚能空间 | 商户 | 商单详情         | taskDetailInfo   |                       |
| 聚能空间 | 商户 | 商单履历         | taskLogHistory   |                       |
| 聚能空间 | 商户 | 商单接单名单     | taskUsers        |                       |
| 聚能空间 | 商户 | 商单任务完成名单 | taskCompleteList |                       |

### 商户创建广场任务

| 所属模块 | 角色 | 页面名称      | 文件名称              | 备注                  |
| -------- | ---- | ------------- | --------------------- | --------------------- |
| 聚能空间 | 商户 | 商单/任务列表 | taskManage            | 商单/广场任务共享页面 |
| 聚能空间 | 商户 | 创建广场任务  | taskPlazaCreate       |                       |
| 聚能空间 | 商户 | 任务详情      | taskPlazaDetailInfo   |                       |
| 聚能空间 | 商户 | 任务履历      | taskPlazaLogHistory   |                       |
| 聚能空间 | 商户 | 任务接单名单  | taskPlazaUsers        |                       |
| 聚能空间 | 商户 | 任务完成名单  | taskPlazaCompleteList |                       |

### 商户发票管理

| 所属模块 | 角色 | 页面名称 | 文件名称                     | 备注 |
| -------- | ---- | -------- | ---------------------------- | ---- |
| 聚能空间 | 商户 | 发票管理 | taskFinanceInvoiceManagement |      |
| 聚能空间 | 商户 | 上传发票 | taskFinanceUpload            |      |
| 聚能空间 | 商户 | 查看明细 | taskFinanceViewDetails       |      |

### 代理商管理

| 所属模块 | 角色   | 页面名称           | 文件名称        | 备注               |
| -------- | ------ | ------------------ | --------------- | ------------------ |
| 聚能空间 | 代理商 | 代理商管理达人商单 | agentManage     |                    |
| 聚能空间 | 代理商 | 操作履历           | agentLogHistory |                    |
| 聚能空间 | 代理商 | 接单状态           | agentStatus     |                    |
| 聚能空间 | 代理商 | 商单详情           | taskDetailInfo  | 与达人商单共用页面 |

### MCN

| 所属模块 | 角色 | 页面名称 | 文件名称                | 备注 |
| -------- | ---- | -------- | ----------------------- | ---- |
| 聚能空间 | MCN  | 商单邀约 | businessOrderManagement |      |
| 聚能空间 | MCN  | 商单管理 | businessOrderInvite     |      |
| 聚能空间 | MCN  | 分佣明细 | commissionDetail        |      |

### ERM 管理达人商单

| 所属模块 | 角色 | 页面名称     | 文件名称                      | 备注       |
| -------- | ---- | ------------ | ----------------------------- | ---------- |
| ERM      | 运营 | 商单列表     | taskAuditExpert               |            |
| ERM      | 运营 | 商单详情     | taskAuditExpertDetailInfo     |            |
| ERM      | 运营 | 商单履历     | taskAuditExpertLogHistory     |            |
| ERM      | 运营 | 商单接单名单 | taskAuditExpertUsers          |            |
| ERM      | 运营 | 商单完成名单 | taskAuditExpertCompleteList   |            |
| ERM      | 运营 | 商单评论     | taskAuditExpertComment        |            |
| ERM      | 运营 | 分账列表     | taskAuditExpertSubAccount     |            |
| ERM      | 运营 | 分账明细     | taskAuditSubAccountDetail     | 与任务共用 |
| ERM      | 运营 | 分账履历     | taskAuditSubAccountLogHistory | 与任务共用 |

### ERM 管理广场任务（包含 PC 端&app 端）

| 所属模块 | 角色 | 页面名称     | 文件名称                      | 备注 |
| -------- | ---- | ------------ | ----------------------------- | ---- |
| ERM      | 运营 | 任务列表     | taskAuditExpert               |      |
| ERM      | 运营 | 任务详情     | taskAuditDetailInfo           |      |
| ERM      | 运营 | 任务履历     | taskAuditLogHistory           |      |
| ERM      | 运营 | 任务接单名单 | taskAuditUsers                |      |
| ERM      | 运营 | 任务完成名单 | taskAuditCompleteList         |      |
| ERM      | 运营 | 任务评论     | taskAuditComment              |      |
| ERM      | 运营 | 分账列表     | taskAuditSubAccount           |      |
| ERM      | 运营 | 分账明细     | taskAuditSubAccountDetail     |      |
| ERM      | 运营 | 分账履历     | taskAuditSubAccountLogHistory |      |

### ERM 娱乐化后台

| 所属模块 | 角色 | 页面名称 | 文件名称             | 备注 |
| -------- | ---- | -------- | -------------------- | ---- |
| ERM      | 运营 | 支付明细 | taskAuditPayment     |      |
| ERM      | 运营 | 退款明细 | taskAuditRefund      |      |
| ERM      | 运营 | 发票管理 | taskAuditinvoice     |      |
| ERM      | 运营 | 查看明细 | taskAuditViewDetails |      |

### ERM 分账 (以下全部作废，需要确认后删除)

| 所属模块 | 角色 | 页面名称              | 文件名称                   | 备注 |
| -------- | ---- | --------------------- | -------------------------- | ---- |
| ERM      | 运营 | 任务分账列表          | taskAuditDimensionlist     |      |
| ERM      | 运营 | 任务分账明细          | taskAuditViewdetails       |      |
| ERM      | 运营 | 任务/商单履历         | taskAuditsplittingresume   |      |
| ERM      | 运营 | 商单分账列表          | taskAuditBusinessorder     |      |
| ERM      | 运营 | 商单分账明细          | taskAuditExpensdetails     |      |
| ERM      | 运营 | 任务/商单个人明细履历 | taskAuditPersonaldetails   |      |
| ERM      | 运营 | 任务/商单企业明细履历 | taskAuditEnterprisedetails |      |

## 页面跳转

### 聚能空间

对于聚能空间，分为新开窗口和当前窗口打开。一般详情页之类的展示页面需要新开窗口打开。

对于当前窗口可以直接使用`window.location.href = url;`的方式打开。

对于新开窗口跳转方式如下：

```javascript
// 第一步 引入对象
import IAMBridge from '@/utils/openTab.js';

// 第二步 调用接口打开页面
IAMBridge.openTab(url, `任务详情${item.taskNo}`);
```

其中，

- url 需要跳转的地址
- 标签名称 标签名称必须唯一，所以不要用如'详情'之类的名称。可以使用详情+id 这种

### ERM

erm 目前统一通过以下接口跳转

```javascript
// 引入对象
import { openUrl } from '@/utils/openUrl.js';

// 调用接口打开页面
openUrl(url, pageName);
```

其中，

- url 需要跳转的地址
- 标签名称 标签名称可以重复

## 本地开发与发布

npm install

1:开发 npm run dev
2:发版测试 npm run build:uat
3:发版线上 npm run build

---------页面从 erm 复制过来的流程

1 从其他页面拷贝 index.vue

2 拷贝原有页面,在 【目录名】.js 里 增加 import "widgets/importPublic.js" （可参考其他页面）
并把 引用的【目录名】.vue 改成 index.vue

3 修改 原有 html 里的 app 为 myapp (如果已经修改 ，忽略)
4 新增页面需要添加路由，（用于左侧菜单和 头部导航定位），路由参照 src/widgets/pagePath.js

----------页面新增流程

1、从其他页面拷贝
2、新增页面需要添加路由，（用于左侧菜单和 头部导航定位），路由参照 src/widgets/pagePath.js

---

如果要判断环境是否商家后台，请使用：
process.env.VUE_APP_PLATFORM == 'shop'

建议绑定 127.0.0.1 task.gomeuat.com.cn
这样就可以用开发环境访问测试环境的接口,而不会造成 localhost 跨域的问题
访问地址: task.gomeuat.com.cn/xxx.html

xxx 为 src/pages/下的文件夹名

css 样式（仅做参考）：

    input尺寸、button、table等 统一使用  size="small
    例外  查询、重置 等button要求视觉尺寸较大，使用 size="medium"，在原有el-button的基础上 增加20像素的右间距
    查询  蓝色   primary
    重置  橙色   warnning
    导出  绿色   success
    禁用  灰色   info
    查询条件盒子的 padding: 20px 15px
    行间距 为 margin-bottom:  15px

    列表 左对齐，产品有具体要求的例外
    分页 距离上一个元素  15或者16px

components 公共组件

utils 公共函数
formatDate 格式日期
getRequest 获取 url 参数
widgets 业务函数
commVar.js 可自己放入全局变量
pagePath.js 存放页面路由，（左侧菜单和导航栏，用于判断当前页面的地址）
