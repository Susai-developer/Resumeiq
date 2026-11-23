/**
 * ============================================================
 * AROKIYAM WEB PLAYER - MAIN JAVASCRIPT ENGINE
 * Sacred Tamil Devotional Music Platform
 * ============================================================
 */

// 1. AROKIYAM DEVOTIONAL SONGS DATA (Curated Velankanni Matha & Marian Hits)
const playlistData = {
  id: "arokiyam-velankanni-special",
  title: "Velankanni Matha Special - Devotional Hits",
  tamilTitle: "வேளாங்கண்ணி ஆரோக்கிய மாதா சிறப்பு பாடல்கள்",
  type: "AROKIYAM Public Playlist",
  creator: "AROKIYAM",
  description: "Curated sacred Tamil Marian hymns, Christian prayers, and chants dedicated to Our Lady of Good Health, Velankanni. Featuring classic hymns for inner peace, healing, and divine solace.",
  cover: "assets/playlist_cover.svg",
  saves: "148,239 saves",
  tracks: [
  {
    "id": 1,
    "title": "Dhasare Idho Nam Esunathan",
    "tamilTitle": "தாசரே இதோ நம் இயேசுநாதன்",
    "artist": "Tamil Christian Choir",
    "album": "Geethangalum Keerthanaigalum",
    "cover": "assets/cover1.svg",
    "color": "#065f46",
    "duration": 225,
    "durationStr": "3:45",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795329232/.trashed-1797919378-DHASARE.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "தாசரே இதோ நம் இயேசுநாதன்..."
      },
      {
        "time": 12,
        "text": "Dhasare idho nam Esunathan"
      },
      {
        "time": 24,
        "text": "பரிசுத்த தேவன் நம்மை அழைத்தார்"
      },
      {
        "time": 38,
        "text": "Parisutha devan nammai azhaithar"
      },
      {
        "time": 52,
        "text": "ஆர்ப்பரிப்போம் ஆனந்தமாய் பாடுவோம்"
      },
      {
        "time": 68,
        "text": "Aarpparippom aananthamaai paaduvom"
      },
      {
        "time": 84,
        "text": "அவர் கிருபை என்றும் உள்ளது"
      },
      {
        "time": 100,
        "text": "Avar kirubai endrum ullathu"
      }
    ]
  },
  {
    "id": 2,
    "title": "Edaivida Nandri Umakku",
    "tamilTitle": "இடைவிடா நன்றி உமக்குத்தானே",
    "artist": "Catholic Devotional Singers",
    "album": "Nandri Bali",
    "cover": "assets/cover2.svg",
    "color": "#1e3a8a",
    "duration": 222,
    "durationStr": "3:42",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795329207/.trashed-1797919381-EDAIVIDA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "இடைவிடா நன்றி உமக்குத்தானே..."
      },
      {
        "time": 14,
        "text": "Edaivida nandri umakkuthaane"
      },
      {
        "time": 28,
        "text": "என் வாழ்நாளெல்லாம் போற்றுவேன்"
      },
      {
        "time": 42,
        "text": "En vaazhnaalellaam potruvaen"
      },
      {
        "time": 58,
        "text": "இயேசுவே உம் அன்பு மாறாதது"
      },
      {
        "time": 74,
        "text": "Esuve um anbu maaraathathu"
      },
      {
        "time": 92,
        "text": "அற்புதங்கள் செய்த என் தெய்வமே"
      }
    ]
  },
  {
    "id": 3,
    "title": "Kodi Vinmeen Vanathilae",
    "tamilTitle": "கோடி விண்மீன் வானத்திலே",
    "artist": "Velankanni Matha Melodies",
    "album": "Velankanni Geethangal",
    "cover": "assets/cover3.svg",
    "color": "#881337",
    "duration": 265,
    "durationStr": "4:25",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795004313/VELANKANNI_MATHA_-_Kodi_Vinmeen_Vanathilae-%E0%AE%95%E0%AF%8B%E0%AE%9F%E0%AE%BF_%E0%AE%B5%E0%AE%BF%E0%AE%A3%E0%AF%8D%E0%AE%AE%E0%AF%80%E0%AE%A9%E0%AF%8D_%E0%AE%B5%E0%AE%BE%E0%AE%A9%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B2%E0%AF%87_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "கோடி விண்மீன் வானத்திலே..."
      },
      {
        "time": 15,
        "text": "Kodi vinmeen vaanathilae"
      },
      {
        "time": 30,
        "text": "கூடி நிற்கும் நேரத்திலே"
      },
      {
        "time": 45,
        "text": "வேளாங்கண்ணி மாதாவே வெளிச்சம் தாரும் அன்னையே"
      },
      {
        "time": 65,
        "text": "அலைகடல் ஓரம் ஆலயம் கொண்டாய்"
      },
      {
        "time": 85,
        "text": "Alaikadal ooram aalayam kondaai"
      },
      {
        "time": 105,
        "text": "நோய் நொடிகள் நீக்கும் ஆரோக்கிய தாயே"
      }
    ]
  },
  {
    "id": 4,
    "title": "Amen Alliluya Geethangal",
    "tamilTitle": "ஆமென் அல்லேலூயா கீதங்கள்",
    "artist": "Grace Worship Ensemble",
    "album": "Praise & Worship Hits",
    "cover": "assets/cover4.svg",
    "color": "#581c87",
    "duration": 198,
    "durationStr": "3:18",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795329238/.trashed-1797919378-AMEN_ALLILUYA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "ஆமென் அல்லேலூயா கீதங்கள் பாடுவோம்..."
      },
      {
        "time": 14,
        "text": "Amen Alliluya geethangal paaduvom"
      },
      {
        "time": 28,
        "text": "ராஜாதிராஜனை வணங்குவோம்"
      },
      {
        "time": 44,
        "text": "Rajathirajani vananguvom"
      },
      {
        "time": 60,
        "text": "மகிமை துதி கனம் உமக்கே"
      }
    ]
  },
  {
    "id": 5,
    "title": "Kelungal Tharapadum",
    "tamilTitle": "கேளுங்கள் தரப்படும் தட்டுங்கள் திறக்கப்படும்",
    "artist": "Tamil Christian Melodies",
    "album": "Narcheithi Geethangal",
    "cover": "assets/cover5.svg",
    "color": "#0f766e",
    "duration": 443,
    "durationStr": "7:23",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795329796/.trashed-1797919378-0001_kelungal.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "கேளுங்கள் தரப்படும் தட்டுங்கள் திறக்கப்படும்..."
      },
      {
        "time": 16,
        "text": "Kelungal tharapadum thattungal thirakkapadum"
      },
      {
        "time": 34,
        "text": "தேடுங்கள் கண்டடைவீர்கள் என்றார் இயேசு"
      },
      {
        "time": 52,
        "text": "Thedungal kandadaiveergal endraar Esu"
      },
      {
        "time": 72,
        "text": "நம்பிக்கையோடு ஜெபிக்கும் யாவருக்கும் வள்ளல் இறைவன் வரம் தருகிறார்"
      }
    ]
  },
  {
    "id": 6,
    "title": "Esu Nesikkirar Unnai",
    "tamilTitle": "இயேசு நேசிக்கிறார் உன்னை நேசிக்கிறார்",
    "artist": "Gospel Light Melodies",
    "album": "Anbin Theivam",
    "cover": "assets/cover6.svg",
    "color": "#c2410c",
    "duration": 230,
    "durationStr": "3:50",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330022/.trashed-1797919382-ESU_NESIKKIRAR.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "இயேசு நேசிக்கிறார் உன்னை நேசிக்கிறார்..."
      },
      {
        "time": 15,
        "text": "Esu nesikkirar unnai nesikkirar"
      },
      {
        "time": 30,
        "text": "அன்பின் கரங்களால் அணைக்கின்றார்"
      },
      {
        "time": 46,
        "text": "கண்ணீர் கவலைகள் யாவும் மாற்றுவார்"
      }
    ]
  },
  {
    "id": 7,
    "title": "Ennalume Thudhithiduvaen",
    "tamilTitle": "எந்நாளுமே துதித்திடுவேன் தேவனை",
    "artist": "Christian Devotional Singers",
    "album": "Ratchaniya Geethangal",
    "cover": "assets/cover7.svg",
    "color": "#4338ca",
    "duration": 239,
    "durationStr": "3:59",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330014/.trashed-1797919381-ENNALUME.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "எந்நாளுமே துதித்திடுவேன் தேவனை..."
      },
      {
        "time": 16,
        "text": "Ennalume thudhithiduvaen devanai"
      },
      {
        "time": 32,
        "text": "என் ஜீவனுள்ள நாட்களெல்லாம் போற்றுவேன்"
      },
      {
        "time": 50,
        "text": "காலை மாலை இருவேளையும் ஸ்தோத்தரிப்பேன்"
      }
    ]
  },
  {
    "id": 8,
    "title": "Esupiran Engal Ratchagar",
    "tamilTitle": "இயேசுபிரான் எங்கள் இரட்சகர்",
    "artist": "Sacred Choral Group",
    "album": "Siluvaiyin Nizhalil",
    "cover": "assets/cover8.svg",
    "color": "#78350f",
    "duration": 220,
    "durationStr": "3:40",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330012/.trashed-1797919382-ESUPIRAN.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "இயேசுபிரான் எங்கள் இரட்சகர்..."
      },
      {
        "time": 15,
        "text": "Esupiran engal ratchagar"
      },
      {
        "time": 30,
        "text": "சிலுவை சுமந்த கருணைக் கடல்"
      },
      {
        "time": 48,
        "text": "மீட்பர் இயேசுவின் பாதங்களில் அமைதி"
      }
    ]
  },
  {
    "id": 9,
    "title": "Ellam Esuve Enakellam Esuve",
    "tamilTitle": "எல்லாம் இயேசுவே எனக்கெல்லாம் இயேசுவே",
    "artist": "Faith Melodies",
    "album": "En Vaazhvin Belan",
    "cover": "assets/cover1.svg",
    "color": "#be185d",
    "duration": 237,
    "durationStr": "3:57",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330010/.trashed-1797919381-ELLAM_ESUVA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "எல்லாம் இயேசுவே எனக்கெல்லாம் இயேசுவே..."
      },
      {
        "time": 15,
        "text": "Ellam Esuve enakellam Esuve"
      },
      {
        "time": 30,
        "text": "என் வாழ்வின் ஜீவன் அவரே"
      },
      {
        "time": 48,
        "text": "துன்பத்தில் தேற்றும் நண்பன் அவரே"
      }
    ]
  },
  {
    "id": 10,
    "title": "Ezhundhare Maranam Vendraare",
    "tamilTitle": "எழுந்தாரே மரணம் வென்றாரே கிறிஸ்து",
    "artist": "Easter & Resurrection Choir",
    "album": "Uyirthezhum Ratchagar",
    "cover": "assets/cover2.svg",
    "color": "#047857",
    "duration": 153,
    "durationStr": "2:33",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795329892/.trashed-1797919381-ESHUNDHAR.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "எழுந்தாரே மரணம் வென்றாரே கிறிஸ்து..."
      },
      {
        "time": 16,
        "text": "Ezhundhare maranam vendraare"
      },
      {
        "time": 32,
        "text": "அல்லேலூயா ஜெயகீதம் பாடுவோம்"
      },
      {
        "time": 50,
        "text": "ஜீவன் தந்த ஆண்டவர் வாழ்கவே"
      }
    ]
  },
  {
    "id": 11,
    "title": "Thanthanai Thudhi Maname",
    "tamilTitle": "தந்தனை துதி மனமே தினம்",
    "artist": "Traditional Tamil Christian Hymns",
    "album": "Keerthanai Mani Malai",
    "cover": "assets/cover3.svg",
    "color": "#b45309",
    "duration": 243,
    "durationStr": "4:03",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330275/.trashed-1797919385-THANTHANAI.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "தந்தனை துதி மனமே தினம் பாடு மனமே..."
      },
      {
        "time": 15,
        "text": "Thanthanai thudhi maname"
      },
      {
        "time": 30,
        "text": "அந்தமில்லா பரமபிதாவை வணங்கு மனமே"
      }
    ]
  },
  {
    "id": 12,
    "title": "Theera Esunathan Thiruvadi",
    "tamilTitle": "தீர இயேசு நாதன் திருவடி சரணம்",
    "artist": "Devotional Choirs",
    "album": "Arul Geethangal",
    "cover": "assets/cover4.svg",
    "color": "#0369a1",
    "duration": 232,
    "durationStr": "3:52",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330258/.trashed-1797919385-THEERESUNATHAN.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "தீர இயேசு நாதன் திருவடி சரணம்..."
      },
      {
        "time": 15,
        "text": "Theera Esunathan thiruvadi saranam"
      },
      {
        "time": 32,
        "text": "மரணத்தை வென்ற மாமன்னரே போற்றி"
      }
    ]
  },
  {
    "id": 13,
    "title": "Esuvin Alayam Maniyosai",
    "tamilTitle": "இயேசுவின் ஆலய மணி ஓசை கேட்குதே",
    "artist": "Church Choral Group",
    "album": "Aalayam Thozhuvom",
    "cover": "assets/cover5.svg",
    "color": "#6d28d9",
    "duration": 236,
    "durationStr": "3:56",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330245/.trashed-1797919383-ESUVIN_ALAYA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "இயேசுவின் ஆலய மணி ஓசை கேட்குதே..."
      },
      {
        "time": 15,
        "text": "Esuvin alayam maniyosai ketkuthe"
      },
      {
        "time": 32,
        "text": "அன்பின் ஆலயத்தில் அடி எடுத்து வைப்போம்"
      }
    ]
  },
  {
    "id": 14,
    "title": "Esu Raja Engal Devan",
    "tamilTitle": "இயேசு ராஜா எங்கள் தேவன் எந்நாளும்",
    "artist": "Worship Team",
    "album": "Rajathi Raja",
    "cover": "assets/cover6.svg",
    "color": "#15803d",
    "duration": 232,
    "durationStr": "3:52",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330240/.trashed-1797919383-ESURAJA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "இயேசு ராஜா எங்கள் தேவன் எந்நாளும்..."
      },
      {
        "time": 15,
        "text": "Esu Raja engal devan endnaalum"
      },
      {
        "time": 30,
        "text": "அவர் நாமம் வாழ்க வாழ்கவே"
      }
    ]
  },
  {
    "id": 15,
    "title": "Sarvalogathipa Namaskaram",
    "tamilTitle": "சர்வலோக அதிபா நமஸ்காரம்",
    "artist": "Tamil Classical Christian Ensemble",
    "album": "Keerthanaigal",
    "cover": "assets/cover7.svg",
    "color": "#9d174d",
    "duration": 234,
    "durationStr": "3:54",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330226/.trashed-1797919384-SARVALOGATHIPA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "சர்வலோக அதிபா நமஸ்காரம்..."
      },
      {
        "time": 16,
        "text": "Sarvalogathipa namaskaram"
      },
      {
        "time": 32,
        "text": "பரலோக ராஜனே வந்தனம் வந்தனம்"
      }
    ]
  },
  {
    "id": 16,
    "title": "Vindhai Manidhar Esu",
    "tamilTitle": "விந்தை மனிதர் இயேசு கிறிஸ்துவின் அன்பு",
    "artist": "Gospel Melodies",
    "album": "Arputhar Esu",
    "cover": "assets/cover8.svg",
    "color": "#1e40af",
    "duration": 226,
    "durationStr": "3:46",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330439/.trashed-1797919387-VINTDHAI.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "விந்தை மனிதர் இயேசு கிறிஸ்துவின் அன்பு..."
      },
      {
        "time": 15,
        "text": "Vindhai manidhar Esu"
      },
      {
        "time": 32,
        "text": "எல்லை இல்லாத தெய்வீகப் பாசம்"
      }
    ]
  },
  {
    "id": 17,
    "title": "Vandhanam Vandhanam Esuvukke",
    "tamilTitle": "வந்தனம் வந்தனம் இயேசுவுக்கே கோடி",
    "artist": "Devotional Praise Choir",
    "album": "Vanangugindrom",
    "cover": "assets/cover1.svg",
    "color": "#047857",
    "duration": 231,
    "durationStr": "3:51",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330413/.trashed-1797919387-VANDHANAM.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "வந்தனம் வந்தனம் இயேசுவுக்கே கோடி..."
      },
      {
        "time": 14,
        "text": "Vandhanam vandhanam Esuvukke"
      },
      {
        "time": 30,
        "text": "சிந்தையில் நிறைந்த தெய்வமே வந்தனம்"
      }
    ]
  },
  {
    "id": 18,
    "title": "Then Inimaiyilum Iniyavare",
    "tamilTitle": "தேன் இனிமையிலும் இனியவரே இயேசு",
    "artist": "Tamil Christian Chants",
    "album": "Iniya Esu",
    "cover": "assets/cover2.svg",
    "color": "#a16207",
    "duration": 246,
    "durationStr": "4:06",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330401/.trashed-1797919386-THEN_ENIMAILUM.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "தேன் இனிமையிலும் இனியவரே இயேசு..."
      },
      {
        "time": 15,
        "text": "Then inimaiyilum iniyavare Esu"
      },
      {
        "time": 32,
        "text": "உம் நாமம் தித்திக்கும் நல் அமிர்தமே"
      }
    ]
  },
  {
    "id": 19,
    "title": "Thothiram Paadiye Potriduvom",
    "tamilTitle": "தோத்திரம் பாடியே போற்றிடுவோம் இறைவனை",
    "artist": "Sacred Worship Ensemble",
    "album": "Thothira Bali",
    "cover": "assets/cover3.svg",
    "color": "#475569",
    "duration": 219,
    "durationStr": "3:39",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330401/.trashed-1797919386-THOTHIRAM.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "தோத்திரம் பாடியே போற்றிடுவோம் இறைவனை..."
      },
      {
        "time": 15,
        "text": "Thothiram paadiye potriduvom"
      },
      {
        "time": 30,
        "text": "நன்றியோடு என்றும் துதி சாற்றுவோம்"
      }
    ]
  },
  {
    "id": 20,
    "title": "Kodi Vinmeen (Classic Duet)",
    "tamilTitle": "கோடி விண்மீன் வானத்திலே",
    "artist": "Malaysia Vasudevan & Vani Jayaram",
    "album": "Velankanni Peruvizha Hits",
    "cover": "assets/cover4.svg",
    "color": "#881337",
    "duration": 261,
    "durationStr": "4:21",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330592/.trashed-1797919364-01.KODI_VINMEEN_MALESIA_VASUDEVAN_VANI_JAYARAM.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "கோடி விண்மீன் வானத்திலே கூடி நிற்கும் நேரத்திலே..."
      },
      {
        "time": 16,
        "text": "Kodi vinmeen vaanathilae koodi nirkum nerathilae"
      },
      {
        "time": 34,
        "text": "வேளாங்கண்ணி மாதாவே வெளிச்சம் தாரும் அன்னையே"
      },
      {
        "time": 52,
        "text": "அலைகடல் ஓரம் ஆலயம் கொண்டாய்"
      },
      {
        "time": 70,
        "text": "அகிலமெல்லாம் ஒளி வீச நின்றாய்"
      }
    ]
  },
  {
    "id": 21,
    "title": "Annaiye Thaaye Aarokiya Madha",
    "tamilTitle": "அன்னையே தாயே ஆரோக்கிய மாதாவே",
    "artist": "A.V. Govindan",
    "album": "Velankanni Matha Geethangal",
    "cover": "assets/cover5.svg",
    "color": "#064e3b",
    "duration": 266,
    "durationStr": "4:26",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330586/.trashed-1797919369-05.ANNAIYE_THAAYE_AV.GOVINDAN.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அன்னையே தாயே ஆரோக்கிய மாதாவே..."
      },
      {
        "time": 15,
        "text": "Annaiye thaaye aarokiya maadhaave"
      },
      {
        "time": 32,
        "text": "உந்தன் அருள் நிழலில் தஞ்சம் அடைந்தோம் அம்மா"
      },
      {
        "time": 50,
        "text": "கண்ணீர் துடைக்க வா அம்மா ஆரோக்கிய அம்மா"
      }
    ]
  },
  {
    "id": 22,
    "title": "Ulagellaam Potrum Annaiye",
    "tamilTitle": "உலகெல்லாம் போற்றும் உன்னத அன்னையே",
    "artist": "S. Janaki",
    "album": "Marian Golden Hits",
    "cover": "assets/cover6.svg",
    "color": "#4c1d95",
    "duration": 183,
    "durationStr": "3:03",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330584/.trashed-1797919368-04.ULAGELLAAM_POTRUM_S.JANAGI.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "உலகெல்லாம் போற்றும் உன்னத அன்னையே..."
      },
      {
        "time": 16,
        "text": "Ulagellaam potrum unnatha annaiye"
      },
      {
        "time": 34,
        "text": "வேளாங்கண்ணி வாழ் ஆரோக்கிய தாயே"
      },
      {
        "time": 52,
        "text": "மகிமையின் வடிவே எங்களை காத்திடும் தாயே"
      }
    ]
  },
  {
    "id": 23,
    "title": "Aarokiya Madhave Adaikkalame",
    "tamilTitle": "ஆரோக்கிய மாதாவே அடைக்கலமே நீரே",
    "artist": "P. Susheela",
    "album": "Arokiya Matha Paamaalai",
    "cover": "assets/cover7.svg",
    "color": "#0f766e",
    "duration": 208,
    "durationStr": "3:28",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330574/.trashed-1797919366-02.AAROKIYA_MADAVE_P.SUSILA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "ஆரோக்கிய மாதாவே அடைக்கலமே நீரே..."
      },
      {
        "time": 16,
        "text": "Aarokiya madhave adaikkalame neere"
      },
      {
        "time": 34,
        "text": "தஞ்சமென ஓடி வந்தோம் உன் மலரடி தேடி"
      },
      {
        "time": 52,
        "text": "வாழ்வில் அமைதியும் ஆரோக்கியமும் தந்தருள்வாய்"
      }
    ]
  },
  {
    "id": 24,
    "title": "Annaiye Nee Enakoru Thaayanai",
    "tamilTitle": "அன்னையே நீ எனக்கு ஒரு தாயானாய்",
    "artist": "Vani Jayaram",
    "album": "Velankanni Malargal",
    "cover": "assets/cover8.svg",
    "color": "#be185d",
    "duration": 285,
    "durationStr": "4:45",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330567/.trashed-1797919368-03.ANNAIYE_NE_ENAKORU_VANIJAYARAM.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அன்னையே நீ எனக்கு ஒரு தாயானாய்..."
      },
      {
        "time": 15,
        "text": "Annaiye nee enakoru thaayanai"
      },
      {
        "time": 32,
        "text": "அன்பின் மடியில் எனைத் தாங்கினாய்"
      },
      {
        "time": 50,
        "text": "ஆரோக்கிய அன்னை உன் கிருபைக்கு ஈடில்லை"
      }
    ]
  },
  {
    "id": 25,
    "title": "Ethanai Kodi Inbangal",
    "tamilTitle": "எத்தனை கோடி இன்பங்கள் தந்தாய் மாமரியே",
    "artist": "S. Janaki",
    "album": "Matha Kripai",
    "cover": "assets/cover1.svg",
    "color": "#1d4ed8",
    "duration": 199,
    "durationStr": "3:19",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330821/.trashed-1797919370-08.ETHANAI_KODI_S.JANAGI.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "எத்தனை கோடி இன்பங்கள் தந்தாய் மாமரியே..."
      },
      {
        "time": 16,
        "text": "Ethanai kodi inbangal thanthai maamariye"
      },
      {
        "time": 34,
        "text": "முத்தாய்ப்பான உன் திருமுகத்தைக் கண்டேனம்மா"
      },
      {
        "time": 52,
        "text": "அத்தனை துயரமும் பறந்தோடிப் போகுதம்மா"
      }
    ]
  },
  {
    "id": 26,
    "title": "Kathum Alaikadal Orathile",
    "tamilTitle": "கத்தும் அலைகடல் ஓரத்திலே",
    "artist": "P. Susheela",
    "album": "Velankanni Kadarkaraiyil",
    "cover": "assets/cover2.svg",
    "color": "#0f766e",
    "duration": 220,
    "durationStr": "3:40",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330811/.trashed-1797919370-07.KATHUM_ALAIKADAL_P.SUSILA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "கத்தும் அலைகடல் ஓரத்திலே அன்புத்தாங்கியே வந்தவளே..."
      },
      {
        "time": 18,
        "text": "Kathum alaikadal orathile anbuthaangiye vanthavale"
      },
      {
        "time": 36,
        "text": "சித்தம் இரங்கியே வேளைநகர் வந்தே ஆரோக்கியம் தந்தவளே அம்மா"
      }
    ]
  },
  {
    "id": 27,
    "title": "Vanakkam Vanakkam Velankanni Matha",
    "tamilTitle": "வணக்கம் வணக்கம் வேளாங்கண்ணி மாதா",
    "artist": "Vani Jayaram",
    "album": "Matha Vanakkam",
    "cover": "assets/cover3.svg",
    "color": "#ca8a04",
    "duration": 198,
    "durationStr": "3:18",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330811/.trashed-1797919373-11.VANAKAM_VANAKAM_VANI_JAYARAM.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "வணக்கம் வணக்கம் வேளாங்கண்ணி மாதா..."
      },
      {
        "time": 15,
        "text": "Vanakkam vanakkam Velankanni Matha"
      },
      {
        "time": 32,
        "text": "மணக்கும் மலர்களால் அர்ச்சனை செய்தோம்"
      },
      {
        "time": 50,
        "text": "குணமளிக்கும் தாயே உன் பொற்பாதம் பணிகின்றோம்"
      }
    ]
  },
  {
    "id": 28,
    "title": "Vanga Kadalil Vandha Arokiya Annai",
    "tamilTitle": "வங்கக் கடலில் வந்த ஆரோக்கிய அன்னை",
    "artist": "S.P. Balasubrahmanyam",
    "album": "Velankanni Arulnilavum",
    "cover": "assets/cover4.svg",
    "color": "#0369a1",
    "duration": 213,
    "durationStr": "3:33",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330807/.trashed-1797919369-06.VANGA_KADALIL_S.P.BALASUBRAMANIYAM.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "வங்கக் கடலில் வந்த ஆரோக்கிய அன்னை..."
      },
      {
        "time": 16,
        "text": "Vanga kadalil vandha aarokiya annai"
      },
      {
        "time": 34,
        "text": "எங்கள் நலம் காக்க நின்ற அருள் அன்னை"
      },
      {
        "time": 52,
        "text": "அலைகடல் நடுவினில் வழி காட்டும் ஒளிவிளக்கே"
      }
    ]
  },
  {
    "id": 29,
    "title": "Velankanni Mariyaye Engal Thunaiye",
    "tamilTitle": "வேளாங்கண்ணி மரியாயே எங்கள் வாழ்வின் துணையே",
    "artist": "S. Janaki",
    "album": "Velankanni Matha Arutpaadalgal",
    "cover": "assets/cover5.svg",
    "color": "#701a75",
    "duration": 185,
    "durationStr": "3:05",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330767/.trashed-1797919373-10.VELANKANNI_MARIYAYE_S.JANAKI.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "வேளாங்கண்ணி மரியாயே எங்கள் வாழ்வின் துணையே..."
      },
      {
        "time": 16,
        "text": "Velankanni Mariyaye engal vaazhvin thunaiye"
      },
      {
        "time": 34,
        "text": "கருணை நிறைந்தவளே கண்மணி தாயே"
      },
      {
        "time": 52,
        "text": "அருள் தந்து எம்மை ஆசீர்வதிக்க வா"
      }
    ]
  },
  {
    "id": 30,
    "title": "Mannil Kaladi Pathitha Maamariye",
    "tamilTitle": "மண்ணில் காலடி பதித்த மாமரியே",
    "artist": "P. Susheela",
    "album": "Annaiyin Thirupatham",
    "cover": "assets/cover6.svg",
    "color": "#9a3412",
    "duration": 193,
    "durationStr": "3:13",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795330750/.trashed-1797919372-09.MANNIL_KALADI_P.SUSILA.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மண்ணில் காலடி பதித்த மாமரியே..."
      },
      {
        "time": 16,
        "text": "Mannil kaladi pathitha maamariye"
      },
      {
        "time": 34,
        "text": "விண்ணில் இருந்து வந்து அருள் பொழிந்தாயே"
      },
      {
        "time": 52,
        "text": "வேளாங்கண்ணி திருத்தலமே பூமியின் சொர்க்கமம்மா"
      }
    ]
  },
  {
    "id": 31,
    "title": "Chithirai Thirunaalil Annai Pavani",
    "tamilTitle": "சித்திரை திருநாளில் அன்னை பவனி",
    "artist": "Tamil Catholic Melodies",
    "album": "Poondi Thiruvizha",
    "cover": "assets/cover7.svg",
    "color": "#065f46",
    "duration": 242,
    "durationStr": "4:02",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331078/.trashed-1797919378-04_Cithirai.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "சித்திரை திருநாளில் அன்னை பவனி வருகின்றாள்..."
      },
      {
        "time": 15,
        "text": "Chithirai thirunaalil annai pavani varugindraal"
      },
      {
        "time": 32,
        "text": "பக்தர்கள் கூட்டமெல்லாம் பாடிப் போற்றுதம்மா"
      }
    ]
  },
  {
    "id": 32,
    "title": "Pugal Ellam Umakke Punitha Annaiye",
    "tamilTitle": "புகழெல்லாம் உமக்கே புனித அன்னையே",
    "artist": "Marian Sacred Choir",
    "album": "Magimaiyin Geetham",
    "cover": "assets/cover8.svg",
    "color": "#4338ca",
    "duration": 321,
    "durationStr": "5:21",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331077/.trashed-1797919377-02_Pugal_Ellam.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "புகழெல்லாம் உமக்கே புனித அன்னையே..."
      },
      {
        "time": 16,
        "text": "Pugal ellam umakke punitha annaiye"
      },
      {
        "time": 32,
        "text": "மங்கள நாயகியே ஆரோக்கிய மாதாவே"
      }
    ]
  },
  {
    "id": 33,
    "title": "Annai Poondi Madha Arul Thaye",
    "tamilTitle": "அன்னை பூண்டி மாதா அருள்தரும் தாயே",
    "artist": "Poondi Madha Shrine Choir",
    "album": "Poondi Arul Thaye",
    "cover": "assets/cover1.svg",
    "color": "#0f766e",
    "duration": 302,
    "durationStr": "5:02",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331071/.trashed-1797919378-03_Anniya_Poondi.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அன்னை பூண்டி மாதா அருள்தரும் தாயே..."
      },
      {
        "time": 15,
        "text": "Annai Poondi Madha arul tharum thaaye"
      },
      {
        "time": 32,
        "text": "பூண்டி நகர் வாழும் அற்புத அன்னையே சரணம்"
      }
    ]
  },
  {
    "id": 34,
    "title": "Vengala Mani Osai Aalayam",
    "tamilTitle": "வெண்கல மணி ஓசை ஆலயத்திலே முழங்குதே",
    "artist": "Church Bell Melodies",
    "album": "Thiruppalli Ezhuchi",
    "cover": "assets/cover2.svg",
    "color": "#b45309",
    "duration": 308,
    "durationStr": "5:08",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331064/.trashed-1797919378-05_Vengala.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "வெண்கல மணி ஓசை ஆலயத்திலே முழங்குதே..."
      },
      {
        "time": 15,
        "text": "Vengala mani osai aalayathile muzhanguthe"
      },
      {
        "time": 32,
        "text": "அன்னையின் தரிசனம் காண உள்ளம் துடிக்குதே"
      }
    ]
  },
  {
    "id": 35,
    "title": "Annaiye Mary Matha En Thanjame",
    "tamilTitle": "அன்னையே மேரி மாதா என் தஞ்சமே",
    "artist": "Devotional Ensemble",
    "album": "Arokiya Theepam",
    "cover": "assets/cover3.svg",
    "color": "#1d4ed8",
    "duration": 358,
    "durationStr": "5:58",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331060/.trashed-1797919376-01_Anniya.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அன்னையே மேரி மாதா என் தஞ்சமே நீயே..."
      },
      {
        "time": 15,
        "text": "Annaiye Mary Matha en thanjame neeye"
      },
      {
        "time": 32,
        "text": "உந்தன் கரம் பிடித்து வாழ்வேன் அம்மா"
      }
    ]
  },
  {
    "id": 36,
    "title": "Annaiyin Magimai Akilamellam",
    "tamilTitle": "அன்னையின் மகிமை அகிலமெல்லாம் ஓங்குதே",
    "artist": "Marian Ensemble",
    "album": "Deva Matha Magimai",
    "cover": "assets/cover4.svg",
    "color": "#581c87",
    "duration": 323,
    "durationStr": "5:23",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331225/.trashed-1797919378-06_Anniya_Magimai.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அன்னையின் மகிமை அகிலமெல்லாம் ஓங்குதே..."
      },
      {
        "time": 16,
        "text": "Annaiyin magimai akilamellam oonguthe"
      },
      {
        "time": 32,
        "text": "மகிமையின் தாய் மாமரியே போற்றி"
      }
    ]
  },
  {
    "id": 37,
    "title": "Mugaiyur Matha Karunai Vellame",
    "tamilTitle": "முகையூர் மாதா கருணை வெள்ளமே",
    "artist": "Mugaiyur Shrine Choir",
    "album": "Mugaiyur Pudhumai Matha",
    "cover": "assets/cover5.svg",
    "color": "#be185d",
    "duration": 382,
    "durationStr": "6:22",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331221/.trashed-1797919378-07_Mugaiyur_Matha.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "முகையூர் மாதா கருணை வெள்ளமே..."
      },
      {
        "time": 15,
        "text": "Mugaiyur Matha karunai vellame"
      },
      {
        "time": 32,
        "text": "புதுமைகள் புரியும் தாயே உனைப் போற்றுகிறோம்"
      }
    ]
  },
  {
    "id": 38,
    "title": "Poondiyil Vaazhum Pudhumai Matha",
    "tamilTitle": "பூண்டியிலே வாழும் புதுமை மாதா",
    "artist": "Poondi Ensemble",
    "album": "Poondi Matha Geethangal",
    "cover": "assets/cover6.svg",
    "color": "#047857",
    "duration": 328,
    "durationStr": "5:28",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331217/.trashed-1797919378-10_Poondiel.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "பூண்டியிலே வாழும் புதுமை மாதா..."
      },
      {
        "time": 15,
        "text": "Poondiyil vaazhum pudhumai Matha"
      },
      {
        "time": 32,
        "text": "நம்பிக்கையோடு வந்தோர்க்கு வரம் அருளும் தாய்"
      }
    ]
  },
  {
    "id": 39,
    "title": "Nenjamellam Un Ninaive Maamariye",
    "tamilTitle": "நெஞ்சமெல்லாம் உன் நினைவே மாமரியே",
    "artist": "Marian Soloist Choir",
    "album": "Thaayin Karunai",
    "cover": "assets/cover7.svg",
    "color": "#78350f",
    "duration": 257,
    "durationStr": "4:17",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331214/.trashed-1797919378-09_Nenjamalam.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "நெஞ்சமெல்லாம் உன் நினைவே மாமரியே..."
      },
      {
        "time": 15,
        "text": "Nenjamellam un ninaive maamariye"
      },
      {
        "time": 32,
        "text": "உன் திருநாமம் ஜெபித்திட துன்பம் மாறுமே"
      }
    ]
  },
  {
    "id": 40,
    "title": "Annai Amala Utpavam Thuyavale",
    "tamilTitle": "அன்னை அமலோற்பவ தூய கன்னியே",
    "artist": "Immaculate Conception Choir",
    "album": "Amala Matha Hymns",
    "cover": "assets/cover8.svg",
    "color": "#0284c7",
    "duration": 334,
    "durationStr": "5:34",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331206/.trashed-1797919378-08_Anniya_Amala.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அன்னை அமலோற்பவ தூய கன்னியே..."
      },
      {
        "time": 16,
        "text": "Annai Amala Utpavam thuyavale"
      },
      {
        "time": 32,
        "text": "மாசில்லா மாணிக்கமே இறைவனின் தாயே"
      }
    ]
  },
  {
    "id": 41,
    "title": "Thiruvizha Kondattam Velankanniyil",
    "tamilTitle": "திருவிழா கொண்டாட்டம் வேளாங்கண்ணியில்",
    "artist": "Festive Devotional Choir",
    "album": "Velankanni Peruvizha",
    "cover": "assets/cover1.svg",
    "color": "#c2410c",
    "duration": 325,
    "durationStr": "5:25",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331373/.trashed-1797919378-11_Thiruviza.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "திருவிழா கொண்டாட்டம் வேளாங்கண்ணியில்..."
      },
      {
        "time": 15,
        "text": "Thiruvizha kondattam Velankanniyil"
      },
      {
        "time": 32,
        "text": "கொடியேறி மகிழ்ந்ததம்மா கோடிப் பக்தர் கூட்டமே"
      }
    ]
  },
  {
    "id": 42,
    "title": "Amma Amma Arokiya Matha",
    "tamilTitle": "அம்மா அம்மா ஆரோக்கிய மாதா தயைபுரிவாய்",
    "artist": "Tamil Marian Singers",
    "album": "Thaayin Nizhal",
    "cover": "assets/cover2.svg",
    "color": "#881337",
    "duration": 373,
    "durationStr": "6:13",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331371/.trashed-1797919378-13_Amma_Amma.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அம்மா அம்மா ஆரோக்கிய மாதா தயைபுரிவாய்..."
      },
      {
        "time": 15,
        "text": "Amma amma aarokiya maadha thayepurivaai"
      },
      {
        "time": 32,
        "text": "பிள்ளைகளின் குரல் கேட்டு ஆறுதல் தா அம்மா"
      }
    ]
  },
  {
    "id": 43,
    "title": "Idaivida Sahaya Madha Saranam",
    "tamilTitle": "இடைவிடா சகாய மாதா சரணம்",
    "artist": "Perpetual Help Choir",
    "album": "Idaivida Sahaya Annai",
    "cover": "assets/cover3.svg",
    "color": "#4338ca",
    "duration": 313,
    "durationStr": "5:13",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331359/.trashed-1797919378-12_Idaivida.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "இடைவிடா சகாய மாதா சரணம் சரணம்..."
      },
      {
        "time": 15,
        "text": "Idaivida Sahaya Madha saranam"
      },
      {
        "time": 32,
        "text": "எந்தன் இக்கட்டில் கரம் நீட்டி காக்கும் அன்னை"
      }
    ]
  },
  {
    "id": 44,
    "title": "Madhave Saranam Malaradi Saranam",
    "tamilTitle": "மாதாவே சரணம் மலரடி சரணம்",
    "artist": "Devotional Ensemble",
    "album": "Saranam Saranam Madha",
    "cover": "assets/cover4.svg",
    "color": "#065f46",
    "duration": 263,
    "durationStr": "4:23",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331492/.trashed-1797919375-33_Madhave_Saranam.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மாதாவே சரணம் மலரடி சரணம்..."
      },
      {
        "time": 15,
        "text": "Madhave saranam malaradi saranam"
      },
      {
        "time": 32,
        "text": "வேளாங்கண்ணி நாயகியே அடைக்கலம் தந்தருள்வாய்"
      }
    ]
  },
  {
    "id": 45,
    "title": "Bhuvanarani Vinnarasiye Arokiya Thaye",
    "tamilTitle": "புவனராணி விண்ணரசியே ஆரோக்கிய தாயே",
    "artist": "Celestial Marian Choir",
    "album": "Vinnaga Arasi",
    "cover": "assets/cover5.svg",
    "color": "#6b21a8",
    "duration": 332,
    "durationStr": "5:32",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331470/.trashed-1797919373-31_Buvanarani.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "புவனராணி விண்ணரசியே ஆரோக்கிய தாயே..."
      },
      {
        "time": 15,
        "text": "Bhuvanarani vinnarasiye aarokiya thaaye"
      },
      {
        "time": 32,
        "text": "விண்ணக மகிமையோடு மண்ணகத்தில் காட்சி தந்தாய்"
      }
    ]
  },
  {
    "id": 46,
    "title": "Kalangarai Deepame Kadal Vaazh Annaiye",
    "tamilTitle": "கலங்கரை தீபமே கடல் வாழ் அன்னையே",
    "artist": "Ocean Shrine Choir",
    "album": "Velankanni Deepam",
    "cover": "assets/cover6.svg",
    "color": "#0369a1",
    "duration": 285,
    "durationStr": "4:45",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331467/.trashed-1797919374-32_Kalangarai_Deepame.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "கலங்கரை தீபமே கடல் வாழ் அன்னையே..."
      },
      {
        "time": 15,
        "text": "Kalangarai deepame kadal vaazh annaiye"
      },
      {
        "time": 32,
        "text": "புயல் காற்றில் தத்தளிக்கும் படகுக்கு கரை நீயே"
      }
    ]
  },
  {
    "id": 47,
    "title": "Alaiolir Velangai Nagar Madha",
    "tamilTitle": "அலையொளிர் வேளாங்கண்ணி மாதா",
    "artist": "Coastal Devotional Ensemble",
    "album": "Kadaloram Aalayam",
    "cover": "assets/cover7.svg",
    "color": "#0e7490",
    "duration": 306,
    "durationStr": "5:06",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331464/.trashed-1797919373-30_Alaiolir.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அலையொளிர் வேளாங்கண்ணி மாதா..."
      },
      {
        "time": 15,
        "text": "Alaiolir Velankanni Madha"
      },
      {
        "time": 32,
        "text": "கடலலை முத்தமிடும் புண்ணிய பூமியிலே காட்சி தந்தாய்"
      }
    ]
  },
  {
    "id": 48,
    "title": "Deva Thaayin Thiruppugazh Paduvom",
    "tamilTitle": "தேவ தாயின் திருப்புகழ் பாடுவோம்",
    "artist": "Tamil Marian Group",
    "album": "Deva Thaai",
    "cover": "assets/cover8.svg",
    "color": "#be185d",
    "duration": 263,
    "durationStr": "4:23",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331458/.trashed-1797919375-34_Deva_Thayin.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "தேவ தாயின் திருப்புகழ் பாடுவோம்..."
      },
      {
        "time": 15,
        "text": "Deva Thaayin thiruppugazh paduvom"
      },
      {
        "time": 32,
        "text": "நாளெல்லாம் நாவினில் அன்னையின் ஜெபம் செய்வோம்"
      }
    ]
  },
  {
    "id": 49,
    "title": "Madhave Thunai Neere Vaazhvin Oliye",
    "tamilTitle": "மாதாவே துணை நீரே வாழ்வின் ஒளியே",
    "artist": "Christian Devotional Group",
    "album": "Thaaye Thunai",
    "cover": "assets/cover1.svg",
    "color": "#047857",
    "duration": 276,
    "durationStr": "4:36",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331656/.trashed-1797919376-37_Mafhave_Thunai.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மாதாவே துணை நீரே வாழ்வின் ஒளியே..."
      },
      {
        "time": 15,
        "text": "Madhave thunai neere vaazhvin oliye"
      },
      {
        "time": 32,
        "text": "துன்பப் பெருங்கடலில் தோணியென வந்தாயே"
      }
    ]
  },
  {
    "id": 50,
    "title": "Sadha Sagaya Thai Engal Adaikkalam",
    "tamilTitle": "சதா சகாய தாய் எங்கள் அடைக்கலம்",
    "artist": "Perpetual Help Ensemble",
    "album": "Sagaya Annai",
    "cover": "assets/cover2.svg",
    "color": "#1e3a8a",
    "duration": 286,
    "durationStr": "4:46",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331653/.trashed-1797919376-38_Sadha_Sagaya_Thai.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "சதா சகாய தாய் எங்கள் அடைக்கலம்..."
      },
      {
        "time": 15,
        "text": "Sadha Sagaya Thai engal adaikkalam"
      },
      {
        "time": 32,
        "text": "சதா எம்மைத் தேற்றிடும் கருணைத் தாயே"
      }
    ]
  },
  {
    "id": 51,
    "title": "Sourin Madha (Panimaya Annai)",
    "tamilTitle": "சவுரி மாதா பனிமய அன்னை மலரடி",
    "artist": "Our Lady of Snows Choir",
    "album": "Panimaya Matha Hits",
    "cover": "assets/cover3.svg",
    "color": "#0369a1",
    "duration": 378,
    "durationStr": "6:18",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331645/.trashed-1797919376-35_Sourin.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "சவுரி மாதா பனிமய அன்னை மலரடி..."
      },
      {
        "time": 15,
        "text": "Sourin Madha Panimaya annai"
      },
      {
        "time": 32,
        "text": "பனிமழை பொழியும் தூய வெண்மதி போற்றி"
      }
    ]
  },
  {
    "id": 52,
    "title": "Orunaalum Maraven Un Peranbai",
    "tamilTitle": "ஒருநாளும் மறவேன் உன் பேரன்பை மாமரியே",
    "artist": "Heartfelt Marian Prayer",
    "album": "Marakkadha Anbu",
    "cover": "assets/cover4.svg",
    "color": "#7c2d12",
    "duration": 275,
    "durationStr": "4:35",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331644/.trashed-1797919376-36_Orunalum.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "ஒருநாளும் மறவேன் உன் பேரன்பை மாமரியே..."
      },
      {
        "time": 15,
        "text": "Orunaalum maraven un peranbai"
      },
      {
        "time": 32,
        "text": "என்னை தாலாட்டி வளர்த்த தாயே உன் பாதமே துணை"
      }
    ]
  },
  {
    "id": 53,
    "title": "Mangalam Arokiya Mathavukku",
    "tamilTitle": "மங்களம் ஆரோக்கிய மாதாவுக்கு மங்களமே",
    "artist": "Marian Benediction Choir",
    "album": "Mangala Geetham",
    "cover": "assets/cover5.svg",
    "color": "#ca8a04",
    "duration": 218,
    "durationStr": "3:38",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331627/.trashed-1797919377-39_Mangalam.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மங்களம் ஆரோக்கிய மாதாவுக்கு மங்களமே..."
      },
      {
        "time": 15,
        "text": "Mangalam Aarokiya Maadhaavukku mangalame"
      },
      {
        "time": 32,
        "text": "ஜெய மங்களம் நித்திய மங்களமே பாடுவோம்"
      }
    ]
  },
  {
    "id": 54,
    "title": "Amma Arokiya Mathave En Thaye",
    "tamilTitle": "அம்மா ஆரோக்கிய மாதாவே என் தாயே",
    "artist": "Velankanni Pilgrim Choir",
    "album": "Arokiya Thaaye",
    "cover": "assets/cover6.svg",
    "color": "#064e3b",
    "duration": 254,
    "durationStr": "4:14",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331919/.trashed-1797919359-262amma_arokia.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அம்மா ஆரோக்கிய மாதாவே என் தாயே..."
      },
      {
        "time": 15,
        "text": "Amma Aarokiya Maadhaave en thaaye"
      },
      {
        "time": 32,
        "text": "உந்தன் அருள் நிழலில் என்றும் வாழ்ந்திட வரம் தா"
      }
    ]
  },
  {
    "id": 55,
    "title": "Velankanni Matha Vazhgave Ennalum",
    "tamilTitle": "வேளாங்கண்ணி மாதா வாழ்கவே எந்நாளும்",
    "artist": "Sacred Devotional Choirs",
    "album": "Velankanni Vaazhthu",
    "cover": "assets/cover7.svg",
    "color": "#4c1d95",
    "duration": 209,
    "durationStr": "3:29",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331878/.trashed-1797919359-265velankanni_matha.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "வேளாங்கண்ணி மாதா வாழ்கவே எந்நாளும்..."
      },
      {
        "time": 15,
        "text": "Velankanni Matha vazhgave ennaalum"
      },
      {
        "time": 32,
        "text": "அருள் தந்து எம்மை காக்கும் ஆரோக்கிய மாதா வாழ்க"
      }
    ]
  },
  {
    "id": 56,
    "title": "Andavan Tharagai Esuvin Thaaye",
    "tamilTitle": "ஆண்டவன் இயேசுவின் அன்பு தாயே",
    "artist": "Tamil Christian Devotional",
    "album": "Andavan Arul",
    "cover": "assets/cover8.svg",
    "color": "#0f766e",
    "duration": 284,
    "durationStr": "4:44",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331876/.trashed-1797919357-263andavan.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "ஆண்டவன் இயேசுவின் அன்பு தாயே..."
      },
      {
        "time": 15,
        "text": "Andavan Esuvin anbu thaaye"
      },
      {
        "time": 32,
        "text": "தாரகை போல் ஒளி வீசும் மாமரியே வாழ்க"
      }
    ]
  },
  {
    "id": 57,
    "title": "Matha Bakthi Thanamum Jebamum",
    "tamilTitle": "மாதா பக்தி ஜெபமும் தியான பாடலும்",
    "artist": "Devotional Prayer Recitation",
    "album": "Daily Marian Rosary",
    "cover": "assets/cover1.svg",
    "color": "#1d4ed8",
    "duration": 288,
    "durationStr": "4:48",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795331861/.trashed-1797919360-AUD-20211229-WA0000.m4a",
    "lyrics": [
      {
        "time": 0,
        "text": "மாதா பக்தி ஜெபமும் தியான பாடலும்..."
      },
      {
        "time": 15,
        "text": "Matha bakthi jebamum dhyana paadalum"
      },
      {
        "time": 32,
        "text": "அருள் நிறைந்த மரியே வாழ்க கர்த்தர் உம்முடனே"
      }
    ]
  },
  {
    "id": 58,
    "title": "Piranthar Piranthar Vinnin Vendhan",
    "tamilTitle": "பிறந்தார் பிறந்தார் விண்ணின் வேந்தன் இயேசு",
    "artist": "Christmas Carol Choir",
    "album": "Deva Balan Piranthar",
    "cover": "assets/cover2.svg",
    "color": "#be185d",
    "duration": 218,
    "durationStr": "3:38",
    "dateAdded": "Added today",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795332163/.trashed-1797919364-PIRANTAR_PIRANTAR.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "பிறந்தார் பிறந்தார் விண்ணின் வேந்தன் இயேசு பிறந்தார்..."
      },
      {
        "time": 15,
        "text": "Piranthar piranthar vinnin vendhan Esu piranthar"
      },
      {
        "time": 32,
        "text": "விண்மீன் ஒளி வீச பெத்லகேமில் பாலன் பிறந்தார்"
      }
    ]
  },
  {
    "id": 59,
    "title": "Umai Thedi Vanthen Sumai Theerumama",
    "tamilTitle": "உம்மைத் தேடி வந்தேன் சுமை தீருமம்மா",
    "artist": "Ave Maria Updates",
    "album": "Ulagazhum Thaaye",
    "cover": "assets/cover3.svg",
    "color": "#064e3b",
    "duration": 320,
    "durationStr": "5:20",
    "dateAdded": "Devotional Classic",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795004399/Umai_thedi_vanthen_sumai_theerumama___Lyricsvideo___Madha_songs__Avemariaupdates___Ulagazhum_thaaye_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "உம்மைத் தேடி வந்தேன் சுமை தீருமம்மா..."
      },
      {
        "time": 14,
        "text": "Umai thedi vanthen sumai theerumamma"
      },
      {
        "time": 28,
        "text": "என்னை ஏற்றிடவே ஒரு வழியுமம்மா"
      },
      {
        "time": 42,
        "text": "தாயே ஆரோக்கிய மாதாவே"
      },
      {
        "time": 56,
        "text": "தஞ்சமென்று உந்தன் பாதம் வந்தேனம்மா"
      }
    ]
  },
  {
    "id": 60,
    "title": "Mangala Nilave Maamari Annaiye",
    "tamilTitle": "மங்கள நிலவே மாமரி அன்னையே",
    "artist": "Matha Devotional Choir",
    "album": "Annaiye Aarokkiya Thaaye",
    "cover": "assets/cover4.svg",
    "color": "#4c1d95",
    "duration": 333,
    "durationStr": "5:33",
    "dateAdded": "Devotional Classic",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795004315/Mangala_Nilave_Maamari_Annaiye___%E0%AE%AE%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3_%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AE%B5%E0%AF%87_%E0%AE%AE%E0%AE%BE%E0%AE%AE%E0%AE%B0%E0%AE%BF_%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AF%88%E0%AE%AF%E0%AF%87___Matha_songs_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மங்கள நிலவே மாமரி அன்னையே..."
      },
      {
        "time": 16,
        "text": "Mangala nilave maamari annaiye"
      },
      {
        "time": 32,
        "text": "மகிமையின் வடிவே ஆரோக்கிய தாயே"
      },
      {
        "time": 48,
        "text": "உந்தன் பாதம் பணிகின்றோம்"
      }
    ]
  },
  {
    "id": 61,
    "title": "Mangala Nilave (Acoustic Prayer Edition)",
    "tamilTitle": "மங்கள நிலவே (அமைதி தியானம்)",
    "artist": "Velankanni Devotional Ensemble",
    "album": "Midnight Prayer at Velankanni",
    "cover": "assets/cover5.svg",
    "color": "#0369a1",
    "duration": 333,
    "durationStr": "5:33",
    "dateAdded": "Devotional Classic",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795004315/Mangala_Nilave_Maamari_Annaiye___%E0%AE%AE%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3_%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AE%B5%E0%AF%87_%E0%AE%AE%E0%AE%BE%E0%AE%AE%E0%AE%B0%E0%AE%BF_%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AF%88%E0%AE%AF%E0%AF%87___Matha_songs_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மங்கள நிலவே மாமரி அன்னையே (அமைதி தியானம்)"
      },
      {
        "time": 18,
        "text": "Mangala nilave maamari annaiye"
      },
      {
        "time": 38,
        "text": "அமைதி தவழும் நள்ளிரவு தியானம்"
      }
    ]
  },
  {
    "id": 62,
    "title": "Arokiya Thaye Amma Amma",
    "tamilTitle": "ஆரோக்கிய தாயே அம்மா அம்மா",
    "artist": "Christian Catholic Devotional",
    "album": "Thaayin Madiyil",
    "cover": "assets/cover6.svg",
    "color": "#78350f",
    "duration": 285,
    "durationStr": "4:45",
    "dateAdded": "Devotional Classic",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795004313/Arokiya_Thaye_Amma_Amma___Christian_Catholic_song_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "ஆரோக்கிய தாயே அம்மா அம்மா..."
      },
      {
        "time": 15,
        "text": "Arokiya thaaye amma amma"
      },
      {
        "time": 30,
        "text": "ஆதரவு நீயே அம்மா அம்மா"
      }
    ]
  },
  {
    "id": 63,
    "title": "Matha Un Kovilil",
    "tamilTitle": "மாதா உன் கோவிலில் மணிதீபம்",
    "artist": "Catholic Marian Devotional",
    "album": "Velankanni Special",
    "cover": "assets/cover7.svg",
    "color": "#581c87",
    "duration": 290,
    "durationStr": "4:50",
    "dateAdded": "Devotional Classic",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795092137/Matha_Un_Kovilil_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மாதா உன் கோவிலில் மணிதீபம் ஏற்றினேன்..."
      },
      {
        "time": 14,
        "text": "Matha un kovilil manidheepam yetrinen"
      }
    ]
  },
  {
    "id": 64,
    "title": "Kathum Alaikadal (Sacred Chant)",
    "tamilTitle": "கத்தும் அலைகடல் ஓரத்திலே",
    "artist": "Catholic Musing",
    "album": "Alaikadal Matha",
    "cover": "assets/cover8.svg",
    "color": "#0f766e",
    "duration": 240,
    "durationStr": "4:00",
    "dateAdded": "Devotional Classic",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795092131/%E0%AE%95%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81%E0%AE%AE%E0%AF%8D_%E0%AE%85%E0%AE%B2%E0%AF%88%E0%AE%95%E0%AE%9F%E0%AE%B2%E0%AF%8D___Kathum_Alaikadal___Catholic_Musing_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "அன்று சிலுவையிலே நீ சிந்திய கண்ணீர்..."
      },
      {
        "time": 15,
        "text": "Anru siluvayile nee sinthiya kanneer"
      }
    ]
  },
  {
    "id": 65,
    "title": "Manasellam Mella Mella",
    "tamilTitle": "மனசெல்லாம் மெல்ல மெல்ல",
    "artist": "Fr. G.V. Panneer Selvam",
    "album": "Song on Virgin Mary",
    "cover": "assets/cover1.svg",
    "color": "#1d4ed8",
    "duration": 273,
    "durationStr": "4:33",
    "dateAdded": "Devotional Classic",
    "url": "https://res.cloudinary.com/b4venwst/video/upload/v1795092308/Manasellam_mella_mella___%E0%AE%AE%E0%AE%A9%E0%AE%9A%E0%AF%86%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AE%BE%E0%AE%AE%E0%AF%8D_%E0%AE%AE%E0%AF%86%E0%AE%B2%E0%AF%8D%E0%AE%B2_%E0%AE%AE%E0%AF%86%E0%AE%B2%E0%AF%8D%E0%AE%B2___Song_on_Virgin_Mary__%E0%AE%AE%E0%AE%BE%E0%AE%A4%E0%AE%BE_%E0%AE%AA%E0%AE%BE%E0%AE%9F%E0%AE%B2%E0%AF%8D_128k.mp3",
    "lyrics": [
      {
        "time": 0,
        "text": "மனசெல்லாம் மெல்ல மெல்ல மரியே உன் பேரைச் சொல்ல..."
      },
      {
        "time": 15,
        "text": "Manasellam mella mella Marye un peraich solla"
      }
    ]
  }
]
};

// 2. PLAYER STATE
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: Off, 1: Repeat Playlist, 2: Repeat One
let currentVolume = 0.85;
let isMuted = false;
let rightPanelMode = 'closed'; // 'now-playing' | 'lyrics' | 'queue' | 'closed'
let isFullscreen = false;
let activeView = 'home'; // 'home' | 'search' | 'liked'

// Liked Songs Storage (migrates from legacy storage if present)
let likedSongIds = new Set();
try {
  const savedLikes = localStorage.getItem('arokiyam_liked_tracks') || localStorage.getItem('spotify_liked_tracks');
  if (savedLikes) {
    likedSongIds = new Set(JSON.parse(savedLikes));
  }
} catch (e) {
  console.warn("LocalStorage unavailable:", e);
}

// 3. DOM ELEMENTS
const audio = document.getElementById('main-audio');
const tracklistTbody = document.getElementById('tracklist-tbody');
const fastAccessGrid = document.getElementById('fast-access-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const artistsGrid = document.getElementById('artists-grid');

// Hero elements
const heroBanner = document.getElementById('hero-banner');
const heroCoverArt = document.getElementById('hero-cover-art');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroTracksInfo = document.getElementById('hero-tracks-info');
const bigPlayBtn = document.getElementById('big-play-btn');
const bigPlayIcon = document.getElementById('big-play-icon');
const playlistHeartBtn = document.getElementById('playlist-heart-btn');
const playlistDownloadBtn = document.getElementById('playlist-download-btn');
const filterTracksInput = document.getElementById('filter-tracks-input');

// Bottom Player Bar
const playerThumb = document.getElementById('player-thumb');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerHeartBtn = document.getElementById('player-heart-btn');
const ctrlPlayPause = document.getElementById('ctrl-play-pause');
const ctrlPlayIcon = document.getElementById('ctrl-play-icon');
const ctrlPrevBtn = document.getElementById('ctrl-prev-btn');
const ctrlNextBtn = document.getElementById('ctrl-next-btn');
const ctrlShuffleBtn = document.getElementById('ctrl-shuffle-btn');
const ctrlRepeatBtn = document.getElementById('ctrl-repeat-btn');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const progressWrapper = document.getElementById('progress-wrapper');
const progressFill = document.getElementById('progress-fill');
const mobileProgressFill = document.getElementById('mobile-progress-fill');
const volumeWrapper = document.getElementById('volume-wrapper');
const volumeFill = document.getElementById('volume-fill');
const volumeIconBtn = document.getElementById('volume-icon-btn');
const volumeIcon = document.getElementById('volume-icon');

// Mobile specific buttons
const mobPlayPauseBtn = document.getElementById('mob-play-pause-btn');
const mobPlayIcon = document.getElementById('mob-play-icon');
const mobNextBtn = document.getElementById('mob-next-btn');
const mobHeartBtn = document.getElementById('mob-heart-btn');
const mobNavHome = document.getElementById('mob-nav-home');
const mobNavSearch = document.getElementById('mob-nav-search');
const mobNavLiked = document.getElementById('mob-nav-liked');
const mobNavLyrics = document.getElementById('mob-nav-lyrics');
const mobileSearchBtn = document.getElementById('mobile-search-btn');

// Right Sidebar & Panels
const rightSidebar = document.getElementById('right-sidebar');
const panelTitle = document.getElementById('panel-title');
const panelCloseBtn = document.getElementById('panel-close-btn');
const nowPlayingPanel = document.getElementById('now-playing-panel');
const lyricsPanelView = document.getElementById('lyrics-panel-view');
const queuePanelView = document.getElementById('queue-panel-view');
const panelLyricsContainer = document.getElementById('panel-lyrics-container');
const panelCoverImg = document.getElementById('panel-cover-img');
const panelTitleText = document.getElementById('panel-title-text');
const panelArtistText = document.getElementById('panel-artist-text');
const panelHeartBtn = document.getElementById('panel-heart-btn');
const panelNextArt = document.getElementById('panel-next-art');
const panelNextTitle = document.getElementById('panel-next-title');
const panelNextArtist = document.getElementById('panel-next-artist');
const queueNowPlayingItem = document.getElementById('queue-now-playing-item');
const queueUpcomingList = document.getElementById('queue-upcoming-list');

// Fullscreen Elements
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fsCloseBtn = document.getElementById('fs-close-btn');
const fsCoverArt = document.getElementById('fs-cover-art');
const fsTitle = document.getElementById('fs-title');
const fsTamil = document.getElementById('fs-tamil');
const fsArtist = document.getElementById('fs-artist');
const fsLyricsContainer = document.getElementById('fs-lyrics-container');
const fsCurrentTime = document.getElementById('fs-current-time');
const fsTotalDuration = document.getElementById('fs-total-duration');
const fsProgressWrapper = document.getElementById('fs-progress-wrapper');
const fsProgressFill = document.getElementById('fs-progress-fill');

// View switches & Modals
const navHome = document.getElementById('nav-home');
const navSearch = document.getElementById('nav-search');
const homeViewContent = document.getElementById('home-view-content');
const searchViewContent = document.getElementById('search-view-content');
const topbarSearch = document.getElementById('topbar-search');
const globalSearchInput = document.getElementById('global-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const searchResultsSection = document.getElementById('search-results-section');
const searchResultsTbody = document.getElementById('search-results-tbody');
const itemLikedSongs = document.getElementById('item-liked-songs');
const itemVelankanni = document.getElementById('item-velankanni');
const likedCountBadge = document.getElementById('liked-count-badge');
const connectModal = document.getElementById('connect-modal');
const shortcutsModal = document.getElementById('shortcuts-modal');
const toastEl = document.getElementById('toast');

// 4. PLAY / PAUSE SVG ICONS
const SVG_PLAY = '<path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/>';
const SVG_PAUSE = '<path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm8 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"/>';

// 5. INITIALIZATION
function initApp() {
  updateGreeting();
  updatePlaylistMeta();
  renderTracklist();
  renderFastAccessGrid();
  renderRecommendedCards();
  renderArtistCards();
  loadTrack(currentTrackIndex, false);
  setupEventListeners();
  updateLikedBadge();
  setupMediaSession();
  setupAudioFallback();
}

// Set greeting based on time of day
function updateGreeting() {
  const greetingEl = document.getElementById('greeting-title');
  if (!greetingEl) return;
  const hour = new Date().getHours();
  if (hour < 12) greetingEl.textContent = 'Good morning';
  else if (hour < 17) greetingEl.textContent = 'Good afternoon';
  else greetingEl.textContent = 'Good evening';
}

// Set playlist hero stats
function updatePlaylistMeta() {
  if (!heroTracksInfo) return;
  const totalDurationSec = playlistData.tracks.reduce((acc, t) => acc + (t.duration || 0), 0);
  const totalMin = Math.floor(totalDurationSec / 60);
  const totalSec = totalDurationSec % 60;
  heroTracksInfo.textContent = `${playlistData.tracks.length} songs, ${totalMin} min ${totalSec} sec`;
}

// 6. RENDER TRACKLIST TABLE
function renderTracklist(filterText = '') {
  if (!tracklistTbody) return;
  tracklistTbody.innerHTML = '';
  const tracks = playlistData.tracks;
  const filtered = tracks.filter(t => 
    t.title.toLowerCase().includes(filterText.toLowerCase()) ||
    t.tamilTitle.toLowerCase().includes(filterText.toLowerCase()) ||
    t.artist.toLowerCase().includes(filterText.toLowerCase()) ||
    t.album.toLowerCase().includes(filterText.toLowerCase())
  );

  filtered.forEach((track, index) => {
    const originalIndex = tracks.findIndex(t => t.id === track.id);
    const isCurrentPlaying = (originalIndex === currentTrackIndex && isPlaying);
    const isCurrentSelected = (originalIndex === currentTrackIndex);
    const isLiked = likedSongIds.has(track.id);

    const tr = document.createElement('tr');
    tr.className = `track-row ${isCurrentSelected ? 'playing' : ''}`;
    tr.dataset.index = originalIndex;

    tr.innerHTML = `
      <td class="td-num">
        <span class="track-num-text">${index + 1}</span>
        <div class="equalizer-bars">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
        <button class="row-play-btn" title="Play ${track.title}">
          <svg viewBox="0 0 24 24">${isCurrentPlaying ? SVG_PAUSE : SVG_PLAY}</svg>
        </button>
      </td>
      <td class="td-title">
        <img src="${track.cover}" class="track-thumb" alt="${track.title}" loading="lazy" />
        <div class="track-meta">
          <span class="track-name" style="${isCurrentSelected ? 'color: var(--sp-green);' : ''}">${track.title}</span>
          <span class="track-artist">${track.artist}</span>
        </div>
      </td>
      <td class="td-album">${track.album}</td>
      <td class="td-date">${track.dateAdded}</td>
      <td class="td-duration">
        <div class="duration-wrap">
          <button class="row-heart-btn ${isLiked ? 'liked' : ''}" data-id="${track.id}" title="${isLiked ? 'Remove from Liked Songs' : 'Save to Liked Songs'}">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <span>${track.durationStr}</span>
        </div>
      </td>
    `;

    // Row click to play
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.row-heart-btn')) {
        toggleLikeSong(track.id);
        return;
      }
      if (originalIndex === currentTrackIndex) {
        togglePlayPause();
      } else {
        playTrack(originalIndex);
      }
    });

    tracklistTbody.appendChild(tr);
  });
}

// 7. FAST ACCESS 6-GRID
function renderFastAccessGrid() {
  if (!fastAccessGrid) return;
  fastAccessGrid.innerHTML = '';
  const items = [
    { title: 'Liked Songs', cover: 'assets/liked_songs.svg', action: () => openLikedSongsView() },
    { title: playlistData.tracks[0].title, cover: playlistData.tracks[0].cover, trackIndex: 0 },
    { title: playlistData.tracks[2].title, cover: playlistData.tracks[2].cover, trackIndex: 2 },
    { title: playlistData.tracks[19].title, cover: playlistData.tracks[19].cover, trackIndex: 19 },
    { title: playlistData.tracks[22].title, cover: playlistData.tracks[22].cover, trackIndex: 22 },
    { title: 'Velankanni Matha Special', cover: 'assets/playlist_cover.svg', action: () => playTrack(0) }
  ];

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'fast-card';
    card.innerHTML = `
      <img src="${item.cover}" alt="${item.title}" class="fast-card-img" loading="lazy" />
      <span class="fast-card-title">${item.title}</span>
      <button class="fast-play-btn" title="Play">
        <svg viewBox="0 0 24 24">${SVG_PLAY}</svg>
      </button>
    `;
    card.addEventListener('click', () => {
      if (item.action) {
        item.action();
      } else if (item.trackIndex !== undefined) {
        playTrack(item.trackIndex);
      }
    });
    fastAccessGrid.appendChild(card);
  });
}

// 8. RECOMMENDED MARIAN CARDS
function renderRecommendedCards() {
  if (!recommendedGrid) return;
  recommendedGrid.innerHTML = '';
  // Popular featured tracks
  const featuredIndices = [2, 19, 21, 22, 25, 27, 30, 32, 41, 43, 53, 58];
  featuredIndices.forEach(idx => {
    const track = playlistData.tracks[idx];
    if (!track) return;
    const card = document.createElement('div');
    card.className = 'media-card';
    card.innerHTML = `
      <div class="card-art-wrap">
        <img src="${track.cover}" class="card-art" alt="${track.title}" loading="lazy" />
        <button class="card-play-btn" title="Play ${track.title}">
          <svg viewBox="0 0 24 24">${SVG_PLAY}</svg>
        </button>
      </div>
      <div class="card-title">${track.title}</div>
      <div class="card-desc">${track.tamilTitle} • ${track.artist}</div>
    `;
    card.addEventListener('click', () => {
      playTrack(idx);
    });
    recommendedGrid.appendChild(card);
  });
}

// 9. FEATURED ARTISTS & CHOIRS CARDS
function renderArtistCards() {
  if (!artistsGrid) return;
  artistsGrid.innerHTML = '';
  const artists = [
    { name: "P. Susheela", role: "Legendary Devotional Singer", cover: "assets/cover2.svg", trackIndex: 22 },
    { name: "S. Janaki", role: "Divine Marian Hits", cover: "assets/cover4.svg", trackIndex: 21 },
    { name: "S.P. Balasubrahmanyam", role: "Sacred Tamil Geethangal", cover: "assets/cover6.svg", trackIndex: 27 },
    { name: "Malaysia Vasudevan & Vani Jayaram", role: "Classic Devotional Duets", cover: "assets/cover1.svg", trackIndex: 19 },
    { name: "Velankanni Matha Melodies", role: "Shrine Ensembles & Chants", cover: "assets/playlist_cover.svg", trackIndex: 2 },
    { name: "Poondi Madha Choirs", role: "Pilgrimage Sacred Hymns", cover: "assets/cover3.svg", trackIndex: 32 },
    { name: "Fr. G.V. Panneer Selvam", role: "Marian Praise Hymns", cover: "assets/cover8.svg", trackIndex: 64 },
    { name: "Ave Maria Updates", role: "Devotional Classics", cover: "assets/cover5.svg", trackIndex: 58 }
  ];

  artists.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'media-card artist-card';
    card.innerHTML = `
      <div class="card-art-wrap">
        <img src="${artist.cover}" class="card-art" alt="${artist.name}" loading="lazy" />
        <button class="card-play-btn" title="Play">
          <svg viewBox="0 0 24 24">${SVG_PLAY}</svg>
        </button>
      </div>
      <div class="card-title">${artist.name}</div>
      <div class="card-desc">${artist.role}</div>
    `;
    card.addEventListener('click', () => {
      showToast(`Playing: ${artist.name}`);
      playTrack(artist.trackIndex !== undefined ? artist.trackIndex : 0);
    });
    artistsGrid.appendChild(card);
  });
}

// 10. AUDIO LOADING & PLAYBACK CONTROL
function loadTrack(index, autoPlay = true) {
  if (index < 0 || index >= playlistData.tracks.length) return;
  currentTrackIndex = index;
  const track = playlistData.tracks[currentTrackIndex];

  // Set audio source to Cloudinary stream link
  audio.src = track.url;
  audio.load();

  // Dynamic Theme Colors
  document.documentElement.style.setProperty('--hero-color', track.color);
  if (heroBanner) {
    heroBanner.style.background = `linear-gradient(180deg, ${track.color} 0%, rgba(18, 18, 18, 0.95) 100%)`;
  }

  // Update Player UI
  if (playerThumb) playerThumb.src = track.cover;
  if (playerTitle) playerTitle.textContent = track.title;
  if (playerArtist) playerArtist.textContent = track.artist;
  if (totalDurationEl) totalDurationEl.textContent = track.durationStr;
  if (currentTimeEl) currentTimeEl.textContent = "0:00";
  if (progressFill) progressFill.style.width = "0%";
  if (mobileProgressFill) mobileProgressFill.style.width = "0%";

  // Update Like State on Player Bar
  const isLiked = likedSongIds.has(track.id);
  if (playerHeartBtn) playerHeartBtn.classList.toggle('liked', isLiked);
  if (mobHeartBtn) mobHeartBtn.classList.toggle('liked', isLiked);
  if (panelHeartBtn) panelHeartBtn.classList.toggle('liked', isLiked);

  // Update Right Panel UI
  if (panelCoverImg) panelCoverImg.src = track.cover;
  if (panelTitleText) panelTitleText.textContent = track.title;
  if (panelArtistText) panelArtistText.textContent = track.artist;

  // Next in queue preview
  const nextTrack = playlistData.tracks[(currentTrackIndex + 1) % playlistData.tracks.length];
  if (panelNextArt) panelNextArt.src = nextTrack.cover;
  if (panelNextTitle) panelNextTitle.textContent = nextTrack.title;
  if (panelNextArtist) panelNextArtist.textContent = nextTrack.artist;

  // Fullscreen UI
  if (fsCoverArt) fsCoverArt.src = track.cover;
  if (fsTitle) fsTitle.textContent = track.title;
  if (fsTamil) fsTamil.textContent = track.tamilTitle;
  if (fsArtist) fsArtist.textContent = `${track.artist} • ${track.album}`;
  if (fsTotalDuration) fsTotalDuration.textContent = track.durationStr;

  // Render Synced Lyrics
  renderLyrics(track.lyrics);

  // Update Queue Panel
  renderQueuePanel();

  // Update Table active row
  renderTracklist(filterTracksInput ? filterTracksInput.value : '');

  // Update Media Session
  updateMediaSession(track);

  // Auto-play if requested
  if (autoPlay) {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayPauseUI();
    }).catch(err => {
      console.warn("Autoplay policy or audio fetch issue:", err);
      isPlaying = false;
      updatePlayPauseUI();
    });
  } else {
    isPlaying = false;
    updatePlayPauseUI();
  }
}

function playTrack(index) {
  loadTrack(index, true);
}

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayPauseUI();
    }).catch(err => {
      console.warn("Audio play prevented:", err);
    });
  } else {
    audio.pause();
    isPlaying = false;
    updatePlayPauseUI();
  }
}

function updatePlayPauseUI() {
  const icon = isPlaying ? SVG_PAUSE : SVG_PLAY;
  if (ctrlPlayIcon) ctrlPlayIcon.innerHTML = icon;
  if (bigPlayIcon) bigPlayIcon.innerHTML = icon;
  if (mobPlayIcon) mobPlayIcon.innerHTML = icon;
  if (ctrlPlayPause) ctrlPlayPause.title = isPlaying ? "Pause" : "Play";
  if (bigPlayBtn) bigPlayBtn.title = isPlaying ? "Pause" : "Play";
  if (mobPlayPauseBtn) mobPlayPauseBtn.title = isPlaying ? "Pause" : "Play";

  const track = playlistData.tracks[currentTrackIndex];
  document.title = isPlaying 
    ? `${track.title} • ${track.artist} | AROKIYAM`
    : "AROKIYAM - Sacred Tamil Devotional Music";

  // Re-render table row icons
  renderTracklist(filterTracksInput ? filterTracksInput.value : '');
}

function playNextTrack() {
  if (isShuffle) {
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * playlistData.tracks.length);
    } while (nextIdx === currentTrackIndex && playlistData.tracks.length > 1);
    playTrack(nextIdx);
  } else {
    const nextIdx = (currentTrackIndex + 1) % playlistData.tracks.length;
    playTrack(nextIdx);
  }
}

function playPrevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  const prevIdx = (currentTrackIndex - 1 + playlistData.tracks.length) % playlistData.tracks.length;
  playTrack(prevIdx);
}

// 11. SYNCHRONIZED LYRICS ENGINE
function renderLyrics(lyrics) {
  if (!panelLyricsContainer || !fsLyricsContainer) return;
  panelLyricsContainer.innerHTML = '';
  fsLyricsContainer.innerHTML = '';

  if (!lyrics || lyrics.length === 0) {
    const emptyMsg = '<div style="color:var(--sp-text-secondary); text-align:center; padding: 40px 0;">No lyrics available for this song.</div>';
    panelLyricsContainer.innerHTML = emptyMsg;
    fsLyricsContainer.innerHTML = emptyMsg;
    return;
  }

  lyrics.forEach((line, index) => {
    // Panel lyrics line
    const pLine = document.createElement('div');
    pLine.className = 'lyric-line';
    pLine.dataset.time = line.time;
    pLine.dataset.index = index;
    pLine.textContent = line.text;
    pLine.addEventListener('click', () => {
      audio.currentTime = line.time;
    });
    panelLyricsContainer.appendChild(pLine);

    // Fullscreen lyrics line
    const fsLine = document.createElement('div');
    fsLine.className = 'fs-lyric-line';
    fsLine.dataset.time = line.time;
    fsLine.dataset.index = index;
    fsLine.textContent = line.text;
    fsLine.addEventListener('click', () => {
      audio.currentTime = line.time;
    });
    fsLyricsContainer.appendChild(fsLine);
  });
}

function syncLyrics(currentTime) {
  if (!panelLyricsContainer || !fsLyricsContainer) return;
  const lines = panelLyricsContainer.querySelectorAll('.lyric-line');
  const fsLines = fsLyricsContainer.querySelectorAll('.fs-lyric-line');
  if (lines.length === 0) return;

  let activeIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const time = parseFloat(lines[i].dataset.time);
    if (currentTime >= time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  if (activeIndex !== -1) {
    lines.forEach((line, idx) => {
      if (idx === activeIndex) {
        line.classList.add('active');
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        line.classList.remove('active');
      }
    });

    fsLines.forEach((line, idx) => {
      if (idx === activeIndex) {
        line.classList.add('active');
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        line.classList.remove('active');
      }
    });
  }
}

// 12. QUEUE PANEL RENDERING
function renderQueuePanel() {
  if (!queueNowPlayingItem || !queueUpcomingList) return;
  queueNowPlayingItem.innerHTML = '';
  queueUpcomingList.innerHTML = '';

  const currentTrack = playlistData.tracks[currentTrackIndex];
  const curLi = document.createElement('li');
  curLi.className = 'playlist-item playing';
  curLi.innerHTML = `
    <img src="${currentTrack.cover}" class="playlist-thumb" alt="" loading="lazy" />
    <div class="playlist-info">
      <span class="playlist-item-title" style="color:var(--sp-green);">${currentTrack.title}</span>
      <span class="playlist-meta">${currentTrack.artist}</span>
    </div>
  `;
  queueNowPlayingItem.appendChild(curLi);

  // Next tracks preview up to 25 items
  const maxQueue = Math.min(25, playlistData.tracks.length);
  for (let i = 1; i < maxQueue; i++) {
    const idx = (currentTrackIndex + i) % playlistData.tracks.length;
    const track = playlistData.tracks[idx];
    const li = document.createElement('li');
    li.className = 'playlist-item';
    li.innerHTML = `
      <img src="${track.cover}" class="playlist-thumb" alt="" loading="lazy" />
      <div class="playlist-info">
        <span class="playlist-item-title">${track.title}</span>
        <span class="playlist-meta">${track.artist}</span>
      </div>
    `;
    li.addEventListener('click', () => {
      playTrack(idx);
    });
    queueUpcomingList.appendChild(li);
  }
}

// 13. TIME & SEEK BAR CONTROLS
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function handleTimeUpdate() {
  if (!audio.duration) return;
  const current = audio.currentTime;
  const duration = audio.duration;
  const percent = (current / duration) * 100;

  if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
  if (progressFill) progressFill.style.width = `${percent}%`;
  if (mobileProgressFill) mobileProgressFill.style.width = `${percent}%`;

  if (fsCurrentTime && fsProgressFill) {
    fsCurrentTime.textContent = formatTime(current);
    fsProgressFill.style.width = `${percent}%`;
  }

  syncLyrics(current);
}

function seekToPosition(e, wrapperElement) {
  const rect = wrapperElement.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, clickX / rect.width));
  if (audio.duration) {
    audio.currentTime = percent * audio.duration;
  }
}

// 14. VOLUME CONTROLS
function updateVolume(percent) {
  currentVolume = Math.max(0, Math.min(1, percent));
  audio.volume = currentVolume;
  if (volumeFill) volumeFill.style.width = `${currentVolume * 100}%`;
  updateVolumeIcon();
}

function updateVolumeIcon() {
  if (!volumeIcon) return;
  if (audio.muted || currentVolume === 0) {
    volumeIcon.innerHTML = '<path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06zM9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.066 6.35H1.5v3.3h1.566l5.559 3.39V2.96z"/>';
  } else if (currentVolume < 0.4) {
    volumeIcon.innerHTML = '<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.066 6.35H1.5v3.3h1.566l5.559 3.39V2.96zM11.5 5.56a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.88.75.75 0 0 1-1.06-1.06 2 2 0 0 0 0-2.76.75.75 0 0 1 0-1.06z"/>';
  } else {
    volumeIcon.innerHTML = '<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.066 6.35H1.5v3.3h1.566l5.559 3.39V2.96zm4.875 1.55a.75.75 0 0 1 1.06 0 8 8 0 0 1 0 11.314.75.75 0 0 1-1.06-1.06 6.5 6.5 0 0 0 0-9.194.75.75 0 0 1 0-1.06zm-2.121 2.121a.75.75 0 0 1 1.06 0 5 5 0 0 1 0 7.072.75.75 0 1 1-1.06-1.061 3.5 3.5 0 0 0 0-4.95.75.75 0 0 1 0-1.06z"/>';
  }
}

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    audio.volume = currentVolume;
  } else {
    audio.muted = true;
  }
  updateVolumeIcon();
}

// 15. LIKES & PERSISTENCE
function toggleLikeSong(songId) {
  const track = playlistData.tracks.find(t => t.id === songId);
  if (!track) return;

  if (likedSongIds.has(songId)) {
    likedSongIds.delete(songId);
    showToast("Removed from Liked Songs");
  } else {
    likedSongIds.add(songId);
    showToast("Added to your Liked Songs", true);
  }

  try {
    localStorage.setItem('arokiyam_liked_tracks', JSON.stringify(Array.from(likedSongIds)));
  } catch (e) {
    console.warn("Storage write error", e);
  }

  // Update Buttons
  const isCurLiked = likedSongIds.has(playlistData.tracks[currentTrackIndex].id);
  if (playerHeartBtn) playerHeartBtn.classList.toggle('liked', isCurLiked);
  if (mobHeartBtn) mobHeartBtn.classList.toggle('liked', isCurLiked);
  if (panelHeartBtn) panelHeartBtn.classList.toggle('liked', isCurLiked);

  updateLikedBadge();
  renderTracklist(filterTracksInput ? filterTracksInput.value : '');
}

function updateLikedBadge() {
  if (likedCountBadge) {
    likedCountBadge.textContent = `${likedSongIds.size} songs`;
  }
}

// 16. TOAST NOTIFICATIONS
let toastTimer = null;
function showToast(msg, isGreen = false) {
  if (!toastEl) return;
  if (toastTimer) clearTimeout(toastTimer);
  toastEl.textContent = msg;
  toastEl.className = `toast-container show ${isGreen ? 'green' : ''}`;
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

// 17. RIGHT PANEL NAVIGATION (Now Playing / Lyrics / Queue)
function openRightPanel(mode) {
  if (rightPanelMode === mode) {
    closeRightPanel();
    return;
  }
  rightPanelMode = mode;
  if (rightSidebar) rightSidebar.classList.add('open');

  if (nowPlayingPanel) nowPlayingPanel.style.display = 'none';
  if (lyricsPanelView) lyricsPanelView.style.display = 'none';
  if (queuePanelView) queuePanelView.style.display = 'none';

  const btnPanel = document.getElementById('btn-toggle-panel');
  const btnLyrics = document.getElementById('btn-toggle-lyrics');
  const btnQueue = document.getElementById('btn-toggle-queue');
  if (btnPanel) btnPanel.classList.remove('active');
  if (btnLyrics) btnLyrics.classList.remove('active');
  if (btnQueue) btnQueue.classList.remove('active');

  if (mode === 'now-playing') {
    if (panelTitle) panelTitle.textContent = "Now Playing";
    if (nowPlayingPanel) nowPlayingPanel.style.display = 'flex';
    if (btnPanel) btnPanel.classList.add('active');
  } else if (mode === 'lyrics') {
    if (panelTitle) panelTitle.textContent = "Lyrics";
    if (lyricsPanelView) lyricsPanelView.style.display = 'flex';
    if (btnLyrics) btnLyrics.classList.add('active');
    syncLyrics(audio.currentTime);
  } else if (mode === 'queue') {
    if (panelTitle) panelTitle.textContent = "Play Queue";
    if (queuePanelView) queuePanelView.style.display = 'flex';
    if (btnQueue) btnQueue.classList.add('active');
    renderQueuePanel();
  }
}

function closeRightPanel() {
  rightPanelMode = 'closed';
  if (rightSidebar) rightSidebar.classList.remove('open');
  const btnPanel = document.getElementById('btn-toggle-panel');
  const btnLyrics = document.getElementById('btn-toggle-lyrics');
  const btnQueue = document.getElementById('btn-toggle-queue');
  if (btnPanel) btnPanel.classList.remove('active');
  if (btnLyrics) btnLyrics.classList.remove('active');
  if (btnQueue) btnQueue.classList.remove('active');
}

// 18. IMMERSIVE FULLSCREEN MODE
function toggleFullscreen() {
  isFullscreen = !isFullscreen;
  if (isFullscreen) {
    fullscreenOverlay.classList.add('active');
    syncLyrics(audio.currentTime);
  } else {
    fullscreenOverlay.classList.remove('active');
  }
}

// 19. VIEW SWITCHING (HOME vs SEARCH vs LIKED SONGS)
function openHomeView() {
  activeView = 'home';
  if (navHome) navHome.classList.add('active');
  if (navSearch) navSearch.classList.remove('active');
  if (mobNavHome) mobNavHome.classList.add('active');
  if (mobNavSearch) mobNavSearch.classList.remove('active');
  if (mobNavLiked) mobNavLiked.classList.remove('active');
  if (mobNavLyrics) mobNavLyrics.classList.remove('active');

  if (homeViewContent) homeViewContent.style.display = 'block';
  if (searchViewContent) searchViewContent.classList.remove('active');
  if (topbarSearch) topbarSearch.classList.remove('visible');
  if (itemVelankanni) itemVelankanni.classList.add('active');
  if (itemLikedSongs) itemLikedSongs.classList.remove('active');

  // Reset Hero to Velankanni Special
  if (heroCoverArt) heroCoverArt.src = playlistData.cover;
  if (heroTitle) heroTitle.textContent = playlistData.title;
  if (heroDesc) heroDesc.textContent = playlistData.description;
  updatePlaylistMeta();
  renderTracklist();
}

function openSearchView() {
  activeView = 'search';
  if (navSearch) navSearch.classList.add('active');
  if (navHome) navHome.classList.remove('active');
  if (mobNavSearch) mobNavSearch.classList.add('active');
  if (mobNavHome) mobNavHome.classList.remove('active');
  if (mobNavLiked) mobNavLiked.classList.remove('active');
  if (mobNavLyrics) mobNavLyrics.classList.remove('active');

  if (homeViewContent) homeViewContent.style.display = 'none';
  if (searchViewContent) searchViewContent.classList.add('active');
  if (topbarSearch) topbarSearch.classList.add('visible');
  if (globalSearchInput) globalSearchInput.focus();
}

function openLikedSongsView() {
  activeView = 'liked';
  if (navHome) navHome.classList.remove('active');
  if (navSearch) navSearch.classList.remove('active');
  if (mobNavLiked) mobNavLiked.classList.add('active');
  if (mobNavHome) mobNavHome.classList.remove('active');
  if (mobNavSearch) mobNavSearch.classList.remove('active');
  if (mobNavLyrics) mobNavLyrics.classList.remove('active');

  if (itemLikedSongs) itemLikedSongs.classList.add('active');
  if (itemVelankanni) itemVelankanni.classList.remove('active');

  if (homeViewContent) homeViewContent.style.display = 'block';
  if (searchViewContent) searchViewContent.classList.remove('active');
  if (topbarSearch) topbarSearch.classList.remove('visible');

  // Set Hero to Liked Songs
  if (heroCoverArt) heroCoverArt.src = 'assets/liked_songs.svg';
  if (heroTitle) heroTitle.textContent = "Liked Songs";
  if (heroDesc) heroDesc.textContent = "Your sacred collection of devotional songs and hymns in AROKIYAM.";
  if (heroTracksInfo) heroTracksInfo.textContent = `${likedSongIds.size} songs`;
  document.documentElement.style.setProperty('--hero-color', '#450af5');
  if (heroBanner) heroBanner.style.background = 'linear-gradient(180deg, #450af5 0%, #1e1b4b 60%, #121212 100%)';

  // Render only liked songs in table
  tracklistTbody.innerHTML = '';
  const likedTracks = playlistData.tracks.filter(t => likedSongIds.has(t.id));

  if (likedTracks.length === 0) {
    tracklistTbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 48px; color: var(--sp-text-secondary);">
          Songs you like will appear here.<br>
          <span style="font-size:12px; margin-top:8px; display:inline-block;">Click the heart icon on any track to add it!</span>
        </td>
      </tr>
    `;
    return;
  }

  likedTracks.forEach((track, index) => {
    const originalIndex = playlistData.tracks.findIndex(t => t.id === track.id);
    const isCurrentPlaying = (originalIndex === currentTrackIndex && isPlaying);

    const tr = document.createElement('tr');
    tr.className = 'track-row';
    tr.innerHTML = `
      <td class="td-num">
        <span class="track-num-text">${index + 1}</span>
        <button class="row-play-btn"><svg viewBox="0 0 24 24">${isCurrentPlaying ? SVG_PAUSE : SVG_PLAY}</svg></button>
      </td>
      <td class="td-title">
        <img src="${track.cover}" class="track-thumb" alt="" loading="lazy" />
        <div class="track-meta">
          <span class="track-name">${track.title}</span>
          <span class="track-artist">${track.artist}</span>
        </div>
      </td>
      <td class="td-album">${track.album}</td>
      <td class="td-date">${track.dateAdded}</td>
      <td class="td-duration">
        <div class="duration-wrap">
          <button class="row-heart-btn liked" data-id="${track.id}">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <span>${track.durationStr}</span>
        </div>
      </td>
    `;
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.row-heart-btn')) {
        toggleLikeSong(track.id);
        openLikedSongsView();
        return;
      }
      playTrack(originalIndex);
    });
    tracklistTbody.appendChild(tr);
  });
}

// 20. SEARCH FILTERING
function handleGlobalSearch(query) {
  if (!query.trim()) {
    if (clearSearchBtn) clearSearchBtn.classList.remove('active');
    if (searchResultsSection) searchResultsSection.style.display = 'none';
    const genreGrid = document.getElementById('genre-grid');
    if (genreGrid) genreGrid.style.display = 'grid';
    return;
  }

  if (clearSearchBtn) clearSearchBtn.classList.add('active');
  const genreGrid = document.getElementById('genre-grid');
  if (genreGrid) genreGrid.style.display = 'none';
  if (searchResultsSection) searchResultsSection.style.display = 'block';
  if (searchResultsTbody) searchResultsTbody.innerHTML = '';

  const q = query.toLowerCase();
  const matched = playlistData.tracks.filter(t => 
    t.title.toLowerCase().includes(q) ||
    t.tamilTitle.toLowerCase().includes(q) ||
    t.artist.toLowerCase().includes(q) ||
    t.album.toLowerCase().includes(q)
  );

  if (matched.length === 0) {
    searchResultsTbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 40px; color: var(--sp-text-secondary);">
          No devotional songs found matching "${query}"
        </td>
      </tr>
    `;
    return;
  }

  matched.forEach((track, index) => {
    const originalIndex = playlistData.tracks.findIndex(t => t.id === track.id);
    const isCurrentPlaying = (originalIndex === currentTrackIndex && isPlaying);

    const tr = document.createElement('tr');
    tr.className = 'track-row';
    tr.innerHTML = `
      <td class="td-num">
        <span class="track-num-text">${index + 1}</span>
        <button class="row-play-btn"><svg viewBox="0 0 24 24">${isCurrentPlaying ? SVG_PAUSE : SVG_PLAY}</svg></button>
      </td>
      <td class="td-title">
        <img src="${track.cover}" class="track-thumb" alt="" loading="lazy" />
        <div class="track-meta">
          <span class="track-name">${track.title}</span>
          <span class="track-artist">${track.artist}</span>
        </div>
      </td>
      <td class="td-album">${track.album}</td>
      <td class="td-date">${track.dateAdded}</td>
      <td class="td-duration">
        <div class="duration-wrap">
          <button class="row-heart-btn ${likedSongIds.has(track.id) ? 'liked' : ''}">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <span>${track.durationStr}</span>
        </div>
      </td>
    `;
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.row-heart-btn')) {
        toggleLikeSong(track.id);
        return;
      }
      playTrack(originalIndex);
    });
    searchResultsTbody.appendChild(tr);
  });
}

// 21. NATIVE MEDIA SESSION
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => togglePlayPause());
    navigator.mediaSession.setActionHandler('pause', () => togglePlayPause());
    navigator.mediaSession.setActionHandler('previoustrack', () => playPrevTrack());
    navigator.mediaSession.setActionHandler('nexttrack', () => playNextTrack());
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.seekTime && audio.duration) {
        audio.currentTime = details.seekTime;
      }
    });
  }
}

function updateMediaSession(track) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.album,
      artwork: [
        { src: track.cover, sizes: '500x500', type: 'image/svg+xml' }
      ]
    });
  }
}

// 22. AUDIO ERROR HANDLER
function setupAudioFallback() {
  audio.addEventListener('error', (e) => {
    console.warn("Audio load warning for track:", playlistData.tracks[currentTrackIndex]?.title, e);
  });

  // Dynamic Metadata Duration Update
  audio.addEventListener('loadedmetadata', () => {
    if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration) && audio.duration > 0) {
      const durSec = Math.floor(audio.duration);
      playlistData.tracks[currentTrackIndex].duration = durSec;
      playlistData.tracks[currentTrackIndex].durationStr = formatTime(durSec);
      if (totalDurationEl) totalDurationEl.textContent = formatTime(durSec);
      if (fsTotalDuration) fsTotalDuration.textContent = formatTime(durSec);
      updatePlaylistMeta();
    }
  });
}

// 23. EVENT LISTENERS
function setupEventListeners() {
  // Audio state
  audio.addEventListener('timeupdate', handleTimeUpdate);
  audio.addEventListener('ended', () => {
    if (repeatMode === 2) {
      audio.currentTime = 0;
      audio.play();
    } else if (repeatMode === 1 || currentTrackIndex < playlistData.tracks.length - 1) {
      playNextTrack();
    } else {
      isPlaying = false;
      updatePlayPauseUI();
    }
  });

  // Big Play Button
  if (bigPlayBtn) bigPlayBtn.addEventListener('click', togglePlayPause);

  // Bottom player controls
  if (ctrlPlayPause) ctrlPlayPause.addEventListener('click', togglePlayPause);
  if (ctrlNextBtn) ctrlNextBtn.addEventListener('click', playNextTrack);
  if (ctrlPrevBtn) ctrlPrevBtn.addEventListener('click', playPrevTrack);

  // Mobile player controls
  if (mobPlayPauseBtn) mobPlayPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlayPause();
  });
  if (mobNextBtn) mobNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    playNextTrack();
  });
  if (mobHeartBtn) mobHeartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLikeSong(playlistData.tracks[currentTrackIndex].id);
  });

  // Mobile Bottom Navigation
  if (mobNavHome) mobNavHome.addEventListener('click', openHomeView);
  if (mobNavSearch) mobNavSearch.addEventListener('click', openSearchView);
  if (mobNavLiked) mobNavLiked.addEventListener('click', openLikedSongsView);
  if (mobNavLyrics) mobNavLyrics.addEventListener('click', toggleFullscreen);
  if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', openSearchView);

  const mobHeaderBrand = document.getElementById('mobile-header-brand');
  if (mobHeaderBrand) mobHeaderBrand.addEventListener('click', openHomeView);

  // Shuffle toggle
  if (ctrlShuffleBtn) {
    ctrlShuffleBtn.addEventListener('click', () => {
      isShuffle = !isShuffle;
      ctrlShuffleBtn.classList.toggle('active', isShuffle);
      showToast(`Shuffle is ${isShuffle ? 'ON' : 'OFF'}`);
    });
  }

  // Repeat toggle (Off -> Repeat All -> Repeat One)
  if (ctrlRepeatBtn) {
    ctrlRepeatBtn.addEventListener('click', () => {
      repeatMode = (repeatMode + 1) % 3;
      if (repeatMode === 0) {
        ctrlRepeatBtn.classList.remove('active');
        ctrlRepeatBtn.title = "Enable repeat";
        showToast("Repeat OFF");
      } else if (repeatMode === 1) {
        ctrlRepeatBtn.classList.add('active');
        ctrlRepeatBtn.title = "Enable repeat one";
        showToast("Repeat PLAYLIST");
      } else {
        ctrlRepeatBtn.classList.add('active');
        ctrlRepeatBtn.title = "Disable repeat";
        showToast("Repeat ONE track");
      }
    });
  }

  // Progress Seek Bar Drag & Click
  let isProgressDragging = false;
  if (progressWrapper) {
    progressWrapper.addEventListener('mousedown', (e) => {
      isProgressDragging = true;
      seekToPosition(e, progressWrapper);
    });
    window.addEventListener('mousemove', (e) => {
      if (isProgressDragging) seekToPosition(e, progressWrapper);
    });
    window.addEventListener('mouseup', () => {
      isProgressDragging = false;
    });
  }

  // Fullscreen Progress Seek Bar
  if (fsProgressWrapper) {
    fsProgressWrapper.addEventListener('click', (e) => {
      seekToPosition(e, fsProgressWrapper);
    });
  }

  // Volume Bar Drag & Click
  let isVolumeDragging = false;
  if (volumeWrapper) {
    volumeWrapper.addEventListener('mousedown', (e) => {
      isVolumeDragging = true;
      const rect = volumeWrapper.getBoundingClientRect();
      updateVolume((e.clientX - rect.left) / rect.width);
    });
    window.addEventListener('mousemove', (e) => {
      if (isVolumeDragging) {
        const rect = volumeWrapper.getBoundingClientRect();
        updateVolume((e.clientX - rect.left) / rect.width);
      }
    });
    window.addEventListener('mouseup', () => {
      isVolumeDragging = false;
    });
  }

  if (volumeIconBtn) volumeIconBtn.addEventListener('click', toggleMute);

  // Like Track Buttons
  if (playerHeartBtn) {
    playerHeartBtn.addEventListener('click', () => {
      toggleLikeSong(playlistData.tracks[currentTrackIndex].id);
    });
  }
  if (panelHeartBtn) {
    panelHeartBtn.addEventListener('click', () => {
      toggleLikeSong(playlistData.tracks[currentTrackIndex].id);
    });
  }

  // Right Panels
  const btnTogglePanel = document.getElementById('btn-toggle-panel');
  const btnToggleLyrics = document.getElementById('btn-toggle-lyrics');
  const btnToggleQueue = document.getElementById('btn-toggle-queue');
  if (btnTogglePanel) btnTogglePanel.addEventListener('click', () => openRightPanel('now-playing'));
  if (btnToggleLyrics) btnToggleLyrics.addEventListener('click', () => openRightPanel('lyrics'));
  if (btnToggleQueue) btnToggleQueue.addEventListener('click', () => openRightPanel('queue'));
  if (panelCloseBtn) panelCloseBtn.addEventListener('click', closeRightPanel);

  const openFullQueueBtn = document.getElementById('open-full-queue');
  if (openFullQueueBtn) openFullQueueBtn.addEventListener('click', () => openRightPanel('queue'));

  // Expand Cover click (opens fullscreen / now playing on mobile or desktop)
  const playerThumbWrap = document.getElementById('player-thumb-wrap');
  if (playerThumbWrap) {
    playerThumbWrap.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleFullscreen();
      } else {
        openRightPanel('now-playing');
      }
    });
  }

  const playerTrackInfo = document.querySelector('.player-track-info');
  if (playerTrackInfo) {
    playerTrackInfo.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleFullscreen();
      }
    });
  }

  // Fullscreen Overlay
  const btnFullscreen = document.getElementById('btn-fullscreen');
  if (btnFullscreen) btnFullscreen.addEventListener('click', toggleFullscreen);
  if (fsCloseBtn) fsCloseBtn.addEventListener('click', toggleFullscreen);

  // Navigation
  if (navHome) navHome.addEventListener('click', openHomeView);
  if (navSearch) navSearch.addEventListener('click', openSearchView);
  const navLogo = document.getElementById('nav-logo');
  if (navLogo) navLogo.addEventListener('click', openHomeView);

  if (itemVelankanni) itemVelankanni.addEventListener('click', openHomeView);
  if (itemLikedSongs) itemLikedSongs.addEventListener('click', openLikedSongsView);

  // Sidebar item shortcuts
  const sidebarItems = [
    { id: 'item-dhasare', trackIndex: 0 },
    { id: 'item-edaivida', trackIndex: 1 },
    { id: 'item-vinmeen', trackIndex: 2 },
    { id: 'item-amen', trackIndex: 3 },
    { id: 'item-kelungal', trackIndex: 4 },
    { id: 'item-kodi-duet', trackIndex: 19 },
    { id: 'item-annaiye-thaaye', trackIndex: 20 },
    { id: 'item-ulagellaam', trackIndex: 21 },
    { id: 'item-arokiya-susila', trackIndex: 22 },
    { id: 'item-kathum-susila', trackIndex: 25 },
    { id: 'item-vanga-spb', trackIndex: 27 },
    { id: 'item-poondi', trackIndex: 32 },
    { id: 'item-marian', trackIndex: 58 },
    { id: 'item-mangala', trackIndex: 59 },
    { id: 'item-arokiya', trackIndex: 61 },
    { id: 'item-kovilil', trackIndex: 62 },
    { id: 'item-alaikadal', trackIndex: 25 },
    { id: 'item-manasellam', trackIndex: 64 },
  ];
  sidebarItems.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) el.addEventListener('click', () => playTrack(item.trackIndex));
  });

  // Search Inputs
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      handleGlobalSearch(e.target.value);
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      globalSearchInput.value = '';
      handleGlobalSearch('');
    });
  }

  if (filterTracksInput) {
    filterTracksInput.addEventListener('input', (e) => {
      renderTracklist(e.target.value);
    });
  }

  // Playlist Header buttons
  if (playlistHeartBtn) {
    playlistHeartBtn.addEventListener('click', () => {
      playlistHeartBtn.classList.toggle('liked');
      const isLiked = playlistHeartBtn.classList.contains('liked');
      showToast(isLiked ? "Saved to Your Library" : "Removed from Your Library", isLiked);
    });
  }

  if (playlistDownloadBtn) {
    playlistDownloadBtn.addEventListener('click', () => {
      playlistDownloadBtn.classList.toggle('downloaded');
      showToast(`Downloaded all ${playlistData.tracks.length} songs for offline listening!`, true);
    });
  }

  const playlistMoreBtn = document.getElementById('playlist-more-btn');
  if (playlistMoreBtn) {
    playlistMoreBtn.addEventListener('click', () => {
      navigator.clipboard?.writeText(window.location.href);
      showToast("Playlist link copied to clipboard!");
    });
  }

  // Device Connect Modal
  const btnConnectDevice = document.getElementById('btn-connect-device');
  if (btnConnectDevice) {
    btnConnectDevice.addEventListener('click', () => {
      if (connectModal) connectModal.classList.add('active');
    });
  }
  const closeConnectModal = document.getElementById('close-connect-modal');
  if (closeConnectModal) {
    closeConnectModal.addEventListener('click', () => {
      if (connectModal) connectModal.classList.remove('active');
    });
  }
  if (connectModal) {
    connectModal.addEventListener('click', (e) => {
      if (e.target === connectModal) connectModal.classList.remove('active');
    });
  }

  // Keyboard Shortcuts Modal
  const shortcutsBtn = document.getElementById('shortcuts-btn');
  if (shortcutsBtn) {
    shortcutsBtn.addEventListener('click', () => {
      if (shortcutsModal) shortcutsModal.classList.add('active');
    });
  }
  const closeShortcutsModal = document.getElementById('close-shortcuts-modal');
  if (closeShortcutsModal) {
    closeShortcutsModal.addEventListener('click', () => {
      if (shortcutsModal) shortcutsModal.classList.remove('active');
    });
  }
  if (shortcutsModal) {
    shortcutsModal.addEventListener('click', (e) => {
      if (e.target === shortcutsModal) shortcutsModal.classList.remove('active');
    });
  }

  // Create Playlist Button
  const createPlaylistBtn = document.getElementById('create-playlist-btn');
  if (createPlaylistBtn) {
    createPlaylistBtn.addEventListener('click', () => {
      showToast("Created playlist in Your Library!", true);
    });
  }

  const installAppPill = document.getElementById('install-app-pill');
  if (installAppPill) {
    installAppPill.addEventListener('click', () => {
      showToast("AROKIYAM Web & Mobile App installed!");
    });
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      updateVolume(currentVolume + 0.05);
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      updateVolume(currentVolume - 0.05);
    } else if (e.key === 'n' || e.key === 'N') {
      playNextTrack();
    } else if (e.key === 'p' || e.key === 'P') {
      playPrevTrack();
    } else if (e.key === 'm' || e.key === 'M') {
      toggleMute();
    } else if (e.key === 'l' || e.key === 'L') {
      toggleLikeSong(playlistData.tracks[currentTrackIndex].id);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === '?') {
      if (shortcutsModal) shortcutsModal.classList.toggle('active');
    }
  });

  // Topbar scroll effect
  const mainView = document.getElementById('main-view');
  const topbar = document.getElementById('topbar');
  if (mainView && topbar) {
    mainView.addEventListener('scroll', () => {
      if (mainView.scrollTop > 80) {
        topbar.classList.add('scrolled');
      } else {
        topbar.classList.remove('scrolled');
      }
    });
  }
}

// Start application
document.addEventListener('DOMContentLoaded', initApp);
