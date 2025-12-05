import type { ISourceOptions } from "tsparticles-engine";

export const particleOptions: ISourceOptions = {
  background: {
    color: {
      value: "#000000", // Latar belakang hitam pekat
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff", // Warna partikel putih
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.1, // Buat garis lebih transparan
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true, // Gerakan lebih acak
      speed: 1.5, // Kecepatan partikel (ditingkatkan)
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60, // Jumlah partikel
    },
    opacity: {
      value: 0.3, // Buat partikel lebih terlihat
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};