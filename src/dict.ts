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
    en: "You...,| in a semi-conscious state,| woke up in an unknown dark land,| alone.|| Your consciousness recovers over time but darkness limits your visibility.|| You only see a speck of light that flickers dimly,| you have no choice but to approach it.| You walk full of doubts,| And ...",
  },
  q1: {
    id: "... cahaya tadi | rupanya dari tiga lingkaran yang melayang.| Seperti... || gerbang pembelah ruang? |||Kau, |entah dari mana, |memiliki perasaan bahwa...|, kau harus masuk.|| Ah, tidak, tidak,||| kau hanya terdesak pada pilihan pergi masuk| atau tenggelam dalam kegelapan yang luas.| Kau memilih ...",
    en: "... that light | apparently from three floating circles.| Like... || space splitting gate? |||You, |out of nowhere, |have a feeling that...|, you have to come in.|| Ah, no, no,||| you're just forced for the option of going in| or sink into vast darkness.| You choose...",
  },
  q1_opt1: {
    id: "Lingkaran yang sisi-sisinya terbuat dari ranting-ranting pohon",
    en: "A circle whose sides are made from tree branches",
  },
  q1_opt2: {
    id: "Lingkaran yang permukaannya berair, ketika kau menatapnya dekat, wajahmu terpantul dengan samar",
    en: "A circle whose surface is watery, when you look closely at it, your face is faintly reflected",
  },
  q1_opt3: {
    id: "Lingkaran yang mirip seperti yang pernah kau buat sewaktu kecil di tembok kamarmu menggunakan kapur warna-warni",
    en: "A circle similar to the one you made as a child on your bedroom wall using colored chalk",
  },
  q2: {
    id: "Kau masuk,| tidak ada yang bisa kau amati,| kau ...|| lagi-lagi ||... terjebak dalam kegelapan.|| Kau mencoba kembali,| tapi sialnya,| tanpa kau sadari,| gerbang tadi semakin mengecil sampai tak bisa kau masuki.|| Sesaat ketika gerbang itu menghilang,| terjatuh lah sebuah kunci dari titik cahaya terakhirnya.| Di saat yang sama juga,| di kanan dan kirimu,| menyala satu demi satu obor-obor berapi merah dan biru.|| Kau mengambil kunci tadi,| menelusuri jalan yang kini tampak,| hingga dihadapkan pada ...||| tiga kotak setinggi lututmu,| bergembok yang cocok dengan kunci di tanganmu.|| Kau melihat telur di masing-masing kotaknya.|| Kau mengambil salah satu obor untuk mencoba menerangi lebih dekat tiap-tiap telur.|| Sampai pada akhirnya kau memutuskan untuk membuka salah satunya,| yang ketika kau dekatkan pada obormu...",
    en: "You're in,| there's nothing you can observe,| you ...|| trapped in darkness ||again.|| You try again,| but damn it,| without you realizing it,| The gate is getting smaller until you can't enter it.|| The moment the gate disappeared,| a key fell from the last point of light.| At the same time too,| on your right and left,| lit up one by one red and blue fiery torches.|| You took the key earlier,| tracing the path now visible,| until faced with ...||| three boxes up to your knees,| padlock that matches the key in your hand.|| You see the eggs in each box.|| You grabbed one of the torches to try to better illuminate each egg.|| Until you finally decide to open one of them,| that when you put it close to your torch...",
  },
  q2_opt1: {
    id: "Tergambar sebuah siluet janin binatang yang tidak kamu tahu, terdapat tulang kecil seperti sayap",
    en: "There is a silhouette of an animal fetus that you don't know, there is small bones like wings",
  },
  q2_opt2: {
    id: "Telur itu bersinar sangat silau, kau menyukai cahayanya",
    en: "The egg shines so brightly, you love that light",
  },
  q2_opt3: {
    id: "Terdapat retakan kecil di telur itu, dan itu semakin luas, kau membiarkan ia menetas dengan sendirinya",
    en: "There is a small crack in the egg, and it is getting wider, you let it hatch on its own",
  },
  q3: {
    id: "Kau berjalan sambil memeluk telur tadi,| sampai pada lorong yang bercabang dua.|| Keduanya berdinding kayu,| beralas tanah yang retak,| beratap akar-akar pohon yang saling menyulam.|| Kau memilih ...",
    en: "You walked while hugging the egg,| to the tunnel that branches in two.|| Both have wooden walls,| cracked ground, | the roof of the roots of the trees embroidered on each other.|| You choose...",
  },
  q3_opt1: {
    id: "Membuat suara, berharap ada yang menanggapi dari salah satu lorong.",
    en: "Making a sound, hoping someone responded from one of the tunnels.",
  },
  q3_opt2: {
    id: "Saya tidak peduli, keduanya sama, saya memilih yang pertama saya lihat.",
    en: "I don't care, they are similar, I choose the first one I see.",
  },
  q3_opt3: {
    id: "Saya gulirkan telur tadi, dan memilih lorong yang paling dekat dengan tempat telur itu berhenti.",
    en: "I rolled the egg, and chose the one which closest to where the egg stopped.",
  },
  q4: {
    id: "Kau masuk ke lorong yang kau pilih,| memegang obor sambil tetap menjaganya agar tidak mengenai akar-akar kering di atasmu.|| Pelan dan bersiap akan ancaman,| kau dikagetkan dengan telur di tangan kananmu yang bergerak-gerak.|| Dan...||| kau berhenti sebentar,| meletakannya di tanah.|| Telur itu melayang dengan sendirinya,| memecah cangkangnya seperti suatu ledakan!||| Kau,| yang berlindung dengan sikutmu,| mendapati hewan yang tidak kau bayangkan sebelumnya,|| telur itu menetaskan ...",
    en: "You enter the tunnel you chose,| Hold the torch while keeping it from hitting the dry roots on you.|| Prepared for threats,| You're shocked by the egg in your right hand that is moving.|| And...||| You stop for a moment,| put it on the ground.|| The egg floats on its own,| shattering the shell like an explosion!||| You,| who takes refuge with your elbows,| found an animal you never imagined before,|| the egg hatches ...",
  },
  q4_opt1: {
    id: "Burung pheonix, dengan api yang membara di sekujur tubuhnya, api menetes di tiap kepakan sayapnya, kepalanya menunduk patuh padamu.",
    en: "The pheonix, with flames burning all over its body, flames dripping at every flap of its wings, its head bowed obediently to you.",
  },
  q4_opt2: {
    id: "Gagak hitam, dia langsung hinggap di bahu kananmu, kau bisa berkomunikasi lewat telepati.",
    en: "Black crow, he landed on your right shoulder right now, you can communicate through telepathy.",
  },
  q4_opt3: {
    id: "Merpati putih bercahaya, dia terbang melanjut perjalanan ke depan, seolah-olah meminta untuk kau ikuti.",
    en: "The glowing white dove, it fly forward on its way, as if asking for you to follow.",
  },
  q5: {
    id: 'Kau sampai di ujung lorong.|| Sialnya,| ketika kau ingin keluar,| seperti ada tabir transparan yang menjadi pembatas.|| Kau tidak bisa menembusnya.| Kau sinari dinding-dinding di sekitarmu,| mencoba mencari sebuah clue yang bisa membantumu.|| Dan...|| kau menemukan tulisan kuno di salah satu dinding.| \n\n"ASPECTU DE CAELO ET DE INFERNO"\n\n || Dinding di sekitarmu bergetar!!...|| tabir di hadapanmu mengecil & memadat menjadi sebuah bola...| dan kau...|| menyentuhnya,| dan benda itu menelan telunjukmu hingga seluruh telapak tangan kananmu,| kau mendapatkan di tanganmu sebuah...',
    en: 'You reach the end of the tunnel.|| Unfortunately, | When you want to go out,| there is a barrier which looks like a transparent veil.|| You can`t break through it.| You shine on the walls around you,| try to find a clue that can help you.|| And...|| You found an ancient writing on one of the walls.| \n\n"ASPECTU DE CAELO ET DE INFERNO"\n\n || The walls around you are shaking!! ...|| The veil in front of you shrinks and condenses into a ball... and you...|| touching it,| and it swallowed your finger up to the whole palm of your right hand,| You get in your hands a...',
  },
  q5_opt1: {
    id: "Pedang besar yang ringan namum tajam",
    en: "Light greatsword but sharp",
  },
  q5_opt2: {
    id: "Busur dengan anak panah tak terhingga",
    en: "Bow with infinite arrows",
  },
  q5_opt3: {
    id: "Tongkat beserta buku sihir",
    en: "Wand and its magic book",
  },
  q6: {
    id: "Kau keluar dari lorong bersama teman hewan dan senjatamu.|| Semakin jauh,| cahaya semakin jelas,| yang ternyata mengantarmu ke hutan penuh batu dan pepohonan.| Kau berjalan perlahan memerhatikan sekitar,| tiba-tiba...|| hewan yang membersamaimu gelisah.| Ia kepakkan sayap-sayapnya dengan cepat,| melayang di tempat,| di depan sebuah pohon raksasa.|| Kau ...|| mencoba mendekati burung itu,| dan dari pecahan batang pohon itu muncul tangan, kaki, dan sepasang mata yang menyala.|| Pohon itu marah,| bergerak menyerangmu dengan ranting-rantingnya.|| Kau menghadapinya dengan ...",
    en: "You come out of the tunnel with your pet and your weapon. Further away,| The light is getting clearer,| which turns out to lead you to a forest full of rocks and trees.| You walk slowly observing your surroundings,| suddenly...|| The animal that accompanies you is restless.| He flaps his wings quickly,| floating on the spot,| in front of a giant tree.|| You ...|| trying to get close to it,| And from the fragment of the tree trunk came pair of hands, foots, and eyes that were on fire. The tree is angry,| try to attack you with its branches.|| You faced it with... ",
  },
  q6_opt1: {
    id: "Mundur, biar hewan yang tadi kau selamatkan berhadapan dengannya, dia menetas secara ajaib, mungkin punya kekuatan super.",
    en: "Stand back, let the animal you saved face him, he miraculously hatched, maybe he has superpowers.",
  },
  q6_opt2: {
    id: "Senjata yang tadi kau ambil, kau belum menguasainya tapi mencoba berbagai cara.",
    en: "The weapon you took earlier, you haven't mastered it yet but tried various ways.",
  },
  q6_opt3: {
    id: "Melempar obor abadi yang kau bawa sejak awal, mencoba membakarnya, pohon tetaplah pohon bukan?",
    en: "Throwing the immortal torch you brought with you from the first place, trying to burn it, the tree is still a tree isn't it?",
  },
  q7: {
    id: "Monster pohon itu berhasil kau kalahkan,| dan kemudian...|| pohon itu mengecil menjadi seekor anak serigala yang terkapar lemas.|| Kau mengira kalau monster itu sebenarnya adalah serigala yang dikutuk.| Kau mendekati serigala itu,| dan ...",
    en: "You managed to defeat the tree monster,| and then...|| The tree shrank into a wolf cub lying limp. You think that the monster is actually a cursed wolf. You approached it,| and...",
  },
  q7_opt1: {
    id: "Mencoba membunuhnya selagi lemah dan tak berdaya, mungkin kau akan mendapat barang ajaib yang lain",
    en: "Trying to kill it while weak and helpless, maybe you'll get another magical item",
  },
  q7_opt2: {
    id: "Terlihat sekarat, kau mencoba membantunya",
    en: "Looks dying, you try to help",
  },
  q7_opt3: {
    id: "Kau tinggalkan dan lanjut mencari jalan keluar",
    en: "You leave it and continue to look for a way out",
  },
  q8: {
    id: "Oh bodohnya kamu...|| serigala hidup berkoloni!| Ketika kau mendekatinya,| dari belakang serigala itu bermunculuan banyak pasang mata yang semakin lama semakin jelas.|| Dan kini kau melihat 4 serigala besar yang marah!|| Hewanmu mencoba menyerangnya||| dan kau sudah kelelahan melawan monster sebelumnya || kau memutuskan ...",
    en: "Oh how stupid you are...|| Wolves Live in Colonies!| When you approach it,| From behind the wolf, appeared many pairs of eyes that became more and more clear. Congratulations! now you see 4 big angry wolves!|| Your travel animal is trying to attack it||| but you've been exhausted fighting monsters before || You decide...",
  },
  q8_opt1: {
    id: "Menarik hewanmu untuk ikut kabur",
    en: "Pull your travel animal to escape together",
  },
  q8_opt2: {
    id: "Kabur sendirian, membiarkan hewanmu sebagai umpan",
    en: "Escape alone, leaving your travel animal as bait",
  },
  q8_opt3: {
    id: "Ikut menghadapinya walau ini pilihan bodoh dan kamu akan terluka hebat",
    en: "Come to face it, even though it's a stupid choice and you'll get hurt badly",
  },
  q9: {
    id: "Sesaat sebelum kau mengambil pilihanmu,| peliharanmu berubah menjadi wujud manusia burung!| Senjatamu lepas dari tanganmu,| terbang bersatu dengan makhluk itu!| Dia ...|| bertempur dengan hebatnya.|| Lalu dia menembakkan sebuah sinar laser merah yang melubangi dinding di dekatmu.| Kemudian meniupkan angin kuat dari kepakkan sayapnya,| menghembuskanmu ke lubang itu.| Kau terhempas sampai ke tempat yang luas namun asing,|| kau hanya bisa menerima dan meneruskan perjalananmu.|| Kau memilih menelusuri ...",
    en: "Just before you take your choice,| Your travel animal transforms into a bird-man!| Your weapon is out of your hands,| fly in unity with the creature!| He ...|| fought greatly.|| Then he fires a red laser beam that pierces a wall near you.| Then it blows a strong wind from the flaps of its wings,| blowing you into that hole.| You were blown away to a vast but strange place, || You can only accept and continue your journey. You choose to explore...",
  },
  q9_opt1: {
    id: "Jembatan yang diujungnya terdapat cahaya, tapi jauh sekali",
    en: "The bridge which has light at the end of it, but it is very far away",
  },
  q9_opt2: {
    id: "Perairan di bawahmu, terdapat perahu rusak tapi masih bisa kau perbaiki",
    en: "The river near you, there is a broken boat but you can still repair it",
  },
  q9_opt3: {
    id: "Keduanya sama saja, kau memilih jalan yang terdapat hembusan angin paling sejuk",
    en: "Both are the same, you choose the road with the coolest wind",
  },
  q10: {
    id: 'Kau sampai pada satu tempat yang aneh,| dengan rasa lapar dan ingin pipis.|| Kau tidak mendapati apa-apa di tempat ini.| Kau hanya mengenali satu hal ...|| dan semakin yakin ...|| kalau ...|| ini ....||| adalah tempat yang sama waktu kamu terbangun!|| Sebuah daratan gelap tak diketahui dengan tiga lingkaran yang melayang.| Namun kali ini berbeda,| ada tulisan "exit" di lingkaran yang kau pilih sebelumnya,| dan kali ini ada pintu toilet.|| Kau memilih masuk ke ...',
    en: `You came to a strange place,| hungry and wanting to pee.|| You don't find anything in this place.| You only recognize one thing...|| and be more sure ...|| that ...|| This is....||| the same place you woke up to!|| An unknown dark land with three floating circles.| But this time is different,| There is a "exit" text written on the circle you selected earlier,| and this time there is a toilet door.|| You chose to go into...`,
  },
  q10_opt1: {
    id: "Lingkaran yang sisi-sisinya terbuat dari ranting-ranting pohon",
    en: "A circle whose sides are made from tree branches",
  },
  q10_opt2: {
    id: "Lingkaran yang permukaannya berair, ketika kau menatapnya dekat, wajahmu terpantul dengan samar",
    en: "A circle whose surface is watery, when you look closely at it, your face is faintly reflected",
  },
  q10_opt3: {
    id: "Lingkaran yang mirip seperti yang pernah kau buat sewaktu kecil di tembok kamarmu menggunakan kapur warna-warni",
    en: "A circle similar to the one you made as a child on your bedroom wall using colored chalk",
  },
  q10_opt4: {
    id: 'Pintu "toilet"',
    en: '"Toilet" door',
  },
  epilogue: {
    id: "Kau masuk ke ruangan baru yang kau pilih,| semuanya berbeda.|| Kau mendengar suara nyaring yang terus berulang,| mulutmu menganga menatap langit-langit,| kau mendapat cahaya sedikit demi sedikit.|| Badanmu hangat,| terutama bagian bawahmu.|| Lama...|| lamaaaa sekali...||| Tapi akhirnya kau semakin sadar,| mendapati kalau suara itu adalah alarm pagimu dan kehangatan itu adalah...|| kau yang mengompol.|| Kau...||| hanya bisa menerima.",
    en: "You enter the new room you chose,| everything is different.|| You hear a loud voice that keeps repeating,| Your mouth gapes staring at the ceiling,| You get the light little by little. Your body is warm,| especially your lower part.|| Odd...|| It takes a very long time...||| But finally you are more and more aware,| find that the sound is your morning alarm and the warmth is... || you which peed in your pants.|| You...||| can only accept the situation.",
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
