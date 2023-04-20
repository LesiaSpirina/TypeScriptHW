"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderToast = exports.renderBlock = void 0;
function renderBlock(elementId, html) {
    var element = document.getElementById('toast-block');
    element.innerHTML = html;
}
exports.renderBlock = renderBlock;
function renderToast(message, action) {
    var messageText = '';
    if (message != null) {
        messageText = "\n        <div id=\"info-block\" class=\"info-block ".concat(message.type, "\">\n          <p>").concat(message.text, "</p>\n          <button id=\"toast-main-action\">").concat((action === null || action === void 0 ? void 0 : action.name) || 'Закрыть', "</button>\n        </div>\n      ");
    }
    renderBlock('toast-block', messageText);
    var button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(message === null, action === null);
        };
    }
}
exports.renderToast = renderToast;
