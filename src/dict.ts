export interface DictionaryItem {
  id: string
  en: string
}

export interface Dictionaries {
  [key: string]: DictionaryItem
}

const QUESTION_BANK: Dictionaries = {
  prologue: {
    id: "Kamu, dengan keadaan setengah sadar, terbangun dalam sebuah daratan gelap tak diketahui, sendirian. Kesadaranmu pulih seiring waktu tapi kegelapan membatasi jarak pandangmu. Kau hanya melihat setitik cahaya yang mengerdip, remang, kau tidak ada pilihan selain mendekatinya. Kau berjalan penuh keraguan, dan ...",
    en: ""
  },
  q1: {
    id: "... cahaya tadi rupanya dari tiga lingkaran yang melayang. Seperti... gerbang pembelah ruang? Kau, entah dari mana, memiliki perasaan bahwa, kau harus masuk. Ah, tidak, tidak, kau hanya terdesak pada pilihan pergi masuk atau tenggelam dalam kegelapan yang luas. Kau memilih ...",
    en: ""
  },
  q1_opt1: {
    id: "Lingkaran yang sisi-sisinya terbuat dari ranting-ranting pohon",
    en: ""
  },
  q1_opt2: {
    id: "Lingkaran yang permukaannya berair, ketika kau menatapnya dekat, wajahmu terpantul dengan samar",
    en: ""
  },
  q1_opt3: {
    id: "Lingkaran yang mirip seperti yang pernah kau buat sewaktu kecil di tembok kamarmu menggunakan kapur warna-warni",
    en: ""
  },
  q2: {
    id: "Kau masuk, tidak ada yang bisa kau amati, kau ... lagi-lagi ... terjebak dalam kegelapan. Kau mencoba kembali, tapi sialnya, tanpa kau sadari, gerbang tadi semakin mengecil sampai tak bisa kau masuki. Sesaat ketika gerbang itu menghilang, terjatuh lah sebuah kunci dari titik cahaya terakhirnya. Di saat yang sama juga, di kanan dan kirimu, menyala satu demi satu obor-obor berapi biru. Kau mengambil kunci tadi, menelusuri jalan yang kini tampak, hingga dihadapkan pada ... tiga kotak setinggi lututmu, bersisi jeruji, bergembok yang cocok dengan kunci di tanganmu. Kau melihat telur di masing-masing kotaknya. Kau mengambil salah satu obor untuk mencoba menerangi lebih dekat tiap-tiap telur. Sampai pada akhirnya kau memutuskan untuk mengambil-bebaskan salah satunya, yang ketika kau dekatkan pada obormu...",
    en: ""
  },
  q2_opt1: {
    id: "tergambar sebuah siluet janin binatang yang tidak kamu tahu, terdapat tulang kecil seperti sayap",
    en: ""
  },
  q2_opt2: {
    id: "telur itu bergerak, walau perlahan, kau masih bisa melihatnya",
    en: ""
  },
  q2_opt3: {
    id: "terdapat retakan kecil di telur itu, mengeluarkan bau bangkai dari retakannya",
    en: ""
  },
  q3: {
    id: "Kau berjalan sambil memeluk telur tadi, sampai pada lorong yang bercabang dua. Keduanya identik, berdinding lumut, beralas tanah yang retak, beratap akar-akar pohon yang saling menyulam. Kau memilih ...",
    en: ""
  },
  q3_opt1: {
    id: "Membuat suara, berharap ada yang menanggapi dari salah satu lorong.",
    en: ""
  },
  q3_opt2: {
    id: "Saya tidak peduli, keduanya sama, saya memilih yang pertama saya lihat.",
    en: ""
  },
  q3_opt3: {
    id: "Saya gulirkan telur tadi, dan memilih lorong yang paling dekat dengan tempat telur itu berhenti.",
    en: ""
  },
  q4: {
    id: "Kau masuk ke lorong kau pilih, memegang obor sambil tetap menjaganya agar tidak mengenai akar-akar kering di atasmu. Pelan dan bersiap akan ancaman, kau dikagetkan dengan telur di tangan kananmu yang bergerak-gerak. Dan... kau berhenti sebentar, meletakannya di tanah. Telur itu melayang dengan sendirinya, memecah cangkangnya seperti suatu ledakan! Kau, yang berlindung dengan sikutmu, mendapati hewan yang tidak kau bayangkan sebelumnya, telur itu menetaskan ...",
    en: ""
  },
  q4_opt1: {
    id: "Burung pheonix, dengan api yang membara di sekujur tubuhnya, api menetes di tiap kepakan sayapnya, kepalanya menunduk patuh padamu.",
    en: ""
  },
  q4_opt2: {
    id: "Gagak hitam, dia langsung hinggap di bahu kananmu, kau bisa berkomunikasi dengan telepati.",
    en: ""
  },
  q4_opt3: {
    id: "Merpati putih bercahaya, dia terbang melanjut perjalanan ke depan, seolah-olah meminta untuk kau ikuti.",
    en: ""
  },
  q5: {
    id: 'Kau sampai di ujung lorong. Sialnya, ketika kau ingin keluar, seperti ada tabir transparan yang menjadi pembatas. Kau tidak bisa menembusnya. Kau sinari dinding-dinding di sekitarmu, mencoba mencari sebuah clue yang bisa membantumu. Dan... kau menemukan tulisan kuno di salah satu dinding. <br /> "aspectu de caelo et de inferno" <br /> Dinding di sekitarmu bergetar!!...tabir di hadapanmu mengecil & memadat menjadi sebuah bola...dan kau ...menyentuhnya, dan benda itu menelan telunjukmu hingga seluruh telapak tangan kananmu, kau mendapatkan di tanganmu sebuah...',
    en: ""
  },
  q5_opt1: {
    id: "Pedang besar yang ringan namum tajam",
    en: ""
  },
  q5_opt2: {
    id: "Busur dengan anak panah tak terhingga",
    en: ""
  },
  q5_opt3: {
    id: "Tongkat beserta buku sihir",
    en: ""
  },
  q6: {
    id: "Kau keluar dari lorong, bersama teman hewan dan senjatamu. Semakin jauh, cahaya semakin jelas, yang ternyata mengantarmu ke hutan penuh flora dengan warna yang aneh. Kau berjalan perlahan memerhatikan sekitar, tiba-tiba hewan yang membersamaimu gelisah. Ia kepakkan sayap-sayapnya dengan cepat, melayang di tempat, di depan sebuah pohon raksasa. Kau ... mencoba mendekati burung itu, tiba-tiba dari pecahan batang tubuh itu terbuka lah sepasang mata. Pohon itu marah, bergerak menyerangmu dengan ranting-rantingnya. Kau menghadapinya dengan ...",
    en: ""
  },
  q6_opt1: {
    id: "Mundur, biar hewan yang tadi kau selamatkan berhadapan dengannya, dia menetas secara ajaib, mungkin punya kekuatan super.",
    en: ""
  },
  q6_opt2: {
    id: "Senjata yang tadi kau ambil, kau belum menguasainya tapi mencoba berbagai cara.",
    en: ""
  },
  q6_opt3: {
    id: "Mencoba membakarnya dengan obor abadi yang kau bawa sejak awal, pohon tetaplah pohon bukan?",
    en: ""
  },
  q7: {
    id: "Monster pohon itu berhasil kau kalahkan, dan kemudian... pohon itu mengecil, menjadi seekor anak serigala berkulit ranting dan daun. Kau mengira kalau monster itu sebenarnya adalah serigala yang dikutuk. Kau mendekati serigala itu, dan ...",
    en: ""
  },
  q7_opt1: {
    id: "Mencoba membunuhnya selagi lemah dan tak berdaya, mungkin kau akan mendapat barang ajaib yang lain",
    en: ""
  },
  q7_opt2: {
    id: "Terlihat sekarat, kau mencoba membantunya",
    en: ""
  },
  q7_opt3: {
    id: "Kau luapkan kata-kata kasar untuk menyumpahi serigala itu, kau mengeluarkan semua kekesalanmu yang tertahan",
    en: ""
  },
  q8: {
    id: "Oh bodohnya kamu... serigala hidup berkoloni! Ketika kau mendekati serigala sekarat tadi, dari belakangnya muncul banyak pasang mata yang semakin lama semakin jelas. Dan kini kau melihat 10 serigala besar yang marah! Hewanmu mencoba menyerangnya dan kau...",
    en: ""
  },
  q8_opt1: {
    id: "Mengajaknya ikut untuk kabur",
    en: ""
  },
  q8_opt2: {
    id: "Kabur sendirian, membiarkan hewanmu sebagai umpan",
    en: ""
  },
  q8_opt3: {
    id: "Ikut menghadapinya walau ini pilihan bodoh",
    en: ""
  },
  q9: {
    id: "Sesaat sebelum kau mengambil pilihanmu, peliharanmu berubah menjadi wujud manusia burung! Senjatamu lepas dari tanganmu, terbang bersatu dengan makhluk itu! Dia ... bertempur dengan hebatnya, tapi tetap tidak bisa menandingi kekuatan kumpulan serigala itu. Lalu dia, dengan sisa-sisa tenaga dari tangan kirinya, menembakkan sebuah sinar laser merah yang melubangi dinding di belakangmu. Lalu kemudian meniupkan angin kuat dari kepakkan sayapnya, menghembuskanmu ke lubang itu. Jauh sekali kau terhempas! Sampai ke suatu pulau terbang, tak ada jalan kembali, kau hanya bisa menerima dan meneruskan perjalananmu. Di belakang, terdapat tiga jembatan dengan keunikan masing-masing. Kau memilih melewati ...",
    en: ""
  },
  q9_opt1: {
    id: "Jembatan dengan latar musik, dari kejauhan memanggil-manggil namamu dengan samar",
    en: ""
  },
  q9_opt2: {
    id: "Jembatan berangin dari ujung, dari tiupannya tercium bau masakan rumah favoritmu",
    en: ""
  },
  q9_opt3: {
    id: "Jembatan gelap, saking gelapnya kau melihat setitik cahaya di ujung jembatannya yang jauh",
    en: ""
  },
  q10: {
    id: 'Kau sampai diujung dengan penuh lelah, lapar, dan rasa ingin pipis. Kau tidak mendapati apa-apa di tempat ini. Kau hanya mengenali satu hal ... dan semakin yakin ... kalau ... ini .... adalah tempat yang sama waktu kamu terbangun! Persis! Sebuah daratan gelap tak diketahui dengan tiga lingkaran yang melayang. Namun kali ini berbeda, ada tulisan "exit" di pintu yang kau pilih sebelumnya. dan ternyata kali ini ada pintu toilet. Kau memilih masuk ke ...',
    en: ""
  },
  q10_opt1: {
    id: 'Lingkaran yang sisi-sisinya terbuat dari ranting-ranting pohon (terdapat tulisan "exit")',
    en: ""
  },
  q10_opt2: {
    id: "Lingkaran yang permukaannya berair, ketika kau menatapnya dekat, wajahmu terpantul dengan samar",
    en: ""
  },
  q10_opt3: {
    id: "Lingkaran yang mirip seperti yang pernah kau buat sewaktu kecil di tembok kamarmu menggunakan kapur warna-warni",
    en: ""
  },
  q10_opt4: {
    id: 'Pintu "toilet"',
    en: ""
  },
  epilogue: {
    id: "Kau masuk ke ruangan baru yang kau pilih, semuanya berbeda. Kau mendengar suara nyaring yang terus berulang, mulutmu menganga menatap langit-langit, kau mendapat cahaya sedikit demi sedikit. Badanmu hangat, terutama bagian bawahmu. Lama ... lama sekali ... Tapi akhirnya kau semakin sadar, mendapati kalau suara itu adalah alarm pagimu dan kehangatan itu adalah ... kau yang mengompol. Kau ... hanya bisa menerima.",
    en: ""
  }
}

export const DICT: Dictionaries = {
  ...QUESTION_BANK
}