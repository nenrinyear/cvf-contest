
/**
 * 
 * @returns {next.MetadataRoute.Sitemap} sitemap
 */
export default function sitemap() {
    return [
        {
            href: '/',
            lastModified: new Date().toISOString(),
        },
        {
            href: '/dash',
            lastModified: new Date().toISOString(),
        },
        {
            href: '/dash/login',
            lastModified: new Date().toISOString(),
        },
        {
            href: '/dash/register',
            lastModified: new Date().toISOString(),
        },
    ]
}