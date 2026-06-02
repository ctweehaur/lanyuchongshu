const quizQuestions = [
    {
        id: 1,
        textStructure: [
            {w:"下",p:"xià"},{w:"列",p:"liè"},{w:"句",p:"jù"},{w:"子",p:"zǐ"},{w:"中",p:"zhōng"},"，",
            {w:"加",p:"jiā"},{w:"点",p:"diǎn"},{w:"字",p:"zì"},"“",{w:"使",p:"shǐ"},"”",
            {w:"的",p:"de"},{w:"正",p:"zhèng"},{w:"确",p:"què"},{w:"含",p:"hán"},{w:"义",p:"yì"},{w:"是",p:"shì"},"？"
        ],
        en: "What is the correct meaning of the word 'shǐ' in the text?",
        options: [
            {
                textStructure: [{w:"使",p:"shǐ"},{w:"用",p:"yòng"},{w:"、",p:""},{w:"利",p:"lì"},{w:"用",p:"yòng"},{w:"工",p:"gōng"},{w:"具",p:"jù"}],
                en: "To use a tool.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"这",p:"zhè"},{w:"是",p:"shì"},
                    {w:"现",p:"xiàn"},{w:"代",p:"dài"},{w:"生",p:"shēng"},{w:"活",p:"huó"},{w:"里",p:"lǐ"},
                    {w:"的",p:"de"},{w:"常",p:"cháng"},{w:"见",p:"jiàn"},{w:"用",p:"yòng"},{w:"法",p:"fǎ"},{w:"，",p:""},
                    {w:"不",p:"bù"},{w:"符",p:"fú"},{w:"合",p:"hé"},{w:"这",p:"zhè"},{w:"里",p:"lǐ"},
                    {w:"君",p:"jūn"},{w:"王",p:"wáng"},{w:"下",p:"xià"},{w:"达",p:"dá"},{w:"命",p:"mìng"},
                    {w:"令",p:"lìng"},{w:"的",p:"de"},{w:"语",p:"yǔ"},{w:"境",p:"jìng"},{w:"。",p:""}
                ],
                explanationEn: "Incorrect. This is the modern meaning of using tools. It does not fit the king's order here."
            },
            {
                textStructure: [{w:"命",p:"mìng"},{w:"令",p:"lìng"},{w:"、",p:""},{w:"让",p:"ràng"},{w:"、",p:""},{w:"派",p:"pài"},{w:"遣",p:"qiǎn"}],
                en: "To order, command, or ask someone to do something.",
                correct: true,
                explanationStructure: [
                    "“",{w:"齐",p:"qí"},{w:"宣",p:"xuān"},{w:"王",p:"wáng"},{w:"使",p:"shǐ"},{w:"人",p:"rén"},
                    {w:"吹",p:"chuī"},{w:"竽",p:"yú"},"”",{w:"指",p:"zhǐ"},{w:"的",p:"de"},
                    {w:"是",p:"shì"},{w:"齐",p:"qí"},{w:"宣",p:"xuān"},{w:"王",p:"wáng"},{w:"命",p:"mìng"},
                    {w:"令",p:"lìng"},{w:"、",p:""},{w:"让",p:"ràng"},{w:"乐",p:"yuè"},{w:"师",p:"shī"},
                    {w:"们",p:"mén"},{w:"为",p:"wèi"},{w:"他",p:"tā"},{w:"吹",p:"chuī"},{w:"奏",p:"zòu"},
                    {w:"乐",p:"yuè"},{w:"器",p:"qì"},{w:"。",p:""}
                ],
                explanationEn: "King Xuan ordered the musicians to play the instrument for him."
            },
            {
                textStructure: [{w:"使",p:"shǐ"},{w:"者",p:"zhě"},{w:"、",p:""},{w:"外",p:"wài"},{w:"交",p:"jiāo"},{w:"人",p:"rén"},{w:"员",p:"yuán"}],
                en: "A messenger or diplomat.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"这",p:"zhè"},{w:"里",p:"lǐ"},
                    {w:"是",p:"shì"},{w:"动",p:"dòng"},{w:"作",p:"zuò"},"（",{w:"动",p:"dòng"},
                    {w:"词",p:"cí"},"），",{w:"用",p:"yòng"},{w:"来",p:"lái"},{w:"表",p:"biǎo"},
                    {w:"示",p:"shì"},{w:"君",p:"jūn"},{w:"王",p:"wáng"},{w:"的",p:"de"},{w:"命",p:"mìng"},
                    {w:"令",p:"lìng"},{w:"，",p:""},{w:"不",p:"bù"},{w:"是",p:"shì"},{w:"指",p:"zhǐ"},
                    {w:"特",p:"tè"},{w:"定",p:"dìng"},{w:"身",p:"shēn"},{w:"份",p:"fèn"},{w:"络",p:"de"},
                    {w:"名",p:"míng"},{w:"词",p:"cí"},{w:"。",p:""}
                ],
                explanationEn: "Incorrect. It is used as an action verb here for the king's order, not a noun for a person."
            },
            {
                textStructure: [{w:"假",p:"jiǎ"},{w:"使",p:"shǐ"},{w:"、",p:""},{w:"如",p:"rú"},{w:"果",p:"guǒ"}],
                en: "If / in case.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"这",p:"zhè"},{w:"是",p:"shì"},
                    {w:"表",p:"biǎo"},{w:"假",p:"jiǎ"},{w:"设",p:"shè"},{w:"的",p:"de"},{w:"连",p:"lián"},
                    {w:"词",p:"cí"},{w:"用",p:"yòng"},{w:"法",p:"fǎ"},{w:"，",p:""},{w:"带",p:"dài"},
                    {w:"入",p:"rù"},{w:"句",p:"jù"},{w:"中",p:"zhōng"},{w:"会",p:"huì"},{w:"导",p:"dǎo"},
                    {w:"致",p:"zhì"},{w:"前",p:"qián"},{w:"后",p:"hòu"},{w:"文",p:"wén"},{w:"理",p:"lǐ"},
                    {w:"不",p:"bù"},{w:"通",p:"tōng"},{w:"。",p:""}
                ],
                explanationEn: "Incorrect. This is a conjunction meaning 'if', which breaks the grammar of the sentence completely."
            }
        ]
    },
    {
        id: 2,
        textStructure: [
            {w:"文",p:"wén"},{w:"中",p:"zhōng"},{w:"句",p:"jù"},{w:"子",p:"zǐ"},"“",
            {w:"宣",p:"xuān"},{w:"王",p:"wáng"},{w:"说",p:"yuè"},{w:"之",p:"zhī"},"”",
            {w:"中",p:"zhōng"},{w:"的",p:"de"},"“",{w:"说",p:"shuō"},"”",{w:"字",p:"zì"},"，",
            {w:"在",p:"zài"},{w:"这",p:"zhè"},{w:"里",p:"lǐ"},{w:"的",p:"de"},
            {w:"正",p:"zhèng"},{w:"确",p:"què"},{w:"读",p:"dú"},{w:"音",p:"yīn"},{w:"和",p:"hé"},
            {w:"意",p:"yì"},{w:"思",p:"si"},{w:"是",p:"shì"},{w:"什",p:"shén"},{w:"么",p:"me"},{w:"？"
        ],
        en: "What is the correct pronunciation and meaning of 'shuō' in 'xuān wáng yuè zhī'?",
        options: [
            {
                textStructure: [{w:"读",p:"dú"},{w:"作",p:"zuò"}," shuō，",{w:"指",p:"zhǐ"},{w:"听",p:"tīng"},{w:"了",p:"le"},{w:"南",p:"nán"},{w:"郭",p:"guō"},{w:"先",p:"xiān"},{w:"生",p:"shēng"},{w:"说",p:"shuō"},{w:"话",p:"huà"},{w:"很",p:"hěn"},{w:"有",p:"yǒu"},{w:"道",p:"dào"},{w:"理",p:"lǐ"}],
                en: "Pronounced 'shuō', meaning the king agreed with his words.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"南",p:"nán"},{w:"郭",p:"guō"},
                    {w:"先",p:"xiān"},{w:"生",p:"shēng"},{w:"只",p:"zhǐ"},{w:"是",p:"shì"},{w:"申",p:"shēn"},
                    {w:"请",p:"qǐng"},{w:"加",p:"jiā"},{w:"入",p:"rù"},{w:"乐",p:"yuè"},{w:"队",p:"duì"},"，",
                    {w:"并",p:"bìng"},{w:"没",p:"méi"},{w:"有",p:"yǒu"},{w:"发",p:"fā"},{w:"表",p:"biǎo"},
                    {w:"长",p:"cháng"},{w:"篇",p:"piān"},{w:"大",p:"dà"},{w:"论",p:"lùn"},"，",
                    {w:"这",p:"zhè"},{w:"里",p:"lǐ"},{w:"的",p:"de"},{w:"字",p:"zì"},{w:"意",p:"yì"},
                    {w:"完",p:"wán"},{w:"全",p:"quán"},{w:"不",p:"bù"},{w:"对",p:"duì"},{w:"。",p:""}
                ],
                explanationEn: "Incorrect. Mr. Nanguo only asked to join the band, he did not say much. This meaning is wrong."
            },
            {
                textStructure: [{w:"读",p:"dú"},{w:"作",p:"zuò"}," yuè，",{w:"通",p:"tōng"},{w:"假",p:"jiǎ"},{w:"字",p:"zì"},"，",{w:"同",p:"tóng"},"“",{w:"悦",p:"yuè"},"”，",{w:"意",p:"yì"},{w:"思",p:"si"},{w:"是",p:"shì"},{w:"喜",p:"xǐ"},{w:"欢",p:"huān"},{w:"、",p:""},{w:"高",p:"gāo"},{w:"兴",p:"xìng"}],
                en: "Pronounced 'yuè', same as '悦', meaning happy or pleased.",
                correct: true,
                explanationStructure: [
                    {w:"在",p:"zài"},{w:"古",p:"gǔ"},{w:"汉",p:"hàn"},{w:"语",p:"yǔ"},{w:"中",p:"zhōng"},"，",
                    "“",{w:"说",p:"shuō"},"”",{w:"常",p:"cháng"},{w:"常",p:"cháng"},{w:"通",p:"tōng"},
                    {w:"假",p:"jiǎ"},{w:"为",p:"wéi"},"“",{w:"悦",p:"yuè"},"”。",
                    {w:"意",p:"yì"},{w:"思",p:"si"},{w:"是",p:"shì"},{w:"齐",p:"qí"},{w:"宣",p:"xuān"},
                    {w:"王",p:"wáng"},{w:"对",p:"duì"},{w:"他",p:"tā"},{w:"的",p:"de"},{w:"加",p:"jiā"},
                    {w:"入",p:"rù"},{w:"感",p:"gǎn"},{w:"到",p:"dào"},{w:"很",p:"hěn"},{w:"高",p:"gāo"},
                    {w:"兴",p:"xìng"},{w:"、",p:""},{w:"很",p:"hěn"},{w:"喜",p:"xǐ"},{w:"欢",p:"huān"},
                    {w:"他",p:"tā"},{w:"。",p:""}
                ],
                explanationEn: "In ancient Chinese, this character often means happy or pleased. The king was happy with him."
            },
            {
                textStructure: [{w:"读",p:"dú"},{w:"作",p:"zuò"}," shuì，",{w:"意",p:"yì"},{w:"思",p:"si"},{w:"是",p:"shì"},{w:"去",p:"qù"},{w:"劝",p:"quàn"},{w:"说",p:"shuō"},{w:"、",p:""},{w:"说",p:"shuō"},{w:"服",p:"fú"},{w:"国",p:"guó"},{w:"王",p:"wáng"}],
                en: "Pronounced 'shuì', meaning to persuade the king.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"虽",p:"suī"},{w:"然",p:"rán"},
                    {w:"有",p:"yǒu"},{w:"这",p:"zhè"},{w:"个",p:"gè"},{w:"读",p:"dú"},{w:"音",p:"yīn"},规格，
                    {w:"但",p:"dàn"},{w:"在",p:"zài"},{w:"句",p:"jù"},{w:"中",p:"zhōng"},{w:"它",p:"tā"},
                    {w:"是",p:"zhǔ"},{w:"语",p:"yǔ"},"“",{w:"宣",p:"xuān"},{w:"王",p:"wáng"},"”",
                    {w:"之",p:"zhī"},{w:"后",p:"hòu"},{w:"校",p:"de"},{w:"感",p:"gǎn"},{w:"受",p:"shòu"},"，",
                    {w:"不",p:"bù"},{w:"可",p:"kě"},{w:"能",p:"néng"},{w:"变",p:"biàn"},{w:"成",p:"chéng"},
                    {w:"南",p:"nán"},{w:"郭",p:"guō"},{w:"先",p:"xiān"},{w:"生",p:"shēng"},{w:"去",p:"qù"},
                    {w:"说",p:"shuō"},{w:"服",p:"fú"},{w:"国",p:"guó"},{w:"王",p:"wáng"},{w:"。",p:""}
                ],
                explanationEn: "Incorrect. Although it can be pronounced this way, it describes the king's feeling here, not an act of persuasion."
            },
            {
                textStructure: [{w:"读",p:"dú"},{w:"作",p:"zuò"}," tuō，",{w:"意",p:"yì"},{w:"思",p:"si"},{w:"是",p:"shì"},{w:"解",p:"jiě"},{w:"脱",p:"tuō"},{w:"、",p:""},{w:"释",p:"shì"},{w:"放",p:"fàng"}],
                en: "Pronounced 'tuō', meaning to escape or release.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"这",p:"zhè"},{w:"是",p:"shì"},
                    {w:"通",p:"tōng"},"“",{w:"脱",p:"tuō"},"”",{w:"的",p:"de"},{w:"意",p:"yì"},
                    {w:"思",p:"si"},{w:"，",p:""},{w:"完",p:"wán"},{w:"全",p:"quán"},{w:"不",p:"bù"},
                    {w:"符",p:"fú"},{w:"合",p:"hé"},{w:"齐",p:"qí"},{w:"宣",p:"xuān"},{w:"王",p:"wáng"},
                    {w:"听",p:"tīng"},{w:"乐",p:"yuè"},{w:"师",p:"shī"},{w:"加",p:"jiā"},{w:"入",p:"rù"},
                    {w:"时",p:"shí"},{w:"的",p:"de"},{w:"心",p:"xīn"},{w:"里",p:"lǐ"},{w:"表",p:"biǎo"},
                    {w:"现",p:"xiàn"},{w:"。",p:""}
                ],
                explanationEn: "Incorrect. This means to escape, which has nothing to do with the king's reaction to a new musician."
            }
        ]
    },
    {
        id: 3,
        textStructure: [
            {w:"根",p:"gēn"},{w:"据",p:"jù"},{w:"文",p:"wén"},{w:"章",p:"zhāng"},{w:"内",p:"nèi"},{w:"容",p:"róng"},{w:"，",p:""},
            {w:"南",p:"nán"},{w:"郭",p:"guō"},{w:"先",p:"xiān"},{w:"生",p:"shēng"},{w:"在",p:"zài"},{w:"齐",p:"qí"},{w:"宣",p:"xuān"},
            {w:"王",p:"wáng"},{w:"时",p:"shí"},{w:"期",p:"qī"},{w:"为",p:"wèi"},{w:"什",p:"shén"},{w:"么",p:"me"},
            {w:"能",p:"néng"},{w:"够",p:"gòu"},{w:"一",p:"yī"},{w:"直",p:"zhí"},{w:"混",p:"hùn"},{w:"下",p:"xià"},
            {w:"去",p:"qù"},{w:"不",p:"bù"},{w:"被",p:"bèi"},{w:"打",p:"dǎ"},{w:"穿",p:"chuān"},{w:"？",p:""}
        ],
        en: "Why could Mr. Nanguo hide his lack of skill during King Xuan's time?",
        options: [
            {
                textStructure: [{w:"稳",p:"wěn"},{w:"赢",p:"yíng"},{w:"！",p:""},{w:"因",p:"yīn"},{w:"为",p:"wéi"},{w:"他",p:"tā"},{w:"是",p:"shì"},{w:"国",p:"guó"},{w:"王",p:"wáng"},{w:"的",p:"de"},{w:"亲",p:"qīn"},{w:"戚",p:"qi"},{w:"，",p:""},{w:"守",p:"shǒu"},{w:"卫",p:"wèi"},{w:"不",p:"bù"},{w:"敢",p:"gǎn"},{w:"抓",p:"zhuā"},{w:"他",p:"tā"}],
                en: "Because he was a relative of the king.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"文",p:"wén"},{w:"中",p:"zhōng"},
                    {w:"没",p:"méi"},{w:"有",p:"yǒu"},{w:"任",p:"rèn"},{w:"何",p:"hé"},{w:"内",p:"nèi"},
                    {w:"容",p:"róng"},{w:"提",p:"tí"},{w:"及",p:"jí"},{w:"他",p:"tā"},{w:"是",p:"shì"},
                    {w:"王",p:"wáng"},{w:"亲",p:"qīn"},{w:"国",p:"guó"},{w:"戚",p:"qī"},{w:"，",p:""},
                    {w:"他",p:"tā"},{w:"只",p:"zhǐ"},{w:"是",p:"shì"},{w:"一",p:"yè"},{w:"个",p:"gè"},
                    {w:"普",p:"pǔ"},{w:"通",p:"tōng"},{w:"的",p:"de"},{w:"无",p:"wú"},{w:"业",p:"yè"},
                    {w:"游",p:"yóu"},{w:"民",p:"mín"},{w:"。",p:""}
                ],
                en: "Incorrect. The story does not say he was related to the king. He was just a normal guy."
            },
            {
                textStructure: [{w:"因",p:"yīn"},{w:"为",p:"wéi"},{w:"齐",p:"qí"},{w:"宣",p:"xuān"},{w:"王",p:"wáng"},{w:"每",p:"měi"},{w:"次",p:"cì"},{w:"听",p:"tīng"},{w:"音",p:"yīn"},{w:"乐",p:"yuè"},{w:"都",p:"dōu"},{w:"喜",p:"xǐ"},{w:"欢",p:"huān"},{w:"三",p:"sān"},{w:"百",p:"bǎi"},{w:"人",p:"rén"},{w:"的",p:"de"},{w:"大",p:"dào"},{w:"合",p:"hé"},{w:"奏",p:"zòu"},{w:"，",p:""},{w:"他",p:"tā"},{w:"可",p:"kě"},{w:"以",p:"yǐ"},{w:"夹",p:"jiá"},{w:"在",p:"zài"},{w:"里",p:"lǐ"},{w:"面",p:"miàn"},{w:"装",p:"zhuāng"},{w:"模",p:"mú"},{w:"作",p:"zuò"},{w:"样",p:"yàng"}],
                en: "Because King Xuan liked 300 people playing together, so he could pretend inside the big group.",
                correct: true,
                explanationStructure: [
                    "“",{w:"必",p:"bì"},{w:"三",p:"sān"},{w:"百",p:"bǎi"},{w:"人",p:"rén"},"”",
                    {w:"大",p:"dào"},{w:"合",p:"hé"},{w:"奏",p:"zòu"},{w:"是",p:"shì"},{w:"关",p:"guān"},
                    {w:"键",p:"jiàn"},{w:"。",p:""},{w:"几",p:"jǐ"},{w:"百",p:"bǎi"},{w:"人",p:"rén"},
                    {w:"一",p:"yī"},{w:"起",p:"qǐ"},{w:"吹",p:"chuī"},{w:"，",p:""},{w:"声",p:"shēng"},
                    {w:"音",p:"yīn"},{w:"混",p:"hùn"},{w:"在",p:"zài"},{w:"一",p:"yī"},{w:"起",p:"qǐ"},
                    {w:"，",p:""},{w:"南",p:"nán"},{w:"郭",p:"guō"},{w:"先",p:"xiān"},{w:"生",p:"shēng"},
                    {w:"只",p:"zhǐ"},{w:"要",p:"yào"},{w:"假",p:"jiǎ"},{w:"装",p:"zhuāng"},{w:"做",p:"zuò"},
                    {w:"动",p:"dòng"},{w:"作",p:"zuò"},{w:"，",p:""},{w:"国",p:"guó"},{w:"王",p:"wáng"},
                    {w:"根",p:"gēn"},{w:"本",p:"běn"},{w:"听",p:"tīng"},{w:"不",p:"bù"},{w:"出",p:"chū"},
                    {w:"来",p:"lái"},{w:"。",p:""}
                ],
                en: "The group of 300 people was the reason. With so many players, he just needed to pretend to blow and nobody would notice."
            },
            {
                textStructure: [{w:"因",p:"yīn"},{w:"为",p:"wéi"},{w:"他",p:"tā"},{w:"的",p:"de"},{w:"吹",p:"chuī"},{w:"竽",p:"yú"},{w:"技",p:"jì"},{w:"术",p:"shù"},{w:"其",p:"qí"},{w:"实",p:"shí"},{w:"非",p:"fēi"},{w:"常",p:"cháng"},{w:"好",p:"hǎo"},{w:"，",p:""},{w:"只",p:"zhǐ"},{w:"是",p:"shì"},{w:"后",p:"hòu"},{w:"来",p:"lái"},{w:"生",p:"shēng"},{w:"病",p:"bìng"},{w:"了",p:"le"}],
                en: "Because he was actually very good but fell ill later.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"成",p:"chéng"},{w:"语",p:"yǔ"},
                    "“",{w:"滥",p:"làn"},{w:"竽",p:"yú"},{w:"充",p:"chōng"},{w:"数",p:"shù"},
                    "”",{w:"的",p:"de"},{w:"核",p:"hé"},{w:"心",p:"xīn"},{w:"就",p:"jiù"},
                    {w:"是",p:"shì"},{w:"指",p:"zhǐ"},{w:"他",p:"tā"},{w:"根",p:"gēn"},{w:"本",p:"běn"},
                    {w:"没",p:"méi"},{w:"有",p:"yǒu"},{w:"真",p:"zhēn"},{w:"本",p:"běn"},{w:"事",p:"shì"},
                    {w:"，",p:""},{w:"完",p:"wán"},{w:"全",p:"quán"},{w:"是",p:"shì"},{w:"假",p:"jiǎ"},
                    {w:"装",p:"zhuāng"},{w:"会",p:"huì"},{w:"吹",p:"chuī"},{w:"。",p:""}
                ],
                en: "Incorrect. The idiom means he had no skill at all. He was just faking it from day one."
            },
            {
                textStructure: [{w:"因",p:"yīn"},{w:"为",p:"wéi"},{w:"其",p:"qí"},{w:"他",p:"tā"},{w:"乐",p:"yuè"},{w:"师",p:"shī"},{w:"都",p:"dō"},{w:"收",p:"shōu"},{w:"了",p:"le"},{w:"他",p:"tā"},{w:"的",p:"de"},{w:"钱",p:"qián"},{w:"，",p:""},{w:"主",p:"zhǔ"},{w:"动",p:"dòng"},{w:"帮",p:"bāng"},{w:"他",p:"tā"},{w:"打",p:"dǎ"},{w:"掩",p:"yǎn"},{w:"护",p:"hù"}],
                en: "Because other players took his money to help him hide.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"这",p:"zhè"},{w:"是",p:"shì"},
                    {w:"现",p:"xiàn"},{w:"代",p:"dài"},{w:"职",p:"zhí"},{w:"场",p:"chǎng"},{w:"潜",p:"qián"},
                    {w:"规",p:"guī"},{w:"则",p:"zé"},{w:"的",p:"de"},{w:"凭",p:"píng"},{w:"空",p:"kōng"},
                    {w:"想",p:"xiǎng"},{w:"象",p:"xiàng"},{w:"，",p:""},{w:"古",p:"gǔ"},{w:"代",p:"dài"},
                    {w:"文",p:"wén"},{w:"言",p:"yǐn"},{w:"文",p:"wén"},{w:"中",p:"zhōng"},{w:"完",p:"wán"},
                    {w:"全",p:"quán"},{w:"没",p:"méi"},{w:"有",p:"yǒu"},{w:"这",p:"zhè"},{w:"种",p:"zhǒng"},
                    {w:"利",p:"lì"},{w:"益",p:"yì"},{w:"勾",p:"gōu"},{w:"结",p:"jié"},{w:"。",p:""}
                ],
                en: "Incorrect. This is a wild modern guess. There is no money cheating or corruption mentioned in the text."
            }
        ]
    },
    {
        id: 4,
        textStructure: [
            {w:"齐",p:"qí"},{w:"湣",p:"mǐn"},{w:"王",p:"wáng"},{w:"继",p:"jì"},{w:"位",p:"wèi"},{w:"后",p:"hòu"},{w:"，",p:""},
            {w:"南",p:"nán"},{w:"郭",p:"guō"},{w:"先",p:"xiān"},{w:"生",p:"shēng"},{w:"为",p:"wèi"},{w:"什",p:"shén"},{w:"么",p:"me"},
            "“",{w:"逃",p:"táo"},"”",{w:"了",p:"le"},{w:"？",p:""},{w:"他",p:"tā"},{w:"面",p:"miàn"},
            {w:"临",p:"(lín)"},{w:"的",p:"de"},{w:"真",p:"zhēn"},{w:"正",p:"zhèng"},{w:"危",p:"wēi"},{w:"机",p:"jī"},{w:"是",p:"shì"},{w:"？",p:""}
        ],
        en: "Why did Mr. Nanguo run away after King Min became the ruler?",
        options: [
            {
                textStructure: [{w:"新",p:"xīn"},{w:"国",p:"guó"},{w:"王",p:"wáng"},{w:"不",p:"bù"},{w:"喜",p:"xǐ"},{w:"欢",p:"huān"},{w:"音",p:"yīn"},{w:"乐",p:"yuè"},{w:"，",p:""},{w:"要",p:"yào"},{w:"把",p:"bǎ"},{w:"所",p:"suǒ"},{w:"有",p:"yǒu"},{w:"乐",p:"yuè"},{w:"师",p:"shī"},{w:"全",p:"quán"},{w:"部",p:"bù"},{w:"关",p:"guān"},{w:"起",p:"qǐ"},{w:"来",p:"lái"}],
                en: "The new king hated music and wanted to jail all players.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"新",p:"xīn"},{w:"国",p:"guó"},
                    {w:"王",p:"wáng"},{w:"同",p:"tóng"},{w:"样",p:"yàng"},{w:"喜",p:"xǐ"},{w:"欢",p:"huān"},
                    {w:"听",p:"tīng"},{w:"竽",p:"yú"},{w:"，",p:""},{w:"只",p:"zhǐ"},{w:"是",p:"shì"},
                    {w:"他",p:"tā"},{w:"听",p:"tīng"},{w:"音",p:"yīn"},{w:"乐",p:"yuè"},{w:"的",p:"de"},
                    {w:"方",p:"fāng"},{w:"式",p:"shì"},{w:"改",p:"gǎi"},{w:"变",p:"biàn"},{w:"了",p:"le"},
                    {w:"，",p:""},{w:"并",p:"bìng"},{w:"不",p:"bù"},{w:"是",p:"shì"},{w:"要",p:"yào"},
                    {w:"抓",p:"zhuā"},{w:"人",p:"rén"},{w:"。",p:""}
                ],
                en: "Incorrect. The new king also loved the music. He just wanted to listen to it in a different way."
            },
            {
                textStructure: [{w:"齐",p:"qí"},{w:"湣",p:"mǐn"},{w:"王",p:"wáng"},{w:"好",p:"hào"},"“",{w:"一",p:"yī"},{w:"一",p:"yī"},{w:"听",p:"tīng"},{w:"之",p:"zhī"},"”，",{w:"每",p:"měi"},{w:"个",p:"gè"},{w:"人",p:"rén"},{w:"都",p:"dōu"},{w:"必",p:"bì"},{w:"须",p:"xū"},{w:"单",p:"dān"},{w:"独",p:"dú"},{w:"轮",p:"liú"},{w:"流",p:"liú"},{w:"听",p:"tīng"},{w:"独",p:"dú"},{w:"奏",p:"zòu"},{w:"，",p:""},{w:"他",p:"tā"},{w:"一",p:"yī"},{w:"吹",p:"chuī"},{w:"就",p:"jiù"},{w:"会",p:"huì"},{w:"当",p:"dāng"},{w:"场",p:"chǎng"},{w:"露",p:"lù"},{w:"馅",p:"xiàn"}],
                en: "King Min wanted to listen to them one by one, and a solo performance would reveal his secret.",
                correct: true,
                explanationStructure: [
                    {w:"齐",p:"qí"},{w:"湣",p:"mǐn"},{w:"王",p:"wáng"},{w:"喜",p:"xǐ"},{w:"欢",p:"huān"},
                    "“",{w:"一",p:"yī"},{w:"一",p:"yī"},{w:"听",p:"tīng"},{w:"之",p:"zhī"},
                    "”。",{w:"没",p:"méi"},{w:"有",p:"yǒu"},{w:"了",p:"le"},{w:"三",p:"sān"},
                    {w:"百",p:"bǎi"},{w:"人",p:"rén"},{w:"的",p:"de"},{w:"掩",p:"yǎn"},{w:"护",p:"hù"},
                    {w:"，",p:""},{w:"轮",p:"lún"},{w:"到",p:"dào"},{w:"他",p:"tā"},{w:"一",p:"yī"},
                    {w:"个",p:"gè"},{w:"人",p:"rén"},{w:"单",p:"dān"},{w:"独",p:"dú"},{w:"吹",p:"chuī"},
                    {w:"奏",p:"zòu"},{w:"时",p:"shí"},{w:"，",p:""},{w:"他",p:"tā"},{w:"不",p:"bù"},
                    {w:"会",p:"huì"},{w:"吹",p:"chuī"},{w:"的",p:"de"},{w:"实",p:"shí"},{w:"事",p:"shì"},
                    {w:"会",p:"huì"},{w:"立",p:"lì"},{w:"刻",p:"kè"},{w:"曝",p:"bào"},{w:"光",p:"guāng"},
                    {w:"，",p:""},{w:"只",p:"zhǐ"},{w:"能",p:"néng"},{w:"逃",p:"táo"},{w:"跑",p:"pǎo"},
                    {w:"。",p:""}
                ],
                en: "King Min liked solo plays. Without the big group to hide him, his failure would be seen instantly, so he ran."
            },
            {
                textStructure: [{w:"因",p:"yīn"},{w:"为",p:"wéi"},{w:"他",p:"tā"},{w:"发",p:"fā"},{w:"了",p:"le"},{w:"财",p:"cái"},{w:"，",p:""},{w:"准",p:"zhǔn"},{w:"备",p:"bèi"},{w:"告",p:"gào"},{w:"老",p:"lǎo"},{w:"还",p:"huán"},{w:"乡",p:"xiāng"},{w:"买",p:"mǎi"},{w:"大",p:"dà"},{w:"房",p:"fáng"},{w:"子",p:"zǐ"}],
                en: "Because he became rich and wanted to retire.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"他",p:"tā"},{w:"是",p:"shì"},
                    {w:"因",p:"yīn"},{w:"为",p:"wéi"},{w:"恐",p:"kǒng"},{w:"惧",p:"jù"},{w:"混",p:"hùn"},
                    {w:"不",p:"bù"},{w:"下",p:"xià"},{w:"去",p:"qù"},{w:"、",p:""},{w:"害",p:"hài"},
                    {w:"怕",p:"pà"},{w:"被",p:"bèi"},{w:"惩",p:"chéng"},{w:"罚",p:"fá"},{w:"才",p:"cái"},
                    {w:"被",p:"bèi"},{w:"迫",p:"pò"},{w:"逃",p:"táo"},{w:"命",p:"mìng"},{w:"的",p:"de"},
                    {w:"，",p:""},{w:"并",p:"bìng"},{w:"不",p:"bù"},{w:"是",p:"shì"},{w:"光",p:"guāng"},
                    {w:"荣",p:"róng"},{w:"退",p:"xiū"},{w:"休",p:"xiū"},{w:"。",p:""}
                ],
                en: "Incorrect. He ran away because he was scared of being caught and punished, not because he was rich."
            },
            {
                textStructure: [{w:"因",p:"yīn"},{w:"为",p:"wéi"},{w:"别",p:"bié"},{w:"的",p:"de"},{w:"乐",p:"yuè"},{w:"师",p:"shī"},{w:"嫉",p:"jí"},{w:"妒",p:"dù"},{w:"他",p:"tā"},{w:"的",p:"de"},{w:"带",p:"dài"},{w:"遇",p:"yù"},{w:"，",p:""},{w:"暗",p:"àn"},{w:"中",p:"zhōng"},{w:"联",p:"lián"},{w:"合",p:"hé"},{w:"起",p:"qǐ"},{w:"来",p:"lái"},{w:"排",p:"pái"},{w:"挤",p:"jǐ"},{w:"他",p:"tā"}],
                en: "Because other musicians were jealous and pushed him out.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"排",p:"pái"},{w:"挤",p:"jǐ"},
                    {w:"说",p:"shuō"},{w:"纯",p:"chún"},{w:"属",p:"shǔ"},{w:"主",p:"zhǔ"},{w:"观",p:"guān"},
                    {w:"猜",p:"cāi"},{w:"测",p:"cè"},{w:"，",p:""},{w:"导",p:"dǎo"},{w:"致",p:"zhì"},
                    {w:"他",p:"tā"},{w:"逃",p:"táo"},{w:"跑",p:"pǎo"},{w:"的",p:"de"},{w:"唯",p:"wéi"},
                    {w:"一",p:"yī"},{w:"物",p:"wù"},{w:"理",p:"lǐ"},{w:"原",p:"yuán"},{w:"因",p:"yīn"},
                    {w:"就",p:"jiù"},{w:"是",p:"shì"},{w:"新",p:"xīn"},{w:"国",p:"guó"},{w:"王",p:"wáng"},
                    {w:"的",p:"de"},{w:"单",p:"dān"},{w:"独",p:"dú"},{w:"考",p:"kǎo"},{w:"核",p:"hé"},
                    {w:"制",p:"zhì"},{w:"度",p:"dù"},{w:"。",p:""}
                ],
                en: "Incorrect. This is a guess. The only real reason he ran away was the king's new rule of solo testing."
            }
        ]
    },
    {
        id: 5,
        textStructure: [
            {w:"从",p:"cóng"},"“",{w:"廪",p:"lǐn"},{w:"食",p:"sì"},{w:"以",p:"yǐ"},{w:"数",p:"shù"},{w:"百",p:"bǎi"},{w:"人",p:"rén"},"”",
            {w:"到",p:"dào"},"“",{w:"处",p:"chǔ"},{w:"士",p:"shì"},{w:"逃",p:"táo"},"”，",
            {w:"这",p:"zhè"},{w:"个",p:"gè"},{w:"故",p:"gù"},{w:"事",p:"shì"},{w:"带",p:"dài"},{w:"给",p:"gěi"},
            {w:"我",p:"wǒ"},{w:"们",p:"mén"},{w:"最",p:"zuì"},{w:"深",p:"shēn"},{w:"刻",p:"kè"},{w:"的",p:"de"},
            {w:"道",p:"dào"},{w:"理",p:"lǐ"},{w:"是",p:"shì"},{w:"？"
        ],
        en: "What is the most important lesson we can learn from this story?",
        options: [
            {
                textStructure: [{w:"运",p:"yùn"},{w:"气",p:"qì"},{w:"才",p:"cái"},{w:"是",p:"shì"},{w:"最",p:"zhòng"},{w:"重",p:"zhòng"},{w:"要",p:"yào"},{w:"的",p:"de"},{w:"，",p:""},{w:"运",p:"yùn"},{w:"气",p:"qì"},{w:"好",p:"hǎo"},{w:"就",p:"jiù"},{w:"能",p:"néng"},{w:"一",p:"yī"},{w:"辈",p:"bèi"},{w:"子",p:"zǐ"},{w:"不",p:"bù"},{w:"工",p:"gōng"},{w:"作",p:"zuò"}],
                en: "Luck is everything in life.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"南",p:"nán"},{w:"郭",p:"guō"},
                    {w:"先",p:"xiān"},{w:"生",p:"shēng"},{w:"最",p:"zuì"},{w:"后",p:"hòu"},{w:"的",p:"de"},
                    {w:"逃",p:"táo"},{w:"跑",p:"pǎo"},{w:"恰",p:"qià"},{w:"恰",p:"qià"},{w:"说",p:"shuō"},
                    {w:"明",p:"míng"},{w:"，",p:""},{w:"靠",p:"kào"},{w:"运",p:"yùn"},{w:"气",p:"qì"},
                    {w:"和",p:"hé"},{w:"作",p:"zuò"},{w:"假",p:"jiǎ"},{w:"只",p:"zhǐ"},{w:"能",p:"néng"},
                    {w:"混",p:"hùn"},{w:"一",p:"yī"},{w:"时",p:"shí"},{w:"，",p:""},{w:"绝",p:"jué"},
                    {w:"对",p:"duì"},{w:"无",p:"wú"},{w:"法",p:"fǎ"},{w:"混",p:"hùn"},{w:"一",p:"yī"},
                    {w:"辈",p:"bèi"},{w:"子",p:"zǐ"},{w:"。",p:""}
                ],
                en: "Incorrect. Mr. Nanguo's escape proves that cheating only works for a short time, not forever."
            },
            {
                textStructure: [{w:"做",p:"zuò"},{w:"人",p:"rén"},{w:"必",p:"bì"},{w:"须",p:"xū"},{w:"要",p:"yào"},{w:"有",p:"yǒu"},{w:"真",p:"zhēn"},{w:"cái",p:"cái"},{w:"实",p:"shí"},{w:"学",p:"xué"},{w:"，",p:""},{w:"光",p:"guāng"},{w:"靠",p:"kào"},{w:"装",p:"zhuāng"},{w:"模",p:"mú"},{w:"作",p:"zuò"},{w:"样",p:"yàng"},{w:"和",p:"hé"},{w:"偷",p:"tōu"},{w:"懒",p:"lǎn"},{w:"投",p:"tóu"},{w:"机",p:"jī"},{w:"，",p:""},{w:"最",p:"zuì"},{w:"后",p:"hòu"},{w:"一",p:"yī"},{w:"定",p:"dìng"},{w:"会",p:"huì"},{w:"原",p:"yán"},{w:"形",p:"xíng"},{w:"毕",p:"bì"},{w:"露",p:"lù"}],
                en: "We must have real skills. Faking it and being lazy will always fail in the end.",
                correct: true,
                explanationStructure: [
                    {w:"真",p:"zhēn"},{w:"正",p:"zhèng"},{w:"稳",p:"wěn"},{w:"固",p:"gù"},{w:"的",p:"de"},
                    {w:"成",p:"chéng"},{w:"果",p:"guǒ"},{w:"必",p:"bì"},{w:"须",p:"xū"},{w:"靠",p:"kào"},
                    {w:"实",p:"shí"},{w:"力",p:"lì"},{w:"。",p:""},{w:"没",p:"méi"},{w:"有",p:"yǒu"},
                    {w:"真",p:"zhēn"},{w:"本",p:"běn"},{w:"事",p:"shì"},{w:"，",p:""},{w:"一",p:"yī"},
                    {w:"旦",p:"dàn"},{w:"面",p:"miàn"},{w:"对",p:"duì"},{w:"真",p:"zhēn"},{w:"正",p:"zhèng"},
                    {w:"的",p:"de"},{w:"单",p:"dān"},{w:"独",p:"dú"},{w:"考",p:"kǎo"},{w:"核",p:"hé"},
                    {w:"，",p:""},{w:"谎",p:"huǎng"},{w:"言",p:"yán"},{w:"在",p:"zài"},{w:"实",p:"shí"},
                    {w:"事",p:"shì"},{w:"面",p:"miàn"},{w:"前",p:"qián"},{w:"就",p:"jiù"},{w:"会",p:"huì"},
                    {w:"立",p:"lì"},{w:"刻",p:"kè"},{w:"碎",p:"suì"},{w:"裂",p:"liè"},{w:"。",p:""}
                ],
                en: "Real success comes from real skills. Without ability, you will always fail when a real test comes."
            },
            {
                textStructure: [{w:"乐",p:"yuè"},{w:"器",p:"qì"},{w:"太",p:"tài"},{w:"难",p:"nán"},{w:"学",p:"xué"},{w:"了",p:"le"},{w:"，",p:""},{w:"我",p:"wǒ"},{w:"们",p:"mén"},{w:"应",p:"yīng"},{w:"该",p:"gāi"},{w:"选",p:"xuǎn"},{w:"择",p:"zé"},{w:"更",p:"gèng"},{w:"简",p:"jiǎn"},{w:"单",p:"dān"},{w:"的",p:"de"},{w:"科",p:"kē"},{w:"目",p:"mù"},{w:"来",p:"lái"},{w:"读",p:"dú"}],
                en: "Learning musical instruments is too hard.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"寓",p:"yù"},{w:"言",p:"yán"},
                    {w:"借",p:"jiè"},{w:"吹",p:"chuī"},{w:"竽",p:"yú"},{w:"来",p:"lái"},{w:"讽",p:"fěng"},
                    {w:"刺",p:"cì"},{w:"社",p:"shè"},{w:"会",p:"huì"},{w:"现",p:"xiàn"},{w:"象",p:"xiàng"},
                    {w:"，",p:""},{w:"而",p:"ér"},{w:"不",p:"bù"},{w:"是",p:"shì"},{w:"讨",p:"tǎo"},
                    {w:"论",p:"lùn"},{w:"学",p:"xué"},{w:"乐",p:"yuè"},{w:"器",p:"qì"},{w:"的",p:"de"},
                    {w:"难",p:"nán"},{w:"易",p:"yì"},{w:"程",p:"chéng"},{w:"度",p:"dù"},{w:"。",p:""}
                ],
                en: "Incorrect. The story uses music to teach a life lesson, it is not talking about how hard it is to play an instrument."
            },
            {
                textStructure: [{w:"当",p:"dāng"},{w:"老",p:"lǎo"},{w:"板",p:"bǎn"},{w:"换",p:"huàn"},{w:"人",p:"rén"},{w:"的",p:"de"},{w:"时",p:"shí"},{w:"候",p:"hou"},{w:"，",p:""},{w:"我",p:"wǒ"},{w:"们",p:"mén"},{w:"应",p:"yīng"},{w:"该",p:"gāi"},{w:"提",p:"tí"},{w:"早",p:"zǎo"},{w:"去",p:"qù"},{w:"和",p:"hé"},{w:"新",p:"xīn"},{w:"老",p:"lǎo"},{w:"板",p:"bǎn"},{w:"搞",p:"gǎo"},{w:"好",p:"hǎo"},{w:"关",p:"guān"},{w:"系",p:"xì"}],
                en: "We should try to please the new boss quickly.",
                correct: false,
                explanationStructure: [
                    {w:"错",p:"cuò"},{w:"误",p:"wù"},{w:"。",p:""},{w:"搞",p:"gǎo"},{w:"好",p:"hǎo"},
                    {w:"关",p:"guān"},{w:"系",p:"xì"},{w:"也",p:"yě"},{w:"无",p:"wú"},{w:"法",p:"fǎ"},
                    {w:"弥",p:"mí"},{w:"补",p:"bǔ"},"“",{w:"完",p:"wán"},{w:"全",p:"quán"},
                    {w:"不",p:"bù"},{w:"会",p:"huì"},{w:"吹",p:"chuī"},"”",{w:"的",p:"de"},
                    {w:"硬",p:"yìng"},{w:"伤",p:"shāng"},{w:"，",p:""},{w:"实",p:"shí"},{w:"力",p:"lì"},
                    {w:"的",p:"de"},{w:"缺",p:"quē"},{w:"失",p:"shī"},{w:"才",p:"cái"},{w:"是",p:"shì"},
                    {w:"不",p:"bù"},{w:"可",p:"kě"},{w:"逾",p:"yú"},{w:"越",p:"yuè"},{w:"的",p:"de"},
                    {w:"红",p:"hóng"},{w:"沟",p:"gōu"},{w:"。",p:""}
                ],
                en: "Incorrect. Pleasing the boss cannot fix a total lack of skill. Real ability is what truly matters."
            }
        ]
    }
];
