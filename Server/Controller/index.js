"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayPricePage = exports.DisplayFeaturePage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', {
        title: 'Home',
        page: 'home'
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayFeaturePage(req, res, next) {
    res.render('index', {
        title: 'Feature',
        page: 'feature'
    });
}
exports.DisplayFeaturePage = DisplayFeaturePage;
function DisplayPricePage(req, res, next) {
    res.render('index', {
        title: 'Price',
        page: 'price'
    });
}
exports.DisplayPricePage = DisplayPricePage;
function DisplayContactPage(req, res, next) {
    res.render('index', {
        title: 'Contact',
        page: 'contact'
    });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map