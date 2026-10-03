export default function Shimmer({ className = '' }: { className?: string }) {
  return <div className={`shimmer bg-shell ${className}`} aria-hidden />
}

