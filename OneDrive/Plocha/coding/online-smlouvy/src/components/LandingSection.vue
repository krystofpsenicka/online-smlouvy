<script setup>
import gsap from "gsap"
import { onMounted, ref } from "vue"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import {
  Clock,
  AnimationClip,
  VectorKeyframeTrack,
  AnimationMixer,
} from "three"

import * as TWEEN from "@tweenjs/tween.js"

const landingContent = ref(null)
const canvas = ref(null)

onMounted(() => {
  gsap.from(landingContent.value.children, {
    y: "+100",
    delay: 5,
    duration: 2,
    stagger: 0.25,
    autoAlpha: 0,
  })

  const renderer = new THREE.WebGLRenderer({ antialiasing: true })
  renderer.setPixelRatio(window.devicePixelRatio * 2)
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvas.value.appendChild(renderer.domElement)

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
  )

  camera.position.set(-0.7, 0.3, 2.5)
  camera.lookAt(-0.7, 0.3, 0)

  const scene = new THREE.Scene()

  scene.background = null

  const loader = new GLTFLoader()

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath("/examples/jsm/libs/draco/")
  loader.setDRACOLoader(dracoLoader)

  const d = 10
  const light1 = new THREE.DirectionalLight(0xffffff, 0.9)
  light1.position.set(-1, 0, 2)
  light1.shadow.camera.left = -d
  light1.shadow.camera.right = d
  light1.shadow.camera.top = d
  light1.shadow.camera.bottom = -d
  light1.lookAt(-1, 0, 0)
  light1.castShadow = true

  scene.add(light1)

  loader.load(
    "/3dmodel/kupni_smlouva.gltf",
    function (gltf) {
      gltf.scene.children[1].position.set(-0.7, 0.1, 2.9)
      gltf.scene.children[2].position.set(-0.7, 0.1, 3)
      scene.add(gltf.scene)

      gltf.animations // Array<THREE.AnimationClip>
      gltf.scene // THREE.Group
      gltf.scenes // Array<THREE.Group>
      gltf.cameras // Array<THREE.Camera>
      gltf.asset // Object

      //make animations work
      const animate = (t) => {
        TWEEN.update(t)
        window.requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()

      //init animation
      const tween1 = new TWEEN.Tween({ z1: 3, z2: 2.9 })
        .to({ z1: 0.2, z2: 0.1 }, 2000)
        .onUpdate((c) => {
          //page1
          gltf.scene.children[2].position.z = c.z1
          //page2
          gltf.scene.children[1].position.z = c.z2
        })
        .easing(TWEEN.Easing.Exponential.InOut)
        .delay(1500)

      const tween2 = new TWEEN.Tween({
        x1: -0.7,
        x2: -0.7,
        y1: 0.1,
        y2: 0.1,
        z2: 0.1,
        z1: 0.2,
        xRotation: 0,
        zRotation: 0,
        yRotation: 0,
      })
        .to(
          {
            x2: -0.4,
            x1: 0.5,
            y1: 0.4,
            y2: 0.047,
            z2: -0.98,
            z1: -0.68,
            xRotation: -Math.PI / 9,
            zRotation: -Math.PI / 8,
            yRotation: -Math.PI / 6,
          },
          2000
        )
        .onUpdate((c) => {
          //page 1
          gltf.scene.children[2].position.x = c.x1
          gltf.scene.children[2].position.y = c.y1
          gltf.scene.children[2].position.z = c.z1
          gltf.scene.children[2].rotation.x = c.xRotation
          gltf.scene.children[2].rotation.z = c.zRotation
          gltf.scene.children[2].rotation.y = c.yRotation
          //page2
          gltf.scene.children[1].position.x = c.x2
          gltf.scene.children[1].position.y = c.y2
          gltf.scene.children[1].position.z = c.z2
          gltf.scene.children[1].rotation.x = c.xRotation
          gltf.scene.children[1].rotation.z = -c.zRotation
          gltf.scene.children[1].rotation.y = -c.yRotation
        })
        .easing(TWEEN.Easing.Exponential.InOut)
        .delay(500)

      tween1.chain(tween2)
      //start init animation
      tween1.start()
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )
})
</script>

<template>
  <div class="flex h-screen flex-row px-32">
    <div class="mt-14 flex flex-1 flex-col justify-center" ref="landingContent">
      <div class="mb-20 w-2/5">
        <div
          class="flex content-start items-center text-6xl font-extrabold text-white"
        >
          <h1
            class="text-gradient whitespace-normal font-playfair-display leading-tight"
          >
            Smlouvy na míru online
          </h1>
        </div>

        <p class="mt-4 w-4/5 whitespace-normal text-xl font-normal text-white">
          Svěřte se do rukou profesionálů, kteří vám vypracují smlouvu podle
          vašich potřeb a objevte tak kouzlo online smluv bez nutnosti osobní
          schůzky.
        </p>
      </div>
      <div class="flex w-1/5">
        <router-link
          to="/access"
          class="btn-background block min-w-max rounded-md px-5 py-3 text-lg font-bold text-black"
          >Poptat Smlouvu</router-link
        >
      </div>
    </div>
    <div ref="canvas" class="absolute top-0 left-0 z-0"></div>
  </div>
</template>

<style>
.text-gradient {
  background: linear-gradient(to right, #1565c0, 40%, #fff, 99%, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-background {
  background: linear-gradient(to bottom, #1565c0, 60%, #fff);
}
</style>
