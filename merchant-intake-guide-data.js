(function () {
  function page(config) {
    return config;
  }

  const personalSharedIntro = page({
    title: "开户类型与政策信息",
    subtitle: "先确认开户政策、默认费率和商户类型，个人商户无需再选择结算类型。",
    image: "../Docs/不同类型商户进件截图/个人商户/微信图片_20260416192208_307_210.jpg",
    annotations: [
      {
        id: "policy",
        title: "开户政策",
        desc: "默认选择“粮站进件专用政策”，无需选择",
        tags: ["默认项"],
        x: 65,
        y: 18,
        noteTop: 10
      },
      {
        id: "fee-rate",
        title: "微信 / 支付宝 / 云闪付费率",
        desc: "三项费率均为政策默认值，无需填写",
        tags: ["默认项", "无需填写"],
        x: 63,
        y: 37,
        noteTop: 28
      },
      {
        id: "merchant-type",
        title: "商户类型",
        desc: "根据有无营业执照判断，没有则选择个人",
        tags: ["必填项"],
        x: 62,
        y: 61,
        noteTop: 47
      },
      // {
      //   id: "settlement-tip",
      //   title: "结算类型说明",
      //   desc: "个人商户默认走个人账户结算，本类型不需要再选择对公、对法人或对非法人。",
      //   tags: ["本类型差异"],
      //   x: 60,
      //   y: 79,
      //   noteTop: 66
      // }
    ]
  });

  const enterpriseSharedIntro = function (folder, settleDesc) {
    return page({
      title: "开户类型与政策信息",
      subtitle: "企业 / 个体工商户类型需要额外确认结算方式，结算类型决定后续资料模块。",
      image: `../Docs/不同类型商户进件截图/${folder}/微信图片_20260416192208_307_210.jpg`,
      annotations: [
        {
          id: "policy",
          title: "开户政策",
          desc: "默认选择“粮站进件专用政策”，无需选择",
          tags: ["默认项"],
          x: 65,
          y: 18,
          noteTop: 10
        },
        {
          id: "fee-rate",
          title: "微信 / 支付宝 / 云闪付费率",
          desc: "三项费率均为政策默认值，无需填写",
          tags: ["默认项"],
          x: 63,
          y: 37,
          noteTop: 28
        },
        {
          id: "merchant-type",
          title: "商户类型",
          desc: "根据有无营业执照判断，有则选择个体工商户或企业",
          tags: ["必填项"],
          x: 62,
          y: 61,
          noteTop: 47
        },
        {
          id: "settlement-type",
          title: "结算类型",
          desc: settleDesc,
          tags: ["必填项"],
          x: 60,
          y: 79,
          noteTop: 66
        }
      ]
    });
  };

  const sharedMerchantInfoAnnotations = [
    {
      id: "merchant-name",
      title: "商户名称",
      desc: "填写收购商主体名称，建议与实际经营主体保持一致。",
      tags: ["必填项"],
      x: 60,
      y: 16,
      noteTop: 10
    },
    {
      id: "merchant-short",
      title: "商户简称",
      desc: "收购商简称",
      tags: ["必填项"],
      x: 59,
      y: 29,
      noteTop: 27
    },
    {
      id: "business-range",
      title: "经营范围",
      desc: "选择“商业服务-农业合作”即可。",
      tags: ["必填项"],
      x: 58,
      y: 44,
      noteTop: 44
    },
    {
      id: "city-address",
      title: "城市信息与详细地址",
      desc: "先选择城市信息，再通过地图或详细地址补充到门牌号，确保定位准确。",
      tags: ["必填项"],
      x: 58,
      y: 61,
      noteTop: 61
    },
    {
      id: "shop-photos",
      title: "店面照片",
      desc: "上传落地门头照、商户收银台、商户店内场景等实际经营环境照片，用于核验经营场地。根据实际情况上场三种场景照即可",
      tags: ["必填项", "三张场景照"],
      x: 34,
      y: 83,
      noteTop: 79
    }
  ];

  const data = {
    title: "收购商进件类型填写说明",
    subtitle: "基于四类商户进件截图与《收购商进件说明.xlsx》整理，用于客户经理、产品、研发和测试的统一培训与规则对齐。",
    sourceNote: "内容来源：不同类型商户进件截图 + 收购商进件说明.xlsx",
    updatedAt: "2026-04-16",
    usageTip: "阅读方式：先切换商户类型，再按截图页顺序查看。左侧编号点和右侧说明一一对应，点击任一说明可高亮对应截图位置。",
    types: [
      {
        id: "personal",
        label: "个人商户",
        accent: "#16a34a",
        merchantType: "个人商户",
        settlementType: "个人账户",
        pageCount: 4,
        focusModules: ["开户类型与政策", "商户信息", "店面照片", "结算信息", "结算银行信息"],
        keyPoints: [
          "个人商户没有结算类型分支，默认走个人账户。",
          "重点填写结算人信息和结算银行卡信息。",
          "银行卡号要求为邮储银行卡，银行名称、支行名称、支行联号为默认值。"
        ],
        differences: [
          "不需要营业执照、开户许可证、法人信息和负责人信息。",
          "需要单独上传结算人身份证相关资料，并补齐结算人证件有效期。",
          "客服电话、备注信息属于非必填字段，可按需补充。"
        ],
        pages: [
          personalSharedIntro,
          page({
            title: "商户信息与店面照片",
            subtitle: "这一页聚焦主体名称、经营范围、地址与经营场景照片，是四类商户的通用基础页。",
            image: "../Docs/不同类型商户进件截图/个人商户/微信图片_20260416192208_308_210.jpg",
            annotations: sharedMerchantInfoAnnotations
          }),
          page({
            title: "结算信息",
            subtitle: "个人商户没有法人模块，直接进入结算人身份信息采集。",
            image: "../Docs/不同类型商户进件截图/个人商户/微信图片_20260416192209_309_210.jpg",
            annotations: [
              {
                id: "settle-id-photos",
                title: "结算人身份证照片",
                desc: "上传身份证人像面、国徽面及手持身份证照片（可重复上传身份证人像面），上传后自动回填信息。",
                tags: ["图片上传", "结算人资料"],
                x: 33,
                y: 15,
                noteTop: 10
              },
              {
                id: "settle-name",
                title: "结算人姓名",
                desc: "OCR 自动识别回填，需核实并允许手动修正。",
                tags: ["OCR回填", "必填项"],
                x: 60,
                y: 42,
                noteTop: 28
              },
              {
                id: "settle-phone",
                title: "结算人电话",
                desc: "人工输入结算人手机号，作为系统登陆的唯一凭证",
                tags: ["必填项"],
                x: 60,
                y: 56,
                noteTop: 46
              },
              {
                id: "settle-cert",
                title: "结算人证件类型与证件号码",
                desc: "OCR 自动识别回填，需核实并允许手动修正。",
                tags: ["OCR回填", "必填项"],
                x: 61,
                y: 72,
                noteTop: 64
              },
              {
                id: "settle-cert-date",
                title: "证件有效期",
                desc: "OCR 自动识别回填，需核实并允许手动修正。",
                tags: ["OCR回填", "必填项"],
                x: 58,
                y: 89,
                noteTop: 82
              }
            ]
          }),
          page({
            title: "结算银行信息与补充项",
            subtitle: "补齐结算人证件有效期后，继续填写结算银行卡信息和非必填补充项。",
            image: "../Docs/不同类型商户进件截图/个人商户/微信图片_20260416192210_310_210.jpg",
            annotations: [
              {
                id: "settle-cert-tail",
                title: "结算人证件有效期补充",
                desc: "自动识别回填，需核实并允许手动修正。",
                tags:  ["OCR回填", "必填项"],
                x: 60,
                y: 10,
                noteTop: 8
              },
              {
                id: "bank-photo",
                title: "银行卡卡号面",
                desc: "上传银行卡正面照片，银行卡号会通过 OCR 自动识别并回填，核实并允许手动修正。",
                tags:  ["OCR回填", "必填项"],
                x: 31,
                y: 28,
                noteTop: 24
              },
              {
                id: "bank-defaults",
                title: "银行名称 / 支行名称 / 支行联号",
                desc: "这三项为默认值，不用填写或改动，保留系统默认即可。",
                tags: ["默认值"],
                x: 60,
                y: 54,
                noteTop: 44
              },
              {
                id: "bank-no",
                title: "银行卡号",
                desc: "必须是邮储银行卡，自动识别并回填，核实并允许手动修正。",
                tags: ["必填项", "邮储银行卡"],
                x: 60,
                y: 77,
                noteTop: 64
              },
              {
                id: "service-remark",
                title: "客服电话与备注信息",
                desc: "客服电话、备注信息都属于非必填字段，通常可留空，仅在业务需要时补充。",
                tags: ["非必填"],
                x: 58,
                y: 94,
                noteTop: 82
              }
            ]
          })
        ]
      },
      {
        id: "public",
        label: "企业对公",
        accent: "#0f766e",
        merchantType: "企业商户 / 个体工商户",
        settlementType: "企业对公账户",
        pageCount: 6,
        focusModules: ["开户类型与政策", "商户信息", "店面照片", "营业信息", "法人信息", "结算银行信息", "负责人信息"],
        keyPoints: [
          "企业 / 个体工商户类型需要额外选择结算类型，本页对应“对公账户”。",
          "从营业信息开始，需要连续补齐营业执照、开户许可证、法人信息与银行信息。",
          "特殊资质、客服电话、备注信息都属于非必填模块。"
        ],
        differences: [
          "相比个人商户，新增营业信息、法人信息、负责人信息三个主体模块。",
          "本类型重点在企业主体信息与对公结算资料，不需要非法人到账授权书。",
          "负责人信息默认回填法人信息，可按需调整。"
        ],
        pages: [
          enterpriseSharedIntro(
            "企业-对公",
            "当前类型需要选择“对公”。只有企业或个体工商户才会出现该项，后续资料按照企业对公账户准备。"
          ),
          page({
            title: "商户信息与店面照片",
            subtitle: "企业对公类型的第二页与其他企业类型一致，先采集主体基础信息与经营场景。",
            image: "../Docs/不同类型商户进件截图/企业-对公/微信图片_20260416192211_311_210.jpg",
            annotations: sharedMerchantInfoAnnotations
          }),
          page({
            title: "营业信息与法人信息（上）",
            subtitle: "从这一页开始进入企业主体资料采集，先上传营业执照，再进入法人身份证照片。",
            image: "../Docs/不同类型商户进件截图/企业-对公/微信图片_20260416192211_312_210.jpg",
            annotations: [
              {
                id: "license-photo",
                title: "营业执照与开户许可证",
                desc: "营业执照正面必须上传；开户许可证如无法提供，允许继续上传营业执照完成进件。",
                tags: ["企业必填", "图片上传"],
                x: 33,
                y: 17,
                noteTop: 10
              },
              {
                id: "license-no",
                title: "营业执照号",
                desc: "营业执照号支持 OCR 自动识别回填，录入时需再次核实，可按实际情况修改。",
                tags: ["OCR回填"],
                x: 58,
                y: 39,
                noteTop: 28
              },
              {
                id: "license-date",
                title: "执照有效期",
                desc: "OCR 自动识别回填，包括执照起始日期、是否长期执照、执照到期日期，三项都需要结合证照信息核对。",
                tags: ["OCR回填"],
                x: 58,
                y: 60,
                noteTop: 48
              },
              {
                id: "legal-id-photo",
                title: "法人身份证照片",
                desc: "上传身份证人像面和国徽面， OCR 自动识别回填。",
                tags: ["必填项", "图片上传"],
                x: 35,
                y: 85,
                noteTop: 70
              }
            ]
          }),
          page({
            title: "法人信息（下）与结算银行信息（上）",
            subtitle: "继续补全法人信息，再进入企业结算银行信息模块。",
            image: "../Docs/不同类型商户进件截图/企业-对公/微信图片_20260416192212_313_210.jpg",
            annotations: [
              {
                id: "legal-name-phone",
                title: "法人姓名与法人电话",
                desc: "OCR 自动回填后核对；法人电话需要人工录入手机号。",
                tags: ["必填项", "手动填写"],
                x: 59,
                y: 20,
                noteTop: 10
              },
              {
                id: "legal-cert",
                title: "法人证件类型与证件号码",
                desc: "OCR 自动识别回填，核实并允许手动修正。",
                tags: ["OCR回填"],
                x: 59,
                y: 43,
                noteTop: 31
              },
              {
                id: "legal-cert-date",
                title: "法人证件有效期",
                desc: "OCR 自动识别回填，核实并允许手动修正。",
                tags: ["OCR回填", "日期项"],
                x: 58,
                y: 68,
                noteTop: 54
              },
              // {
              //   id: "bank-start",
              //   title: "结算银行信息入口",
              //   desc: "截图下方开始进入结算银行信息，对公类型需继续核对银行影像和结算账号信息。",
              //   tags: ["下一模块"],
              //   x: 40,
              //   y: 88,
              //   noteTop: 77
              // }
            ]
          }),
          page({
            title: "结算银行信息、特殊资质与负责人信息（上）",
            subtitle: "本页承接银行信息，并继续补充特殊资质和负责人信息。",
            image: "../Docs/不同类型商户进件截图/企业-对公/微信图片_20260416192213_314_210.jpg",
            annotations: [
              {
                id: "bank-photo",
                title: "结算银行",
                desc: "上传银行卡正面照，ocr自动识别回填",
                tags: ["图片上传", "必填项"],
                x: 31,
                y: 15,
                noteTop: 10
              },
              {
                id: "bank-defaults",
                title: "银行名称 / 支行名称 / 支行联号",
                desc: "截图中的银行名称、支行名称、支行联号为系统默认值，无需改动。",
                tags: ["默认值"],
                x: 60,
                y: 39,
                noteTop: 28
              },
              {
                id: "bank-no",
                title: "结算账号 / 银行卡号",
                desc: " OCR 自动识别回填，核实并允许手动修正。",
                tags: ["必填项"],
                x: 59,
                y: 61,
                noteTop: 49
              },
              {
                id: "qualification",
                title: "特殊资质",
                desc: "特殊资质照片非必填项，不用填写",
                tags: ["非必填"],
                x: 31,
                y: 80,
                noteTop: 69
              },
              {
                id: "manager-start",
                title: "负责人信息入口",
                desc: "负责人信息默认回填法人信息，可按需调整，务必确认负责人手机号作为系统登陆唯一凭证",
                tags: ["必填项"],
                x: 30,
                y: 92,
                noteTop: 84
              }
            ]
          }),
          page({
            title: "负责人信息与补充项",
            subtitle: "最后一页主要完成负责人信息，并补充客服电话与备注信息。",
            image: "../Docs/不同类型商户进件截图/企业-对公/微信图片_20260416192214_315_210.jpg",
            annotations: [
              {
                id: "manager-info",
                title: "负责人信息",
                desc: "负责人姓名、负责人电话、身份证号默认回填法人信息；如业务人员另有负责人，可按实际调整。",
                tags: ["默认回填", "可调整"],
                x: 58,
                y: 28,
                noteTop: 15
              },
              {
                id: "service-phone",
                title: "客服电话",
                desc: "客服电话为非必填项，仅在需要对外展示服务电话时补充。",
                tags: ["非必填"],
                x: 58,
                y: 70,
                noteTop: 48
              },
              {
                id: "remark",
                title: "备注信息",
                desc: "备注信息同样属于非必填字段，可留空；通常用于记录特殊说明。",
                tags: ["非必填"],
                x: 58,
                y: 86,
                noteTop: 72
              }
              // {
              //   id: "submit",
              //   title: "保存 / 提交",
              //   desc: "所有字段核对完成后点击底部保存。内部培训时可将此页视为整套资料的收尾页。",
              //   tags: ["收尾操作"],
              //   x: 52,
              //   y: 96,
              //   noteTop: 88
              // }
            ]
          })
        ]
      },
      {
        id: "legal",
        label: "企业对法人",
        accent: "#c2410c",
        merchantType: "企业商户 / 个体工商户",
        settlementType: "个人账户（企业法人）",
        pageCount: 6,
        focusModules: ["开户类型与政策", "商户信息", "店面照片", "营业信息", "法人信息", "结算银行信息", "负责人信息"],
        keyPoints: [
          "对法人场景的主体资料与企业对公高度一致，差异主要体现在结算账户归属为企业法人个人账户。",
          "营业信息、法人信息仍然都要完整采集，不因为结算到个人而减少企业主体资料。",
          "负责人信息默认回填法人信息，客服电话、备注信息仍为非必填。"
        ],
        differences: [
          "相较企业对公，本类型的结算逻辑是法人个人账户，不是企业对公账户。",
          "不需要非法人到账授权书，因为结算账户归属于法人本人。",
          "其余营业信息、法人信息、负责人信息模块与企业类通用。"
        ],
        pages: [
          enterpriseSharedIntro(
            "企业-对法人",
            "当前类型需要选择“对法人”，即结算到企业法人的个人账户。后续仍需采集完整企业主体资料。"
          ),
          page({
            title: "商户信息与店面照片",
            subtitle: "这一页与企业对公基本一致，先采集主体信息与经营场景。",
            image: "../Docs/不同类型商户进件截图/企业-对法人/微信图片_20260416192215_316_210.jpg",
            annotations: sharedMerchantInfoAnnotations
          }),
          page({
            title: "营业信息与法人信息（上）",
            subtitle: "对法人场景同样从营业执照开始，再进入法人身份证照片采集。",
            image: "../Docs/不同类型商户进件截图/企业-对法人/微信图片_20260416192215_317_210.jpg",
            annotations: [
              {
                id: "license-photo",
                title: "营业执照",
                desc: "营业执照正面为企业类必填资料。对法人场景同样需要先完成营业执照上传与识别。",
                tags: ["企业必填", "图片上传"],
                x: 31,
                y: 16,
                noteTop: 10
              },
              {
                id: "license-no",
                title: "营业执照号",
                desc: "营业执照号依旧由 OCR 回填并允许修改，复核证照内容。",
                tags: ["OCR回填"],
                x: 58,
                y: 39,
                noteTop: 30
              },
              {
                id: "license-date",
                title: "执照有效期",
                desc: "OCR回填并核实，确保与营业执照一致。",
                tags: ["OCR回填"],
                x: 58,
                y: 61,
                noteTop: 51
              },
              {
                id: "legal-id-photo",
                title: "法人身份证照片",
                desc: "上传身份证人像面和国徽面，ocr识别法人信息。",
                tags: ["法人资料"],
                x: 35,
                y: 85,
                noteTop: 73
              }
            ]
          }),
          page({
            title: "法人信息（下）与结算银行信息（上）",
            subtitle: "继续完成法人信息，并开始进入结算银行信息模块。",
            image: "../Docs/不同类型商户进件截图/企业-对法人/微信图片_20260416192216_318_210.jpg",
            annotations: [
              {
                id: "legal-name-phone",
                title: "法人姓名与法人电话",
                desc: "法人姓名由 OCR 回填后核验，法人电话需手工录入，用于联系与身份确认。",
                tags: ["手动填写"],
                x: 58,
                y: 19,
                noteTop: 11
              },
              {
                id: "legal-cert",
                title: "法人证件类型与证件号码",
                desc: "ocr识别法人证件类型与证件号码，并允许修改。",
                tags: ["OCR回填"],
                x: 58,
                y: 43,
                noteTop: 34
              },
              {
                id: "legal-date",
                title: "法人证件有效期",
                desc: "ocr识别法人证件有效期，并允许修改。",
                tags: ["日期项"],
                x: 58,
                y: 68,
                noteTop: 57
              }
              // {
              //   id: "bank-start",
              //   title: "结算银行信息入口",
              //   desc: "本页底部开始进入结算银行信息；对法人场景下，这里承接法人个人账户的结算信息。",
              //   tags: ["本类型差异"],
              //   x: 38,
              //   y: 90,
              //   noteTop: 80
              // }
            ]
          }),
          page({
            title: "结算银行信息、特殊资质与负责人信息（上）",
            subtitle: "本页核心差异在于：结算银行信息对应企业法人个人账户。",
            image: "../Docs/不同类型商户进件截图/企业-对法人/微信图片_20260416192217_319_210.jpg",
            annotations: [
              {
                id: "bank-photo",
                title: "结算银行卡正面",
                desc: "上传结算银行卡正面照片。ocr自动回填",
                tags: ["法人个人账户", "图片上传"],
                x: 31,
                y: 14,
                noteTop: 10
              },
              {
                id: "bank-default",
                title: "银行名称 / 支行名称 / 支行联号",
                desc: "银行名称、支行名称、支行联号按系统默认值展示，无需手工修改。",
                tags: ["默认值"],
                x: 58,
                y: 39,
                noteTop: 30
              },
              {
                id: "bank-no",
                title: "银行卡号",
                desc: "OCR 回填银行卡号，并允许修改。",
                tags: ["必填项", "法人个人账户"],
                x: 58,
                y: 63,
                noteTop: 52
              },
              {
                id: "qualification",
                title: "特殊资质",
                desc: "特殊资质非必填项，留空即可",
                tags: ["非必填"],
                x: 31,
                y: 82,
                noteTop: 72
              }
              // {
              //   id: "manager-start",
              //   title: "负责人信息入口",
              //   desc: "页面底部进入负责人信息模块，默认回填法人姓名、电话和身份证号。",
              //   tags: ["默认回填"],
              //   x: 30,
              //   y: 92,
              //   noteTop: 86
              // }
            ]
          }),
          page({
            title: "负责人信息与补充项",
            subtitle: "最后一页完成负责人信息、客服电话与备注信息。",
            image: "../Docs/不同类型商户进件截图/企业-对法人/微信图片_20260416192218_320_210.jpg",
            annotations: [
              {
                id: "manager-info",
                title: "负责人信息",
                desc: "负责人姓名、电话、身份证号默认沿用法人信息，通常无需大改；若实际业务负责人不同，可按需修正。",
                tags: ["默认回填", "可调整"],
                x: 58,
                y: 28,
                noteTop: 15
              },
              {
                id: "service-phone",
                title: "客服电话",
                desc: "客服电话不是必填项，主要用于需要对外展示客服联系方式的场景。",
                tags: ["非必填"],
                x: 58,
                y: 69,
                noteTop: 49
              },
              {
                id: "remark",
                title: "备注信息",
                desc: "备注信息同样非必填，通常作为特殊说明或补充备注使用。",
                tags: ["非必填"],
                x: 58,
                y: 86,
                noteTop: 72
              }
              // {
              //   id: "submit",
              //   title: "保存",
              //   desc: "核对所有信息后点击底部保存，完成该类型的进件信息录入。",
              //   tags: ["收尾操作"],
              //   x: 52,
              //   y: 96,
              //   noteTop: 88
              // }
            ]
          })
        ]
      },
      {
        id: "nonlegal",
        label: "企业对非法人",
        accent: "#7c3aed",
        merchantType: "企业商户 / 个体工商户",
        settlementType: "个人账户（非企业法人）",
        pageCount: 7,
        focusModules: ["开户类型与政策", "商户信息", "店面照片", "营业信息", "法人信息", "结算信息", "结算银行信息", "非法人到账授权书"],
        keyPoints: [
          "对非法人场景是四类中资料最完整的一类，既有企业主体资料，也有结算人资料，还额外需要授权书。",
          "结算信息页需要采集非企业法人的身份证照片、姓名、电话、证件号码及证件有效期。",
          "非法人到账授权书是该类型独有模块，必须明确体现。"
        ],
        differences: [
          "在企业对法人基础上，新增结算信息和非法人到账授权书两个差异模块。",
          "结算账户不属于企业法人本人，因此需要法人授权许可。",
          "负责人信息仍然默认回填法人信息，客服电话与备注信息继续保持非必填。"
        ],
        pages: [
          enterpriseSharedIntro(
            "企业-对非法人",
            "当前类型需要选择“对非法人”，即结算到非企业法人的个人账户，因此后续会增加结算信息和授权书模块。"
          ),
          page({
            title: "商户信息与店面照片",
            subtitle: "第二页仍然先采集企业主体基础信息与经营场景照片。",
            image: "../Docs/不同类型商户进件截图/企业-对非法人/微信图片_20260416192219_321_210.jpg",
            annotations: sharedMerchantInfoAnnotations
          }),
          page({
            title: "营业信息与法人信息（上）",
            subtitle: "对非法人场景同样要先补齐营业执照，再进入法人资料采集。",
            image: "../Docs/不同类型商户进件截图/企业-对非法人/微信图片_20260416192220_322_210.jpg",
            annotations: [
              {
                id: "license-photo",
                title: "营业执照",
                desc: "上传营业执照正面照，ocr自动回填",
                tags: ["企业必填"],
                x: 31,
                y: 17,
                noteTop: 10
              },
              {
                id: "license-no",
                title: "营业执照号",
                desc: "营业执照号由 OCR 自动回填后核实，如识别不准可手工调整。",
                tags: ["OCR回填"],
                x: 58,
                y: 39,
                noteTop: 30
              },
              {
                id: "license-date",
                title: "执照有效期",
                desc: "ocr自动回填执照有效期，并允许修改",
                tags: ["日期项"],
                x: 58,
                y: 61,
                noteTop: 51
              },
              {
                id: "legal-id-photo",
                title: "法人身份证照片",
                desc: "上传法人身份证人像面和国徽面，ocr自动回填。",
                tags: ["法人资料"],
                x: 35,
                y: 85,
                noteTop: 73
              }
            ]
          }),
          page({
            title: "法人信息（下）",
            subtitle: "这一页继续完成法人姓名、电话、证件及证件有效期的填写。",
            image: "../Docs/不同类型商户进件截图/企业-对非法人/微信图片_20260416192220_323_210.jpg",
            annotations: [
              {
                id: "legal-name-phone",
                title: "法人姓名与法人电话",
                desc: " OCR 自动回填，法人电话需要手工录入并核实。",
                tags: ["法人资料", "手动填写"],
                x: 58,
                y: 22,
                noteTop: 12
              },
              {
                id: "legal-cert",
                title: "法人证件类型与证件号码",
                desc: "ocr自动回填法人证件类型与证件号码，并允许修改",
                tags: ["OCR回填", "证件信息"],
                x: 58,
                y: 48,
                noteTop: 35
              },
              {
                id: "legal-date",
                title: "法人证件有效期",
                desc: "ocr自动回填法人证件有效期，并允许修改",
                tags: ["日期项"],
                x: 58,
                y: 76,
                noteTop: 58
              }
              // {
              //   id: "settle-start",
              //   title: "结算信息入口",
              //   desc: "页面底部开始进入结算信息模块，对非法人类型需要继续采集结算人资料。",
              //   tags: ["本类型差异", "下一模块"],
              //   x: 40,
              //   y: 92,
              //   noteTop: 80
              // }
            ]
          }),
          page({
            title: "结算信息",
            subtitle: "对非法人场景新增结算信息页，专门采集实际到账人的身份资料。",
            image: "../Docs/不同类型商户进件截图/企业-对非法人/微信图片_20260416192221_324_210.jpg",
            annotations: [
              {
                id: "settle-id-photo",
                title: "结算人身份证照片",
                desc: "上传结算人身份证人像面、国徽面及手持身份证照片（可重复上传身份证正面照），用于完成实际到账人的身份核验。",
                tags: ["必填项", "图片上传"],
                x: 33,
                y: 15,
                noteTop: 10
              },
              {
                id: "settle-name",
                title: "结算人姓名与电话",
                desc: "ocr自动回填结算人姓名，并允许修改，结算人电话需要人工输入 11 位手机号。",
                tags: ["OCR回填", "手动填写"],
                x: 58,
                y: 45,
                noteTop: 30
              },
              {
                id: "settle-cert",
                title: "结算人证件类型与证件号码",
                desc: "ocr自动回填结算人证件类型与证件号码，并允许修改",
                tags: ["证件信息"],
                x: 58,
                y: 68,
                noteTop: 52
              },
              {
                id: "settle-date",
                title: "结算人证件有效期",
                desc: "ocr自动回填结算人证件有效期，并允许修改",
                tags: ["日期项"],
                x: 58,
                y: 88,
                noteTop: 74
              }
            ]
          }),
          page({
            title: "结算银行信息与特殊资质",
            subtitle: "完成结算人资料后，再录入到账银行卡信息，并保留特殊资质非必填入口。",
            image: "../Docs/不同类型商户进件截图/企业-对非法人/微信图片_20260416192222_325_210.jpg",
            annotations: [
              {
                id: "bank-photo",
                title: "银行卡正面",
                desc: "上传实际到账银行卡正面照，用于 OCR 识别银行卡号。",
                tags: ["图片上传", "到账银行卡"],
                x: 31,
                y: 28,
                noteTop: 14
              },
              {
                id: "bank-default",
                title: "银行名称 / 支行名称 / 支行联号",
                desc: "系统默认值展示，无需改动。",
                tags: ["默认值"],
                x: 58,
                y: 53,
                noteTop: 36
              },
              {
                id: "bank-no",
                title: "银行卡号",
                desc: "ocr 自动回填银行卡号，并允许修改",
                tags: ["必填项", "到账账户"],
                x: 58,
                y: 74,
                noteTop: 58
              },
              {
                id: "qualification",
                title: "特殊资质",
                desc: "特殊资质仍然是非必填字段，无需填写",
                tags: ["非必填"],
                x: 31,
                y: 92,
                noteTop: 80
              }
            ]
          }),
          page({
            title: "非法人到账授权书与补充信息",
            subtitle: "最后一页展示对非法人独有的授权书模块，并完成负责人与补充信息。",
            image: "../Docs/不同类型商户进件截图/企业-对非法人/微信图片_20260416192223_326_210.jpg",
            annotations: [
              {
                id: "authorize",
                title: "非法人到账授权书",
                desc: "付款银行卡并非法人本人银行卡，则必须上传授权书正面照片，体现法人授权许可。当前可临时上传任意图片即可",
                tags: ["必填项"],
                x: 31,
                y: 26,
                noteTop: 10
              },
              {
                id: "manager-info",
                title: "负责人信息",
                desc: "负责人姓名、电话、身份证号默认回填法人信息；如有实际业务负责人，可按需调整。负责人手机号作为系统唯一登陆凭证",
                tags: ["默认回填"],
                x: 58,
                y: 55,
                noteTop: 34
              },
              {
                id: "service-phone",
                title: "客服电话",
                desc: "客服电话非必填，可在需要展示外部联系电话时补充。",
                tags: ["非必填"],
                x: 58,
                y: 84,
                noteTop: 60
              },
              {
                id: "remark-submit",
                title: "备注信息与保存",
                desc: "备注信息同样非必填。全部资料核对完成后，可继续下拉点击底部保存。",
                tags: ["非必填", "收尾操作"],
                x: 56,
                y: 95,
                noteTop: 82
              }
            ]
          })
        ]
      }
    ]
  };

  window.MerchantIntakeGuideData = data;
})();
