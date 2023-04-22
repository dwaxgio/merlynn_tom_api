const TailwindcssFundamentals = () => {
  return (
    <>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">Title</div>
          <p class="text-slate-500">text</p>
        </div>
      </div>

      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/img/erin-lindford.jpg"
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Erin Lindford</p>
            <p class="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ">
            Message
          </button>
          <button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
          <button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
          <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Save changes
          </button>
        </div>
      </div>

      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Username</span>

          <input
            type="text"
            value="tbone"
            disabled
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
      </form>

      <a
        href="#"
        class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div class="flex items-center space-x-3">
          <svg
            class="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
            New project
          </h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">
          Create a new project from a variety of starting templates.
        </p>
      </a>

      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <input type="email" class="peer ..." />
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
      </form>

      <label>
        <span class="peer-invalid:text-red-500 ...">Email</span>
        <input type="email" class="peer ..." />
      </label>

      <fieldset>
        <legend>Published status</legend>

        <input
          id="draft"
          class="peer/draft"
          type="radio"
          name="status"
          checked
        />
        <label for="draft" class="peer-checked/draft:text-sky-500">
          Draft
        </label>

        <input
          id="published"
          class="peer/published"
          type="radio"
          name="status"
        />
        <label for="published" class="peer-checked/published:text-sky-500">
          Published
        </label>

        <div class="hidden peer-checked/draft:block">
          Drafts are only visible to administrators.
        </div>
        <div class="hidden peer-checked/published:block">
          Your post will be publicly visible on your site.
        </div>
      </fieldset>

      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          type="email"
          name="email"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>

      <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
        When you look
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>

      <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
        When you look
        <span class="relative">
          <span
            class="block absolute -inset-1 -skew-y-3 bg-pink-500"
            aria-hidden="true"
          ></span>
          <span class="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>

      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>

      <form class="flex items-center space-x-6">
        <div class="shrink-0">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <input
            type="file"
            class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
        </label>
      </form>

      <input type="file" class="file:border file:border-solid ..." />

      <ul
        role="list"
        class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400"
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>

      <div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
        <p>
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I <em>was</em> a marine biologist.
        </p>
      </div>

      <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            ></svg>
          </span>
        </div>
        <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>

      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg
          class="motion-reduce:hidden animate-spin ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>

      <button class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none ...">
        Save changes
      </button>

      <button class="motion-safe:hover:-translate-x-0.5 motion-safe:transition ...">
        Save changes
      </button>

      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">
            Social Security Number
          </span>
          <input class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
          <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
            We need this to steal your identity.
          </p>
        </label>
      </form>

      <div>
        <div class="portrait:hidden"></div>
        <div class="landscape:hidden">
          <p>
            This experience is designed to be viewed in landscape. Please rotate
            your device to view the site.
          </p>
        </div>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="/img/building.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailwindcssFundamentals;
