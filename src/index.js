"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_form_1 = require("./search-form");
var search_results_1 = require("./search-results");
var user_1 = require("./user");
var lib_1 = require("./lib");
window.addEventListener('DOMContentLoaded', function () {
    (0, user_1.renderUserBlock)('0');
    (0, search_form_1.renderSearchFormBlock)();
    (0, search_results_1.renderSearchStubBlock)();
    (0, lib_1.renderToast)({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: function () { console.log('Уведомление закрыто'); } });
});
