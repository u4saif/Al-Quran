export class Constants {
  public static readonly LANGUAGES = [
    {
      code: 'sq',
      name: 'Albanian',
      nativeName: 'Shqip',
    },
    {
      code: 'am',
      name: 'Amharic',
      nativeName: 'አማርኛ',
    },
    {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
    },
    {
      code: 'az',
      name: 'Azerbaijani',
      nativeName: 'azərbaycan dili',
    },
    {
      code: 'bn',
      name: 'Bengali',
      nativeName: 'বাংলা',
    },
    {
      code: 'cs',
      name: 'Czech',
      nativeName: 'česky, čeština',
    },
    {
      code: 'dv',
      name: 'Divehi Maldivian;',
      nativeName: 'ދިވެހި',
    },
    {
      code: 'nl',
      name: 'Dutch',
      nativeName: 'Nederlands, Vlaams',
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
    },
    {
      code: 'fr',
      name: 'French',
      nativeName: 'français, langue française',
    },
    {
      code: 'de',
      name: 'German',
      nativeName: 'Deutsch',
    },
    {
      code: 'ha',
      name: 'Hausa',
      nativeName: 'Hausa, هَوُسَ',
    },
    {
      code: 'hi',
      name: 'Hindi',
      nativeName: 'हिन्दी, हिंदी',
    },
    {
      code: 'id',
      name: 'Indonesian',
      nativeName: 'Bahasa Indonesia',
    },
    {
      code: 'it',
      name: 'Italian',
      nativeName: 'Italiano',
    },
    {
      code: 'ja',
      name: 'Japanese',
      nativeName: '日本語 (にほんご／にっぽんご)',
    },
    {
      code: 'ko',
      name: 'Korean',
      nativeName: '한국어 (韓國語), 조선말 (朝鮮語)',
    },
    {
      code: 'ku',
      name: 'Kurdish',
      nativeName: 'Kurdî, كوردی‎',
    },
    {
      code: 'ml',
      name: 'Malayalam',
      nativeName: 'മലയാളം',
    },
    {
      code: 'no',
      name: 'Norwegian',
      nativeName: 'Norsk',
    },
    {
      code: 'fa',
      name: 'Persian',
      nativeName: 'فارسی',
    },
    {
      code: 'pl',
      name: 'Polish',
      nativeName: 'polski',
    },
    {
      code: 'ps',
      name: 'Pashto, Pushto',
      nativeName: 'پښتو',
    },
    {
      code: 'pt',
      name: 'Portuguese',
      nativeName: 'Português',
    },
    {
      code: 'ro',
      name: 'Romanian, Moldavian, Moldovan',
      nativeName: 'română',
    },
    {
      code: 'ru',
      name: 'Russian',
      nativeName: 'русский язык',
    },
    {
      code: 'sd',
      name: 'Sindhi',
      nativeName: 'सिन्धी, سنڌي، سندھی‎',
    },
    {
      code: 'so',
      name: 'Somali',
      nativeName: 'Soomaaliga, af Soomaali',
    },
    {
      code: 'es',
      name: 'Spanish; Castilian',
      nativeName: 'español, castellano',
    },
    {
      code: 'sw',
      name: 'Swahili',
      nativeName: 'Kiswahili',
    },
    {
      code: 'sv',
      name: 'Swedish',
      nativeName: 'svenska',
    },
    {
      code: 'ta',
      name: 'Tamil',
      nativeName: 'தமிழ்',
    },
    {
      code: 'tg',
      name: 'Tajik',
      nativeName: 'тоҷикӣ, toğikī, تاجیکی‎',
    },
    {
      code: 'th',
      name: 'Thai',
      nativeName: 'ไทย',
    },
    {
      code: 'tr',
      name: 'Turkish',
      nativeName: 'Türkçe',
    },
    {
      code: 'tt',
      name: 'Tatar',
      nativeName: 'татарча, tatarça, تاتارچا‎',
    },
    {
      code: 'ug',
      name: 'Uighur, Uyghur',
      nativeName: 'Uyƣurqə, ئۇيغۇرچە‎',
    },
    {
      code: 'ur',
      name: 'Urdu',
      nativeName: 'اردو',
    },
    {
      code: 'uz',
      name: 'Uzbek',
      nativeName: 'zbek, Ўзбек, أۇزبېك‎',
    },
  ];

  public static readonly QURAN_TEXT = [
    {
      identifier: 'quran-simple',
      language: 'ar',
      name: 'القرآن الكريم المبسط (تشكيل بسيط)',
      englishName: 'Simple',
      format: 'text',
      type: 'quran',
      direction: 'rtl',
    },
    {
      identifier: 'quran-simple-clean',
      language: 'ar',
      name: 'القرآن الكريم المبسط (بدون تشكيل)',
      englishName: 'Simple Clean',
      format: 'text',
      type: 'quran',
      direction: 'rtl',
    },
    {
      identifier: 'quran-simple-enhanced',
      language: 'ar',
      name: 'القرآن الكريم المبسط (بدون تشكيل)',
      englishName: 'Simple Enhanced',
      format: 'text',
      type: 'quran',
      direction: 'rtl',
    },
    {
      identifier: 'quran-uthmani',
      language: 'ar',
      name: 'القرآن الكريم برسم العثماني',
      englishName: 'Uthmani',
      format: 'text',
      type: 'quran',
      direction: 'rtl',
    },
  ];

  public static readonly TRANSLATION_TEXT = [
    {
        "identifier": "ar.muyassar",
        "language": "ar",
        "name": "تفسير المیسر",
        "englishName": "King Fahad Quran Complex",
        "format": "text",
        "type": "tafsir",
        "direction": "rtl",
        "languageName": "Arabic"
    },
    {
        "identifier": "bn.bengali",
        "language": "bn",
        "name": "মুহিউদ্দীন খান",
        "englishName": "Muhiuddin Khan",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Bengali"
    },
    {
        "identifier": "bn.hoque",
        "language": "bn",
        "name": "জহুরুল হক",
        "englishName": "জহুরুল হক",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Bengali"
    },
    {
        "identifier": "ar.jalalayn",
        "language": "ar",
        "name": "تفسير الجلالين",
        "englishName": "Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti",
        "format": "text",
        "type": "tafsir",
        "direction": "rtl",
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.waseet",
        "language": "ar",
        "name": "الـتـفـسـيـر الـوسـيـط",
        "englishName": "Tafseer Al-Waseet",
        "format": "text",
        "type": "tafsir",
        "direction": "rtl",
        "languageName": "Arabic"
    },
    {
        "identifier": "az.mammadaliyev",
        "language": "az",
        "name": "Məmmədəliyev & Bünyadov",
        "englishName": "Vasim Mammadaliyev and Ziya Bunyadov",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Azerbaijani"
    },
    {
        "identifier": "az.musayev",
        "language": "az",
        "name": "Musayev",
        "englishName": "Alikhan Musayev",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Azerbaijani"
    },
    {
        "identifier": "cs.hrbek",
        "language": "cs",
        "name": "Hrbek",
        "englishName": "Preklad I. Hrbek",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Czech"
    },
    {
        "identifier": "cs.nykl",
        "language": "cs",
        "name": "Nykl",
        "englishName": "A. R. Nykl",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Czech"
    },
    {
        "identifier": "de.aburida",
        "language": "de",
        "name": "Abu Rida",
        "englishName": "Abu Rida Muhammad ibn Ahmad ibn Rassoul",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "German"
    },
    {
        "identifier": "de.bubenheim",
        "language": "de",
        "name": "Bubenheim & Elyas",
        "englishName": "A. S. F. Bubenheim and N. Elyas",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "German"
    },
    {
        "identifier": "de.khoury",
        "language": "de",
        "name": "Khoury",
        "englishName": "Adel Theodor Khoury",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "German"
    },
    {
        "identifier": "de.zaidan",
        "language": "de",
        "name": "Zaidan",
        "englishName": "Amir Zaidan",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "German"
    },
    {
        "identifier": "dv.divehi",
        "language": "dv",
        "name": "ދިވެހި",
        "englishName": "Office of the President of Maldives",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Divehi Maldivian;"
    },
    {
        "identifier": "en.ahmedali",
        "language": "en",
        "name": "Ahmed Ali",
        "englishName": "Ahmed Ali",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.ahmedraza",
        "language": "en",
        "name": "Ahmed Raza Khan",
        "englishName": "Ahmed Raza Khan",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.arberry",
        "language": "en",
        "name": "Arberry",
        "englishName": "A. J. Arberry",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.asad",
        "language": "en",
        "name": "Asad",
        "englishName": "Muhammad Asad",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.daryabadi",
        "language": "en",
        "name": "Daryabadi",
        "englishName": "Abdul Majid Daryabadi",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.hilali",
        "language": "en",
        "name": "Hilali & Khan",
        "englishName": "Muhammad Taqi-ud-Din al-Hilali and Muhammad Muhsin Khan",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.pickthall",
        "language": "en",
        "name": "Pickthall",
        "englishName": "Mohammed Marmaduke William Pickthall",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.qaribullah",
        "language": "en",
        "name": "Qaribullah & Darwish",
        "englishName": "Hasan al-Fatih Qaribullah and Ahmad Darwish",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.sahih",
        "language": "en",
        "name": "Saheeh International",
        "englishName": "Saheeh International",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.sarwar",
        "language": "en",
        "name": "Sarwar",
        "englishName": "Muhammad Sarwar",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.yusufali",
        "language": "en",
        "name": "Yusuf Ali",
        "englishName": "Abdullah Yusuf Ali",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.maududi",
        "language": "en",
        "name": "Maududi",
        "englishName": "Abul Ala Maududi",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.shakir",
        "language": "en",
        "name": "Shakir",
        "englishName": "Mohammad Habib Shakir",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.transliteration",
        "language": "en",
        "name": "Transliteration",
        "englishName": "English Transliteration",
        "format": "text",
        "type": "transliteration",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.itani",
        "language": "en",
        "name": "Clear Qur'an - Talal Itani",
        "englishName": "Clear Qur'an by Talal Itani",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.mubarakpuri",
        "language": "en",
        "name": "Mubarakpuri",
        "englishName": "Mubarakpuri",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.qarai",
        "language": "en",
        "name": "Qarai",
        "englishName": "Qarai",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "en.wahiduddin",
        "language": "en",
        "name": "Wahiduddin Khan",
        "englishName": "Wahiduddin Khan",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "English"
    },
    {
        "identifier": "es.cortes",
        "language": "es",
        "name": "Cortes",
        "englishName": "Julio Cortes",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Spanish; Castilian"
    },
    {
        "identifier": "es.asad",
        "language": "es",
        "name": "Asad",
        "englishName": "Muhammad Asad - Abdurrasak Pérez",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Spanish; Castilian"
    },
    {
        "identifier": "es.bornez",
        "language": "es",
        "name": "Bornez",
        "englishName": "Bornez",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Spanish; Castilian"
    },
    {
        "identifier": "es.garcia",
        "language": "es",
        "name": "Garcia",
        "englishName": "Garcia",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Spanish; Castilian"
    },
    {
        "identifier": "fa.ayati",
        "language": "fa",
        "name": "آیتی",
        "englishName": "AbdolMohammad Ayati",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Persian"
    },
    {
        "identifier": "fa.fooladvand",
        "language": "fa",
        "name": "فولادوند",
        "englishName": "Mohammad Mahdi Fooladvand",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Persian"
    },
    {
        "identifier": "fr.hamidullah",
        "language": "fr",
        "name": "Hamidullah",
        "englishName": "Muhammad Hamidullah",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "French"
    },
    {
        "identifier": "ha.gumi",
        "language": "ha",
        "name": "Gumi",
        "englishName": "Abubakar Mahmoud Gumi",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Hausa"
    },
    {
        "identifier": "hi.hindi",
        "language": "hi",
        "name": "फ़ारूक़ ख़ान & नदवी",
        "englishName": "Suhel Farooq Khan and Saifur Rahman Nadwi",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Hindi"
    },
    {
        "identifier": "hi.farooq",
        "language": "hi",
        "name": "फ़ारूक़ ख़ान & अहमद",
        "englishName": "Muhammad Farooq Khan and Muhammad Ahmed",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Hindi"
    },
    {
        "identifier": "id.indonesian",
        "language": "id",
        "name": "Bahasa Indonesia",
        "englishName": "Unknown",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Indonesian"
    },
    {
        "identifier": "id.muntakhab",
        "language": "id",
        "name": "Quraish Shihab",
        "englishName": "Muhammad Quraish Shihab et al.",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Indonesian"
    },
    {
        "identifier": "id.jalalayn",
        "language": "id",
        "name": "Tafsir Jalalayn",
        "englishName": "Tafsir Jalalayn",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Indonesian"
    },
    {
        "identifier": "it.piccardo",
        "language": "it",
        "name": "Piccardo",
        "englishName": "Hamza Roberto Piccardo",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Italian"
    },
    {
        "identifier": "ja.japanese",
        "language": "ja",
        "name": "Japanese",
        "englishName": "Unknown",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Japanese"
    },
    {
        "identifier": "ko.korean",
        "language": "ko",
        "name": "Korean",
        "englishName": "Unknown",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Korean"
    },
    {
        "identifier": "ku.asan",
        "language": "ku",
        "name": "ته‌فسیری ئاسان",
        "englishName": "Burhan Muhammad-Amin",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Kurdish"
    },
    {
        "identifier": "ml.abdulhameed",
        "language": "ml",
        "name": "അബ്ദുല്‍ ഹമീദ് & പറപ്പൂര്‍",
        "englishName": "Cheriyamundam Abdul Hameed and Kunhi Mohammed Parappoor",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Malayalam"
    },
    {
        "identifier": "ml.karakunnu",
        "language": "ml",
        "name": "കാരകുന്ന് & എളയാവൂര്",
        "englishName": "കാരകുന്ന് & എളയാവൂര്",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Malayalam"
    },
    {
        "identifier": "nl.keyzer",
        "language": "nl",
        "name": "Keyzer",
        "englishName": "Salomo Keyzer",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Dutch"
    },
    {
        "identifier": "nl.leemhuis",
        "language": "nl",
        "name": "Leemhuis",
        "englishName": "Leemhuis",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Dutch"
    },
    {
        "identifier": "nl.siregar",
        "language": "nl",
        "name": "Siregar",
        "englishName": "Siregar",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Dutch"
    },
    {
        "identifier": "no.berg",
        "language": "no",
        "name": "Einar Berg",
        "englishName": "Einar Berg",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Norwegian"
    },
    {
        "identifier": "pl.bielawskiego",
        "language": "pl",
        "name": "Bielawskiego",
        "englishName": "Józefa Bielawskiego",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Polish"
    },
    {
        "identifier": "ps.abdulwali",
        "language": "ps",
        "name": "عبدالولي",
        "englishName": "عبدالولي",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Pashto, Pushto"
    },
    {
        "identifier": "pt.elhayek",
        "language": "pt",
        "name": "El-Hayek",
        "englishName": "Samir El-Hayek",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Portuguese"
    },
    {
        "identifier": "ro.grigore",
        "language": "ro",
        "name": "Grigore",
        "englishName": "George Grigore",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Romanian, Moldavian, Moldovan"
    },
    {
        "identifier": "ru.kuliev",
        "language": "ru",
        "name": "Кулиев",
        "englishName": "Elmir Kuliev",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Russian"
    },
    {
        "identifier": "ru.osmanov",
        "language": "ru",
        "name": "Османов",
        "englishName": "Magomed-Nuri Osmanovich Osmanov",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Russian"
    },
    {
        "identifier": "ru.porokhova",
        "language": "ru",
        "name": "Порохова",
        "englishName": "V. Porokhova",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Russian"
    },
    {
        "identifier": "sd.amroti",
        "language": "sd",
        "name": "امروٽي",
        "englishName": "Taj Mehmood Amroti",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Sindhi"
    },
    {
        "identifier": "so.abduh",
        "language": "so",
        "name": "Abduh",
        "englishName": "Mahmud Muhammad Abduh",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Somali"
    },
    {
        "identifier": "sq.ahmeti",
        "language": "sq",
        "name": "Sherif Ahmeti",
        "englishName": "Sherif Ahmeti",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Albanian"
    },
    {
        "identifier": "sq.mehdiu",
        "language": "sq",
        "name": "Feti Mehdiu",
        "englishName": "Feti Mehdiu",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Albanian"
    },
    {
        "identifier": "sq.nahi",
        "language": "sq",
        "name": "Efendi Nahi",
        "englishName": "Hasan Efendi Nahi",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Albanian"
    },
    {
        "identifier": "sv.bernstrom",
        "language": "sv",
        "name": "Bernström",
        "englishName": "Knut Bernström",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Swedish"
    },
    {
        "identifier": "sw.barwani",
        "language": "sw",
        "name": "Al-Barwani",
        "englishName": "Ali Muhsin Al-Barwani",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Swahili"
    },
    {
        "identifier": "ta.tamil",
        "language": "ta",
        "name": "ஜான் டிரஸ்ட்",
        "englishName": "Jan Turst Foundation",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Tamil"
    },
    {
        "identifier": "tg.ayati",
        "language": "tg",
        "name": "Оятӣ",
        "englishName": "AbdolMohammad Ayati",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Tajik"
    },
    {
        "identifier": "th.thai",
        "language": "th",
        "name": "ภาษาไทย",
        "englishName": "King Fahad Quran Complex",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Thai"
    },
    {
        "identifier": "tr.ates",
        "language": "tr",
        "name": "Süleyman Ateş",
        "englishName": "Suleyman Ates",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.bulac",
        "language": "tr",
        "name": "Alİ Bulaç",
        "englishName": "Alİ Bulaç",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.diyanet",
        "language": "tr",
        "name": "Diyanet İşleri",
        "englishName": "Diyanet Isleri",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.golpinarli",
        "language": "tr",
        "name": "Abdulbakî Gölpınarlı",
        "englishName": "Abdulbaki Golpinarli",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.ozturk",
        "language": "tr",
        "name": "Öztürk",
        "englishName": "Yasar Nuri Ozturk",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.transliteration",
        "language": "tr",
        "name": "Çeviriyazı",
        "englishName": "Muhammet Abay",
        "format": "text",
        "type": "transliteration",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.vakfi",
        "language": "tr",
        "name": "Diyanet Vakfı",
        "englishName": "Diyanet Vakfi",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.yazir",
        "language": "tr",
        "name": "Elmalılı Hamdi Yazır",
        "englishName": "Elmalili Hamdi Yazir",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.yildirim",
        "language": "tr",
        "name": "Suat Yıldırım",
        "englishName": "Suat Yildirim",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tr.yuksel",
        "language": "tr",
        "name": "Edip Yüksel",
        "englishName": "Edip Yüksel",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Turkish"
    },
    {
        "identifier": "tt.nugman",
        "language": "tt",
        "name": "Yakub Ibn Nugman",
        "englishName": "Yakub Ibn Nugman",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Tatar"
    },
    {
        "identifier": "ug.saleh",
        "language": "ug",
        "name": "محمد صالح",
        "englishName": "Muhammad Saleh",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Uighur, Uyghur"
    },
    {
        "identifier": "ur.ahmedali",
        "language": "ur",
        "name": "احمد علی",
        "englishName": "Ahmed Ali",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "ur.jalandhry",
        "language": "ur",
        "name": "جالندہری",
        "englishName": "Fateh Muhammad Jalandhry",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "ur.jawadi",
        "language": "ur",
        "name": "علامہ جوادی",
        "englishName": "Syed Zeeshan Haider Jawadi",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "ur.kanzuliman",
        "language": "ur",
        "name": "احمد رضا خان",
        "englishName": "Ahmed Raza Khan",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "ur.qadri",
        "language": "ur",
        "name": "طاہر القادری",
        "englishName": "Tahir ul Qadri",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "ur.junagarhi",
        "language": "ur",
        "name": "محمد جوناگڑھی",
        "englishName": "Muhammad Junagarhi",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "ur.maududi",
        "language": "ur",
        "name": "ابوالاعلی مودودی",
        "englishName": "Abul A'ala Maududi",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "ur.najafi",
        "language": "ur",
        "name": "محمد حسین نجفی",
        "englishName": "محمد حسین نجفی",
        "format": "text",
        "type": "translation",
        "direction": "rtl",
        "languageName": "Urdu"
    },
    {
        "identifier": "uz.sodik",
        "language": "uz",
        "name": "Мухаммад Содик",
        "englishName": "Muhammad Sodik Muhammad Yusuf",
        "format": "text",
        "type": "translation",
        "direction": "ltr",
        "languageName": "Uzbek"
    }
];

  public static readonly TRANSLATION_AUDIO = [
    {
        "identifier": "ar.saoodshuraym",
        "language": "ar",
        "name": "سعود الشريم",
        "englishName": "Saood bin Ibraaheem Ash-Shuraym",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "zh.chinese",
        "language": "zh",
        "name": "中文",
        "englishName": "Chinese",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Chinese"
    },
    {
        "identifier": "en.walk",
        "language": "en",
        "name": "Ibrahim Walk",
        "englishName": "Ibrahim Walk",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "English"
    },
    {
        "identifier": "fa.hedayatfarfooladvand",
        "language": "fa",
        "name": "Fooladvand - Hedayatfar",
        "englishName": "Fooladvand - Hedayatfar",
        "format": "audio",
        "type": "translation",
        "direction": null,
        "languageName": "Persian"
    },
    {
        "identifier": "ar.parhizgar",
        "language": "ar",
        "name": "شهریار پرهیزگار",
        "englishName": "Parhizgar",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ur.khan",
        "language": "ur",
        "name": "Shamshad Ali Khan",
        "englishName": "Shamshad Ali Khan",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Urdu"
    },
    {
        "identifier": "fr.leclerc",
        "language": "fr",
        "name": "Youssouf Leclerc",
        "englishName": "Youssouf Leclerc",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "French"
    },
    {
        "identifier": "ar.aymanswoaid",
        "language": "ar",
        "name": "أيمن سويد",
        "englishName": "Ayman Sowaid",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ru.kuliev-audio",
        "language": "ru",
        "name": "Elmir Kuliev by 1MuslimApp",
        "englishName": "Elmir Kuliev by 1MuslimApp",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Russian"
    },
    {
        "identifier": "ar.abdulbasitmurattal",
        "language": "ar",
        "name": "عبد الباسط عبد الصمد المرتل",
        "englishName": "Abdul Basit",
        "format": "audio",
        "type": "translation",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.abdullahbasfar",
        "language": "ar",
        "name": "عبد الله بصفر",
        "englishName": "Abdullah Basfar",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.abdurrahmaansudais",
        "language": "ar",
        "name": "عبدالرحمن السديس",
        "englishName": "Abdurrahmaan As-Sudais",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.abdulsamad",
        "language": "ar",
        "name": "عبدالباسط عبدالصمد",
        "englishName": "Abdul Samad",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.shaatree",
        "language": "ar",
        "name": "أبو بكر الشاطري",
        "englishName": "Abu Bakr Ash-Shaatree",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.ahmedajamy",
        "language": "ar",
        "name": "أحمد بن علي العجمي",
        "englishName": "Ahmed ibn Ali al-Ajamy",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.alafasy",
        "language": "ar",
        "name": "مشاري العفاسي",
        "englishName": "Alafasy",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.hanirifai",
        "language": "ar",
        "name": "هاني الرفاعي",
        "englishName": "Hani Rifai",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.husary",
        "language": "ar",
        "name": "محمود خليل الحصري",
        "englishName": "Husary",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.husarymujawwad",
        "language": "ar",
        "name": "محمود خليل الحصري (المجود)",
        "englishName": "Husary (Mujawwad)",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.hudhaify",
        "language": "ar",
        "name": "علي بن عبدالرحمن الحذيفي",
        "englishName": "Hudhaify",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.ibrahimakhbar",
        "language": "ar",
        "name": "إبراهيم الأخضر",
        "englishName": "Ibrahim Akhdar",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.mahermuaiqly",
        "language": "ar",
        "name": "ماهر المعيقلي",
        "englishName": "Maher Al Muaiqly",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.minshawi",
        "language": "ar",
        "name": "محمد صديق المنشاوي",
        "englishName": "Minshawi",
        "format": "audio",
        "type": "translation",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.minshawimujawwad",
        "language": "ar",
        "name": "محمد صديق المنشاوي (المجود)",
        "englishName": "Minshawy (Mujawwad)",
        "format": "audio",
        "type": "translation",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.muhammadayyoub",
        "language": "ar",
        "name": "محمد أيوب",
        "englishName": "Muhammad Ayyoub",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    },
    {
        "identifier": "ar.muhammadjibreel",
        "language": "ar",
        "name": "محمد جبريل",
        "englishName": "Muhammad Jibreel",
        "format": "audio",
        "type": "versebyverse",
        "direction": null,
        "languageName": "Arabic"
    }
] ;
}
