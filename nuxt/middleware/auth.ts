
import { Middleware } from '@nuxt/types';

const myMiddleware: Middleware = async (context) => {
    if (!context.$strapi.user) {
        const nextUrl = encodeURIComponent(context.route.fullPath);
        return context.redirect('/login', nextUrl ? { nextUrl } : undefined);
    }
};

export default myMiddleware;
