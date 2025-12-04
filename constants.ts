import { FaqItem, LeaderProfile, SubjectItem } from './types';

export const NAV_ITEMS = [
  { label: 'Utama', path: '/' },
  { label: 'PPDB', path: '/ppdb' },
  { label: 'Pengurus', path: '/pengurus' },
  { label: 'Lainnya', path: '/lainnya' },
];

export const SUBJECTS: SubjectItem[] = [
  {
    title: 'Belajar Kitab',
    description: 'Santri dibagi menjadi empat kelas (Nol, Satu, Dua, Tiga). Kitab yang diajarkan disesuaikan dengan tingkatan kelas untuk pemahaman mendalam.',
    icon: 'BookOpen',
  },
  {
    title: "Baca Al-Qur'an",
    description: "Fokus pada Ilmu Tajwid dan Tahfidz. Santri diwajibkan menghafal minimal Juz 30 dengan bacaan yang tartil dan benar.",
    icon: 'GraduationCap',
  },
  {
    title: 'Belajar Mandiri',
    description: "Membentuk karakter disiplin dan mandiri. Bangun tepat waktu, sholat berjama'ah, dan mengatur kebutuhan pribadi.",
    icon: 'Users',
  },
  {
    title: 'Akhlak Mulia',
    description: 'Pembinaan adab dan akhlak kepada orang tua, guru, dan sesama teman sebagai pondasi utama pendidikan karakter.',
    icon: 'HeartHandshake',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Bagaimana cara mendaftar sebagai santri baru?',
    answer: 'Pendaftaran dilakukan secara online melalui link formulir yang tersedia di halaman ini. Pilih jalur Putra atau Putri sesuai kebutuhan.',
  },
  {
    question: 'Apa saja persyaratan yang dibutuhkan?',
    answer: 'Fotocopy Ijazah terakhir, NISN, Akta Lahir, KTP Orang Tua, Kartu Keluarga, dan Pas Foto 3x4 (2 lembar).',
  },
  {
    question: 'Apa program unggulan di Nurul Iman?',
    answer: 'Kami unggul dalam Metode Tabulas (Nahwu Shorof), Tahfidz Juz 30, Kitab Kuning, serta ekstrakurikuler seperti Marawis dan Komputer.',
  },
  {
    question: 'Apakah sekolah formal tersedia?',
    answer: 'Ya, santri dapat mengenyam pendidikan di sekolah/madrasah reguler di sekitar pesantren sambil mondok.',
  },
];

export const LEADERS: LeaderProfile[] = [
  {
    name: 'Ust. Olin Rizky Zazuli',
    contact: '+62 852-1085-7929',
    image: 'https://ik.imagekit.io/rgqle2so1/Desain%20tanpa%20judul.png?updatedAt=1748136647051',
  },
  {
    name: 'Ust. Asep Iskandar',
    contact: '+62 877-8645-9364',
    image: 'https://ik.imagekit.io/rgqle2so1/Black%20Modern%20Gradient%20Programmer%20Presentation%20(4).jpg?updatedAt=1748002807642',
  },
  {
    name: 'Ust. Sandi Iswara',
    contact: '+62 821-1411-0789',
    image: 'https://ik.imagekit.io/rgqle2so1/Black%20Modern%20Gradient%20Programmer%20Presentation%20(3).jpg?updatedAt=1748002365202',
  },
  {
    name: 'Ust. Sofyan Hidayat',
    contact: '+62 852-1354-2808',
    image: 'https://ik.imagekit.io/rgqle2so1/WhatsApp%20Image%202025-05-23%20at%2021.16.23.jpeg?updatedAt=1748009844534',
  },
];

export const REQUIREMENTS = [
  "Fotocopy Ijazah terakhir",
  "Fotocopy Kartu NISN",
  "Fotocopy Akta Lahir",
  "Fotocopy KTP Ayah & Ibu",
  "Fotocopy Kartu Keluarga",
  "Fotocopy Piagam Prestasi (Jika ada)",
  "Pas Photo 3x4 - 2 Lembar"
];