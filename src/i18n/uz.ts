import type { Translations } from './types';

const uz: Translations = {
  nav: {
    home: 'Doniyorbek Yarkinov',
    about: 'Haqida',
    resume: 'Rezyume',
    stats: 'Statistika',
    contact: 'Aloqa',
  },
  sidebar: {
    aboutHeading: 'Haqida',
    blurb:
      "Salom! Men Flutter va Fullstack yo‘nalishlarida dasturchiman (Software Engineer). Hozirda PDP Universitetida 100% grant asosida dasturiy injiniring bo‘yicha tahsil olyapman. Ilgari Frontend dasturchi va bosh mentor sifatida 200 dan ortiq talabani o‘qitganman. Bugungi kunda Realsoft kompaniyasida davlat miqyosidagi yirik GovTech platformalari va korporativ mobil ilovalarida ishlayapman.",
    learnMore: "Ko'proq",
    aboutMe: 'Men haqimda',
  },
  home: {
    greeting: 'Salom, mening ismim Doniyorbek',
    subtitle: 'Flutter va Fullstack yo‘nalishlarida dasturchi',
    intro: "Shaxsiy saytimga xush kelibsiz. Ko'proq o'qing:",
    aboutLink: 'men haqimda',
    resumeLink: 'rezyume',
    statsLink: 'sayt statistikasi',
    contactLink: "bog'laning",
  },
  about: {
    title: 'Men haqimda',
    wordCount: (n) => `taxminan ${n} so'z`,
    content: `

Har bir loyiha — yangi bosqich. Agar hamkorlik qilmoqchi bo'lsangiz yoki shunchaki bir finjon kofe ustida suhbatlashmoqchi bo'lsangiz, murojaat qilishdan tortinmang!

# Ba'zi ma'lumotlar

- Frontend yo'nalishinini o'rganishni boshladim-u, veb-saytlar va dizaynlar, ranglar bilan yaxshi kelisha olishimni bildim.
- Videomontaj ishlariga qiziqar edim lekin hech eplay olmasdim, SMM va Mobilografiyani ham o'rganib oldim. Bu ijodiy jarayon mening sevimli mashg'ulotimga aylanib ketdi, chunki bir paytlar video montaj ishlari men uchun ushalmas orzudek ko'rinar edida.
- Bir to'liq yil davomida (2023-yil maydan 2024-yil maygacha) IT markazda Bosh Frontend mentor va dasturchi bo'lib ishladim. 200 dan ortiq talabalarni dasturlash olamiga yetakladim — bu haligacha mening eng faxrlanadigan va yuragimga yaqin yutuqlarimdan biri!
- O'sha bir yil davomida do'konlar, o'quv markazlari, kiyim do'konlari va restoranlar uchun SMM hamda mobilograf bo'lib ham yugurib yurdim. O'ta qiziqarli va har qanday psixologiya kitobidan ham ko'ra insonlarni yaxshiroq tushunishni o'rgatgan davr bo'ldi!
- IELTS topshirib, 6.0 ball oldim. Nima deb o'ylaysiz, atigi 1 oyda IELTS da 6 natija yaxshimi? (07.05.2024 – 07.06.2024).

Internetga chiqarishga qo'rqadigan boshqa "sarguzashtlarim"ni esa yuzma-yuz ko'rishganimizda so'rang 😉


Ushbu sahifani qo‘shganimning sababi — ko‘pchilik saytimni shunchaki rezumedan iborat ekanligidan shikoyat qildi.

`,
  },
  resume: {
    title: 'Rezyume',
    education: "Ta'lim",
    experience: 'Tajriba',
    skills: "Ko'nikmalar",
    skillsAll: 'Barchasi',
    present: 'Hozirgi kungacha',
    degrees: [
      {
        school: "1-Ixtisoslashtirilgan davlat umumta'lim maktabi",
        degree: 'Matematika va fizika',
        link: 'https://schools.emaktab.uz/v2/school?school=1000006479373&view=profile',
        year: '2013 – 2024',
      },
      {
        school: 'PDP Universiteti',
        degree: "Dasturiy muhandislik bakalavri (Angliyaning BTEC Xalqaro o'quv dasturi ostida)",
        link: 'https://university.pdp.uz/uz',
        year: '2024 – Hozirgi kun',
        points: [
          "**1-kurs (2024–2025):** Fullstack dasturlash (Python, Node.js), Axborot texnologiyalari tizimlari (ITS), Biznes jarayonlarini modellashtirish (BPM), Katta ma'lumotlar va biznes tahlili (Excel, MySQL), Sun'iy intellekt, IT da korxona.",
          "**2-kurs (2025–2026):** Flutter mobil dasturlash, Ma'lumotlar bazasini loyihalash (PostgreSQL), Bulutli tarmoqlar (SysAdmin/DevOps), Dasturiy ta'minotni ishlab chiqish sikli (SDLC), Katta ma'lumotlar va vizualizatsiya (PowerBI, Tableau), Kiberxavfsizlik, Innovatsiyalar va raqamli transformatsiya.",
        ],
      },
    ],
    positions: [
      {
        name: 'Realsoft (realsoft.uz)',
        position: 'Software Engineer (Mobile & Fullstack)',
        url: 'https://realsoft.uz',
        startDate: '2026-05-27',
        summary: "",
        highlights: [
          "raqamli-bozor.uz: O‘zbekistondagi barcha dehqon bozorlari va savdo komplekslarini davlat monitoringi uchun raqamlashtiradigan ulkan platforma.",
          "EasyTrip: O‘zbekistonga kelgan turistlar uchun haqiqiy yordamchi ilova. Begona yurtda narxlarni bilmaslik, adashib qolish va joy band qilish (booking) muammosini hal qiladi.",
          "Mahalla Bankiri: Qarzdorlikni undiruvchi xodimlar uchun maxsus mobil ilova. Background GPS monitoring va qat’iy geofencing (geodevor) tizimli.",
          "agros.uz: Sug'urta kompaniyasini raqamlashtiradigan yirik ekotizim.",
        ],
      },
      {
        name: 'Freelancer',
        position: 'Fullstack dasturchi',
        url: '',
        startDate: '2024-07-20',
        endDate: '2026-05-25',
        summary: ``,
        highlights: [
          "Bu 2 yil ichida tinmay ishladim deya olmayman, shunchaki har safar cho‘ntak bo‘shab qolganda yoki pul kerak bo‘lganda soqqani qilish uchun ishlaganman. Kimgadir tezda proyekt yoki funksiya kerakmi, zakazni tezda olardim, kodini chokini so'kib bitirardim, topshirib pulimni olib yuraverardim.",
          "Har xil mijozlar uchun 0 dan to production'gacha bo'lgan full-stack veb va mobil loyihalar qilib yurdim",
          "Soqqa ustida talashish va mijoz talablarini aniqlashtirishdan boshlab, kod yozish va serverga yuklashgacha bo'lgan hamma narsa",
        ],
      },
      {
        name: 'Meta IT School',
        position: 'Frontend mentor',
        url: 'https://instagram.com/metaitschool',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: ``,
        highlights: [
          "200 dan ortiq IT ga qiziqadigan aytishniklarni o'qitdim — cheksiz savollar, kod revyular va IT dunyosida omon qolish (survival) darslari bilan o'tdi.",
          "Hech qanday quruq va keraksiz 'metodlar'siz, faqat amaliyotga asoslangan HTML/CSS, JS, React va loyiha arxitekturasi darsliklarini tayyorladim.",
          "Intervyularda qovurilib qolmasliklari uchun ularga Git, zamonaviy instrumentlar va proyektni serverga yuklash (deployment) sirlarini o'rgatdim.",
        ],
      },
      {
        name: 'Meta IT School',
        position: 'Frontend dasturchi',
        url: 'https://instagram.com/metaitschool',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: ``,
        highlights: [
          'React va zamonaviy frontend andozalaridan foydalanib, moslashuvchan panellar va ichki vositalarni ishlab chiqdim.',
          "Raqamli ta'lim tajribasini yaxshilash uchun jamoa va rahbariyat bilan hamkorlik qildim.",
          "API larni integratsiya qildim va talabalar taraqqiyotini kuzatish hamda kurslarni boshqarishni qo'llab-quvvatlaydigan interfeyslarni qurdim.",
        ],
      },
      {
        name: 'Meta IT School',
        position: 'SMM manager & mobilographer',
        url: 'https://instagram.com/metaitschool',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: ``,
        highlights: [
          "Talabalar loyihalari va o'quv markazi tadbirlarini namoyish qilish uchun reklama videolari, foto va reels kontentlarini yaratdim.",
          'Brend identifikatsiyasini mustahkamlaydigan va auditoriya bilan aloqani yaxshilaydigan vizual konsepsiyalarni loyihaladim.',
          "Tasvirga olish, montaj qilish, rang berish va tayyor mahsulotni tarmoqqa yuklashgacha bo'lgan to'liq ishlab chiqarish (production) jarayonini bajardim.",
        ],
      },
    ],
  },
  contact: {
    title: 'Aloqa',
    description:
      "Bog'lanishdan tortinmang. Menga Telegram orqali murojaat qilishingiz mumkin:",
    messages: [
      '@yarkinovd',
      'Assalamu’alaikum',
      'Assalamu’alaikum warahmatullahi wabarakatuh',
      'menga xohlagan temada yozishingiz mumkin! Rostan',
      "endi jaaaa lyuboy temada emasu, deyarli lyuboy temada",
      'masalan bunday',
      'yoki bunday',
      'lekin bunday emas :(  ',
      'shuningdek aniq mavzularda ham yozishingiz mumkin, masalan',
      'shunchaki salomlashish',
      'biz bilan ishlang',
      'yordam kerak',
      'yoki saytingiz menga juda yoqdi',
      'rahmat',
    ],
  },
  stats: {
    title: 'Statistika',
    personalHeading: "Men haqimda ba'zi statistikalar",
    siteHeading: "Ushbu sayt haqida ba'zi statistikalar",
    ageLabel: 'Hozirgi yosh',
    locationLabel: 'Hozirgi shahar',
    cityValue: 'Toshkent',
    starsLabel: 'Ushbu repozitoriyning GitHub dagi yulduzlar soni',
    watchersLabel: 'Ushbu repozitoriyni kuzatuvchilar soni',
    lastUpdatedLabel: 'Oxirgi yangilangan vaqt',
  },
};

export default uz;
