import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, Flame, Volume2, VolumeX, Zap, Sparkles, ChevronDown } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function PantherHero3D({ brandName = 'PATHE', onJoinClick, onExploreClick }) {
  const mountRef = useRef(null);
  const [speedMode, setSpeedMode] = useState('sprint'); // 'prowl', 'sprint', 'surge'
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [is3DReady, setIs3DReady] = useState(false);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.04);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4, 1.8, 6.5);
    camera.lookAt(0, 0.8, 0);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x0f0f15, 1.5);
    scene.add(ambientLight);

    // Red Neon Rim Light (Key feature matching the gym's ceiling strips)
    const neonRedLight1 = new THREE.PointLight(0xff1515, 8, 15);
    neonRedLight1.position.set(2, 3, -1);
    scene.add(neonRedLight1);

    const neonRedLight2 = new THREE.PointLight(0xff2222, 6, 12);
    neonRedLight2.position.set(-3, 2, 2);
    scene.add(neonRedLight2);

    const coldRimLight = new THREE.DirectionalLight(0x4466aa, 1.2);
    coldRimLight.position.set(5, 5, -5);
    scene.add(coldRimLight);

    // Key spotlight on panther
    const spotLight = new THREE.SpotLight(0xffffff, 3);
    spotLight.position.set(0, 5, 4);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.8;
    spotLight.castShadow = true;
    scene.add(spotLight);

    // REFLECTIVE FLOOR WITH RED NEON RUNWAY STRIPS
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x08080a,
      roughness: 0.25,
      metalness: 0.8,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.05;
    floor.receiveShadow = true;
    scene.add(floor);

    // Neon Light Strips on Floor (Mirroring gym's aesthetic)
    const stripGeo = new THREE.PlaneGeometry(0.08, 25);
    const stripMat = new THREE.MeshBasicMaterial({
      color: 0xff1e1e,
      side: THREE.DoubleSide
    });
    const strip1 = new THREE.Mesh(stripGeo, stripMat);
    strip1.rotation.x = -Math.PI / 2;
    strip1.position.set(-1.8, 0.001, 0);
    scene.add(strip1);

    const strip2 = new THREE.Mesh(stripGeo, stripMat);
    strip2.rotation.x = -Math.PI / 2;
    strip2.position.set(1.8, 0.001, 0);
    scene.add(strip2);

    // ATMOSPHERIC RED & SMOKE PARTICLES
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleVel = [];

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 12;
      particlePos[i * 3 + 1] = Math.random() * 4;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      particleVel.push({
        x: (Math.random() - 0.5) * 0.005,
        y: Math.random() * 0.008 + 0.002,
        z: (Math.random() - 0.5) * 0.005,
      });
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xff3333,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // PROCEDURAL 3D ARTICULATED PANTHER RIG
    // Built with sleek muscular anatomy, gloss panther black skin, red glowing eyes, and running kinematics
    const pantherGroup = new THREE.Group();

    const pantherBlackMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0c,
      roughness: 0.35,
      metalness: 0.6,
      envMapIntensity: 1.2
    });

    const muscleHighlightMat = new THREE.MeshStandardMaterial({
      color: 0x141418,
      roughness: 0.25,
      metalness: 0.8
    });

    // Torso / Chest (muscular tapered)
    const chestGeo = new THREE.CylinderGeometry(0.36, 0.42, 0.8, 16);
    chestGeo.rotateZ(Math.PI / 2);
    const chest = new THREE.Mesh(chestGeo, pantherBlackMat);
    chest.position.set(0.3, 0.95, 0);
    pantherGroup.add(chest);

    // Midsection / Spine
    const spineGeo = new THREE.CylinderGeometry(0.3, 0.35, 0.7, 16);
    spineGeo.rotateZ(Math.PI / 2);
    const spine = new THREE.Mesh(spineGeo, pantherBlackMat);
    spine.position.set(-0.25, 0.92, 0);
    pantherGroup.add(spine);

    // Hindquarters / Pelvis
    const pelvisGeo = new THREE.SphereGeometry(0.38, 16, 16);
    pelvisGeo.scale(1.2, 1, 0.85);
    const pelvis = new THREE.Mesh(pelvisGeo, muscleHighlightMat);
    pelvis.position.set(-0.7, 0.96, 0);
    pantherGroup.add(pelvis);

    // Shoulders
    const shoulderGeo = new THREE.SphereGeometry(0.36, 16, 16);
    shoulderGeo.scale(1.1, 1.2, 0.9);
    const shoulder = new THREE.Mesh(shoulderGeo, muscleHighlightMat);
    shoulder.position.set(0.6, 1.0, 0);
    pantherGroup.add(shoulder);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.24, 0.32, 0.5, 16);
    neckGeo.rotateZ(-Math.PI / 3.5);
    const neck = new THREE.Mesh(neckGeo, pantherBlackMat);
    neck.position.set(0.9, 1.15, 0);
    pantherGroup.add(neck);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(1.18, 1.35, 0);

    const skullGeo = new THREE.SphereGeometry(0.25, 16, 16);
    skullGeo.scale(1.2, 0.9, 0.85);
    const skull = new THREE.Mesh(skullGeo, pantherBlackMat);
    headGroup.add(skull);

    // Muzzle / Snout
    const snoutGeo = new THREE.BoxGeometry(0.28, 0.18, 0.22);
    const snout = new THREE.Mesh(snoutGeo, pantherBlackMat);
    snout.position.set(0.2, -0.05, 0);
    headGroup.add(snout);

    // Ears
    const earGeo = new THREE.ConeGeometry(0.07, 0.14, 8);
    const earL = new THREE.Mesh(earGeo, pantherBlackMat);
    earL.position.set(-0.06, 0.2, 0.14);
    earL.rotation.z = -0.3;
    earL.rotation.x = 0.2;
    headGroup.add(earL);

    const earR = earL.clone();
    earR.position.z = -0.14;
    earR.rotation.x = -0.2;
    headGroup.add(earR);

    // FIERY GLOWING RED EYES (Signature Beast Look)
    const eyeGeo = new THREE.SphereGeometry(0.042, 12, 12);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff1515 });
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(0.2, 0.06, 0.11);
    headGroup.add(eyeL);

    const eyeR = eyeL.clone();
    eyeR.position.z = -0.11;
    headGroup.add(eyeR);

    // Eye Glow Halo Sprites
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 30, 30, 1)');
    grad.addColorStop(0.4, 'rgba(255, 0, 0, 0.6)');
    grad.addColorStop(1, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const eyeTexture = new THREE.CanvasTexture(canvas);
    const eyeGlowMat = new THREE.SpriteMaterial({ map: eyeTexture, transparent: true, blending: THREE.AdditiveBlending });

    const eyeGlowL = new THREE.Sprite(eyeGlowMat);
    eyeGlowL.scale.set(0.3, 0.3, 1);
    eyeGlowL.position.set(0.25, 0.06, 0.12);
    headGroup.add(eyeGlowL);

    const eyeGlowR = eyeGlowL.clone();
    eyeGlowR.position.z = -0.12;
    headGroup.add(eyeGlowR);

    pantherGroup.add(headGroup);

    // LEGS & ARTICULATION (Front-Left, Front-Right, Back-Left, Back-Right)
    const createLeg = (isFront, isLeft) => {
      const legRoot = new THREE.Group();
      const zOffset = isLeft ? 0.28 : -0.28;

      // Upper Limb / Thigh
      const upperLength = isFront ? 0.42 : 0.46;
      const upperGeo = new THREE.CylinderGeometry(0.12, 0.08, upperLength, 12);
      const upperMesh = new THREE.Mesh(upperGeo, pantherBlackMat);
      upperMesh.position.y = -upperLength / 2;

      const upperGroup = new THREE.Group();
      upperGroup.add(upperMesh);
      legRoot.add(upperGroup);

      // Lower Limb / Shin
      const lowerLength = isFront ? 0.4 : 0.44;
      const lowerGeo = new THREE.CylinderGeometry(0.07, 0.05, lowerLength, 12);
      const lowerMesh = new THREE.Mesh(lowerGeo, pantherBlackMat);
      lowerMesh.position.y = -lowerLength / 2;

      const lowerGroup = new THREE.Group();
      lowerGroup.position.y = -upperLength;
      lowerGroup.add(lowerMesh);
      upperGroup.add(lowerGroup);

      // Paw / Claws
      const pawGeo = new THREE.BoxGeometry(0.16, 0.08, 0.12);
      const pawMesh = new THREE.Mesh(pawGeo, muscleHighlightMat);
      pawMesh.position.set(0.04, -lowerLength, 0);
      lowerGroup.add(pawMesh);

      legRoot.position.set(isFront ? 0.6 : -0.7, 0.9, zOffset);
      return { root: legRoot, upper: upperGroup, lower: lowerGroup };
    };

    const legFL = createLeg(true, true);
    const legFR = createLeg(true, false);
    const legBL = createLeg(false, true);
    const legBR = createLeg(false, false);

    pantherGroup.add(legFL.root);
    pantherGroup.add(legFR.root);
    pantherGroup.add(legBL.root);
    pantherGroup.add(legBR.root);

    // Tail (Articulated segments)
    const tailGroup = new THREE.Group();
    tailGroup.position.set(-0.85, 0.95, 0);
    const tailSegCount = 5;
    const tailSegments = [];
    let prevSeg = tailGroup;

    for (let i = 0; i < tailSegCount; i++) {
      const segLength = 0.18;
      const segGeo = new THREE.CylinderGeometry(0.045 - i * 0.006, 0.04 - i * 0.006, segLength, 8);
      segGeo.rotateZ(Math.PI / 3);
      const segMesh = new THREE.Mesh(segGeo, pantherBlackMat);
      segMesh.position.set(-segLength / 2, 0, 0);

      const segNode = new THREE.Group();
      segNode.position.set(-segLength, -0.02, 0);
      segNode.add(segMesh);
      prevSeg.add(segNode);
      tailSegments.push(segNode);
      prevSeg = segNode;
    }
    pantherGroup.add(tailGroup);

    // Scale & Position Panther
    pantherGroup.scale.set(1.4, 1.4, 1.4);
    pantherGroup.position.set(0.5, 0.1, 0);
    scene.add(pantherGroup);

    setIs3DReady(true);

    // INTERACTION & MOUSE TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // VIEWPORT VISIBILITY OBSERVER (Pause when outside hero to conserve performance)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // ANIMATION LOOP
    let clock = new THREE.Clock();
    let cycleTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      const delta = clock.getDelta();
      
      // Speed multiplier
      let speedMult = 8.0;
      if (speedMode === 'prowl') speedMult = 4.5;
      if (speedMode === 'surge') speedMult = 13.0;

      cycleTime += delta * speedMult;

      // Mouse Parallax smoothing
      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;
      camera.position.x = 4 + targetX;
      camera.position.y = 1.8 + targetY;
      camera.lookAt(0, 0.9, 0);

      // PANTHER RUN CYCLE KINEMATICS
      // Spine flexing & chest oscillation
      chest.position.y = 0.95 + Math.sin(cycleTime * 2) * 0.08;
      spine.position.y = 0.92 + Math.sin(cycleTime * 2 + 0.3) * 0.06;
      headGroup.position.y = 1.35 + Math.sin(cycleTime * 2 - 0.4) * 0.06;
      headGroup.rotation.z = Math.sin(cycleTime * 2) * 0.08;

      // Front Left & Right Legs (Gallop / Sprint phase)
      legFL.upper.rotation.z = Math.sin(cycleTime) * 0.75;
      legFL.lower.rotation.z = Math.max(0, -Math.sin(cycleTime + 0.5) * 0.9);

      legFR.upper.rotation.z = Math.sin(cycleTime + Math.PI * 0.85) * 0.75;
      legFR.lower.rotation.z = Math.max(0, -Math.sin(cycleTime + Math.PI * 0.85 + 0.5) * 0.9);

      // Back Legs (Powerful propulsion phase)
      legBL.upper.rotation.z = Math.sin(cycleTime + Math.PI * 0.3) * 0.85;
      legBL.lower.rotation.z = Math.max(0, Math.sin(cycleTime + Math.PI * 0.3 - 0.4) * 1.1);

      legBR.upper.rotation.z = Math.sin(cycleTime + Math.PI * 1.15) * 0.85;
      legBR.lower.rotation.z = Math.max(0, Math.sin(cycleTime + Math.PI * 1.15 - 0.4) * 1.1);

      // Tail dynamic whiplash motion
      tailSegments.forEach((seg, idx) => {
        seg.rotation.z = Math.sin(cycleTime * 1.5 - idx * 0.4) * 0.18;
        seg.rotation.y = Math.cos(cycleTime * 1.2 - idx * 0.5) * 0.15;
      });

      // Animate atmospheric particles
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleVel[i].y;
        positions[i * 3] += particleVel[i].x;
        if (positions[i * 3 + 1] > 4.5) {
          positions[i * 3 + 1] = 0;
          positions[i * 3] = (Math.random() - 0.5) * 12;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Pulse neon light intensity slightly
      neonRedLight1.intensity = 7 + Math.sin(cycleTime * 2) * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [speedMode]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFx.toggleAmbient(nextState);
  };

  const changeSpeed = (mode) => {
    setSpeedMode(mode);
    soundFx.playClick();
    if (mode === 'surge') {
      soundFx.playRoar();
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* 3D WebGL Canvas Layer */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing"
      />

      {/* Background High-Res Panther Artwork Ambient Blend Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-20 lg:opacity-30 pointer-events-none mix-blend-screen bg-contain bg-no-repeat bg-right-center"
        style={{ backgroundImage: `url('/images/panther-hero-beast.png')` }}
      />

      {/* Dark & Red Neon Atmospheric Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent pointer-events-none z-10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF2020]/15 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FF2020]/10 rounded-full blur-[160px] pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[75vh]">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow Label with Pulsing Red Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-red-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,32,32,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FF2020] animate-ping" />
              <span className="text-xs font-semibold tracking-[0.25em] text-red-400 uppercase">
                ENTER THE WORLD OF {brandName}
              </span>
            </div>

            {/* Main Bold Headline */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight leading-[0.92] uppercase mb-6">
              UNLEASH <br />
              YOUR INNER <br />
              <span className="text-gradient-red drop-shadow-[0_0_35px_rgba(255,32,32,0.5)]">
                BEAST.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal max-w-xl mb-9 leading-relaxed">
              Train harder. Move faster. Become unstoppable. Welcome to <span className="text-white font-semibold">{brandName}</span>, where raw discipline meets high-performance iron sanctuary.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <button
                onClick={() => {
                  soundFx.playRoar();
                  onJoinClick && onJoinClick();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,32,32,0.45)] hover:shadow-[0_0_45px_rgba(255,32,32,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>JOIN {brandName}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onExploreClick && onExploreClick();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm tracking-wider uppercase border border-zinc-700/60 hover:border-red-500/50 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                EXPLORE THE GYM
              </button>
            </div>

            {/* Key Metric Highlights Strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-bebas tracking-wide">12,000+</div>
                <div className="text-xs text-zinc-400 font-medium tracking-wider uppercase mt-0.5">SQ FT SANCTUARY</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#FF2020] font-bebas tracking-wide">100+</div>
                <div className="text-xs text-zinc-400 font-medium tracking-wider uppercase mt-0.5">HEAVY MACHINES</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-bebas tracking-wide">24 / 7</div>
                <div className="text-xs text-zinc-400 font-medium tracking-wider uppercase mt-0.5">BIOMETRIC ACCESS</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Beast Speed & Atmosphere Controls */}
          <div className="lg:col-span-5 flex flex-col items-end justify-end pointer-events-none mt-6 lg:mt-0">
            
            {/* Interactive 3D Beast Control HUD */}
            <div className="pointer-events-auto bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl max-w-xs w-full">
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FF2020]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-200">
                    3D BEAST ENGINE
                  </span>
                </div>
                <button
                  onClick={toggleSound}
                  title="Toggle Ambient Beast Atmosphere Audio"
                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition cursor-pointer"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-[#FF2020]" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>

              {/* Speed Mode Selector */}
              <div className="text-[11px] font-medium text-zinc-400 mb-2 uppercase tracking-wider">
                Panther Pacing:
              </div>
              <div className="grid grid-cols-3 gap-1.5 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
                <button
                  onClick={() => changeSpeed('prowl')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition uppercase tracking-wider cursor-pointer ${
                    speedMode === 'prowl'
                      ? 'bg-zinc-800 text-white shadow'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Prowl
                </button>
                <button
                  onClick={() => changeSpeed('sprint')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition uppercase tracking-wider cursor-pointer ${
                    speedMode === 'sprint'
                      ? 'bg-[#FF2020] text-white shadow-[0_0_12px_rgba(255,32,32,0.4)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Sprint
                </button>
                <button
                  onClick={() => changeSpeed('surge')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1 ${
                    speedMode === 'surge'
                      ? 'bg-gradient-to-r from-[#FF2020] to-orange-500 text-white shadow-[0_0_15px_rgba(255,32,32,0.6)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3 h-3" />
                  Surge
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-400">
                <span>Drag to rotate camera</span>
                <span className="text-red-400 font-semibold">3D Interactive</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div 
        onClick={onExploreClick}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-400 hover:text-white cursor-pointer transition-colors"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-[#FF2020] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
