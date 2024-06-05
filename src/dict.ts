import { CharacterReportEnum, ObservedEnum } from "./types/type";

export interface DictionaryItem {
  id: string;
  en: string;
}

export interface Dictionaries {
  [key: string]: DictionaryItem;
}

export type CharacterDescDict = Record<
  `desc_${CharacterReportEnum}`,
  DictionaryItem
>;

const QUESTION_DICT_BANK: Dictionaries = {
  prologue: {
    id: "Kamu...,| dengan keadaan setengah sadar,| terbangun dalam sebuah daratan gelap tak diketahui,| sendirian.|| Kesadaranmu pulih seiring waktu tapi kegelapan membatasi jarak pandangmu.|| Kau hanya melihat setitik cahaya yang mengerdip remang,| kau tidak ada pilihan selain mendekatinya.| Kau berjalan penuh keraguan,| dan ...",
    en: "",
  },
  q1: {
    id: "... cahaya tadi | rupanya dari tiga lingkaran yang melayang.| Seperti... || gerbang pembelah ruang? |||Kau, |entah dari mana, |memiliki perasaan bahwa...|, kau harus masuk.|| Ah, tidak, tidak,||| kau hanya terdesak pada pilihan pergi masuk| atau tenggelam dalam kegelapan yang luas.| Kau memilih ...",
    en: "",
  },
  q1_opt1: {
    id: "Lingkaran yang sisi-sisinya terbuat dari ranting-ranting pohon",
    en: "",
  },
  q1_opt2: {
    id: "Lingkaran yang permukaannya berair, ketika kau menatapnya dekat, wajahmu terpantul dengan samar",
    en: "",
  },
  q1_opt3: {
    id: "Lingkaran yang mirip seperti yang pernah kau buat sewaktu kecil di tembok kamarmu menggunakan kapur warna-warni",
    en: "",
  },
  q2: {
    id: "Kau masuk,| tidak ada yang bisa kau amati,| kau ...|| lagi-lagi ||... terjebak dalam kegelapan.|| Kau mencoba kembali,| tapi sialnya,| tanpa kau sadari,| gerbang tadi semakin mengecil sampai tak bisa kau masuki.|| Sesaat ketika gerbang itu menghilang,| terjatuh lah sebuah kunci dari titik cahaya terakhirnya.| Di saat yang sama juga,| di kanan dan kirimu,| menyala satu demi satu obor-obor berapi merah dan biru.|| Kau mengambil kunci tadi,| menelusuri jalan yang kini tampak,| hingga dihadapkan pada ...||| tiga kotak setinggi lututmu,| bergembok yang cocok dengan kunci di tanganmu.|| Kau melihat telur di masing-masing kotaknya.|| Kau mengambil salah satu obor untuk mencoba menerangi lebih dekat tiap-tiap telur.|| Sampai pada akhirnya kau memutuskan untuk membuka salah satunya,| yang ketika kau dekatkan pada obormu...",
    en: "",
  },
  q2_opt1: {
    id: "tergambar sebuah siluet janin binatang yang tidak kamu tahu, terdapat tulang kecil seperti sayap",
    en: "",
  },
  q2_opt2: {
    id: "telur itu bersinar sangat silau, kau menyukai cahayanya",
    en: "",
  },
  q2_opt3: {
    id: "terdapat retakan kecil di telur itu, dan itu semakin luas, kau membiarkan ia menetas dengan sendirinya",
    en: "",
  },
  q3: {
    id: "Kau berjalan sambil memeluk telur tadi,| sampai pada lorong yang bercabang dua.|| Keduanya berdinding kayu,| beralas tanah yang retak,| beratap akar-akar pohon yang saling menyulam.|| Kau memilih ...",
    en: "",
  },
  q3_opt1: {
    id: "Membuat suara, berharap ada yang menanggapi dari salah satu lorong.",
    en: "",
  },
  q3_opt2: {
    id: "Saya tidak peduli, keduanya sama, saya memilih yang pertama saya lihat.",
    en: "",
  },
  q3_opt3: {
    id: "Saya gulirkan telur tadi, dan memilih lorong yang paling dekat dengan tempat telur itu berhenti.",
    en: "",
  },
  q4: {
    id: "Kau masuk ke lorong yang kau pilih,| memegang obor sambil tetap menjaganya agar tidak mengenai akar-akar kering di atasmu.|| Pelan dan bersiap akan ancaman,| kau dikagetkan dengan telur di tangan kananmu yang bergerak-gerak.|| Dan...||| kau berhenti sebentar,| meletakannya di tanah.|| Telur itu melayang dengan sendirinya,| memecah cangkangnya seperti suatu ledakan!||| Kau,| yang berlindung dengan sikutmu,| mendapati hewan yang tidak kau bayangkan sebelumnya,|| telur itu menetaskan ...",
    en: "",
  },
  q4_opt1: {
    id: "Burung pheonix, dengan api yang membara di sekujur tubuhnya, api menetes di tiap kepakan sayapnya, kepalanya menunduk patuh padamu.",
    en: "",
  },
  q4_opt2: {
    id: "Gagak hitam, dia langsung hinggap di bahu kananmu, kau bisa berkomunikasi lewat telepati.",
    en: "",
  },
  q4_opt3: {
    id: "Merpati putih bercahaya, dia terbang melanjut perjalanan ke depan, seolah-olah meminta untuk kau ikuti.",
    en: "",
  },
  q5: {
    id: 'Kau sampai di ujung lorong.|| Sialnya,| ketika kau ingin keluar,| seperti ada tabir transparan yang menjadi pembatas.|| Kau tidak bisa menembusnya.| Kau sinari dinding-dinding di sekitarmu,| mencoba mencari sebuah clue yang bisa membantumu.|| Dan...|| kau menemukan tulisan kuno di salah satu dinding.| \n\n"ASPECTU DE CAELO ET DE INFERNO"\n\n || Dinding di sekitarmu bergetar!!...|| tabir di hadapanmu mengecil & memadat menjadi sebuah bola...| dan kau...|| menyentuhnya,| dan benda itu menelan telunjukmu hingga seluruh telapak tangan kananmu,| kau mendapatkan di tanganmu sebuah...',
    en: "",
  },
  q5_opt1: {
    id: "Pedang besar yang ringan namum tajam",
    en: "",
  },
  q5_opt2: {
    id: "Busur dengan anak panah tak terhingga",
    en: "",
  },
  q5_opt3: {
    id: "Tongkat beserta buku sihir",
    en: "",
  },
  q6: {
    id: "Kau keluar dari lorong bersama teman hewan dan senjatamu.|| Semakin jauh,| cahaya semakin jelas,| yang ternyata mengantarmu ke hutan penuh batu dan pepohonan.| Kau berjalan perlahan memerhatikan sekitar,| tiba-tiba...|| hewan yang membersamaimu gelisah.| Ia kepakkan sayap-sayapnya dengan cepat,| melayang di tempat,| di depan sebuah pohon raksasa.|| Kau ...|| mencoba mendekati burung itu,| dan dari pecahan batang pohon itu muncul tangan, kaki, dan sepasang mata yang menyala.|| Pohon itu marah,| bergerak menyerangmu dengan ranting-rantingnya.|| Kau menghadapinya dengan ...",
    en: "",
  },
  q6_opt1: {
    id: "Mundur, biar hewan yang tadi kau selamatkan berhadapan dengannya, dia menetas secara ajaib, mungkin punya kekuatan super.",
    en: "",
  },
  q6_opt2: {
    id: "Senjata yang tadi kau ambil, kau belum menguasainya tapi mencoba berbagai cara.",
    en: "",
  },
  q6_opt3: {
    id: "Melempar obor abadi yang kau bawa sejak awal, mencoba membakarnya, pohon tetaplah pohon bukan?",
    en: "",
  },
  q7: {
    id: "Monster pohon itu berhasil kau kalahkan,| dan kemudian...|| pohon itu mengecil menjadi seekor anak serigala yang terkapar lemas.|| Kau mengira kalau monster itu sebenarnya adalah serigala yang dikutuk.| Kau mendekati serigala itu,| dan ...",
    en: "",
  },
  q7_opt1: {
    id: "Mencoba membunuhnya selagi lemah dan tak berdaya, mungkin kau akan mendapat barang ajaib yang lain",
    en: "",
  },
  q7_opt2: {
    id: "Terlihat sekarat, kau mencoba membantunya",
    en: "",
  },
  q7_opt3: {
    id: "Kau tinggalkan dan lanjut mencari jalan keluar",
    en: "",
  },
  q8: {
    id: "Oh bodohnya kamu...|| serigala hidup berkoloni!| Ketika kau mendekatinya,| dari belakang serigala itu bermunculuan banyak pasang mata yang semakin lama semakin jelas.|| Dan kini kau melihat 4 serigala besar yang marah!|| Hewanmu mencoba menyerangnya||| dan kau...",
    en: "",
  },
  q8_opt1: {
    id: "Menarik hewanmu untuk ikut kabur",
    en: "",
  },
  q8_opt2: {
    id: "Kabur sendirian, membiarkan hewanmu sebagai umpan",
    en: "",
  },
  q8_opt3: {
    id: "Ikut menghadapinya walau ini pilihan bodoh dan kamu akan terluka hebat",
    en: "",
  },
  q9: {
    id: "Sesaat sebelum kau mengambil pilihanmu,| peliharanmu berubah menjadi wujud manusia burung!| Senjatamu lepas dari tanganmu,| terbang bersatu dengan makhluk itu!| Dia ...|| bertempur dengan hebatnya.|| Lalu dia menembakkan sebuah sinar laser merah yang melubangi dinding di dekatmu.| Kemudian meniupkan angin kuat dari kepakkan sayapnya,| menghembuskanmu ke lubang itu.| Kau terhempas sampai ke tempat yang luas namun asing,|| kau hanya bisa menerima dan meneruskan perjalananmu.|| Kau memilih menelusuri ...",
    en: "",
  },
  q9_opt1: {
    id: "Jembatan yang diujungnya terdapat cahaya, tapi jauh sekali",
    en: "",
  },
  q9_opt2: {
    id: "Perairan di bawahmu, terdapat perahu rusak tapi masih bisa kau perbaiki",
    en: "",
  },
  q9_opt3: {
    id: "Keduanya sama saja, kau memilih jalan yang terdapat hembusan angin paling sejuk",
    en: "",
  },
  q10: {
    id: 'Kau sampai pada satu tempat yang aneh,| dengan rasa lapar dan ingin pipis.|| Kau tidak mendapati apa-apa di tempat ini.| Kau hanya mengenali satu hal ...|| dan semakin yakin ...|| kalau ...|| ini ....||| adalah tempat yang sama waktu kamu terbangun!|| Sebuah daratan gelap tak diketahui dengan tiga lingkaran yang melayang.| Namun kali ini berbeda,| ada tulisan "exit" di lingkaran yang kau pilih sebelumnya,| dan kali ini ada pintu toilet.|| Kau memilih masuk ke ...',
    en: "",
  },
  q10_opt1: {
    id: 'Lingkaran yang sisi-sisinya terbuat dari ranting-ranting pohon',
    en: "",
  },
  q10_opt2: {
    id: "Lingkaran yang permukaannya berair, ketika kau menatapnya dekat, wajahmu terpantul dengan samar",
    en: "",
  },
  q10_opt3: {
    id: "Lingkaran yang mirip seperti yang pernah kau buat sewaktu kecil di tembok kamarmu menggunakan kapur warna-warni",
    en: "",
  },
  q10_opt4: {
    id: 'Pintu "toilet"',
    en: "",
  },
  epilogue: {
    id: "Kau masuk ke ruangan baru yang kau pilih,| semuanya berbeda.|| Kau mendengar suara nyaring yang terus berulang,| mulutmu menganga menatap langit-langit,| kau mendapat cahaya sedikit demi sedikit.|| Badanmu hangat,| terutama bagian bawahmu.|| Lama...|| lamaaaa sekali...||| Tapi akhirnya kau semakin sadar,| mendapati kalau suara itu adalah alarm pagimu dan kehangatan itu adalah...|| kau yang mengompol.|| Kau...||| hanya bisa menerima.",
    en: "",
  },
};

const OBSERVED_VALUE_BANK: Dictionaries = {
  [ObservedEnum.creativity]: {
    id: "Kreativitas",
    en: "Creativity",
  },
  [ObservedEnum.charisma]: {
    id: "Karisma",
    en: "Charisma",
  },
  [ObservedEnum.luck]: {
    id: "Keberuntungan",
    en: "Luck",
  },
  [ObservedEnum.anxiety]: {
    id: "Kecemasan",
    en: "Anxiety",
  },
  [ObservedEnum.courage]: {
    id: "Keberanian",
    en: "Courage",
  },
  [ObservedEnum.fortitude]: {
    id: "Ketabahan",
    en: "Fortitude",
  },
  [ObservedEnum.selfishness]: {
    id: "Keegoisan",
    en: "Selfishness",
  },
  [ObservedEnum.curiosity]: {
    id: "Keingintahuan",
    en: "Curiosity",
  },
};

const CHARACTER_RESULT_BANK: Dictionaries = {
  [CharacterReportEnum.chance_maker]: {
    id: "Pembuat Kesempatan",
    en: "Chance Maker",
  },
  [CharacterReportEnum.firework_launcher]: {
    id: "Pelontar Bunga Api",
    en: "Firework Launcher",
  },
  [CharacterReportEnum.heist_mastermind]: {
    id: "Dalang Perampokan",
    en: "Heist Mastermind",
  },
  [CharacterReportEnum.hero_poser]: {
    id: "Penggaya Jagoan",
    en: "Hero Poser",
  },
  [CharacterReportEnum.janken_master]: {
    id: "Si Jago Suit",
    en: "Janken Master",
  },
  [CharacterReportEnum.masochistic_dreamer]: {
    id: "Pemimpi Masokis",
    en: "Masochistic Dreamer",
  },
  [CharacterReportEnum.people_champion]: {
    id: "Jawara Masyarakat",
    en: "People Champion",
  },
  [CharacterReportEnum.pirate_crew]: {
    id: "Kru Bajak Laut",
    en: "Pirate Crew",
  },
  [CharacterReportEnum.reader_in_the_corner]: {
    id: "Pembaca di Sudut Ruangan",
    en: "Reader in the Corner",
  },
  [CharacterReportEnum.sad_swallow]: {
    id: "Penelan Kesedihan",
    en: "Sad Swallow",
  },
  [CharacterReportEnum.shadow_witch]: {
    id: "Penyihir Bayangan",
    en: "Shadow Witch",
  },
  [CharacterReportEnum.step_faker]: {
    id: "Pemalsu Langkah",
    en: "Step Faker",
  },
  [CharacterReportEnum.subway_artist]: {
    id: "Seniman Gorong-gorong",
    en: "Subway Artist",
  },
  [CharacterReportEnum.tomb_guard]: {
    id: "Penjaga Makam Kekasih",
    en: "Guardian of The Lover's Tomb",
  },
  [CharacterReportEnum.twister_fate]: {
    id: "Pemutar Takdir",
    en: "Twister Fate",
  },
  [CharacterReportEnum.villain_material]: {
    id: "Bakal Kriminal",
    en: "Villain Material",
  },
  [CharacterReportEnum.all_rounder]: {
    id: "Si Serba Bisa",
    en: "All Rounder",
  },
  [CharacterReportEnum.fair_tricker]: {
    id: "Penipu Adil",
    en: "Fair Tricker",
  },
};

const TRAIT_BANK: Dictionaries = {
  trait_11: {
    id: "Si Paling Jelajah",
    en: "Explorer",
  },
  trait_12: {
    id: "Si Paling Percaya",
    en: "Believer",
  },
  trait_13: {
    id: "Si Paling Ngide",
    en: "Creator",
  },
  trait_21: {
    id: "Orientasi Visual",
    en: "Visual Oriented",
  },
  trait_22: {
    id: "Pusat Atensi",
    en: "Self Center",
  },
  trait_23: {
    id: "Bisa Menunggu",
    en: "Patient",
  },
  trait_31: {
    id: "Penuh Harapan",
    en: "Filled with Hope",
  },
  trait_32: {
    id: "Pemikir Instan",
    en: "Fast Thinker",
  },
  trait_33: {
    id: "Biar Begitu Adanya",
    en: "Let it Be",
  },
  trait_41: {
    id: "Megah",
    en: "Majestic",
  },
  trait_42: {
    id: "Santai",
    en: "Chill",
  },
  trait_43: {
    id: "Terpicu",
    en: "Triggered",
  },
  trait_51: {
    id: "Satu tapi Menjanjikan",
    en: "One but Promising",
  },
  trait_52: {
    id: "Manfaatkan Semua Peluang",
    en: "Take All Opportunities",
  },
  trait_53: {
    id: "Selalu Mencari yang Baru",
    en: "Always Looking Something New",
  },
  trait_61: {
    id: "Korbankan yang Tidak Perlu",
    en: "Sacrifice Unimportant Things",
  },
  trait_62: {
    id: "Mencoba Hal Baru atau Perbaiki",
    en: "Trying New Stuff or Fix it",
  },
  trait_63: {
    id: "Percaya Dengan Apa yang Dikuasai",
    en: "Believe in What You are Good at",
  },
  trait_71: {
    id: "Bahaya Harus Dimusnahkan",
    en: "Danger Must be Killed",
  },
  trait_72: {
    id: "Bahaya Bisa Dinetralkan",
    en: "Danger Can be Cured",
  },
  trait_73: {
    id: "Bahaya Bisa Dihindari",
    en: "Danger Can be Avoided",
  },
  trait_81: {
    id: "Kita Lari Bersama",
    en: "We Run Together",
  },
  trait_82: {
    id: "Kita Kerjakan Sendiri-Sendiri",
    en: "I Do Mine, You Do Yours",
  },
  trait_83: {
    id: "Kita Hadapi Bersama",
    en: "We Face it Together",
  },
  trait_91: {
    id: "Senang Dibantu",
    en: "Happy to be Helped",
  },
  trait_92: {
    id: "Selesaikan Sendiri Dulu",
    en: "Finish it Yourself First",
  },
  trait_93: {
    id: "Bergantung Mood",
    en: "Moody",
  },
};

const CHAR_DESC_BANK: CharacterDescDict = {
  desc_chance_maker: {
    en: "If you think you can defeat me for second time, you are lying to yourself.",
    id: "Jika kau kira bisa mengalahkanku untuk kedua kalinya, kau berbohong pada dirimu sendiri.",
  },
  desc_firework_launcher: {
    en: "If all the end are not exploded, so it's still burning!",
    id: "Jika semua akhir tidak meledak, maka ini masih terbakar!",
  },
  desc_heist_mastermind: {
    en: "The whole escape plan are in my pocket.",
    id: "Semua rencana pelarian ada di sakuku.",
  },
  desc_hero_poser: {
    en: "Sorry for coming late but thanks for me later, you don't need to worry from now.",
    id: "Maaf datang terlambat tapi berterima kasih lah, kau tidak perlu khawatir mulai sekarang.",
  },
  desc_janken_master: {
    en: "What you called as luckiest luck is tattooed naturally in my DNA.",
    id: "Apa yang kau sebut sebagai kepaling-beruntungan sudah tertato dengan alami di DNA-ku.",
  },
  desc_masochistic_dreamer: {
    en: "What if i spoiled you that you mean nothing for the world? Are you still not join with the titan rumble?",
    id: "Bagaimana jika kubocorkan bahwa kau tidak berarti untuk dunia? Apa kau tetap tidak bergabung dengan deruan raksasa?",
  },
  desc_people_champion: {
    en: "I know i'm not the person you are chasing for, but the incline and slippery road know me so loud. I belong to the path.",
    id: "Aku tahu 'ku bukan seseorang yang kau kejar, tapi tanjakan dan jalan licin itu sangat mengenalku. Saya milik Sang Penjalan.",
  },
  desc_pirate_crew: {
    en: "I don't need the story, the story need me.",
    id: "Aku tidak butuh cerita, cerita yang membutuhkanku.",
  },
  desc_reader_in_the_corner: {
    en: "I see the world in chapter 47 verse 36.",
    id: "Aku melihat dunia di bab 47 syair ke 36.",
  },
  desc_sad_swallow: {
    en: "I eat people maturnity everyday and still hungry.",
    id: "Aku memakan kedewasaan manusia setiap hari dan tetap lapar.",
  },
  desc_shadow_witch: {
    en: "Spell the symphony but not for me, I'm the missing light of the falling sun.",
    id: "Rapalkan simfoni tapi bukan untukku, aku adalah cahaya yang hilang dari matahari yang jatuh.",
  },
  desc_step_faker: {
    en: "I'm not leaving even you can't hear my step anymore, you can't feel me cause I'm waiting on my own.",
    id: "Saya tidak pergi walau kau tidak mendengar langkahku lagi, kau tidak merasakan sebab saya menunggu di jalanku sendiri.",
  },
  desc_subway_artist: {
    en: "The world my disapprove, but my world is only art.",
    id: "Dunia boleh mencekal, tapi duniaku hanyalah seni.",
  },
  desc_tomb_guard: {
    en: "Without hesitation, I miss my lover to the bone.",
    id: "Tanpa keraguan, aku merindukan kekasihku sampai ke tulang.",
  },
  desc_twister_fate: {
    en: "As long as the thing is endurable, I prefer to endure it.",
    id: "Selama perihal masih bisa ditahan, aku memilih menahannya.",
  },
  desc_villain_material: {
    en: "You freeze my sea mind, so I lead the alien troopers to gasify your world. I'm the spirit of what you called as villain but a champ for timeskip.",
    id: "Kau bekukan laut pikiranku, maka kupimpin pasukan alien untuk mengubah duniamu menjadi gas. Aku adalah jiwa yang kau sebut sebagai penjahat tetapi jawara untuk waktu yang meyingkat.",
  },
  desc_fair_tricker: {
    en: "The more you know about me, the more I trick you successfully.",
    id: "Semakin banyak kau tahu soalku, semakin berhasil aku menipumu.",
  },
  desc_all_rounder: {
    en: "I am the wings of aves, the fins of pisces, and the lungs of mammals.",
    id: "Aku adalah sayap sang aves, sirip sang ikan, dan paru-paru sang mamalia.",
  },
};

export const DICT: Dictionaries = {
  ...QUESTION_DICT_BANK,
  ...OBSERVED_VALUE_BANK,
  ...CHARACTER_RESULT_BANK,
  ...TRAIT_BANK,
  ...CHAR_DESC_BANK,
};
