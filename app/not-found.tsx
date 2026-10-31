import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-parchment-100 text-center px-4 py-20">
      <h1 className="font-display text-6xl text-navy-800 sm:text-8xl">404</h1>
      <h2 className="mt-4 font-display text-2xl text-navy-800 sm:text-3xl">
        Page not found
      </h2>
      <p className="mt-4 max-w-md text-ink-light">
        This page does not exist or has moved. Try the home page, or use the
        menu at the top.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">
          Go to the home page
        </Button>
        <Button href="/contact" variant="ghost">
          Contact the school
        </Button>
      </div>
    </div>
  );
}
