import { useRef, useEffect } from "react";

export default function GlobalNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Pradiniai nustatymai, kuriuos galite laisvai keisti
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const NUM_PARTICLES = 180;       // Daugiau dalelių
    const MAX_DISTANCE = 140;        // Ilgesnis atstumas tarp dalelių
    const PARTICLE_SPEED = 0.5;      // Judėjimo greitis
    const MOUSE_RADIUS = 300;        // Pelės įtakos spindulys (didesnis = stipresnė sąveika)

    // Sekame pelės padėtį
    const mouse = { x: null, y: null, radius: MOUSE_RADIUS };
    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    window.addEventListener("mousemove", handleMouseMove);

    // Klasė vienai dalelėms
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * PARTICLE_SPEED;
        this.vy = (Math.random() - 0.5) * PARTICLE_SPEED;
        this.size = 2;  // taško dydis
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Atšokimas nuo kraštų
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    // Inicializuojame daleles
    let particlesArray = [];
    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particlesArray.push(new Particle());
      }
    }
    initParticles();

    // Linijų braižymas
    function connectParticles() {
      // Linijos tarp dalelių
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Ar pakankamai arti, kad nupiešti liniją
          if (dist < MAX_DISTANCE) {
            // Linijos skaidrumas mažėja su atstumu
            const alpha = 1 - dist / MAX_DISTANCE;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }

      // Linijos nuo pelės iki arti esančių dalelių
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particlesArray.length; i++) {
          const dx = particlesArray[i].x - mouse.x;
          const dy = particlesArray[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Pelės linijos skaidrumas
            const alpha = 1 - dist / mouse.radius;
            // Jei norite dar stipresnio efekto, galite padidinti alpha, pvz. `alpha * 1.5`, bet tada „clampinti“ į [0,1].
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    }

    // Animacijos ciklas
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Atnaujiname & piešiame daleles
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      // Braižome linijas
      connectParticles();
      requestAnimationFrame(animate);
    }
    animate();

    // Reaguojame į lango dydžio pasikeitimus
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); 
    }
    window.addEventListener("resize", handleResize);

    // Sutvarkome event'us kai komponentas "unmount"
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "transparent", // Tamsus fonas
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
