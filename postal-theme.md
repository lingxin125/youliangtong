# 邮粮通 - 客户经理端邮政风格视觉规范

## 概述

客户经理端采用「邮政金融」风格，区别于农户/收购商端的「温润农业」风格。

| 维度 | 农产品端 | 客户经理端 |
|------|---------|-----------|
| 背景色 | 麦穗金 #FFFBF0 | 纯净白 #FFFFFF / 浅灰白 #F5F7FA |
| 风格定位 | 温暖、亲切、乡土 | 专业、金融、银行 |
| 目标用户 | 农户、收购商 | 邮政客户经理 |
| 情感传达 | 丰收、信任、自然 | 专业、安全、高效 |

---

## 色彩体系

### 主色调 - 邮政绿系

| 名称 | 色值 | 用途 |
|------|------|------|
| 邮政绿 | `#11A64A` | 主按钮、强调、导航 |
| 邮政绿-深 | `#0D8A3C` | 悬停状态、按下状态 |
| 邮政绿-浅 | `#4CAF50` | 辅助强调、图标 |
| 邮政绿-淡 | `#E8F5E9` | 背景高亮、标签底色 |
| 邮政绿-微 | `#F1F8E9` | 极淡背景、hover底色 |

### 辅助色

| 名称 | 色值 | 用途 |
|------|------|------|
| 金融金 | `#C9A227` | VIP标识、特殊强调 |
| 警示橙 | `#FF6B35` | 警告、待处理事项 |
| 信息蓝 | `#1976D2` | 链接、信息提示 |
| 成功绿 | `#2E7D32` | 成功状态（比主色深） |
| 危险红 | `#D32F2F` | 错误、删除、驳回 |

### 中性色

| 名称 | 色值 | 用途 |
|------|------|------|
| 标题黑 | `#1A1A1A` | 主标题、重要文字 |
| 正文深灰 | `#333333` | 正文内容 |
| 次要灰 | `#666666` | 次要文字、说明 |
| 辅助灰 | `#999999` | 占位符、禁用状态 |
| 边框灰 | `#E8E8E8` | 分割线、边框 |
| 背景灰 | `#F5F7FA` | 页面背景、卡片底色 |
| 纯白 | `#FFFFFF` | 卡片、浮层 |

---

## 阴影体系（三级 Elevation）

```css
/* Level 1 - 列表项、小卡片 */
--shadow-elevation-1: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);

/* Level 2 - 面板、卡片、浮层 */
--shadow-elevation-2: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);

/* Level 3 - Hero区、重要操作区 */
--shadow-elevation-3: 0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06);

/* Glow - 主按钮光晕 */
--shadow-glow: 0 4px 20px rgba(17,166,74,0.20);
```

---

## 字体规范

### 字体栈

```css
font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
```

### 字号规范

| 级别 | 字号 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| 大标题 | 20px | 28px | 600 | 页面标题 |
| 小标题 | 17px | 24px | 600 | 卡片标题、区块标题 |
| 正文 | 15px | 22px | 400 | 正文内容 |
| 辅助文 | 13px | 18px | 400 | 说明文字、标签 |
| 小字 | 12px | 16px | 400 | 时间、次要信息 |
| 数据大 | 28px | 36px | 600 | 关键数据展示 |
| 数据小 | 20px | 26px | 500 | 次要数据 |

---

## 组件规范

### 卡片（Card）

```css
/* 基础卡片 */
.postal-card {
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.04);
}

/* 面板卡片 - 用于重要内容区 */
.postal-panel {
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.04);
}

/* Hero 卡片 - 用于数据统计 */
.postal-hero-card {
  background: linear-gradient(135deg, #11A64A 0%, #0D8A3C 100%);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(17,166,74,0.25);
  color: #FFFFFF;
}
```

### 按钮（Button）

```css
/* 主按钮 */
.postal-btn-primary {
  background: linear-gradient(135deg, #11A64A 0%, #0D8A3C 100%);
  color: #FFFFFF;
  border-radius: 8px;
  font-weight: 500;
  box-shadow: 0 4px 20px rgba(17,166,74,0.20);
}

/* 次按钮 */
.postal-btn-secondary {
  background: #FFFFFF;
  color: #11A64A;
  border: 1px solid #11A64A;
  border-radius: 8px;
  font-weight: 500;
}

/* 文字按钮 */
.postal-btn-text {
  color: #11A64A;
  font-weight: 500;
  background: transparent;
}

/* 禁用按钮 */
.postal-btn-disabled {
  background: #E8E8E8;
  color: #999999;
  border-radius: 8px;
}
```

### 输入框（Input）

```css
.postal-input {
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  color: #333333;
}

.postal-input:focus {
  border-color: #11A64A;
  box-shadow: 0 0 0 3px rgba(17,166,74,0.10);
}

.postal-input::placeholder {
  color: #999999;
}
```

### 列表（List）

```css
/* 列表项 */
.postal-list-item {
  background: #FFFFFF;
  padding: 16px;
  border-bottom: 1px solid #F5F7FA;
  display: flex;
  align-items: center;
}

.postal-list-item:last-child {
  border-bottom: none;
}

/* 列表项激活态 */
.postal-list-item:active {
  background: #F5F7FA;
}
```

### 标签（Tag）

```css
/* 状态标签 - 成功 */
.postal-tag-success {
  background: #E8F5E9;
  color: #2E7D32;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

/* 状态标签 - 警告 */
.postal-tag-warning {
  background: #FFF3E0;
  color: #E65100;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

/* 状态标签 - 处理中 */
.postal-tag-processing {
  background: #E3F2FD;
  color: #1976D2;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}
```

### 导航（Navigation）

```css
/* 底部导航 */
.postal-tab-bar {
  background: #FFFFFF;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
  border-top: 1px solid #F5F7FA;
}

.postal-tab-item {
  color: #999999;
}

.postal-tab-item.active {
  color: #11A64A;
}
```

---

## 间距规范

| Token | 值 | 用途 |
|-------|-----|------|
| xs | 4px | 图标与文字间距 |
| sm | 8px | 紧凑内边距 |
| md | 12px | 标准间距 |
| lg | 16px | 卡片内边距 |
| xl | 20px | 区块间距 |
| 2xl | 24px | 页面边距 |
| 3xl | 32px | 大区块间距 |

---

## 圆角规范

| Token | 值 | 用途 |
|-------|-----|------|
| sm | 4px | 小标签、徽章 |
| md | 8px | 按钮、输入框 |
| lg | 12px | 小卡片、列表项 |
| xl | 16px | 大卡片、面板 |
| full | 9999px | 圆形元素 |

---

## 页面布局示例

### 标准页面结构

```
┌─────────────────────────────┐
│  状态栏 (电量/时间)           │  #FFFFFF
├─────────────────────────────┤
│  导航栏                      │  #FFFFFF
│  ← 页面标题              操作 │  border-bottom: #F5F7FA
├─────────────────────────────┤
│                             │
│  ┌─────────────────────┐    │
│  │  Hero 统计卡         │    │  #11A64A gradient
│  │  本月业绩 / 客户数    │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │  功能快捷入口        │    │  #FFFFFF card
│  │  ┌──┐ ┌──┐ ┌──┐    │    │
│  │  │  │ │  │ │  │    │    │
│  │  └──┘ └──┘ └──┘    │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │  待办事项列表        │    │  #FFFFFF card
│  │  ───────────────    │    │
│  │  ───────────────    │    │
│  │  ───────────────    │    │
│  └─────────────────────┘    │
│                             │
├─────────────────────────────┤
│  [首页] [客户] [业绩] [我的] │  #FFFFFF tab-bar
└─────────────────────────────┘
```

---

## 使用示例

### 引入方式

```html
<!-- 在 head 中引入邮政风格样式 -->
<link rel="stylesheet" href="postal-styles.css">

<!-- 在 body 添加主题类 -->
<body class="postal-theme">
  <!-- 页面内容 -->
</body>
```

### 完整页面示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>客户经理首页</title>
  <link rel="stylesheet" href="postal-styles.css">
</head>
<body class="postal-theme">
  <div class="postal-page">
    <!-- 导航栏 -->
    <nav class="postal-nav">
      <h1>客户经理工作台</h1>
    </nav>

    <!-- 内容区 -->
    <main class="postal-content">
      <!-- Hero 统计 -->
      <div class="postal-hero-card">
        <div class="postal-stat-row">
          <div class="postal-stat">
            <div class="postal-stat-value">¥128,500</div>
            <div class="postal-stat-label">本月业绩</div>
          </div>
          <div class="postal-stat">
            <div class="postal-stat-value">42</div>
            <div class="postal-stat-label">新增客户</div>
          </div>
        </div>
      </div>

      <!-- 快捷入口 -->
      <div class="postal-panel">
        <h2 class="postal-section-title">快捷功能</h2>
        <div class="postal-quick-grid">
          <div class="postal-quick-item">
            <div class="postal-quick-icon">
              <i class="fas fa-user-plus"></i>
            </div>
            <span>新增客户</span>
          </div>
          <!-- more items... -->
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

---

## 与农产品风格对比

| 元素 | 农产品风格 | 邮政金融风格 |
|------|-----------|-------------|
| 页面背景 | `#FFFBF0` 麦穗金 | `#FFFFFF` / `#F5F7FA` 纯白/浅灰 |
| 卡片背景 | `#FFFFFF` | `#FFFFFF`（相同） |
| 主按钮 | 邮政绿渐变 | 邮政绿渐变（相同） |
| 整体氛围 | 温暖、丰收感 | 专业、银行感 |
| 图标风格 | FontAwesome 彩色 | FontAwesome 单色/线性 |
| 数据展示 | 圆角亲和 | 简洁利落 |

---

## 版本记录

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0 | 2026-02-24 | 初始版本，建立邮政金融风格规范 |
