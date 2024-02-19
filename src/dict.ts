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
  q3: {
    id: "Kau berjalan sambil memeluk telur tadi, sampai pada lorong yang bercabang dua. Keduanya identik, berdinding lumut, beralas tanah yang retak, beratap akar-akar pohon yang saling menyulam. Kau memilih ...",
    en: ""
  },
  q4: {
    id: "Kau masuk ke lorong kau pilih, memegang obor sambil tetap menjaganya agar tidak mengenai akar-akar kering di atasmu. Pelan dan bersiap akan ancaman, kau dikagetkan dengan telur di tangan kananmu yang bergerak-gerak. Dan... kau berhenti sebentar, meletakannya di tanah. Telur itu melayang dengan sendirinya, memecah cangkangnya seperti suatu ledakan! Kau, yang berlindung dengan sikutmu, mendapati hewan yang tidak kau bayangkan sebelumnya, telur itu menetaskan ...",
    en: ""
  },
  q5: {
    id: 'Kau sampai di ujung lorong. Sialnya, ketika kau ingin keluar, seperti ada tabir transparan yang menjadi pembatas. Kau tidak bisa menembusnya. Kau sinari dinding-dinding di sekitarmu, mencoba mencari sebuah clue yang bisa membantumu. Dan... kau menemukan tulisan kuno di salah satu dinding. <br /> "aspectu de caelo et de inferno" <br /> Dinding di sekitarmu bergetar!!...tabir di hadapanmu mengecil & memadat menjadi sebuah bola...dan kau ...menyentuhnya, dan benda itu menelan telunjukmu hingga seluruh telapak tangan kananmu, kau mendapatkan di tanganmu sebuah...',
    en: ""
  },
  q6: {
    id: "Kau keluar dari lorong, bersama teman hewan dan senjatamu. Semakin jauh, cahaya semakin jelas, yang ternyata mengantarmu ke hutan penuh flora dengan warna yang aneh. Kau berjalan perlahan memerhatikan sekitar, tiba-tiba hewan yang membersamaimu gelisah. Ia kepakkan sayap-sayapnya dengan cepat, melayang di tempat, di depan sebuah pohon raksasa. Kau ... mencoba mendekati burung itu, tiba-tiba dari pecahan batang tubuh itu terbuka lah sepasang mata. Pohon itu marah, bergerak menyerangmu dengan ranting-rantingnya. Kau menghadapinya dengan ...",
    en: ""
  },
  q7: {
    id: "Monster pohon itu berhasil kau kalahkan, dan kemudian... pohon itu mengecil, menjadi seekor anak serigala berkulit ranting dan daun. Kau mengira kalau monster itu sebenarnya adalah serigala yang dikutuk. Kau mendekati serigala itu, dan ...",
    en: ""
  },
  q8: {
    id: "Oh bodohnya kamu... serigala hidup berkoloni! Ketika kau mendekati serigala sekarat tadi, dari belakangnya muncul banyak pasang mata yang semakin lama semakin jelas. Dan kini kau melihat 10 serigala besar yang marah! Hewanmu mencoba menyerangnya dan kau...",
    en: ""
  },
  q9: {
    id: "Sesaat sebelum kau mengambil pilihanmu, peliharanmu berubah menjadi wujud manusia burung! Senjatamu lepas dari tanganmu, terbang bersatu dengan makhluk itu! Dia ... bertempur dengan hebatnya, tapi tetap tidak bisa menandingi kekuatan kumpulan serigala itu. Lalu dia, dengan sisa-sisa tenaga dari tangan kirinya, menembakkan sebuah sinar laser merah yang melubangi dinding di belakangmu. Lalu kemudian meniupkan angin kuat dari kepakkan sayapnya, menghembuskanmu ke lubang itu. Jauh sekali kau terhempas! Sampai ke suatu pulau terbang, tak ada jalan kembali, kau hanya bisa menerima dan meneruskan perjalananmu. Di belakang, terdapat tiga jembatan dengan keunikan masing-masing. Kau memilih melewati ...",
    en: ""
  },
  q10: {
    id: 'Kau sampai diujung dengan penuh lelah, lapar, dan rasa ingin pipis. Kau tidak mendapati apa-apa di tempat ini. Kau hanya mengenali satu hal ... dan semakin yakin ... kalau ... ini .... adalah tempat yang sama waktu kamu terbangun! Persis! Sebuah daratan gelap tak diketahui dengan tiga lingkaran yang melayang. Namun kali ini berbeda, ada tulisan "exit" di pintu yang kau pilih sebelumnya. dan ternyata kali ini ada pintu toilet. Kau memilih masuk ke ...',
    en: ""
  }
}

export const DICT: Dictionaries = {
  ...QUESTION_BANK
}