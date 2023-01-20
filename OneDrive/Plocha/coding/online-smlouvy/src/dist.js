import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

import * as TWEEN from "@tweenjs/tween.js"

const threejsModel = (mouseEfContainer, canvas) => {
  //threejs
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
      gltf.scene.children[2].receiveShadow = true
      gltf.scene.children[1].receiveShadow = true
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
        .to({ z1: 0.2, z2: 0.1 }, 900)
        .onUpdate((c) => {
          //page1
          gltf.scene.children[2].position.z = c.z1
          //page2
          gltf.scene.children[1].position.z = c.z2
        })
        .easing(TWEEN.Easing.Exponential.InOut)
        .delay(0)

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
          1000
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
        .delay(100)

      tween1.chain(tween2)
      //start init animation
      tween1.start()

      //rotate model based on mouse position
      const page1InitRot = {
        x: -0.3490658503988659,
        y: -0.5235987755982988,
      }
      const page2InitRot = {
        x: -0.3490658503988659,
        y: 0.5235987755982988,
      }
      setTimeout(() => {
        mouseEfContainer.value.addEventListener("mousemove", (e) => {
          let xAxis = (window.innerWidth / 2 - e.pageX) / 9500
          let yAxis = (window.innerHeight / 2 - e.pageY) / 8000
          //page1
          gltf.scene.children[2].rotation.x = page1InitRot.x - yAxis
          gltf.scene.children[2].rotation.y = page1InitRot.y - xAxis
          //page2
          gltf.scene.children[1].rotation.x = page2InitRot.x - yAxis
          gltf.scene.children[1].rotation.y = page2InitRot.y - xAxis
        })
        mouseEfContainer.value.addEventListener("mouseout", (e) => {
          gltf.scene.children[1].rotation.x = page2InitRot.x
          gltf.scene.children[1].rotation.y = page2InitRot.y
          gltf.scene.children[2].rotation.y = page1InitRot.y
          gltf.scene.children[2].rotation.y = page1InitRot.y
        })
      }, 2000)
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )
}

const anim = (options) => {
  const { parent, duration, stagger, ease, delay, change } = options
  const children = []
  //populate children array
  if (stagger !== undefined) {
    Object.values(parent.children).forEach((child) => {
      if (child.children[1] !== undefined) {
        Object.values(child.children).forEach((ch) => {
          children.push(ch)
        })
      } else {
        children.push(child)
      }
    })
  } else {
    children.push(parent)
  }

  const singleDuration =
    duration / children.length - stagger / (children.length - 1)
  children.forEach((child, i) => {
    //move children away and make invisible
    Object.entries(change).forEach(([key, value]) => {
      child.style[key] = value[0]
      child.style.transition += `${key} ${singleDuration}s ${ease} ${
        stagger * i
      }s`
    })
  })
  //animate
  setTimeout(() => {
    children.forEach((child) => {
      Object.entries(change).forEach(([key, value]) => {
        child.style[key] = value[1]
      })
    })
  }, delay * 1000)
}

export { threejsModel, anim }
