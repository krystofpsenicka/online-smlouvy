<template>
  <div class="h-screen flex-col items-center px-32">
    <div class="flex h-full flex-col justify-center text-center">
      <div
        class="flex content-center items-center justify-center text-5xl font-extrabold text-white"
      >
        <h1 class="min-w-max leading-tight">Get access</h1>
      </div>

      <p class="my-4 min-w-max items-center text-lg font-normal text-gray-400">
        Sign up to get the early access version of our revolutionary VR
        software.
      </p>
      <form
        @submit.prevent=""
        class="my-10 flex-col items-center justify-center"
        action="/access"
        method="post"
      >
        <input type="text" placeholder="Email" class="mx-0 w-4/12 rounded-md" />
        <div>
          <button
            class="mx-0 my-6 min-w-max rounded-md bg-blue-600 px-5 py-3 text-lg font-bold text-white"
          >
            Get Early Access
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
