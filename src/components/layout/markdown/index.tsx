import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        p: ({ children }) => (
          <p className="mb-6 text-body-sm leading-relaxed text-gray-200">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-100">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="mb-6 list-disc pl-4 text-body-sm text-gray-200">
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className="text-body-sm text-gray-200">{children}</li>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
