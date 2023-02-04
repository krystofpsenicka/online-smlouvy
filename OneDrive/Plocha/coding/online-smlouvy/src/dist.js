import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

import * as TWEEN from "@tweenjs/tween.js"

//3d model
const threejsModel = (mouseEfContainer, canvas) => {
  //threejs
  const renderer = new THREE.WebGLRenderer({ antialiasing: true })
  renderer.setPixelRatio(window.devicePixelRatio * 2)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.physicallyCorrectLights = true
  canvas.value.appendChild(renderer.domElement)

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
  )
  if (window.innerWidth / window.innerHeight < 1200 / 670) {
    camera.position.set(0, 0.3, 2.5)
    camera.lookAt(0, 0.3, 0)
  } else {
    camera.position.set(-0.7, 0.3, 2.5)
    camera.lookAt(-0.7, 0.3, 0)
  }

  const scene = new THREE.Scene()

  scene.background = null

  const loader = new GLTFLoader()

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath("/examples/jsm/libs/draco/")
  loader.setDRACOLoader(dracoLoader)

  const d = 10
  const light1 = new THREE.DirectionalLight(0xffffff, 2)
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
      if (window.innerWidth < 1000) {
        gltf.scene.scale.set(0.7, 0.7, 0.7)
      } else {
        gltf.scene.scale.set(1, 1, 1)
      }
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
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)

        if (window.innerWidth / window.innerHeight < 1200 / 670) {
          camera.position.set(0, 0.3, 2.5)
          camera.lookAt(0, 0.3, 0)
        } else {
          camera.position.set(-0.7, 0.3, 2.5)
          camera.lookAt(-0.7, 0.3, 0)
        }
        if (window.innerWidth < 1000) {
          gltf.scene.scale.set(
            window.innerWidth / 900,
            window.innerWidth / 900,
            window.innerWidth / 900
          )
        } else {
          gltf.scene.scale.set(1, 1, 1)
        }
      })
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )
}

//universal animation function
const anim = (options) => {
  let { parent, duration, stagger, ease, delay, change } = options
  const children = []
  //populate children array based on existence of stagger
  if (stagger !== undefined) {
    Object.values(parent.children).forEach((child) => {
      if (child.children[0] !== undefined) {
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

  //make singleDuration conditional based on if there is only 1 child
  let singleDuration
  if (children.length === 1) {
    singleDuration = duration
    stagger = 0
  } else {
    singleDuration =
      duration / children.length - stagger / (children.length - 1)
  }

  children.forEach((child, i) => {
    const transition = []

    Object.keys(change).forEach((key) => {
      //set children styles to init styles
      child.style[key] = change[key][0]
      //populate transition array
      transition.push(`${key} ${singleDuration}s ${ease} ${stagger * i}s`)
    })
    //add transition to children
    child.style.transition = transition.join(", ")
  })

  //animate
  setTimeout(() => {
    children.forEach((child) => {
      Object.keys(change).forEach((key) => {
        child.style[key] = change[key][1]
      })
      //remove transition after animation for future manipulation (eg. parallax)
      child.addEventListener(
        "transitionend",
        (e) => {
          child.style.transition = ""
        },
        false
      )
    })
  }, delay * 1000)
}

//lazyload
const lazyLoad = (options) => {
  const { element, margin, stagger } = options

  //set children or parent el to init styles
  if (stagger !== undefined) {
    Object.values(element.children).forEach((child) => {
      if (child.children[0] !== undefined) {
        Object.values(child.children).forEach((ch) => {
          ch.style.opacity = 0
          ch.style.transform = "translateY(20%)"
        })
      } else {
        child.style.opacity = 0
        ch.style.transform = "translateY(20%)"
      }
    })
  } else {
    element.style.opacity = 0
    element.style.transform = "translateY(20%)"
  }

  const settings = {
    root: null,
    rootMargin: margin,
    threshold: 0.8,
  }
  let observed
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        //lazyload only on first intersection
        if (observed) {
          observer.unobserve(element)
        } else {
          anim({
            parent: element,
            duration: 2,
            stagger: 0.2,
            ease: "cubic-bezier(0, 0.55, 0.45, 1)",
            delay: 0,
            change: {
              transform: ["translateY(20%)", "translateY(0%)"],
              opacity: [0, 1],
            },
          })
        }
        observed = true
      }
    })
  }, settings)
  observer.observe(element)
}

//lazyload and parallax effect
const lazyLoadParallax = (options) => {
  const { element, margin, stagger, parallax } = options

  const children = []
  //set children or parent el to init styles and populate children arr
  if (stagger !== undefined) {
    Object.values(element.children).forEach((child) => {
      if (child.children[0] !== undefined) {
        Object.values(child.children).forEach((ch) => {
          children.push(ch)
          ch.style.opacity = 0
          ch.style.transform = "translateY(20%)"
        })
      } else {
        child.style.opacity = 0
        ch.style.transform = "translateY(20%)"
        children.push(child)
      }
    })
  } else {
    element.style.opacity = 0
    element.style.transform = "translateY(20%)"
    children.push(element)
  }

  const settings = {
    root: null,
    rootMargin: margin,
    threshold: 0.8,
  }
  //finished animation
  let animfin
  //lazyload anim after intersection
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        //lazyload only on first intersection
        if (animfin) {
          observer.unobserve(element)
        } else {
          anim({
            parent: element,
            duration: 2,
            stagger: 0.2,
            ease: "cubic-bezier(0, 0.55, 0.45, 1)",
            delay: 0,
            change: {
              transform: ["translateY(20%)", "translateY(0%)"],
              opacity: [0, 1],
            },
          })
        }
        animfin = true
      }
    })
  }, settings)

  //multiple el parallax
  window.addEventListener("scroll", (e) => {
    //parallax after lazyload animation is done
    if (animfin) {
      const box = element.getBoundingClientRect()
      const docEl = document.documentElement

      const scrollTop = window.pageYOffset || docEl.scrollTop

      const clientTop = docEl.clientTop || 0
      //calculate top of element for offset
      const top = box.top + scrollTop - clientTop

      children.forEach((child, i) => {
        const max = box.height / 10
        const pos = (window.scrollY - top) * (i - 1) * parallax

        //limit parallax to max
        let finpos
        if (pos > max) {
          finpos = max
        } else if (pos < -max) {
          finpos = -max
        } else if (pos > -max && pos < max) {
          finpos = pos
        }
        child.style.transform = `translateY(${finpos}px)`
        console.log(child.style.transform)
      })
    }
  })

  observer.observe(element)
}

//svg line anim
const svgAnim = (path) => {
  const pathLength = path.getTotalLength()
  const pathOffset =
    (path.getBoundingClientRect().top + window.scrollY) /
      document.body.getBoundingClientRect().height -
    0.005

  path.style.strokeDasharray = pathLength + " " + pathLength
  path.style.strokeDashoffset = pathLength.toString()

  window.addEventListener("scroll", () => {
    const scrollPercentage =
      ((document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight) -
        pathOffset) *
      (1 / pathOffset)

    const drawLength =
      pathLength * scrollPercentage * Number(path.dataset.speed)
    const drawOffset = pathLength - Number(path.dataset.offset) - drawLength

    path.style.strokeDashoffset = drawOffset.toString()
  })
}

export { threejsModel, anim, lazyLoad, lazyLoadParallax, svgAnim }
