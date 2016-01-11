/**
 * Copyright (c) 2016 Derek Deng
 * Licensed under the MIT license
 * https://github.com/dengzz/dtip.js
 *
 * Example:
    dtip("hi world!");
 */
; (function (factory) {
    factory(window.jQuery);
} (function ($) {
    "use strict";
    var timeout = 0, container = null;
    var remove  = function () {
        document.body.removeChild(container);
    };
    var clear = function () {
        if (timeout > 0) {
            clearTimeout(timeout);
            timeout = 0;
            remove();
        }
    };
    var fadeOut = function () {
        $(container).fadeOut("slow", function () {
            clear();
        });
    };
    var create = function (text) {
        container = document.createElement("div");
        $.extend(container.style, {
            position: "fixed",
            width: "100%",
            top: "30%",
            textAlign: "center",
            zIndex: "9999"
        });
        var textTag = document.createElement("span");
        $.extend(textTag.style, {
            background: "#000",
            opacity: "0.8",
            filter: "alpha(opacity=80)",
            zIndex: "-1",
            border: "1px solid #666",
            padding: "10px 20px",
            color: "#fff",
            display: "inline-block",
            fontSize: "12px",
            borderRadius: "5px"
        });
        container.appendChild(textTag);
        textTag.innerText = text;
        document.body.appendChild(container);
    };
    window.dtip = function (text) {
        clear();
        timeout = setTimeout(fadeOut, 1500);
        create(text);
    };
}));