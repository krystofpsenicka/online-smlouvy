<template>
  <div class="h-screen flex-col items-center px-32 pt-20">
    <div class="flex h-full flex-col justify-center text-center">
      <div
        class="flex content-center items-center justify-center text-5xl font-extrabold text-white"
      >
        <h1 class="min-w-max leading-tight">Contact us</h1>
      </div>

      <form
        @submit.prevent=""
        class="my-6 flex w-full flex-col items-center justify-center"
        action="/contact"
        method="post"
      >
        <div class="flex w-1/2 items-center justify-center">
          <div
            class="mr-4 flex h-full w-1/2 flex-col items-center justify-center"
          >
            <input
              type="text"
              placeholder="Email"
              class="mx-0 mb-4 w-full rounded-md"
            />
            <br />
            <input
              type="text"
              placeholder="First & Last Name"
              class="mx-0 mb-4 w-full rounded-md"
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              class="mx-0 w-full rounded-md"
            />
          </div>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            placeholder="Message"
            class="mx-0 h-full w-1/2 rounded-md"
          ></textarea>
        </div>
        <div class="w-1/2">
          <button
            class="mx-0 my-6 w-full min-w-max rounded-md bg-blue-600 px-5 py-3 text-lg font-bold text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
