import './globals.css';
import { Jost, Zen_Maru_Gothic } from 'next/font/google';

const url = process.env.NEXT_PUBLIC_HOST_URL;
/**
 * @type {next.Metadata}
 */
export const metadata = {
  title: {
    default: 'CVF - 映像創作コンテスト',
    template: '%s | CVF',
  },
  description: 'CVFは、作り上げた映像を評価してもらえるコンテストです。',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png', },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png', },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5', },
    ]
  },
  manifest: url + '/manifest.json',
  openGraph: {
    title: {
      default: 'CVF - 映像創作コンテスト',
      template: '%s | CVF',
    },
    description: 'CVFは、作り上げた映像を評価してもらえるコンテストです。',
    type: 'website',
    url: url,
    site_name: 'CVF - 映像創作コンテスト',
    locale: 'ja_JP',
    images: [
      {
        url: url + '/ogp.webp',
        alt: 'CVF - 映像創作コンテスト',
      },
    ],
  },
  twitter: {
    title: 'CVF - 映像創作コンテスト',
    description: 'CVFは、作り上げた映像を評価してもらえるコンテストです。',
    card: 'summary_large_image',
    creator: '@cvforner',
    images: {
      url: url + '/ogp-twitter.webp',
      alt: 'CVF - 映像創作コンテスト',
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
