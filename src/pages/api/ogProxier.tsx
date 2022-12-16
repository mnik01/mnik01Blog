import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'
import { OgImageProxier } from '../../components/OgImageProxier'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : ''

    return new ImageResponse(
      <OgImageProxier hasTitle={hasTitle} title={title} />,
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji',
      },
    )
  }
  catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(`${e.message}`)
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
