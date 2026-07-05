/**
 * 绿达智能体系统 - 共享国际化工具库
 * 所有子页面通过 <script src="../i18n.js"></script> 引用
 * 用法: I18N.t('key') 获取当前语言的文本
 *       I18N.setDict({...}) 设置页面级字典
 *       I18N.applyToDOM()  自动更新 data-i18n 元素
 */
(function(global) {
    'use strict';

    // ==================== 获取当前语言 ====================
    function getLangFromURL() {
        var m = location.search.match(/[?&]lang=([a-z]+)/i);
        return m ? m[1] : (localStorage.getItem('lvda-lang') || 'zh');
    }

    var currentLang = getLangFromURL();

    // ==================== 页级字典存储 ====================
    var pageDict = {};

    // ==================== 公共API ====================
    var I18N = {
        getLang: function() { return currentLang; },

        setLang: function(lang) {
            if (lang === currentLang) return;
            currentLang = lang;
            localStorage.setItem('lvda-lang', lang);
            this.applyToDOM();
            if (typeof window.onLangChange === 'function') {
                window.onLangChange(lang);
            }
        },

        /** 设置页级字典: I18N.setDict({ key: {zh:'中文', en:'English'}, ... }) */
        setDict: function(dict) {
            pageDict = dict || {};
            this.applyToDOM();
        },

        /** 合并追加字典项 */
        addDict: function(dict) {
            for (var k in dict) {
                if (dict.hasOwnProperty(k)) pageDict[k] = dict[k];
            }
        },

        /** 翻译单个key */
        t: function(key, fallback) {
            var entry = pageDict[key];
            if (!entry) return fallback || key;
            var val = entry[currentLang];
            if (val !== undefined && val !== null && val !== '') return val;
            val = entry['zh'];
            if (val !== undefined && val !== null) return val;
            return fallback || key;
        },

        /** 自动扫描 data-i18n 和 data-i18n-placeholder 属性并更新DOM */
        applyToDOM: function() {
            // 文本内容
            var els = document.querySelectorAll('[data-i18n]');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                var key = el.getAttribute('data-i18n');
                var translated = this.t(key);
                if (translated !== key) {
                    el.textContent = translated;
                }
            }
            // innerHTML
            var elsHtml = document.querySelectorAll('[data-i18n-html]');
            for (var j = 0; j < elsHtml.length; j++) {
                var el2 = elsHtml[j];
                var key2 = el2.getAttribute('data-i18n-html');
                var translated2 = this.t(key2);
                if (translated2 !== key2) {
                    el2.innerHTML = translated2;
                }
            }
            // placeholder
            var elsPh = document.querySelectorAll('[data-i18n-placeholder]');
            for (var k = 0; k < elsPh.length; k++) {
                var el3 = elsPh[k];
                var key3 = el3.getAttribute('data-i18n-placeholder');
                var translated3 = this.t(key3);
                if (translated3 !== key3) {
                    el3.placeholder = translated3;
                }
            }
            // title
            var elsTitle = document.querySelectorAll('[data-i18n-title]');
            for (var t = 0; t < elsTitle.length; t++) {
                var el4 = elsTitle[t];
                var key4 = el4.getAttribute('data-i18n-title');
                var translated4 = this.t(key4);
                if (translated4 !== key4) {
                    el4.title = translated4;
                }
            }
        }
    };

    // 暴露全局
    global.I18N = I18N;

    // ==================== 监听父窗口语言切换消息 ====================
    window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'langChange' && e.data.lang) {
            I18N.setLang(e.data.lang);
        }
    });

    // ==================== DOM加载完成后自动应用 ====================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            I18N.applyToDOM();
        });
    } else {
        I18N.applyToDOM();
    }

})(window);
