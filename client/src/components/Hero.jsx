import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const waterRef = useRef(null);
  const boatRef = useRef(null);

  const heroSlides = [
    {
      title: "Experience Rishikesh",
      subtitle: "अद्वेंचर और शांति का संगम",
      description: "Specially curated adventures for students",
    },
    {
      title: "River Rafting",
      subtitle: "गंगा की धारा में साहसिक अनुभव",
      description: "Feel the thrill of white water rapids with your classmates",
    },
    {
      title: "Himalayan Retreat",
      subtitle: "हिमालय की गोद में आध्यात्मिक यात्रा",
      description: "Connect with nature and rejuvenate your mind",
    },
  ];

  // Setup Three.js scene
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      20000
    );
    camera.position.set(30, 30, 100);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xfff5e6, 1);
    directionalLight.position.set(0, 50, 100);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Sky
    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;
    skyUniforms["turbidity"].value = 10;
    skyUniforms["rayleigh"].value = 2;
    skyUniforms["mieCoefficient"].value = 0.005;
    skyUniforms["mieDirectionalG"].value = 0.8;

    const sun = new THREE.Vector3();
    const phi = THREE.MathUtils.degToRad(88);
    const theta = THREE.MathUtils.degToRad(180);
    sun.setFromSphericalCoords(1, phi, theta);
    skyUniforms["sunPosition"].value.copy(sun);

    // Water
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x0e7e9b,
      distortionScale: 3.7,
      fog: false,
    });
    water.rotation.x = -Math.PI / 2;
    water.position.y = -5;
    scene.add(water);
    waterRef.current = water;

    // Boat model (simplified geometry)
    const boatGroup = new THREE.Group();

    // Boat body
    const boatGeometry = new THREE.BoxGeometry(12, 3, 25);
    const boatMaterial = new THREE.MeshStandardMaterial({
      color: 0xe09a5d,
      roughness: 0.5,
      metalness: 0.2,
    });
    const boatBody = new THREE.Mesh(boatGeometry, boatMaterial);
    boatBody.position.y = 0;
    boatGroup.add(boatBody);

    // Boat bottom (more pointed)
    const boatBottomGeometry = new THREE.CylinderGeometry(0, 6, 8, 4, 1);
    const boatBottomMaterial = new THREE.MeshStandardMaterial({
      color: 0xd08c54,
      roughness: 0.6,
      metalness: 0.1,
    });
    const boatBottom = new THREE.Mesh(boatBottomGeometry, boatBottomMaterial);
    boatBottom.rotation.z = Math.PI / 2;
    boatBottom.rotation.y = Math.PI / 4;
    boatBottom.position.set(0, -2, -12);
    boatGroup.add(boatBottom);

    // Boat seats
    for (let i = -1; i <= 1; i++) {
      const seatGeometry = new THREE.BoxGeometry(14, 0.5, 2);
      const seatMaterial = new THREE.MeshStandardMaterial({
        color: 0xbf8040,
        roughness: 0.8,
        metalness: 0.1,
      });
      const seat = new THREE.Mesh(seatGeometry, seatMaterial);
      seat.position.set(0, 1, i * 8);
      boatGroup.add(seat);
    }

    // Boat paddles
    for (let side = -1; side <= 1; side += 2) {
      const paddleGeometry = new THREE.BoxGeometry(0.5, 0.5, 8);
      const paddleMaterial = new THREE.MeshStandardMaterial({
        color: 0xa67c52,
        roughness: 0.9,
        metalness: 0.1,
      });
      const paddle = new THREE.Mesh(paddleGeometry, paddleMaterial);
      paddle.position.set(side * 7, 1, 0);
      boatGroup.add(paddle);

      const paddleEndGeometry = new THREE.BoxGeometry(2, 0.2, 2);
      const paddleEnd = new THREE.Mesh(paddleEndGeometry, paddleMaterial);
      paddleEnd.position.set(side * 7, 1, -4);
      boatGroup.add(paddleEnd);
    }

    boatGroup.position.set(0, 2, 20);
    scene.add(boatGroup);
    boatRef.current = boatGroup;

    // Mountains/Hills in background
    const mountainGeometry = new THREE.ConeGeometry(50, 70, 4);
    const mountainMaterial = new THREE.MeshStandardMaterial({
      color: 0x4d7c5f,
      roughness: 0.9,
      metalness: 0.1,
    });

    // Add several mountains
    const mountainPositions = [
      { x: -100, z: -120 },
      { x: 70, z: -150 },
      { x: -50, z: -180 },
      { x: 120, z: -120 },
      { x: 0, z: -200 },
    ];

    mountainPositions.forEach((pos, i) => {
      const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
      mountain.position.set(pos.x, 0, pos.z);
      mountain.rotation.y = i * 0.4;
      scene.add(mountain);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate water
      water.material.uniforms["time"].value += 1.0 / 60.0;

      // Gentle boat animation - bobbing on water
      if (boatRef.current) {
        boatRef.current.position.y = 2 + Math.sin(Date.now() * 0.001) * 0.5;
        boatRef.current.rotation.x = Math.sin(Date.now() * 0.0008) * 0.05;
        boatRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  // Auto-rotate hero slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-transparent opacity-40"></div>

      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,32L60,53.3C120,75,240,117,360,122.7C480,128,600,96,720,80C840,64,960,64,1080,69.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero Content Slider */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white space-y-6 mb-8 md:mb-0   bg-opacity-20 p-8 rounded-xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    currentSlide === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8 absolute"
                  }`}
                >
                  {currentSlide === index && (
                    <>
                      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl font-medium text-teal-200 mt-2">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-xl mt-4 max-w-lg">
                        {slide.description}
                      </p>
                      <div className="mt-8">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center shadow-lg">
                          GLA Special Offers
                          <ArrowRight className="ml-2" size={18} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Slide Indicators */}
              <div className="flex space-x-2 mt-8">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-orange-500 w-6"
                        : "bg-gray-300 bg-opacity-50"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center z-30">
        <p className="text-sm font-medium mb-2">Discover More</p>
        <ChevronDown size={24} className="animate-bounce mx-auto" />
      </div>
    </section>
  );
}
