import React from 'react'
import sura_010 from './010.mp3';
import sura_011 from './011.mp3';
import sura_012 from './012.mp3';
import sura_013 from './013.mp3';
import sura_014 from './014.mp3';
import sura_015 from './015.mp3';
import sura_016 from './016.mp3';
import sura_017 from './017.mp3';
import sura_018 from './018.mp3';
import sura_019 from './019.mp3';


import sura_020 from './020.mp3';
import sura_021 from './021.mp3';
import sura_022 from './022.mp3';
import sura_023 from './023.mp3';
import sura_024 from './024.mp3';
import sura_025 from './025.mp3';
import sura_026 from './026.mp3';
// import sura_027 from './027.mp3';
import sura_028 from './028.mp3';
// import sura_029 from './029.mp3';
import sura_030 from './030.mp3';


import sura_031 from './031.mp3';
import sura_032 from './032.mp3';
import sura_033 from './033.mp3';
import sura_034 from './034.mp3';
import sura_035 from './035.mp3';
import sura_036 from './036.mp3';
import sura_037 from './037.mp3';
// import sura_038 from './038.mp3';
import sura_039 from './039.mp3';
import sura_040 from './040.mp3';


import sura_041 from './041.mp3';
import sura_042 from './042.mp3';
// import sura_043 from './043.mp3';
import sura_044 from './044.mp3';
import sura_045 from './045.mp3';
import sura_046 from './046.mp3';
import sura_047 from './047.mp3';
import sura_048 from './048.mp3';
import sura_049 from './049.mp3';
// import sura_050 from './050.mp3';

import sura_051 from './051.mp3';
// import sura_052 from './052.mp3';
import sura_053 from './053.mp3';
import sura_054 from './054.mp3';
import sura_055 from './055.mp3';
import sura_056 from './056.mp3';
import sura_057 from './057.mp3';
import sura_058 from './058.mp3';
import sura_059 from './059.mp3';
import sura_060 from './060.mp3';


import sura_061 from './061.mp3';
import sura_062 from './062.mp3';
import sura_063 from './063.mp3';
import sura_064 from './064.mp3';
import sura_065 from './065.mp3';
import sura_066 from './066.mp3';


let tracksArray = [
    { audio: new Audio(sura_010), name: 'سورة يونس', id: 10 },
    { audio: new Audio(sura_011), name: 'سورة هود', id: 11 },
    { audio: new Audio(sura_012), name: 'سورة يوسف', id: 12 },
    { audio: new Audio(sura_013), name: 'سورة الرعد', id: 13 },
    { audio: new Audio(sura_014), name: 'سورة إبراهيم', id: 14 },
    { audio: new Audio(sura_015), name: 'سورة الحجر', id: 15 },
    { audio: new Audio(sura_016), name: 'سورة النحل', id: 16 },
    { audio: new Audio(sura_017), name: 'سورة الإسراء', id: 17 },
    { audio: new Audio(sura_018), name: 'سورة الكهف', id: 18 },
    { audio: new Audio(sura_019), name: 'سورة مريم ', id: 19 },


    { audio: new Audio(sura_020), name: 'سورة طه', id: 20 },
    { audio: new Audio(sura_021), name: 'سورة الأنبياء', id: 21 },
    { audio: new Audio(sura_022), name: 'سورة الحج', id: 22 },
    { audio: new Audio(sura_023), name: 'سورة المؤمنون', id: 23 },
    { audio: new Audio(sura_024), name: 'سورة النور', id: 24 },
    { audio: new Audio(sura_025), name: 'سورة الفرقان', id: 25 },
    { audio: new Audio(sura_026), name: 'سورة الشعراء', id: 26 },
    // { audio: new Audio(sura_027), name: '027', id: 27 }, alnamil
    { audio: new Audio(sura_028), name: 'سورة القصص', id: 28 },
    // { audio: new Audio(sura_029), name: '029', id: 29 }, alankanot
    { audio: new Audio(sura_030), name: 'سورة الروم', id: 30 },


    { audio: new Audio(sura_031), name: 'سورة لقمان', id: 31 },
    { audio: new Audio(sura_032), name: 'سورة السجدة', id: 32 },
    { audio: new Audio(sura_033), name: 'سورة الأحزاب', id: 33 },
    { audio: new Audio(sura_034), name: 'سورة سبأ', id: 34 },
    { audio: new Audio(sura_035), name: 'سورة فاطر', id: 35 },
    { audio: new Audio(sura_036), name: 'سورة يس', id: 36 },
    { audio: new Audio(sura_037), name: 'سورة الصافات', id: 37 },
    // { audio: new Audio(sura_038), name: '038', id: 38 }, sad
    { audio: new Audio(sura_039), name: 'سورة الزمر', id: 39 },
    { audio: new Audio(sura_040), name: 'سورة غافر ', id: 40 },


    { audio: new Audio(sura_041), name: 'سورة فصّلت', id: 41 },
    { audio: new Audio(sura_042), name: 'سورة الشورى', id: 42 },
    // { audio: new Audio(sura_043), name: 'سورة الزخرف', id: 43 },
    { audio: new Audio(sura_044), name: 'سورة الدخان', id: 44 },
    { audio: new Audio(sura_045), name: 'سورة الجاثية', id: 45 },
    { audio: new Audio(sura_046), name: 'سورة الأحقاف', id: 46 },
    { audio: new Audio(sura_047), name: 'سورة محمد', id: 47 },
    { audio: new Audio(sura_048), name: 'سورة الفتح', id: 48 },
    { audio: new Audio(sura_049), name: 'سورة الحجرات', id: 49 },
    // { audio: new Audio(sura_051), name: 'سورة ق', id: 50 }, KAFF
    { audio: new Audio(sura_051), name: 'سورة الذاريات', id: 51 },
    // { audio: new Audio(sura_052), name: 'سورة الطور', id: 52 },
    { audio: new Audio(sura_053), name: 'سورة النجم', id: 53 },
    { audio: new Audio(sura_054), name: 'سورة القمر', id: 54 },
    { audio: new Audio(sura_055), name: 'سورة الرحمن', id: 55 },
    { audio: new Audio(sura_056), name: 'سورة الواقعة', id: 56 },
    { audio: new Audio(sura_057), name: 'سورة الحديد', id: 57 },
    { audio: new Audio(sura_058), name: 'سورة المجادلة', id: 58 },
    { audio: new Audio(sura_059), name: 'سورة الحشر', id: 59 },
    { audio: new Audio(sura_060), name: 'سورة الممتحنة', id: 60 },


    { audio: new Audio(sura_061), name: 'سورة الصف', id: 61 },
    { audio: new Audio(sura_062), name: 'سورة الجمعة', id: 62 },
    { audio: new Audio(sura_063), name: 'سورة المنافقون', id: 63 },
    { audio: new Audio(sura_064), name: 'سورة التغابن', id: 64 },
    { audio: new Audio(sura_065), name: 'سورة الطلاق', id: 65 },
    { audio: new Audio(sura_066), name: 'سورة التحريم', id: 66 },
];

export default tracksArray;
