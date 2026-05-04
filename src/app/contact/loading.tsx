// app/contact/loading.tsx
 function SkeletonCard() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-zinc-300 border-t-black dark:border-zinc-700 dark:border-t-white rounded-full animate-spin" />

        {/* Text */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Loading Contact...
        </p>

      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <SkeletonCard />
    </div>
  );
}