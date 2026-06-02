const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，加点字“使”的正确含义是？",
        py: "xià liè jù zǐ zhōng jiā diǎn zì shǐ de zhèng què hán yì shì",
        en: "What is the correct meaning of the word 'shǐ' in the text?",
        options: [
            {
                text: "使用、利用工具",
                py: "shǐ yòng lì yòng gōng jù",
                en: "To use a tool.",
                correct: false,
                explanation: "错误。这是现代生活里的常见用法，不符合这里君王下达命令的语境。",
                explanationPy: "cuò wù zhè shì xiàn dài shēng huó lǐ de cháng yòng yòng fǎ bù fú hé zhè lǐ jūn wáng xià dá mìng lìng de yǔ jìng",
                explanationEn: "Incorrect. This is the modern meaning of using tools. It does not fit the king's order here."
            },
            {
                text: "命令、让、派遣",
                py: "mìng lìng ràng pài qiǎn",
                en: "To order, command, or ask someone to do something.",
                correct: true,
                explanation: "“齐宣王使人吹竽”指的是齐宣王命令、让乐师们为他吹奏乐器。",
                explanationPy: "qí xuān wáng shǐ rén chuī yú zhǐ de jiù shì qí xuān wáng mìng lìng ràng yuè shī mén wèi tā chuī zòu yuè qì",
                explanationEn: "King Xuan ordered the musicians to play the instrument for him."
            },
            {
                text: "使者、外交人员",
                py: "shǐ zhě wài jiāo rén yuán",
                en: "A messenger or diplomat.",
                correct: false,
                explanation: "错误。这里是动作（动词），用来表示君王的命令，不是指特定身份的名词。",
                explanationPy: "cuò wù zhè lǐ shì dòng zuò dòng cí yòng lái biǎo shì jūn wáng de mìng lìng bú shì zhǐ tè dìng shēn fèn de míng cí",
                explanationEn: "Incorrect. It is used as an action verb here for the king's order, not a noun for a person."
            },
            {
                text: "假使、如果",
                py: "jiǎ shǐ rú guǒ",
                en: "If / in case.",
                correct: false,
                explanation: "错误。这是表假设的连词用法，带入句中会导致前后文理不通。",
                explanationPy: "cuò wù zhè shì biǎo jiǎ shè de lián cí yòng fǎ dài rù jù zhōng huì dǎo zhì qián hòu wén lǐ bù tōng",
                explanationEn: "Incorrect. This is a conjunction meaning 'if', which breaks the grammar of the sentence completely."
            }
        ]
    },
    {
        id: 2,
        text: "文中句子“宣王说之”中的“说”字，在这里的正确读音和意思是什么？",
        py: "wén zhāng zhōng jù zǐ xuān wáng yuè zhī zhōng shuō zì zài zhè lǐ de zhèng què dú yīn hé yì si shì",
        en: "What is the correct pronunciation and meaning of 'shuō' in 'xuān wáng yuè zhī'?",
        options: [
            {
                text: "读作 shuō，指听了南郭先生说话很有道理",
                py: "dú zuò shuō zhǐ tīng le nán guō xiān sheng shuō huà hěn yǒu dào lǐ",
                en: "Pronounced 'shuō', meaning the king agreed with his words.",
                correct: false,
                explanation: "错误。南郭先生只是申请加入乐队，并没有发表长篇大论，这里的字意完全不对。",
                explanationPy: "cuò wù nán guō xiān sheng zhǐ shì shǐ qǐng jiā rù yuè duì bìng méi yǒu fā biǎo cháng piān dà lùn zhè lǐ de zì yì wán quán bú duì",
                explanationEn: "Incorrect. Mr. Nanguo only asked to join the band, he did not say much. This meaning is wrong."
            },
            {
                text: "读作 yuè，通假字，同“悦”，意思是喜欢、高兴",
                py: "dú zuò yuè tōng jiǎ zì tóng yuè yì si shì xǐ huān gāo xìng",
                en: "Pronounced 'yuè', same as '悦', meaning happy or pleased.",
                correct: true,
                explanation: "在古汉语中，“说”常常通假为“悦”。意思是齐宣王对他的加入感到很高兴、很喜欢他。",
                explanationPy: "zài gǔ hàn yǔ zhōng shuō cháng cháng tōng jiǎ wéi yuè yì si shì qí xuān wáng duì tā de jiā rù gǎn dào hěn gāo xìng hěn xǐ huān tā",
                explanationEn: "In ancient Chinese, this character often means happy or pleased. The king was happy with him."
            },
            {
                text: "读作 shuì，意思是去劝说、说服国王",
                py: "dú zuò shuì yì si shì qù quàn shuō shuō fú guó wáng",
                en: "Pronounced 'shuì', meaning to persuade the king.",
                correct: false,
                explanation: "错误。虽然有这个读音，但在句中它是主语“宣王”之后的感受，不可能变成南郭先生去说服国王。",
                explanationPy: "cuò wù suī rán yǒu zhè gè dú yīn dàn zài jù zhōng tā shì zhǔ yǔ xuān wáng zhī hòu de gǎn shòu bù kě néng biàn chéng nán guō xiān sheng qù shuō fú guó wáng",
                explanationEn: "Incorrect. Although it can be pronounced this way, it describes the king's feeling here, not an act of persuasion."
            },
            {
                text: "读作 tuō，意思是解脱、释放",
                py: "dú zuò tuō yì si shì jiě tuō shì fàng",
                en: "Pronounced 'tuō', meaning to escape or release.",
                correct: false,
                explanation: "错误。这是通“脱”的意思，完全不符合齐宣王听乐师加入时的心理表现。",
                explanationPy: "cuò wù zhè shì tōng tuō de yì si wán quán bù fú hé qí xuān wáng tīng yuè shī jiā rù shí de xīn lǐ biǎo xiàn",
                explanationEn: "Incorrect. This means to escape, which has nothing to do with the king's reaction to a new musician."
            }
        ]
    },
    {
        id: 3,
        text: "根据文章内容，南郭先生在齐宣王时期为什么能够一直混下去不被打穿？",
        py: "gēn jù wén zhāng nèi róng nán guō xiān sheng zài qí xuān wáng shí qī wèi shén me néng gòu yī zhí hùn xià qù bù bèi dǎ chuān",
        en: "Why could Mr. Nanguo hide his lack of skill during King Xuan's time?",
        options: [
            {
                text: "因为他是国王的亲戚，守卫不敢抓他",
                py: "yīn wèi tā shì guó wáng de qīn qī shǒu wèi bù gǎn zhuā tā",
                en: "Because he was a relative of the king.",
                correct: false,
                explanation: "错误。文中没有任何内容提及他是王亲国戚，他只是一个普通的无业游民。",
                explanationPy: "cuò wù wén zhāng zhōng méi yǒu rèn hé nèi róng tí jí tā shì wáng qīn guó qī tā zhǐ shì yī gè pǔ tōng de wú yè yóu mǐn",
                explanationEn: "Incorrect. The story does not say he was related to the king. He was just a normal guy."
            },
            {
                text: "因为齐宣王每次听音乐都喜欢三百人的大合奏，他可以夹在里面装模作样",
                py: "yīn wèi qí xuān wáng měi cì tīng yīn lè dōu xǐ huān sān bǎi rén de dà hé zòu tā kě yǐ jiá zài lǐ miàn zhuāng mó zuò yàng",
                en: "Because King Xuan liked 300 people playing together, so he could pretend inside the big group.",
                correct: true,
                explanation: "“必三百人”大合奏是关键。几百人一起吹，声音混在一起，南郭先生只要假装做动作，国王根本听不出来。",
                explanationPy: "bì sān bǎi rén dà hé zòu shì guān jiàn jǐ bǎi rén yī qǐ chuī shēng yīn hùn zài yī qǐ nán guō xiān sheng zhǐ yào jiǎ zhuāng zuò dòng zuò guó wáng gēn běn tīng bù chū lái",
                explanationEn: "The group of 300 people was the reason. With so many players, he just needed to pretend to blow and nobody would notice."
            },
            {
                text: "因为他的吹竽技术其实非常好，只是后来生病了",
                py: "yīn wèi tā de chuī yú jì shù qí shí fēi cháng hǎo zhǐ shì hòu lái shēng bìng le",
                en: "Because he was actually very good but fell ill later.",
                correct: false,
                explanation: "错误。成语“滥竽充数”的核心就是指他根本没有真本事，完全是假装会吹。",
                explanationPy: "cuò wù chéng yǔ làn yú chōng shù de hé xīn jiù shì zhǐ tā gēn běn méi yǒu zhēn běn shì wán quán shì jiǎ zhuāng huì chuī",
                explanationEn: "Incorrect. The idiom means he had no skill at all. He was just faking it from day one."
            },
            {
                text: "因为其他乐师都收了他的钱，主动帮他打掩护",
                py: "yīn wèi qí tā yuè shī dōu shōu le tā de qián zhǔ dòng bāng tā dǎ yǎn hù",
                en: "Because other players took his money to help him hide.",
                correct: false,
                explanation: "错误。这是现代职场潜规则的凭空想象，古代文言文中完全没有这种利益勾结。",
                explanationPy: "cuò wù zhè shì xiàn dài zhí chǎng qián guī zé de píng kōng xiǎng xiàng gǔ dài wén yán wén zhōng wán quán méi yǒu zhè zhǒng lì yì gōu jié",
                explanationEn: "Incorrect. This is a wild modern guess. There is no money cheating or corruption mentioned in the text."
            }
        ]
    },
    {
        id: 4,
        text: "齐湣王继位后，南郭先生为什么“逃”了？他面临的真正危机是？",
        py: "qí mǐn wáng jì wèi hòu nán guō xiān sheng wèi shén me táo le tā miàn lín de zhēn zhèng wēi jī shì",
        en: "Why did Mr. Nanguo run away after King Min became the ruler?",
        options: [
            {
                text: "新国王不喜欢音乐，要把所有乐师全部关起来",
                py: "xīn guó wáng bù xǐ huān yīn lè yào bǎ suǒ yǒu yuè shī quán bù guān qǐ lái",
                en: "The new king hated music and wanted to jail all players.",
                correct: false,
                explanation: "错误。新国王同样喜欢听竽，只是他听音乐的方式改变了，并不是要抓人。",
                explanationPy: "cuò wù xīn guó wáng tóng yàng xǐ huān tīng yú zhǐ shì tā tīng yīn lè de fāng shì gǎi biàn le bìng bú shì yào zhuā rén",
                explanationEn: "Incorrect. The new king also loved the music. He just wanted to listen to it in a different way."
            },
            {
                text: "齐湣王好“一一听之”，每个人都必须单独轮流听独奏，他一吹就会当场露馅",
                py: "qí mǐn wáng hào yī yī tīng zhī měi gè rén dōu bì xū dān dú lún liú tīng dú zòu tā yī chuī jiù huì dāng chǎng lù xiàn",
                en: "King Min wanted to listen to them one by one, and a solo performance would reveal his secret.",
                correct: true,
                explanation: "齐湣王喜欢“一一听之”。没有了三百人的掩护，轮到他一个人单独吹奏时，他不会吹的事实会立刻曝光，只能逃跑。",
                explanationPy: "qí mǐn wáng xǐ huān yī yī tīng zhī méi yǒu le sān bǎi rén de yǎn hù lún dào tā yī gè rén dān dú chuī zòu shí tā bú huì chuī de shí shí huì lì kè bào guāng zhǐ néng táo pǎo",
                explanationEn: "King Min liked solo plays. Without the big group to hide him, his failure would be seen instantly, so he ran."
            },
            {
                text: "因为他发了财，准备告老还乡买大房子",
                py: "yīn wèi tā fā le cái zhǔn bèi gào lǎo huán xiāng mǎi dà fáng zǐ",
                en: "Because he became rich and wanted to retire.",
                correct: false,
                explanation: "错误。他是因为恐惧混不下去、害怕被惩罚才被迫逃命的，并不是光荣退休。",
                explanationPy: "cuò wù tā shì yīn wèi kǒng jù hùn bú xià qù hài pà bèi chéng fá cái bèi pò táo mìng de bìng bú shì guāng róng tuì xiū",
                explanationEn: "Incorrect. He ran away because he was scared of being caught and punished, not because he was rich."
            },
            {
                text: "因为别的乐师嫉妒他的待遇，暗中联合起来排挤他",
                py: "yīn wèi bié de yuè shī jí dù tā de dài yù àn zhōng lián hé qǐ lái pái jǐ tā",
                en: "Because other musicians were jealous and pushed him out.",
                correct: false,
                explanation: "错误。排挤说纯属主观猜测，导致他逃跑的唯一物理原因就是新国王的单独考核制度。",
                explanationPy: "cuò wù pái jǐ shuō chún shǔ zhǔ guān cāi cè dǎo zhì tā táo pǎo de wéi yī wù lǐ yuán yīn jiù shì xīn guó wáng de dān dú kǎo hé zhì dù",
                explanationEn: "Incorrect. This is a guess. The only real reason he ran away was the king's new rule of solo testing."
            }
        ]
    },
    {
        id: 5,
        text: "从“廪食以数百人”到“处士逃”，这个故事带给我们最深刻的道理是？",
        py: "cóng lǐn sì yǐ shù bǎi rén dào chǔ shì táo zhè gè gù shì dài gěi wǒ men zuì shēn kè de dào lǐ shì",
        en: "What is the most important lesson we can learn from this story?",
        options: [
            {
                text: "运气才是最重要的，运气好就能一辈子不工作",
                py: "yùn qì cái shì zuì zhòng yào de yùn qì hǎo jiù néng yī bèi zǐ bù gōng zuò",
                en: "Luck is everything in life.",
                correct: false,
                explanation: "错误。南郭先生最后的逃跑恰恰说明，靠运气和作假只能混一时，绝对无法混一辈子。",
                explanationPy: "cuò wù nán guō xiān sheng zuì hòu de táo pǎo qià qià shuō míng kào yùn qì hé zuò jiǎ zhǐ néng hùn yī shí jué duì wú fǎ hùn yī bèi zǐ",
                explanationEn: "Incorrect. Mr. Nanguo's escape proves that cheating only works for a short time, not forever."
            },
            {
                text: "做人必须要有真才实学，光靠装模作样和偷懒投机，最后一定会原形毕露",
                py: "zuò rén bì xū yào yǒu zhēn cái shí xué guāng kào zhuāng mó zuò yàng hé tōu lǎn tóu jī zuì hòu yī dìng huì yuán xíng bì lù",
                en: "We must have real skills. Faking it and being lazy will always fail in the end.",
                correct: true,
                explanation: "真正稳固的成果必须靠实力。没有真本事，一旦面对真正的单独考核，谎言在事实面前就会立刻碎裂。",
                explanationPy: "zhēn zhèng wěn gù de chéng guǒ bì xū kào shí lì méi yǒu zhēn běn shì yī dàn miàn duì zhēn zhèng de dān dú kǎo hé huǎng yán zài shí shí miàn qián jiù huì lì kè suì liè",
                explanationEn: "Real success comes from real skills. Without ability, you will always fail when a real test comes."
            },
            {
                text: "乐器太难学了，我们应该选择更简单的科目来读",
                py: "yuè qì tài nán xué le wǒ men yīng gāi xuǎn zé gèng jiǎn dān de kē mù lái dú",
                en: "Learning musical instruments is too hard.",
                correct: false,
                explanation: "错误。寓言借吹竽来讽刺社会现象，而不是讨论学乐器的难易程度。",
                explanationPy: "cuò wù yù yán jiè chuī yú lái fěng cì shè huì xiàn xiàng ér bú shì tǎo lùn xué yuè qì de nán yì chéng dù",
                explanationEn: "Incorrect. The story uses music to teach a life lesson, it is not talking about how hard it is to play an instrument."
            },
            {
                text: "当老板换人的时候，我们应该提早去和新老板搞好关系",
                py: "dāng lǎo bǎn huàn rén de shí hòu wǒ men yīng gāi tí zǎo qù hé xīn lǎo bǎn gǎo hǎo guān xì",
                en: "We should try to please the new boss quickly.",
                correct: false,
                explanation: "错误。搞好关系也无法弥补“完全不会吹”的硬伤，实力的缺失才是不可逾越的鸿沟。",
                explanationPy: "cuò wù gǎo hǎo guān xì yě wú fǎ mí bǔ wán quán bú huì chuī de yìng shāng shí lì de quē shī cái shì bù kě yú yuè de hóng gōu",
                explanationEn: "Incorrect. Pleasing the boss cannot fix a total lack of skill. Real ability is what truly matters."
            }
        ]
    }
];
