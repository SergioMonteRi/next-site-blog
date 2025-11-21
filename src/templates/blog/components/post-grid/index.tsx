interface PostGridProps {
  children: React.ReactNode
}

export const PostGrid = ({ children }: PostGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {children}
    </div>
  )
}
