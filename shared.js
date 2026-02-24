/**
 * 邮粮通 - 共享组件和样式配置
 * UI风格：温润实体卡片（纯白卡片 + 三级分层阴影 + 深色微边框 + 暖色背景）
 * 主题色保持绿色系，背景为麦穗金色 + 淡绿桥梁色
 */

// ==================== Tailwind 配置 ====================
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        DEFAULT: '#11A64A',
                        dark: '#388E3C',
                        light: '#81C784',
                        bg: '#F0FDF4',
                        fade: 'rgba(76, 163, 84, 0.08)',
                    },
                    card: {
                        border: 'rgba(0, 0, 0, 0.04)',
                        surface: '#FFFFFF',
                    }
                },
                fontFamily: {
                    sans: ['Poppins', 'Noto Sans SC', 'sans-serif'],
                },
                boxShadow: {
                    'elevation-1': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                    'elevation-2': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
                    'elevation-3': '0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)',
                    'glow': '0 4px 20px rgba(76,163,84,0.15)',
                },
                animation: {
                    'float': 'float 6s ease-in-out infinite',
                    'fade-in': 'fadeIn 0.5s ease-out',
                },
                keyframes: {
                    float: {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-3px)' },
                    },
                    fadeIn: {
                        '0%': { opacity: '0', transform: 'translateY(2px)' },
                        '100%': { opacity: '1', transform: 'translateY(0)' },
                    }
                }
            }
        }
    };
}

// ==================== 关键CSS立即注入（IIFE，不等DOMContentLoaded） ====================
// 这段代码在<head>解析阶段同步执行，确保<body>渲染前样式已就位，杜绝FOUC
(function() {
    var s = document.createElement('style');
    s.textContent =
        'body{font-family:Poppins,Noto Sans SC,sans-serif;background:#fff;overflow:hidden;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}' +
        '.glass-panel{background:#FFFFFF;border:1px solid rgba(0,0,0,.04);box-shadow:0 4px 12px rgba(0,0,0,.08),0 2px 4px rgba(0,0,0,.04)}' +
        '.glass-card{background:#FFFFFF;border:1px solid rgba(0,0,0,.04);box-shadow:0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);transition:all .25s cubic-bezier(.4,0,.2,1)}' +
        '.glass-card:active{transform:scale(.98);box-shadow:0 1px 2px rgba(0,0,0,.04)}' +
        '.mobile-container{width:375px;height:812px;background:#FFFBF0;background-image:radial-gradient(ellipse at 30% 20%,rgba(200,230,201,.25) 0%,transparent 50%),radial-gradient(ellipse at 70% 60%,rgba(200,230,201,.15) 0%,transparent 45%),linear-gradient(180deg,rgba(200,146,42,.10) 0%,rgba(255,251,240,0) 400px);border-radius:40px;border:0;box-shadow:0 25px 50px -12px rgba(0,0,0,.15),inset 0 0 0 1px rgba(0,0,0,.05);position:relative;overflow:hidden;display:flex;flex-direction:column}' +
        // 遮罩层：z-40，只遮内容区
        '.mobile-container::after{content:"";position:absolute;inset:0;background:#FFFBF0;z-index:40;pointer-events:none;animation:_maskOut .25s ease-out .06s forwards}' +
        '.mobile-container._leaving::after{animation:_maskIn .14s ease-in forwards!important}' +
        '@keyframes _maskOut{from{opacity:1}to{opacity:0}}' +
        '@keyframes _maskIn{from{opacity:0}to{opacity:1}}' +
        // 关键：让状态栏/导航栏/tab栏的容器div穿透遮罩
        '#statusBar,#navBar,#tabBar,#admin-tab-bar{position:relative;z-index:51}' +
        // 同时处理直接写在HTML中的状态栏和tab栏（非JS渲染的）
        '.mobile-container>.bg-black{position:relative;z-index:51}' +
        '.mobile-container>[class*="border-t"][class*="bg-white"]{position:relative;z-index:51}' +
        '.no-scrollbar::-webkit-scrollbar{display:none}' +
        '.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}' +
        '.tab-content{display:none;opacity:0;transition:opacity .3s ease-in-out;height:100%;overflow-y:auto;padding-bottom:100px}' +
        '.tab-content.active{display:block;opacity:1}' +
        '.filter-chip{padding:6px 12px;border-radius:8px;font-size:11px;font-weight:500;background:#F3F4F6;color:#4B5563;transition:all .2s;border:1px solid transparent;cursor:pointer}' +
        '.filter-chip.active{background:#F0FDF4;color:#11A64A;border-color:#11A64A;font-weight:700}' +
        '.shadow-glass-up{box-shadow:0 -4px 30px rgba(0,0,0,.1)}';
    document.head.appendChild(s);
})();

// ==================== 状态栏 ====================
function renderStatusBar() {
    return '<div class="h-12 w-full flex justify-between items-end px-5 pb-2 z-[51] relative select-none text-white font-medium text-sm bg-black"><span>9:41</span><div class="flex gap-2 items-center"><i class="fas fa-signal text-xs"></i><i class="fas fa-wifi text-xs"></i><i class="fas fa-battery-full text-xs"></i></div></div>';
}

// ==================== 导航栏 ====================
function renderHeader(title, backHref) {
    title = title || '邮粮通';
    var backBtn = backHref ? '<a href="' + backHref + '" class="nav-link w-8 h-8 flex items-center justify-center rounded-full active:bg-gray-100"><i class="fas fa-chevron-left text-gray-800 text-lg"></i></a>' : '';
    return '<div class="flex items-center justify-between shrink-0 relative select-none z-[60]" style="height:44px;background:transparent;margin-top:8px;padding:0 15px;">' +
        '<div class="w-[87px] flex items-center">' + backBtn + '</div>' +
        '<div class="absolute left-1/2 transform -translate-x-1/2 text-gray-800 font-medium text-[16px]" style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;">' + title + '</div>' +
        '<div class="w-[87px] h-[32px] bg-white rounded-full border border-gray-200/50 flex items-center justify-between px-3 shadow-sm">' +
            '<div class="flex-1 flex items-center justify-center"><i class="fas fa-ellipsis-h text-gray-800 text-xs"></i></div>' +
            '<div class="w-[1px] h-[18px] bg-gray-300"></div>' +
            '<div class="flex-1 flex items-center justify-center"><i class="far fa-dot-circle text-gray-800 text-sm"></i></div>' +
        '</div></div>';
}

// ==================== 底部导航栏 ====================
function renderBuyerTabBar(active) {
    return _tabBar([
        { id:'home', icon:'fa-home', label:'首页', href:'buyer-home.html' },
        { id:'market', icon:'fa-store', label:'市场', href:'buyer-market.html' },
        { id:'billing', icon:'fa-file-invoice', label:'开单', href:'buyer-billing.html' },
        { id:'mine', icon:'fa-user', label:'我的', href:'buyer-my.html' },
    ], active || 'home');
}

function renderFarmerTabBar(active) {
    return _tabBar([
        { id:'home', icon:'fa-home', label:'首页', href:'farmer-home.html' },
        { id:'market', icon:'fa-store', label:'市场', href:'farmer-market.html' },
        { id:'collection', icon:'fa-qrcode', label:'收款', href:'farmer-collection.html' },
        { id:'mine', icon:'fa-user', label:'我的', href:'farmer-my.html' },
    ], active || 'home');
}

function renderAdminTabBar(active) {
    return _tabBar([
        { id:'account', icon:'fa-user-plus', label:'开户', href:'admin-account.html' },
        { id:'records', icon:'fa-clipboard-list', label:'记录', href:'admin-records.html' },
        { id:'users', icon:'fa-search', label:'查询', href:'admin-users.html' },
        { id:'dashboard', icon:'fa-chart-pie', label:'看板', href:'admin-dashboard.html' },
    ], active || 'account');
}

function _tabBar(tabs, active) {
    var items = tabs.map(function(t) {
        var on = t.id === active;
        var c = on ? 'text-primary' : 'text-gray-400';
        var tr = on ? '-translate-y-1' : '';
        var dot = on ? '<div class="w-1 h-1 bg-primary rounded-full"></div>' : '<div class="w-1 h-1"></div>';
        return '<a href="' + t.href + '" class="nav-link flex-1 flex flex-col items-center justify-center gap-0.5 pt-2 transition-colors duration-300 ' + c + ' no-underline" style="text-decoration:none">' +
            '<i class="fas ' + t.icon + ' text-lg ' + tr + '"></i>' + dot +
            '<span class="text-[10px] font-medium">' + t.label + '</span></a>';
    }).join('');
    return '<div class="h-[72px] bg-white border-t border-gray-200 flex items-start shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-[51] relative shrink-0">' + items + '</div>';
}

// ==================== 底部弹窗控制器（复用） ====================
function createBottomSheetController(options) {
    options = options || {};
    var overlayId = options.overlayId || '';
    var sheetIds = Array.isArray(options.sheetIds) ? options.sheetIds : [];

    function getOverlay() {
        return overlayId ? document.getElementById(overlayId) : null;
    }

    function getSheets() {
        return sheetIds
            .map(function(id) { return document.getElementById(id); })
            .filter(function(node) { return !!node; });
    }

    function hasOpenSheet() {
        return getSheets().some(function(sheet) {
            return sheet.classList.contains('show');
        });
    }

    function syncOverlay() {
        var overlay = getOverlay();
        if (!overlay) return;
        overlay.classList.toggle('show', hasOpenSheet());
    }

    function hideAllSheets() {
        getSheets().forEach(function(sheet) {
            sheet.classList.remove('show');
        });
        syncOverlay();
    }

    function openSheet(sheetId) {
        getSheets().forEach(function(sheet) {
            sheet.classList.remove('show');
        });
        var target = document.getElementById(sheetId);
        if (target) {
            target.classList.add('show');
        }
        syncOverlay();
    }

    function closeSheet(sheetId) {
        var target = document.getElementById(sheetId);
        if (target) {
            target.classList.remove('show');
        }
        syncOverlay();
    }

    function isSheetOpen(sheetId) {
        var target = document.getElementById(sheetId);
        return !!(target && target.classList.contains('show'));
    }

    return {
        hasOpenSheet: hasOpenSheet,
        syncOverlay: syncOverlay,
        hideAllSheets: hideAllSheets,
        openSheet: openSheet,
        closeSheet: closeSheet,
        isSheetOpen: isSheetOpen
    };
}

if (typeof window !== 'undefined') {
    window.createBottomSheetController = createBottomSheetController;
}

// ==================== 收购商模拟数据中心（跨页面共享） ====================
(function() {
    var ORDER_STORAGE_KEY = 'ylt_buyer_orders_mock_v1';
    var ORDER_DATA_VERSION = 'v3'; // 数据版本，修改订单结构时递增以触发重置
    var ORDER_VERSION_KEY = 'ylt_buyer_orders_version';
    var CONTACTS = [
        { id: 'c01', name: '李大姐', mobile: '13812342233', payCount: 12, bank: '邮储银行', card: '6221 4858 **** 2233' },
        { id: 'c02', name: '王大哥', mobile: '13976545612', payCount: 8, bank: '邮储银行', card: '6221 8845 **** 5612' },
        { id: 'c03', name: '赵师傅', mobile: '13688139801', payCount: 5, bank: '农业银行', card: '6228 4801 **** 9801' },
        { id: 'c04', name: '孙阿姨', mobile: '13722553326', payCount: 3, bank: '农商银行', card: '6215 8533 **** 3326' },
        { id: 'c05', name: '刘师傅', mobile: '13590007119', payCount: 2, bank: '邮储银行', card: '6221 0071 **** 7119' }
    ];
    var PAYER = {
        name: '张老板',
        org: '保定收购站',
        mobile: '138****8888'
    };

    function cloneData(data) {
        if (typeof structuredClone === 'function') {
            return structuredClone(data);
        }
        return JSON.parse(JSON.stringify(data));
    }

    // 统一使用 localStorage，确保 index 新开页签后 mock 数据仍可共享。
    // 若 localStorage 不可用，则降级到 sessionStorage。
    function safeGetStorageItem(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (err) {
            try {
                return window.sessionStorage.getItem(key);
            } catch (innerErr) {
                return null;
            }
        }
    }

    function safeSetStorageItem(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (err) {
            try {
                window.sessionStorage.setItem(key, value);
            } catch (innerErr) {
                // 在无存储能力场景静默降级
            }
        }
    }

    function safeRemoveStorageItem(key) {
        try {
            window.localStorage.removeItem(key);
        } catch (err) {
            // ignore
        }
        try {
            window.sessionStorage.removeItem(key);
        } catch (innerErr) {
            // ignore
        }
    }

    function pad2(v) {
        return String(v).padStart(2, '0');
    }

    function buildOrderNo(date) {
        var d = date || new Date();
        return 'SL' +
            d.getFullYear() +
            pad2(d.getMonth() + 1) +
            pad2(d.getDate()) +
            pad2(d.getHours()) +
            pad2(d.getMinutes()) +
            pad2(d.getSeconds());
    }

    function isoMinusMinutes(minutesAgo) {
        return new Date(Date.now() - minutesAgo * 60 * 1000).toISOString();
    }

    function buildBaseOrders() {
        var orderA = {
            id: buildOrderNo(new Date(Date.now() - 8 * 60 * 1000)),
            status: 'pending',
            payeeName: '李大姐',
            payeeMobile: '138****2233',
            payeeBank: '邮储银行烟台支行',
            payeeCard: '尾号 2233',
            summary: '红富士苹果 x 200斤 等2项',
            amount: 1120,
            createdAt: isoMinusMinutes(8),
            payMethod: '',
            items: [
                { name: '红富士苹果', qty: 200, unit: '斤', price: 3.5, subtotal: 700 },
                { name: '黄元帅苹果', qty: 150, unit: '斤', price: 2.8, subtotal: 420 }
            ]
        };

        var orderB = {
            id: buildOrderNo(new Date(Date.now() - 18 * 60 * 1000)),
            status: 'processing',
            payeeName: '王大哥',
            payeeMobile: '139****5612',
            payeeBank: '邮储银行保定支行',
            payeeCard: '尾号 5612',
            summary: '冬储土豆 x 500斤',
            amount: 2300,
            createdAt: isoMinusMinutes(18),
            payMethod: 'industry',
            items: [{ name: '冬储土豆', qty: 500, unit: '斤', price: 4.6, subtotal: 2300 }]
        };

        var orderC = {
            id: buildOrderNo(new Date(Date.now() - 6 * 60 * 1000)),
            status: 'success',
            payeeName: '李大姐',
            payeeMobile: '139****6666',
            payeeBank: '中国邮政储蓄银行烟台支行',
            payeeCard: '尾号 8888',
            summary: '红富士苹果 x 600斤',
            amount: 1680,
            createdAt: isoMinusMinutes(6),
            payMethod: 'guarantee',
            paidAt: isoMinusMinutes(5),
            items: [{ name: '红富士苹果', qty: 600, unit: '斤', price: 2.8, subtotal: 1680 }]
        };

        var orderD = {
            id: 'SL20260211104833',
            status: 'failed',
            payeeName: '孙阿姨',
            payeeMobile: '137****3326',
            payeeBank: '农商银行德州支行',
            payeeCard: '尾号 3326',
            summary: '有机西红柿 x 700斤',
            amount: 1890,
            createdAt: '2026-02-11T10:48:33+08:00',
            payMethod: 'industry',
            failReason: '银行返回失败，请重试',
            items: [{ name: '有机西红柿', qty: 700, unit: '斤', price: 2.7, subtotal: 1890 }]
        };

        var orderE = {
            id: buildOrderNo(new Date(Date.now() - 42 * 60 * 1000)),
            status: 'pending',
            payeeName: '刘师傅',
            payeeMobile: '135****7119',
            payeeBank: '邮储银行临沂支行',
            payeeCard: '尾号 7119',
            summary: '鲜活草鱼 x 300斤',
            amount: 4800,
            createdAt: isoMinusMinutes(42),
            payMethod: '',
            items: [{ name: '鲜活草鱼', qty: 300, unit: '斤', price: 16, subtotal: 4800 }]
        };

        // 昨天的订单
        var orderF = {
            id: 'SL20260222091522',
            status: 'success',
            payeeName: '张大爷',
            payeeMobile: '138****1234',
            payeeBank: '农业银行北京支行',
            payeeCard: '尾号 1234',
            summary: '新鲜白菜 x 800斤',
            amount: 2400,
            createdAt: '2026-02-22T09:15:22+08:00',
            payMethod: 'industry',
            paidAt: '2026-02-22T09:16:05+08:00',
            items: [{ name: '新鲜白菜', qty: 800, unit: '斤', price: 3, subtotal: 2400 }]
        };

        var orderG = {
            id: 'SL20260222143056',
            status: 'success',
            payeeName: '赵阿姨',
            payeeMobile: '139****5678',
            payeeBank: '建设银行天津支行',
            payeeCard: '尾号 5678',
            summary: '红富士苹果 x 450斤',
            amount: 3150,
            createdAt: '2026-02-22T14:30:56+08:00',
            payMethod: 'guarantee',
            paidAt: '2026-02-22T14:32:10+08:00',
            items: [{ name: '红富士苹果', qty: 450, unit: '斤', price: 7, subtotal: 3150 }]
        };

        // 前天的订单
        var orderH = {
            id: 'SL20260221160033',
            status: 'canceled',
            payeeName: '钱师傅',
            payeeMobile: '136****9012',
            payeeBank: '工商银行石家庄支行',
            payeeCard: '尾号 9012',
            summary: '胡萝卜 x 600斤',
            amount: 1800,
            createdAt: '2026-02-21T16:00:33+08:00',
            payMethod: '',
            failReason: '超时未支付，系统自动取消',
            items: [{ name: '胡萝卜', qty: 600, unit: '斤', price: 3, subtotal: 1800 }]
        };

        // 上周的订单
        var orderI = {
            id: 'SL20260218110345',
            status: 'success',
            payeeName: '周大姐',
            payeeMobile: '137****3456',
            payeeBank: '邮储银行保定支行',
            payeeCard: '尾号 3456',
            summary: '土豆 x 1000斤',
            amount: 3200,
            createdAt: '2026-02-18T11:03:45+08:00',
            payMethod: 'industry',
            paidAt: '2026-02-18T11:05:12+08:00',
            items: [{ name: '土豆', qty: 1000, unit: '斤', price: 3.2, subtotal: 3200 }]
        };

        // 今天更多订单
        var orderJ = {
            id: buildOrderNo(new Date(Date.now() - 120 * 60 * 1000)),
            status: 'success',
            payeeName: '陈大爷',
            payeeMobile: '138****8888',
            payeeBank: '农业银行郑州支行',
            payeeCard: '尾号 8888',
            summary: '新鲜黄瓜 x 400斤',
            amount: 1600,
            createdAt: isoMinusMinutes(120),
            payMethod: 'industry',
            paidAt: isoMinusMinutes(118),
            items: [{ name: '新鲜黄瓜', qty: 400, unit: '斤', price: 4, subtotal: 1600 }]
        };

        var orderK = {
            id: buildOrderNo(new Date(Date.now() - 180 * 60 * 1000)),
            status: 'success',
            payeeName: '吴师傅',
            payeeMobile: '139****9999',
            payeeBank: '邮储银行新乡支行',
            payeeCard: '尾号 9999',
            summary: '紫皮洋葱 x 600斤',
            amount: 2100,
            createdAt: isoMinusMinutes(180),
            payMethod: 'guarantee',
            paidAt: isoMinusMinutes(178),
            items: [{ name: '紫皮洋葱', qty: 600, unit: '斤', price: 3.5, subtotal: 2100 }]
        };

        var orderL = {
            id: buildOrderNo(new Date(Date.now() - 240 * 60 * 1000)),
            status: 'failed',
            payeeName: '郑大姐',
            payeeMobile: '137****7777',
            payeeBank: '工商银行洛阳支行',
            payeeCard: '尾号 7777',
            summary: '白萝卜 x 800斤',
            amount: 2400,
            createdAt: isoMinusMinutes(240),
            payMethod: 'industry',
            failReason: '余额不足，支付失败',
            items: [{ name: '白萝卜', qty: 800, unit: '斤', price: 3, subtotal: 2400 }]
        };

        // 前天的更多订单
        var orderM = {
            id: 'SL20260221103015',
            status: 'success',
            payeeName: '马师傅',
            payeeMobile: '136****5555',
            payeeBank: '建设银行新乡支行',
            payeeCard: '尾号 5555',
            summary: '西红柿 x 500斤',
            amount: 2000,
            createdAt: '2026-02-21T10:30:15+08:00',
            payMethod: 'guarantee',
            paidAt: '2026-02-21T10:32:00+08:00',
            items: [{ name: '西红柿', qty: 500, unit: '斤', price: 4, subtotal: 2000 }]
        };

        var orderN = {
            id: 'SL20260221140522',
            status: 'canceled',
            payeeName: '胡大爷',
            payeeMobile: '138****4444',
            payeeBank: '邮储银行开封支行',
            payeeCard: '尾号 4444',
            summary: '青椒 x 300斤',
            amount: 1200,
            createdAt: '2026-02-21T14:05:22+08:00',
            payMethod: '',
            failReason: '超时未支付，系统自动取消',
            items: [{ name: '青椒', qty: 300, unit: '斤', price: 4, subtotal: 1200 }]
        };

        // 上周的更多订单
        var orderO = {
            id: 'SL20260217091533',
            status: 'success',
            payeeName: '田大姐',
            payeeMobile: '139****3333',
            payeeBank: '农业银行新乡支行',
            payeeCard: '尾号 3333',
            summary: '茄子 x 400斤',
            amount: 1600,
            createdAt: '2026-02-17T09:15:33+08:00',
            payMethod: 'industry',
            paidAt: '2026-02-17T09:17:10+08:00',
            items: [{ name: '茄子', qty: 400, unit: '斤', price: 4, subtotal: 1600 }]
        };

        return [orderA, orderB, orderC, orderD, orderE, orderF, orderG, orderH, orderI, orderJ, orderK, orderL, orderM, orderN, orderO];
    }

    function loadOrdersRaw() {
        var text = safeGetStorageItem(ORDER_STORAGE_KEY);
        var storedVersion = safeGetStorageItem(ORDER_VERSION_KEY);

        // 版本不匹配或没有数据时，重新初始化
        if (!text || storedVersion !== ORDER_DATA_VERSION) {
            var init = buildBaseOrders();
            safeSetStorageItem(ORDER_STORAGE_KEY, JSON.stringify(init));
            safeSetStorageItem(ORDER_VERSION_KEY, ORDER_DATA_VERSION);
            return init;
        }
        try {
            var parsed = JSON.parse(text);
            if (!Array.isArray(parsed) || parsed.length === 0) {
                var fallback = buildBaseOrders();
                safeSetStorageItem(ORDER_STORAGE_KEY, JSON.stringify(fallback));
                safeSetStorageItem(ORDER_VERSION_KEY, ORDER_DATA_VERSION);
                return fallback;
            }
            return parsed;
        } catch (err) {
            var recovery = buildBaseOrders();
            safeSetStorageItem(ORDER_STORAGE_KEY, JSON.stringify(recovery));
            safeSetStorageItem(ORDER_VERSION_KEY, ORDER_DATA_VERSION);
            return recovery;
        }
    }

    function saveOrdersRaw(list) {
        safeSetStorageItem(ORDER_STORAGE_KEY, JSON.stringify(list));
    }

    function getOrderRemainingMs(order, timeoutMinutes) {
        var limitMinutes = timeoutMinutes || 30;
        var createdMs = new Date(order.createdAt).getTime();
        return createdMs + limitMinutes * 60 * 1000 - Date.now();
    }

    function markExpiredOrders(timeoutMinutes) {
        var changed = false;
        var list = loadOrdersRaw();
        list.forEach(function(order) {
            if (order.status === 'pending' && getOrderRemainingMs(order, timeoutMinutes) <= 0) {
                order.status = 'canceled';
                order.failReason = '超时未支付，系统自动取消';
                changed = true;
            }
        });
        if (changed) {
            saveOrdersRaw(list);
        }
        return changed;
    }

    function getOrders() {
        markExpiredOrders(30);
        return cloneData(loadOrdersRaw());
    }

    function findOrderById(orderId) {
        if (!orderId) return null;
        var order = loadOrdersRaw().find(function(item) { return item.id === orderId; });
        return order ? cloneData(order) : null;
    }

    function upsertOrder(order) {
        if (!order || !order.id) return null;
        var list = loadOrdersRaw();
        var idx = list.findIndex(function(item) { return item.id === order.id; });
        if (idx >= 0) {
            list[idx] = Object.assign({}, list[idx], cloneData(order));
        } else {
            list.unshift(cloneData(order));
        }
        saveOrdersRaw(list);
        return cloneData(order);
    }

    function updateOrder(orderId, patch) {
        if (!orderId || !patch) return null;
        var list = loadOrdersRaw();
        var idx = list.findIndex(function(item) { return item.id === orderId; });
        if (idx < 0) return null;
        list[idx] = Object.assign({}, list[idx], cloneData(patch));
        saveOrdersRaw(list);
        return cloneData(list[idx]);
    }

    function normalizeStatus(input) {
        if (!input) return '';
        var map = {
            all: 'all',
            pending: 'pending',
            processing: 'processing',
            success: 'success',
            failed: 'failed',
            canceled: 'canceled',
            '待支付': 'pending',
            '支付中': 'processing',
            '支付成功': 'success',
            '支付失败': 'failed',
            '已取消': 'canceled'
        };
        return map[input] || '';
    }

    function getStatusLabel(status) {
        var map = {
            pending: '待支付',
            processing: '支付中',
            success: '支付成功',
            failed: '支付失败',
            canceled: '已撤销'
        };
        return map[status] || '未知状态';
    }

    function getPayer() {
        return cloneData(PAYER);
    }

    function getFrequentContacts() {
        return cloneData(CONTACTS).sort(function(a, b) { return b.payCount - a.payCount; });
    }

    function getRandomContact() {
        var list = getFrequentContacts();
        if (list.length === 0) return null;
        return list[Math.floor(Math.random() * list.length)];
    }

    function getContactById(id) {
        if (!id) return null;
        var found = getFrequentContacts().find(function(item) { return item.id === id; });
        return found || null;
    }

    function clearOrders() {
        safeRemoveStorageItem(ORDER_STORAGE_KEY);
        safeRemoveStorageItem(ORDER_VERSION_KEY);
    }

window.BuyerMockStore = {
        buildOrderNo: buildOrderNo,
        getPayer: getPayer,
        getFrequentContacts: getFrequentContacts,
        getRandomContact: getRandomContact,
        getContactById: getContactById,
        getOrders: getOrders,
        findOrderById: findOrderById,
        upsertOrder: upsertOrder,
        updateOrder: updateOrder,
        markExpiredOrders: markExpiredOrders,
        getOrderRemainingMs: getOrderRemainingMs,
        normalizeStatus: normalizeStatus,
        getStatusLabel: getStatusLabel,
        clearOrders: clearOrders
    };
})();

// ==================== 市场需求模拟数据中心（发布/市场/我的需求联动） ====================
(function() {
    var DEMAND_STORAGE_KEY = 'ylt_market_demands_mock_v2';
    var ROLE_PROFILE = {
        buyer: { name: '张老板农贸', mobile: '138****8888' },
        farmer: { name: '李大姐果园', mobile: '139****6666' }
    };

    function cloneData(data) {
        if (typeof structuredClone === 'function') {
            return structuredClone(data);
        }
        return JSON.parse(JSON.stringify(data));
    }

    function safeGetStorageItem(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (err) {
            try {
                return window.sessionStorage.getItem(key);
            } catch (innerErr) {
                return null;
            }
        }
    }

    function safeSetStorageItem(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (err) {
            try {
                window.sessionStorage.setItem(key, value);
            } catch (innerErr) {
                // ignore
            }
        }
    }

    function safeRemoveStorageItem(key) {
        try {
            window.localStorage.removeItem(key);
        } catch (err) {
            // ignore
        }
        try {
            window.sessionStorage.removeItem(key);
        } catch (innerErr) {
            // ignore
        }
    }

    function pad2(v) {
        return String(v).padStart(2, '0');
    }

    function buildDemandId(date) {
        var d = date || new Date();
        return 'DM' +
            d.getFullYear() +
            pad2(d.getMonth() + 1) +
            pad2(d.getDate()) +
            pad2(d.getHours()) +
            pad2(d.getMinutes()) +
            pad2(d.getSeconds()) +
            Math.floor(Math.random() * 90 + 10);
    }

    function isoMinusMinutes(minutesAgo) {
        return new Date(Date.now() - minutesAgo * 60 * 1000).toISOString();
    }

    function buildBaseDemands() {
        return [
            // ========== 收购商需求 (role: buyer) ==========
            // 刚刚 - 1分钟内
            {
                id: 'DM2026022214300101',
                role: 'buyer',
                ownerName: '张老板农贸',
                ownerMobile: '138****8888',
                category: '水果',
                content: '急收红富士苹果，果径80mm以上，现款现货',
                qty: 5000,
                unit: '斤',
                price: 3.5,
                note: '支持分批交货',
                location: '山东烟台',
                distanceKm: 2.8,
                status: 'active',
                createdAt: new Date(Date.now() - 30 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 30 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022214250102',
                role: 'buyer',
                ownerName: '绿鲜配送中心',
                ownerMobile: '138****7711',
                category: '蔬菜',
                content: '大量收购有机黄瓜，要求新鲜无损伤',
                qty: 3000,
                unit: '斤',
                price: 2.0,
                note: '当天装车',
                location: '山东潍坊',
                distanceKm: 4.5,
                status: 'active',
                createdAt: new Date(Date.now() - 45 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 45 * 1000).toISOString(),
                closedAt: ''
            },
            // 几分钟前 (5-50分钟)
            {
                id: 'DM2026022214200103',
                role: 'buyer',
                ownerName: '鑫源粮贸',
                ownerMobile: '139****8612',
                category: '粮油',
                content: '求购新季玉米，水分14%以下，现场验货后当天结算',
                qty: 12000,
                unit: '斤',
                price: 1.6,
                note: '',
                location: '河南周口',
                distanceKm: 9.0,
                status: 'active',
                createdAt: isoMinusMinutes(8),
                updatedAt: isoMinusMinutes(8),
                closedAt: ''
            },
            {
                id: 'DM2026022214000104',
                role: 'buyer',
                ownerName: '昌盛肉联厂',
                ownerMobile: '137****1234',
                category: '肉类',
                content: '收购散养黑猪肉，要求当天宰杀',
                qty: 1000,
                unit: '斤',
                price: 26.0,
                note: '长期合作',
                location: '安徽阜阳',
                distanceKm: 15.0,
                status: 'active',
                createdAt: isoMinusMinutes(28),
                updatedAt: isoMinusMinutes(28),
                closedAt: ''
            },
            {
                id: 'DM2026022213500105',
                role: 'buyer',
                ownerName: '水产批发市场',
                ownerMobile: '136****5678',
                category: '其他',
                content: '收购鲜活草鱼，规格2-3斤/条',
                qty: 2000,
                unit: '斤',
                price: 8.0,
                note: '塘口直发',
                location: '湖北荆州',
                distanceKm: 22.0,
                status: 'active',
                createdAt: isoMinusMinutes(38),
                updatedAt: isoMinusMinutes(38),
                closedAt: ''
            },
            {
                id: 'DM2026022213400106',
                role: 'buyer',
                ownerName: '家禽收购站',
                ownerMobile: '135****9012',
                category: '禽蛋',
                content: '收购散养土鸡蛋，要求新鲜',
                qty: 5000,
                unit: '枚',
                price: 1.1,
                note: '100枚/箱',
                location: '江苏南通',
                distanceKm: 18.0,
                status: 'active',
                createdAt: isoMinusMinutes(48),
                updatedAt: isoMinusMinutes(48),
                closedAt: ''
            },
            // 几小时前 (1-12小时)
            {
                id: 'DM2026022212000107',
                role: 'buyer',
                ownerName: '粮油贸易公司',
                ownerMobile: '134****3456',
                category: '粮油',
                content: '收购新榨花生油，纯物理压榨',
                qty: 500,
                unit: '桶',
                price: 82.0,
                note: '5L/桶',
                location: '山东临沂',
                distanceKm: 25.0,
                status: 'active',
                createdAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022210000108',
                role: 'buyer',
                ownerName: '大蒜收购商',
                ownerMobile: '133****7890',
                category: '蔬菜',
                content: '收购紫皮大蒜，蒜头饱满',
                qty: 8000,
                unit: '斤',
                price: 3.0,
                note: '适合储存',
                location: '河南商丘',
                distanceKm: 32.0,
                status: 'active',
                createdAt: new Date(Date.now() - 4.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 4.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022208000109',
                role: 'buyer',
                ownerMobile: '132****2345',
                category: '水果',
                content: '收购黄心猕猴桃，单果90g+',
                qty: 3000,
                unit: '斤',
                price: 5.5,
                note: '甜度高',
                location: '陕西周至',
                distanceKm: 45.0,
                status: 'active',
                createdAt: new Date(Date.now() - 6.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 6.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            // 十几个小时前
            {
                id: 'DM2026022206000110',
                role: 'buyer',
                ownerName: '鸭蛋加工厂',
                ownerMobile: '131****6789',
                category: '禽蛋',
                content: '收购老鸭蛋，腌制咸鸭蛋原料',
                qty: 3000,
                unit: '枚',
                price: 1.8,
                note: '个大壳青',
                location: '江西九江',
                distanceKm: 55.0,
                status: 'active',
                createdAt: new Date(Date.now() - 8.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 8.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022202000111',
                role: 'buyer',
                ownerName: '糯玉米批发商',
                ownerMobile: '130****0123',
                category: '粮油',
                content: '收购糯玉米棒子，甜糯可口',
                qty: 10000,
                unit: '斤',
                price: 1.4,
                note: '适合煮食',
                location: '河北张家口',
                distanceKm: 65.0,
                status: 'active',
                createdAt: new Date(Date.now() - 12.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 12.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            // 几天前 (1-5天)
            {
                id: 'DM2026022118000112',
                role: 'buyer',
                ownerName: '羊肉火锅店',
                ownerMobile: '129****4567',
                category: '肉类',
                content: '收购山羊肉，放养草饲',
                qty: 800,
                unit: '斤',
                price: 33.0,
                note: '肉质鲜嫩',
                location: '内蒙古赤峰',
                distanceKm: 120.0,
                status: 'active',
                createdAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022012000113',
                role: 'buyer',
                ownerName: '果品电商',
                ownerMobile: '128****8901',
                category: '水果',
                content: '收购冰糖心苹果，甜脆多汁',
                qty: 12000,
                unit: '斤',
                price: 3.6,
                note: '糖心率高',
                location: '新疆阿克苏',
                distanceKm: 350.0,
                status: 'active',
                createdAt: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },

            // ========== 农户供应 (role: farmer) ==========
            // 刚刚 - 1分钟内
            {
                id: 'DM2026022214300201',
                role: 'farmer',
                ownerName: '李大姐果园',
                ownerMobile: '139****6666',
                category: '水果',
                content: '出售红富士苹果，自家果园直供，果径85mm',
                qty: 3000,
                unit: '斤',
                price: 2.6,
                note: '支持当日装车',
                location: '山东烟台',
                distanceKm: 3.2,
                status: 'active',
                createdAt: new Date(Date.now() - 35 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 35 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022214280202',
                role: 'farmer',
                ownerName: '王大哥蔬菜棚',
                ownerMobile: '138****7777',
                category: '蔬菜',
                content: '新鲜采摘黄瓜，长度25cm左右，现摘现发',
                qty: 2000,
                unit: '斤',
                price: 1.8,
                note: '当天发货',
                location: '山东潍坊',
                distanceKm: 5.0,
                status: 'active',
                createdAt: new Date(Date.now() - 50 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 50 * 1000).toISOString(),
                closedAt: ''
            },
            // 几分钟前 (5-50分钟)
            {
                id: 'DM2026022214150203',
                role: 'farmer',
                ownerName: '赵姐养殖场',
                ownerMobile: '137****8888',
                category: '禽蛋',
                content: '散养土鸡蛋，蛋黄饱满，50枚/箱',
                qty: 5000,
                unit: '枚',
                price: 1.15,
                note: '100箱起批',
                location: '江苏南通',
                distanceKm: 8.5,
                status: 'active',
                createdAt: isoMinusMinutes(15),
                updatedAt: isoMinusMinutes(15),
                closedAt: ''
            },
            {
                id: 'DM2026022214000204',
                role: 'farmer',
                ownerName: '刘庄主葡萄园',
                ownerMobile: '136****9999',
                category: '水果',
                content: '巨峰葡萄自然成熟，甜度18+',
                qty: 2500,
                unit: '斤',
                price: 4.2,
                note: '5斤起售',
                location: '浙江金华',
                distanceKm: 16.0,
                status: 'active',
                createdAt: isoMinusMinutes(30),
                updatedAt: isoMinusMinutes(30),
                closedAt: ''
            },
            {
                id: 'DM2026022213500205',
                role: 'farmer',
                ownerName: '老李养猪场',
                ownerMobile: '135****0000',
                category: '肉类',
                content: '散养黑猪肉，当天宰杀，排骨五花肉齐全',
                qty: 600,
                unit: '斤',
                price: 27.0,
                note: '新鲜放心',
                location: '安徽阜阳',
                distanceKm: 20.0,
                status: 'active',
                createdAt: isoMinusMinutes(40),
                updatedAt: isoMinusMinutes(40),
                closedAt: ''
            },
            {
                id: 'DM2026022213400206',
                role: 'farmer',
                ownerName: '周师傅鱼塘',
                ownerMobile: '134****1111',
                category: '其他',
                content: '鲜活草鱼，规格2-3斤/条',
                qty: 1500,
                unit: '斤',
                price: 8.2,
                note: '塘口直发',
                location: '湖北荆州',
                distanceKm: 28.0,
                status: 'active',
                createdAt: isoMinusMinutes(50),
                updatedAt: isoMinusMinutes(50),
                closedAt: ''
            },
            // 几小时前 (1-12小时)
            {
                id: 'DM2026022212000207',
                role: 'farmer',
                ownerName: '孙家油坊',
                ownerMobile: '133****2222',
                category: '粮油',
                content: '新榨花生油，纯物理压榨，5L/桶',
                qty: 200,
                unit: '桶',
                price: 80.0,
                note: '醇香无添加',
                location: '山东临沂',
                distanceKm: 22.0,
                status: 'active',
                createdAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022210000208',
                role: 'farmer',
                ownerName: '大蒜种植合作社',
                ownerMobile: '132****3333',
                category: '蔬菜',
                content: '紫皮大蒜头，蒜头饱满，适合储存',
                qty: 6000,
                unit: '斤',
                price: 2.8,
                note: '产地直供',
                location: '河南商丘',
                distanceKm: 35.0,
                status: 'active',
                createdAt: new Date(Date.now() - 4.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 4.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022208000209',
                role: 'farmer',
                ownerName: '杨氏果园',
                ownerMobile: '131****4444',
                category: '水果',
                content: '黄心猕猴桃，单果90g+，甜度高',
                qty: 2000,
                unit: '斤',
                price: 5.2,
                note: '现摘现发',
                location: '陕西周至',
                distanceKm: 48.0,
                status: 'active',
                createdAt: new Date(Date.now() - 6.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 6.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            // 十几个小时前
            {
                id: 'DM2026022206000210',
                role: 'farmer',
                ownerName: '鸭蛋批发部',
                ownerMobile: '130****5555',
                category: '禽蛋',
                content: '老鸭蛋，腌制咸鸭蛋原料，个大壳青',
                qty: 4000,
                unit: '枚',
                price: 1.6,
                note: '新鲜现收',
                location: '江西九江',
                distanceKm: 58.0,
                status: 'active',
                createdAt: new Date(Date.now() - 8.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 8.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022202000211',
                role: 'farmer',
                ownerName: '王大爷农场',
                ownerMobile: '129****6666',
                category: '粮油',
                content: '糯玉米棒子，甜糯可口，适合煮食',
                qty: 8000,
                unit: '斤',
                price: 1.35,
                note: '现掰现发',
                location: '河北张家口',
                distanceKm: 68.0,
                status: 'active',
                createdAt: new Date(Date.now() - 12.5 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 12.5 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            // 几天前 (1-5天)
            {
                id: 'DM2026022118000212',
                role: 'farmer',
                ownerName: '草原牧业',
                ownerMobile: '128****7777',
                category: '肉类',
                content: '山羊肉，放养草饲，肉质鲜嫩',
                qty: 500,
                unit: '斤',
                price: 32.0,
                note: '冷链运输',
                location: '内蒙古赤峰',
                distanceKm: 125.0,
                status: 'active',
                createdAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026022012000213',
                role: 'farmer',
                ownerName: '疆果直发',
                ownerMobile: '127****8888',
                category: '水果',
                content: '冰糖心苹果，甜脆多汁，糖心率高',
                qty: 10000,
                unit: '斤',
                price: 3.5,
                note: '产地直邮',
                location: '新疆阿克苏',
                distanceKm: 380.0,
                status: 'active',
                createdAt: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026021908000214',
                role: 'farmer',
                ownerName: '海产品批发',
                ownerMobile: '126****9999',
                category: '其他',
                content: '干海带丝，无沙免洗，泡发率高',
                qty: 500,
                unit: '斤',
                price: 11.0,
                note: '干货耐存',
                location: '福建宁德',
                distanceKm: 190.0,
                status: 'active',
                createdAt: new Date(Date.now() - 3.5 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 3.5 * 24 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            {
                id: 'DM2026021806000215',
                role: 'farmer',
                ownerName: '山珍特产店',
                ownerMobile: '125****0000',
                category: '其他',
                content: '东北黑木耳，肉厚朵大，泡发率高',
                qty: 300,
                unit: '斤',
                price: 42.0,
                note: '野生品质',
                location: '黑龙江牡丹江',
                distanceKm: 290.0,
                status: 'active',
                createdAt: new Date(Date.now() - 4.5 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 4.5 * 24 * 60 * 60 * 1000).toISOString(),
                closedAt: ''
            },
            // 已关闭的需求 (用于展示 closed 状态)
            {
                id: 'DM2026021711200091',
                role: 'buyer',
                ownerName: '张老板农贸',
                ownerMobile: '138****8888',
                category: '粮油',
                content: '收购东北大米，已完成',
                qty: 8000,
                unit: '斤',
                price: 2.2,
                note: '',
                location: '黑龙江哈尔滨',
                distanceKm: 18.2,
                status: 'closed',
                createdAt: '2026-02-17T11:20:00+08:00',
                updatedAt: '2026-02-18T12:40:00+08:00',
                closedAt: '2026-02-18T12:40:00+08:00'
            },
            {
                id: 'DM2026021610250092',
                role: 'farmer',
                ownerName: '李大姐果园',
                ownerMobile: '139****6666',
                category: '水果',
                content: '出售脐橙，已关闭',
                qty: 2400,
                unit: '斤',
                price: 2.9,
                note: '',
                location: '江西赣州',
                distanceKm: 21.0,
                status: 'closed',
                createdAt: '2026-02-16T10:25:00+08:00',
                updatedAt: '2026-02-17T09:18:00+08:00',
                closedAt: '2026-02-17T09:18:00+08:00'
            }
        ];
    }

    function loadDemandsRaw() {
        var text = safeGetStorageItem(DEMAND_STORAGE_KEY);
        if (!text) {
            var init = buildBaseDemands();
            safeSetStorageItem(DEMAND_STORAGE_KEY, JSON.stringify(init));
            return init;
        }
        try {
            var parsed = JSON.parse(text);
            if (!Array.isArray(parsed)) {
                var fallback = buildBaseDemands();
                safeSetStorageItem(DEMAND_STORAGE_KEY, JSON.stringify(fallback));
                return fallback;
            }
            return parsed;
        } catch (err) {
            var recovery = buildBaseDemands();
            safeSetStorageItem(DEMAND_STORAGE_KEY, JSON.stringify(recovery));
            return recovery;
        }
    }

    function saveDemandsRaw(list) {
        safeSetStorageItem(DEMAND_STORAGE_KEY, JSON.stringify(list));
    }

    function getDemands(options) {
        var opts = options || {};
        var role = opts.role || '';
        var status = opts.status || 'all';
        var sort = opts.sort || 'latest';
        var list = loadDemandsRaw().filter(function(item) {
            if (role && item.role !== role) return false;
            if (status !== 'all' && item.status !== status) return false;
            return true;
        });
        list.sort(function(a, b) {
            if (sort === 'nearest') {
                return Number(a.distanceKm || 999) - Number(b.distanceKm || 999);
            }
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        return cloneData(list);
    }

    function findDemandById(demandId) {
        if (!demandId) return null;
        var found = loadDemandsRaw().find(function(item) { return item.id === demandId; });
        return found ? cloneData(found) : null;
    }

    function createDemand(payload) {
        if (!payload || !payload.role) return null;
        var now = new Date().toISOString();
        var profile = ROLE_PROFILE[payload.role] || ROLE_PROFILE.buyer;
        var demand = {
            id: buildDemandId(new Date()),
            role: payload.role,
            ownerName: payload.ownerName || profile.name,
            ownerMobile: payload.ownerMobile || profile.mobile,
            category: payload.category || '其他',
            content: payload.content || '',
            qty: Number(payload.qty || 0),
            unit: payload.unit || '斤',
            price: payload.price === '' || payload.price === null || payload.price === undefined ? null : Number(payload.price),
            note: payload.note || '',
            location: payload.location || '',
            distanceKm: payload.distanceKm === undefined || payload.distanceKm === null
                ? Number((1 + Math.random() * 20).toFixed(1))
                : Number(payload.distanceKm),
            status: 'active',
            createdAt: now,
            updatedAt: now,
            closedAt: ''
        };
        var list = loadDemandsRaw();
        list.unshift(demand);
        saveDemandsRaw(list);
        return cloneData(demand);
    }

    function updateDemand(demandId, patch) {
        if (!demandId || !patch) return null;
        var list = loadDemandsRaw();
        var idx = list.findIndex(function(item) { return item.id === demandId; });
        if (idx < 0) return null;
        var next = Object.assign({}, list[idx], cloneData(patch), { updatedAt: new Date().toISOString() });
        if (next.status === 'closed' && !next.closedAt) {
            next.closedAt = new Date().toISOString();
        }
        list[idx] = next;
        saveDemandsRaw(list);
        return cloneData(next);
    }

    function closeDemand(demandId) {
        return updateDemand(demandId, { status: 'closed' });
    }

    function clearDemands() {
        safeRemoveStorageItem(DEMAND_STORAGE_KEY);
    }

    window.DemandMockStore = {
        buildDemandId: buildDemandId,
        getDemands: getDemands,
        findDemandById: findDemandById,
        createDemand: createDemand,
        updateDemand: updateDemand,
        closeDemand: closeDemand,
        clearDemands: clearDemands
    };
})();

// ==================== 页面过渡（统一拦截所有内部链接） ====================
function getUrlParam(k) { return new URLSearchParams(window.location.search).get(k); }

function _navigateTo(href) {
    // 同页面不跳转
    var cur = window.location.pathname.split('/').pop().split('?')[0];
    var tar = href.split('?')[0];
    if (cur === tar) return;
    var box = document.querySelector('.mobile-container');
    if (box) {
        box.classList.add('_leaving');
        setTimeout(function() { window.location.href = href; }, 150);
    } else {
        window.location.href = href;
    }
}

// 全局委托：拦截所有 .nav-link 和普通内部 <a> 的点击
document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf('javascript:') === 0 || href.indexOf('http') === 0) return;
    e.preventDefault();
    _navigateTo(href);
}, true);

// ==================== 邮政风格专属组件 ====================
// 为邮粮通客户经理端H5提供的邮政风格UI组件扩展
// 使用 postal- 前缀与现有农产品风格区分，支持双主题切换

/**
 * 注入邮政风格CSS变量
 * 在页面需要邮政风格时调用，注入邮政绿配色变量
 * 与现有农产品风格兼容，通过类名切换主题
 */
function injectPostalTheme() {
    if (document.getElementById('postal-theme-vars')) return;

    const style = document.createElement('style');
    style.id = 'postal-theme-vars';
    style.textContent = `
        /* 邮政绿主题变量 */
        :root {
            --postal-green: #11A64A;
            --postal-green-dark: #0D8A3D;
            --postal-green-light: #4CAF50;
            --postal-green-fade: rgba(17, 166, 74, 0.08);
            --postal-gold: #FFFBF0;
            --postal-card-bg: #FFFFFF;
            --postal-card-border: rgba(0, 0, 0, 0.04);
            --postal-text-primary: #1F2937;
            --postal-text-secondary: #6B7280;
            --postal-text-tertiary: #9CA3AF;
            --postal-warning: #F59E0B;
            --postal-danger: #EF4444;
            --postal-success: #11A64A;
        }

        /* 邮政风格基础类 */
        .postal-theme {
            background: linear-gradient(180deg, var(--postal-green) 0%, var(--postal-green-dark) 100%);
        }

        .postal-card {
            background: var(--postal-card-bg);
            border: 1px solid var(--postal-card-border);
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
        }

        .postal-card-pressed:active {
            transform: scale(0.98);
            box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* 邮政风格Hero区域 */
        .postal-hero {
            background: linear-gradient(135deg, var(--postal-green) 0%, var(--postal-green-dark) 100%);
            border-radius: 0 0 24px 24px;
            position: relative;
            overflow: hidden;
        }

        .postal-hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            border-radius: 50%;
        }

        .postal-hero::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: -10%;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
            border-radius: 50%;
        }

        /* 邮政风格Tab栏 */
        .postal-tab-bar {
            background: var(--postal-card-bg);
            border-top: 1px solid var(--postal-card-border);
            box-shadow: 0 -2px 10px rgba(0,0,0,0.04);
        }

        .postal-tab-item {
            color: var(--postal-text-secondary);
            transition: all 0.2s ease;
        }

        .postal-tab-item.active {
            color: var(--postal-green);
        }

        .postal-tab-item.active .postal-tab-icon {
            background: var(--postal-green-fade);
        }

        /* 快捷入口宫格 */
        .postal-grid-item {
            background: var(--postal-card-bg);
            border: 1px solid var(--postal-card-border);
            border-radius: 12px;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .postal-grid-item:active {
            transform: scale(0.96);
            background: var(--postal-green-fade);
        }

        .postal-grid-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }

        /* 待办事项 */
        .postal-todo-item {
            background: var(--postal-card-bg);
            border-left: 3px solid transparent;
            transition: all 0.2s ease;
        }

        .postal-todo-item:hover {
            border-left-color: var(--postal-green);
            background: var(--postal-green-fade);
        }

        .postal-todo-badge {
            min-width: 20px;
            height: 20px;
            padding: 0 6px;
            background: var(--postal-danger);
            color: white;
            border-radius: 10px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .postal-todo-badge.warning {
            background: var(--postal-warning);
        }

        /* 统计数字 */
        .postal-stat-number {
            font-size: 32px;
            font-weight: 700;
            color: white;
            line-height: 1.2;
        }

        .postal-stat-label {
            font-size: 13px;
            color: rgba(255,255,255,0.8);
        }

        /* 客户经理标签 */
        .postal-manager-tag {
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(4px);
            border-radius: 20px;
            padding: 4px 12px;
            font-size: 12px;
            color: white;
        }
    `;
    document.head.appendChild(style);
}

/**
 * 渲染邮政风格底部Tab栏（2个tab：首页 + 数据）
 * @param {string} activeTab - 当前激活的tab，'home' 或 'data'
 * @param {Object} options - 配置选项
 * @param {Function} options.onHomeClick - 首页点击回调
 * @param {Function} options.onDataClick - 数据页点击回调
 * @returns {string} HTML字符串
 */
function renderPostalTabBar(activeTab, options = {}) {
    const { onHomeClick, onDataClick } = options;

    const homeActive = activeTab === 'home' ? 'active' : '';
    const dataActive = activeTab === 'data' ? 'active' : '';

    const homeHandler = onHomeClick ? `onclick="(${onHomeClick})()"` : '';
    const dataHandler = onDataClick ? `onclick="(${onDataClick})()"` : '';

    return `
        <div class="postal-tab-bar fixed bottom-0 left-0 right-0 flex justify-around items-center py-2 pb-safe z-50">
            <div class="postal-tab-item ${homeActive} flex flex-col items-center py-2 px-6 cursor-pointer" ${homeHandler}>
                <div class="postal-tab-icon w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all">
                    <i class="fas fa-home text-lg"></i>
                </div>
                <span class="text-xs font-medium">首页</span>
            </div>
            <div class="postal-tab-item ${dataActive} flex flex-col items-center py-2 px-6 cursor-pointer" ${dataHandler}>
                <div class="postal-tab-icon w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all">
                    <i class="fas fa-chart-pie text-lg"></i>
                </div>
                <span class="text-xs font-medium">数据</span>
            </div>
        </div>
    `;
}

/**
 * 渲染邮政风格Hero组件
 * 展示客户经理欢迎语 + 今日概览统计
 * @param {Object} data - Hero数据
 * @param {string} data.managerName - 客户经理姓名
 * @param {string} data.managerTitle - 职位头衔（如：高级客户经理）
 * @param {number} data.todayVisits - 今日拜访数
 * @param {number} data.todayAccounts - 今日开户数
 * @param {number} data.pendingTasks - 待办事项数
 * @returns {string} HTML字符串
 */
function renderPostalHero(data) {
    const { managerName = '客户经理', managerTitle = '', todayVisits = 0, todayAccounts = 0, pendingTasks = 0 } = data;

    return `
        <div class="postal-hero px-5 pt-12 pb-8">
            <div class="relative z-10">
                <!-- 欢迎区 -->
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="postal-manager-tag">
                                <i class="fas fa-user-tie mr-1"></i>${managerTitle || '客户经理'}
                            </span>
                        </div>
                        <h1 class="text-2xl font-bold text-white">您好，${managerName}</h1>
                        <p class="text-sm text-white/70 mt-1">欢迎使用邮粮通工作平台</p>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <i class="fas fa-bell text-white text-lg"></i>
                        ${pendingTasks > 0 ? `<span class="absolute top-12 right-5 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">${pendingTasks > 99 ? '99+' : pendingTasks}</span>` : ''}
                    </div>
                </div>

                <!-- 今日概览 -->
                <div class="postal-card p-4">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-sm font-medium text-gray-700">今日概览</span>
                        <span class="text-xs text-gray-400">${new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'short' })}</span>
                    </div>
                    <div class="flex justify-around">
                        <div class="text-center">
                            <div class="postal-stat-number" style="color: var(--postal-green);">${todayVisits}</div>
                            <div class="text-xs text-gray-500 mt-1">拜访客户</div>
                        </div>
                        <div class="w-px bg-gray-200"></div>
                        <div class="text-center">
                            <div class="postal-stat-number" style="color: var(--postal-green);">${todayAccounts}</div>
                            <div class="text-xs text-gray-500 mt-1">新开账户</div>
                        </div>
                        <div class="w-px bg-gray-200"></div>
                        <div class="text-center">
                            <div class="postal-stat-number" style="color: var(--postal-warning);">${pendingTasks}</div>
                            <div class="text-xs text-gray-500 mt-1">待办事项</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * 渲染快捷入口宫格组件
 * 4-5个快捷入口：开户/查询/记录等
 * @param {Array} actions - 快捷入口配置数组
 * @param {string} actions[].icon - FontAwesome图标类名
 * @param {string} actions[].label - 入口标签
 * @param {string} actions[].color - 图标背景色（如：bg-green-500）
 * @param {Function} actions[].onClick - 点击回调函数
 * @returns {string} HTML字符串
 */
function renderQuickActions(actions) {
    if (!actions || actions.length === 0) {
        // 默认快捷入口
        actions = [
            { icon: 'fa-user-plus', label: '客户开户', color: 'bg-green-500', onClick: null },
            { icon: 'fa-search', label: '客户查询', color: 'bg-blue-500', onClick: null },
            { icon: 'fa-clipboard-list', label: '拜访记录', color: 'bg-orange-500', onClick: null },
            { icon: 'fa-hand-holding-usd', label: '贷款申请', color: 'bg-purple-500', onClick: null },
            { icon: 'fa-qrcode', label: '扫码办理', color: 'bg-teal-500', onClick: null }
        ];
    }

    const actionItems = actions.map((action, index) => {
        const clickHandler = action.onClick ? `onclick="(${action.onClick})()"` : '';
        return `
            <div class="postal-grid-item postal-card-pressed flex flex-col items-center py-4 cursor-pointer" ${clickHandler}>
                <div class="postal-grid-icon ${action.color} text-white mb-2">
                    <i class="fas ${action.icon}"></i>
                </div>
                <span class="text-sm font-medium text-gray-700">${action.label}</span>
            </div>
        `;
    }).join('');

    return `
        <div class="px-4 py-4">
            <div class="flex items-center justify-between mb-3">
                <span class="text-base font-semibold text-gray-800">快捷入口</span>
            </div>
            <div class="grid grid-cols-4 gap-3">
                ${actionItems}
            </div>
        </div>
    `;
}

/**
 * 渲染待办事项组件
 * 展示待审核、待跟进等代办事项
 * @param {Array} todos - 待办事项数组
 * @param {string} todos[].title - 事项标题
 * @param {string} todos[].subtitle - 副标题/描述
 * @param {string} todos[].type - 类型：'audit'(审核), 'follow'(跟进), 'remind'(提醒)
 * @param {number} todos[].count - 数量
 * @param {string} todos[].time - 时间信息
 * @param {Function} todos[].onClick - 点击回调
 * @returns {string} HTML字符串
 */
function renderTodoList(todos) {
    if (!todos || todos.length === 0) {
        return `
            <div class="px-4 py-4">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-base font-semibold text-gray-800">待办事项</span>
                </div>
                <div class="postal-card p-8 text-center">
                    <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                        <i class="fas fa-check text-gray-400 text-2xl"></i>
                    </div>
                    <p class="text-sm text-gray-500">暂无待办事项</p>
                </div>
            </div>
        `;
    }

    const typeIcons = {
        audit: 'fa-file-alt',
        follow: 'fa-phone',
        remind: 'fa-clock'
    };

    const typeColors = {
        audit: 'text-orange-500',
        follow: 'text-blue-500',
        remind: 'text-purple-500'
    };

    const todoItems = todos.map((todo, index) => {
        const clickHandler = todo.onClick ? `onclick="(${todo.onClick})()"` : '';
        const icon = typeIcons[todo.type] || 'fa-circle';
        const color = typeColors[todo.type] || 'text-gray-500';
        const badgeClass = todo.type === 'audit' ? '' : 'warning';

        return `
            <div class="postal-todo-item postal-card-pressed flex items-center p-3 mb-2 rounded-lg cursor-pointer" ${clickHandler}>
                <div class="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mr-3">
                    <i class="fas ${icon} ${color} text-lg"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-medium text-gray-800 truncate">${todo.title}</span>
                        ${todo.count > 0 ? `<span class="postal-todo-badge ${badgeClass}">${todo.count}</span>` : ''}
                    </div>
                    <p class="text-xs text-gray-500 truncate mt-0.5">${todo.subtitle || ''}</p>
                </div>
                ${todo.time ? `<span class="text-xs text-gray-400 ml-2">${todo.time}</span>` : ''}
                <i class="fas fa-chevron-right text-gray-300 ml-2 text-xs"></i>
            </div>
        `;
    }).join('');

    return `
        <div class="px-4 py-4">
            <div class="flex items-center justify-between mb-3">
                <span class="text-base font-semibold text-gray-800">待办事项</span>
                <span class="text-sm text-gray-500">共 ${todos.reduce((sum, t) => sum + (t.count || 0), 0)} 项</span>
            </div>
            <div>
                ${todoItems}
            </div>
        </div>
    `;
}
