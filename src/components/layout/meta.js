import Head from "next/head";

export default function MetaTag({ title = 'CVF - 映像創作コンテスト', description = 'CVFは、作り上げた映像を評価してもらえるコンテストです。'}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="icon" href="/favicon.webp" />
            <link rel="apple-touch-icon" href="/favicon.webp" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://cvf.vercel.app/" />
            <meta property="og:image" content="https://cvf.vercel.app/ogp.webp" />
            <meta property="og:site_name" content="CVF - 映像創作コンテスト" />
            <meta property="og:locale" content="ja_JP" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@cvforner" />
        </Head>
    )
}