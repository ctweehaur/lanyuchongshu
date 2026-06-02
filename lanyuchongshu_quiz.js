const quizQuestions = [
    {
        id: 1,
        textStructure: [
            {w: "下列", p: "xià liè"}, {w: "句子", p: "jù zi"}, {w: "中", p: "zhōng"}, "，",
            {w: "加点字", p: "jiā diǎn zì"}, "“", {w: "使", p: "shǐ"}, "”",
            {w: "的", p: "de"}, {w: "正确", p: "zhèng què"}, {w: "含义", p: "hán yì"}, {w: "是", p: "shì"}, "？"
        ],
        en: "What is the correct meaning of the word 'shǐ' in the text?",
        options: [
            { textStructure: [{w: "使用", p: "shǐ yòng"}, "、", {w: "利用", p: "lì yòng"}], en: "To use a tool.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这是", p: "zhè shì"}, {w: "现代", p: "xiàn dài"}, {w: "用法", p: "yòng fǎ"}, "。"], explanationEn: "Incorrect." },
            { textStructure: [{w: "命令", p: "mìng lìng"}, "、", {w: "让", p: "ràng"}], en: "To order or command.", correct: true, explanationStructure: [{w: "齐宣王", p: "qí xuān wáng"}, {w: "命令", p: "mìng lìng"}, {w: "乐师", p: "yuè shī"}, {w: "演奏", p: "yǎn zòu"}, "。"], explanationEn: "Correct." },
            { textStructure: [{w: "使者", p: "shǐ zhě"}, "、", {w: "外交", p: "wài jiāo"}], en: "Messenger.", correct: false, explanationStructure: [{w: "词性", p: "cí xìng"}, {w: "不符", p: "bù fú"}, "，", {w: "原文", p: "yuán wén"}, {w: "是", p: "shì"}, {w: "动词", p: "dòng cí"}, "。"], explanationEn: "Incorrect." },
            { textStructure: [{w: "假使", p: "jiǎ shǐ"}, "、", {w: "如果", p: "rú guǒ"}], en: "If / in case.", correct: false, explanationStructure: [{w: "文理", p: "wén lǐ"}, {w: "不通", p: "bù tōng"}, "，", {w: "语义", p: "yǔ yì"}, {w: "错误", p: "cuò wù"}, "。"], explanationEn: "Incorrect." }
        ]
    },
    {
        id: 2,
        textStructure: [{w: "文中", p: "wén zhōng"}, {w: "“", p: ""}, {w: "宣王", p: "xuān wáng"}, {w: "说之", p: "yuè zhī"}, "”", {w: "中", p: "zhōng"}, "的", "“", {w: "说", p: "shuō"}, "”", {w: "读音", p: "dú yīn"}, {w: "与", p: "yǔ"}, {w: "含义", p: "hán yì"}, "？"],
        en: "What is the correct pronunciation and meaning of 'shuō'?",
        options: [
            { textStructure: [{w: "读作", p: "dú zuò"}, " shuō，", {w: "指", p: "zhǐ"}, {w: "说话", p: "shuō huà"}], en: "To speak.", correct: false, explanationStructure: [{w: "字意", p: "zì yì"}, {w: "不对", p: "bú duì"}, "。"], explanationEn: "Incorrect." },
            { textStructure: [{w: "读作", p: "dú zuò"}, " yuè，", {w: "同", p: "tóng"}, "“", {w: "悦", p: "yuè"}, "”，", {w: "指", p: "zhǐ"}, {w: "喜欢", p: "xǐ huan"}], en: "Like/Pleased.", correct: true, explanationStructure: [{w: "通假字", p: "tōng jiǎ zì"}, "，", {w: "表示", p: "biǎo shì"}, {w: "高兴", p: "gāo xìng"}, "。"], explanationEn: "Correct." },
            { textStructure: [{w: "读作", p: "dú zuò"}, " shuì，", {w: "指", p: "zhǐ"}, {w: "说服", p: "shuō fú"}], en: "Persuade.", correct: false, explanationStructure: [{w: "句意", p: "jù yì"}, {w: "不符", p: "bù fú"}, "。"], explanationEn: "Incorrect." },
            { textStructure: [{w: "读作", p: "dú zuò"}, " tuō，", {w: "指", p: "zhǐ"}, {w: "解脱", p: "jiě tuō"}], en: "Escape.", correct: false, explanationStructure: [{w: "完全", p: "wán quán"}, {w: "错误", p: "cuò wù"}, "。"], explanationEn: "Incorrect." }
        ]
    },
    {
        id: 3,
        textStructure: [{w: "南郭先生", p: "nán guō xiān sheng"}, {w: "为什么", p: "wèi shén me"}, {w: "能", p: "néng"}, {w: "一直", p: "yì zhí"}, {w: "混", p: "hùn"}, {w: "下去", p: "xià qù"}, "？"],
        en: "Why could Mr. Nanguo hide his lack of skill?",
        options: [
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "他", p: "tā"}, {w: "有", p: "yǒu"}, {w: "后台", p: "hòu tái"}], en: "He had connections.", correct: false, explanationStructure: [{w: "文中", p: "wén zhōng"}, {w: "未提及", p: "wèi tí jí"}, "。"], explanationEn: "No evidence." },
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "宣王", p: "xuān wáng"}, {w: "喜欢", p: "xǐ huan"}, {w: "大合奏", p: "dà hé zòu"}], en: "King Xuan liked group play.", correct: true, explanationStructure: [{w: "大合奏", p: "dà hé zòu"}, {w: "可以", p: "kě yǐ"}, {w: "浑水摸鱼", p: "hún shuǐ mō yú"}, "。"], explanationEn: "Correct." },
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "他", p: "tā"}, {w: "其实", p: "qí shí"}, {w: "会", p: "huì"}, {w: "吹竽", p: "chuī yú"}], en: "He was actually skilled.", correct: false, explanationStructure: [{w: "违反", p: "wéi fǎn"}, {w: "题意", p: "tí yì"}, "。"], explanationEn: "Incorrect." },
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "其他", p: "qí tā"}, {w: "乐师", p: "yuè shī"}, {w: "受贿", p: "shòu huì"}], en: "He bribed others.", correct: false, explanationStructure: [{w: "过度", p: "guò dù"}, {w: "推测", p: "tuī cè"}, "。"], explanationEn: "No evidence." }
        ]
    },
    {
        id: 4,
        textStructure: [{w: "湣王", p: "mǐn wáng"}, {w: "继位", p: "jì wèi"}, {w: "后", p: "hòu"}, "，", {w: "危机", p: "wēi jī"}, {w: "是", p: "shì"}, {w: "什么", p: "shén me"}, "？"],
        en: "What was the real crisis after King Min took the throne?",
        options: [
            { textStructure: [{w: "湣王", p: "mǐn wáng"}, {w: "要", p: "yào"}, {w: "解散", p: "jiě sàn"}, {w: "乐团", p: "yuè tuán"}], en: "King Min hated music.", correct: false, explanationStructure: [{w: "不符合", p: "bù fú hé"}, {w: "原意", p: "yuán yì"}, "。"], explanationEn: "Incorrect." },
            { textStructure: [{w: "湣王", p: "mǐn wáng"}, {w: "要求", p: "yāo qiú"}, {w: "一一", p: "yī yī"}, {w: "听之", p: "tīng zhī"}], en: "King Min wanted solo plays.", correct: true, explanationStructure: [{w: "独奏", p: "dú zòu"}, {w: "使", p: "shǐ"}, {w: "他", p: "tā"}, {w: "无法", p: "wú fǎ"}, {w: "混水摸鱼", p: "hún shuǐ mō yú"}, "。"], explanationEn: "Correct." },
            { textStructure: [{w: "他", p: "tā"}, {w: "要", p: "yào"}, {w: "告老还乡", p: "gào lǎo huán xiāng"}], en: "He wanted to retire.", correct: false, explanationStructure: [{w: "是", p: "shì"}, {w: "被动", p: "bèi dòng"}, {w: "逃跑", p: "táo pǎo"}, "。"], explanationEn: "Incorrect." },
            { textStructure: [{w: "乐师们", p: "yuè shī mén"}, {w: "不再", p: "bú zài"}, {w: "帮他", p: "bāng tā"}], en: "Others stopped helping.", correct: false, explanationStructure: [{w: "猜测", p: "cāi cè"}, "。"], explanationEn: "No evidence." }
        ]
    },
    {
        id: 5,
        textStructure: [{w: "从", p: "cóng"}, {w: "故事", p: "gù shì"}, {w: "得到", p: "dé dào"}, {w: "的", p: "de"}, {w: "道理", p: "dào lǐ"}, "？"],
        en: "What is the lesson learned?",
        options: [
            { textStructure: [{w: "运气", p: "yùn qi"}, {w: "最", p: "zuì"}, {w: "重要", p: "zhòng yào"}], en: "Luck is everything.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "实绩", p: "shí jì"}, {w: "才是", p: "cái shì"}, {w: "硬道理", p: "yìng dào lǐ"}, "。"], explanationEn: "False." },
            { textStructure: [{w: "做人", p: "zuò rén"}, {w: "脚踏实地", p: "jiǎo tà shí dì"}], en: "Be honest and solid.", correct: true, explanationStructure: [{w: "真才实学", p: "zhēn cái shí xué"}, {w: "才是", p: "cái shì"}, {w: "立足", p: "lì zú"}, {w: "之本", p: "zhī běn"}, "。"], explanationEn: "True." },
            { textStructure: [{w: "不要", p: "bú yào"}, {w: "学", p: "xué"}, {w: "音乐", p: "yīn yuè"}], en: "Don't learn music.", correct: false, explanationStructure: [{w: "偏离", p: "piān lí"}, {w: "题意", p: "tí yì"}, "。"], explanationEn: "Irrelevant." },
            { textStructure: [{w: "要", p: "yào"}, {w: "讨好", p: "tǎo hǎo"}, {w: "老板", p: "lǎo bǎn"}], en: "Please the boss.", correct: false, explanationStructure: [{w: "实力", p: "shí lì"}, {w: "缺失", p: "quē shī"}, {w: "无法", p: "wú fǎ"}, {w: "弥补", p: "mí bǔ"}, "。"], explanationEn: "Incorrect." }
        ]
    }
];
