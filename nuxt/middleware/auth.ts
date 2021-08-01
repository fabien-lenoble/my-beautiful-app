
import { Middleware } from '@nuxt/types';

const myMiddleware: Middleware = async (context) => {
    // const token = context.$strapi.getToken();
    const user = context.$strapi.user;
    if (!user) {
        // if (token) {
        //     const a = await context.$strapi.fetchUser();
        //     console.log('-', token, a, context.$strapi.user);

        //     return;
        // }
        const nextUrl = encodeURIComponent(context.route.fullPath);
        return context.redirect('/login', nextUrl ? { nextUrl } : undefined);
    }
};

export default myMiddleware;
