"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderUserBlock = void 0;
var lib_1 = require("./lib");
function renderUserBlock(favoriteItemsAmount) {
    var favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    var hasFavoriteItems = favoriteItemsAmount ? true : false;
    (0, lib_1.renderBlock)('user-block', "\n    <div class=\"header-container\">\n      <img class=\"avatar\" src=\"/img/avatar.png\" alt=\"Wade Warren\" />\n      <div class=\"info\">\n          <p class=\"name\">Wade Warren</p>\n          <p class=\"fav\">\n            <i class=\"heart-icon".concat(hasFavoriteItems ? ' active' : '', "\"></i>").concat(favoritesCaption, "\n          </p>\n      </div>\n    </div>\n    "));
}
exports.renderUserBlock = renderUserBlock;
