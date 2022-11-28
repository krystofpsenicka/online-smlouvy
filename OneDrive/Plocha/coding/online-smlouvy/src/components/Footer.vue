<template>
  <div
    class="h-2/3-screen flex flex-col items-center justify-between px-32 pt-12 text-white"
  >
    <div class="flex w-full flex-row justify-between">
      <div>
        <div class="mb-5 flex flex-row items-center space-x-3">
          <img src="/img/VRlogo.svg" alt="VR-logo" class="filter-white w-9" />
          <h1 class="min-w-max text-lg font-bold text-white">VR Team</h1>
        </div>
        <div class="min-w-max text-sm font-normal">
          Collaboration platform for<br />
          modern teams.
        </div>
      </div>
      <div class="flex w-3/5 flex-row justify-between">
        <div class="flex min-w-max flex-col space-y-5 text-sm">
          <h1 class="min-w-max text-base font-bold">Features</h1>
          <p>Screen Sharing</p>
          <p>IOS & Android Apps</p>
          <p>File Sharing</p>
          <p>User Management</p>
        </div>
        <div class="flex min-w-max flex-col space-y-5 text-sm">
          <h1 class="min-w-max text-base font-bold">CONTACT US</h1>
          <p>info@vrteam.com</p>
          <p>1-800-200-300</p>
          <p>
            1010 Sunset Blvd.<br />
            Palo Alto, CA
          </p>
        </div>
        <div class="flex min-w-max flex-col space-y-5 text-sm">
          <h1 class="min-w-max text-base font-bold">STAY UP TO DATE</h1>
          <p>Subscribe to our newsletter</p>
          <form @submit.prevent="" action="/subscribe">
            <input
              class="rounded-md text-black ring-gray-500"
              type="text"
              placeholder="Email"
            />
            <button
              type="submit"
              class="relative -left-6 text-lg font-bold text-gray-500"
            >
              &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="min-w-max py-6 text-base font-normal">
      &copy Copyright VR TEAM inc.
    </div>
  </div>
</template>

<style>
.filter-white {
  filter: invert(100%) sepia(3%) saturate(3%) hue-rotate(233deg)
    brightness(103%) contrast(100%);
}

.h-2\/3-screen {
  height: 66.66666vh;
}
</style>
