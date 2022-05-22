import express, {
        Request,
        Response,
        NextFunction
} from 'express';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'CourierTek',
                page: 'home'
        });
}

export function DisplayFeaturePage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Features - CourierTek',
                page: 'feature'
        });
}

export function DisplayPricePage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Pricing - CourierTek',
                page: 'home'
        });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Contact - CourierTek',
                page: 'contact'
        });
}

export function DisplayPrivacyPage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Privacy Policy - CourierTek',
                page: 'privacy'
        });
}
