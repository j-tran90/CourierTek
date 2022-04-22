"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', {
        title: 'Home',
        page: 'home'
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayContactPage(req, res, next) {
    res.render('index', {
        title: 'Contact',
        page: 'contact'
    });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map