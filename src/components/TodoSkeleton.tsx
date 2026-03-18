export default function TodoSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="card p-4 flex items-center gap-3">
          <div className="w-6 h-6 rounded-full animate-shimmer flex-shrink-0" />
          <div className="flex-1 h-5 animate-shimmer rounded" />
          <div className="w-5 h-5 animate-shimmer rounded flex-shrink-0" />
        </div>
      ))}
    </div>
  )
}
