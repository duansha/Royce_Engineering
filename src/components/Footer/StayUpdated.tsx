import Image from "next/image";

const StayUpdated = () => {
  return (
    <>
      <div>
        <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
          Stay Updated
        </h3>
        <p className="text-body-color dark:text-body-color-dark mb-4 text-sm transition-colors">
          Get the latest news about MU5IC4GOOD events and our impact.
        </p>
        <form className="flex flex-col space-y-2">
          <input
            className="ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-base placeholder-gray-400 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-gray-600 dark:bg-gray-900"
            placeholder="Enter your email"
            required
            type="email"
            value=""
            readOnly
          />
          <button
            className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:from-pink-600 hover:to-purple-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-2 text-xs text-gray-400">
          Opens your email client with a pre-filled message
        </p>
      </div>
    </>
  );
};

export default StayUpdated;
