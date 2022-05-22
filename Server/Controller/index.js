"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayPrivacyPage = exports.DisplayContactPage = exports.DisplayPricePage = exports.DisplayFeaturePage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', {
        title: 'CourierTek',
        page: 'home'
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayFeaturePage(req, res, next) {
    res.render('index', {
        title: 'Features - CourierTek',
        page: 'feature'
    });
}
exports.DisplayFeaturePage = DisplayFeaturePage;
function DisplayPricePage(req, res, next) {
    res.render('index', {
        title: 'Pricing - CourierTek',
        page: 'home'
    });
}
exports.DisplayPricePage = DisplayPricePage;
function DisplayContactPage(req, res, next) {
    res.render('index', {
        title: 'Contact - CourierTek',
        page: 'contact'
    });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayPrivacyPage(req, res, next) {
    res.render('index', {
        title: 'Privacy Policy - CourierTek',
        page: 'privacy'
    });
}
exports.DisplayPrivacyPage = DisplayPrivacyPage;
//# sourceMappingURL=index.js.map