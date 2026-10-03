/** Animated shimmer block used as the placeholder for product imagery. */
export default function Shimmer({ className = '' }: { className?: string }) {
  return <div className={`shimmer bg-shell ${className}`} aria-hidden />
}
