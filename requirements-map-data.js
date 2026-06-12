window.FSY_REQUIREMENT_MAP = {
  "source": {
    "name": "飞书收粮系统需求计划表",
    "wiki": "https://congmingpay.feishu.cn/wiki/N5lyw9xVDiNw0gkJokTcgHzZnOd",
    "spreadsheetToken": "GwZNsIWXthkMfAtHY3Pc98Xcn8b",
    "sheetId": "7ONhrG",
    "generatedAt": "2026-06-11"
  },
  "modules": [
    {
      "name": "系统基础与测试",
      "items": [
        {
          "id": "REQ-001",
          "module": "系统基础与测试",
          "title": "丰收云测试账号配置",
          "description": "丰收云小程序测试与正式环境提供用于测试的登陆账号小程序体验版环境：10000000001/10000000002 验证码统一为：748365小程序正式环境：1881...",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-07",
          "end": "2026-04-07",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-002",
          "module": "系统基础与测试",
          "title": "短信模板申请",
          "description": "短信模版申请（目前是微邮付签名，看后面是否要更换）",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-07",
          "end": "2026-04-07",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        }
      ]
    },
    {
      "name": "首页、我的与用户体验",
      "items": [
        {
          "id": "REQ-003",
          "module": "首页、我的与用户体验",
          "title": "收购商自主开通农户（卖方）身份",
          "description": "能快捷让收购商快速开通农户身份",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-05-25",
          "end": "2026-06-02",
          "note": "开通卖方身份功能已做",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0602小功能 PRD",
              "href": "PRD-20260602-release-small-features.html"
            },
            {
              "label": "0602测试用例",
              "href": "TEST-20260602-release-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-004",
          "module": "首页、我的与用户体验",
          "title": "首页收购商待办/农户收款概览",
          "description": "首页待办卡片已做；农户端收款概览卡片已做，用于在首页快速查看待处理事项和收款相关概览信息。",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-05-25",
          "end": "2026-06-02",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0602小功能 PRD",
              "href": "PRD-20260602-release-small-features.html"
            },
            {
              "label": "0602测试用例",
              "href": "TEST-20260602-release-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-005",
          "module": "首页、我的与用户体验",
          "title": "版本切换/关怀版",
          "description": "支持不同字体大小的版本：标准版，关怀版",
          "owner": "潘恒",
          "status": "测试中",
          "start": "2026-04-18",
          "end": "2026-05-11",
          "note": "6月16日小功能PRD补充大字体关怀版切换验收口径。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0616小功能 PRD",
              "href": "PRD-20260616-release-small-features.html"
            },
            {
              "label": "长期PRD",
              "href": "PRD-收粮平台-可视化.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-006",
          "module": "首页、我的与用户体验",
          "title": "帮助中心/常见问题",
          "description": "在我的模块增加帮助中心或FAQ，记录常见问题、产品定义、操作指引，帮助用户快速上手",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "2026-04-18",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "长期PRD",
              "href": "PRD-收粮平台-可视化.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-007",
          "module": "首页、我的与用户体验",
          "title": "双身份登录默认端记忆",
          "description": "同一用户同时开通收购商和农户身份时，退出登录后再次登录应按照上一次退出所在身份的端进入，单身份用户保持现有登录逻辑。",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-05-25",
          "end": "2026-06-09",
          "note": "6月9日发版口径：记录退出时所在端，再次登录默认进入上次退出所在身份端。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0609小功能 PRD",
              "href": "PRD-20260609-release-small-features.html"
            },
            {
              "label": "0609测试用例",
              "href": "TEST-20260609-release-small-features.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://congmingpay.feishu.cn/wiki/RCXvwq44QiFrylkxHk8cesRgnne",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-008",
          "module": "首页、我的与用户体验",
          "title": "UI界面优化",
          "description": "UI界面样式调整，提升交互体验。",
          "owner": "潘恒",
          "status": "待评审",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "长期PRD",
              "href": "PRD-收粮平台-可视化.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-R010",
          "module": "首页、我的与用户体验",
          "title": "用户与隐私协议",
          "description": "小程序或h5端需要明确展示用户协议与隐私协议，建议放到我的模块单独入口",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-05-30",
          "end": "2026-06-04",
          "note": "关于模块已上线，可在我的模块查看版本号、用户协议和隐私协议。",
          "hasLocalDoc": true,
          "hasFeishuLink": false,
          "links": [
            {
              "label": "0604小功能 PRD",
              "href": "PRD-20260604-release-small-features.html"
            },
            {
              "label": "0604测试用例",
              "href": "TEST-20260604-release-small-features.html"
            }
          ]
        },
        {
          "id": "REQ-085",
          "module": "首页、我的与用户体验",
          "title": "收购商首页统计卡片与品类明细优化",
          "description": "首页下掉“农产品交易平台”；收购商首页顶部统计卡片在今日收购金额基础上补充本月、本年收购统计金额及笔数；下方品类明细去掉价值较低的今日页签，仅保留本月和本年；待办事项卡片做UI样式优化。",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "2026-06-06",
          "end": "2026-06-16",
          "note": "6月16日发版小功能PRD已补充：首页文案、统计卡片、品类明细与待办卡片UI优化。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0616小功能 PRD",
              "href": "PRD-20260616-release-small-features.html"
            },
            {
              "label": "飞书总览表",
              "href": "https://congmingpay.feishu.cn/wiki/N5lyw9xVDiNw0gkJokTcgHzZnOd",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "进件与农户建档",
      "items": [
        {
          "id": "REQ-009",
          "module": "进件与农户建档",
          "title": "农户支持对公账户",
          "description": "农户支持对公账户",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-18",
          "end": "2026-04-18",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "长期PRD",
              "href": "PRD-收粮平台-可视化.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-010",
          "module": "进件与农户建档",
          "title": "开户行与开户支行选择优化",
          "description": "开户行与开户支行选择优化（主要是农户建档的开户行与支行选择）",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-18",
          "end": "2026-06-02",
          "note": "【进行中】农户建档开户行/支行选择优化已在做，需继续跟进联动校验与页面体验",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0602小功能 PRD",
              "href": "PRD-20260602-release-small-features.html"
            },
            {
              "label": "0602测试用例",
              "href": "TEST-20260602-release-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-011",
          "module": "进件与农户建档",
          "title": "建档/结算卡/进件四要素校验",
          "description": "补齐付款人四要素校验、开户行/支行校验、他行卡校验，并统一建档、结算卡修改、进件、付款前校验口径",
          "owner": "潘恒",
          "status": "延期",
          "start": "2026-04-18",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-012",
          "module": "进件与农户建档",
          "title": "企微端H5进件优化（收购商进件优化）",
          "description": "账户管理上线后，收购商进件页银行卡信息非必填，仅填写主体基础信息、营业执照、法人/负责人等必要资料，优化交互流程",
          "owner": "潘恒",
          "status": "待排期",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-013",
          "module": "进件与农户建档",
          "title": "农户建档规则省级配置",
          "description": "按省配置农户是否必须邮储卡、是否支持他行卡、银行卡是否必填、是否允许后置补录",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-014",
          "module": "进件与农户建档",
          "title": "网点经理生成农户建档码",
          "description": "网点经理可在邮付管家或管理端生成农户建档码并发给农户，记录网点、客户经理和推广来源",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-015",
          "module": "进件与农户建档",
          "title": "网点经理查询/打印农户丰收码",
          "description": "网点经理可查询本网点农户丰收码，支持下载、打印、制作码牌，方便推广和线下使用",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-016",
          "module": "进件与农户建档",
          "title": "农户建档信息批量导入",
          "description": "支持批量提前导入农户建档信息，适配微邮付PC小工具、管理端、收购商端或移动端轻量导入场景——该需求，之前讨论我们不做农户的批量导入",
          "owner": "潘恒",
          "status": "暂时不做",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-017",
          "module": "进件与农户建档",
          "title": "农户建档地址定位",
          "description": "农户建档新增农户地址字段，支持地图选点定位并支持手动修改；农户个人信息页展示并支持修改地址。",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "2026-06-09",
          "note": "6月9日发版口径：本期收敛为农户地址字段，支持地图选点定位和手动修改；6月16日补充建档页“联系地址”改为“农户地址”的文案优化。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0616小功能 PRD",
              "href": "PRD-20260616-release-small-features.html"
            },
            {
              "label": "0609小功能 PRD",
              "href": "PRD-20260609-release-small-features.html"
            },
            {
              "label": "0609测试用例",
              "href": "TEST-20260609-release-small-features.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://congmingpay.feishu.cn/wiki/RCXvwq44QiFrylkxHk8cesRgnne",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-087",
          "module": "进件与农户建档",
          "title": "农户建档身份证号正则校验",
          "description": "农户建档页身份证号字段补充格式校验，录入身份证号时按居民身份证号码规则校验，格式不正确时拦截提交并提示用户修改。",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "2026-06-09",
          "end": "",
          "note": "小需求记录：飞书总表序号 86；仅补充校验规则，不单独输出PRD/测试用例；后续开发时需同步覆盖建档提交和编辑保存链路。",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求总表",
              "href": "https://congmingpay.feishu.cn/wiki/N5lyw9xVDiNw0gkJokTcgHzZnOd",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-018",
          "module": "进件与农户建档",
          "title": "进件/建档短信下发",
          "description": "进件或建档自动下发短信",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-019",
          "module": "进件与农户建档",
          "title": "进件四要素校验",
          "description": "进件校验四要素（仅邮储卡）",
          "owner": "潘恒",
          "status": "待确认",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-020",
          "module": "进件与农户建档",
          "title": "进件流程优化",
          "description": "进件流程优化，收购商进件、农户建档流程需要进一步简化，减少用户填写成本",
          "owner": "潘恒",
          "status": "待确认",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-021",
          "module": "进件与农户建档",
          "title": "机构主数据同步",
          "description": "机构主数据同步（31个省）",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-022",
          "module": "进件与农户建档",
          "title": "客户经理加入团队机构匹配",
          "description": "客户经理加入团队自动匹配机构",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-023",
          "module": "进件与农户建档",
          "title": "加入团队免审",
          "description": "加入团队免审（微邮付非作业省）",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-024",
          "module": "进件与农户建档",
          "title": "加入团队流程优化",
          "description": "加入团队流程优化，减少邀请码、审批等操作成本",
          "owner": "潘恒",
          "status": "暂时不做",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-025",
          "module": "进件与农户建档",
          "title": "非邮储卡提示说明优化",
          "description": "农户进件时，非邮储卡的提示说明需要清楚",
          "owner": "潘恒",
          "status": "待确认",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-026",
          "module": "进件与农户建档",
          "title": "农户先建档后补进件",
          "description": "农户建档，支持后进件收购商，先维护基础档案，后续再补充进件信息",
          "owner": "潘恒",
          "status": "暂时不做",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-027",
          "module": "进件与农户建档",
          "title": "H5进件成功页优化",
          "description": "优化H5进件成功页，明确后续操作路径",
          "owner": "潘恒",
          "status": "待确认",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-058",
          "module": "进件与农户建档",
          "title": "合作农户列表搜索",
          "description": "合作农户列表，支持姓名搜索",
          "owner": "潘恒",
          "status": "待评审",
          "start": "2026-04-23",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-059",
          "module": "进件与农户建档",
          "title": "农户建档OCR识别",
          "description": "农户建档OCR识别信息",
          "owner": "潘恒",
          "status": "待评审",
          "start": "2026-04-24",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-060",
          "module": "进件与农户建档",
          "title": "合作农户详情查看",
          "description": "合作农户页面支持下钻详情页查看具体农户的建档信息（脱敏后），方便查询农户四要素是否正确",
          "owner": "潘恒",
          "status": "待评审",
          "start": "2026-04-26",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "开单与品类管理",
      "items": [
        {
          "id": "REQ-028",
          "module": "开单与品类管理",
          "title": "快捷农户建档与二维码展示",
          "description": "支持开单时快捷农户建档，并优化建档完成后展示农户二维码，提升开单效率",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-05-07",
          "end": "2026-06-02",
          "note": "【已完成】农户建档后展示二维码功能已做",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0602小功能 PRD",
              "href": "PRD-20260602-release-small-features.html"
            },
            {
              "label": "0602测试用例",
              "href": "TEST-20260602-release-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-029",
          "module": "开单与品类管理",
          "title": "开单暂存/挂单能力",
          "description": "支持暂存开单信息，自动归属挂单、待开价、赊欠",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-20",
          "end": "2026-05-11",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期PRD",
              "href": "PRD-003-phase3-billing-upgrade.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-030",
          "module": "开单与品类管理",
          "title": "拍照留证",
          "description": "新增拍照留证功能，支持最多上传多张照片留存",
          "owner": "潘恒",
          "status": "延期",
          "start": "2026-04-20",
          "end": "2026-06-04",
          "note": "6月4日未上线，拍照留存功能先延期。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0604小功能 PRD",
              "href": "PRD-20260604-release-small-features.html"
            },
            {
              "label": "0604测试用例",
              "href": "TEST-20260604-release-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-031",
          "module": "开单与品类管理",
          "title": "开单配置与品类管理优化",
          "description": "开单配置改为收购商主体级配置，超管在“我的 > 开单配置”维护称重模式、计价方式、扣杂、拍照和入库仓库；业务员开单时自动使用当前生效配置。",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "2026-04-20",
          "end": "",
          "note": "V3方案：不再按二级品类配置，改为主体级单一生效配置；默认标准称重收购，内置模板只读可启用，自定义配置从空白创建；收购价不在开单配置中维护。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "开单配置 PRD",
              "href": "PRD-开单配置与品类管理优化.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/OIe0w3wV4iTA8SkFkhFcVljqnPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-032",
          "module": "开单与品类管理",
          "title": "开单费用项/装卸费管理费",
          "description": "开单支持管理费、卸车费、装卸费等附加费用项，可配置固定金额、费用方向、承担方，并在订单详情和对账中展示",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "2026-05-20",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-033",
          "module": "开单与品类管理",
          "title": "品类库管理",
          "description": "增加品类库管理，支持维护常用品类",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/OIe0w3wV4iTA8SkFkhFcVljqnPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-034",
          "module": "开单与品类管理",
          "title": "开单页品类展示优化",
          "description": "开单页品类优化展示改造",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/OIe0w3wV4iTA8SkFkhFcVljqnPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-035",
          "module": "开单与品类管理",
          "title": "开单称重字段补齐",
          "description": "开单页增加毛重、皮重、杂重、净重等称重信息",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/OIe0w3wV4iTA8SkFkhFcVljqnPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-036",
          "module": "开单与品类管理",
          "title": "选择合作农户付款",
          "description": "支持选择合作农户付款",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期PRD",
              "href": "PRD-003-phase3-billing-upgrade.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-037",
          "module": "开单与品类管理",
          "title": "开单商品明细录入",
          "description": "开单添加商品，完善商品明细录入能力",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期PRD",
              "href": "PRD-003-phase3-billing-upgrade.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/OIe0w3wV4iTA8SkFkhFcVljqnPf",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "订单管理",
      "items": [
        {
          "id": "REQ-038",
          "module": "订单管理",
          "title": "订单管理功能",
          "description": "新增订单管理功能，管理挂单、待开价、待付款、付款中、付款成功、已取消等订单",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-20",
          "end": "2026-05-11",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期PRD",
              "href": "PRD-003-phase3-billing-upgrade.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-039",
          "module": "订单管理",
          "title": "订单状态改造",
          "description": "订单状态改造（挂单、待开价、待付款、付款中、付款成功、已取消）",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-20",
          "end": "2026-05-11",
          "note": "当前信科那边觉得这些状态没有跟业务确认需要进一步核实确认",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期PRD",
              "href": "PRD-003-phase3-billing-upgrade.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-084",
          "module": "订单管理",
          "title": "处理中页签与支付失败原因展示",
          "description": "订单管理“付款中”大页签改为“处理中”；支付失败后业务状态仍为付款中，但在列表卡片和详情页展示上次失败原因。",
          "owner": "潘恒",
          "status": "延期",
          "start": "2026-06-06",
          "end": "2026-06-09",
          "note": "未随6月9日上线，后续随账户管理一起上线；不新增支付失败业务状态，只优化页签文案和失败原因展示。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0609小功能 PRD",
              "href": "PRD-20260609-release-small-features.html"
            },
            {
              "label": "0609测试用例",
              "href": "TEST-20260609-release-small-features.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://congmingpay.feishu.cn/wiki/RCXvwq44QiFrylkxHk8cesRgnne",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-040",
          "module": "订单管理",
          "title": "订单分阶段付款/定金尾款",
          "description": "一笔订单支持先付定金、后付尾款，展示订单总金额、已付金额、待付尾款、付款记录和状态流转",
          "owner": "潘恒",
          "status": "待评估",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-041",
          "module": "订单管理",
          "title": "合并付款（批量付款）",
          "description": "合并付款功能",
          "owner": "潘恒",
          "status": "开发中",
          "start": "2026-04-20",
          "end": "2026-05-30",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期PRD",
              "href": "PRD-003-phase3-billing-upgrade.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "支付与收付款",
      "items": [
        {
          "id": "REQ-043",
          "module": "支付与收付款",
          "title": "附言管理",
          "description": "支付默认内置附言+自定义附言",
          "owner": "潘恒",
          "status": "待评审",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-044",
          "module": "支付与收付款",
          "title": "移动端现金记账/现金支付+pc端收银台支持现金支付",
          "description": "移动端支付时支持选择现金支付，完成订单状态、支付方式、统计和对账闭环+pc端收银台增加现金支付，后续支付后的所有事项都由我们负责",
          "owner": "潘恒",
          "status": "开发中",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期PRD",
              "href": "PRD-003-phase3-billing-upgrade.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-045",
          "module": "支付与收付款",
          "title": "行业支付额度查询",
          "description": "行业支付要能查询额度",
          "owner": "潘恒",
          "status": "待评估",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-046",
          "module": "支付与收付款",
          "title": "订单付签约确认",
          "description": "订单付要能确认是否签约",
          "owner": "潘恒",
          "status": "待评估",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-047",
          "module": "支付与收付款",
          "title": "订单付支付流程优化",
          "description": "订单付支付流程优化，提升支付确认、支付结果展示和异常处理体验",
          "owner": "潘恒",
          "status": "暂时不做",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-082",
          "module": "支付与收付款",
          "title": "支付电子回执批量下载与移动端展示",
          "description": "PC端支持收购商在付款完成后批量下载银行电子回执，便于发给农户确认付款；移动端后续可考虑在订单详情、收款记录或消息通知中展示/预览银行电子回执。",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "",
          "end": "",
          "note": "PC端为主，移动端先记录后续方向；依赖银行侧返回交易流水号、订单回执、交易回执等信息",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/WtaywfK7WihxbqkMPbCczux1nPf",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "结算与账户管理",
      "items": [
        {
          "id": "REQ-048",
          "module": "结算与账户管理",
          "title": "结算卡信息修改",
          "description": "结算卡信息修改，当前仅农户端",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-28",
          "end": "2026-05-09",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期小迭代 PRD",
              "href": "PRD-003-phase3-live-small-features.html"
            },
            {
              "label": "三期测试用例",
              "href": "TEST-003-phase3-live-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-049",
          "module": "结算与账户管理",
          "title": "账户管理",
          "description": "当前支持收购商维护收付款银行卡，支持维护数币钱包",
          "owner": "潘恒",
          "status": "开发中",
          "start": "2026-04-18",
          "end": "",
          "note": "涉及到归属机构需要确认",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "账户管理 PRD",
              "href": "PRD-账户管理与多付款账户支付.html"
            },
            {
              "label": "账户管理测试",
              "href": "TEST-账户管理与多付款账户支付.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-083",
          "module": "结算与账户管理",
          "title": "农户结算卡支持公户修改",
          "description": "农户结算信息修改从仅支持个人户扩展为支持公户修改，公户仅允许修改对公账户名和账户卡号。",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-05-30",
          "end": "2026-06-09",
          "note": "6月9日发版口径：农户结算信息修改支持公户信息修改，个人户修改能力保持原已上线口径。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "0609小功能 PRD",
              "href": "PRD-20260609-release-small-features.html"
            },
            {
              "label": "0609测试用例",
              "href": "TEST-20260609-release-small-features.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://congmingpay.feishu.cn/wiki/RCXvwq44QiFrylkxHk8cesRgnne",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "数据同步",
      "items": [
        {
          "id": "REQ-051",
          "module": "数据同步",
          "title": "进件数据双向同步",
          "description": "进件数据（农户和收购商）双向同步，包括：新增，修改",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-14",
          "end": "2026-04-22",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-052",
          "module": "数据同步",
          "title": "农户建档数据同步至合作农户",
          "description": "农户建档数据双向同步至收购商的合作农户中。",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-23",
          "end": "2026-04-30",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-053",
          "module": "数据同步",
          "title": "支付状态同步优化",
          "description": "支付状态优化：需要明确各个支付状态的功能和边界，以及PC端和移动端支付同步，比如：PC端下订单，未支付，移动端可以同步看到，可以继续支付。",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-04-23",
          "end": "",
          "note": "待定",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-054",
          "module": "数据同步",
          "title": "PC订单商品明细同步",
          "description": "PC端订单同步到移动端时，订单详情补齐单个农产品明细：品类、毛重、皮重、扣杂/扣减、净重、单价、备注、订单金额",
          "owner": "潘恒",
          "status": "开发中",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-056",
          "module": "数据同步",
          "title": "订单数据双向同步",
          "description": "订单数据双向同步。——后续会优化为支付前有洛道负责，支付后我们来负责",
          "owner": "潘恒",
          "status": "暂时不做",
          "start": "2026-04-14",
          "end": "",
          "note": "目前最近进度：需要逐步将数据迁移到集团，需要考虑具体方案",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "客户与代付管理",
      "items": [
        {
          "id": "REQ-061",
          "module": "客户与代付管理",
          "title": "客户/代付人能力",
          "description": "新增客户功能（即：支持收购商选择代付人）",
          "owner": "潘恒",
          "status": "待评审",
          "start": "2026-04-18",
          "end": "2026-05-11",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "团队管理与扫码开单",
      "items": [
        {
          "id": "REQ-062",
          "module": "团队管理与扫码开单",
          "title": "团队管理",
          "description": "新增团队管理，支持新增业务员，查看团队列表，开单权限配置",
          "owner": "潘恒",
          "status": "测试中",
          "start": "2026-04-18",
          "end": "2026-05-11",
          "note": "",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期小迭代 PRD",
              "href": "PRD-003-phase3-live-small-features.html"
            },
            {
              "label": "三期测试用例",
              "href": "TEST-003-phase3-live-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-063",
          "module": "团队管理与扫码开单",
          "title": "团队订单数据权限与业务员归属",
          "description": "业务员只能查看自己开单订单，超管查看团队全部订单，订单详情展示业务员字段，扫码开单订单记录业务员归属",
          "owner": "潘恒",
          "status": "开发中",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc...",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期小迭代 PRD",
              "href": "PRD-003-phase3-live-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-064",
          "module": "团队管理与扫码开单",
          "title": "扫码开单微信绑定优化",
          "description": "扫码开单场景下，业务员使用老板手机号登录后可能将自己的微信OpenID绑定到老板账号，导致老板后续扫码登录提示已绑定、无法登录。后续可评估支持一个手机号绑定多个微信...",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "",
          "end": "",
          "note": "后续拆细方案：需评估多OpenID绑定规则、超管解绑能力、账号安全与操作留痕",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "三期小迭代 PRD",
              "href": "PRD-003-phase3-live-small-features.html"
            },
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/ZfvlwhFLWihUpZkekVwc4QQ8nPf",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "商户管理与注销",
      "items": [
        {
          "id": "REQ-065",
          "module": "商户管理与注销",
          "title": "商户注销工具",
          "description": "支持单个或批量注销商户，并同步丰收云、微邮付和PC端商户状态",
          "owner": "潘恒",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "详细文档：https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcec...",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-066",
          "module": "商户管理与注销",
          "title": "注销收购商或农户",
          "description": "需要看做到哪里，当前先在小程序这边加状态处理逻辑，做注销功能——微邮付问题处理",
          "owner": "潘恒",
          "status": "已上线",
          "start": "2026-05-11",
          "end": "",
          "note": "该功能目前每天都有不少要申请注销的，都只能手工操作，需要尽快评审排期",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-076",
          "module": "商户管理与注销",
          "title": "蓝牙电子秤直接称重",
          "description": "移动端在开单读秤场景内即时连接蓝牙电子秤，支持连接、主动断开、切换设备、稳定读数确认、多次称重明细和重量回填",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "",
          "end": "",
          "note": "V2评估版：不走重型设备管理，改为开单场景内即时连接；已连接设备可主动断开或切换。详细文档：https://congmingpay.feishu.cn/wiki/JZVgw86c3iPfqbkw8UFcksernPb",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "评审资料合集",
              "href": "PRD-蓝牙设备评审资料合集.html"
            },
            {
              "label": "即时连接PRD",
              "href": "PRD-蓝牙设备即时连接重构方案.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://congmingpay.feishu.cn/wiki/JZVgw86c3iPfqbkw8UFcksernPb",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-077",
          "module": "商户管理与注销",
          "title": "蓝牙打印小票",
          "description": "移动端在挂单、待开价、待付款、付款成功等场景内即时连接蓝牙打印机，支持连接、主动断开、切换设备、连接成功后继续打印当前小票；小票模板由PC后台统一配置",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "",
          "end": "",
          "note": "V2评估版：挂单、待开价、待付款、付款成功均可打印小票；开单暂存成功后可直接打印，已连接打印机可主动断开或切换；模板字段和打印规则由PC后台控制。详细文档：https://congmingpay.feishu.cn/wiki/JZVgw86c3iPfqbkw8UFcksernPb",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "评审资料合集",
              "href": "PRD-蓝牙设备评审资料合集.html"
            },
            {
              "label": "即时连接PRD",
              "href": "PRD-蓝牙设备即时连接重构方案.html"
            },
            {
              "label": "PC模板配置原型",
              "href": "pc-receipt-template-config.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://congmingpay.feishu.cn/wiki/JZVgw86c3iPfqbkw8UFcksernPb",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "登录",
      "items": [
        {
          "id": "REQ-073",
          "module": "登录",
          "title": "多端同时登录",
          "description": "支持同一个人多端可同时登录，而不会被挤掉，当前微信和App扫码是有自动登录机制，只要登录一次就可以自动登录了，但这个后面如果涉及到一个业务员多个团队，需要考虑这块的...",
          "owner": "",
          "status": "已上线",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-088",
          "module": "登录",
          "title": "丰收云小程序手机号登录合规整改",
          "description": "最终采用最小整改口径：保留原登录入口结构和双按钮样式，显性展示用户协议与隐私政策勾选，并在协议下方新增内部商户小程序说明。",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "2026-06-10",
          "end": "2026-06-16",
          "note": "微信预警整改：不开放游客模式，不开放自助注册；需在2026-06-16 14:46:17前完成整改提审。飞书总表序号 87。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "手机号合规整改 PRD",
              "href": "PRD-20260616-phone-compliance.html"
            },
            {
              "label": "手机号合规整改测试用例",
              "href": "TEST-20260616-phone-compliance.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://www.feishu.cn/wiki/P9ECw5hmxi1ntZkvjshcvuiznVb",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "扩展能力与待探索",
      "items": [
        {
          "id": "REQ-078",
          "module": "扩展能力与待探索",
          "title": "反向开票",
          "description": "考虑反向开票，参考支付宝。",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "2026-05-06",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-079",
          "module": "扩展能力与待探索",
          "title": "利润计算器",
          "description": "二道贩子提出想知道收的东西一转卖能知道赚了多少钱，这个之前吉林有提过，可以通过嵌入一个利润计算器的小工具来实现。",
          "owner": "",
          "status": "需求记录",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-080",
          "module": "扩展能力与待探索",
          "title": "进件审核",
          "description": "收购商进件审核问题。暂不进行审核，后续再说。（若后续有了审核，移动端也要能审核）",
          "owner": "",
          "status": "暂时不做",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-081",
          "module": "扩展能力与待探索",
          "title": "库存管理",
          "description": "移动端对接PC端库存管理：开单可选入库仓库并形成预入库，库存管理入口收口到我的模块，提供库存概览、库存台账、库存明细、农户存粮只读查询与汇总；仓库维护、调整、出库、盘点、存转销仍在PC端处理。",
          "owner": "",
          "status": "需求设计",
          "start": "",
          "end": "",
          "note": "入口放在我的 > 库存管理，仅超管和有权限账号可见；订单详情仅在订单信息区域展示入库仓库，不展示独立入库信息模块；首页展示库存概览和三Tab最近5条。库存台账不汇总、不下钻；库存明细支持汇总统计和非汇总详情弹层；农户存粮支持汇总展示、非汇总详情弹层和汇总分组明细。",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "库存管理移动端方案",
              "href": "PRD-库存管理移动端方案.html"
            },
            {
              "label": "飞书方案",
              "href": "https://www.feishu.cn/wiki/Ut74wR1pJiMcb7kZTUfcnLRrnTh",
              "external": true
            }
          ]
        }
      ]
    },
    {
      "name": "管理端与后台能力",
      "items": [
        {
          "id": "REQ-067",
          "module": "管理端与后台能力",
          "title": "收购商管理端查询",
          "description": "收购商管理（进件全部信息查询）",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-068",
          "module": "管理端与后台能力",
          "title": "农户档案管理端查询",
          "description": "农户档案管理（进件全部信息查询）",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-069",
          "module": "管理端与后台能力",
          "title": "PC端查询与导出",
          "description": "PC端也需要能查询与导出。",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-070",
          "module": "管理端与后台能力",
          "title": "报表分析",
          "description": "报表分析",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-071",
          "module": "管理端与后台能力",
          "title": "客户经理网点端修改/注销",
          "description": "客户经理网点端，支持修改和申请注销收购商或农户",
          "owner": "潘恒",
          "status": "需求记录",
          "start": "2026-04-18",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "飞书需求",
              "href": "https://congmingpay.feishu.cn/wiki/DN7RwgMx8i9pG4kvXcecENd9nOc",
              "external": true
            }
          ]
        },
        {
          "id": "REQ-072",
          "module": "管理端与后台能力",
          "title": "丰收云管理后台",
          "description": "PC端丰收云管理后台。",
          "owner": "",
          "status": "需求记录",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-074",
          "module": "管理端与后台能力",
          "title": "收购商PC管理后台",
          "description": "查询农户，订单、报表等信息，支持导出",
          "owner": "",
          "status": "需求记录",
          "start": "",
          "end": "",
          "note": "",
          "hasLocalDoc": false,
          "hasFeishuLink": false,
          "links": []
        },
        {
          "id": "REQ-086",
          "module": "管理端与后台能力",
          "title": "小票模板配置（PC后台）",
          "description": "PC后台统一维护过磅单、待开价小票、待付款确认单、付款成功小票的字段、纸张规格、默认份数、自动打印规则和模板预览，移动端按生效模板打印",
          "owner": "潘恒",
          "status": "需求设计",
          "start": "",
          "end": "",
          "note": "作为蓝牙打印小票的后台配置能力；移动端不编辑模板，只读取PC后台生效配置。详细文档：https://congmingpay.feishu.cn/wiki/JZVgw86c3iPfqbkw8UFcksernPb",
          "hasLocalDoc": true,
          "hasFeishuLink": true,
          "links": [
            {
              "label": "评审资料合集",
              "href": "PRD-蓝牙设备评审资料合集.html"
            },
            {
              "label": "PC模板配置原型",
              "href": "pc-receipt-template-config.html"
            },
            {
              "label": "即时连接PRD",
              "href": "PRD-蓝牙设备即时连接重构方案.html"
            },
            {
              "label": "飞书PRD",
              "href": "https://congmingpay.feishu.cn/wiki/JZVgw86c3iPfqbkw8UFcksernPb",
              "external": true
            }
          ]
        }
      ]
    }
  ]
};
