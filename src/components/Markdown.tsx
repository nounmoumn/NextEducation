import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { asset } from '../data/site'

/** 게시물 본문 렌더러. `/images/...` 같은 루트 경로는 배포 base 경로에 맞춰 바꾼다. */
export default function Markdown({ children }: { children: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <img src={typeof src === 'string' && src.startsWith('/') ? asset(src) : src} alt={alt ?? ''} loading="lazy" />
          ),
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
