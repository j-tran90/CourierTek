import express, {
        Request,
        Response,
        NextFunction
} from 'express';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Home',
                page: 'home'
        });
}

export function DisplayFeaturePage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Feature',
                page: 'feature'
        });
}

export function DisplayPricePage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Price',
                page: 'price'
        });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void {
        res.render('index', {
                title: 'Contact',
                page: 'contact'
        });
}
