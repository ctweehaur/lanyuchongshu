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
            {
                textStructure: [{w: "使用", p: "shǐ yòng"}, "、", {w: "利用", p: "lì yòng"}, {w: "工具", p: "gōng jù"}],
                en: "To use a tool.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "这是", p: "zhè shì"},
                    {w: "现代", p: "xiàn dài"}, {w: "生活", p: "shēng huó"}, {w: "里", p: "lǐ"},
                    {w: "的", p: "de"}, {w: "常见", p: "cháng jiàn"}, {w: "用法", p: "yòng fǎ"}, "，",
                    {w: "不符合", p: "bù fú hé"}, {w: "这里", p: "zhè lǐ"},
                    {w: "君王", p: "jūn wáng"}, {w: "下达", p: "xià dá"}, {w: "命令", p: "mìng lìng"},
                    {w: "的", p: "de"}, {w: "语境", p: "yǔ jìng"}, "。"
                ],
                explanationEn: "Incorrect. This is the modern meaning of using tools. It does not fit the king's order here."
            },
            {
                textStructure: [{w: "命令", p: "mìng lìng"}, "、", {w: "让", p: "ràng"}, "、", {w: "派遣", p: "pài qiǎn"}],
                en: "To order, command, or ask someone to do something.",
                correct: true,
                explanationStructure: [
                    "“", {w: "齐宣王", p: "qí xuān wáng"}, {w: "使人", p: "shǐ rén"},
                    {w: "吹竽", p: "chuī yú"}, "”", {w: "指", p: "zhǐ"}, {w: "的", p: "de"},
                    {w: "是", p: "shì"}, {w: "齐宣王", p: "qí xuān wáng"}, {w: "命令", p: "mìng lìng"},
                    "、", {w: "让", p: "ràng"}, {w: "乐师", p: "yuè shī"},
                    {w: "们", p: "mén"}, {w: "为", p: "wèi"}, {w: "他", p: "tā"}, {w: "吹奏", p: "chuī zòu"},
                    {w: "乐器", p: "yuè qì"}, "。"
                ],
                explanationEn: "King Xuan ordered the musicians to play the instrument for him."
            },
            {
                textStructure: [{w: "使者", p: "shǐ zhě"}, "、", {w: "外交", p: "wài jiāo"}, {w: "人员", p: "rén yuán"}],
                en: "A messenger or diplomat.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "这里", p: "zhè lǐ"},
                    {w: "是", p: "shì"}, {w: "动作", p: "dòng zuò"}, "（", {w: "动词", p: "dòng cí"},
                    "），", {w: "用来", p: "yòng lái"}, {w: "表示", p: "biǎo shì"},
                    {w: "君王", p: "jūn wáng"}, {w: "的", p: "de"}, {w: "命令", p: "mìng lìng"}, "，",
                    {w: "不是", p: "bú shì"}, {w: "指", p: "zhǐ"}, {w: "特定", p: "tè dìng"},
                    {w: "身份", p: "shēn fèn"}, {w: "的", p: "de"}, {w: "名词", p: "míng cí"}, "。"
                ],
                explanationEn: "Incorrect. It is used as an action verb here for the king's order, not a noun for a person."
            },
            {
                textStructure: [{w: "假使", p: "jiǎ shǐ"}, "、", {w: "如果", p: "rú guǒ"}],
                en: "If / in case.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "这是", p: "zhè shì"},
                    {w: "表", p: "biǎo"}, {w: "假设", p: "jiǎ shè"}, {w: "的", p: "de"},
                    {w: "连词", p: "lián cí"}, {w: "用法", p: "yòng fǎ"}, "，",
                    {w: "带入", p: "dài rù"}, {w: "句中", p: "jù zhōng"}, {w: "会", p: "huì"},
                    {w: "导致", p: "dǎo zhì"}, {w: "前后", p: "qián hòu"}, {w: "文理", p: "wén lǐ"},
                    {w: "不通", p: "bù tōng"}, "。"
                ],
                explanationEn: "Incorrect. This is a conjunction meaning 'if', which breaks the grammar of the sentence completely."
            }
        ]
    },
    {
        id: 2,
        textStructure: [
            {w: "文中", p: "wén zhōng"}, {w: "句子", p: "jù zi"}, "“",
            {w: "宣王", p: "xuān wáng"}, {w: "说之", p: "yuè zhī"}, "”",
            {w: "中的", p: "zhōng de"}, "“", {w: "说", p: "shuō"}, "”", {w: "字", p: "zì"}, "，",
            {w: "在这里", p: "zài zhè lǐ"}, {w: "的", p: "de"},
            {w: "正确", p: "zhèng què"}, {w: "读音", p: "dú yīn"}, {w: "和", p: "hé"},
            {w: "意思", p: "yì si"}, {w: "是", p: "shì"}, {w: "什么", p: "shén me"}, "？"
        ],
        en: "What is the correct pronunciation and meaning of 'shuō' in 'xuān wáng yuè zhī'?",
        options: [
            {
                textStructure: [{w: "读作", p: "dú zuò"}, " shuō，", {w: "指", p: "zhǐ"}, {w: "听了", p: "tīng le"}, {w: "南郭先生", p: "nán guō xiān sheng"}, {w: "说话", p: "shuō huà"}, {w: "很有", p: "hěn yǒu"}, {w: "道理", p: "dào lǐ"}],
                en: "Pronounced 'shuō', meaning the king agreed with his words.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "南郭先生", p: "nán guō xiān sheng"},
                    {w: "只是", p: "zhǐ shì"}, {w: "申请", p: "shēn qǐng"}, {w: "加入", p: "jiā rù"},
                    {w: "乐队", p: "yuè duì"}, "，", {w: "并且", p: "bìng qiě"},
                    {w: "没有", p: "méi yǒu"}, {w: "发表", p: "fā biǎo"}, {w: "长篇大论", p: "cháng piān dà lùn"}, "，",
                    {w: "这里", p: "zhè lǐ"}, {w: "的", p: "de"}, {w: "字意", p: "zì yì"},
                    {w: "完全", p: "wán quán"}, {w: "不对", p: "bú duì"}, "。"
                ],
                explanationEn: "Incorrect. Mr. Nanguo only asked to join the band, he did not say much. This meaning is wrong."
            },
            {
                textStructure: [{w: "读作", p: "dú zuò"}, " yuè，", {w: "通假字", p: "tōng jiǎ zì"}, "，", {w: "同", p: "tóng"}, "“", {w: "悦", p: "yuè"}, "”，", {w: "意思是", p: "yì si shì"}, {w: "喜欢", p: "xǐ huan"}, "、", {w: "高兴", p: "gāo xìng"}],
                en: "Pronounced 'yuè', same as '悦', meaning happy or pleased.",
                correct: true,
                explanationStructure: [
                    {w: "在", p: "zài"}, {w: "古汉语", p: "gǔ hàn yǔ"}, {w: "中", p: "zhōng"}, "，",
                    "“", {w: "说", p: "shuō"}, "”", {w: "常常", p: "cháng cháng"}, {w: "通假", p: "tōng jiǎ"},
                    {w: "为", p: "wéi"}, "“", {w: "悦", p: "yuè"}, "”。",
                    {w: "意思是", p: "yì si shì"}, {w: "齐宣王", p: "qí xuān wáng"}, {w: "对", p: "duì"},
                    {w: "他", p: "tā"}, {w: "的", p: "de"}, {w: "加入", p: "jiā rù"},
                    {w: "感到", p: "gǎn dào"}, {w: "很高兴", p: "hěn gāo xìng"}, "、", {w: "很", p: "hěn"},
                    {w: "喜欢", p: "xǐ huan"}, {w: "他", p: "tā"}, "。"
                ],
                explanationEn: "In ancient Chinese, this character often means happy or pleased. The king was happy with him."
            },
            {
                textStructure: [{w: "读作", p: "dú zuò"}, " shuì，", {w: "意思是", p: "yì si shì"}, {w: "去", p: "qù"}, {w: "劝说", p: "quàn shuō"}, "、", {w: "说服", p: "shuō fú"}, {w: "国王", p: "guó wáng"}],
                en: "Pronounced 'shuì', meaning to persuade the king.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "虽然", p: "suī rán"},
                    {w: "有", p: "yǒu"}, {w: "这个", p: "zhè gè"}, {w: "读音", p: "dú yīn"}, "，",
                    {w: "但在", p: "dàn zài"}, {w: "句中", p: "jù zhōng"}, {w: "它是", p: "tā shì"},
                    {w: "主语", p: "zhǔ yǔ"}, "“", {w: "宣王", p: "xuān wáng"}, "”", {w: "之后", p: "zhī hòu"},
                    {w: "的", p: "de"}, {w: "感受", p: "gǎn shòu"}, "，", {w: "不可能", p: "bù kě néng"},
                    {w: "变成", p: "biàn chéng"}, {w: "南郭先生", p: "nán guō xiān sheng"}, {w: "去", p: "qù"},
                    {w: "说服", p: "shuō fú"}, {w: "国王", p: "guó wáng"}, "。"
                ],
                explanationEn: "Incorrect. Although it can be pronounced this way, it describes the king's feeling here, not an act of persuasion."
            },
            {
                textStructure: [{w: "读作", p: "dú zuò"}, " tuō，", {w: "意思是", p: "yì si shì"}, {w: "解脱", p: "jiě tuō"}, "、", {w: "释放", p: "shì fàng"}],
                en: "Pronounced 'tuō', meaning to escape or release.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "这是", p: "zhè shì"},
                    {w: "通", p: "tōng"}, "“", {w: "脱", p: "tuō"}, "”", {w: "的", p: "de"},
                    {w: "意思", p: "yì si"}, "，", {w: "完全", p: "wán quán"},
                    {w: "不符合", p: "bù fú hé"}, {w: "齐宣王", p: "qí xuān wáng"},
                    {w: "听", p: "tīng"}, {w: "乐师", p: "yuè shī"}, {w: "加入", p: "jiā rù"},
                    {w: "时", p: "shí"}, {w: "的", p: "de"}, {w: "心理", p: "xīn lǐ"},
                    {w: "表现", p: "biǎo xiàn"}, "。"
                ],
                explanationEn: "Incorrect. This means to escape, which has nothing to do with the king's reaction to a new musician."
            }
        ]
    },
    {
        id: 3,
        textStructure: [
            {w: "根据", p: "gēn jù"}, {w: "文章", p: "wén zhāng"}, {w: "内容", p: "nèi róng"}, "，",
            {w: "南郭先生", p: "nán guō xiān sheng"}, {w: "在", p: "zài"}, {w: "齐宣王", p: "qí xuān wáng"},
            {w: "时期", p: "shí qī"}, {w: "为什么", p: "wèi shén me"}, {w: "能够", p: "néng gòu"},
            {w: "一直", p: "yì zhí"}, {w: "混", p: "hùn"}, {w: "下去", p: "xià qù"},
            {w: "不被", p: "bú bèi"}, {w: "打穿", p: "dǎ chuān"}, "？"
        ],
        en: "Why could Mr. Nanguo hide his lack of skill during King Xuan's time?",
        options: [
            {
                textStructure: [{w: "稳赢", p: "wěn yíng"}, "！", {w: "因为", p: "yīn wèi"}, {w: "他是", p: "tā shì"}, {w: "国王", p: "guó wáng"}, {w: "的", p: "de"}, {w: "亲戚", p: "qīn qi"}, "，", {w: "守卫", p: "shǒu wèi"}, {w: "不敢", p: "bù gǎn"}, {w: "抓他", p: "zhuā tā"}],
                en: "Because he was a relative of the king.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "文中", p: "wén zhōng"},
                    {w: "没有", p: "méi yǒu"}, {w: "任何", p: "rèn hé"}, {w: "内容", p: "nèi róng"},
                    {w: "提及", p: "tí jí"}, {w: "他是", p: "tā shì"}, {w: "王亲国戚", p: "wáng qīn guó qī"}, "，",
                    {w: "他", p: "tā"}, {w: "只是", p: "zhǐ shì"}, {w: "一个", p: "yí gè"},
                    {w: "普通", p: "pǔ tōng"}, {w: "的", p: "de"}, {w: "无业游民", p: "wú yè yóu mín"}, "。"
                ],
                explanationEn: "Incorrect. The story does not say he was related to the king. He was just a normal guy."
            },
            {
                textStructure: [{w: "因为", p: "yīn wèi"}, {w: "齐宣王", p: "qí xuān wáng"}, {w: "每次", p: "měi cì"}, {w: "听音乐", p: "tīng yīn yuè"}, {w: "都", p: "dōu"}, {w: "喜欢", p: "xǐ huan"}, {w: "三百人", p: "sān bǎi rén"}, {w: "的", p: "de"}, {w: "大合奏", p: "dà hé zòu"}, "，", {w: "他可以", p: "tā kě yǐ"}, {w: "夹在", p: "jiā zài"}, {w: "里面", p: "lǐ miàn"}, {w: "装模作样", p: "zhuāng mú zuò yàng"}],
                en: "Because King Xuan liked 300 people playing together, so he could pretend inside the big group.",
                correct: true,
                explanationStructure: [
                    "“", {w: "必三百人", p: "bì sān bǎi rén"}, "”", {w: "大合奏", p: "dà hé zòu"},
                    {w: "是", p: "shì"}, {w: "关键", p: "guān jiàn"}, "。", {w: "几百人", p: "jǐ bǎi rén"},
                    {w: "一起", p: "yì qǐ"}, {w: "吹", p: "chuī"}, "，", {w: "声音", p: "shēng yīn"},
                    {w: "混在", p: "hùn zài"}, {w: "一起", p: "yì qǐ"}, "，", {w: "南郭先生", p: "nán guō xiān sheng"},
                    {w: "只要", p: "zhǐ yào"}, {w: "假装", p: "jiǎ zhuāng"}, {w: "做", p: "zuò"},
                    {w: "动作", p: "dòng zuò"}, "，", {w: "国王", p: "guó wáng"},
                    {w: "根本", p: "gēn běn"}, {w: "听不出来", p: "tīng bù chū lái"}, "。"
                ],
                explanationEn: "The group of 300 people was the reason. With so many players, he just needed to pretend to blow and nobody would notice."
            },
            {
                textStructure: [{w: "因为", p: "yīn wèi"}, {w: "他", p: "tā"}, {w: "的", p: "de"}, {w: "吹竽", p: "chuī yú"}, {w: "技术", p: "jì shù"}, {w: "其实", p: "qí shí"}, {w: "非常好", p: "fēi cháng hǎo"}, "，", {w: "只是", p: "zhǐ shì"}, {w: "后来", p: "hòu lái"}, {w: "生病", p: "shēng bìng"}, {w: "了", p: "le"}],
                en: "Because he was actually very good but fell ill later.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "成语", p: "chéng yǔ"},
                    "“", {w: "滥竽充数", p: "làn yú chōng shù"}, "”", {w: "的", p: "de"},
                    {w: "核心", p: "hé xīn"}, {w: "就是", p: "jiù shì"}, {w: "指", p: "zhǐ"},
                    {w: "他", p: "tā"}, {w: "根本", p: "gēn běn"}, {w: "没有", p: "méi yǒu"},
                    {w: "真本事", p: "zhēn běn shi"}, "，", {w: "完全", p: "wán quán"},
                    {w: "是", p: "shì"}, {w: "假装", p: "jiǎ zhuāng"}, {w: "会", p: "huì"},
                    {w: "吹", p: "chuī"}, "。"
                ],
                explanationEn: "Incorrect. The idiom means he had no skill at all. He was just faking it from day one."
            },
            {
                textStructure: [{w: "因为", p: "yīn wèi"}, {w: "其他", p: "qí tā"}, {w: "乐师", p: "yuè shī"}, {w: "都", p: "dōu"}, {w: "收了", p: "shōu le"}, {w: "他", p: "tā"}, {w: "的", p: "de"}, {w: "钱", p: "qián"}, "，", {w: "主动", p: "zhǔ dòng"}, {w: "帮他", p: "bāng tā"}, {w: "打掩护", p: "dǎ yǎn hù"}],
                en: "Because other players took his money to help him hide.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "这是", p: "zhè shì"},
                    {w: "现代", p: "xiàn dài"}, {w: "职场", p: "zhí chǎng"}, {w: "潜规则", p: "qián guī zé"},
                    {w: "的", p: "de"}, {w: "凭空", p: "píng kōng"}, {w: "想象", p: "xiǎng xiàng"}, "，",
                    {w: "古代", p: "gǔ dài"}, {w: "文章", p: "wén zhāng"}, {w: "中", p: "zhōng"},
                    {w: "完全", p: "wán quán"}, {w: "没有", p: "méi yǒu"}, {w: "这种", p: "zhè zhǒng"},
                    {w: "利益", p: "lì yì"}, {w: "勾结", p: "gōu jié"}, "。"
                ],
                explanationEn: "Incorrect. This is a wild modern guess. There is no money cheating or corruption mentioned in the text."
            }
        ]
    },
    {
        id: 4,
        textStructure: [
            {w: "齐湣王", p: "qí mǐn wáng"}, {w: "继位", p: "jì wèi"}, {w: "后", p: "hòu"}, "，",
            {w: "南郭先生", p: "nán guō xiān sheng"}, {w: "为什么", p: "wèi shén me"}, "“", {w: "逃", p: "táo"}, "”", {w: "了", p: "le"}, "？",
            {w: "他", p: "tā"}, {w: "面临", p: "miàn lín"}, {w: "的", p: "de"},
            {w: "真正", p: "zhēn zhèng"}, {w: "危机", p: "wēi jī"}, {w: "是", p: "shì"}, "？"
        ],
        en: "Why did Mr. Nanguo run away after King Min became the ruler?",
        options: [
            {
                textStructure: [{w: "新国王", p: "xīn guó wáng"}, {w: "不喜欢", p: "bù xǐ huan"}, {w: "音乐", p: "yīn yuè"}, "，", {w: "要把", p: "yào bǎ"}, {w: "所有", p: "suǒ yǒu"}, {w: "乐师", p: "yuè shī"}, {w: "全部", p: "quán bù"}, {w: "关起来", p: "guān qǐ lái"}],
                en: "The new king hated music and wanted to jail all players.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "新国王", p: "xīn guó wáng"},
                    {w: "同样", p: "tóng yàng"}, {w: "喜欢", p: "xǐ huan"}, {w: "听竽", p: "tīng yú"}, "，",
                    {w: "只是", p: "zhǐ shì"}, {w: "他", p: "tā"}, {w: "听音", p: "tīng yīn"},
                    {w: "乐的", p: "yuè de"}, {w: "方式", p: "fāng shì"}, {w: "改变", p: "gǎi biàn"},
                    {w: "了", p: "le"}, "，", {w: "并不是", p: "bú shì shì"}, {w: "要", p: "yào"},
                    {w: "抓人", p: "zhuā rén"}, "。"
                ],
                explanationEn: "Incorrect. The new king also loved the music. He just wanted to listen to it in a different way."
            },
            {
                textStructure: [{w: "齐湣王", p: "qí mǐn wáng"}, {w: "好", p: "hào"}, "“", {w: "一一听之", p: "yī yī tīng zhī"}, "”，", {w: "每个人", p: "měi gè rén"}, {w: "都必须", p: "dōu bì xū"}, {w: "单独", p: "dān dú"}, {w: "轮流", p: "lún liú"}, {w: "听独奏", p: "tīng dú zòu"}, "，", {w: "他一吹", p: "tā yì chuī"}, {w: "就会", p: "jiù huì"}, {w: "当场", p: "dāng chǎng"}, {w: "露馅", p: "lù xiàn"}],
                en: "King Min wanted to listen to them one by one, and a solo performance would reveal his secret.",
                correct: true,
                explanationStructure: [
                    {w: "齐湣王", p: "qí mǐn wáng"}, {w: "喜欢", p: "xǐ huan"}, "“", {w: "一一听之", p: "yī yī tīng zhī"},
                    "”。", {w: "没有", p: "méi yǒu"}, {w: "了", p: "le"}, {w: "三百人", p: "sān bǎi rén"},
                    {w: "的", p: "de"}, {w: "掩护", p: "yǎn hù"}, "，", {w: "轮到", p: "lún dào"},
                    {w: "他", p: "tā"}, {w: "一个人", p: "yí gè rén"}, {w: "单独", p: "dān dú"},
                    {w: "吹奏", p: "chuī zòu"}, {w: "时", p: "shí"}, "，", {w: "他", p: "tā"},
                    {w: "不会", p: "bú huì"}, {w: "吹的", p: "chuī de"}, {w: "事实", p: "shì shí"},
                    {w: "就会", p: "jiù huì"}, {w: "立刻", p: "lì kè"}, {w: "曝光", p: "bào guāng"}, "，",
                    {w: "只能", p: "zhǐ néng"}, {w: "逃跑", p: "táo pǎo"}, "。"
                ],
                explanationEn: "King Min liked solo plays. Without the big group to hide him, his failure would be seen instantly, so he ran."
            },
            {
                textStructure: [{w: "因为", p: "yīn wèi"}, {w: "他", p: "tā"}, {w: "发了财", p: "fā le cái"}, "，", {w: "准备", p: "zhǔn bèi"}, {w: "告老还乡", p: "gào lǎo huán xiāng"}, {w: "买大房子", p: "mǎi dà fáng zi"}],
                en: "Because he became rich and wanted to retire.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "他", p: "tā"},
                    {w: "是因为", p: "shì yīn wèi"}, {w: "恐惧", p: "kǒng jù"}, {w: "混不下去", p: "hùn bú xià qù"},
                    "、", {w: "害怕", p: "hài pà"}, {w: "被", p: "bèi"}, {w: "惩罚", p: "chéng fá"},
                    {w: "才", p: "cái"}, {w: "被迫", p: "bèi pò"}, {w: "逃命", p: "táo mìng"},
                    {w: "的", p: "de"}, "，", {w: "并不是", p: "bú shì shì"}, {w: "光荣", p: "guāng róng"},
                    {w: "退休", p: "tuì xiū"}, "。"
                ],
                explanationEn: "Incorrect. He ran away because he was scared of being caught and punished, not because he was rich."
            },
            {
                textStructure: [{w: "因为", p: "yīn wèi"}, {w: "其他", p: "qí tā"}, {w: "乐师", p: "yuè shī"}, {w: "嫉妒", p: "jí dù"}, {w: "他", p: "tā"}, {w: "的", p: "de"}, {w: "待遇", p: "dài yù"}, "，", {w: "暗中", p: "àn zhōng"}, {w: "联合", p: "lián hé"}, {w: "起来", p: "qǐ lái"}, {w: "排挤他", p: "pái jǐ tā"}],
                en: "Because other musicians were jealous and pushed him out.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "排挤", p: "pái jǐ"},
                    {w: "说", p: "shuō"}, {w: "纯属", p: "chún shǔ"}, {w: "主观", p: "zhǔ guān"},
                    {w: "猜测", p: "cāi cè"}, "，", {w: "导致", p: "dǎo zhì"}, {w: "他", p: "tā"},
                    {w: "逃跑", p: "táo pǎo"}, {w: "的", p: "de"}, {w: "唯一", p: "wéi yī"},
                    {w: "物理", p: "wù lǐ"}, {w: "原因", p: "yīn wèn"}, {w: "就是", p: "jiù shì"},
                    {w: "新国王", p: "xīn guó wáng"}, {w: "的", p: "de"}, {w: "单独", p: "dān dú"},
                    {w: "考核", p: "kǎo hé"}, {w: "制度", p: "zhì dù"}, "。"
                ],
                explanationEn: "Incorrect. This is a guess. The only real reason he ran away was the king's new rule of solo testing."
            }
        ]
    },
    {
        id: 5,
        textStructure: [
            {w: "从", p: "cóng"}, "“", {w: "廪食", p: "lǐn sì"}, {w: "以", p: "yǐ"}, {w: "数百人", p: "shù bǎi rén"}, "”",
            {w: "到", p: "dào"}, "“", {w: "处士", p: "chǔ shì"}, {w: "逃", p: "táo"}, "”，",
            {w: "这个", p: "zhè gè"}, {w: "寓言", p: "yù yán"}, {w: "故事", p: "gù shǐ"},
            {w: "带给", p: "dài gěi"}, {w: "我们", p: "wǒ men"}, {w: "最", p: "zuì"},
            {w: "深刻", p: "shēn kè"}, {w: "的", p: "de"}, {w: "道理", p: "dào lǐ"}, {w: "是", p: "shì"}, "？"
        ],
        en: "What is the most important lesson we can learn from this story?",
        options: [
            {
                textStructure: [{w: "运气", p: "yùn qi"}, {w: "才是", p: "cái shì"}, {w: "最", p: "zuì"}, {w: "重要", p: "zhòng yào"}, {w: "的", p: "de"}, "，", {w: "运气", p: "yùn qi"}, {w: "好", p: "hǎo"}, {w: "就能", p: "jiù néng"}, {w: "一辈子", p: "yí bèi zi"}, {w: "不工作", p: "bù gōng zuò"}],
                en: "Luck is everything in life.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "南郭先生", p: "nán guō xiān sheng"},
                    {w: "最后", p: "zuì hòu"}, {w: "的", p: "de"}, {w: "逃跑", p: "táo pǎo"},
                    {w: "恰恰", p: "qià qià"}, {w: "说明", p: "shuō míng"}, "，", {w: "靠", p: "kào"},
                    {w: "运气", p: "yùn qi"}, {w: "和", p: "hé"}, {w: "作假", p: "zuò jiǎ"},
                    {w: "只能", p: "zhǐ néng"}, {w: "混", p: "hùn"}, {w: "一时", p: "yì shí"}, "，",
                    {w: "绝对", p: "jué duì"}, {w: "无法", p: "wú fǎ"}, {w: "混", p: "hùn"},
                    {w: "一辈子", p: "yí bèi zi"}, "。"
                ],
                explanationEn: "Incorrect. Mr. Nanguo's escape proves that cheating only works for a short time, not forever."
            },
            {
                textStructure: [{w: "做人", p: "zuò rén"}, {w: "必须", p: "bì xū"}, {w: "要有", p: "yào yǒu"}, {w: "真才实学", p: "zhēn cái shí xué"}, "，", {w: "光靠", p: "guāng kào"}, {w: "装模作样", p: "zhuāng mú zuò yàng"}, {w: "和", p: "hé"}, {w: "偷懒", p: "tōu lǎn"}, {w: "投机", p: "tóu jī"}, "，", {w: "最后", p: "zuì hòu"}, {w: "一定会", p: "yí dìng huì"}, {w: "原形毕露", p: "yuán xíng bì lù"}],
                en: "We must have real skills. Faking it and being lazy will always fail in the end.",
                correct: true,
                explanationStructure: [
                    {w: "真正", p: "zhēn zhèng"}, {w: "稳固", p: "wěn gù"}, {w: "的", p: "de"},
                    {w: "成果", p: "chéng guǒ"}, {w: "必须", p: "bì xū"}, {w: "靠", p: "kào"},
                    {w: "实力", p: "shí lì"}, "。", {w: "没有", p: "méi yǒu"}, {w: "真本事", p: "zhēn běn shi"},
                    "，", {w: "一旦", p: "yí dàn"}, {w: "面对", p: "miàn duì"}, {w: "真正", p: "zhēn zhèng"},
                    {w: "的", p: "de"}, {w: "单独", p: "dān dú"}, {w: "考核", p: "kǎo hé"}, "，",
                    {w: "谎言", p: "huǎng yán"}, {w: "在", p: "zài"}, {w: "事实", p: "shì shí"},
                    {w: "面前", p: "miàn qián"}, {w: "就会", p: "jiù huì"}, {w: "立刻", p: "lì kè"},
                    {w: "碎裂", p: "suì liè"}, "。"
                ],
                explanationEn: "Real success comes from real skills. Without ability, you will always fail when a real test comes."
            },
            {
                textStructure: [{w: "乐器", p: "yuè qì"}, {w: "太难", p: "tài nán"}, {w: "学了", p: "xué le"}, "，", {w: "我们", p: "wǒ men"}, {w: "应该", p: "yīng gāi"}, {w: "选择", p: "xuǎn zé"}, {w: "更", p: "gèng"}, {w: "简单", p: "jiǎn dān"}, {w: "的", p: "de"}, {w: "科目", p: "kē mù"}, {w: "来读", p: "lái dú"}],
                en: "Learning musical instruments is too hard.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "寓言", p: "yù yán"},
                    {w: "借", p: "jiè"}, {w: "吹竽", p: "chuī yú"}, {w: "来", p: "lái"},
                    {w: "讽刺", p: "fěng cì"}, {w: "社会", p: "shè huì"}, {w: "现象", p: "xiàn xiàng"}, "，",
                    {w: "而不是", p: "ér bú shì shì"}, {w: "讨论", p: "tǎo lùn"}, {w: "学", p: "xué"},
                    {w: "乐器", p: "yuè qì"}, {w: "的", p: "de"}, {w: "难易", p: "nán yì"},
                    {w: "程度", p: "chéng dù"}, "。"
                ],
                explanationEn: "Incorrect. The story uses music to teach a life lesson, it is not talking about how hard it is to play an instrument."
            },
            {
                textStructure: [{w: "当", p: "dāng"}, {w: "老板", p: "lǎo bǎn"}, {w: "换人", p: "huàn rén"}, {w: "的", p: "de"}, {w: "时候", p: "shí hou"}, "，", {w: "我们", p: "wǒ men"}, {w: "应该", p: "yīng gāi"}, {w: "提早", p: "tí zǎo"}, {w: "去和", p: "qù hé"}, {w: "新老板", p: "xīn lǎo bǎn"}, {w: "搞好", p: "gǎo hǎo"}, {w: "关系", p: "guān xi"}],
                en: "We should try to please the new boss quickly.",
                correct: false,
                explanationStructure: [
                    {w: "错误", p: "cuò wù"}, "。", {w: "搞好", p: "gǎo hǎo"},
                    {w: "关系", p: "guān xi"}, {w: "也", p: "yě"}, {w: "无法", p: "wú fǎ"},
                    {w: "弥补", p: "mí bǔ"}, "“", {w: "完全", p: "wán quán"}, {w: "不会", p: "bú huì"},
                    {w: "吹", p: "chuī"}, "”", {w: "的", p: "de"}, {w: "硬伤", p: "yìng shāng"}, "，",
                    {w: "实力", p: "shí lì"}, {w: "的", p: "de"}, {w: "缺失", p: "quē shī"},
                    {w: "才是", p: "cái shì"}, {w: "不可", p: "bù kě"}, {w: "逾越", p: "yú yuè"},
                    {w: "的", p: "de"}, {w: "红沟", p: "hóng gōu"}, "。"
                ],
                explanationEn: "Incorrect. Pleasing the boss cannot fix a total lack of skill. Real ability is what truly matters."
            }
        ]
    }
];
