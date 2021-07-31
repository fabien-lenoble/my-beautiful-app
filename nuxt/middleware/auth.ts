// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ({ redirect, $strapi }: { redirect: any, $strapi: any }) {
    if (!$strapi.user) {
        return redirect('/login');
    }
}
