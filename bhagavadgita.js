// Define Bhagavad Gita shlokas with meanings
const shlokas = {
        "1.1": {
            shloka: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय || 1 ||",
            meaning: "Dhritarashtra said: O Sanjaya, assembled in the holy land of Kurukshetra and desiring to fight, what did my sons and the sons of Pandu do?",
            explanation: "Dhritarashtra, blind king and father of the Kauravas, inquired from his minister Sanjaya about the activities of his sons (the Kauravas) and the sons of Pandu (the Pandavas), who were assembled at Kurukshetra for battle."
        },
        "1.2": {
            shloka: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् || 2 ||",
            meaning: "Sanjaya said: O King, upon seeing the Pandava army arrayed, King Duryodhana approached his teacher Drona and spoke the following words.",
            explanation: "Sanjaya reports to King Dhritarashtra that upon observing the organized formation of the Pandava army, King Duryodhana, the leader of the Kauravas, approaches his military teacher, Dronacharya, seeking counsel and expressing his observations."
        },
        "1.3": {
            shloka: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता || 3 ||",
            meaning: "Behold, O teacher, this mighty army of the sons of Pandu, arranged by the son of Drupada, your wise disciple.",
            explanation: "Duryodhana draws Dronacharya's attention to the formidable and well-organized army of the Pandavas, commanded by Dhrishtadyumna, the son of Drupada and Dronacharya's esteemed disciple."
        },
        "1.4": {
            shloka: "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः || 4 ||",
            meaning: "Here in this army, there are many heroic bowmen equal in fighting to Bhima and Arjuna; there are also great fighters like Yuyudhana, Virata, and Drupada, the Maharatha (great chariot-warrior).",
            explanation: "Duryodhana enumerates the formidable warriors in the Pandava army, comparing them to Bhima and Arjuna in combat prowess."
        },
        "1.5": {
            shloka: "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः || 5 ||",
            meaning: "Dhrishtaketu, Chekitana, the valiant king of Kasi, Purujit, Kuntibhoja, and Shaibya, the best among men;",
            explanation: "Duryodhana continues to name other brave leaders among the Pandava forces, acknowledging their exceptional valor and skill."
        },
        "1.6": {
            shloka: "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् | सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः || 6 ||",
            meaning: "And also, there are the mighty Yudhamanyu, the very powerful Uttamauja, the son of Subhadra (Abhimanyu), and the sons of Draupadi, all great chariot-warriors.",
            explanation: "Duryodhana further lists prominent heroes in the Pandava army, including Abhimanyu, the valiant son of Arjuna and Subhadra, and the sons of Draupadi, who excel in chariot warfare."
        },
        "1.7": {
            shloka: "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम | नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते || 7 ||",
            meaning: "But for your information, O best of the brahmanas, let me tell you about the captains who are especially qualified to lead my military force.",
            explanation: "Duryodhana proceeds to highlight to Dronacharya the distinguished commanders in his own army who possess exceptional leadership qualities."
        },
        "1.8": {
            shloka: "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः | अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च || 8 ||",
            meaning: "There are personalities like yourself, Bhishma, Karna, Kripa, Ashvatthama, Vikarna, and the son of Somadatta (Bhurishrava), who are always victorious in battle.",
            explanation: "Duryodhana mentions revered warriors such as Bhishma, Karna, Kripa, Ashvatthama, Vikarna, and Bhurishrava, emphasizing their unparalleled skills and track record of success in combat."
        },
        "1.9": {
            shloka: "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः | नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः || 9 ||",
            meaning: "There are many other heroes who are prepared to lay down their lives for my sake. They are well-versed in various weapons and are all skilled in the art of warfare.",
            explanation: "Duryodhana acknowledges numerous brave warriors in his army who are willing to sacrifice their lives for his cause. These warriors are proficient in diverse weaponry and are experienced in the tactics of warfare."
        },
        "1.10": {
            shloka: "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् | पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् || 10 ||",
            meaning: "Our strength, protected by Bhishma, is inadequate, whereas the strength of the Pandavas, protected by Bhima, is adequate.",
            explanation: "Duryodhana admits that their army's power, guarded by Bhishma, falls short compared to the strength of the Pandavas, fortified by Bhima."
        },
        "1.11": {
            shloka: "अयनेषु च सर्वेषु यथाभागमवस्थिताः | भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि || 11 ||",
            meaning: "Therefore, stationed in your respective positions at the entrances of the phalanxes, protect Bhishma alone with all your efforts.",
            explanation: "Duryodhana instructs his commanders to position themselves strategically at the frontline to guard Bhishma, recognizing his importance as the key defender of their army."
        },
        "1.12": {
            shloka: "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः | सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् || 12 ||",
            meaning: "Then, Bhishma, the grand old patriarch of the Kuru dynasty, roared like a lion and blew his conch loudly, inspiring great enthusiasm and strength.",
            explanation: "Bhishma, the respected elder and leader of the Kuru dynasty, motivated his troops with a powerful roar and the resounding blast of his conch shell, instilling valor and determination among his warriors."
        },
        "1.13": {
            shloka: "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः | सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् || 13 ||",
            meaning: "Then, conches, drums, bugles, trumpets, and horns suddenly blared forth, and the sound was tremendous.",
            explanation: "In response to Bhishma's call, a cacophony of conch shells, drums, bugles, trumpets, and horns was heard throughout the battlefield, creating a deafening roar that echoed far and wide."
        },
        "1.14": {
            shloka: "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ | माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः || 14 ||",
            meaning: "On the other side, both Krishna and Arjuna, seated in a grand chariot yoked with white horses, blew their divine conch shells.",
            explanation: "Meanwhile, on the Pandava side, Lord Krishna and Arjuna, positioned in a magnificent chariot drawn by white horses, sounded their celestial conch shells."
        },
        "1.15": {
            shloka: "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः | पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः || 15 ||",
            meaning: "Lord Krishna blew His conch shell called Panchajanya, and Arjuna blew his conch, Devadatta. Bhima, the performer of Herculean tasks, blew his mighty conch, Paundra.",
            explanation: "Krishna, also known as Hrishikesha, blew the Panchajanya conch, and Arjuna sounded Devadatta. Bhima, the powerful warrior, blew the Paundra conch, announcing their readiness for battle."
        },
        "1.16": {
            shloka: "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः | नकुलः सहदेवश्च सुघोषमणिपुष्पकौ || 16 ||",
            meaning: "King Yudhishthira, the son of Kunti, blew the Anantavijaya conch shell. Nakula and Sahadeva blew the Sughosha and Manipushpaka conches respectively.",
            explanation: "Yudhishthira, the eldest Pandava prince, sounded the Anantavijaya conch. Nakula and Sahadeva, his younger brothers, blew the Sughosha and Manipushpaka conches, adding to the clamor of the Pandava side."
        },
        "1.17": {
            shloka: "काश्यश्च परमेष्वासः शिखण्डी च महारथः | धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः || 17 ||",
            meaning: "The king of Kashi, the great archer Shikhandi, Dhrishtadyumna, Virata, and the invincible Satyaki,",
            explanation: "Various other notable warriors such as the king of Kashi, the skilled archer Shikhandi, Dhrishtadyumna, Virata, and the undefeated Satyaki, also blew their conch shells."
        },
        "1.18": {
            shloka: "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते | सौभद्रश्च महाबाहुः शंखान्दध्मुः पृथक् पृथक् || 18 ||",
            meaning: "Drupada, the sons of Draupadi, and the great-armed Subhadra's son (Abhimanyu), all blew their respective conch shells.",
            explanation: "King Drupada, the sons of Draupadi, and the mighty-armed Abhimanyu, son of Subhadra, also sounded their individual conch shells, adding to the uproar of the battlefield."
        },
        "1.19": {
            shloka: "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् | नभश्च पृथिवीं चैव तुमुलो व्यनुनादयन् || 19 ||",
            meaning: "That tumultuous sound echoed throughout the earth and sky, shattering the hearts of Dhritarashtra's sons.",
            explanation: "The resounding uproar reverberated across the heavens and the earth, instilling fear and anxiety in the hearts of Dhritarashtra's sons, the Kauravas."
        },
        "1.20": {
            shloka: "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान् कपिध्वजः | प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः || 20 ||",
            meaning: "Then, seeing Dhritarashtra's men arrayed for battle and the imminent exchange of missiles about to begin, Arjuna, the wielder of the Gandiva bow, took up his bow and prepared to fight.",
            explanation: "Observing the Kauravas ready for combat and the commencement of the exchange of weapons, Arjuna, equipped with his divine bow Gandiva, readied himself for battle."
        },
        "1.21": {
            shloka: "अर्जुन उवाच | सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत || 21 ||",
            meaning: "Arjuna said: O Achyuta, please position my chariot between the two armies.",
            explanation: "Arjuna, addressing Lord Krishna as Achyuta (the infallible one), requests Him to place their chariot in the middle of the battlefield, between the two opposing armies."
        },
        "1.22": {
            shloka: "यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् | कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे || 22 ||",
            meaning: "So that I may observe those present here who are ready to fight and with whom I must contend in this great trial of arms.",
            explanation: "Arjuna desires to carefully survey the warriors gathered on both sides, seeking to identify those against whom he will have to fight in the imminent battle."
        },
        "1.23": {
            shloka: "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः | धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः || 23 ||",
            meaning: "Let me see those who have come here to fight, wishing to please the evil-minded son of Dhritarashtra.",
            explanation: "Arjuna intends to identify those warriors assembled to support Duryodhana, driven by the misguided loyalty to the unrighteous intentions of Dhritarashtra's son."
        },
        "1.24": {
            shloka: "सञ्जय उवाच | एवमुक्तो हृषीकेशो गुडाकेशेन भारत | सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् || 24 ||",
            meaning: "Sanjaya said: O descendant of Bharata, having thus been addressed by Arjuna, Lord Krishna positioned their splendid chariot in the middle of the two armies.",
            explanation: "Sanjaya narrates how Lord Krishna, known as Hrishikesha (the master of the senses), fulfilling Arjuna's request, placed their magnificent chariot in the center of the battlefield between the two armies."
        },
        "1.25": {
            shloka: "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् | उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति || 25 ||",
            meaning: "In front of Bhishma, Drona, and all the rulers of the earth, Lord Krishna said: O Arjuna, behold these Kurus assembled here.",
            explanation: "Krishna directs Arjuna's attention to the prominent figures on the Kaurava side, including Bhishma, Drona, and other respected rulers, urging Arjuna to observe the assembled Kurus."
        },
        "1.26": {
            shloka: "तत्रापश्यत्स्थितान् पार्थः पितृनथ पितामहान् | आचार्यान्मातुलान्भ्रातृन्पुत्रान्पौत्रान्सखींस्तथा || 26 ||",
            meaning: "There Arjuna could see, within the armies of both parties, his fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, friends, and also his father-in-law and well-wishers.",
            explanation: "Arjuna perceives his own relatives, elders, teachers, and friends arrayed on both sides of the battlefield—fathers, grandfathers, maternal uncles, brothers, sons, grandsons, friends, and even his father-in-law and other well-wishers."
        },
        "1.27": {
            shloka: "श्वशुरान् सुहृदश्चैव सेनयोरुभयोरपि | तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् || 27 ||",
            meaning: "When the son of Kunti, Arjuna, saw all these different grades of friends and relatives, he became overwhelmed with compassion and spoke thus sorrowfully.",
            explanation: "Upon seeing his beloved friends and relatives prepared to engage in battle, Arjuna is filled with profound compassion and grief, setting the stage for his dialogue with Lord Krishna."
        },
        "1.28": {
            shloka: "अर्जुन उवाच | दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् | सीदन्ति मम गात्राणि मुखं च परिशुष्यति || 28 ||",
            meaning: "Arjuna said: O Krishna, seeing my own kinsmen standing arrayed eager to fight, my limbs fail me and my mouth becomes dry.",
            explanation: "Arjuna describes to Krishna the emotional turmoil he experiences upon witnessing his own relatives, who are eager for battle, causing physical weakness and mental distress."
        },
        "1.29": {
            shloka: "वेपथुश्च शरीरे मे रोमहर्षश्च जायते | गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते || 29 ||",
            meaning: "My whole body shudders; my hair is standing on end. The Gandiva bow is slipping from my hand, and my skin is burning.",
            explanation: "Arjuna vividly describes the physical symptoms of his emotional distress—trembling, hair standing on end, bow slipping from his grip, and a sensation of burning skin—reflecting his inner turmoil."
        },
        "1.30": {
            shloka: "न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः | निमित्तानि च पश्यामि विपरीतानि केशव || 30 ||",
            meaning: "I am unable to stand here any longer. My mind is reeling, as if it were intoxicated. I see only causes of misfortune, O Krishna, killer of Keshi.",
            explanation: "Arjuna confesses his incapacity to continue standing calmly on the battlefield. His mind is in turmoil, seeing only ominous signs and foreseeing impending calamity, addressing Krishna as the slayer of the demon Keshi."
        },
        "1.31": {
            shloka: "निमित्तानि च पश्यामि विपरीतानि केशव | न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे || 31 ||",
            meaning: "O Krishna, I see adverse omens. I do not foresee any good from killing my own kinsmen in battle.",
            explanation: "Arjuna continues to express his distress, perceiving negative signs and foreseeing no beneficial outcome from engaging in combat that involves killing his own relatives."
        },
        "1.32": {
            shloka: "न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च | किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा || 32 ||",
            meaning: "O Govinda, I do not desire victory, kingdom, or happiness. What use is a kingdom or enjoyment or even life?",
            explanation: "Arjuna expresses his profound disillusionment, questioning the purpose of acquiring victory, kingship, or material pleasures if it means sacrificing righteousness and ethical values."
        },
        "1.33": {
            shloka: "येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च | त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च || 33 ||",
            meaning: "Those for whose sake we desire kingdoms, enjoyments, and pleasures stand here in battle, having renounced life and wealth.",
            explanation: "Arjuna acknowledges that those for whom he desires kingdom, wealth, and pleasures are present on the battlefield, ready to sacrifice their lives and possessions for the sake of victory."
        },
        "1.34": {
            shloka: "आचार्याः पितरः पुत्रास्तथैव च पितामहाः | मातुलाः श्वशुराः पौत्राः श्यालाः संबंधिनस्तथा || 34 ||",
            meaning: "Teachers, fathers, sons, grandfathers, maternal uncles, grandsons, fathers-in-law, grand-nephews, brothers-in-law, and other relatives are present here.",
            explanation: "Arjuna lists the various relationships represented among the combatants on both sides of the battlefield—teachers, fathers, sons, grandfathers, uncles, nephews, and other relatives."
        },
        "1.35": {
            shloka: "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन | अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते || 35 ||",
            meaning: "I do not wish to kill them, even though they might kill me, O Madhusudana (Krishna). What joy would we find in killing the sons of Dhritarashtra, who are our relatives?",
            explanation: "Arjuna expresses his reluctance to engage in battle and questions the purpose of gaining rulership over the three worlds by sacrificing the lives of his own kinsmen, including the sons of Dhritarashtra."
        },
        "1.36": {
            shloka: "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन | पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः || 36 ||",
            meaning: "O Janardana (Krishna), even if they, with minds possessed by greed, do not see the evil in the destruction of families, the betrayal of friends, and the sin of hostility towards relatives,",
            explanation: "Arjuna questions the possibility of deriving any happiness or satisfaction from killing the sons of Dhritarashtra, emphasizing the grave consequences of destroying families, betraying friends, and engaging in enmity towards relatives."
        },
        "1.37": {
            shloka: "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान् | स्वजनं हि कथं हत्वा सुखिनः स्याम माधव || 37 ||",
            meaning: "Therefore, O Madhava (Krishna), we should not kill our own kinsmen, the sons of Dhritarashtra. For how can we be happy by killing our own relatives?",
            explanation: "Arjuna concludes that it is not worthwhile to kill his own relatives, including the sons of Dhritarashtra, as it would only lead to misery and suffering, contradicting the principles of righteousness and familial duty."
        },
        "1.38": {
            shloka: "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः | कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् || 38 ||",
            meaning: "Even though they, whose minds are overpowered by greed, do not see the evil of destroying family, nor do they see the sin of treachery to friends.",
            explanation: "Arjuna points out that those on the opposing side, driven by greed and delusion, fail to recognize the moral wrongdoing of annihilating their own kin and betraying their allies."
        },
        "1.39": {
            shloka: "कथं न ज्ञेयं अस्माभिः पापादस्मान्निवर्तितुम् | कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन || 39 ||",
            meaning: "O Janardana (Krishna), how can we expect to know what is right and wrong, when those who destroy family virtues fail to see their own sin?",
            explanation: "Arjuna questions the possibility of discerning righteousness when those who cause the destruction of family values remain oblivious to their own wrongdoing."
        },
        "1.40": {
            shloka: "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः | धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत || 40 ||",
            meaning: "When family values decline, O Krishna, the entire family is overcome by lawlessness. And when lawlessness prevails, the women of the family become corrupt, and from the corruption of women, O descendant of Vrishni, comes unwanted progeny.",
            explanation: "Arjuna highlights the consequences of the decline of family righteousness, stating that when moral values deteriorate, it leads to lawlessness and corruption within the family, ultimately resulting in societal chaos and unwanted progeny."
        },
        "1.41": {
            shloka: "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रिय: | स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्कर: || 41 ||",
            meaning: "O Krishna, when irreligion prevails, the women of the family become corrupt, and from the degradation of womanhood, O descendant of Vrishni, comes unwanted progeny (varṇasaṅkara).",
            explanation: "In this verse, Arjuna is expressing his concerns about the consequences of allowing adharma (irreligion or unrighteousness) to prevail. He mentions that when there is a decline in righteousness (dharma), the women of the family are adversely affected and become corrupt. This corruption leads to the degradation of societal values, including the purity of lineage."
        },
        "1.42": {
            shloka: "सङ्करो नरकायैव कुलघ्नानां कुलस्य च | पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः || 42 ||",
            meaning: "With the preponderance of vice, O Krishna, the women of the family become immoral, and from the immorality of women, O descendent of Vrishni, there arises unwanted progeny and eternal hell for the destroyers of the family.",
            explanation: "Arjuna laments the consequences of family destruction, emphasizing that the decline of family values leads to moral degradation among women, resulting in the birth of unwanted progeny and eternal damnation for those responsible."
        },
        "1.43": {
            shloka: "दोषैरेतैः कुलघ्नानां वर्णाश्रमविभागशः | स्वभावनियतं कर्म कुर्वन्ति हि न कार्यते || 43 ||",
            meaning: "By the misdeeds of those who destroy the family tradition and thus give rise to unwanted progeny, all kinds of community projects and family welfare activities are ruined.",
            explanation: "Arjuna points out that the misdeeds of those who disrupt family traditions lead to the breakdown of societal structure, resulting in the failure of communal and familial duties and responsibilities."
        },
        "1.44": {
            shloka: "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन | नरकेऽनियतं वासो भवतीत्यनुशुश्रुम || 44 ||",
            meaning: "O Janardana (Krishna), I have heard that dwelling in hell is inevitable for those men in whose families the religious duties have been destroyed.",
            explanation: "Arjuna learns that those who cause the destruction of family values are destined to reside in hell, highlighting the gravity of the consequences for such actions."
        },
        "1.45": {
            shloka: "अहो बत महत्पापं कर्तुं व्यवसिता वयम् | यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः || 45 ||",
            meaning: "Alas, how terrible it is that we are determined to commit a great sin by being prepared to kill our own kinsmen out of greed for the pleasures of a kingdom.",
            explanation: "Arjuna expresses deep remorse at the thought of committing a great sin by killing his relatives, driven by the desire for the pleasures of rulership."
        },
        "1.46": {
            shloka: "यदि मामप्रतीकारं अशस्त्रं शस्त्रपाणयः | धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् || 46 ||",
            meaning: "If the sons of Dhritarashtra, with weapons in hand, were to kill me in battle while I am unarmed and unresisting, that would be better for me.",
            explanation: "Arjuna expresses his willingness to face death at the hands of the Kauravas, even if it means being killed by them while unarmed and unresisting."
        },
        "1.47": {
            shloka: "सञ्जय उवाच | एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् | विसृज्य सशरं चापं शोकसंविग्नमानसः || 47 ||",
            meaning: "Sanjaya said: Having thus spoken on the battlefield, Arjuna, casting aside his bow and arrows, sat down on the chariot with his mind overwhelmed by grief.",
            explanation: "Sanjaya describes how Arjuna, overwhelmed by sorrow and confusion, sets aside his weapons and sits down on his chariot, distressed by the thought of fighting his own relatives."
        },
        "2.1": {
            shloka: "सञ्जय उवाच | तं तथा कृपयाविष्टम् अश्रुपूर्णाकुलेक्षणम् | विषीदन्तम् इदं वाक्यम् उवाच मधुसूदनः || 1 ||",
            meaning: "Sanjaya said: Seeing Arjuna full of compassion and very sorrowful, his eyes brimming with tears and overwhelmed, Madhusudana (Krishna) spoke the following words.",
            explanation: "Sanjaya describes Arjuna's state of deep compassion and sorrow on the battlefield, setting the stage for Lord Krishna's response to Arjuna's emotional turmoil."
        },
        "2.2": {
            shloka: "श्रीभगवानुवाच | कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् | अनार्यजुष्टम् अस्वर्ग्यम् अकीर्तिकरम् अर्जुन || 2 ||",
            meaning: "The Supreme Lord said: My dear Arjuna, how has this delusion overcome you in this hour of peril? It is not befitting an honorable person; it leads not to the higher abodes, but to disgrace.",
            explanation: "Lord Krishna questions Arjuna about the cause of his sudden confusion and distress in the critical moment of battle, emphasizing that such behavior is unworthy of a noble person and will bring dishonor rather than spiritual advancement."
        },
        "2.3": {
            shloka: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते | क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप || 3 ||",
            meaning: "Do not yield to this degrading impotence, O Arjuna. It does not become you. Shake off this petty weakness of the heart and arise, O scorcher of enemies!",
            explanation: "Lord Krishna urges Arjuna to reject this weakness and rise above it, as it is unbecoming of him. He encourages Arjuna to cast off his cowardice and stand up bravely to face his adversaries."
        },
        "2.4": {
            shloka: "अर्जुन उवाच | कथं भीष्ममहं संख्ये द्रोणं च मधुसूदन | इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन || 4 ||",
            meaning: "Arjuna said: O Madhusudana, how can I fight with arrows in battle against Bhishma and Drona, who are worthy of my worship, O destroyer of enemies?",
            explanation: "Arjuna expresses his moral dilemma about fighting against revered figures like Bhishma and Drona in battle. He questions how he can raise his weapons against those deserving of his respect and homage."
        },
        "2.5": {
            shloka: "गुरूनहत्वा हि महानुभावान् श्रेयो भोक्तुं भैक्ष्यमपीह लोके | हत्वार्थकामांस्तु गुरूनिहैव भुञ्जीय भोगान् रुधिरप्रदिग्धान् || 5 ||",
            meaning: "It is better to live in this world by begging than to enjoy life by killing these noble teachers, who are my spiritual preceptors. If we kill them, the very wealth and pleasures we enjoy will be tainted with blood.",
            explanation: "Arjuna argues that it would be more honorable to live as a beggar than to enjoy the spoils of war earned by killing revered teachers like Bhishma and Drona. He fears that indulging in such bloodshed will corrupt their wealth and pleasures."
        },
        "2.6": {
            shloka: "न चैतद्विद्मः कतरन्नो गरीयो यद्वा जयेम यदि वा नो जयेयुः | यानेव हत्वा न जिजीविषामः तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः || 6 ||",
            meaning: "Nor do we know which outcome is better: conquering them or being conquered by them. The sons of Dhritarashtra, whom if we killed we would not care to live, are now standing in front of us.",
            explanation: "Arjuna admits his uncertainty about the right course of action—whether to win against his enemies or be vanquished by them. He observes that the sons of Dhritarashtra, whom he does not wish to survive after killing, are now arrayed against him."
        },
        "2.7": {
            shloka: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः | यच्छ्रेयः स्यान्निश्ितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् || 7 ||",
            meaning: "Now I am confused about my duty and have lost all composure because of my weakness. In this condition, I am asking You to tell me clearly what is best for me. Now I am Your disciple, and a soul surrendered unto You. Please instruct me.",
            explanation: "Arjuna acknowledges his confusion and seeks guidance from Lord Krishna, admitting that he is overpowered by weakness and unable to determine his righteous duty. He surrenders to Krishna as his disciple, seeking clear instruction."
    
    },
    "2.8": {
        shloka: "न हि प्रपश्यामि ममापनुद्याद् यच्छोकमुच्छोषणमिन्द्रियाणाम् | अवाप्य भूमावसपत्नमृद्धं राज्यं सुराणामपि चाधिपत्यम् || 8 ||",
        meaning: "I can find no means to dispel this grief which is drying up my senses. Even if I win a prosperous and unrivaled kingdom on the earth, or lordship over the gods, I fail to see how that will make me happy.",
        explanation: "Arjuna expresses his inability to overcome the profound sorrow that is affecting him physically and mentally. He realizes that material achievements like kingship on earth or dominion over celestial realms will not alleviate his distress."
    },
    "2.9": {
        shloka: "सञ्जय उवाच | एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप | न योत्स्य इति गोविंदमुक्त्वा तूष्णीं बभूव ह || 9 ||",
        meaning: "Sanjaya said: Having spoken thus, Arjuna, the chastiser of enemies, addressed Krishna, 'Govinda, I shall not fight,' and fell silent.",
        explanation: "Sanjaya narrates how Arjuna, after expressing his turmoil to Krishna, declares his unwillingness to fight and falls silent."
    },
    "2.10": {
        shloka: "तमुवाच हृषीकेशः प्रहसन्निव भारत | सेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः || 10 ||",
        meaning: "O Dhritarashtra, thus addressed by Arjuna on the battlefield and seeing him distressed, Lord Krishna, while smiling in the midst of both armies, spoke the following words.",
        explanation: "Lord Krishna, observing Arjuna's distress and reluctance to fight, responds with a smile amidst the two armies, preparing to impart spiritual wisdom to Arjuna."
    },
    "2.11": {
        shloka: "श्रीभगवानुवाच | अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे | गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः || 11 ||",
        meaning: "The Blessed Lord said: While speaking learned words, you are mourning for what is not worthy of grief. Those who are wise lament neither for the living nor for the dead.",
        explanation: "Lord Krishna admonishes Arjuna for grieving unnecessarily. He points out that true wisdom means not mourning for the living or the dead, as the soul is eternal and indestructible."
    },
    "2.12": {
        shloka: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः | न चैव न भविष्यामः सर्वे वयमतः परम् || 12 ||",
        meaning: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.",
        explanation: "Lord Krishna explains the eternal nature of the soul, emphasizing that neither he, Arjuna, nor the assembled kings ever cease to exist. The soul is beyond birth and death."
    },
    "2.13": {
        shloka: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा | तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति || 13 ||",
        meaning: "Just as the boyhood, youth, and old age come to the embodied soul in this body, so does the attainment of another body. The wise man does not get deluded by this.",
        explanation: "Lord Krishna compares the inevitable stages of bodily development from childhood to old age with the soul's progression through different bodies. A wise person understands this cycle and is not bewildered by it."
    },
    "2.14": {
        shloka: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः | आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत || 14 ||",
        meaning: "O son of Kunti, the contacts of the senses with the sense objects give rise to fleeting perceptions of happiness and distress. They are temporary and come and go. Endure them bravely, O Arjuna.",
        explanation: "Lord Krishna advises Arjuna to tolerate the fleeting experiences of pleasure and pain arising from the interaction of the senses with their objects. These sensations are impermanent and should be endured with fortitude."
    },
    "2.15": {
        shloka: "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ | समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते || 15 ||",
        meaning: "O best among men (Arjuna), the person whom these cannot disturb, O noblest among men, is fit for liberation. Eternal happiness and distress come and go, and are endured by the wise.",
        explanation: "Lord Krishna explains that one who remains undisturbed by joy and sorrow is fit for liberation. True wisdom lies in enduring both happiness and distress with equanimity."
    },
    "2.16": {
        shloka: "नासतो विद्यते भावो नाभावो विद्यते सतः | उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः || 16 ||",
        meaning: "The unreal has no existence, and the real never ceases to be; the seers of truth have concluded the same by studying the nature of both.",
        explanation: "The wise understand that the temporary material manifestations (unreal) have no permanent existence, while the eternal spiritual essence (real) is indestructible."
    },
    "2.17": {
        shloka: "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् | विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति || 17 ||",
        meaning: "Know that to be indestructible by which all this is pervaded. No one can bring about the destruction of this imperishable substance.",
        explanation: "Lord Krishna reveals the indestructible nature of the soul, which pervades and sustains all existence. The soul is beyond destruction and remains unaffected by material changes."
    },
    "2.18": {
        shloka: "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः | अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत || 18 ||",
        meaning: "All these bodies pertaining to the indestructible, immeasurable, and eternal soul are said to be perishable. Therefore, fight, O Arjuna!",
        explanation: "The physical bodies are perishable, but the soul within is eternal and immeasurable. Understanding this, Lord Krishna encourages Arjuna to fulfill his duty as a warrior."
    },
    "2.19": {
        shloka: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् | उभौ तौ न विजानीतो नायं हन्ति न हन्यते || 19 ||",
        meaning: "One who thinks that the soul kills and another who thinks that the soul is killed, both are ignorant. The soul kills not, nor is it killed.",
        explanation: "Lord Krishna clarifies that the soul neither kills nor is killed. The perception of killing or being killed is due to ignorance of the soul's true nature."
    },
    "2.20": {
        shloka: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः | अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे || 20 ||",
        meaning: "The soul is never born, nor does it ever die; nor can it be brought into existence again. Unborn, eternal, ever-existing, undying, and primeval, the soul is not slain when the body is slain.",
        explanation: "Lord Krishna elucidates the eternal nature of the soul, which is neither born nor subject to death. The soul is eternal, indestructible, and transcends the cycle of birth and death."

},
"2.21": {
    shloka: "वेदाविनाशिनं नित्यं य एनमजमव्ययम् | कथं स पुरुषः पार्थ कं घातयति हन्ति कम् || 21 ||",
    meaning: "O Partha, how can a person who knows that the soul is indestructible, eternal, unborn, and immutable kill anyone or cause anyone to kill?",
    explanation: "Lord Krishna questions Arjuna about the contradiction of killing, knowing that the soul is eternal and indestructible."
},
"2.22": {
    shloka: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि | तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही || 22 ||",
    meaning: "As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.",
    explanation: "Lord Krishna explains the process of the soul accepting new bodies, likening it to changing worn-out clothes for fresh ones."
},
"2.23": {
    shloka: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः | न चैनं क्लेदयन्त्यापो न शोषयति मारुतः || 23 ||",
    meaning: "The soul cannot be pierced by weapons, burned by fire, moistened by water, or withered by the wind.",
    explanation: "Lord Krishna elucidates that the soul is beyond the physical elements and cannot be affected or destroyed by material forces."
},
"2.24": {
    shloka: "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च | नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः || 24 ||",
    meaning: "This soul is unbreakable and insoluble, and can neither be burned nor dried. It is everlasting, all-pervading, unchangeable, immovable, and eternally the same.",
    explanation: "Lord Krishna describes the soul as indestructible, immutable, and omnipresent—a timeless entity that remains unchanged despite external circumstances."
},
"2.25": {
    shloka: "अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते | तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि || 25 ||",
    meaning: "Knowing this soul to be indestructible, unknowable, and immutable, O mighty-armed Arjuna, you should not grieve for the body.",
    explanation: "Lord Krishna advises Arjuna to recognize the imperishable and incomprehensible nature of the soul, urging him not to mourn over the transient physical body."
},
"2.26": {
    shloka: "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् | तथापि त्वं महाबाहो नैवं शोचितुमर्हसि || 26 ||",
    meaning: "If, however, you think that the soul is perpetually born and always dies, still you have no reason to lament, O mighty-armed.",
    explanation: "Lord Krishna reassures Arjuna that even if he considers the soul to be subject to continuous birth and death, there is no cause for sorrow."
},
"2.27": {
    shloka: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च | तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि || 27 ||",
    meaning: "For one who has taken birth, death is certain, and for one who has died, birth is certain. Therefore, in an inevitable situation, you should not lament.",
    explanation: "Lord Krishna explains the inevitability of death for the one who is born and the certainty of rebirth for the one who dies, emphasizing that sorrow is unnecessary in this cycle."
},
"2.28": {
    shloka: "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत | अव्यक्तनिधनान्येव तत्र का परिदेवना || 28 ||",
    meaning: "O descendant of Bharata, all living entities are unmanifest before birth, manifest between birth and death, and again unmanifest after death. So what need is there for lamentation?",
    explanation: "Lord Krishna explains the cycle of manifestation and unmanifestation of living beings, questioning the rationale behind grieving over this natural process."
},
"2.29": {
    shloka: "आश्चर्यवत्पश्यति कश्चिदेनमाश्चर्यवद्वदति तथैव चान्यः | आश्चर्यवच्चैनमन्यः श्रृणोति श्रुत्वाप्येनं वेद न चैव कश्चित् || 29 ||",
    meaning: "Some perceive the soul as amazing, some describe it as amazing, and some hear of the soul as amazing, while others, even after hearing about it, cannot understand it at all.",
    explanation: "Lord Krishna acknowledges that the nature of the soul is perceived differently by individuals—some find it astonishing, some describe it as astonishing, and others are unable to comprehend it even after hearing about it."
},
"2.30": {
    shloka: "देही नित्यमवध्योऽयं देहे सर्वस्य भारत | तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि || 30 ||",
    meaning: "O descendant of Bharata, the soul within all bodies is eternal and insusceptible to destruction. Therefore, you should not mourn for any living being.",
    explanation: "Lord Krishna emphasizes that the soul residing within every body is eternal and cannot be destroyed, thus advising Arjuna not to grieve for any living being."
},
"2.31": {
    shloka: "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि | धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते || 31 ||",
    meaning: "Considering your prescribed duties, you should not waver. Indeed, for a warrior, there is no better engagement than fighting for a righteous cause.",
    explanation: "Lord Krishna encourages Arjuna to fulfill his duty as a warrior without hesitation, highlighting that righteous battle is the most honorable engagement for a Kshatriya (warrior)."
},
"2.32": {
    shloka: "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् | सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् || 32 ||",
    meaning: "O Partha, happy are the Kshatriyas to whom such opportunities to defend righteousness come unsought, opening for them the doors of heaven.",
    explanation: "Lord Krishna asserts that warriors like Arjuna are fortunate to have the chance to fight for righteousness, as such righteous deeds lead to heavenly rewards."
},
"2.33": {
    shloka: "अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि | ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि || 33 ||",
    meaning: "If, however, you do not fight this righteous war, then, having abandoned your duties and fame, you will incur sin.",
    explanation: "Lord Krishna warns Arjuna of the consequences of shirking his righteous duty as a warrior—loss of reputation and the accumulation of sin."
},
"2.34": {
    shloka: "अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् | सम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते || 34 ||",
    meaning: "People will always speak of your disgrace, and for a respectable person, dishonor is worse than death.",
    explanation: "Lord Krishna explains that abandoning one's duty leads to infamy and disgrace, which are considered worse than death for an honorable person."
},
"2.35": {
    shloka: "भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः | येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् || 35 ||",
    meaning: "The great generals who have highly esteemed your name and fame will think that you have fled from the battlefield out of fear, and thus they will consider you insignificant.",
    explanation: "Lord Krishna warns Arjuna that renowned warriors will perceive him as cowardly if he retreats from battle, diminishing his stature and respect."
},
"2.36": {
    shloka: "अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः | निन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम् || 36 ||",
    meaning: "Your enemies will describe you in many unkind words and scorn your ability. What could be more painful for you?",
    explanation: "Lord Krishna predicts that Arjuna's enemies will speak ill of him, attacking his strength and capability, causing greater distress than facing death in battle."
},
"2.37": {
    shloka: "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम् | तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिष्चयः || 37 ||",
    meaning: "Either you will be killed on the battlefield and attain heavenly planets, or you will conquer and enjoy the earthly kingdom. Therefore, O son of Kunti, arise with determination for battle.",
    explanation: "Lord Krishna motivates Arjuna, presenting two possible outcomes of the battle—attaining heavenly reward through death in battle or enjoying worldly victory. He urges Arjuna to stand up with resolve and fight."
},
"2.38": {
    shloka: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ | ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि || 38 ||",
    meaning: "Treat pleasure and pain, gain and loss, victory and defeat alike. Then, engage in battle and you will not incur sin.",
    explanation: "Lord Krishna advises Arjuna to maintain equanimity towards pleasure and pain, success and failure, and to proceed with battle without attachment, ensuring freedom from sin."
},
"2.39": {
    shloka: "एषा तेऽभिहिता साङ्ख्ये बुद्धिर्योगे त्विमां श्रृणु | बुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि || 39 ||",
    meaning: "This is the wisdom of Sankhya philosophy. Now listen to the wisdom of Yoga, endowed with which, O Arjuna, you will break free from the bondage of karma.",
    explanation: "Lord Krishna introduces the path of Yoga to Arjuna as a means to transcend the entanglements of karma (action and reaction), emphasizing that through enlightened understanding and practice, one can attain liberation."
},
"2.40": {
    shloka: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते | स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् || 40 ||",
    meaning: "In this endeavor, there is no loss or diminution, and a little advancement on this path can protect one from the most dangerous type of fear.",
    explanation: "Lord Krishna assures Arjuna that any effort made on the path of spiritual enlightenment is never wasted and provides protection from great fears, motivating Arjuna to pursue this path with diligence."
},
"2.41": {
    shloka: "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन | बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् || 41 ||",
    meaning: "Those who are on this path are resolute in purpose, and their aim is one. O beloved child of the Kurus, the intelligence of those who are irresolute is many-branched.",
    explanation: "Lord Krishna describes the focused and determined intelligence of those who are steadfast on the path of spiritual realization, contrasting it with the scattered and indecisive nature of those who lack resolve."
},
"2.42": {
    shloka: "यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः | वेदवादरताः पार्थ नान्यदस्तीति वादिनः || 42 ||",
    meaning: "O Partha, the Vedas deal with the three modes of material nature. Be free from the pairs of opposites and from all thoughts for gain and safety, and be established in the self.",
    explanation: "Lord Krishna advises Arjuna to transcend the dualities of material life and focus on self-realization, not getting entangled in debates and discussions that are devoid of spiritual wisdom."
},
"2.43": {
    shloka: "कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् | क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति || 43 ||",
    meaning: "The Vedas prescribe various rituals for elevation to heavenly planets, resulting in sense gratification, but those whose minds are distorted by material desires are unable to fix their intelligence upon meditation and self-realization.",
    explanation: "Lord Krishna explains that those who are solely interested in material pleasures and rewards, as described in the Vedas, lack the inclination for deep meditation and spiritual realization."
},
"2.44": {
    shloka: "भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् | व्यवसायात्मिका बुद्धिः समाधौ न विधीयते || 44 ||",
    meaning: "In the minds of those who are too attached to sense enjoyment and material opulence and who are bewildered by such things, the resolute determination for devotional service to the Supreme Lord does not take place.",
    explanation: "Lord Krishna explains that those deeply attached to material pleasures and wealth cannot cultivate the resolute determination required for sincere devotional service and meditation on the Supreme."
},
"2.45": {
    shloka: "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन | निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् || 45 ||",
    meaning: "The Vedas deal with the three modes of material nature, O Arjuna. Rise above these modes and become transcendental to all dualities. Be free from all thoughts of gain and preservation, and be established in the self.",
    explanation: "Lord Krishna advises Arjuna to transcend the influence of the three modes of material nature (goodness, passion, and ignorance) and cultivate a state of equanimity, free from desires for gain and security."
},
"2.46": {
    shloka: "यावानर्थ उदपाने सर्वतः सम्प्लुतोदके | तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः || 46 ||",
    meaning: "A person who is not disturbed by the incessant flow of desires—that enter like rivers into the ocean, which is ever being filled but is always still—can alone achieve peace, and not the person who strives to satisfy such desires.",
    explanation: "Lord Krishna uses the metaphor of an ocean that remains calm despite rivers constantly flowing into it to illustrate the state of a wise person who remains undisturbed by desires."
},
"2.47": {
    shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि || 47 ||",
    meaning: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.",
    explanation: "Lord Krishna instructs Arjuna to focus on performing his duties diligently without attachment to the outcomes, emphasizing the importance of selfless action and renouncing the desire for personal rewards."
},
"2.48": {
    shloka: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय | सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते || 48 ||",
    meaning: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called Yoga.",
    explanation: "Lord Krishna advises Arjuna to perform his duties with equanimity, detaching from desires for success or failure. This balanced state of mind in action is known as Yoga."
},
"2.49": {
    shloka: "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय | बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः || 49 ||",
    meaning: "O Dhananjaya, keep all abominable activities far distant by devotional service, and in that consciousness surrender unto the Lord. Those who desire enjoyment and material gains worship the demigods.",
    explanation: "Lord Krishna encourages Arjuna to engage in selfless devotional service and surrender to the Supreme, guiding him away from materialistic desires and the worship of demigods for mundane gains."
},
"2.50": {
    shloka: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते | तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् || 50 ||",
    meaning: "Endowed with equanimity, one casts off in this life both good and evil deeds. Therefore, strive for Yoga, which is skill in action.",
    explanation: "Lord Krishna explains that a person practicing equanimity in action transcends the effects of both good and bad deeds, thereby emphasizing the importance of performing actions skillfully in the path of Yoga."
},
"2.51": {
    shloka: "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः | जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् || 51 ||",
    meaning: "Those who are intelligent, who have learned the purpose of life and know the distinction between work in devotion and work for fruitive results, O Arjuna, do not engage in sense gratification but perform all work as sacrifice.",
    explanation: "Lord Krishna describes the intelligent persons who, understanding the purpose of life, renounce attachment to the fruits of actions and engage in selfless service, thereby freeing themselves from the bondage of repeated birth and death."
},
"2.52": {
    shloka: "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति | तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च || 52 ||",
    meaning: "When your intelligence has passed out of the dense forest of delusion, you shall become indifferent to all that has been heard and all that is to be heard.",
    explanation: "Lord Krishna assures Arjuna that when his intelligence transcends the bewildering effects of delusion, he will attain a state of detachment, being unaffected by past and future scriptural teachings."
},
"2.53": {
    shloka: "श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला | समाधावचला बुद्धिस्तदा योगमवाप्स्यसि || 53 ||",
    meaning: "When your mind is no longer disturbed by the flowery language of the Vedas and remains fixed in trance, then you will have attained divine consciousness.",
    explanation: "Lord Krishna explains that when the mind becomes steady and undisturbed, transcending the influence of the Vedas' elaborate rituals and dualistic teachings, one achieves the state of Yoga, or divine consciousness."
},
"2.54": {
    shloka: "अर्जुन उवाच | स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव | स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् || 54 ||",
    meaning: "Arjuna said: O Krishna, what are the symptoms of one whose consciousness is thus merged in transcendence? How does he speak, and what is his language? How does he sit, and how does he walk?",
    explanation: "Arjuna inquires from Lord Krishna about the characteristics of a person established in divine consciousness—how such a person speaks, behaves, and conducts themselves in daily life."
},
"2.55": {
    shloka: "श्रीभगवानुवाच | प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् | आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते || 55 ||",
    meaning: "The Blessed Lord said: O Partha, when one completely renounces all the desires of the mind and is satisfied in the self by the self, then such a person is said to be in pure transcendental consciousness.",
    explanation: "Lord Krishna responds to Arjuna's query by explaining that a person who renounces all desires originating from the mind and finds contentment within themselves through self-realization is established in pure transcendental consciousness."
},
"2.56": {
    shloka: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः | वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते || 56 ||",
    meaning: "One whose mind is untroubled in distress, who desires neither pleasure nor prosperity, and who is free from attachment, fear, and anger, is called a sage of steady wisdom.",
    explanation: "Lord Krishna describes the characteristics of a sage with steady wisdom—remaining unperturbed in suffering, free from desires for pleasure and prosperity, and devoid of attachment, fear, and anger."
},
"2.57": {
    shloka: "य: सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम् | नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता || 57 ||",
    meaning: "One who remains unattached under all conditions, and is neither delighted by good fortune nor dejected by tribulation, is established in perfect knowledge.",
    explanation: "Lord Krishna explains that a person established in perfect knowledge remains unattached and equipoised in all circumstances—neither elated by favorable situations nor distressed by unfavorable ones."
},
"2.58": {
    shloka: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः | इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता || 58 ||",
    meaning: "One who can withdraw the senses from their objects as a tortoise withdraws its limbs into its shell is established in perfect consciousness.",
    explanation: "Lord Krishna illustrates the state of perfect consciousness by comparing it to the ability to withdraw the senses from their objects, akin to a tortoise retracting its limbs into its shell."
},
"2.59": {
    shloka: "विषया विनिवर्तन्ते निराहारस्य देहिनः | रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते || 59 ||",
    meaning: "The embodied soul may be restricted from sense enjoyment, though the taste for sense objects remains. But ceasing such engagements by experiencing a higher taste, they are fixed in consciousness.",
    explanation: "Lord Krishna explains that although the embodied soul may refrain from sense gratification, the taste for sense objects persists. However, by cultivating a higher taste through spiritual realization, one becomes firmly established in consciousness."
},
"2.60": {
    shloka: "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः | इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः || 60 ||",
    meaning: "The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind of even a discerning person who is endeavoring to control them.",
    explanation: "Lord Krishna cautions Arjuna about the power of the senses, which can overwhelm even the discriminating intellect of a person striving for self-control, highlighting the challenges in controlling the mind and senses."
},
"2.61": {
    shloka: "तानि सर्वाणि संयम्य युक्त आसीत मत्परः | वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता || 61 ||",
    meaning: "One who restrains the senses and fixes the mind upon Me is known as a man of steady intelligence. Such a person's wisdom is firmly established.",
    explanation: "Lord Krishna describes the person of steady intelligence who controls the senses and focuses the mind on divine consciousness, establishing their wisdom firmly."
},
"2.62": {
    shloka: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते | सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते || 62 ||",
    meaning: "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.",
    explanation: "Lord Krishna explains the chain of reactions that begins with contemplating sense objects—leading to attachment, then to desire, and ultimately to anger."
},
"2.63": {
    shloka: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः | स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति || 63 ||",
    meaning: "From anger, delusion arises, and from delusion, bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost, one falls down again into the material pool.",
    explanation: "Lord Krishna describes the progression from anger to delusion, leading to confusion of memory and loss of intelligence, ultimately resulting in the downfall of a person into material existence."
},
"2.64": {
    shloka: "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन् | आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति || 64 ||",
    meaning: "But a person who controls the mind, withdraws the senses from sense objects with the help of the intellect, and remains free from attachment and aversion, attains inner peace.",
    explanation: "Lord Krishna explains that by controlling the mind, restraining the senses, and remaining detached from likes and dislikes, one attains inner tranquility and self-mastery."
},
"2.65": {
    shloka: "प्रसादे सर्वदुःखानां हानिरस्योपजायते | प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते || 65 ||",
    meaning: "In serene consciousness, all sorrow is destroyed. For such a person, the intelligence of one whose mind is serene soon becomes steady.",
    explanation: "Lord Krishna explains that by achieving inner peace and clarity of mind, one transcends all sorrows, and their intelligence becomes firm and resolute."
},
"2.66": {
    shloka: "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना | न चाभावयतः शान्तिरशान्तस्य कुतः सुखम् || 66 ||",
    meaning: "There is no possibility of one who is devoid of discrimination and fixed in delusion of having steady intelligence. Without steady intelligence, there is no possibility of peace, and without peace, how can there be happiness?",
    explanation: "Lord Krishna asserts that a person lacking discrimination and wisdom, and who remains absorbed in delusion, cannot attain steady intelligence. Without steady intelligence, there can be no peace, and without peace, true happiness is unattainable."
},
"2.67": {
    shloka: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते | तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि || 67 ||",
    meaning: "As a boat on the water is swept away by a strong wind, even one of the roaming senses on which the mind focuses can carry away a man's intelligence.",
    explanation: "Lord Krishna compares the uncontrolled senses to a strong wind that can swiftly carry away a boat on water, illustrating how an unsteady mind, following the wandering senses, can lead to loss of intelligence."
},
"2.68": {
    shloka: "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः | इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता || 68 ||",
    meaning: "Therefore, O mighty-armed Arjuna, one whose senses are restrained from their objects is certainly of steady intelligence.",
    explanation: "Lord Krishna concludes that a person of steady intelligence is one who has mastered the senses and withdrawn them from their objects."
},
"2.69": {
    shloka: "या निशा सर्वभूतानां तस्यां जागर्ति संयमी | यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः || 69 ||",
    meaning: "What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.",
    explanation: "Lord Krishna explains the contrast in perception between self-controlled individuals and ordinary beings regarding the states of waking and sleeping, highlighting the unique perspective of those practicing self-discipline."
},
"2.70": {
    shloka: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् | तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी || 70 ||",
    meaning: "As the waters of different rivers enter the ocean, which is full and yet remains undisturbed, similarly, a person who is not disturbed by desires enters into that Brahman. He attains peace; not the one who desires worldly pleasures.",
    explanation: "Lord Krishna compares the undisturbed state of the ocean, though filled by the waters of many rivers, to the peace attained by a person free from desires merging into Brahman (the ultimate reality), contrasting it with those driven by worldly desires."
},
"2.71": {
    shloka: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः | निर्ममो निरहङ्कारः स शान्तिमधिगच्छति || 71 ||",
    meaning: "A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship and is devoid of false ego—he alone can attain real peace.",
    explanation: "Lord Krishna explains that true peace is attained by those who have renounced desires for sensual pleasures, who live without attachment and ego, and who consider themselves not the doers or possessors."
},
"2.72": {
    shloka: "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति | स्थित्वाऽस्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति || 72 ||",
    meaning: "O Partha, this is the transcendental state (Brahman-realization). Having attained it, one is never bewildered. Being so situated, even at the hour of death, one can enter into the kingdom of God. (Brahman-realization)",
    explanation: "Lord Krishna concludes by describing the state of Brahman-realization, which ensures unwavering wisdom and eternal peace. Attaining this state, one transcends material existence and achieves liberation even at the moment of death."

},
"3.1": {
    shloka: "अर्जुन उवाच | ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन | तत्किं कर्मणि घोरे मां नियोजयसि केशव || 1 ||",
    meaning: "Arjuna said: O Janardana, O Kesava, if it is considered that knowledge is superior to action, then why, O Kesava, do You urge me to engage in this terrible action?",
    explanation: "Arjuna questions the apparent contradiction in Krishna's teachings. If knowledge (Jnana Yoga) is superior to action (Karma Yoga), then why is Krishna urging him to perform his duty as a warrior?"

},
"3.2": {
    shloka: "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे | तदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् || 2 ||",
    meaning: "With these seemingly mixed and confusing words, You are confusing my intelligence. Therefore, kindly tell me decisively the one path by which I may attain the highest good.",
    explanation: "Arjuna seeks a clear and decisive answer from Krishna to resolve his confusion caused by the apparently contradictory teachings on knowledge and action."
},
"3.3": {
    shloka: "श्रीभगवानुवाच | लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ | ज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् || 3 ||",
    meaning: "The Supreme Lord said: O sinless one, in this world there are two kinds of devotion— the path of knowledge (Jnana Yoga) for the philosophers, and the path of work (Karma Yoga) for the workers.",
    explanation: "Krishna explains that in the world, two main paths lead to spiritual realization: the path of knowledge (Jnana Yoga) suitable for those inclined towards contemplation and understanding, and the path of work (Karma Yoga) suitable for those inclined towards action and service."
},
"3.4": {
    shloka: "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते | न च सन्न्यसनादेव सिद्धिं समधिगच्छति || 4 ||",
    meaning: "Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection.",
    explanation: "Krishna clarifies that neither avoiding work nor renouncing actions altogether leads to liberation or spiritual perfection. True progress comes from performing prescribed duties selflessly."
},
"3.5": {
    shloka: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् | कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः || 5 ||",
    meaning: "No one can remain without action even for a moment. Indeed, everyone is compelled to act by the qualities born of material nature.",
    explanation: "Krishna explains the intrinsic nature of living beings to act, driven by the qualities (gunas) of material nature. It is impossible to entirely cease from activity."
},
"3.6": {
    shloka: "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् | इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते || 6 ||",
    meaning: "One who restrains the senses and organs of action but continues to dwell upon sense objects in the mind is considered a pretender.",
    explanation: "Krishna warns against hypocritical behavior where one outwardly restrains the senses but internally dwells upon sense objects. Such a person is termed a pretender."
},
"3.7": {
    shloka: "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन | कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते || 7 ||",
    meaning: "On the other hand, whoever controls the senses by the mind and engages the organs of action in work, without attachment, is superior.",
    explanation: "Contrarily, one who regulates the senses with the mind and engages in prescribed duties using the organs of action, without attachment to the results, is deemed superior."
},
"3.8": {
    shloka: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः | शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः || 8 ||",
    meaning: "Perform your prescribed duties, for action is better than inaction. A man cannot even maintain his physical body without work.",
    explanation: "Krishna urges Arjuna to perform his obligatory duties, emphasizing that action, even in mundane tasks, is superior to inaction. Without action, one cannot sustain the body."
},
"3.9": {
    shloka: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबंधनः | तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर || 9 ||",
    meaning: "Work must be performed as a sacrifice, O Arjuna, otherwise work binds one to this material world. Therefore, O son of Kunti, perform your prescribed duties without attachment to the results, for the satisfaction of God.",
    explanation: "Krishna advises Arjuna to perform his duties as an offering to the divine, as actions performed selfishly bind one to material existence. By acting selflessly and offering the results to the Supreme, one becomes free from attachment."
},
"3.10": {
    shloka: "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः | अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् || 10 ||",
    meaning: "In the beginning, the Creator (Brahma) created mankind along with the system of sacrifice and said: 'By this sacrifice, may you prosper. Let this be the fulfiller of all your desires.'",
    explanation: "Krishna explains the ancient tradition of sacrifice instituted by the Creator, Brahma, which is essential for the welfare and fulfillment of desires for all beings."
},
"3.11": {
    shloka: "देवान्भावयतानेन ते देवा भावयन्तु वः | परस्परं भावयन्तः श्रेयः परमवाप्स्यथ || 11 ||",
    meaning: "It is by the sacrifice of service that the celestial gods are pleased. And being pleased, the celestial gods bestow the necessities of life upon man. Thus, by nourishing one another through sacrifice, you will enjoy the highest welfare.",
    explanation: "Through selfless acts of service and sacrifice, one pleases the celestial gods who, in turn, provide for the needs of all beings. Mutual nourishment through sacrifice leads to the ultimate welfare and prosperity."
},
"3.12": {
    shloka: "इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः | तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः || 12 ||",
    meaning: "In charge of the sacrifice, the celestial gods will surely provide you with all desired necessities. But those who enjoy what is given to them without offering in return are verily thieves.",
    explanation: "The celestial gods, pleased by sacrificial offerings, grant desired necessities. However, those who selfishly enjoy these gifts without reciprocation are considered akin to thieves."
},
"3.13": {
    shloka: "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः | भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् || 13 ||",
    meaning: "The righteous who partake of the remnants of the sacrifice are freed from all sins. But those sinful ones who cook food only for their own sake, verily eat sin.",
    explanation: "Those who partake in the remnants of sacrificial offerings are purified of sins, whereas those who selfishly prepare food solely for personal enjoyment incur sinful reactions."
},
"3.14": {
    shloka: "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः | यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः || 14 ||",
    meaning: "All living beings subsist on food, and food is produced by rain. Rain is produced by sacrifice, and sacrifice is performed by action.",
    explanation: "Living beings depend on food, which is produced by rain. Rain, in turn, is the result of sacrifice, and sacrifice originates from prescribed actions."
},
"3.15": {
    shloka: "कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम् | तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् || 15 ||",
    meaning: "Understand that all actions arise from the Supreme Brahman, who is imperishable. Therefore, the all-pervading Brahman is eternally established in sacrificial activities.",
    explanation: "Krishna explains that the Supreme Reality, Brahman, is the source of all actions and is eternal. The universal Brahman is ever present in the form of sacrifice."
},
"3.16": {
    shloka: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह य: | अघायुरिन्द्रियारामो मोघं पार्थ स जीवति || 16 ||",
    meaning: "Arjuna, one who does not follow the wheel of creation set into motion by the divine system and remains idle, indulging in senses, such a person lives in vain, O Partha.",
    explanation: "Those who do not engage in their prescribed duties as part of the divine order, but instead indulge in sensory pleasures, waste their life and vitality."
},
"3.17": {
    shloka: "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः | आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते || 17 ||",
    meaning: "However, one who is self-satisfied and self-contained, who is pleased with the knowledge of the self, such a person has no obligatory duties.",
    explanation: "On the contrary, a person who finds joy and satisfaction within themselves, content with self-realization, has no duties to perform in the material sense."
},
"3.18": {
    shloka: "नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन | न चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः || 18 ||",
    meaning: "Such a self-realized person has no purpose to fulfill by the discharge of duties or duties left undone. Nor does such a person depend on any material creation for any purpose.",
    explanation: "A self-realized being has no need to strive for gain through actions or abstention from actions. They are completely self-satisfied and do not depend on anything external for their happiness or fulfillment."
},
"3.19": {
    shloka: "तस्मादसक्तः सततं कार्यं कर्म समाचर | असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः || 19 ||",
    meaning: "Therefore, always perform your duties without attachment. By performing work without attachment, one attains the Supreme.",
    explanation: "Krishna advises Arjuna to perform his duties without attachment to the results. By acting selflessly, one can attain the highest realization."
},
"3.20": {
    shloka: "कर्मणैव हि संसिद्धिमास्थिता जनकादयः | लोकसङ्ग्रहमेवापि सम्पश्यन्कर्तुमर्हसि || 20 ||",
    meaning: "Even Janaka and other great kings attained perfection solely by performance of prescribed duties. Therefore, for the welfare of the world and to set an example, you should perform your duty diligently.",
    explanation: "Krishna cites the example of King Janaka and others who attained spiritual perfection through diligent performance of duties. Arjuna is urged to act similarly for the welfare of society."
},
"3.21": {
    shloka: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः | स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते || 21 ||",
    meaning: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.",
    explanation: "People emulate the actions and values demonstrated by noble individuals. Therefore, great personalities like Arjuna must set the highest standards through their actions."
},
"3.22": {
    shloka: "न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन | नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि || 22 ||",
    meaning: "O Partha, there is nothing in all the three worlds, including the celestial abodes, that needs to be done by Me, nor is there anything unobtained that I need to obtain, yet I am engaged in prescribed duties.",
    explanation: "Krishna, being the Supreme Lord, has nothing to gain or accomplish, yet He engages in prescribed duties as an example for all beings."
},
"3.23": {
    shloka: "यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः | मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः || 23 ||",
    meaning: "For if I did not engage in work, O Partha, certainly all men would follow My path.",
    explanation: "Krishna indicates that if He were not to engage in His duties, people would neglect their own duties and fall into chaos."
},
"3.24": {
    shloka: "उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम् | संकरस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः || 24 ||",
    meaning: "If I were not to perform prescribed duties, these worlds would be put to ruination, and I would be the cause of creating unwanted population and destroying these living beings.",
    explanation: "Krishna explains that neglecting prescribed duties would lead to chaos, unwanted consequences, and destruction in the world."
},
"3.25": {
    shloka: "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत | कुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसङ्ग्रहम् || 25 ||",
    meaning: "As the ignorant perform their duties with attachment to results, similarly, the wise may also act, but without attachment, for the welfare of the masses.",
    explanation: "The wise, like the ignorant, engage in actions, but unlike the ignorant, they do so without attachment for the benefit of society."
},
"3.26": {
    shloka: "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम् | जोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन् || 26 ||",
    meaning: "The enlightened should not unsettle the minds of the ignorant attached to work. Rather, by performing their duties in an enlightened manner, they should inspire others to do the same.",
    explanation: "Those endowed with knowledge should not disrupt the minds of the ignorant who are attached to the fruits of their actions. Instead, they should inspire and guide others by their enlightened actions."
},
"3.27": {
    shloka: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहङ्कारविमूढात्मा कर्ताहमिति मन्यते || 27 ||",
    meaning: "All activities are carried out by the three modes of material nature. But in ignorance, the soul, deluded by false ego, thinks itself to be the doer.",
    explanation: "Under the influence of material nature, the soul falsely identifies with the ego and believes itself to be the sole doer of actions, ignorant of the role played by the modes of nature."
},
"3.28": {
    shloka: "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः | गुणागुणेशु वर्तन्त इति मत्वा न सज्जते || 28 ||",
    meaning: "But those who are acquainted with the truth, O mighty-armed Arjuna, do not get deluded by the modes that perform their respective functions.",
    explanation: "Those who understand the truth are not bewildered by the interaction of the modes of nature and recognize their distinct activities within the realm of material existence."
},
"3.29": {
    shloka: "प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु | तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत् || 29 ||",
    meaning: "Those deluded by the qualities of material nature are attached to the actions that are prompted by these qualities. A wise person should not unsettle the mind of such ignorant people of lesser understanding.",
    explanation: "The ignorant, being bewildered by the modes of material nature, become attached to activities born of these modes. However, the wise should not disrupt their understanding but should patiently guide them."
},
"3.30": {
    shloka: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा | निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः || 30 ||",
    meaning: "Therefore, dedicating all your activities to Me, with your mind fixed on the Self, be free from desire and ego, and fight without mental fever.",
    explanation: "Krishna advises Arjuna to perform all actions for His sake, with a mind fixed on the Self and free from desire and ego. By doing so, Arjuna can fight without agitation or mental distress."
},
"3.31": {
    shloka: "ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः | श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः || 31 ||",
    meaning: "Those who always follow My teachings with faith and without envy, they too are liberated from actions.",
    explanation: "Those who faithfully adhere to Krishna's instructions without envy are also liberated from the reactions of their actions."
},
"3.32": {
    shloka: "ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम् | सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः || 32 ||",
    meaning: "But those who, out of envy, disregard My teachings and do not practice them regularly, are to be considered bereft of all knowledge, deluded, and doomed to ignorance.",
    explanation: "Those who out of jealousy ignore Krishna's teachings and do not practice them consistently are devoid of wisdom and destined for spiritual ignorance."
},
"3.33": {
    shloka: "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि | प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति || 33 ||",
    meaning: "Even a wise person acts according to their nature, for everyone follows their nature. What can repression accomplish?",
    explanation: "Even a person of wisdom acts in accordance with their nature, influenced by the modes of material nature. Therefore, what purpose can repression serve?"
},
"3.34": {
    shloka: "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ | तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ || 34 ||",
    meaning: "Attachment and aversion for sense objects are located in the senses. One should not come under the control of these two, for they are the stumbling blocks on one's path.",
    explanation: "Attachment and aversion for sense objects reside in the senses and can obstruct one's spiritual path. Therefore, one should not succumb to their influence."
},
"3.35": {
    shloka: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् | स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् || 35 ||",
    meaning: "It is far better to perform one's natural prescribed duty, though tinged with faults, than to perform another's prescribed duty perfectly. It is better to die doing one's own duty, for performing another's duty leads to danger.",
    explanation: "It is more beneficial to carry out one's own duty imperfectly rather than performing another's duty flawlessly. Abandoning one's duty for another's can lead to detrimental consequences."
},
"3.36": {
    shloka: "अर्जुन उवाच | अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः | अनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः || 36 ||",
    meaning: "Arjuna said: O descendant of Vrishni, impelled by what does a person commit sinful acts, even against his will, as if driven by force?",
    explanation: "Arjuna inquires from Krishna what impels a person to commit sinful acts involuntarily, almost as if compelled by external forces."
},
"3.37": {
    shloka: "श्रीभगवानुवाच | काम एष क्रोध एष रजोगुणसमुद्भवः | महाशनो महापाप्मा विद्ध्येनमिह वैरिणम् || 37 ||",
    meaning: "The Supreme Lord said: It is desire (kama) that is born of the mode of passion (rajas), which is insatiable and the source of all sinful activities. Know this as the enemy here.",
    explanation: "Krishna identifies desire as the source of sinful activities, arising from the mode of passion (rajas), and labels it as the greatest devourer and the root of all evils."
},
"3.38": {
    shloka: "धूमेनाव्रियते वह्निर्यथाऽऽदर्शो मलेन च | यथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम् || 38 ||",
    meaning: "Just as fire is covered by smoke, a mirror is masked by dust, and an embryo is enveloped by the womb, similarly, knowledge is shrouded by desire.",
    explanation: "Krishna illustrates how desire obscures knowledge, much like smoke veiling fire, dust clouding a mirror, or the womb concealing the embryo."
},
"3.39": {
    shloka: "आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा | कामरूपेण कौन्तेय दुष्पूरेणानलेन च || 39 ||",
    meaning: "O Arjuna, knowledge is covered by this eternal enemy in the form of insatiable desire, which is never satisfied and burns like fire.",
    explanation: "Krishna describes desire as the eternal adversary of knowledge, taking the form of insatiable longing that relentlessly burns like an unquenchable fire."
},
"3.40": {
    shloka: "इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते | एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम् || 40 ||",
    meaning: "The senses, mind, and intellect are said to be the dwelling places of this desire, which deludes the embodied soul by veiling its knowledge.",
    explanation: "Krishna explains how desire operates through the senses, mind, and intellect, deluding the embodied soul and obscuring its innate knowledge."
},
"3.41": {
    shloka: "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ | पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् || 41 ||",
    meaning: "Therefore, O Arjuna, first control your senses, then destroy this sinful desire that destroys knowledge and realization.",
    explanation: "Krishna instructs Arjuna to first control his senses and then eradicate desire, which destroys wisdom and discriminative knowledge."
},
"3.42": {
    shloka: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः | मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः || 42 ||",
    meaning: "The senses are said to be superior to the gross body; the mind is superior to the senses; the intelligence is even higher than the mind; but higher still is the soul.",
    explanation: "The senses are superior to the physical body, the mind is superior to the senses, intelligence is higher than the mind, and the soul is superior to intelligence."
},
"3.43": {
    shloka: "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना | जहि शत्रुं महाबाहो कामरूपं दुरासदम् || 43 ||",
    meaning: "Knowing the soul to be superior to the material intelligence, O mighty-armed Arjuna, subdue the desire which is the formidable enemy, by controlling the mind with the intellect.",
    explanation: "Recognizing the soul as higher than mere intelligence, O Arjuna, curb this formidable enemy called desire that resides in the senses and the mind, by controlling them through the intellect."
},
"4.1": {
    shloka: "श्रीभगवानुवाच | इमं विवस्वते योगं प्रोक्तवानहमव्ययम् | विवस्वान् मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् || 1 ||",
    meaning: "The Supreme Personality of Godhead said: I instructed this imperishable science of yoga to the sun-god, Vivasvan, who passed it on to Manu, the father of mankind. Manu in turn instructed it to Ikshvaku.",
    explanation: "Lord Krishna explains the ancient lineage of this transcendental knowledge, revealing that He first imparted it to the sun-god Vivasvan, who then shared it with Manu, the progenitor of humanity."
},
"4.2": {
    shloka: "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः | स कालेनेह महता योगो नष्टः परन्तप || 2 ||",
    meaning: "This supreme science was thus received through the chain of disciplic succession, and the saintly kings understood it in that way. But with the passage of time, O Arjuna, this yoga system was lost to the world.",
    explanation: "Over time, this sublime knowledge of yoga was lost from human memory as the ages passed."
},
"4.3": {
    shloka: "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः | भक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम् || 3 ||",
    meaning: "That very ancient science of the relationship with the Supreme is today told by Me to you because you are My devotee as well as My friend and can therefore understand the transcendental mystery of this science.",
    explanation: "Krishna explains that He is revealing this ancient yoga system once again to Arjuna, as Arjuna is His devotee and friend, capable of understanding this profound knowledge."
},
"4.4": {
    shloka: "अर्जुन उवाच | अपरं भवतो जन्म परं जन्म विवस्वतः | कथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति || 4 ||",
    meaning: "Arjuna said: The sun-god Vivasvan is senior by birth to You. How am I to understand that in the beginning You instructed this science to him?",
    explanation: "Arjuna expresses confusion, questioning how Krishna could have instructed the science of yoga to the ancient sun-god Vivasvan, who preceded Krishna."
},
"4.5": {
    shloka: "श्रीभगवानुवाच | बहूनि मे व्यतीतानि जन्मानि तव चार्जुन | तान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप || 5 ||",
    meaning: "The Blessed Lord said: Many, many births both you and I have passed. I can remember all of them, but you cannot, O subduer of the enemy!",
    explanation: "Krishna reveals His transcendental knowledge and ability to recall past births, whereas ordinary beings like Arjuna cannot remember their previous lives."
},
"4.6": {
    shloka: "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् | प्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया || 6 ||",
    meaning: "Although I am unborn and My transcendental body never deteriorates, and although I am the Lord of all sentient beings, I still appear in every millennium in My original transcendental form.",
    explanation: "Krishna explains His eternal, unchanging nature as the Supreme Lord who manifests in His original form by His own spiritual potency, transcending birth and decay."
},
"4.7": {
    shloka: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् || 7 ||",
    meaning: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.",
    explanation: "Krishna describes His periodic descents into the world whenever there is a decline in righteousness and a rise in unrighteousness, to restore dharma (righteousness) and remove adharma (unrighteousness)."
},
"4.8": {
    shloka: "परित्राणाय साधूनां विनाशाय च दुष्कृताम् | धर्मसंस्थापनार्थाय सम्भवामि युगे युगे || 8 ||",
    meaning: "To deliver the pious and annihilate the miscreants, as well as to reestablish the principles of dharma, I Myself appear, millennium after millennium.",
    explanation: "Krishna declares His incarnations are for the protection of the righteous, destruction of the wicked, and restoration of dharma, occurring repeatedly throughout the ages."
},
"4.9": {
    shloka: "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः | त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन || 9 ||",
    meaning: "One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode, O Arjuna.",
    explanation: "Understanding the divine nature of Krishna's appearance and deeds leads one to attain liberation from the cycle of birth and death, achieving eternal residence in Krishna's abode."
},
"4.10": {
    shloka: "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः | बहवो ज्ञानतपसा पूता मद्भावमागताः || 10 ||",
    meaning: "Being freed from attachment, fear, and anger, being fully absorbed in Me, and taking refuge in Me, many, many persons in the past became purified by knowledge of Me—and thus they all attained transcendental love for Me.",
    explanation: "Krishna explains that those who have become free from attachment and fear and have taken refuge in Him, with their hearts absorbed in Him, attain pure knowledge and ultimately develop divine love for Him."
},
"4.11": {
    shloka: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् | मम वर्त्मानुवर्तन्ते मनुष्या पार्थ सर्वशः || 11 ||",
    meaning: "In whatever way people surrender unto Me, I reciprocate with them accordingly. Everyone follows My path in all respects, O son of Pritha.",
    explanation: "Krishna assures that He reciprocates with devotees according to their specific mode of surrender and that all paths ultimately lead to Him."
},
"4.12": {
    shloka: "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः | क्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा || 12 ||",
    meaning: "Men in this world desire success in their activities, and therefore they worship the demigods. Quickly, of course, men get results from work in this world.",
    explanation: "People desiring success worship various demigods to quickly attain the fruits of their actions in this material world."
},
"4.13": {
    shloka: "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः | तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् || 13 ||",
    meaning: "According to the three modes of material nature and the work associated with them, the four divisions of human society are created by Me. And although I am the creator of this system, you should know that I am yet the non-doer, being unchangeable.",
    explanation: "Krishna explains that He is the creator of the four social orders based on the divisions of guna (qualities) and karma (activities), but He Himself remains unattached and unaffected by His creation."
},
"4.14": {
    shloka: "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा | इति मां योऽभिजानाति कर्मभिर्न स बध्यते || 14 ||",
    meaning: "There is no work that affects Me, nor do I aspire for the fruits of action. One who understands this truth about Me also does not become entangled in the fruitive reactions of work.",
    explanation: "Krishna clarifies that He is not affected by any action nor does He desire the results of actions. One who understands this truth about Him is not bound by the reactions of work."
},
"4.15": {
    shloka: "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः | कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् || 15 ||",
    meaning: "Having known this, the ancient seekers of liberation also performed their prescribed duties, O Arjuna. Therefore, you should also perform your work following in their footsteps.",
    explanation: "The wise seekers of liberation, having understood this truth, engaged in their prescribed duties. Arjuna is advised to follow their example and perform his duties."
},
"4.16": {
    shloka: "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः | तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात् || 16 ||",
    meaning: "Even the intelligent are bewildered in determining what is action and what is inaction. Now I shall explain to you what action is, knowing which you shall be liberated from all misfortune.",
    explanation: "Even the wise are sometimes perplexed about what constitutes action and inaction. Krishna promises to explain this clearly, which will lead to liberation from all suffering."
},
"4.17": {
    shloka: "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः | अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः || 17 ||",
    meaning: "One must know the nature of action, the nature of inaction, and also the nature of forbidden activities. The path of work is mysterious.",
    explanation: "One must understand the complexities of action, inaction, and forbidden action. The path of work is profound and requires discernment."
},
"4.18": {
    shloka: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः | स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् || 18 ||",
    meaning: "One who sees inaction in action and action in inaction is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities.",
    explanation: "The truly intelligent person can perceive inaction within action and action within inaction. Such a person is situated in transcendental knowledge, even while engaging in various activities."
},
"4.19": {
    shloka: "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः | ज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः || 19 ||",
    meaning: "One whose every undertaking is free from desire for sense gratification, and whose actions are burnt by the fire of transcendental knowledge, is called a sage by the wise.",
    explanation: "The wise regard one as a sage whose every endeavor is devoid of desire for personal pleasure and whose actions are purified by the fire of spiritual knowledge."
},
"4.20": {
    shloka: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः | कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः || 20 ||",
    meaning: "Abandoning attachment to the fruits of activities, always content, and independent of possessions, though engaged in work, one does nothing at all.",
    explanation: "Being free from attachment to the results of actions, constantly satisfied, and without dependence on external possessions, one engaged in work does not actually do anything."
},
"4.21": {
    shloka: "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः | शारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम् || 21 ||",
    meaning: "A person who is free from desire and aversion, who is self-controlled and has renounced all possessions, and who acts only for the body’s maintenance, is not affected by sinful reactions.",
    explanation: "One who is desireless, self-controlled, devoid of possessiveness, and performs actions merely for bodily maintenance incurs no sin."
},
"4.22": {
    shloka: "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः | समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते || 22 ||",
    meaning: "Being satisfied with what comes to him by chance, free from dualities, free from envy, and equipoised in success and failure, even though he acts, he is not bound by his actions.",
    explanation: "Content with whatever comes naturally, beyond dualities, without jealousy, and indifferent to success or failure, such a person is unaffected by actions."
},
"4.23": {
    shloka: "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः | यज्ञायाचरतः कर्म समग्रं प्रविलीयते || 23 ||",
    meaning: "The work of a man who is unattached to the modes of material nature and who is fully situated in transcendental knowledge merges entirely into transcendence.",
    explanation: "Actions performed by one who is free from attachment, situated in knowledge, and unswayed by material qualities become fully absorbed in the transcendental."
},
"4.24": {
    shloka: "ब्रह्मार्पणं ब्रह्म हविः ब्रह्माग्नौ ब्रह्मणा हुतम्। ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना।।",
    meaning: "For the one who is absorbed in Brahman, the act of offering is Brahman, the oblation is Brahman, the fire into which the offering is made is also Brahman. Such a person, who is fully absorbed in Brahman, attains Brahman alone through their actions.",
    explanation: "Krishna describes the state of consciousness where a person sees everything as Brahman (the Supreme Reality). In this state, every action, offering, and the result of that action are seen as Brahman. Such a person, fully absorbed in Brahman, attains the state of Brahman through their actions."
},
"4.25": {
    shloka: "दैवमेवापरे यज्ञं योगिनः पर्युपासते | ब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति || 25 ||",
    meaning: "Some yogis perform sacrifices to the gods alone, while others—offering the self as sacrifice—sacrifice the self by the self in the fire of Brahman alone.",
    explanation: "Certain yogis offer sacrifices to demigods, while others offer the self as sacrifice into the supreme Brahman through the fire of self-knowledge."
},
"4.26": {
    shloka: "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति | शब्दादीन्विषयानन्ये इन्द्रियाग्निषु जुह्वति || 26 ||",
    meaning: "Some offer hearing and other senses as sacrifice in the fire of restraint. Others offer sound and other objects of the senses as sacrifice in the fire of the senses.",
    explanation: "Some restrain their senses and offer them as sacrifice into the fire of self-control, while others offer the objects of the senses into the fire of the senses themselves."
},
"4.27": {
    shloka: "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे | आत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते || 27 ||",
    meaning: "Others offer all the functions of the senses and the life breath as sacrifice in the fire of the controlled mind.",
    explanation: "Some offer all sensory activities and life functions into the fire of disciplined intellect."
},
"4.28": {
    shloka: "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे | स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः || 28 ||",
    meaning: "Some sacrifice wealth as offerings in the fire of sacrifice. Others offer penances in the fire of austerity. Some sacrifice wealth, penance, and yoga in the fire of wisdom, kindled by knowledge.",
    explanation: "Others perform sacrifice with material possessions, penance, yoga, or study, observing strict vows."
},
"4.29": {
    shloka: "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे | प्राणापानगती रुद्ध्वा प्राणायामपरायणाः || 29 ||",
    meaning: "Some offer outgoing breath into incoming breath, and incoming breath into outgoing breath, restraining the course of both. Others, regulated by the practice of breath control, offer the inhaled breath into the exhaled breath and the exhaled breath into the inhaled breath.",
    explanation: "Some control their breath, merging outgoing breath into incoming breath and vice versa, while others regulate their breathing with devotion."
},
"4.30": {
    shloka: "अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति | सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः || 30 ||",
    meaning: "Others, who regulate their eating, offer their life breaths in the life breaths. All these are knowers of sacrifice, whose sins are cleansed by sacrifice.",
    explanation: "Others, who regulate their diet, sacrifice their vital airs into their vital airs. All these are versed in sacrifice, and their impurities are purified by sacrifice."
},
"4.31": {
    shloka: "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः | भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् || 31 ||",
    meaning: "The devotees of the Lord are released from all kinds of sins because they eat food which is offered first for sacrifice. Others, who prepare food for personal sense enjoyment, verily eat only sin.",
    explanation: "The righteous, who partake of the remnants of sacrifices, are freed from all sins. Others, who cook for personal pleasure without offering to the divine, eat nothing but sin."
},
"4.32": {
    shloka: "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे। कर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे।।",
    meaning: "All these different types of sacrifice are approved by the Vedas, and all of them are born of different types of work. Knowing them as such, you will become liberated.",
    explanation: "Krishna explains that various kinds of sacrifices prescribed in the Vedas are rooted in different types of duties and actions. Understanding this, one attains liberation."
},
"4.33": {
    shloka: "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप। सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते।।",
    meaning: "O scorcher of foes, the sacrifice performed in knowledge is superior to the sacrifice of material possessions. After all, O Partha, all sacrifices of work culminate in knowledge.",
    explanation: "Krishna explains to Arjuna that sacrifices performed with knowledge are superior to material sacrifices. Ultimately, all forms of sacrifices lead to knowledge."
},
"4.34": {
    shloka: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया। उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः।।",
    meaning: "Know that by prostrating oneself, by inquiry, and by service, the wise who have realized the truth will impart knowledge to you.",
    explanation: "Krishna advises Arjuna to approach wise teachers with humility, inquiry, and service. Such wise seers, having realized the truth, will impart knowledge."
},
"4.35": {
    shloka: "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव। येन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि।।",
    meaning: "And knowing which, O Pandava, you will not again become deluded in this way, and by that knowledge you will see the entire creation within your own self and also in Me.",
    explanation: "Krishna assures Arjuna that once he attains this knowledge, he will not be subject to delusion again. He will perceive all beings within himself and in Krishna."
},
"4.36": {
    shloka: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः। सर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि।।",
    meaning: "Even if you are considered the most sinful among all sinners, by the boat of knowledge alone, you will cross over all sin.",
    explanation: "Krishna assures Arjuna that with the boat of knowledge, one can transcend all sins and impurities, no matter how grave they may be."
},
"4.37": {
    shloka: "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन। ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा।।",
    meaning: "Just as a blazing fire reduces fuel to ashes, O Arjuna, so does the fire of knowledge reduce all actions to ashes.",
    explanation: "Krishna compares the fire of knowledge to a blazing fire that burns all actions to ashes. Knowledge destroys the binding effects of actions."
},
"4.38": {
    shloka: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति।।",
    meaning: "In this world, there is nothing as purifying as knowledge. One who is perfected in yoga finds this knowledge within themselves in due course of time.",
    explanation: "Krishna states that nothing in this world is as purifying as true knowledge. Through the practice of yoga, one attains this knowledge over time."
},
"4.39": {
    shloka: "श्रद्धावान्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति।।",
    meaning: "The faithful, with subdued mind and senses, obtains knowledge. Having obtained knowledge, they attain supreme tranquility quickly.",
    explanation: "Krishna explains that the faithful, with a controlled mind and senses, attain knowledge. Through this knowledge, they swiftly attain supreme peace."
},
"4.40": {
    shloka: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति। नायं लोकोऽस्ति न परो न सुखं संशयात्मनः।।",
    meaning: "But the ignorant and faithless, and the doubting soul, perish. For the doubting soul, there is neither this world nor the world beyond, nor even happiness.",
    explanation: "Krishna warns that the ignorant, faithless, and doubting soul meets destruction. Such individuals find no happiness in this world or beyond."
},
"4.41": {
    shloka: "योगसन्न्यस्तकर्माणं ज्ञानसंछिन्नसंशयम्। आत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय।।",
    meaning: "The one who has renounced actions through yoga, whose doubts are destroyed by knowledge, and who is self-realized, their actions do not bind them, O Arjuna.",
    explanation: "Krishna explains that one who has relinquished selfish actions through yoga, whose doubts are dispelled by knowledge, and who is self-realized, is not bound by actions."
},
"4.42": {
    shloka: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः। छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत।।",
    meaning: "Therefore, with the sword of knowledge, cut asunder the doubts born of ignorance residing in your heart. Stand up and fight, O Arjuna.",
    explanation: "Krishna urges Arjuna to eradicate doubts born of ignorance with the weapon of knowledge. He encourages Arjuna to rise up and engage in his duty fearlessly."
},
"5.1": {
    shloka: "अर्जुन उवाच | संन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि | यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम् || 1 ||",
    meaning: "Arjuna said: O Krishna, you praise renunciation of actions and also the performance of actions. Please tell me decisively which one is better of the two.",
    explanation: "Arjuna seeks clarification from Krishna regarding whether renunciation of actions (Sannyasa) or performing actions with detachment (Karma Yoga) is superior for spiritual progress."
},
"5.2": {
    shloka: "श्रीभगवानुवाच | संन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ | तयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते || 2 ||",
    meaning: "The Supreme Personality of Godhead said: The renunciation of work and work in devotion are both good for liberation. But, of the two, work in devotional service is superior to renunciation of work.",
    explanation: "Krishna explains that both renunciation of work (Sannyasa) and working in devotion (Karma Yoga) lead to liberation, but performing actions with devotion is considered superior to mere renunciation."
},
"5.3": {
    shloka: "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति | निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते || 3 ||",
    meaning: "One who neither hates nor desires the fruits of his activities is known to be always renounced. Such a person, liberated from all dualities, easily overcomes material bondage and is completely liberated, O mighty-armed Arjuna.",
    explanation: "Krishna describes the true renunciant as one who remains unaffected by desires and aversions, thus transcending all dualities. Such a person attains happiness and freedom from material bondage."
},
"5.4": {
    shloka: "सांख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः | एकमप्यास्थितः सम्यगुभयोर्विन्दते फलम् || 4 ||",
    meaning: "Only the ignorant speak of Sankhya (renunciation of fruitive work) and Yoga (work in devotional service) as different. Those who are truly learned say that by applying oneself to either, one can achieve the results of both.",
    explanation: "Krishna explains that the paths of Sankhya (renunciation) and Yoga (devotion) lead to the same goal. Both approaches can yield the desired spiritual outcome when sincerely practiced."
},
"5.5": {
    shloka: "यत्सांख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते | एकं सांख्यं च योगं च यः पश्यति स पश्यति || 5 ||",
    meaning: "One who knows that the position reached by means of renunciation can also be attained by works in devotional service, and who therefore sees that the path of works and the path of renunciation are one, sees things as they are.",
    explanation: "Krishna teaches that a wise person understands how the path of renunciation (Sankhya) and the path of devotion (Yoga) are not separate but interconnected. Such a person perceives the truth."
},
"5.6": {
    shloka: "संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः | योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति || 6 ||",
    meaning: "But renunciation of the fruits of actions through the path of Yoga is verily the means of attaining liberation, O mighty-armed Arjuna. The wise, united in Yoga, quickly attain the Supreme.",
    explanation: "Krishna emphasizes that renunciation of the fruits of actions through the path of devotion (Yoga) is the effective means to attain liberation. Those who practice Yoga diligently and with wisdom swiftly attain the ultimate goal."
},
"5.7": {
    shloka: "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः | सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते || 7 ||",
    meaning: "Endowed with purified intellect, subduing the mind with determination, free from desires and attachments, and controlling the senses through the mind, such a self-realized person, although performing actions, does not become entangled.",
    explanation: "The one who is united with Yoga, possesses a purified mind, has self-control, and is free from attachment, remains unaffected while engaging in actions. This state of detachment is achieved through self-realization."
},
"5.8": {
    shloka: "नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित् | पश्यञ्श्रृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन् || 8 ||",
    meaning: "A person in the divine consciousness, although engaged in seeing, hearing, touching, smelling, eating, moving about, sleeping, and breathing, considers themselves neutral and does nothing, because they are always situated in the transcendental understanding.",
    explanation: "The enlightened person, while engaging in various activities of the senses, remains detached and perceives themselves as separate from these actions, always established in spiritual knowledge and awareness."
},
"5.9": {
    shloka: "प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि | इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन् || 9 ||",
    meaning: "A person who acts in knowledge, abandoning all attachment, is untouched by sinful actions, as the lotus leaf remains unaffected by water.",
    explanation: "The enlightened person, acting with understanding, remains unaffected by the senses and their objects, just as a lotus leaf remains untouched by water."
},
"5.10": {
    shloka: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः | लिप्यते न स पापेन पद्मपत्रमिवाम्भसा || 10 ||",
    meaning: "One who dedicates all actions to the Supreme, abandoning attachment, remains untouched by sin, just as a lotus leaf is untouched by water.",
    explanation: "By offering all actions to the Supreme and renouncing attachment, a person remains unaffected by sin, similar to how a lotus leaf remains unstained by water."
},
"5.11": {
    shloka: "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि | योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये || 11 ||",
    meaning: "The yogis, who perform actions only with the body, mind, intelligence, and even with the senses, all for the sake of purification, abandon attachment.",
    explanation: "Yogis engage in actions with full awareness, using their body, mind, intelligence, and senses for the sake of purification, while renouncing attachment to the fruits of their actions."
},
"5.12": {
    shloka: "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम् | अयुक्तः कामकारेण फले सक्तो निबध्यते || 12 ||",
    meaning: "The steadfast in Yoga, abandoning attachment to the fruits of actions, attains peace, while the one who is not steadfast, attached to the desires for the fruits, becomes bound.",
    explanation: "By renouncing attachment to the results of actions, the determined practitioner of Yoga achieves peace, whereas the one who is attached to desires and the results of actions becomes bound by them."
},
"5.13": {
    shloka: "सर्वकर्माणि मनसा संन्यस्यास्ते सुखं वशी | नवद्वारे पुरे देही नैव कुर्वन्न कारयन् || 13 ||",
    meaning: "The embodied being who renounces all actions by the mind and rests in self-realization enjoys undying happiness, for one who does not engage the senses and the mind in sense gratification, who is beyond the dualities of pain and pleasure, and who lives free from attachment, fear, and anger, attains the supreme abode.",
    explanation: "The enlightened person, having renounced all actions mentally, finds happiness within themselves. They do not engage the senses in sense gratification but remain steadfast in self-realization, transcending dualities and achieving liberation."
},
"5.14": {
    shloka: "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः | न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते || 14 ||",
    meaning: "The Supreme Lord does not create agency or actions for the world, nor does He create the fruits of actions. It is the inherent nature that acts.",
    explanation: "The Supreme Lord does not impose agency or actions on beings, nor does He create the results of actions. It is the nature of beings (swabhava) that drives action."
},
"5.15": {
    shloka: "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः | अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः || 15 ||",
    meaning: "The all-pervading Supreme Lord does not partake in anyone’s sinful or virtuous deeds. Knowledge is enveloped by ignorance, and thus beings are deluded.",
    explanation: "The Supreme Lord remains unaffected by the actions of beings, whether good or bad. Beings are deluded by ignorance, which covers their knowledge."
},
"5.16": {
    shloka: "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः | तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् || 16 ||",
    meaning: "But for those whose ignorance is destroyed by knowledge of the self, their knowledge, like the sun, reveals the Supreme.",
    explanation: "For those whose ignorance is dispelled by self-knowledge, their understanding shines brightly like the sun, revealing the Supreme Truth."
},
"5.17": {
    shloka: "तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः | गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः || 17 ||",
    meaning: "Those whose intellect is fixed in that knowledge and who are wholly absorbed in it, their impurities washed away by knowledge, they attain the Supreme and do not return to the cycle of birth and death.",
    explanation: "Those who have their intellect and self firmly established in this knowledge, and who are fully dedicated to it, having cleansed themselves of all impurities through knowledge, attain the Supreme and are not subject to rebirth."
},
"5.18": {
    shloka: "विद्याविनयसंपन्ने ब्राह्मणे गवि हस्तिनि | शुनि चैव श्वपाके च पण्डिताः समदर्शिनः || 18 ||",
    meaning: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brāhmaṇa, a cow, an elephant, a dog, and a dog-eater [outcaste].",
    explanation: "Those endowed with true knowledge and humility perceive with equal vision the learned scholar, the cow, the elephant, the dog, and even the dog-eater."
},
"5.19": {
    shloka: "इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः | निर्दोषं हि समं ब्रह्म तस्माद् ब्रह्मणि ते स्थिताः || 19 ||",
    meaning: "The serene sages, whose minds are established in equality, conquer the cycle of birth and death even in this life. They are flawless like Brahman, and thus they reside in Brahman.",
    explanation: "Those whose minds are steadfast in equanimity conquer the cycle of birth and death in this life itself. They are faultless like Brahman, and thus they reside in Brahman."
},
"5.20": {
    shloka: "न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम् | स्थिरबुद्धिरसम्मूढो ब्रह्मविद् ब्रह्मणि स्थितः || 20 ||",
    meaning: "A person with steady intellect, undeluded, neither rejoices upon achieving something pleasant nor laments upon obtaining something unpleasant, such a person is firmly fixed in perfect knowledge.",
    explanation: "The wise person, whose intellect is steady and undisturbed, neither delights in obtaining what is pleasant nor is disturbed by what is unpleasant. Such a person is established in knowledge of Brahman."
},
"5.21": {
    shloka: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम् | स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते || 21 ||",
    meaning: "An undistracted person, who abstains from external sense pleasures, finds happiness in the self. Endeavoring in the path of Brahman, with a disciplined mind, one attains eternal happiness.",
    explanation: "The self-controlled person, who is detached from external sensory pleasures, finds happiness within themselves. Such a person, engaged in the path of Brahman with disciplined senses, attains everlasting happiness."
},
"5.22": {
    shloka: "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते | आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः || 22 ||",
    meaning: "The pleasures born of contact with the senses are sources of suffering, having a beginning and an end, O Arjuna. The wise do not delight in them.",
    explanation: "The pleasures derived from contact with the senses are the causes of suffering, being temporary and fleeting. The wise, therefore, do not find delight in them."
},
"5.23": {
    shloka: "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात् | कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः || 23 ||",
    meaning: "Before giving up the body, if one is able to withstand the urges arising from lust and anger, such a person is a yogi and happy.",
    explanation: "The one who, before death, is able to conquer the urges arising from desire and anger, is truly a yogi and experiences happiness."
},
"5.24": {
    shloka: "योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः | स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति || 24 ||",
    meaning: "The yogi, who is joyful within, and is enjoying the inner light, is united with Brahman and attains liberation, becoming one with Brahman.",
    explanation: "The yogi who finds happiness within and delights in the inner light attains liberation, realizing their unity with Brahman."
},
"5.25": {
    shloka: "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः | छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः || 25 ||",
    meaning: "The sages, whose sins have been eradicated, who are freed from the dualities of doubt, whose minds are disciplined, and who are engaged in welfare for all beings, attain liberation in Brahman.",
    explanation: "The enlightened sages, having purified themselves of sins and doubts, having unified minds, and being dedicated to the welfare of all beings, attain liberation in Brahman."
},
"5.26": {
    shloka: "कामक्रोधवियुक्तानां यतीनां यतचेतसाम् | अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् || 26 ||",
    meaning: "The yogis who are free from attachment, who have subdued the mind and senses, and who are devoted to the welfare of all, attain liberation in Brahman, which is known to those of self-realization.",
    explanation: "The yogis, devoid of attachment, having controlled their minds and senses, and being dedicated to the welfare of all, move about in Brahman, known to those who have realized the Self."
},
"5.27": {
    shloka: "स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः | प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ || 27 ||",
    meaning: "Shutting out external contacts and fixing the gaze between the eyebrows, equalizing the inflowing and outgoing breaths within the nostrils,",
    explanation: "By blocking external sensations and focusing the gaze between the eyebrows, stabilizing the inflow and outflow of breath within the nostrils,"
},
"5.28": {
    shloka: "यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः | विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः || 28 ||",
    meaning: "The sage, who is engaged in the practice of concentration, mind, and intellect, and who is completely free from desires, fear, and anger, is always liberated.",
    explanation: "The sage, absorbed in the practice of focusing the senses, mind, and intellect, who is devoid of desires, fear, and anger, remains perpetually liberated."
},
"5.29": {
    shloka: "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम् | सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति || 29 ||",
    meaning: "Knowing Me as the enjoyer of all sacrifices and austerities, the Supreme Lord of all worlds, and the friend of all beings, one attains peace.",
    explanation: "Realizing Krishna as the ultimate enjoyer of sacrifices and austerities, the Supreme Lord of all realms, and the friend of all living beings, one attains peace."
},
"6.1": {
    shloka: "श्रीभगवानुवाच | अनाश्रितः कर्मफलं कार्यं कर्म करोति यः | स सन्न्यासी च योगी च न निरग्निर्न चाक्रियः || 1 ||",
    meaning: "The Supreme Personality of Godhead said: One who performs their duty without attachment, surrendering the results unto the Supreme God, is unaffected by sinful action, as the lotus leaf is untouched by water.",
    explanation: "In this verse, Krishna describes the ideal renunciant (sannyasi) and yogi who performs their duties without attachment to the results, like a lotus leaf untouched by water."
},
"6.2": {
    shloka: "यं संन्यासमिति प्राहुर्योगं तं विद्धि पाण्डव | न ह्यसंन्यस्तसङ्कल्पो योगी भवति कश्चन || 2 ||",
    meaning: "What is called renunciation you should know to be the same as yoga, or linking oneself with the Supreme, O son of Pandu, for one can never become a yogi unless they renounce the desire for sense gratification.",
    explanation: "Krishna explains that true renunciation (sannyasa) is synonymous with yoga (union with the Supreme). One cannot attain the state of a yogi without renouncing the desire for material pleasures."
},
"6.3": {
    shloka: "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते | योगारूढस्य तस्यैव शमः कारणमुच्यते || 3 ||",
    meaning: "For one who is a neophyte in the practice of yoga, work is said to be the means; and for one who is already elevated in yoga, cessation of all material activities is said to be the means.",
    explanation: "Krishna explains that for a beginner in yoga, performing prescribed duties is the means, while for an advanced yogi, cessation of all material activities is the means to attain peace."
},
"6.4": {
    shloka: "यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते | सर्वसङ्कल्पसन्न्यासी योगारूढस्तदोच्यते || 4 ||",
    meaning: "A person is said to be elevated in yoga when, having renounced all material desires, they neither act for sense gratification nor engage in fruitive activities.",
    explanation: "Krishna describes an advanced yogi as one who has renounced all desires for sense gratification and does not engage in activities aimed at material gain."
},
"6.5": {
    shloka: "उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत् | आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः || 5 ||",
    meaning: "Let a person lift themself by themself; let them not degrade themself; for the self alone is the friend of the self, and the self alone is the enemy of the self.",
    explanation: "Krishna emphasizes the importance of self-discipline and self-control. One must elevate oneself through their own efforts and not degrade oneself, as the mind can be one's best friend or worst enemy."
},
"6.6": {
    shloka: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः | अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् || 6 ||",
    meaning: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind will remain the greatest enemy.",
    explanation: "A disciplined mind is a person's best friend, while an undisciplined mind can become their worst enemy."
},
"6.7": {
    shloka: "जितात्मनः प्रशान्तस्य परमात्मा समाहितः | शीतोष्णसुखदुःखेषु तथा मानापमानयोः || 7 ||",
    meaning: "For one who has conquered the mind, the Super Soul (Paramatma) is already reached, for they have attained tranquility. To such a person, happiness and distress, heat and cold, honor and dishonor are all the same.",
    explanation: "Having controlled the mind, a person realizes the presence of the Supreme Soul within and attains peace. They remain undisturbed by dualities like pleasure and pain, heat and cold, and honor and dishonor."
},
"6.8": {
    shloka: "ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः | युक्त इत्युच्यते योगी समलोष्टाश्मकांचनः || 8 ||",
    meaning: "A person is said to be established in self-realization and is satisfied with knowledge and wisdom. Such a person, being fixed in trance, is victorious over the senses and is thus engaged in yoga. This is a yogi's highest perfection.",
    explanation: "The perfected yogi is contented with knowledge and wisdom, remaining undisturbed and victorious over the senses. Such a yogi is truly united with the Supreme."
},
"6.9": {
    shloka: "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु | साधुष्वपि च पापेषु समबुद्धिर्विशिष्यते || 9 ||",
    meaning: "A person is considered to be still further advanced when they regard all—the honest well-wisher, friends and enemies, the envious, the pious, the sinner and those who are indifferent and impartial—with an equal mind.",
    explanation: "The higher stage of yogic realization is attained when a person treats everyone equally, whether they are friendly, hostile, sinful, or virtuous."
},
"6.10": {
    shloka: "योगी युञ्जीत सततमात्मानं रहसि स्थितः | एकाकी यतचित्तात्मा निराशीरपरिग्रहः || 10 ||",
    meaning: "A yogi should constantly engage in yoga, with an undeviating mind, and should restrain the mind from dwelling on sense objects. They should remain secluded and alone, eating lightly, with controlled body, speech, and mind, free from possessions.",
    explanation: "The yogi, with a focused mind, should practice meditation in a secluded place, maintaining simplicity and detachment from worldly possessions."
},
"6.11": {
    shloka: "शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः | नात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् || 11 ||",
    meaning: "Establishing oneself in a sacred place, having fixed the seat of meditation, not too high or too low, and covered with sacred Kusha grass, a deerskin, and a cloth, one should practice meditation.",
    explanation: "The yogi should prepare a clean and stable seat in a sacred place, neither too high nor too low, and cover it with Kusha grass, a deerskin, and a cloth to practice meditation."
},
"6.12": {
    shloka: "तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः | उपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये || 12 ||",
    meaning: "With the mind focused on a single point, with thoughts and senses controlled, let the yogi practice meditation for self-purification.",
    explanation: "Sitting on the prepared seat, the yogi should concentrate the mind and control the senses to engage in meditation for the purification of the self."
},
"6.13": {
    shloka: "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः | सम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन् || 13 ||",
    meaning: "Keeping the body, neck, and head straight and steady, motionless and still, fix the gaze at the tip of the nose without looking around.",
    explanation: "The yogi should sit with the body erect and steady, focused at the tip of the nose without allowing the gaze to wander."
},
"6.14": {
    shloka: "प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः | मनः संयम्य मच्चित्तो युक्त आसीत मत्परः || 14 ||",
    meaning: "With a tranquil mind, free from fear, practicing the vow of celibacy, controlling the mind and thoughts, and fixing the mind on Me, the Supreme, one should sit in meditation with Me as the ultimate goal.",
    explanation: "The yogi, having a peaceful mind and free from fear, should control the mind and direct it towards the Supreme, practicing celibacy and focusing the thoughts on Krishna."
},
"6.15": {
    shloka: "युञ्जन्नेवं सदात्मानं योगी नियतमानसः | शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति || 15 ||",
    meaning: "Thus, constantly keeping the mind absorbed in meditation, the yogi of disciplined mind attains the supreme peace of Nirvana by entering into Me.",
    explanation: "By continuously practicing meditation and keeping the mind absorbed in the Supreme, the disciplined yogi attains the ultimate peace of Nirvana and unites with Krishna."
},
"6.16": {
    shloka: "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः | न चाति स्वप्नशीलस्य जाग्रतो नैव चार्जुन || 16 ||",
    meaning: "There is no possibility of yoga for one who eats too much or eats too little, sleeps too much or does not sleep enough, O Arjuna.",
    explanation: "Krishna explains that excessive eating or fasting, excessive sleeping or lack of sleep, prevents one from achieving the discipline necessary for yoga."
},
"6.17": {
    shloka: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु | युक्तस्वप्नावबोधस्य योगो भवति दुःखहा || 17 ||",
    meaning: "For one who is moderate in eating and recreation, moderate in performing actions, moderate in sleep and wakefulness, yoga becomes the destroyer of misery.",
    explanation: "Yoga destroys sorrow for the one who is moderate in eating, recreation, work, sleep, and wakefulness."
},
"6.18": {
    shloka: "यदा विनियतं चित्तमात्मन्येवावतिष्ठते | निःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा || 18 ||",
    meaning: "When the disciplined mind is situated in the self alone and is free from desire for all enjoyments, then one is said to be in trance.",
    explanation: "When the disciplined mind rests undisturbed in the self, free from longing for any worldly pleasures, then one is said to be in yoga."
},
"6.19": {
    shloka: "यथा दीपो निवातस्थो नेंगते सोपमा स्मृता | योगिनो यतचित्तस्य युञ्जतो योगमात्मनः || 19 ||",
    meaning: "As a lamp in a windless place does not waver, so the transcendentalist whose mind is controlled remains always steady in their meditation on the transcendent self.",
    explanation: "Just as a lamp in a windless place does not flicker, similarly, the yogi whose mind is controlled remains steadfast in meditation on the Supreme Self."
},
"6.20": {
    shloka: "यत्रोपरमते चित्तं निरुद्धं योगसेवया | यत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति || 20 ||",
    meaning: "In the stage of perfection called trance, or samadhi, one’s mind is completely restrained from material mental activities by practice of yoga. This perfection is characterized by one’s ability to see the self by the pure mind and to relish and rejoice in the self.",
    explanation: "In the state of perfect meditation (samadhi), the mind is completely restrained from worldly thoughts through the practice of yoga. At this stage, the yogi sees the self by the purified mind and finds satisfaction and joy within the self."
},
"6.21": {
    shloka: "सुखमात्यन्तिकं यत्तद् बुद्धिग्राह्यमतीन्द्रियम् | वेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः || 21 ||",
    meaning: "Such a happiness, which is beyond the senses but perceivable by the intellect, comes from steady concentration upon the Supreme. When in this state, one is no longer shaken even amidst the greatest of difficulties.",
    explanation: "The sublime joy that is beyond the senses but comprehensible by the intellect is attained through unwavering devotion to the Supreme. In this state, one remains steadfast even in the face of great challenges."
},
"6.22": {
    shloka: "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः | यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते || 22 ||",
    meaning: "Having obtained this state, one thinks there is no greater gain. Being situated in this state, one is not shaken even by the heaviest of sorrow.",
    explanation: "Once having attained this state, a person sees no greater gain. Being established in this state, one remains unshaken even by the most severe of distresses."
},
"6.23": {
    shloka: "तं विद्याद् दुःखसंयोगवियोगं योगसंज्ञितम् | स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा || 23 ||",
    meaning: "That which is called yoga—severance from the union with suffering—is known by the sages as the state of liberation. This yoga should be practiced with determination and with an undisturbed mind.",
    explanation: "The sages define yoga as the process of separating oneself from the suffering that arises from material entanglement. This yoga should be practiced with determination and a focused mind."
},
"6.24": {
    shloka: "सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः | मनसैवेन्द्रियग्रामं विनियम्य समन्ततः || 24 ||",
    meaning: "Renouncing all desires born of imagination, and completely restraining the senses with the mind from all sides.",
    explanation: "By renouncing all desires arising from the mind and completely controlling the senses, one attains peace and purity of mind."
},
"6.25": {
    shloka: "शनैः शनैरुपरमेद्-बुद्ध्या धृतिगृहीतया | आत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत् || 25 ||",
    meaning: "Gradually, step by step, one should become situated in trance by means of intelligence sustained by full conviction, and thus the mind should be fixed on the Self alone and should think of nothing else.",
    explanation: "Through gradual practice, with a determined intellect and controlled mind, one should establish themselves in meditation, focusing the mind solely on the self and avoiding all other thoughts."
},
"6.26": {
    shloka: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् | ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् || 26 ||",
    meaning: "Whenever and wherever the mind wanders due to its unsteady and restless nature, one must bring it back under the control of the self.",
    explanation: "Whenever and wherever the mind wanders due to its restless and unsteady nature, one should discipline it and bring it back under control."
},
"6.27": {
    shloka: "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् | उपैति शान्तरजसं ब्रह्मभूतमकल्मषम् || 27 ||",
    meaning: "The yogi whose mind is tranquil, whose passions are pacified, and who is free from sin, attains the supreme bliss of liberation by realizing the Supreme.",
    explanation: "The serene-minded yogi, whose passions are subdued and who is free from sin, attains the highest happiness of becoming one with Brahman, the ultimate truth."
},
"6.28": {
    shloka: "युञ्जन्नेवं सदाऽऽत्मानं योगी विगतकल्मषः | सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते || 28 ||",
    meaning: "Thus, constantly engaged in yoga, the yogi with an unperturbed mind attains eternal happiness by touching the Supreme with the soul.",
    explanation: "The yogi who consistently practices meditation with a purified mind attains supreme and everlasting happiness by connecting with the divine through the soul."
},
"6.29": {
    shloka: "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि | ईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः || 29 ||",
    meaning: "A true yogi sees their own self situated in all beings and all beings situated in the self. Such a yogi sees everything with an equal vision.",
    explanation: "The perfected yogi perceives their own self within all beings and all beings within themselves. Such a yogi sees all things with equal vision."
},
"6.30": {
    shloka: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति | तस्याहं न प्रणश्यामि स च मे न प्रणश्यति || 30 ||",
    meaning: "For one who sees Me everywhere and sees everything in Me, I am never lost to them, nor are they ever lost to Me.",
    explanation: "Krishna explains the profound connection between the self-realized yogi and the Supreme. One who perceives the divine presence everywhere and sees all beings within the divine remains eternally connected to Krishna."
},
"6.31": {
    shloka: "सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः | सर्वथा वर्तमानोऽपि स योगी मयि वर्तते || 31 ||",
    meaning: "Such a yogi, who engages in devotion with unwavering determination, is situated in transcendence and is wholeheartedly absorbed in Me, regardless of their external behavior.",
    explanation: "The yogi who worships the Supreme with single-minded devotion, remaining steady in all circumstances, is truly absorbed in Krishna."
},
"6.32": {
    shloka: "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन | सुखं वा यदि वा दुःखं स योगी परमो मतः || 32 ||",
    meaning: "A true yogi observes Me in all beings and also sees every being in Me. Indeed, the self-realized person sees Me everywhere. For one who sees Me everywhere and sees everything in Me, I am never lost, nor are they ever lost to Me.",
    explanation: "Krishna describes the vision of the perfected yogi who sees the divine presence within all beings and all beings within the divine. Such a yogi remains connected to Krishna in happiness and in distress."
},
"6.33": {
    shloka: "अर्जुन उवाच | योऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन | एतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम् || 33 ||",
    meaning: "Arjuna said: O Madhusudana, Krishna, the system of yoga which You have summarized appears impractical and unendurable to me, due to the restless nature of the mind.",
    explanation: "Arjuna expresses his doubt to Krishna about the practicality of the yoga system described due to the restless nature of the mind."
},
"6.34": {
    shloka: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद् दृढम् | तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् || 34 ||",
    meaning: "Krishna, the mind is restless, turbulent, strong, and unyielding. I consider it as difficult to control as the wind.",
    explanation: "Arjuna compares the restless and unruly mind to the uncontrollable force of the wind, expressing his struggle in controlling it."
},
"6.35": {
    shloka: "श्रीभगवानुवाच | असंशयं महाबाहो मनो दुर्निग्रहं चलम् | अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते || 35 ||",
    meaning: "The Supreme Personality of Godhead said: O mighty-armed son of Kunti, it is undoubtedly very difficult to curb the restless mind, but it is possible by constant practice and detachment.",
    explanation: "Krishna acknowledges the difficulty in controlling the restless mind but assures Arjuna that it can be subdued through consistent practice and detachment."
},
"6.36": {
    shloka: "असंयतात्मना योगो दुष्प्राप इति मे मतिः | वश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः || 36 ||",
    meaning: "For one who is not connected to the Supreme through yoga, this practice is difficult to attain, O Arjuna. But the self-controlled and striving yogi can attain it by proper means.",
    explanation: "Krishna explains that yoga is challenging for those who lack self-control, but it is achievable for those who are disciplined and diligently practice."
},
"6.37": {
    shloka: "अर्जुन उवाच | अयतिः श्रद्धयोपेतो योगाच्चलितमानसः | अप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति || 37 ||",
    meaning: "Arjuna said: What is the fate of the unsuccessful yogi who begins the path of self-realization with faith but who does not achieve perfection in yoga due to a distracted mind, and thus does not attain the goal, O Krishna?",
    explanation: "Arjuna queries Krishna about the destiny of a yogi who starts the path of self-realization but fails to achieve perfection due to a lack of focus."
},
"6.38": {
    shloka: "कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति | अप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि || 38 ||",
    meaning: "O mighty-armed Krishna, does not such a person, being deviated from the path of transcendence, perish like a broken cloud, with no position in any sphere?",
    explanation: "Arjuna questions whether such a person, deviated from the path of yoga, will perish like a cloud devoid of water, having lost their position in both material and spiritual realms."
},
"6.39": {
    shloka: "एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः | त्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते || 39 ||",
    meaning: "This doubt of mine, O Krishna, you should completely dispel. There is no one else who can do this but You.",
    explanation: "Arjuna implores Krishna to dispel his doubt completely, acknowledging that only Krishna can clarify it."
},
"6.40": {
    shloka: "श्रीभगवानुवाच | पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते | न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति || 40 ||",
    meaning: "The Supreme Personality of Godhead said: O Partha, there is no destruction for one who practices yoga; neither in this world, nor in the next. No one who does good, O My son, ever comes to an evil end.",
    explanation: "Krishna assures Arjuna that no sincere practitioner of yoga faces destruction; they do not suffer misfortune in this world or the next, for virtuous deeds protect them."
},
"6.41": {
    shloka: "प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः। शुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते।। 41 ||",
    meaning: "Having attained the worlds of the righteous and dwelling there for eternal years, one who has fallen from yoga is born in the house of righteous and prosperous parents.",
    explanation: "Krishna describes the fate of a fallen yogi who, after enjoying the heavenly realms for many years due to their virtuous deeds, is then reborn in a noble and prosperous family."
},
"6.42": {
    shloka: "अथवा योगिनामेव कुले भवति धीमताम्। एतद्धि दुर्लभतरं लोके जन्म यदीदृशम् ।। 42 ||",
    meaning: "Or the yogi is born into a family of wise yogis, possessing wisdom. Such a birth is rare in this world.",
    explanation: "Krishna explains another outcome for the fallen yogi, where they may be born into a family of accomplished yogis, a rare and auspicious birth in this world."
},
"6.43": {
    shloka: "तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम्। यतते च ततो भूयः संसिद्धौ कुरुनन्दन।। 43 ||",
    meaning: "There, the yogi revives the wisdom acquired in the previous life and strives harder to attain perfection, O Arjuna.",
    explanation: "In the new birth, the fallen yogi regains their previous yogic knowledge and continues their pursuit towards spiritual perfection with increased effort."
},
"6.44": {
    shloka: "पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः। जिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते।। 44 ||",
    meaning: "By virtue of the divine consciousness attained in the previous life, they automatically become attracted to the practice of yoga. Even one who merely wishes to understand yoga transcends the Vedic rituals.",
    explanation: "Due to the yogic practices performed in the previous life, the aspirant naturally becomes inclined towards yoga. Mere curiosity about yoga surpasses the rituals of the Vedas."
},
"6.45": {
    shloka: "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः। अनेकजन्मसंसिद्धस्ततो याति परां गतिम्।। 45 ||",
    meaning: "But the yogi striving with perseverance, purified from sin, perfected through many births, then reaches the supreme goal.",
    explanation: "Krishna explains that the yogi, who diligently strives, is purified from all impurities, and has attained perfection over many lifetimes, eventually reaches the ultimate destination of union with the Divine."
},
"6.46": {
    shloka: "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः। कर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन।। 46 ||",
    meaning: "The yogi is superior to ascetics, superior to men of wisdom, and superior to men of action. Therefore, O Arjuna, strive to be a yogi.",
    explanation: "Krishna declares that a yogi surpasses ascetics, scholars, and even those engaged in actions (rituals and duties). Therefore, Arjuna should aim to become a yogi."
},
"6.47": {
    shloka: "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना। श्रद्धावान्भजते यो मां स मे युक्ततमो मतः।। 47 ||",
    meaning: "Of all yogis, the one with great faith who always abides in Me, thinks of Me within themselves, and worships Me with devotion is the most united with Me in yoga and is the highest of all.",
    explanation: "Krishna emphasizes that the yogi who has deep faith, always remembers Krishna within, and serves Krishna with love and devotion is the most intimately connected with the Supreme and is considered the highest among all yogis."
},
"7.1": {
    shloka: "श्रीभगवानुवाच | मय्यासक्तमना: पार्थ योगं युञ्जन्मदाश्रय:। असंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु।।",
    meaning: "The Supreme Personality of Godhead said: Now hear, O Arjuna, how by practicing yoga in full consciousness of Me, with mind attached to Me, you can know Me in full, free from doubt.",
    explanation: "Lord Krishna introduces the topic of transcendental knowledge (jnana yoga) to Arjuna, explaining how to attain complete realization of the Supreme by practicing yoga with dedication and a focused mind."
},
"7.2": {
    shloka: "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषत:। यज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते।।",
    meaning: "I shall declare to you this knowledge in full, along with its realization, which, having been known, nothing further shall remain to be known.",
    explanation: "Krishna promises to reveal comprehensive knowledge and realization to Arjuna. Once understood, nothing more will remain to be known."
},
"7.3": {
    shloka: "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये। यततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वत:।।",
    meaning: "Out of many thousands among men, one may endeavor for perfection, and of those who have achieved perfection, hardly one knows Me in truth.",
    explanation: "Krishna explains that among many striving for perfection, few truly understand Him in essence, indicating the rarity of true spiritual realization."
},
"7.4": {
    shloka: "भूमिरापोऽनलो वायु: खं मनो बुद्धिरेव च। अहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा।।",
    meaning: "Earth, water, fire, air, ether, mind, intelligence, and false ego—all together these constitute My separated material energies.",
    explanation: "Krishna describes His material energies, consisting of earth, water, fire, air, ether, mind, intelligence, and ego, as distinct manifestations of His cosmic energy."
},
"7.5": {
    shloka: "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम्। जीवभूतां महाबाहो ययेदं धार्यते जगत्।।",
    meaning: "Besides this inferior nature, O mighty-armed Arjuna, there is a superior energy of Mine, which comprises the living entities who are exploiting the resources of this material, inferior nature.",
    explanation: "Krishna explains the superior energy (para prakriti) as the living entities who, being part of His energy, animate and utilize the material world."
},
"7.6": {
    shloka: "एतद्योनीनि भूतानि सर्वाणीत्युपधारय। अहं कृत्स्नस्य जगत: प्रभव: प्रलयस्तथा।।",
    meaning: "Know that all living beings have their birth in these two natures. Of all that is material and all that is spiritual in this world, know for certain that I am both the origin and the dissolution.",
    explanation: "Krishna asserts His role as the origin and dissolution of all beings and material existence, encompassing both the manifested (material nature) and the unmanifested (spiritual nature)."
},
"7.7": {
    shloka: "मत्त: परतरं नान्यत्किञ्चिदस्ति धनञ्जय। मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव।।",
    meaning: "O conqueror of wealth [Arjuna], there is no Truth superior to Me. Everything rests upon Me, as pearls are strung on a thread.",
    explanation: "Krishna declares that there is nothing superior to Him, and all existence is dependent on Him, like pearls strung on a thread."
},
"7.8": {
    shloka: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययो:। प्रणव: सर्ववेदेषु शब्द: खे पौरुषं नृषु।।",
    meaning: "O son of Kunti [Arjuna], I am the taste of water, the light of the sun and the moon, the syllable Om in the Vedic mantras; I am the sound in ether and ability in man.",
    explanation: "Krishna elaborates on His manifestations as the taste of water, the light of the sun and the moon, the sacred Om in Vedic mantras, and the sound in ether and the strength in humans."
},
"7.9": {
    shloka: "पुण्यो गन्ध: पृथिव्यां च तेजश्चास्मि विभावसौ। जीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु।।",
    meaning: "I am the original fragrance of the earth, and I am the heat in fire. I am the life of all that lives, and I am the penances of all ascetics.",
    explanation: "Krishna reveals His presence as the divine fragrance of the earth, the heat in fire, the life force in all beings, and the austerity in ascetics."
},
"7.10": {
    shloka: "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम्। बुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम्।।",
    meaning: "Know Me, O Arjuna, to be the eternal seed of all beings. I am the intelligence of the intelligent and the prowess of the powerful.",
    explanation: "Krishna explains Himself as the eternal source (seed) of all beings, the intelligence of the wise, and the strength of the strong."
},
"7.11": {
    shloka: "बलं बलवतां चाहं कामरागविवर्जितम्। धर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ।।",
    meaning: "I am the strength of the strong, devoid of desire and passion. I am desire which is not contrary to righteousness, O Arjuna.",
    explanation: "Krishna identifies Himself as the strength of the mighty, free from selfish desires, and the desire that aligns with righteousness."
},
"7.12": {
    shloka: "ये चैव सात्त्विका भावा राजसास्तामसाश्च ये। मत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि।।",
    meaning: "Know that the modes of goodness, passion, and ignorance are from Me alone. I am not in them, but they are in Me.",
    explanation: "Krishna explains that the three gunas (modes of material nature) - goodness (sattva), passion (rajas), and ignorance (tamas) - emanate from Him. Although they are part of His material energy, He transcends them."
},
"7.13": {
    shloka: "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत्। मोहितं नाभिजानाति मामेभ्य: परमव्ययम्।।",
    meaning: "Deluded by these three modes (guna), all beings in the world fail to recognize Me, who am beyond these modes and inexhaustible.",
    explanation: "Krishna explains that due to being influenced by the three modes of material nature, beings are deluded and cannot perceive Him, who transcends these modes."
},
"7.14": {
    shloka: "दैवी ह्येषा गुणमयी मम माया दुरत्यया। मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते।।",
    meaning: "This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who take refuge in Me alone can easily cross beyond it.",
    explanation: "Krishna describes His divine and powerful material energy (Maya), comprised of the three gunas, as difficult to transcend. However, those who surrender to Him can easily overcome this illusion."
},
"7.15": {
    shloka: "न मां दुष्कृतिनो मूढा: प्रपद्यन्ते नराधमा:। माययापहृतज्ञाना आसुरं भावमाश्रिता:।।",
    meaning: "Those miscreants who are grossly foolish, lowest among mankind, whose knowledge is stolen by illusion, and who partake of the atheistic nature of demons, do not surrender unto Me.",
    explanation: "Krishna explains that those who are wicked, foolish, and lacking in knowledge due to illusion, and who embrace demonic qualities, do not surrender to Him."
},
"7.16": {
    shloka: "चतुर्विधा भजन्ते मां जना: सुकृतिनोऽर्जुन। आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ।।",
    meaning: "O Arjuna, four kinds of pious men render devotional service unto Me: the distressed, the desirer of wealth, the inquisitive, and he who is searching for knowledge of the Absolute.",
    explanation: "Krishna describes four types of virtuous devotees who worship Him: those in distress, those seeking wealth, the curious seekers of knowledge, and the wise who seek spiritual enlightenment."
},
"7.17": {
    shloka: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते। प्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रिय:।।",
    meaning: "Of these, the wise one who is constantly united with Me in loving devotional service is the best. For I am exceedingly dear to him, and he is dear to Me.",
    explanation: "Krishna emphasizes that among these devotees, the wise one who lovingly and consistently serves Him is most dear, and in turn, He is dear to that devotee."
},
"7.18": {
    shloka: "उदाराह: सर्व एवैते ज्ञानी त्वात्मैव मे मतम्। आस्थित: स: हि युक्तात्मा मामेवानुत्तमां गतिम्।।",
    meaning: "All these devotees are undoubtedly magnanimous souls, but he who is situated in knowledge of Me, I consider to be just like My own self. Being engaged in My transcendental service, he is sure to attain Me, the highest and most perfect goal.",
    explanation: "Krishna praises all these devotees as noble souls, but He considers the knowledgeable one who is fully engaged in His service to be His true self. Such a devotee is guaranteed to attain the supreme goal."
},
"7.19": {
    shloka: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेव: सर्वमिति स महात्मा सुदुर्लभ:।।",
    meaning: "After many births and deaths, the one who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.",
    explanation: "Krishna explains that after many lifetimes, a truly knowledgeable person surrenders to Him, understanding Him as the ultimate cause of everything. Such a great soul is extremely rare."
},
"7.20": {
    shloka: "कामैस्तैस्तैर्हृतज्ञाना: प्रपद्यन्तेऽन्यदेवता:। तं तं नियममास्थाय प्रकृत्या नियता: स्वया।।",
    meaning: "Those whose knowledge has been stolen by material desires surrender to demigods and follow the particular rules and regulations of worship according to their own natures.",
    explanation: "Krishna explains that those whose wisdom is clouded by material desires worship various demigods and adhere to specific rituals according to their inherent natures."
},
"7.21": {
    shloka: "यो यो यां यां तनुं भक्त: श्रद्धयार्चितुमिच्छति। तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम्।।",
    meaning: "Whichever form any devotee desires to worship with faith, I steady the faith of that particular devotee in that form.",
    explanation: "Krishna explains His role in strengthening the faith of devotees in the particular forms of worship they choose based on their desires and beliefs."
},
"7.22": {
    shloka: "स तया श्रद्धया युक्तस्तस्याराधनमीहते। लभते च तत: कामान्मयैव विहितान्हि तान्।।",
    meaning: "Endowed with such faith, the devotee engages in worshiping that particular deity and obtains the objects of desire given by Me alone.",
    explanation: "Krishna explains that by faithfully worshiping the chosen deity with devotion, the devotee attains the desired objects, which are ultimately bestowed by Him."
},
"7.23": {
    shloka: "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम्। देवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि।।",
    meaning: "Men of small intelligence worship the demigods, and their fruits are limited and temporary. Those who worship the demigods go to the planets of the demigods, but My devotees ultimately reach My supreme planet.",
    explanation: "Krishna contrasts the worship of demigods (devas) with worship of Him. He explains that the results of worshiping demigods are temporary and limited, leading to rebirth in their respective realms, while His devotees attain His supreme abode."
},
"7.24": {
    shloka: "अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धय:। परं भावमजानन्तो ममाव्ययमनुत्तमम्।।",
    meaning: "Unintelligent men, who do not know Me perfectly, think that I, the Supreme Personality of Godhead, was impersonal before and have now assumed this personality. Due to their small knowledge, they do not know My higher nature, which is imperishable and supreme.",
    explanation: "Krishna criticizes those with limited understanding who view Him as having manifested from the impersonal to the personal. He explains that His true nature, being imperishable and supreme, is beyond their comprehension."
},
"7.25": {
    shloka: "नाहं प्रकाश: सर्वस्य योगमायासमावृत:। मूढोऽयं नाभिजानाति लोको मामजमव्ययम्।।",
    meaning: "I am never manifest to the foolish and unintelligent. For them I am covered by My eternal creative potency (yoga-maya); therefore, the deluded world knows Me not, who am unborn and infallible.",
    explanation: "Krishna explains that due to the covering of His divine potency (yoga-maya), He remains concealed from the ignorant and deluded who cannot perceive His eternal and imperishable nature."
},
"7.26": {
    shloka: "वेदाहं समतीतानि वर्तमानानि चार्जुन। भविष्याणि च भूतानि मां तु वेद न कश्चन।।",
    meaning: "O Arjuna, as the Supreme Personality of Godhead, I know everything that has happened in the past, all that is happening in the present, and all things that are yet to come. I also know all living entities, but Me no one knows.",
    explanation: "Krishna declares His omniscience as the Supreme Lord, knowing past, present, and future events, as well as all living entities. Despite this, He remains beyond the understanding of ordinary beings."
},
"7.27": {
    shloka: "इच्छा द्वेष: सुखं दु:खं सङ्घातश्चेतना धृति:। एतत्क्षेत्रं समासेन सविकारमुदाहृतम्।।",
    meaning: "O Arjuna, the material body, mind, and intelligence, along with the five senses, the desires, and the sense of proprietorship—all these are considered the field of activities and are characterized as the inferior nature.",
    explanation: "Krishna describes the material body, mind, intellect, senses, desires, and ego as the 'field of activities' (kshetra) that constitute the material energy (prakriti) and are subject to transformation."
},
"7.28": {
    shloka: "येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम्। ते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः।।",
    meaning: "Persons who have acted piously in previous lives and in this life, whose sinful actions are completely eradicated, and who are freed from the delusion of dualities, worship Me with determination.",
    explanation: "Krishna describes those who, having lived virtuously, are free from the contamination of sinful actions and the illusion of material dualities. They worship Him with unwavering determination."
},
"7.29": {
    shloka: "जरामरणमोक्षाय मामाश्रित्य यतन्ति ये। ते ब्रह्म तद्विदु: कृत्स्नमध्यात्मं कर्म चाखिलं।।",
    meaning: "Intelligent persons who take refuge in Me, endeavoring for liberation from old age and death, understand the transcendental knowledge of the Self and engage in all types of works for My satisfaction.",
    explanation: "Those who are wise seek refuge in Krishna, striving for liberation from birth and death. They comprehend the comprehensive nature of the Supreme (Brahman), the self, and engage in all activities for His satisfaction."
},
"7.30": {
    shloka: "साधिभूताधिदैवं मां साधियज्ञं च ये विदु:। प्रयाणकालेऽपि च मां ते विदुर्युक्तचेतस:।।",
    meaning: "Those who know Me as the Supreme Lord of all sacrifices and as the benefactor of all living entities, engaged in devotional service with their minds fixed on Me, know Me even at the time of death.",
    explanation: "Those who understand Krishna as the ultimate Lord of sacrifices and the well-wisher of all beings, and who remain absorbed in devotional service to Him, attain knowledge of Him even at the time of death."
},
"8.1": {
    shloka: "अर्जुन उवाच | किं तद्ब्रह्म किमध्यात्मं किं पुरुषोत्तम। अधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते।।",
    meaning: "Arjuna said: O Supreme Person, what is Brahman? What is the self? What are fruitive activities? What is this material manifestation? And what are the demigods? Please explain this to me.",
    explanation: "Arjuna seeks knowledge about the ultimate reality (Brahman), the individual self (adhyatma), fruitive activities (karma), the material manifestation (adhibhuta), and the divine controllers (adhidaiva) from Krishna."
},
"8.2": {
    shloka: "अधियज्ञ: कथं कोऽत्र देहेऽस्मिन्मधुसूदन। प्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभि:।।",
    meaning: "How does the Lord of Sacrifice live in this body, O Madhusudana? And how can those engaged in devotional service know You at the time of death?",
    explanation: "Arjuna inquires about the presence of the Supreme Lord within the body and how devotees can remember Him at the time of death."
},
"8.3": {
    shloka: "श्रीभगवानुवाच | अक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते। भूतभावोद्भवकरो विसर्ग: कर्मसञ्ज्ञित:।।",
    meaning: "The Supreme Lord said: The indestructible transcendental living entity is called Brahman, and his eternal nature is called adhyatma, the self. Action pertaining to the development of the material bodies of the living entities is called karma, or fruitive activities.",
    explanation: "Krishna explains the concepts of Brahman (indestructible soul), adhyatma (eternal nature of the self), and karma (fruitive activities that lead to material existence)."
},
"8.4": {
    shloka: "अधिभूतं क्षरो भाव: पुरुषश्चाधिदैवतम्। अधियज्ञोऽहमेवात्र देहे देहभृतां वर।।",
    meaning: "The physical manifestation of the material world is known as adhibhuta (the perishable), and its controlling deity is the eternal individual soul. I am the Supersoul, O Arjuna, seated in the hearts of all living entities.",
    explanation: "Krishna clarifies His presence as the Supersoul (Paramatma) within the hearts of all living beings, overseeing their actions and experiences."
},
"8.5": {
    shloka: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्। य: प्रयाति स मद्भावं याति नास्त्यत्र संशय:।।",
    meaning: "And whoever, at the end of his life, quits his body, remembering Me alone, at once attains My nature. Of this there is no doubt.",
    explanation: "Krishna assures that one who remembers Him at the time of death achieves liberation and attains His divine nature without fail."
},
"8.6": {
    shloka: "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम्। तं तमेवैति कौन्तेय सदा तद्भावभावित:।।",
    meaning: "Whatever state of being one remembers when he quits his body, O son of Kunti, that state he will attain without fail.",
    explanation: "Krishna emphasizes that the state of mind at the time of death determines the destination in the next life."
},
"8.7": {
    shloka: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च। मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशय:।।",
    meaning: "Therefore, Arjuna, you should always think of Me in the form of Krishna and at the same time continue your prescribed duty. With your activities dedicated to Me and your mind and intelligence fixed on Me, you will attain Me without doubt.",
    explanation: "Krishna advises Arjuna to remember Him constantly while performing his duties, with his mind and intellect absorbed in Him, ensuring liberation."
},
"8.8": {
    shloka: "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना। परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन्।।",
    meaning: "He who meditates on Me as the Supreme Personality of Godhead, his mind constantly engaged in remembering Me, undeviated from the path, he, O Partha, is sure to reach Me.",
    explanation: "Krishna explains that through consistent meditation on Him as the Supreme Divine Being, one achieves liberation and reaches Him."
},
"8.9": {
    shloka: "कविं पुराणमनुशासितारमणोरणीयांसमनुस्मरेद्य:। सर्वस्य धातारमचिन्त्यरूपमादित्यवर्णं तमस: परस्तात्।।",
    meaning: "One should meditate upon the Supreme Person as the one who knows everything, as He who is the oldest, who is the controller, who is smaller than the smallest, who is the maintainer of everything, who is beyond all material conception, who is inconceivable, and who is always a person. He is luminous like the sun and, being transcendental, is beyond this material nature.",
    explanation: "Krishna describes the form and attributes of the Supreme Person worthy of meditation, transcendent to material nature and beyond human comprehension."
},
"8.10": {
    shloka: "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च। अमृतं चैव मृत्युश्च सदसच्चाहमर्जुन।।",
    meaning: "O Arjuna, I control heat, the rain, and drought. I am immortality, and I am also death personified. Both being and non-being are in Me.",
    explanation: "Krishna reveals His control over the forces of nature, life, and death, and His transcendental nature encompassing both existence and non-existence."
},
"8.11": {
    shloka: "यदक्षरं वेदविदो वदन्ति विशन्ति यद्यतयो वीतरागा:। यदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदं संग्रहेण प्रवक्ष्ये।।",
    meaning: "Persons who know the Vedas and who are great sages in the realization of transcendence call that non-dual substance the ultimate truth. They describe this as indescribable. They enter into it, desiring such perfection, and being freed from attachment, they undergo the vow of celibacy.",
    explanation: "Those well-versed in the Vedas and established in transcendental knowledge speak of the imperishable reality as the ultimate truth, beyond description. They aspire for it, enter into it, and live a life of detachment and celibacy."
},
"8.12": {
    shloka: "सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च। मूर्ध्न्याधायात्मन: प्राणमास्थितो योगधारणाम्।।",
    meaning: "Controlling all the gates of the body and fixing the mind in the heart region, and then drawing the life air to the top of the head, one establishes himself in mystic yoga.",
    explanation: "By controlling the senses, focusing the mind, and directing the life force upward through yogic practices, one attains self-realization and spiritual advancement."
},
"8.13": {
    shloka: "ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन्। य: प्रयात्यत्यजं देहं स याति परमां गतिम्।।",
    meaning: "After being situated in this yoga practice and vibrating the sacred syllable Om, the supreme combination of letters, if one thinks of the Supreme Personality of Godhead and quits his body, he will certainly reach the spiritual planets.",
    explanation: "Krishna instructs on the process of departing from the body while practicing yoga and meditating on the divine sound of Om, ensuring one's journey to the spiritual realm."
},
"8.14": {
    shloka: "अनन्यचेता: सततं यो मां स्मरति नित्यश:। तस्याहं सुलभ: पार्थ नित्ययुक्तस्य योगिन:।।",
    meaning: "For one who always remembers Me without deviation, I am easy to obtain, O son of Pritha, because of his constant engagement in devotional service.",
    explanation: "Krishna assures that those who unwaveringly remember Him find Him readily accessible due to their steadfast devotion."
},
"8.15": {
    shloka: "मामुपेत्य पुनर्जन्म दु:खालयमशाश्वतम्। नाप्नुवन्ति महात्मान: संसिद्धिं परमां गता:।।",
    meaning: "After attaining Me, the great souls, who are yogis in devotion, never return to this temporary world, which is full of miseries, because they have attained the highest perfection.",
    explanation: "Those great souls who attain Krishna through devotion do not undergo rebirth in this world of suffering but achieve the ultimate perfection."
},
"8.16": {
    shloka: "आब्रह्मभुवनाल्लोका: पुनरावर्तिनोऽर्जुन। मामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते।।",
    meaning: "From the highest planet in the material world down to the lowest, all are places of misery wherein repeated birth and death take place. But one who attains to My abode, O son of Kunti, never takes birth again.",
    explanation: "Krishna explains the cycle of repeated birth and death in the material world and the freedom from this cycle upon attaining His divine abode."
},
"8.17": {
    shloka: "सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदु:। रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जना:।।",
    meaning: "By human calculation, a thousand ages taken together form the duration of Brahma's one day. And such also is the duration of his night.",
    explanation: "Krishna describes the vast scale of time in the context of Brahma's day and night, as perceived by divine calculation."
},
"8.18": {
    shloka: "अव्यक्ताद्व्यक्तय: सर्वा: प्रभवन्त्यहरागमे। रात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके।।",
    meaning: "At the beginning of Brahma's day, all living entities become manifest from the unmanifest state, and thereafter, when the night falls, they are merged into the unmanifest again.",
    explanation: "Krishna describes the cycle of manifestation and dissolution of all beings at the onset and conclusion of Brahma's day, occurring repeatedly."
},
"8.19": {
    shloka: "भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते। रात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे।।",
    meaning: "Again and again, when Brahma's day arrives, all living entities come into being, and with the advent of Brahma's night, they are helplessly annihilated.",
    explanation: "Krishna explains the cyclical nature of creation and dissolution, where living entities repeatedly manifest during Brahma's day and dissolve during Brahma's night."
},
"8.20": {
    shloka: "परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः। यः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति।।",
    meaning: "Yet there is another unmanifest nature, which is eternal and is transcendental to this manifested and unmanifested matter. It is supreme and is never annihilated. When all in this world is annihilated, that part remains as it is.",
    explanation: "Krishna describes the eternal, transcendental nature beyond the manifest and unmanifest material worlds, which remains unaffected and eternal even after the dissolution of everything else."
},
"8.21": {
    shloka: "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम्। यं प्राप्य न निवर्तन्ते तद्धाम परमं मम।।",
    meaning: "That which the Vedantists describe as unmanifest and infallible, that which is known as the supreme destination, that place from which, having attained it, one never returns—that is My supreme abode.",
    explanation: "Krishna identifies His supreme abode as the unmanifest and eternal destination described in the Vedas, from which there is no return upon attainment."
},
"8.22": {
    shloka: "पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया। यस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम्।।",
    meaning: "O Partha, that supreme abode of Mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world.",
    explanation: "Krishna describes His supreme abode as beyond the reach of material illumination and accessible only by pure devotion, from where no one returns to the material world."
},
"8.23": {
    shloka: "यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः। प्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ।।",
    meaning: "O best of the Bharatas, I shall now explain to you the different times at which, passing away from this world, the yogi does or does not come back.",
    explanation: "Krishna begins explaining the process and circumstances of departing from the material world, especially for yogis."
},
"8.24": {
    shloka: "अग्निर्ज्योतिरह: शुक्ल: षण्मासा उत्तरायणम्। तत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जना:।।",
    meaning: "Those who know the Supreme Brahman attain that Supreme by passing away during the influence of the fiery god in the light, at an auspicious moment, during the fortnight of the waxing moon, or during the six months when the sun travels in the north.",
    explanation: "Krishna explains the auspicious circumstances and times at which those who understand Brahman (the Absolute Truth) attain the Supreme."
},
"8.25": {
    shloka: "धूमो रात्रिस्तथा कृष्ण: षण्मासा दक्षिणायनम्। तत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते।।",
    meaning: "The mystic who passes away during the smoke, the night, the fortnight of the waning moon, or the six months when the sun passes to the south reaches the moon planet but again comes back.",
    explanation: "Krishna describes the fate of those who pass away under less auspicious conditions, such as during the night, the dark fortnight, or the six months when the sun moves southwards."
},
"8.26": {
    shloka: "शुक्लकृष्णे गती ह्येते जगत: शाश्वते मते। एकया यात्यनावृत्तिमन्ययावर्तते पुन:।।",
    meaning: "According to Vedic opinion, these different results occur due to the influence of the modes of material nature, but he who reaches the Supreme transcendent abode attains oneness with the Brahman and does not come back.",
    explanation: "Krishna explains the influence of material nature's modes on the destinations of those who pass away and contrasts it with attaining the Supreme, where there is no return."
},
"8.27": {
    shloka: "नैते सृती पार्थ जानन्योगी मुह्यति कश्चन। तस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन।।",
    meaning: "O Partha, Arjuna, the yogis who know these paths and rules of time do not become deluded. Therefore, be a yogi, Arjuna, and always endeavor in yoga.",
    explanation: "Krishna encourages Arjuna to practice yoga and understand the principles of time and destiny to avoid delusion and attain spiritual realization."
},
"8.28": {
    shloka: "वेदेषु यज्ञेषु तप:सु चैव दानेषु यत्पुण्यफलं प्रदिष्टम्। अत्येति तत्सर्वमिदं विदित्वा योगी परं स्थानमुपैति चाद्यम्।।",
    meaning: "A person who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode, O Arjuna.",
    explanation: "Krishna explains that one who understands the spiritual nature of His appearance and activities transcends the cycle of birth and death, reaching His eternal abode."
},
"9.1": {
    shloka: "इदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे। ज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्।।",
    meaning: "The Supreme Lord said: My dear Arjuna, because you are never envious of Me, I shall impart to you this most confidential knowledge and realization, knowing which you shall be relieved of the miseries of material existence.",
    explanation: "Krishna begins revealing the most confidential knowledge to Arjuna, promising liberation from material suffering to one who understands it."
},
"9.2": {
    shloka: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्। प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम्।।",
    meaning: "This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting, and it is joyfully performed.",
    explanation: "Krishna explains the supreme nature of this knowledge, calling it the king of education, the most confidential, pure, joyful, and eternal, leading to direct self-realization."
},
"9.3": {
    shloka: "अश्रद्दधाना: पुरुषा धर्मस्यास्य परन्तप। अप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि।।",
    meaning: "Those who are not faithful in this devotional service cannot attain Me, O conqueror of enemies. Therefore, they return to the path of birth and death in this material world.",
    explanation: "Krishna emphasizes that lack of faith in devotional service leads to repeated birth and death, preventing attainment of the Supreme."
},
"9.4": {
    shloka: "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना। मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थित:।।",
    meaning: "By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them.",
    explanation: "Krishna explains His transcendental position as the all-pervading source of creation, existing within everything, yet beyond direct material identification."
},
"9.5": {
    shloka: "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम्। भूतभृन्न च भूतस्थो ममात्मा भूतभावन:।।",
    meaning: "And yet everything that is created does not rest in Me. Behold My divine mystic opulence! Although I am the maintainer of all living entities and although I am everywhere, I am not a part of this cosmic manifestation, for My Self is the very source of creation.",
    explanation: "Krishna reveals His divine opulence, maintaining and supporting all living entities while remaining distinct from the material creation as its ultimate source."
},
"9.6": {
    shloka: "यथाकाशस्थितो नित्यं वायु: सर्वत्रगो महान्। तथा सर्वाणि भूतानि मत्स्थानीत्युपधारय।।",
    meaning: "Understand that, as the mighty wind blowing everywhere, rests always in the sky, all created beings rest in Me.",
    explanation: "Krishna uses the analogy of the omnipresent wind within the sky to illustrate His all-pervading nature, with all beings ultimately resting in Him."
},
"9.7": {
    shloka: "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम्। कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम्।।",
    meaning: "O son of Kunti, at the end of the millennium, all material manifestations enter into My nature, and at the beginning of another millennium, by My potency, I create them again.",
    explanation: "Krishna describes the cyclical nature of creation, dissolution, and recreation of the material universe under His divine energy across cosmic cycles."
},
"9.8": {
    shloka: "प्रकृतिं स्वामवष्टभ्य विसृजामि पुन: पुन:। भूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वषात्।।",
    meaning: "Understand that the material nature is the womb of all living entities. I am the seed-giving father. I impregnate the material energy with the living entities, and thus they appear, O son of Bharata.",
    explanation: "Krishna elucidates His role as the seed-giving father impregnating material nature with living beings, who then manifest within this world under the control of material energy."
},
"9.9": {
    shloka: "न च मां तानि कर्माणि निबध्नन्ति धनञ्जय। उदासीनवदासीनमसक्तं तेषु कर्मसु।।",
    meaning: "O Dhananjaya, all this work cannot bind Me. I am ever detached from these material activities, seated as though neutral.",
    explanation: "Krishna declares His transcendental position as unaffected by material activities, remaining neutral and detached even while sustaining the cosmos."
},
"9.10": {
    shloka: "मयाध्यक्षेण प्रकृति: सूयते सचराचरम्। हेतुनानेन कौन्तेय जगद्विपरिवर्तते।।",
    meaning: "Under My direction, this material nature is working, creating all moving and nonmoving beings. By its rule, this manifestation is created and annihilated again and again.",
    explanation: "Krishna reveals His oversight of material nature, which continuously generates and dissolves all beings according to its inherent laws."
},
"9.11": {
    shloka: "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम्। परं भावमजानन्तो मम भूतमहेश्वरम्।।",
    meaning: "Fools deride Me when I descend in the human form. They do not know My transcendental nature as the Supreme Lord of all beings.",
    explanation: "Krishna laments how ignorant people ridicule His appearance in human form, unaware of His divine and transcendental nature as the Supreme Controller."
},
"9.12": {
    shloka: "मोघाशा मोघकर्माणो मोघज्ञाना विचेतस:। राक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिता:।।",
    meaning: "Those who are thus bewildered are attracted by demonic and atheistic views. In that deluded condition, their hopes for liberation, their fruitive activities, and their culture of knowledge are all defeated.",
    explanation: "Krishna warns that those deluded by material nature's modes become attached to demonic and atheistic beliefs, leading to failure in their pursuit of liberation, righteous actions, and spiritual knowledge."
},
"9.13": {
    shloka: "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिता:। भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम्।।",
    meaning: "O son of Pritha, the great souls, who have taken shelter in My divine nature, constantly worship Me with determination. They know that I am the origin of all beings and imperishable.",
    explanation: "Krishna extols the worship of those noble souls who have taken refuge in His divine nature, understanding Him as the origin of all beings and eternally imperishable."
},
"9.14": {
    shloka: "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रता:। नमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते।।",
    meaning: "Always chanting My glories, endeavoring with great determination, bowing down before Me, these great souls perpetually worship Me with devotion.",
    explanation: "Krishna describes the devotional activities of the noble souls, who constantly glorify Him, strive with determination, and worship Him with unwavering devotion."
},
"9.15": {
    shloka: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते। एकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्।।",
    meaning: "Others, who engage in the cultivation of knowledge by offering sacrifices in the form of study and other devotional activities, worship Me as the one without a second, the all-pervading Lord of the universe.",
    explanation: "Krishna describes other devotees who engage in the sacrifice of cultivating knowledge and worship Him as the one Supreme, all-pervading Lord."
},
"9.16": {
    shloka: "अहं क्रतुरहं यज्ञ: स्वधाहमहमौषधम्। मन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम्।।",
    meaning: "I am the ritual, I am the sacrifice, I am the offering to the ancestors, I am the healing herb, I am the mantra, I am the clarified butter, I am the fire, and I am the act of offering.",
    explanation: "Krishna reveals His presence in various aspects of Vedic rituals and offerings, indicating His all-encompassing nature and omnipresence in worship."
},
"9.17": {
    shloka: "पिताहमस्य जगतो माता धाता पितामह:। वेद्यं पवित्रमोंकार ऋक्साम यजुरेव च।।",
    meaning: "I am the father of this universe, the mother, the support, and the grandsire. I am the object of knowledge, the purifier, the syllable Om, and also the Rig, Sama, and Yajur Vedas.",
    explanation: "Krishna declares His role as the progenitor, sustainer, and ultimate source of knowledge, purity, and divine sound represented in the Vedic scriptures."
},
"9.18": {
    shloka: "गतिर्भर्ता प्रभु: साक्षी निवास: शरणं सुहृत्। प्रभव: प्रलय: स्थानं निधानं बीजमव्ययम्।।",
    meaning: "I am the goal, the sustainer, the master, the witness, the abode, the refuge, and the most dear friend. I am the creation and the annihilation, the basis of everything, the resting place, and the eternal seed.",
    explanation: "Krishna describes Himself as the ultimate goal, sustainer, master, and witness, the refuge and dear friend, and the source of creation and dissolution, the eternal foundation of everything."
},
"9.19": {
    shloka: "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च। अमृतं चैव मृत्युश्च सदसच्चाहमर्जुन।।",
    meaning: "I give heat, I withhold and send forth the rain. I am immortality, and I am also death personified. Both spirit and matter are in Me, O Arjuna.",
    explanation: "Krishna declares His control over natural phenomena, providing life-sustaining heat and rain, embodying both immortality and mortality, and encompassing both the eternal and temporary aspects of existence."
},
"9.20": {
    shloka: "त्रैविद्या मां सोमपा: पूतपापा यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते। ते पुण्यमासाद्य सुरेन्द्रलोकमश्नन्ति दिव्यान्दिवि देवभोगान्।।",
    meaning: "Those who study the Vedas and drink the Soma juice, seeking the heavenly planets, worship Me indirectly. They take birth on the planet of Indra, where they enjoy godly delights.",
    explanation: "Krishna discusses the three paths of karma-kanda (ritualistic ceremonies), revealing that those seeking material pleasures through Vedic rituals are indirectly worshiping Him and may attain temporary heavenly enjoyment."
},
"9.21": {
    shloka: "ते तं भुक्त्वा स्वर्गलोकं विशालं क्षीणे पुण्ये मर्त्यलोकं विशन्ति। एवं त्रयीधर्ममनुप्रपन्ना गतागतं कामकामा लभन्ते।।",
    meaning: "When they have enjoyed vast heavenly sense pleasure and the results of their pious activities are exhausted, they return to this mortal planet again. Thus, those who seek sense enjoyment by adhering to the principles of the three Vedas achieve only repeated birth and death.",
    explanation: "Krishna explains that after enjoying heavenly pleasures, those who seek gratification through Vedic rituals return to mortal existence, undergoing cycles of birth and death due to exhaustible merits."
},
"9.22": {
    shloka: "अनन्याश्चिन्तयन्तो मां ये जना: पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।।",
    meaning: "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
    explanation: "Krishna promises to sustain and protect those who single-mindedly worship Him with unwavering devotion and meditation on His divine form."
},
"9.23": {
    shloka: "येऽप्यन्यदेवता भक्ता यजन्ते श्रद्धयाऽन्विता:। तेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम्।।",
    meaning: "Even those devotees who worship other demigods with faith and devotion also worship Me, O son of Kunti, but they do so in an improper way.",
    explanation: "Krishna acknowledges that even devotees of other deities ultimately worship Him, though indirectly. Yet, such worship is considered incomplete due to lack of proper understanding and method."
},
"9.24": {
    shloka: "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च। न तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते।।",
    meaning: "I am the only enjoyer and master of all sacrifices. Therefore, those who do not recognize My true transcendental nature fall down.",
    explanation: "Krishna asserts His position as the sole enjoyer and overseer of all sacrifices, warning that failure to understand His true nature leads to spiritual decline."
},
"9.25": {
    shloka: "यान्ति देवव्रता देवान्पितृन्यान्ति पितृव्रता:। भूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम्।।",
    meaning: "Those who worship the demigods will take birth among the demigods; those who worship the ancestors go to the ancestors; those who worship ghosts and spirits will take birth among such beings; and those who worship Me will live with Me.",
    explanation: "Krishna explains that the object of worship determines the destination of the worshiper after death. Worshipping demigods, ancestors, or spirits leads to their respective realms, while devotion to Him results in eternal residence in His divine abode."
},
"9.26": {
    shloka: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मन:।।",
    meaning: "If one offers Me with love and devotion a leaf, a flower, fruit, or water, I will accept it.",
    explanation: "Krishna assures that even a simple offering of a leaf, flower, fruit, or water with true devotion is accepted by Him, emphasizing the importance of heartfelt sincerity in worship."
},
"9.27": {
    shloka: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्। यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्।।",
    meaning: "O son of Kunti, whatever you do, whatever you eat, whatever you offer in sacrifice, whatever you give away, and whatever austerities you perform—do that as an offering to Me.",
    explanation: "Krishna instructs Arjuna to dedicate all actions—whether eating, giving, sacrificing, or practicing austerities—as offerings to Him, emphasizing the path of selfless devotion and surrender in every aspect of life."
},
"9.28": {
    shloka: "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनै:। सन्न्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि।।",
    meaning: "In this way, you will be freed from the bondage of karma, whether the result of good or evil deeds. With your mind fixed on the renunciation of the fruits of actions and being united in selfless devotion and yoga, you will be liberated and come to Me.",
    explanation: "Krishna assures that by performing actions as offerings and renouncing attachment to their results, one can attain liberation, achieving union with Him through selfless devotion and yoga."
},
"9.29": {
    shloka: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रिय:। ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्।।",
    meaning: "I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to them.",
    explanation: "Krishna declares His impartial and loving nature towards all beings, though He especially reciprocates with those who worship Him with devotion, considering them dear and being personally present within their hearts."
},
"9.30": {
    shloka: "अपि चेत्सुदुराचारो भजते मामनन्यभाक्। साधुरेव स मन्तव्य: सम्यग्व्यवसितो हि स:।।",
    meaning: "Even if one commits the most abominable actions, if they are devoted to Me without deviation, they are to be considered saintly because they have resolved rightly.",
    explanation: "Krishna asserts that even those engaged in severely sinful activities, if sincerely devoted to Him without deviation, should be considered saintly due to their proper determination and intention."
},
"9.31": {
    shloka: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति। कौन्तेय प्रतिजानीहि न मे भक्त: प्रणश्यति।।",
    meaning: "They quickly become righteous and attain lasting peace. O son of Kunti, declare it boldly that My devotee never perishes.",
    explanation: "Krishna assures that devotees who sincerely embrace righteousness attain eternal peace quickly and emphatically declares that His devotees never meet destruction."
},
"9.32": {
    shloka: "मां हि पार्थ व्यपाश्रित्य येऽपि स्यु: पापयोनय:। स्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम्।।",
    meaning: "O son of Pritha, those who take shelter in Me, though they be of lower birth—women, vaishyas, and shudras—can attain the supreme destination.",
    explanation: "Krishna assures that anyone—regardless of gender, caste, or social status—who seeks refuge in Him can attain the ultimate spiritual destination."
},
"9.33": {
    shloka: "किं पुनर्ब्राह्मणा: पुण्या भक्ता राजर्षयस्तथा। अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम्।।",
    meaning: "How much more so pure brahmanas, devoted kings, and noble devotees. Having come to this impermanent and miserable world, engage in My worship.",
    explanation: "Krishna encourages pure-hearted brahmanas, devoted rulers, and noble souls to wholeheartedly engage in His worship, highlighting the impermanence and suffering of the material world."
},
"9.34": {
    shloka: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि युक्त्वैवमात्मानं मत्परायण:।।",
    meaning: "Always think of Me, become My devotee, worship Me, and offer your homage unto Me. Thus, you will come to Me without fail. I promise you this because you are My very dear friend.",
    explanation: "Krishna urges Arjuna to constantly think of Him, become His devotee, worship Him, and offer obeisance, assuring him of direct attainment due to their deep friendship."
},
"10.1": {
    shloka: "श्रीभगवानुवाच | भूय: कल्पये ये भावा: श्रूणु मे परमं वच: | यत: तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया ||",
    meaning: "The Supreme Personality of Godhead said: Listen again, O mighty-armed Arjuna. Because you are my dear friend, for your benefit, I shall speak to you further, giving knowledge that is better than what I have already explained.",
    explanation: "Krishna, the Supreme Lord, expresses His intention to reveal deeper truths to Arjuna, out of affection and for his ultimate welfare."
},
"10.2": {
    shloka: "न मे विदु: सुरगणा: प्रभवं न महर्षय: | अहमादिर्हि देवानां महर्षीणां च सर्वश: ||",
    meaning: "Neither the hosts of demigods nor the great sages know My origin; for, in every respect, I am the source of the demigods and the sages.",
    explanation: "Krishna declares His transcendental position as the origin of all demigods and sages, surpassing their understanding and knowledge."
},
"10.3": {
    shloka: "यो मामजमनादिं च वेत्ति लोकमहेश्वरम् | असम्मूढ: स मर्त्येषु सर्वपापै: प्रमुच्यते ||",
    meaning: "He who knows Me as the unborn, as the beginningless, as the Supreme Lord of all worlds—he, undeluded among men, is freed from all sins.",
    explanation: "Krishna explains that those who understand Him as the eternal, beginningless Supreme Lord of all creation become free from all sins and attain liberation."
},
"10.4": {
    shloka: "बुद्धिर्ज्ञानमसम्मोह: क्षमा सत्यं दम: शम: | सुखं दु:खं भवोऽभावो भयं चाभयमेव च ||",
    meaning: "Intelligence, knowledge, freedom from doubt and delusion, forgiveness, truthfulness, self-control, calmness, happiness, distress, birth, death, fear, and also fearlessness.",
    explanation: "Krishna enumerates various divine qualities and aspects of His manifestations that are expressions of His transcendental nature and influence over all aspects of existence."
},
"10.5": {
    shloka: "अहिंसा समता तुष्टिस्तपो दानं यशोऽयश: | भवन्ति भावा भूतानां मत्त एव पृथग्विधा: ||",
    meaning: "Nonviolence, equanimity, satisfaction, austerity, charity, fame, and infamy—these various qualities of living beings are created by Me alone.",
    explanation: "Krishna elucidates that diverse virtues and traits exhibited by beings, whether positive or negative, originate from Him alone."
},
"10.6": {
    shloka: "महर्षय: सप्त पूर्वे चत्वारो मनवस्तथा | मद्भावा मानसा जाता येषां लोक इमा: प्रजा: ||",
    meaning: "The seven great sages, the ancient four, and the Manus also—born from My mind—they are the progenitors of this world and unto them have I generated all these creatures.",
    explanation: "Krishna reveals that the seven great sages, the four ancient sages, and the Manus—originating from His mind—serve as the progenitors of humanity and are responsible for populating the world."
},
"10.7": {
    shloka: "एतां विभूतिं योगं च मम यो वेत्ति तत्त्वत: | सोऽविकम्पेन योगेन युज्यते नात्र संशय: ||",
    meaning: "He who knows in truth this glory and power of Mine engages unswervingly in unalloyed devotional service; there is no doubt about it.",
    explanation: "Krishna emphasizes that those who truly understand His divine manifestations and opulences engage in unwavering devotional service without hesitation or doubt."
},
"10.8": {
    shloka: "अहं सर्वस्य प्रभवो मत्त: सर्वं प्रवर्तते | इति मत्वा भजन्ते मां बुधा भावसमन्विता: ||",
    meaning: "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service and worship Me with all their hearts.",
    explanation: "Krishna proclaims Himself as the origin of both material and spiritual realms, and those enlightened individuals who comprehend this truth worship Him with profound devotion."
},
"10.9": {
    shloka: "मच्चित्ता मद्गतप्राणा बोधयन्त: परस्परम् | कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च ||",
    meaning: "With their minds wholly absorbed in Me, with their lives surrendered unto Me, enlightening one another and conversing about Me constantly, they derive satisfaction and joy.",
    explanation: "Krishna describes the blissful engagement of those whose minds are fixed on Him, who live in surrender to Him, and who derive happiness from constant discussions about Him."
},
"10.10": {
    shloka: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् | ददामि बुद्धियोगं तं येन मामुपयान्ति ते ||",
    meaning: "To those who are constantly devoted and who worship Me with love, I give the understanding by which they can come to Me.",
    explanation: "Krishna promises to bestow the special insight needed by those who wholeheartedly worship and love Him, facilitating their journey towards Him."
},
"10.11": {
    shloka: "तेषामेवानुकम्पार्थमहमज्ञानजं तम: | नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ||",
    meaning: "Out of compassion for them, I, dwelling in their hearts, destroy with the shining lamp of knowledge the darkness born of ignorance.",
    explanation: "Krishna, residing within the hearts of His devotees, compassionately dispels the darkness of ignorance with the illuminating lamp of knowledge."
},
"10.12": {
    shloka: "अर्जुन उवाच | परं ब्रह्म परं धाम पवित्रं परमं भवान् | पुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम् ||",
    meaning: "Arjuna said: You are the Supreme Brahman, the ultimate, the supreme abode and purifier, the Absolute Truth and the eternal divine person. You are the primal God, transcendental and original, and You are the unborn and all-pervading beauty.",
    explanation: "Arjuna acknowledges Krishna as the Supreme Brahman, the ultimate abode of all, and the eternal divine person—primal, transcendental, and omnipresent."
},
"10.13": {
    shloka: "आहुस्त्वामृषय: सर्वे देवर्षिर्नारदस्तथा | असितो देवलो व्यास: स्वयं चैव ब्रवीषि मे ||",
    meaning: "All the sages, like Narada, Asita, Devala, and Vyasa, proclaim this of You, and now You Yourself are declaring it to me.",
    explanation: "Arjuna recalls the testimony of great sages like Narada, Asita, Devala, and Vyasa, who have recognized and declared Krishna's supreme nature."
},
"10.14": {
    shloka: "सर्वमेतदृतं मन्ये यन्मां वदसि केशव | न हि ते भगवन् व्यक्तिं विदुर्देवा न दानवा: ||",
    meaning: "O Krishna, I totally accept as truth all that You have told me. Neither the gods nor demons, O Lord, know Thy personality.",
    explanation: "Arjuna wholeheartedly accepts Krishna's revelations as the ultimate truth, acknowledging that neither gods nor demons fully understand the depth of Krishna's divine nature."
},
"10.15": {
    shloka: "स्वयमेवात्मनात्मानं वेत्थ त्वं पुरुषोत्तम | भूतभावन भूतेश देवदेव जगत्पते ||",
    meaning: "Indeed, You alone know Yourself by Your own internal potency, O Supreme Person, O Supreme Deity, O master of all mystic power, O ruler of the universe.",
    explanation: "Arjuna recognizes Krishna's unique ability to comprehend Himself through His internal potency and acknowledges Him as the Supreme Deity and master of all."
},
"10.16": {
    shloka: "वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतय: | याभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि ||",
    meaning: "Please tell me in detail of Your divine opulences by which You pervade all these worlds.",
    explanation: "Arjuna requests Krishna to elaborate on His divine manifestations and opulences, through which He pervades and sustains all the worlds."
},
"10.17": {
    shloka: "कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन् | केषु केषु च भावेषु चिन्त्योऽसि भगवन्मया ||",
    meaning: "O Supreme Lord, how may I know You, and think of You, and in what various forms are You to be contemplated, O Blessed Lord?",
    explanation: "Arjuna seeks to understand how to constantly contemplate upon Krishna and in what different divine forms He may be meditated upon."
},
"10.18": {
    shloka: "विस्तरेणात्मनो योगं विभूतिं च जनार्दन | भूय: कथय तृप्तिर्हि श्रृण्वतो नास्ति मेऽमृतम् ||",
    meaning: "O Janardana, please describe again in detail Your mystic power and opulences. I am never satiated in hearing about You, for the nectar of hearing about You never tires the ears.",
    explanation: "Arjuna expresses his insatiable desire to hear more about Krishna's divine manifestations and opulences, finding great satisfaction and delight in such descriptions."
},
"10.19": {
    shloka: "श्रीभगवानुवाच | हन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतय: | प्राधान्यत: कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे ||",
    meaning: "The Supreme Personality of Godhead said: Yes, I will tell you of My splendorous manifestations, but only of those which are prominent, O Arjuna, for My opulence is limitless.",
    explanation: "Krishna agrees to reveal His divine opulences to Arjuna but explains that He will only describe the principal manifestations due to the boundless nature of His opulence."
},
"10.20": {
    shloka: "अहमात्मा गुडाकेश सर्वभूताशयस्थित: | अहमादिश्च मध्यं च भूतानामन्त एव च ||",
    meaning: "I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.",
    explanation: "Krishna declares Himself as the indwelling Supersoul within all living beings and the source, sustenance, and ultimate destination of all existence."
},
"10.21": {
    shloka: "आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान् | मरीचिर्मरुतामस्मि नक्षत्राणामहं शशी ||",
    meaning: "Of the Adityas I am Vishnu; of lights I am the radiant sun. I am Marici among the Maruts, and among the stars I am the moon.",
    explanation: "Krishna reveals Himself as the divine essence within various celestial entities, such as Vishnu among the Adityas, the sun among luminaries, Marici among the Maruts (wind-gods), and the moon among the stars."
},
"10.22": {
    shloka: "वेदानां सामवेदोऽस्मि देवानामस्मि वासव: | इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ||",
    meaning: "Of the Vedas I am the Sama Veda; of the demigods I am Indra, the king of heaven; of the senses I am the mind, and in living beings I am the consciousness.",
    explanation: "Krishna identifies Himself as the Sama Veda among the Vedas, Indra among the demigods, the mind among the senses, and consciousness in living beings."
},
"10.23": {
    shloka: "रुद्राणां शङ्करश्चास्मि वित्तेशो यक्षरक्षसाम् | वसूनां पावकश्चास्मि मेरु: शिखरिणामहम् ||",
    meaning: "Of the Rudras I am Lord Shiva, of the Yaksas and Raksasas I am the lord of wealth [Kubera]; of the Vasus I am Agni [fire], and among mountains I am Meru.",
    explanation: "Krishna reveals His manifestations as Lord Shiva among the Rudras, Kubera among the Yaksas and Raksasas, Agni (fire) among the Vasus, and Mount Meru among mountains."
},
"10.24": {
    shloka: "पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम् | सेनानीनामहं स्कन्द: सरसामस्मि सागर: ||",
    meaning: "Of priests, O Arjuna, know Me to be the chief, Brihaspati. Among the armies I am Skanda [Kartikeya], and among bodies of water I am the ocean.",
    explanation: "Krishna discloses His identity as the chief among priests (Brihaspati), the commander of armies (Skanda or Kartikeya), and the vast ocean among bodies of water."
},
"10.25": {
    shloka: "महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम् | यज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालय: ||",
    meaning: "Among the great sages I am Bhrgu; of vibrations I am the transcendental Om. Of sacrifices I am the chanting of the holy names [japa], and among immovable things I am the Himalayas.",
    explanation: "Krishna identifies Himself as Bhrgu among the great sages, the transcendental Om among vibrations, the chanting of holy names (japa) among sacrifices, and the Himalayas among immovable entities."
},
"10.26": {
    shloka: "अश्वत्थ: सर्ववृक्षाणां देवर्षीणां च नारद: | गन्धर्वाणां चित्ररथ: सिद्धानां कपिलो मुनि: ||",
    meaning: "Of all trees I am the holy fig tree [peepul]; of the sages among the demigods I am Narada. Of the Gandharvas I am Citraratha, and among perfected beings I am the sage Kapila.",
    explanation: "Krishna reveals Himself as the holy fig tree (Ashvattha) among all trees, Narada among celestial sages, Citraratha among Gandharvas, and the sage Kapila among perfected beings."
},
"10.27": {
    shloka: "उच्चै:श्रवसमश्वानां विद्धि माममृतोद्भवम् | ऐरावतं गजेन्द्राणां नराणां च नराधिपम् ||",
    meaning: "Of horses know Me to be Uccaihsrava, produced during the churning of the ocean for nectar. Of lordly elephants I am Airavata, and among men I am the monarch.",
    explanation: "Krishna identifies Himself as Uccaihsrava, the celestial horse born during the churning of the ocean, Airavata among lordly elephants, and the monarch among men."
},
"10.28": {
    shloka: "आयुधानामहं वज्रं धेनूनामस्मि कामधुक् | प्रजनश्चास्मि कन्दर्प: सर्पाणामस्मि वासुकि: ||",
    meaning: "Of weapons I am the thunderbolt; among cows I am the surabhi. Of procreators I am Kandarpa, the god of love, and of serpents I am Vasuki.",
    explanation: "Krishna reveals Himself as the thunderbolt (Vajra) among weapons, the surabhi cow among cows, Kandarpa (Cupid) among procreators, and Vasuki among serpents."
},
"10.29": {
    shloka: "अनन्तश्चास्मि नागानां वरुणो यादसामहम् | पितॄणामर्यमा चास्मि यम: संयमतामहम् ||",
    meaning: "Of the celestial Naga snakes I am Ananta; of aquatic beings I am Varuna. Of departed ancestors I am Aryama, and among the dispensers of law I am Yama, the lord of death.",
    explanation: "Krishna identifies Himself as Ananta among the celestial Nagas, Varuna among aquatic beings, Aryama among ancestors, and Yama among the dispensers of law (dharma)."
},
"10.30": {
    shloka: "प्रह्लादश्चास्मि दैत्यानां काल: कलयतामहम् | मृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम् ||",
    meaning: "Of all the Daitya demons I am the devoted Prahlada; of measures of time I am the time factor. Of beasts I am the lion, and of birds I am Garuda, the feathered carrier of Vishnu.",
    explanation: "Krishna declares Himself as Prahlada among the Daitya demons, the time factor among measures of time, the lion among beasts, and Garuda among birds—the celestial carrier of Vishnu."
},
"10.31": {
    shloka: "पवन: पवतामस्मि राम: शस्त्रभृतामहम् | झषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी ||",
    meaning: "Of purifiers I am the wind; of the wielders of weapons I am Rama. Of fishes I am the shark, and of flowing rivers I am the Ganges.",
    explanation: "Krishna identifies Himself as the purifying wind among purifiers, Rama among wielders of weapons, the shark among fishes, and the river Ganges among flowing rivers."
},
"10.32": {
    shloka: "सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन | अध्यात्मविद्या विद्यानां वाद: प्रवदतामहम् ||",
    meaning: "Of all creations I am the beginning and the end and also the middle, O Arjuna. Of all sciences I am the spiritual science, and among logicians I am the conclusive truth.",
    explanation: "Krishna reveals Himself as the origin, sustenance, and culmination of all creations, the essence of spiritual knowledge among sciences, and the ultimate truth among logicians."
},
"10.33": {
    shloka: "अक्षराणामकारोऽस्मि द्वंद्व: सामासिकस्य च | अहमेवाक्षय: कालो धाताहं विश्वतोमुख: ||",
    meaning: "Among letters I am the letter A, and among compound words I am the dual compound. I am also inexhaustible time, and of creators I am Brahma, whose manifold faces turn everywhere.",
    explanation: "Krishna identifies Himself as the letter A among letters, the dual compound among compound words, eternal time among all-pervading entities, and Brahma among creators with omnipresent manifestations."
},
"10.34": {
    shloka: "मृत्यु: सर्वहरश्चाहमुद्भवश्च भविष्यताम् | कीर्तिश्च नारदस्तात्त: सामस्येन्द्रस्य वीर्यवान् ||",
    meaning: "I am all-devouring death, and I am the generator of all things yet to be. Among women I am fame, fortune, fine speech, memory, intelligence, steadfastness, and patience.",
    explanation: "Krishna reveals Himself as all-devouring death and the generator of future creations, while also identifying with various qualities and virtues among women, like fame, fine speech, intelligence, and patience."
},
"10.35": {
    shloka: "वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनञ्जय: | मुनीनामप्यहं व्यास: कवीनामुशना कवि: ||",
    meaning: "Among the Vrishnis I am Vasudeva, and among the Pandavas I am Arjuna. Among the sages I am Vyasa, and among great thinkers I am Usana.",
    explanation: "Krishna identifies Himself as Vasudeva among the Vrishnis, Arjuna among the Pandavas, Vyasa among the sages, and Usana among great thinkers."
},
"10.36": {
    shloka: "दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् | मौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम् ||",
    meaning: "I am also the rod of chastisement, and of those who seek victory, I am morality. Of secret things I am silence, and of the wise I am wisdom.",
    explanation: "Krishna reveals His presence as the rod of chastisement, the embodiment of morality for those who seek victory, silence among secrets, and wisdom among the wise."
},
"10.37": {
    shloka: "यच्चापि सर्वभूतानां बीजं तदहमर्जुन | न तदस्ति विना यत्स्यान्मया भूतं चराचरम् ||",
    meaning: "And I am the seed of all existence, O Arjuna. There is no being, moving or nonmoving, that can exist without Me.",
    explanation: "Krishna declares Himself as the source and seed of all existence, emphasizing that nothing, whether animate or inanimate, can manifest or sustain itself without Him."
},
"10.38": {
    shloka: "नान्तोऽस्ति मम दिव्यानां विभूतीनां परंतप | एष तूद्देशत: प्रोक्तो विभूतेर्विस्तरो मया ||",
    meaning: "O mighty conqueror of enemies, there is no end to My divine manifestations. What I have spoken to you is but a mere indication of My infinite opulences.",
    explanation: "Krishna asserts that His divine manifestations are endless and that what He has disclosed to Arjuna is merely a partial glimpse of His limitless opulences."
},
"10.39": {
    shloka: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा | तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम् ||",
    meaning: "Whatever glorious and powerful manifestation you see, know it to be a fragment of My splendor.",
    explanation: "Krishna instructs Arjuna to recognize every magnificent and powerful display in the universe as a mere fraction of His majestic effulgence."
},
"10.40": {
    shloka: "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन | विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ||",
    meaning: "But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe.",
    explanation: "Krishna questions Arjuna on the necessity of detailed knowledge, asserting that He pervades and sustains the entire universe with a fraction of His divine essence."
},
"10.41": {
    shloka: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा | तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम् ||",
    meaning: "But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe.",
    explanation: "Krishna questions Arjuna on the necessity of detailed knowledge, asserting that He pervades and sustains the entire universe with a fraction of His divine essence."
},
"10.42": {
    shloka: "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन | विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ||",
    meaning: "But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe.",
    explanation: "Krishna questions Arjuna on the necessity of detailed knowledge, asserting that He pervades and sustains the entire universe with a fraction of His divine essence."
},
"11.1": {
    shloka: "अर्जुन उवाच | मदनुग्रहाय परमं गुह्यमध्यात्मसञ्ज्ञितम् | यत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम ||",
    meaning: "Arjuna said: By my hearing the instructions You have kindly given me about these most confidential spiritual subjects, my illusion has now been dispelled.",
    explanation: "Arjuna acknowledges that his confusion and delusion have been removed by Krishna's teachings on profound spiritual knowledge."
},
"11.2": {
    shloka: "भवाप्ययौ हि भूतानां श्रुतौ विस्तरशो मया | त्वत्त: कमलपत्राक्ष माहात्म्यमपि चाव्ययम् ||",
    meaning: "O lotus-eyed one, I have heard from You in detail about the appearance and disappearance of every living entity and have realized Your inexhaustible glories.",
    explanation: "Arjuna acknowledges Krishna's divine manifestations and eternal nature, having comprehended the concepts of creation and destruction of all beings."
},
"11.3": {
    shloka: "एवमेतद्यथात्थ त्वमात्मानं परमेश्वर | द्रष्टुमिच्छामि ते रूपमैश्वरं पुरुषोत्तम ||",
    meaning: "O greatest of all personalities, O supreme form, though I see here before me Your actual position, I wish to see how You have entered into this cosmic manifestation. I want to see that form of Yours!",
    explanation: "Arjuna, now desiring to witness the cosmic form of Krishna, seeks to perceive how the Supreme Lord pervades and manifests within the universe."
},
"11.4": {
    shloka: "मन्यसे यदि तच्छक्यं मया द्रष्टुमिति प्रभो | योगेश्वर ततो मे त्वं दर्शयात्मानमव्ययम् ||",
    meaning: "If You think that I am able to behold Your cosmic form, O my Lord, O master of all mystic power, then kindly show me that universal Self.",
    explanation: "Arjuna requests Krishna, the master of yoga and mystic power, to reveal His imperishable universal form, expressing his readiness to witness it."
},
"11.5": {
    shloka: "श्रीभगवानुवाच | पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रश: | नानाविधानि दिव्यानि नानावर्णाकृतीनि च ||",
    meaning: "The Supreme Personality of Godhead said: O Arjuna, behold now My opulences, hundreds of thousands of varied divine forms, multicolored like the sea.",
    explanation: "Krishna begins revealing His divine opulences to Arjuna, displaying countless divine and varied forms, each resplendent and colorful."
},
"11.6": {
    shloka: "पश्यादित्यान्वसून्रुद्रानश्विनौ मरुतस्तथा | बहून्यदृष्टपूर्वाणि पश्याश्चर्याणि भारत ||",
    meaning: "O best of the Bharatas, see here the different manifestations of Adityas, Vasus, Rudras, Ashvini-kumaras, and all the other demigods. Behold the many wonderful things which no one has ever seen or heard of before.",
    explanation: "Krishna invites Arjuna to witness the forms of various celestial entities like Adityas, Vasus, Rudras, Ashvini-kumaras, and other demigods, unveiling extraordinary and unheard-of wonders."
},
"11.7": {
    shloka: "इहैकस्थं जगत्कृत्स्नं पश्याद्य सचराचरम् | मम देहे गुडाकेश यच्चान्यद्द्रष्टुमिच्छसि ||",
    meaning: "Whatever you wish to see can be seen all at once in this body. This universal form can show you all that you now desire, as well as whatever you may desire in the future. Everything is here completely.",
    explanation: "Krishna assures Arjuna that everything he wishes to see can be perceived simultaneously within His universal form, which encompasses all entities, past, present, and future."
},
"11.8": {
    shloka: "न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा | दिव्यं ददामि ते चक्षु: पश्य मे योगमैश्वरम् ||",
    meaning: "But you cannot see Me with your present eyes. Therefore I give you divine eyes. Behold My mystic opulence!",
    explanation: "Krishna informs Arjuna that his mortal eyes cannot perceive His universal form and grants him divine vision to witness His transcendental opulence."
},
"11.9": {
    shloka: "सञ्जय उवाच | एवमुक्त्वा ततो राजन्महायोगेश्वरो हरि: | दर्शयामास पार्थाय परमं रूपमैश्वरम् ||",
    meaning: "Sanjaya said: O King, having spoken thus, the Supreme Lord of yoga, Hari, displayed to Arjuna His universal form, complete with many mouths and eyes, and many wonderful visions never before seen.",
    explanation: "Sanjaya narrates how Lord Krishna, the master of mystic yoga, then revealed His divine universal form to Arjuna, displaying countless mouths, eyes, and other astonishing features."
},
"11.10": {
    shloka: "अनेकवक्त्रनयनमनेकाद्भुतदर्शनम् | अनेकदिव्याभरणं दिव्यानेकोद्यतायुधम् ||",
    meaning: "Arjuna saw in that universal form unlimited mouths and eyes, unlimited wonderful visions. The form was decorated with divine, dazzling ornaments and arrayed in infinite forms of divine weapons.",
    explanation: "Arjuna beheld Krishna's universal form adorned with countless divine features, such as numerous mouths, eyes, wonderful visions, divine ornaments, and an array of celestial weapons."
},
"11.11": {
    shloka: "दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम्। सर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम्।।11.11।।",
    meaning: "The divine form adorned with divine garlands and apparel, anointed with divine fragrances, is bewildering and limitless with faces on all sides.",
    explanation: "Arjuna describes Krishna's universal form as divine, adorned with celestial garments and fragrances, and having faces in every direction, representing its infinite and wondrous nature."
},
"11.12": {
    shloka: "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता। यदि भा: सदृशी सा स्याद्भासस्तस्य महात्मन:।।11.12।।",
    meaning: "If a thousand suns were to rise in the sky simultaneously, their radiance might resemble the effulgence of that supreme personality.",
    explanation: "Arjuna compares the effulgence of Krishna's universal form to the brilliance of a thousand suns rising in the sky, emphasizing its dazzling and awe-inspiring nature."
},
"11.13": {
    shloka: "तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा। अपश्यद्देवदेवस्य शरीरे पाण्डवस्तदा।।11.13।।",
    meaning: "At that time, Arjuna saw the entire universe with its many divisions gathered together in one place in the body of the Supreme Lord, the God of gods.",
    explanation: "Arjuna perceives the entirety of the universe, in its various forms and divisions, assembled within the body of the Supreme Lord, the divine controller of all gods."
},
"11.14": {
    shloka: "तत: स विस्मयाविष्टो हृष्टरोमा धनञ्जय:। प्रणम्य शिरसा देवं कृताञ्जलिरभाषत।।11.14।।",
    meaning: "Then, overwhelmed with wonder and hair standing on end, Arjuna bowed his head to offer obeisances and with palms joined, spoke falteringly to the Lord.",
    explanation: "Arjuna, filled with amazement and reverence, bows his head and joins his palms, his body thrilled with spiritual ecstasy, and speaks to the Lord with great reverence."
},
"11.15": {
    shloka: "अर्जुन उवाच | पश्यामि देवांस्तव देव देहे सर्वांस्तथा भूतविशेषसङ्घान्। ब्रह्माणमीशं कमलासनस्थमृषींश्च सर्वानुरगांश्च दिव्यान्।।11.15।।",
    meaning: "Arjuna said: O Lord, I see assembled in Your body all the demigods and various other living entities. I see Brahma seated on the lotus flower, as well as Lord Shiva, all the sages, and divine serpents.",
    explanation: "Arjuna beholds within Krishna's universal form the presence of all celestial deities, prominent beings, divine manifestations like Brahma and Shiva, great sages, and celestial serpents."
},
"11.16": {
    shloka: "अनेकबाहूदरवक्त्रनेत्रं पश्यामि त्वां सर्वतोऽनन्तरूपम्। नान्तं न मध्यं न पुनस्तवादिं पश्यामि विश्वेश्वर विश्वरूप।।11.16।।",
    meaning: "O Lord of the universe, O universal form, I see in Your body many, many arms, bellies, mouths, and eyes, expanded everywhere, without limit. I see in You no end, no middle, and no beginning.",
    explanation: "Arjuna perceives Krishna's universal form adorned with countless arms, stomachs, faces, and eyes, extending endlessly in all directions, revealing the limitless expanse of the Supreme Lord."
},
"11.17": {
    shloka: "किरीटिनं गदिनं चक्रिणं च ते ज्वलन्तमनंशुमानमिश्रम्। द्रष्टुमिच्छामि त्वां प्रवृत्तमन्यैर्ज्योतिर्गणैर्यथा न शस्य स्यात्।।11.17।।",
    meaning: "I wish to see You in Your four-armed form, holding a club, discus, and conch, with a crown radiating light like a blazing fire and the entire universe illumined.",
    explanation: "Arjuna desires to witness Krishna's four-armed divine form, adorned with a crown and radiant like a blazing fire, illuminating the entire cosmos, comparable to the effulgence of a thousand suns."
},
"11.18": {
    shloka: "त्वमक्षरं परमं वेदितव्यं त्वमस्य विश्वस्य परं निधानम्। त्वमव्ययः शाश्वतधर्मगोप्ता सनातनस्त्वं पुरुषो मतो मे।।11.18।।",
    meaning: "You are the Supreme Divine Personality, the ultimate abode of this universe, the eternal, transcendental guardian of religious principles. You are the primal God, transcendental and original, and You are perceived by the Vedas.",
    explanation: "Arjuna recognizes Krishna as the Supreme Being, the eternal sustainer of dharma (righteousness), and the ultimate refuge of the entire universe. He acknowledges Krishna's eternal nature, divine attributes, and status as the source of all existence."
},
"11.19": {
    shloka: "अनादिमध्यान्तमनन्तवीर्यमनन्तबाहुं शशिसूर्यनेत्रम्। पश्यामि त्वां दीप्तहुताशवक्त्रं स्वतेजसा विश्वमिदं तपन्तम्।।11.19।।",
    meaning: "I see You with Your infinite power, without beginning, middle, or end; with innumerable arms, the sun and moon as Your eyes, blazing fire as Your mouth, heating this universe with Your radiance.",
    explanation: "Arjuna beholds Krishna's cosmic form, which is limitless and omnipotent, with countless arms symbolizing divine power. He perceives the sun and moon as Krishna's eyes, and His mouth as a blazing fire, illuminating and consuming the universe with divine splendor."
},
"11.20": {
    shloka: "द्यावापृथिव्योरिदमन्तरं हि व्याप्तं त्वयैकेन दिशश्च सर्वा:। दृष्ट्वाद्भुतं रूपमुग्रं तवेदं लोकत्रयं प्रव्यथितं महात्मन्।।11.20।।",
    meaning: "Indeed, all the space between heaven and earth and all the directions are pervaded by You alone. Beholding Your wonderful and terrifying form, all the three worlds are perturbed, O mighty-armed one.",
    explanation: "Arjuna realizes that Krishna pervades all space and directions, encompassing the entire cosmos within Himself. Witnessing Krishna's awe-inspiring and formidable universal form, all realms of existence tremble in awe and fear."
},
"11.21": {
    shloka: "अमी हि त्वां सुरसङ्घा विशन्ति केचिद्भीता: प्राञ्जलय:। स्वस्तीत्युक्त्वा महर्षिसिद्धसङ्घा: स्तुवन्ति त्वां स्तुतिभि: पुष्कलाभि:।।11.21।।",
    meaning: "Verily, all the hosts of demigods are surrendering before You, entering into You, some in fear, while great sages and perfected beings are extolling You with abundant praises proclaiming auspiciousness.",
    explanation: "Arjuna observes celestial beings, including gods and sages, offering obeisances and hymns to Krishna. Some approach in reverence and fear, while others worship with great joy and admiration, acknowledging Krishna's supreme divinity."
},
"11.22": {
    shloka: "रुद्रादित्या वसवो ये च साध्या विश्वेऽश्विनौ मरुतश्चोष्मपाश्च। गन्धर्वयक्षासुरसिद्धसङ्घा वीक्षन्ते त्वां विस्मिताश्चैव सर्वे।।11.22।।",
    meaning: "The Rudras, Adityas, Vasus, Sadhyas, Ashvins, Maruts, and the hosts of Gandharvas, Yakshas, Asuras, and Siddhas, all gaze upon You with wonder.",
    explanation: "Arjuna observes various celestial beings, including Rudras, Adityas, Vasus, Sadhyas, Ashvins, Maruts, Gandharvas, Yakshas, Asuras, and Siddhas, all marveling at Krishna's universal form in astonishment."
},
"11.23": {
    shloka: "रूपं महत्ते बहुवक्त्रनेत्रं महाबाहो बहुबाहूरुपादम्। बहुदरं बहुदंष्ट्राकरालं दृष्ट्वा लोका: प्रव्यथितास्तथाहम्।।11.23।।",
    meaning: "O mighty-armed one, seeing Your great form with many faces, eyes, arms, thighs, feet, bellies, and fearful teeth, all the worlds are perturbed, and so am I.",
    explanation: "Arjuna, witnessing Krishna's colossal form with multiple faces, eyes, arms, legs, bellies, and terrifying teeth, along with the disturbance of the entire universe, experiences awe and astonishment."
},
"11.24": {
    shloka: "नभ:स्पृशं दीप्तमनेकवर्णं व्यात्ताननं दीप्तविशालनेत्रम्। दृष्ट्वा हि त्वां प्रव्यथितान्तरात्मा धृतिं न विन्दामि शमं च विष्णो।।11.24।।",
    meaning: "Seeing Your radiant, multi-colored, vast visage with gaping mouths and large, fiery eyes, my inner self is perturbed, and I am unable to maintain my composure or peace, O Vishnu.",
    explanation: "Arjuna, viewing Krishna's effulgent and variegated form with vast, blazing eyes and mouths, feels deeply disturbed within, unable to find solace or tranquility."
},
"11.25": {
    shloka: "दंष्ट्राकरालानि च ते मुखानि दृष्ट्वैव कालानलसन्निभानि। दिशो न जाने न लभे च शर्म प्रसीद देवेश जगन्निवास।।11.25।।",
    meaning: "Upon seeing Your mouths with their terrible teeth, resembling the fires of cosmic annihilation, I am utterly bewildered and find neither reassurance nor peace. O Lord of the universe, O abode of creation, please be gracious.",
    explanation: "Arjuna, beholding Krishna's mouths filled with formidable teeth resembling the fires of destruction, feels deeply unsettled and distressed, seeking solace and mercy from the Lord of the universe."
},
"11.26": {
    shloka: "अमी च त्वां धृतराष्ट्रस्य पुत्रा: सर्वे सहैवावनिपालसङ्घै:। भीष्मो द्रोण: सूतपुत्रस्तथासौ सहास्मदीयैरपि योधमुख्यै:।।11.26।।",
    meaning: "All the sons of Dhritarashtra, along with their allied kings, and Bheeshma, Drona, Karna, and also our chief soldiers, are rushing into Your fearful mouths.",
    explanation: "Arjuna observes how all the warriors, including the Kauravas' sons and their formidable allies like Bheeshma, Drona, and Karna, are being drawn into Krishna's terrifying mouths, symbolizing imminent destruction."
},
"11.27": {
    shloka: "वक्त्राणि ते त्वरमाणा विशन्ति दंष्ट्राकरालानि भयानकानि। केचिद्विलग्ना दशनान्तरेषु सन्दृश्यन्ते चूर्णितैरुत्तमाङ्गै:।।11.27।।",
    meaning: "As moths swiftly rush into a blazing fire for destruction, similarly, these warriors are entering Your mouths with great haste for their own destruction. Some are caught between Your teeth, with their heads smashed to powder.",
    explanation: "Arjuna metaphorically compares the warriors rushing into Krishna's mouths to moths diving into a blazing fire, symbolizing their inevitable destruction. He witnesses them being consumed and crushed within Krishna's terrible jaws."
},
"11.28": {
    shloka: "यथा नदीनां बहवोऽम्बुवेगा: समुद्रमेवाभिमुखा द्रवन्ति। तथा तवामी नरलोकवीरा विशन्ति वक्त्राण्यभिविज्वलन्ति।।11.28।।",
    meaning: "As the many currents of rivers flow towards the ocean, so do these heroes of the human world enter Your blazing mouths.",
    explanation: "Arjuna compares the warriors' fate to rivers flowing into the ocean, signifying how these valiant beings are inevitably drawn into Krishna's fierce mouths, symbolizing their destined demise."
},
"11.29": {
    shloka: "यथा प्रदीप्तं ज्वलनं पतङ्गा विशन्ति नाशाय समृद्धवेगाः। तथैव नाशाय विशन्ति लोका स्तवापि वक्त्राणि समृद्धवेगाः।।",
    meaning: "Just as moths rush into a blazing fire for destruction, similarly these creatures also rush into Your mouths for destruction. You lick them up with Your flaming mouths, swallowing them all.",
    explanation: "Arjuna witnesses the terrifying universal form of Lord Krishna, where countless beings are drawn into Krishna's mouths like moths rushing into a fire, symbolizing their destruction."
},
"11.30": {
    shloka: "लेलिह्यसे ग्रसमान: समन्ताल्लोकान्समग्रान्वदनैर्ज्वलद्भि:। तेजोभिरापूर्य जगत्समग्रं भासस्तवोग्रा: प्रतपन्ति विष्णो।।",
    meaning: "You are licking up all the worlds around with Your flaming mouths, swallowing them from all sides. Your fierce rays are filling the entire universe with radiance, O Vishnu!",
    explanation: "Arjuna describes the cosmic form of Krishna, where the Lord devours the worlds with His flaming mouths and fills the universe with His fierce radiance, signifying His all-encompassing power."
},
"11.31": {
    shloka: "आख्याहि मे को भवानुग्ररूपो नमोऽस्तु ते देववर प्रसीद। विज्ञातुमिच्छामि भवन्तमाद्यं न हि प्रजानामि तव प्रवृत्तिम्।।",
    meaning: "Please tell me who You are with such a fierce form. I bow to You, O Supreme Lord; be gracious! I desire to know You, the primal Being, for I do not comprehend Your purpose.",
    explanation: "Arjuna, overwhelmed by the cosmic form of Krishna, humbly requests the Lord to reveal His true identity and purpose, seeking understanding and divine grace."
},
"11.32": {
    shloka: "श्रीभगवानुवाच | कालोऽस्मि लोकक्षयकृत् प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्त:। ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिता: प्रत्यनीकेषु योधा:।।",
    meaning: "The Supreme Personality of Godhead said: Time I am, the great destroyer of the worlds, and I have come here to destroy all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain.",
    explanation: "Lord Krishna responds to Arjuna's inquiry, revealing Himself as Time (Kala), the force of destruction that will annihilate all beings in the battlefield, except for the Pandavas."
},
"11.33": {
    shloka: "तस्मात्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्। मयैवैते निहता: पूर्वमेव निमित्तमात्रं भव सव्यसाचिन्।।",
    meaning: "Therefore, get up and prepare to fight. After conquering your enemies, you will enjoy a flourishing kingdom. They are already put to death by My arrangement, and you, O Savyasachin, can be but an instrument in the fight.",
    explanation: "Krishna instructs Arjuna to rise and engage in battle, assuring victory and a prosperous kingdom, as the enemies are already destined to be slain by the Lord's arrangement."
},
"11.34": {
    shloka: "द्रोणं च भीष्मं च जयद्रथं च कर्णं तथाऽन्यानपि योधवीरान्। मया हतांस्त्वं जहि मा व्यथिष्ठा युध्यस्व जेतासि रणे।।",
    meaning: "Drona, Bhishma, Jayadratha, Karna, and other brave warriors—already slain by Me—fight and do not be distressed. You will conquer the enemies in battle.",
    explanation: "Krishna mentions specific warriors like Drona, Bhishma, Jayadratha, and Karna, who are destined to be slain in the battle by His will, encouraging Arjuna to fight without hesitation."
},
"11.35": {
    shloka: "सञ्जय उवाच | एतच्छ्रुत्वा वचनं केशवस्य कृताञ्जलिर्वेपमानः किरीटी। नमस्कृत्वा भूय एवाह कृष्णं सगद्गदं भीतभीतः प्रणम्य।।",
    meaning: "Sanjaya said: Having heard these words from the Supreme Personality of Godhead, Keshava (Krishna), Arjuna, with folded hands and trembling, offered obeisance and bowed down fearfully. He then spoke falteringly to Krishna.",
    explanation: "Sanjaya describes Arjuna's reaction upon hearing Lord Krishna's words, where Arjuna becomes overwhelmed with awe and reverence, bowing down to Krishna with folded hands and trembling."
},
"11.36": {
    shloka: "अर्जुन उवाच | स्थाने हृषीकेश तव प्रकीर्त्या जगत् प्रहृष्यत्यनुरज्यते च। रक्षांसि भीतानि दिशो द्रवन्ति सर्वे नमस्यन्ति च सिद्धसङ्घाः।।",
    meaning: "Arjuna said: O Hrishikesha, the world becomes joyful upon hearing Your name, and thus everyone becomes attached to You. Although the perfected beings offer You their respectful homage, the demons are afraid, and they flee here and there. All this is rightly done.",
    explanation: "Arjuna observes the profound impact of Lord Krishna's divine manifestations on the world, where devotees rejoice and demons tremble in fear upon hearing His name and witnessing His cosmic form."
},
"11.37": {
    shloka: "कस्माच्च ते न नमेरन्महात्मन् गरीयसे ब्रह्मणोऽप्यादिकर्त्रे। अनन्त देवेश जगन्निवास त्वमक्षरं सदसत्तत्परं यत्।।",
    meaning: "O great one, greater even than Brahma, why should they not offer their respectful obeisances to You? O limitless one, God of gods, refuge of the universe! You are the invincible source, the cause of all causes, transcendental to this material manifestation.",
    explanation: "Arjuna marvels at the greatness of Lord Krishna, acknowledging Him as the supreme cause and refuge of the universe, deserving of utmost reverence and worship even by the demigods."
},
"11.38": {
    shloka: "त्वमादिदेवः पुरुषः पुराणस्त्वमस्य विश्वस्य परं निधानम्। वेत्तासि वेद्यं च परं च धाम त्वया ततं विश्वमनन्तरूप।।",
    meaning: "You are the original Personality, the Godhead. You are the only sanctuary of this manifested cosmic world. You know everything, and You are all that is knowable. You are above the material modes, O limitless form!",
    explanation: "Arjuna acknowledges Lord Krishna as the primordial divine being, the ultimate refuge of the universe, possessing complete knowledge and being the essence of everything that can be known."
},
"11.39": {
    shloka: "वायुर्यमोऽग्निर्वरुण: शशाङ्क: प्रजापतिस्त्वं प्रपितामहश्च। नमो नमस्तेऽस्तु सहस्रकृत्व: पुनश्च भूयोऽपि नमो नमस्ते।।",
    meaning: "You are Vayu (the wind), Yama (the lord of death), Agni (the fire), Varuna (the lord of water), the moon, the progenitor, and the great-grandfather. I offer my respectful obeisances unto You a thousand times, and again and yet again!",
    explanation: "Arjuna pays homage to Lord Krishna, recognizing Him as the elemental forces and cosmic deities, the origin of all existence, and offers repeated obeisances out of deep reverence."
},
"11.40": {
    shloka: "नम: पुरस्तादथ पृष्ठतस्ते नमोऽस्तु ते सर्वत एव सर्व। अनन्तवीर्यामितविक्रमस्त्वं सर्वं समाप्नोषि ततोऽसि सर्वः।।",
    meaning: "Obeisances from the front, from behind, and from all sides! O unbounded power, You pervade everything and, thus, You are everything!",
    explanation: "Arjuna offers salutations to Lord Krishna, recognizing His omnipresence and all-encompassing nature, acknowledging that Krishna encompasses everything and possesses immeasurable valor and prowess."
},
"11.41": {
    shloka: "सखेति मत्वा प्रसभं यदुक्तं हे कृष्ण हे यादव हे सखेति। अजानता महिमानं तवेदं मया प्रमादात्प्रणयेन वापि।।",
    meaning: "Thinking of You as my friend, I have rashly addressed You 'O Krishna,' 'O Yadava,' 'O my friend,' not knowing Your glories. Please forgive whatever I may have done in madness or in love.",
    explanation: "Arjuna humbly seeks forgiveness from Lord Krishna, realizing that in his affectionate friendship, he may have addressed Krishna casually without recognizing His divine stature."
},
"11.42": {
    shloka: "यच्चावहासार्थमसत्कृतोऽसि विहारशय्यासनभोजनेषु। एकोऽथवाप्यच्युत तत्समक्षं तत्क्षामये त्वामहमप्रमेयम्।।",
    meaning: "Whatever I may have done in joking, in play, in jest, or in sleep—whether alone or in company—O Achyuta (Krishna), I beg Your forgiveness for all those offenses.",
    explanation: "Arjuna seeks forgiveness from Lord Krishna for any irreverent actions or remarks made in jest or play, whether knowingly or unknowingly, recognizing Krishna's immeasurable nature."
},
"11.43": {
    shloka: "पितासि लोकस्य चराचरस्य त्वमस्य पूज्यश्च गुरुर्गरीयान्। न त्वत्समोऽस्त्यभ्यधिकः कुतोऽन्यो लोकत्रयेऽप्यप्रतिमप्रभाव।।",
    meaning: "You are the father of this complete cosmic manifestation, of the moving and the nonmoving. You are its worshipable chief, the supreme spiritual master. No one is equal to You, nor can anyone be one greater than You within the three worlds, O immeasurable Lord!",
    explanation: "Arjuna acknowledges Lord Krishna as the ultimate origin of all beings and the supreme authority worthy of worship and reverence, recognizing Krishna's unmatched power and influence across the three realms."
},
"11.44": {
    shloka: "तस्मात्प्रणम्य प्रणिधाय कायं प्रसादये त्वामहमीशमीड्यम्। पितेव पुत्रस्य सखेव सख्युः प्रियः प्रियायार्हसि देव सोढुम्।।",
    meaning: "Therefore, I offer my obeisances unto You again and again. I implore Your forgiveness, my Lord. You are the father, and I am Your son. You are the supreme guru, and I am Your friend. You are the ultimate beloved, and I am simply unworthy to know You.",
    explanation: "Arjuna, feeling deeply grateful and reverent towards Lord Krishna, offers repeated obeisances and seeks forgiveness, acknowledging their relationship as father and son, guru and friend, and recognizing Krishna as the beloved divine being."
},
"11.45": {
    shloka: "अदृष्टपूर्वं हृषितोऽस्मि दृष्ट्वा भयेन च प्रव्यथितं मनो मे। तदेव मे दर्शय देव रूपं प्रसीद देवेश जगन्निवास।।",
    meaning: "I am pleased by seeing this form that has never been seen before, but my mind is disturbed with fear. Therefore, please show me Your original form, O Lord of lords, O abode of the universe!",
    explanation: "Though awed by Lord Krishna's cosmic form, Arjuna's mind is distressed with fear. He requests Krishna to reveal His original form for Arjuna's comfort and clarity."
},
"11.46": {
    shloka: "किरीटिनं गदिनं चक्रिणं च तेजोराशिं सर्वतो दीप्तिमन्तम्। पश्यामि त्वां दुर्निरीक्ष्यं समन्ताद्दीप्तानलार्कद्युतिमप्रमेयम्।।",
    meaning: "I see You with diadems, clubs, and discs, a mass of brilliance glowing from all sides, difficult to behold, shining everywhere with immeasurable radiance, resembling the fiery rays of the sun and blazing fire.",
    explanation: "Arjuna describes the awe-inspiring sight of Lord Krishna's cosmic form adorned with crowns, weapons, and blazing effulgence, difficult for mortal eyes to behold."
},
"11.47": {
    shloka: "श्रीभगवानुवाच | मया प्रसन्नेन तवार्जुनेदं रूपं परं दर्शितमात्मयोगात्। तेजोमयं विश्वमनन्तमाद्यं यन्मे त्वदन्येन न दृष्टपूर्वम्।।",
    meaning: "The Blessed Lord said: My dear Arjuna, this supreme form of Mine, which you have seen, is very difficult to behold. Even the demigods are ever seeking the opportunity to see this form, which is so pleasing to the eyes and is so wonderful. It is never seen before.",
    explanation: "Lord Krishna explains to Arjuna that the divine cosmic form he witnessed is extremely rare and wondrous, and even celestial beings desire to behold it. This form, filled with infinite radiance and the essence of all existence, has never been seen by anyone before."

},
"11.48": {
    shloka: "न वेदयज्ञाध्ययनैर्न दानैर्न च क्रियाभिर्न तपोभिरुग्रै:। एवंरूप: शक्य अहं नृलोके द्रष्टुं त्वदन्येन कुरुप्रवीर।।",
    meaning: "I am not to be known by Vedic study, sacrifices, charity, or severe austerities. Only by undivided devotional service can I be understood as I am, standing before you, O Arjuna, and can thus be seen directly.",
    explanation: "Lord Krishna emphasizes that His divine form cannot be realized merely through Vedic rituals, sacrifices, or austerities. It is through exclusive and wholehearted devotion (bhakti) that one can understand and directly perceive Him as He is."

},
"11.49": {
    shloka: "मा ते व्यथा मा च विमूढभावो दृष्ट्वा रूपं घोरमीदृङ्ममेदम्। व्यतेपधामर्षिषि बोभिर्नदीं च पावके च।।",
    meaning: "Do not be perturbed or fearful upon seeing this terrible form of Mine. Let not your mind be disturbed. With peaceful mind, take refuge in Me and see how with a tranquil heart, I destroy the fierce form that you behold.",
    explanation: "Lord Krishna reassures Arjuna not to be afraid or disturbed by His formidable cosmic form. Instead, Arjuna should find peace and take refuge in Him, understanding that Krishna's purpose is to dispel evil and restore righteousness."

},
"11.50": {
    shloka: "सञ्जय उवाच | इत्यर्जुनं वासुदेवस्तथोक्त्वा स्वकं रूपं दर्शयामास भूयः। आश्वासयामास च भीतमेनं भूत्वा पुनः सौम्यवपुर्महात्मा।।",
    meaning: "Sanjaya said: Thus addressing Arjuna, Lord Krishna displayed His own divine form again. O King, becoming gentle in form, the great soul reassured the fearful Arjuna.",
    explanation: "Sanjaya narrates how Lord Krishna, after showing His cosmic form to Arjuna, revealed His gentle and familiar form to comfort the frightened Arjuna, transforming back to His usual majestic appearance."

},
"11.51": {
    shloka: "अर्जुन उवाच | दृष्ट्वेदं मानुषं रूपं तव सौम्यं जनार्दन। इदानीमस्मि संवृत्तः सचेताः प्रकृतिं गतः।।",
    meaning: "Arjuna said: O Janardana (Krishna), after seeing this gentle human form of Yours, I have regained my composure and my mind is now restored to its usual state.",
    explanation: "Arjuna expresses his relief upon seeing Krishna's familiar and approachable form, indicating that his mind has returned to normalcy after witnessing the overwhelming cosmic manifestation."
},
"11.52": {
    shloka: "श्री भगवानुवाच | सुदुर्दर्शमिदं रूपं दृष्टवानसि यन्मम। देवा अप्यस्य रूपस्य नित्यं दर्शनकाङ्क्षिणः।।",
    meaning: "The Supreme Lord said: My dear Arjuna, this form of Mine that you are seeing is very difficult to behold. Even the demigods are ever seeking the opportunity to see this form, which is so pleasing to the eyes and is so wonderful.",
    explanation: "Lord Krishna explains to Arjuna that the universal form he is witnessing is extraordinarily rare and splendid. Even celestial beings constantly desire to behold this magnificent and enchanting form."
},
"11.53": {
    shloka: "नाहं वेदैर्न तपसा न दानेन न चेज्यया। शक्य एवंविधो द्रष्टुं दृष्टवानसि मां यथा।।",
    meaning: "I am not to be known by the Vedas, austerity, charity, or sacrifices. I am to be known by one who sees Me as I am, without undergoing hardships.",
    explanation: "Lord Krishna declares that He cannot be realized merely through the study of Vedas, rigorous austerity, acts of charity, or lavish sacrifices. One can truly understand Him only by direct perception with pure vision, without excessive difficulty or strain."
},
"11.54": {
    shloka: "भक्त्या त्वनन्यया शक्य अहमेवंविधोऽर्जुन। ज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परन्तप॥",
    meaning: "But by single-minded devotion I can be known in this form, Arjuna, and seen and truly entered into, O Parantapa.",
    explanation: "Krishna reveals that His universal form can be understood, perceived, and even entered into through unwavering devotion (bhakti) alone. Devotion to the Supreme allows one to realize the essence of His cosmic manifestation."
},
"11.55": {
    shloka: "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः। निर्वैर: सर्वभूतेषु यः स मामेति पाण्डव।।",
    meaning: "My devotee who is engaged in my service, free from enmity towards all beings, friendly towards every living entity, certainly comes to Me, O Pandava.",
    explanation: "Krishna describes the qualities of His true devotee—one who performs all actions for His sake, is devoid of malice toward any creature, and possesses a compassionate attitude towards all beings. Such a devotee attains Him without fail."
},
"12.1": {
    shloka: "अर्जुन उवाच | एवं सततयुक्ता ये भक्ता: त्वां पर्युपासते। ये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमा:।।12.1।।",
    meaning: "Arjuna said: Those devotees who constantly worship You with steadfast faith, and those who worship the imperishable and the unmanifest— which of them are better versed in yoga?",
    explanation: "Arjuna inquires from Krishna about the superiority between devotees who worship the personal form of God and those who worship the formless, unmanifest aspect, seeking clarification on which path leads to greater proficiency in yoga."
},
"12.2": {
    shloka: "श्रीभगवानुवाच | मय्यावेश्य मनो ये मां नित्ययुक्ता उपासते। श्रद्धया परयोपेतास्ते मे युक्ततमा: मता:।।12.2।।",
    meaning: "The Blessed Lord said: Those who fix their minds on Me and worship Me with steadfast faith, considering Me the supreme goal, they are the most perfect in yoga according to Me.",
    explanation: "Krishna explains that devotees who engage their minds and hearts in constant meditation upon Him, with unwavering faith and supreme dedication, are considered the highest practitioners of yoga in His opinion."
},
"12.3": {
    shloka: "ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते। सर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम्।।12.3।।",
    meaning: "But those who worship the imperishable, the indefinable, the unmanifested, the omnipresent, the unthinkable, the unchanging, the immovable, and the eternal—",
    explanation: "Krishna describes another class of worshippers who meditate on the imperishable, formless, omnipresent, and eternal aspect of the Divine, which is all-pervading, inconceivable, unchanging, and stable."
},
"12.4": {
    shloka: "संनियम्येन्द्रियग्रामं सर्वत्र समबुद्धय:। ते प्राप्नुवन्ति मामेव सर्वभूतहिते रता:।।12.4।।",
    meaning: "Restraining all their senses, being even-minded everywhere, engaged in the welfare of all beings, they indeed come to Me.",
    explanation: "Krishna explains that those who control their senses, maintain equanimity in all situations, and are devoted to the welfare of all beings, ultimately attain Him."
},
"12.5": {
    shloka: "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम्। अव्यक्ता हि गतिर्दु:खं देहवद्भिरवाप्यते।।12.5।।",
    meaning: "For those whose minds are attached to the unmanifested, impersonal feature of the Supreme, advancement is very troublesome. To make progress in that discipline is always difficult for those embodied beings.",
    explanation: "Krishna explains the challenges faced by those whose minds are focused on the formless aspect of the Supreme, which is impersonal and abstract, making spiritual progress more challenging for individuals with material bodies."
},
"12.6": {
    shloka: "ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्परा:। अनन्येनैव योगेन मां ध्यायन्त उपासते।।12.6।।",
    meaning: "But those who dedicate all their actions to Me, regarding Me as the Supreme goal, worshiping Me and meditating on Me with exclusive devotion—",
    explanation: "Krishna describes devotees who surrender all their activities to Him, considering Him as the ultimate destination, and engage in the practice of meditation and worship with unwavering dedication."
},
"12.7": {
    shloka: "तेषामहं समुद्धर्ता मृत्युसंसारसागरात्। भवामि नचिरात्पार्थ मय्यावेशितचेतसाम्।।12.7।।",
    meaning: "Of those whose minds are fixed on Me, O Arjuna, verily I become soon the deliverer from the ocean of the mortal samsara (repeated birth and death).",
    explanation: "Krishna assures that He quickly becomes the savior of those whose minds are absorbed in Him, rescuing them from the vast and perilous ocean of material existence."
},
"12.8": {
    shloka: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय। निवसिष्यसि मय्येव अत ऊर्ध्वं न संशय:।।12.8।।",
    meaning: "Fix your mind on Me alone, engage your intellect in Me, thus you shall dwell in Me hereafter, of this there is no doubt.",
    explanation: "Krishna instructs Arjuna to focus his mind and intellect entirely on Him, assuring that by doing so, Arjuna will reside in Him without a doubt."
},
"12.9": {
    shloka: "अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम्। अभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय।।12.9।।",
    meaning: "If you are unable to fix your mind steadily on Me, then by the practice of constant endeavor in meditation, seek to reach Me, O Arjuna.",
    explanation: "Krishna advises Arjuna that if he finds it difficult to steady his mind on Him, he should practice meditation diligently to attain Him."
},
"12.10": {
    shloka: "अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव। मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि।।12.10।।",
    meaning: "If you are unable to practice even this abhyasa yoga, then be intent on performing actions for My sake. Even by performing actions for My sake, you shall attain perfection.",
    explanation: "Krishna encourages Arjuna that if meditation practice seems challenging, Arjuna should perform all actions as an offering to Him, thus achieving perfection."
},
"12.11": {
    shloka: "अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रित:। सर्वकर्मफलत्यागं तत: कुरु यतात्मवान्।।12.11।।",
    meaning: "If you are incapable of even this, then take refuge in the performance of all actions being devoid of attachment to their results. Self-possessed, renounce the fruits of all actions.",
    explanation: "Krishna suggests that if performing actions for His sake is also challenging, Arjuna should practice selfless action, renouncing attachment to the results, and maintaining equanimity."
},
"12.12": {
    shloka: "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते। ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम्।।12.12।।",
    meaning: "For indeed, superior to the practice of knowledge is meditation; and superior to meditation is renunciation of the fruits of actions. For by such renunciation one attains peace immediately.",
    explanation: "Krishna explains the hierarchy of practices, stating that meditation is superior to mere theoretical knowledge, and renunciation of the fruits of actions (karma-phala-tyaga) is superior to meditation, leading to the attainment of profound peace."
},
"12.13": {
    shloka: "अद्वेष्टा सर्वभूतानां मैत्र: करुण एव च। निर्ममो निरहङ्कार: समदु:खसुख: क्षमी।।12.13।।",
    meaning: "He who has no ill will towards any being, who is friendly and compassionate, free from possessiveness and egoism, balanced in pleasure and pain, and forgiving;",
    explanation: "Krishna describes the qualities of a true devotee, emphasizing attributes such as non-enmity towards all beings, friendliness, compassion, absence of possessiveness and ego, equanimity towards pleasure and pain, and forgiveness."
},
"12.14": {
    shloka: "सन्तुष्ट: सततं योगी यतात्मा दृढनिश्चय:। मय्यर्पितमनोबुद्धिर्यो मद्भक्त: स मे प्रिय:।।12.14।।",
    meaning: "Contented, self-controlled, firm in conviction, with mind and intellect dedicated to Me, such a devotee of Mine is dear to Me.",
    explanation: "Krishna extols the qualities of a devoted yogi who is contented, self-disciplined, resolute, and completely surrendered in mind and intellect to Him, declaring such a devotee as beloved."
},
"12.15": {
    shloka: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च य:। हर्षामर्षभयोद्वेगैर्मुक्तो य: स च मे प्रिय:।।12.15।।",
    meaning: "He by whom the world is not agitated and who does not agitate the world, and who is freed from joy, envy, fear, and anxiety— he is dear to Me.",
    explanation: "Krishna praises the devotee who remains unperturbed by worldly interactions and does not disturb others, being liberated from emotions such as joy, envy, fear, and anxiety, declaring such a person as beloved."
},
"12.16": {
    shloka: "अनपेक्ष: शुचिर्दक्ष उदासीनो गतव्यथ:। सर्वारम्भपरित्यागी यो मद्भक्त: स मे प्रिय:।।12.16।।",
    meaning: "He who is indifferent to materialistic pursuits, clean, skillful, impartial, and free from distress, and who renounces all initiatives— such a devotee of Mine is dear to Me.",
    explanation: "Krishna praises the devotee who remains unattached to worldly endeavors, possesses purity, competence, impartiality, and freedom from distress, and renounces all selfish undertakings, declaring such a person as beloved."
},
"12.17": {
    shloka: "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति। शुभाशुभपरित्यागी भक्तिमान्य: समे प्रिय:।।12.17।।",
    meaning: "He who neither rejoices, nor hates, nor grieves, nor desires, renouncing both the auspicious and the inauspicious— such a devotee full of devotion is dear to Me.",
    explanation: "Krishna describes the devotee who remains equipoised, unaffected by joy, hatred, sorrow, or desire, renouncing attachment to both favorable and unfavorable situations, as beloved due to their unwavering devotion."
},
"12.18": {
    shloka: "सम: शत्रौ च मित्रे च तथा मानापमानयो:। शीतोष्णसुखदु:खेषु सम: सङ्गविवर्जित:।।12.18।।",
    meaning: "He who is the same to friend and foe, and also in honor and dishonor, who is the same in cold and heat, pleasure and pain, and who is free from attachment;",
    explanation: "Krishna extols the devotee who remains impartial towards friend and foe, honor and dishonor, cold and heat, pleasure and pain, devoid of attachment to worldly conditions."
},
"12.19": {
    shloka: "तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित्। अनिकेत: स्थिरमतिर्भक्तिमान्मे प्रियो नर:।।12.19।।",
    meaning: "He who is alike towards censure and praise, silent, content with anything, unattached to a place, equanimous, firm in intellect, full of devotion— such a person is dear to Me.",
    explanation: "Krishna praises the devotee who remains indifferent to criticism and acclaim, maintains silence, finds contentment in any circumstance, is unattached to a specific residence, possesses equanimity, steadfast intellect, and is devoted to Him, declaring such a person as beloved."
},
"12.20": {
    shloka: "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते। श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रिया:।।12.20।।",
    meaning: "But those who follow this immortal path described above, endowed with faith, regarding Me as the supreme goal— such devoted souls are exceedingly dear to Me.",
    explanation: "Krishna concludes by emphasizing that those who diligently follow the righteous path prescribed, possessing unwavering faith and considering Him as the ultimate goal, are extremely beloved to Him."
},
"13.1": {
    shloka: "अर्जुन उवाच | प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च।।13.1।।",
    meaning: "Arjuna said: O my dear Krishna, I wish to know about prakriti (nature), Purusha (the enjoyer), and the field and the knower of the field, and of knowledge and the end of knowledge.",
    explanation: "Arjuna seeks knowledge from Krishna about prakriti (material nature), purusha (the individual living entity), kshetra (the field of activities, the body), kshetrajna (the knower of the field, the soul), and also about true knowledge and its ultimate goal."
},
"13.2": {
    shloka: "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत।।13.2।।",
    meaning: "O scion of Bharata, you should understand that I am also the knower in all bodies, and to understand this body and its knower is called knowledge.",
    explanation: "Krishna reveals that He is the knower (kshetrajna) in all bodies (kshetras), indicating His presence as the individual soul (jivatma) within every living being."
},
"13.3": {
    shloka: "क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा। भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम्।।13.3।।",
    meaning: "O scion of Bharata, thus knowing the field (the body) and the knower of the field (the soul) and the process of knowledge, one can attain the supreme goal.",
    explanation: "Understanding the distinction between the body (kshetra) and the soul (kshetrajna), along with the process of true knowledge, leads one to liberation and the ultimate spiritual goal."
},
"13.4": {
    shloka: "तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत्। स च यो यत्प्रभावश्च तत्समासेन मे श्रृणु।।13.4।।",
    meaning: "Now hear My brief description of this field of activity and how it is constituted, what its changes are, whence it is produced, who that knower of the field of activities is, and what his influences are.",
    explanation: "Krishna begins to explain in detail the nature of the kshetra (the body or field of activities), including its constitution, changes, origin, the identity of the knower (soul), and the influences affecting this field."
},
"13.5": {
    shloka: "ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविध: स्मृत:। ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिता: पुरा।।13.5।।",
    meaning: "That knowledge of the field of activities and of the knower of the field of activities is described by various sages in various Vedic writings. It is especially presented in Vedanta-sutra with all reasoning as to cause and effect.",
    explanation: "Krishna explains that the understanding of the body (kshetra) and the soul (kshetrajna) is elaborately discussed by sages in Vedic scriptures, particularly in the Vedanta-sutra, which expounds on the nature of cause and effect."
},
"13.6": {
    shloka: "महाभूतान्यहङ्कारो बुद्धिरव्यक्तमेव च। इन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचरा:।।13.6।।",
    meaning: "The great elements (mahabhutas), false ego (ahankara), intelligence (buddhi), the unmanifested (avyakta), the ten senses (indriyas), the mind (manas), and the five sense objects (tanmatras)—",
    explanation: "Krishna enumerates the components of the material body and subtle elements that constitute the field of activities, including the great elements (earth, water, fire, air, ether), false ego, intelligence, unmanifested nature, senses, mind, and sense objects."
},
"13.7": {
    shloka: "इच्छा द्वेष: सुखं दु:खं सङ्घातश्चेतना धृति:। एतत्क्षेत्रं समासेन सविकारमुदाहृतम्।।13.7।।",
    meaning: "Desire, hatred, pleasure, pain, the body, consciousness, and determination— these comprise the field of activities with its modifications.",
    explanation: "Krishna describes further constituents of the kshetra (field of activities), which include desires, aversion, happiness, distress, the physical body, consciousness, and willpower, along with their transformations and modifications."
},
"13.8": {
    shloka: "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्। आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रह:।।13.8।।",
    meaning: "Humility, pridelessness, nonviolence, tolerance, simplicity, approaching a bona fide spiritual master, cleanliness, steadiness, self-control—",
    explanation: "Krishna enumerates the qualities of the kshetrajna (knower of the field), which include humility, absence of false pride, nonviolence, tolerance, simplicity, seeking guidance from a spiritual teacher, cleanliness, stability, and self-restraint."
},
"13.9": {
    shloka: "इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च। जन्ममृत्युजराव्याधिदु:खदोषानुदर्शनम्।।13.9।।",
    meaning: "Detachment from sense gratification, absence of false ego, insight into the evils of birth, death, old age, and disease—",
    explanation: "Krishna continues listing the attributes of the kshetrajna, which involve detachment from material desires, lack of false pride, realization of the miseries of birth, death, old age, and disease."
},
"13.10": {
    shloka: "असक्तिरनभिष्वङ्ग: पुत्रदारगृहादिषु। नित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु।।13.10।।",
    meaning: "Nonattachment to children, wife, home, and the rest, and evenmindedness amid desired and undesired events—",
    explanation: "Krishna further explains the qualities of the knower of the field (kshetrajna), which include non-attachment to family, possessions, and the ability to maintain equanimity in favorable and unfavorable situations."
},
"13.11": {
    shloka: "मयि चानन्ययोगेन भक्तिरव्यभिचारिणी। विविक्तदेशसेवित्वमरतिर्जनसंसदि।।13.11।।",
    meaning: "Constant and unalloyed devotion to Me by the method of exclusive devotion (ananyayoga), residing in a solitary place, detachment from the general mass of people—",
    explanation: "Krishna describes the qualities of the kshetrajna as having unwavering and undivided devotion towards Him, following a contemplative lifestyle in solitude, and being uninterested in worldly gatherings."
},
"13.12": {
    shloka: "अध्यात्मज्ञाननित्यत्वं तत्वज्ञानार्थदर्शनम्। एतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा।।13.12।।",
    meaning: "Constant self-realization and the perception of the goal of self-realization, this is termed as knowledge, and anything contrary to this is ignorance.",
    explanation: "Krishna explains that true knowledge involves continual self-realization and insight into the ultimate purpose of life, whereas ignorance is characterized by a lack of such understanding."
},
"13.13": {
    shloka: "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वाऽमृतमश्नुते। अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते।।13.13।।",
    meaning: "I shall now explain to you that which ought to be known, and by knowing which, one attains immortality. It is the supreme eternal Brahman, beginningless, and transcendental to the modes of material nature.",
    explanation: "Krishna begins to reveal the knowledge that leads to immortality, which is the understanding of the supreme eternal reality (Brahman), beyond the material nature and its transformations."
},
"13.14": {
    shloka: "सर्वत: पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम्। सर्वत: श्रुतिमल्लोके सर्वमावृत्य तिष्ठति।।13.14।।",
    meaning: "Everywhere are His hands and feet, His eyes, heads, and faces, and He has ears everywhere. In this way, the Supersoul exists, pervading everything in this world.",
    explanation: "Krishna describes the omnipresence of the Supersoul (Paramatma), who possesses hands, feet, eyes, heads, and faces everywhere, and whose ears are present throughout the universe. The Supersoul pervades and sustains all things."
},
"13.15": {
    shloka: "सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम्। असक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च।।13.15।।",
    meaning: "The Supersoul is the source of light in all the senses, but He is beyond the senses. He is detached from all material qualities, yet He controls them. He is the enjoyer of all the qualities.",
    explanation: "Krishna explains the nature of the Supersoul (Paramatma) as the illuminator and source of consciousness for all the senses, yet He transcends the material qualities and remains detached from them. The Supersoul is the ultimate enjoyer and controller of all material qualities."
},
"13.16": {
    shloka: "बहिरन्तश्च भूतानामचरं चरमेव च। सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत्।।13.16।।",
    meaning: "He exists outside and inside all living beings, the moving and the nonmoving. He is beyond the power of the material senses to see or to know. Although far, far away, He is also near to all.",
    explanation: "Krishna describes the omnipresence and subtlety of the Supersoul (Paramatma), who exists both within and without every living being, encompassing all moving and non-moving entities. Although beyond material perception, the Supersoul is also immanent and close to all beings."
},
"13.17": {
    shloka: "अविभक्तं च भूतेषु विभक्तमिव च स्थितम्। भूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च।।13.17।।",
    meaning: "Although the Supersoul appears to be divided among all beings, He is actually undivided. He is situated as though divided, but He is always situated as one. He is the maintainer of all living entities, and He is the supreme cause of creation.",
    explanation: "Krishna explains that although the Supersoul (Paramatma) appears to be distributed among all beings, in truth, He remains undivided. Despite appearing divided, He remains singular and unified, sustaining all beings as their maintainer and the ultimate source of creation."
},
"13.18": {
    shloka: "ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते। ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम्।।13.18।।",
    meaning: "He is the source of light in all luminous objects. He is beyond the darkness of matter and is unmanifested. He is knowledge, He is the object of knowledge, and He is the goal of knowledge. He is situated in everyone’s heart.",
    explanation: "Krishna describes the Supersoul (Paramatma) as the illuminator of all luminous objects, beyond the darkness of ignorance, unmanifested, the essence of knowledge, the object of true understanding, and the ultimate goal of knowledge. The Supersoul resides within the heart of every living being."
},
"13.19": {
    shloka: "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन। निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान्।।13.19।।",
    meaning: "The Vedas mainly deal with the subject of the three modes of material nature. Become transcendental to these three modes, O Arjuna. Be free from dualities and from all anxieties for gain and safety, and be established in the self.",
    explanation: "Krishna advises Arjuna to transcend the influence of the three modes of material nature (sattva, rajas, tamas) described in the Vedas, and to rise above dualities and worldly concerns, establishing oneself in the true nature of the self."
},
"13.20": {
    shloka: "कामक्रोधवियुक्तानां यतीनां यतचेतसाम्। अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम्।।13.20।।",
    meaning: "Those who are free from anger and material desires, who are self-realized, self-disciplined, constantly endeavoring for perfection, are assured of liberation in the Supreme in the very near future.",
    explanation: "Krishna explains that those who are devoid of material desires and anger, possess self-realization, self-discipline, and steadfastly pursue spiritual perfection, are destined for liberation and attainment of the Supreme."
},
"13.21": {
    shloka: "बहिर्ज्योतिष्कबोध्यात्मा ज्योतिष्कृत्कामकारता। यदा ज्ञायति तत्त्वार्थं मन्यते तदितरं ज्ञानम्।।13.21।।",
    meaning: "Having awakened to the understanding of the soul’s effulgence by the soul itself and becoming free from attachment to the modes of material nature, one realizes the Supreme Absolute Truth and never again falls into illusion.",
    explanation: "Krishna explains that when one perceives the soul’s luminous nature by the soul itself, and becomes detached from material desires, they realize the ultimate truth and attain transcendental knowledge, never falling back into delusion."
},
"13.22": {
    shloka: "पुरुष: प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान्। कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु।।13.22।।",
    meaning: "The living entity in material nature thus follows the ways of life, enjoying the three modes of nature. This is due to association with the material nature. Thus he meets with good and evil among various species.",
    explanation: "Krishna explains that the living entity, situated in material nature, experiences the influences of the three modes (sattva, rajas, tamas) according to their association with material nature, resulting in different types of births and experiences in various species."
},
"13.23": {
    shloka: "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वर:। परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुष: पर:।।13.23।।",
    meaning: "Yet in this body there is another, a transcendental enjoyer, who is the Lord, the supreme proprietor, who exists as the overseer and permitter, and who is known as the Supersoul.",
    explanation: "Krishna reveals the presence of the Supersoul (Paramatma) within the body as the witness, permitter, and supreme controller, distinct from the individual soul (jivatma), who is the enjoyer within the material body."
},
"13.24": {
    shloka: "य एवं वेत्ति पुरुषं प्रकृतिं च गुणै: सह। सर्वथा वर्तमानोऽपि न स भूयोऽभिजायते।।13.24।।",
    meaning: "One who understands this relationship between the soul, the material nature, and the modes of nature, is no longer born ignorant, even though engaged in all types of activities.",
    explanation: "Krishna explains that those who understand the relationship between the soul, material nature, and the modes of nature, are no longer subject to rebirth, even while engaged in various worldly activities."
},
"13.25": {
    shloka: "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना। अन्ये साङ्‍गेन ज्ञानेन यजन्ते नान्यदेवता:।।13.25।।",
    meaning: "Some perceive the Supersoul within themselves through meditation, others through the cultivation of knowledge, and still others through working without fruitive desires.",
    explanation: "Krishna describes different paths by which individuals realize the Supersoul within: through meditation, cultivation of knowledge, or selfless service without attachment to rewards."
},
"13.26": {
    shloka: "अन्ये त्वेवमजानन्त: श्रुत्वाऽन्येभ्य उपासते। तेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणा:।।13.26।।",
    meaning: "Yet others, who are inclined to the process of hearing, faithfully worship the Supreme Lord as the one dwelling within all beings. Such persons quickly surpass the cycle of birth and death.",
    explanation: "Krishna explains that those who focus on hearing about the Supreme Lord and sincerely worship Him residing within all beings, transcend the cycle of birth and death swiftly."
},
"13.27": {
    shloka: "यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम्। क्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ।।13.27।।",
    meaning: "O chief of the Bharatas, whatever is there, both moving and nonmoving, is due to the union of the field (the body) and the knower of the field (the soul), and that is my opinion.",
    explanation: "Krishna states that the existence of all living and non-living entities results from the interaction between the body (kshetra) and the soul (kshetrajna), and this is His understanding."
},
"13.28": {
    shloka: "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्। विनश्यत्स्वविनश्यन्तं य: पश्यति स पश्यति।।13.28।।",
    meaning: "One who sees the Supersoul accompanying the individual soul in all bodies, and who understands that neither the soul nor the Supersoul within the destructible body is ever destroyed, actually sees.",
    explanation: "Krishna explains that those who perceive the Supersoul (Paramatma) present alongside individual souls within all bodies understand that neither the soul nor the Supersoul is ever destroyed, even when the body perishes."
},
"13.29": {
    shloka: "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम्। न हिनस्त्यात्मनात्मानं ततो याति परां गतिम्।।13.29।।",
    meaning: "One who sees the Supersoul equally present everywhere, in every living being, does not degrade himself by his mind. Thus he approaches the transcendental destination.",
    explanation: "Krishna states that those who perceive the Supersoul (Paramatma) to be equally present in all living entities do not harm themselves by the mind, and they progress towards the supreme destination."
},
"13.30": {
    shloka: "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वश:। य: पश्यति तथात्मानमकर्तारं स पश्यति।।13.30।।",
    meaning: "One who can see that all activities are performed by the material nature, and thus sees that the self does nothing, actually sees.",
    explanation: "Krishna explains that those who perceive all actions being performed by material nature and understand that the true self is inactive in these actions, truly see and comprehend the nature of the self."
},
"13.31": {
    shloka: "यदा भूतपृथग्भावमेकस्थमनुपश्यति। तत एव च विस्तारं ब्रह्म सम्पद्यते तदा।।13.31।।",
    meaning: "When a sensible man ceases to see different identities due to different material bodies and he sees how beings are expanded everywhere, he attains to the Brahman conception.",
    explanation: "Krishna describes that a wise person, seeing beyond the external diversity of material forms, perceives the underlying unity of Brahman, and thus attains realization of the ultimate spiritual reality."
},
"13.32": {
    shloka: "अनादित्वान्निर्गुणत्वात्परमात्मायमव्यय:। शरीरस्थोऽपि कौन्तेय न करोति न लिप्यते।।13.32।।",
    meaning: "Those who understand the nature of the Supreme Brahman to be unborn and transcendental to the modes of material nature, even though situated in the body, O Arjuna, neither take birth nor are they affected by the reactions of the material energy.",
    explanation: "Krishna explains that those who realize the eternal nature of the Supreme (Paramatma), unborn and beyond material qualities, remain unaffected by material existence and its reactions, even while dwelling within a physical body."
},
"13.33": {
    shloka: "यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते। सर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते।।13.33।।",
    meaning: "As the all-pervading ether is not tainted because of its subtle nature, similarly, the soul situated within the body is not tainted.",
    explanation: "Krishna compares the soul's inherent purity and transcendental nature to the untainted nature of all-pervading ether. The soul, though situated within the body, remains unaffected by material contamination."
},
"13.34": {
    shloka: "यथा प्रकाशयत्येक: कृत्स्नं लोकमिमं रवि:। क्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत।।13.34।।",
    meaning: "Just as the one sun illuminates the entire world, O Arjuna, so does the soul, the Lord of the body, illuminate the entire body.",
    explanation: "Krishna uses the analogy of the sun illuminating the world to illustrate how the soul, as the master of the body (kshetrajna), enlightens the entire physical form."
},
"13.35": {
    shloka: "क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा। भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम्।।13.35।।",
    meaning: "By understanding the difference between the field and its knower, and by knowledge of the individual soul (kshetrajna) and the Supreme Soul (Paramatma), one attains liberation from material nature and achieves the supreme destination.",
    explanation: "Krishna concludes that those who understand the distinction between the material body (kshetra) and the soul (kshetrajna), along with knowledge of the individual soul and the Supreme Soul, attain liberation from material bondage and reach the ultimate spiritual destination."
},
"14.1": {
    shloka: "श्रीभगवानुवाच | परं भूय: प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम्। यज्ज्ञात्वा मुनय: सर्वे परां सिद्धिमितो गता:।।14.1।।",
    meaning: "The Supreme Personality of Godhead said: Again I shall declare to you this supreme wisdom, the best of all knowledge, knowing which all the sages have attained to supreme perfection.",
    explanation: "Lord Krishna begins to explain the science of self-realization (knowledge of the modes of material nature) to Arjuna, emphasizing its importance as the highest wisdom leading to ultimate perfection."
},
"14.2": {
    shloka: "इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागता:। सर्गे पिये निवर्तन्ते प्रलये न व्यतन्ति च।।14.2।।",
    meaning: "By becoming fixed in this knowledge, one can attain to the transcendental nature like My own. Thus established, one is not born at the time of creation or disturbed at the time of dissolution.",
    explanation: "Through the understanding of these principles, one transcends the cycle of birth and death, attaining a state beyond material nature, unaffected by the processes of creation and dissolution."
},
"14.3": {
    shloka: "मम योनिर्महद् ब्रह्म तस्मिन्गर्भं दधाम्यहम्। सम्भव: सर्वभूतानां ततो भवति भारत।।14.3।।",
    meaning: "The total material substance, called Brahman, is the source of birth, and it is that Brahman that I impregnate, making possible the births of all living beings, O son of Bharata.",
    explanation: "Lord Krishna explains His role as the source of creation, impregnating the material substance (prakriti or Brahman), from which all living beings manifest during the process of creation."
},
"14.4": {
    shloka: "सर्वयोनिषु कौन्तेय मूर्तय: सम्भवन्ति या:। तासां ब्रह्म महद्योनिरहं बीजप्रद: पिता।।14.4।।",
    meaning: "It should be understood that all species of life, O son of Kunti, are made possible by birth in this material nature, and that I am the seed-giving father.",
    explanation: "Krishna clarifies that He is the origin and father of all species of life, as the seed-giving source from which all living beings are born within material nature."
},
"14.5": {
    shloka: "सत्त्वं रजस्तम इति गुणा: प्रकृतिसंभवा:। निबध्नन्ति महाबाहो देहे देहिनमव्ययम्।।14.5।।",
    meaning: "Material nature consists of three modes—goodness (sattva), passion (rajas), and ignorance (tamas). These modes bind the eternal soul to the perishable body, O mighty-armed Arjuna.",
    explanation: "Lord Krishna explains that the three modes of material nature (sattva, rajas, tamas) influence the eternal soul, binding it to the temporary physical body, causing identification with material existence."
},
"14.6": {
    shloka: "तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्। सुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ।।14.6।।",
    meaning: "O sinless one, the mode of goodness, being purer than the others, is illuminating, and it frees one from sinful reactions. Those situated in this mode become conditioned by a sense of happiness and knowledge.",
    explanation: "The mode of goodness (sattva) is characterized by purity, illumination, and freedom from sinful reactions. Individuals in this mode are conditioned by happiness and the pursuit of knowledge."
},
"14.7": {
    shloka: "रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम्। तन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम्।।14.7।।",
    meaning: "The mode of passion (rajas) is born of unlimited desires and longings, and it binds the soul, O Arjuna, by attachment to the results of activities.",
    explanation: "The mode of passion (rajas) arises from intense desires and attachments, binding the soul through the strong inclination towards the fruits of actions."
},
"14.8": {
    shloka: "तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम्। प्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत।।14.8।।",
    meaning: "O son of Bharata, know that the mode of darkness (tamas), born of ignorance, is the delusion of all embodied living entities. It binds them by misidentification, laziness, and sleep.",
    explanation: "The mode of ignorance (tamas) arises from ignorance and delusion, causing a misidentification of the self with the body. It binds individuals through negligence, laziness, and excessive sleep."
},
"14.9": {
    shloka: "सत्त्वं सुखे सञ्जयति रज: कर्मणि भारत। ज्ञानमावृत्य तु तम: प्रमादे सञ्जयत्युत।।14.9।।",
    meaning: "O Arjuna, the mode of goodness conditions one to happiness; passion conditions one to fruitive actions; and ignorance, covering one's knowledge, binds one to madness.",
    explanation: "Krishna explains how the modes of material nature condition individuals differently: goodness leads to happiness, passion leads to activity and desires, and ignorance obscures knowledge, resulting in madness and negligence."
},
"14.10": {
    shloka: "रजस्तमश्चाभिभूय सत्त्वं भवति भारत। रज: सत्त्वं तमश्चैव तम: सत्त्वं रजस्तथा।।14.10।।",
    meaning: "Sometimes the mode of passion (rajas) becomes prominent, defeating goodness and ignorance. At other times, goodness defeats passion and ignorance, and at another time, ignorance defeats goodness and passion, O Arjuna.",
    explanation: "Krishna describes the fluctuations of the modes of nature, how one mode may dominate over the others at different times, influencing one's behavior and experiences."
},
"14.11": {
    shloka: "सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते। ज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत।।14.11।।",
    meaning: "When there is an increase in the mode of goodness (sattva) in the body, there is illumination. At that time, one can perceive the self, the soul, in every body.",
    explanation: "As the mode of goodness increases within the body, spiritual illumination arises, enabling one to perceive the soul within every living being."
},
"14.12": {
    shloka: "लोभ: प्रवृत्तिरारम्भ: कर्मणामशम: स्पृहा। रजस्येतानि जायन्ते विवृद्धे भरतर्षभ।।14.12।।",
    meaning: "O chief of the Bharatas, when there is an increase in the mode of passion (rajas), the symptoms of great attachment, uncontrollable desire, hankering, and intense endeavor develop.",
    explanation: "Krishna describes the characteristics of increased passion (rajas), including strong attachment, insatiable desires, and intense worldly efforts, leading to increased material activities."
},
"14.13": {
    shloka: "अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च। तमस्येतानि जायन्ते विवृद्धे कुरुनन्दन।।14.13।।",
    meaning: "O Arjuna, when there is an increase in the mode of ignorance (tamas), the symptoms of darkness, inertia, foolishness, and madness develop.",
    explanation: "Krishna explains the signs of increased ignorance (tamas), such as spiritual darkness, lethargy, confusion, and delusion, which lead to ignorance and degradation."
},
"14.14": {
    shloka: "यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत्। तदोत्तमविदां लोकानमलान्प्रतिपद्यते।।14.14।।",
    meaning: "When one dies in the mode of goodness (sattva), he attains the pure higher planets of the great sages.",
    explanation: "Krishna explains that those who pass away while situated in the mode of goodness (sattva) attain the celestial realms inhabited by the wise and virtuous."
},
"14.15": {
    shloka: "रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते। तथा प्रलीनस्तमसि मूढयोनिषु जायते।।14.15।।",
    meaning: "Those who die in the mode of passion (rajas) are born among those attached to actions; and those who die in the mode of ignorance (tamas) are born in the wombs of the ignorant.",
    explanation: "Krishna explains the destinations after death based on the modes of nature: those who die in passion (rajas) are reborn among those driven by material desires, and those who die in ignorance (tamas) are reborn in the wombs of the foolish."
},
"14.16": {
    shloka: "कर्मण: सुकृतस्याहु: सात्त्विकं निर्मलं फलम्। रजसस्तु फलं दु:खमज्ञानम् तमस: फलम्।।14.16।।",
    meaning: "The result of good action is pure and is said to be in the mode of goodness (sattva). But action performed in the mode of passion (rajas) results in misery, and action performed in the mode of ignorance (tamas) results in foolishness.",
    explanation: "Krishna explains the outcomes of actions based on the modes of nature: actions in goodness (sattva) lead to purity and spiritual progress, actions in passion (rajas) result in suffering, and actions in ignorance (tamas) lead to delusion and ignorance."
},
"14.17": {
    shloka: "सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च। प्रमादमोहौ तमसो भवतोऽज्ञानमेव च।।14.17।।",
    meaning: "From the mode of goodness (sattva), knowledge develops; from the mode of passion (rajas), greed develops; and from the mode of ignorance (tamas), foolishness, madness, and illusion develop.",
    explanation: "Krishna explains the consequences of the modes of nature on the development of human traits and characteristics: goodness promotes wisdom, passion leads to greed, and ignorance causes delusion and foolishness."
},
"14.18": {
    shloka: "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसा:। जघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसा:।।14.18।।",
    meaning: "Those situated in the mode of goodness gradually go upward to the higher planets; those in the mode of passion live on the earthly planets; and those in the abominable mode of ignorance go down to the hellish worlds.",
    explanation: "Krishna describes the destinations of individuals influenced by the modes of nature: those in goodness ascend to higher realms, those in passion remain on earthly planes, and those in ignorance descend to lower, suffering states."
},
"14.19": {
    shloka: "नान्यं गुणेभ्य: कर्तारं यदा द्रष्टानुपश्यति। गुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति।।14.19।।",
    meaning: "When one properly sees that in all activities no other performer is at work than these modes of nature and he knows the Supreme Lord, who is transcendental to all these modes, he attains My spiritual nature.",
    explanation: "Krishna explains that those who perceive the influence of the modes of nature in all actions and understand the supremacy of the Supreme Lord beyond these modes attain His divine nature."
},
"14.20": {
    shloka: "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान्। जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते।।14.20।।",
    meaning: "When the embodied being transcends these three modes associated with the body (sattva, rajas, tamas), they become free from birth, death, old age, and their associated sufferings, and attain the nectar of immortality.",
    explanation: "Krishna explains that by transcending the influence of the three modes of material nature (goodness, passion, ignorance), one is liberated from the cycle of birth, death, and suffering, and attains eternal spiritual existence."
},
"14.21": {
    shloka: "अर्जुन उवाच | कैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो। किमाचार: कथं चैतांस्त्रीन्गुणानतिवर्तते।।14.21।।",
    meaning: "Arjuna inquired: O Lord, by what signs is one who has transcended these three modes recognized? How does one behave, and how does one transcend these modes?",
    explanation: "Arjuna asks Krishna how a person who has transcended the three modes of material nature can be recognized, and how one can act to surpass these modes."
},
"14.22": {
    shloka: "श्रीभगवानुवाच | प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव। न द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति।।14.22।।",
    meaning: "The Supreme Personality of Godhead said: O Arjuna, one who does not hate illumination, activity, and delusion when they are present, nor longs for them when they are absent, who remains undisturbed and detached, such a person transcends the modes of material nature.",
    explanation: "Krishna explains that a person who remains equanimous and unaffected by the presence or absence of the modes of nature—illumination (sattva), activity (rajas), and delusion (tamas)—transcends these modes."
},
"14.23": {
    shloka: "उदासीनवदासीनो गुणैर्यो न विचाल्यते। गुणावर्तन्त इत्येव योऽवतिष्ठति नेङ्गते।।14.23।।",
    meaning: "He who remains neutral and does not get disturbed by the modes of material nature, who is steady in both pleasure and pain, and remains undisturbed by these dualities, such a person truly transcends the modes of nature.",
    explanation: "Krishna explains that a person who remains unaffected and balanced amid the dualities of material nature—pleasure and pain, success and failure—truly rises above the influence of the modes of nature."
},
"14.24": {
    shloka: "समदु:खसुख: स्वस्थ: समलोष्टाश्मकाञ्चन:। तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुति:।।14.24।।",
    meaning: "He who is alike in pleasure and pain, who is free from attachment to external objects, who is balanced in success and failure, and is undisturbed by praise or blame, is considered wise.",
    explanation: "Krishna describes the characteristics of a wise person who remains unaffected by external circumstances and dualities, being steady and equipoised in pleasure and pain, gain and loss, and unaffected by praise or criticism."
},
"14.25": {
    shloka: "मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयो:। सर्वारम्भपरित्यागी गुणातीत: स उच्यते।।14.25।।",
    meaning: "He who treats alike both honor and dishonor, who treats alike friend and foe, and who has renounced all endeavors—such a person transcends the modes of nature.",
    explanation: "Krishna explains that one who remains impartial to honor and dishonor, friend and foe, and renounces all selfish endeavors transcends the influence of the modes of material nature."
},
"14.26": {
    shloka: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते। स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते।।14.26।।",
    meaning: "And one who engages in unflinching devotional service to Me, transcending these modes of material nature, becomes completely established in the transcendence of Brahman.",
    explanation: "Krishna declares that through unwavering devotional service (bhakti-yoga) to Him, one transcends the modes of material nature and attains the ultimate realization of Brahman."
},
"14.27": {
    shloka: "ब्रह्मणो हि प्रतिष्ठाहं अमृतस्याव्ययस्य च। शाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च।।14.27।।",
    meaning: "For I am the foundation of the eternal, imperishable Brahman, of everlasting Dharma, and of the unending bliss.",
    explanation: "Krishna reveals Himself as the basis of the eternal, indestructible Brahman, of eternal righteousness (Dharma), and of uninterrupted happiness."
},
"15.1": {
    shloka: "श्रीभगवानुवाच | ऊर्ध्वमूलमध:शाखमश्वत्थं प्राहुरव्ययम्। छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्।।15.1।।",
    meaning: "The Supreme Personality of Godhead said: It is said that there is an imperishable banyan tree that has its roots upward and its branches down and whose leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.",
    explanation: "Krishna begins by describing the cosmic banyan tree, symbolizing the material world with its roots upward and branches downward. The leaves represent the Vedic hymns, and one who understands this tree comprehends the essence of the Vedas."
},
"15.2": {
    shloka: "अधश्चोर्ध्वं प्रसृतास्तस्य शाखा गुणप्रवृद्धा विषयप्रवाला:। अधश्च मूलान्यनुसन्ततानि कर्मानुबन्धीनि मनुष्यलोके।।15.2।।",
    meaning: "The branches of this tree extend downward and upward, nourished by the three modes of material nature. The twigs are the objects of the senses. This tree also has roots going down, and these are bound to the fruitive actions of human society.",
    explanation: "Krishna elaborates on the tree's branches (material existence), nourished by the three modes of nature (goodness, passion, ignorance). The sensory objects are like twigs, and the roots represent the binding actions (karma) of human society."
},
"15.3": {
    shloka: "न रूपमस्येह तथोपलभ्यते नान्तो न चादिर्न च संप्रतिष्ठा। अश्वत्थमेनं सुविरूढमूलं असङ्गशस्त्रेण दृढेन छित्त्वा।।15.3।।",
    meaning: "The real form of this tree cannot be perceived in this world. No one can understand where it ends, where it begins, or where its foundation is. But with determination one must cut down this strongly rooted tree with the weapon of detachment.",
    explanation: "Krishna explains the challenge of understanding the tree's true nature and advises cutting it down with the weapon of detachment, striving for liberation from material existence."
},
"15.4": {
    shloka: "तत: पदं तत्परिमार्गितव्यं यस्मिन्गता न निवर्तन्ति भूय:। तमेव चाद्यं पुरुषं प्रपद्ये यत: प्रवृत्ति: प्रसृता पुराणी।।15.4।।",
    meaning: "Having reached that divine abode from which there is no return, one never again suffers the cycle of birth and death. Surrendering to that Supreme Personality from whom everything began and from whom all energies are extended, one attains eternal peace.",
    explanation: "Krishna explains that by reaching the supreme abode (God's realm), one escapes the cycle of reincarnation and attains eternal peace by surrendering to the origin of all existence."
},
"15.5": {
    shloka: "निर्मानमोहा जितसङ्गदोषा अध्यात्मनित्या विनिवृत्तकामा:। द्वन्द्वैर्विमुक्ता: सुखदु:खसंज्ञैर्गच्छन्त्यमूढा: पदमव्ययं तत्।।15.5।।",
    meaning: "Those who are free from false prestige, illusion, and false association, who understand the eternal, who are done with material lust, who are free from the dualities of happiness and distress, and who, unbewildered, know how to surrender unto the Supreme Person attain that eternal kingdom.",
    explanation: "Krishna describes the qualities of those who attain the eternal realm—free from delusion, material desires, and dualities, and capable of surrendering to the Supreme."
},
"15.6": {
    shloka: "न तद्भासयते सूर्यो न शशाङ्को न पावक:। यद्गत्वा न निवर्तन्ते तद्धाम परमं मम।।15.6।।",
    meaning: "That supreme abode of Mine is not illumined by the sun, moon, or fire. Those who reach it never return to this material world.",
    explanation: "Krishna reveals that His divine abode is beyond the reach of material illumination and those who attain it are never again subject to worldly existence."
},
"15.7": {
    shloka: "ममैवांशो जीवलोके जीवभूत: सनातन:। मन:ष्षष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति।।15.7।।",
    meaning: "The living entities in this conditioned world are My eternal, fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.",
    explanation: "Krishna explains that all living beings are eternal parts of Him, struggling in the material world with their senses and mind, entangled in conditioned existence."
},
"15.8": {
    shloka: "शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वर:। गृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात्।।15.8।।",
    meaning: "The living entity in the material world carries his different conceptions of life from one body to another, as the air carries aromas. Thus, he takes one kind of body and again quits it to take another.",
    explanation: "Krishna illustrates the transmigration of the soul, which carries its inclinations and experiences from one body to another, similar to how the air carries scents."
},
"15.9": {
    shloka: "श्रोत्रं चक्षु: स्पर्शनं च रसनं घ्राणमेव च। अधिष्ठाय मनश्चायं विषयानुपसेवते।।15.9।।",
    meaning: "The soul situated in the material body enjoys the sense objects by the mind and the senses—ears, eyes, skin, tongue, and nose—which are places of sense enjoyment.",
    explanation: "Krishna explains how the soul in a material body experiences sensory pleasures through the mind and senses—ears, eyes, skin, tongue, and nose."
},
"15.10": {
    shloka: "उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम्। विमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुष:।।15.10।।",
    meaning: "The foolish cannot understand how a living entity can quit his body, nor can they understand what sort of body he enjoys under the spell of the modes of nature. But one whose eyes are trained in knowledge can see all this.",
    explanation: "Krishna remarks that the ignorant fail to comprehend the soul's departure from the body or the nature of the bodies it assumes under the influence of the modes of nature, whereas those with spiritual insight can perceive these truths."
},
"15.11": {
    shloka: "यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम्। यतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतस:।।15.11।।",
    meaning: "The endeavoring transcendentalists who are situated in self-realization can see all this clearly. But those whose minds are not developed and who are not endeavoring cannot see what is taking place, though they may try.",
    explanation: "Krishna describes how sincere seekers in self-realization can perceive these truths, whereas those lacking in spiritual cultivation and endeavor remain oblivious."
},
"15.12": {
    shloka: "यदादित्यगतं तेजो जगद्भासयतेऽखिलम्। यच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम्।।15.12।।",
    meaning: "Know that all light emanating from the sun illumines the entire cosmos, and the light within the moon and fire also comes from Me.",
    explanation: "Krishna reveals that the illuminating power of the sun, moon, and fire all originate from Him, the supreme source of light."
},
"15.13": {
    shloka: "गामाविश्य च भूतानि धारयाम्यहमोजसा। पुष्णामि चौषधी: सर्वा: सोमो भूत्वा रसात्मक:।।15.13।।",
    meaning: "Entering into earth, I support all living beings with My energy, and becoming the moon, I nourish all plants with their juice.",
    explanation: "Krishna explains how He sustains all living entities through His energies—entering into the earth to support life and manifesting as the moon to nourish plants with their essence."
},
"15.14": {
    shloka: "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रित:। प्राणापानसमायुक्त: पचाम्यन्नं चतुर्विधम्।।15.14।।",
    meaning: "Becoming the fire of digestion in the bodies of all living entities, I combine with the incoming and outgoing airs to digest the four kinds of foodstuff.",
    explanation: "Krishna describes how He functions as the digestive fire within all living beings, aiding in the digestion of various types of food through the combination of air (prana and apana)."
},
"15.15": {
    shloka: "सर्वस्य चाहं हृदि सन्निविष्टो मत्त: स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्।।15.15।।",
    meaning: "And I am seated in the hearts of all. From Me come knowledge, remembrance, and forgetfulness. By all the Vedas am I to be known; indeed, I am the compiler of Vedanta, and I am the knower of the Vedas.",
    explanation: "Krishna reveals His presence in everyone's heart, bestowing knowledge, memory, and forgetfulness. He asserts that He is to be known through the Vedas, particularly as the compiler of Vedanta and the ultimate knower of Vedic wisdom."
},
"15.16": {
    shloka: "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च। क्षर: सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते।।15.16।।",
    meaning: "There are two types of beings in the world: the fallible (kshara) and the infallible (akshara). The material entities are fallible, and the spiritual entity is called the infallible.",
    explanation: "Krishna distinguishes between two categories of entities—mutable (subject to change) and immutable (eternal). Material beings are subject to change, while the soul (spiritual entity) is eternal and unchanging."
},
"15.17": {
    shloka: "उत्तम: पुरुषस्त्वन्य: परमात्मेत्युदाहृत:। यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वर:।।15.17।।",
    meaning: "Besides these two, there is the greatest living personality, the Supreme Soul, the imperishable Lord Himself, who has entered the three worlds and is maintaining them.",
    explanation: "Krishna identifies the Supreme Personality, the Supreme Soul (Paramatma), as distinct from both the fallible and infallible entities, sustaining the three worlds as the eternal, imperishable Lord."
},
"15.18": {
    shloka: "यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तम:। अतोऽस्मि लोके वेदे च प्रथित: पुरुषोत्तम:।।15.18।।",
    meaning: "Because I transcend the fallible and am even greater than the infallible, I am celebrated both in the world and in the Vedas as the Supreme Person.",
    explanation: "Krishna proclaims His supremacy as the transcendent being beyond both the mutable and immutable, extolled as the Supreme Personality in the world and the Vedic scriptures."
},
"15.19": {
    shloka: "यो मामेवमसम्मूढो जानाति पुरुषोत्तमम्। स सर्वविद्भजति मां सर्वभावेन भारत।।15.19।।",
    meaning: "Whoever knows Me as the Supreme Personality, without doubting, is the knower of everything. He therefore engages himself in full devotional service to Me, O Arjuna.",
    explanation: "Krishna states that one who understands Him as the Supreme Personality without doubt becomes omniscient and wholeheartedly engages in devotional service to Him."
},
"15.20": {
    shloka: "इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ। एतद्बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत।।15.20।।",
    meaning: "This is the most confidential knowledge. I have revealed this to you, O sinless one. Having understood this, one becomes enlightened and achieves all auspiciousness. This is the path of self-realization, and it is everlasting, joyfully performed.",
    explanation: "Krishna concludes the chapter by emphasizing the supreme knowledge He has imparted to Arjuna, stating that one who comprehends it becomes wise, fulfilled, and blessed, attaining the path of self-realization."
},
"16.1": {
    shloka: "श्रीभगवानुवाच | अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थिति:। दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्।।16.1।।",
    meaning: "The Supreme Personality of Godhead said: Fearlessness, purification of one’s existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice, study of the Vedas, austerity, and straightforwardness; nonviolence, truthfulness, absence of anger, renunciation, tranquility, aversion to faultfinding, compassion for all living entities, freedom from covetousness, gentleness, modesty, and steady determination; vigor, forgiveness, fortitude, cleanliness, freedom from envy and the passion for honor—these transcendental qualities, O son of Bharata, belong to godly men endowed with divine nature.",
    explanation: "In this verse, Lord Krishna enumerates divine qualities that belong to those situated in the mode of goodness (sattva), including fearlessness, purity, spiritual knowledge, charity, self-control, and various moral virtues."
},
"16.2": {
    shloka: "अहिंसा सत्यमक्रोध: त्याग: शान्तिरपैशुनम्। दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्।।16.2।।",
    meaning: "Nonviolence, truthfulness, absence of anger, renunciation, tranquility, aversion to faultfinding, compassion for all living entities, freedom from covetousness, gentleness, modesty, and steady determination; vigor, forgiveness, fortitude, cleanliness, freedom from envy and the passion for honor—these transcendental qualities, O son of Bharata, belong to godly men endowed with divine nature.",
    explanation: "Krishna continues to describe divine qualities, emphasizing traits like nonviolence, truthfulness, absence of anger, renunciation, compassion, humility, forgiveness, fortitude, cleanliness, and freedom from envy."
},
"16.3": {
    shloka: "तेज: क्षमा धृतिः शौचमद्रोहो नातिमानिता। भवन्ति सम्पदं दैवीमभिजातस्य भारत।।16.3।।",
    meaning: "Vigor, forgiveness, fortitude, cleanliness, freedom from envy and the passion for honor—these transcendental qualities, O son of Bharata, belong to godly men endowed with divine nature.",
    explanation: "Krishna underscores the virtues of strength, forgiveness, endurance, cleanliness, absence of malice, humility, and lack of egoistic pride as divine attributes characteristic of those born with divine qualities."
},
"16.4": {
    shloka: "दम्भो दर्पोऽभिमानश्च क्रोध: पारुष्यमेव च। अज्ञानं चाभिजातस्य पार्थ सम्पदामासुरीम्।।16.4।।",
    meaning: "Pride, arrogance, conceit, anger, harshness, and ignorance—these qualities belong to those of demoniac nature, O Partha.",
    explanation: "Krishna contrasts the divine qualities with demonic traits like pride, arrogance, conceit, anger, harshness, and ignorance, indicating that these are characteristics of those with demoniac tendencies."
},
"16.5": {
    shloka: "दैवी सम्पद्विमोक्षायै निबन्धायासुरी मता। मा शुच: सम्पदं दैवीमभिजातोऽसि पाण्डव।।16.5।।",
    meaning: "The divine qualities lead to liberation, whereas the demoniac qualities lead to bondage. Do not grieve, O Arjuna; you were born with divine qualities.",
    explanation: "Krishna explains that divine qualities lead to liberation, while demoniac qualities lead to bondage. He reassures Arjuna that he possesses divine qualities, encouraging him not to be distressed."
},
"16.6": {
    shloka: "द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च। विद्धि आसुरं पराप्रकृतिं च मोहिनीम्।।16.6।।",
    meaning: "O son of Pritha, in this world there are two kinds of created beings. One is called the divine and the other demoniac. I have already explained to you at length the divine qualities. Now hear from Me of the demoniac.",
    explanation: "Krishna categorizes beings into divine and demoniac types, elaborating on their characteristics and tendencies. He prepares to delineate the qualities of the demoniac for Arjuna's understanding."
},
"16.7": {
    shloka: "प्रवृत्तिं च निवृत्तिं च जना न विदुरासुरा:। न शौचं नापि चाचारो न सत्यं तेषु विद्यते।।16.7।।",
    meaning: "Those who are demoniac do not know what is to be done and what is not to be done. Neither cleanliness nor proper behavior nor truth is found in them.",
    explanation: "Krishna describes the ignorance and lack of discernment among demoniac individuals, who are devoid of righteousness, cleanliness, proper conduct, and truthfulness."
},
"16.8": {
    shloka: "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम्। अपरस्परसंभूतं किमन्यत्कामहैतुकम्।।16.8।।",
    meaning: "They say that this world is unreal, with no foundation, no God in control. They say it is produced of sex desire and has no cause other than lust.",
    explanation: "Krishna exposes the erroneous beliefs of the demoniac, who deny spiritual truths, dismiss the existence of God, and attribute creation solely to material desire."
},
"16.9": {
    shloka: "एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धय:। प्रभवन्त्युग्रकर्माण: क्षयाय जगतोऽहिता:।।16.9।।",
    meaning: "Following such views, these lost souls with small intelligence and cruel deeds arise, embracing destructive activities that cause harm to the world.",
    explanation: "Krishna laments the destructive actions of those with deluded views, lacking in understanding, who engage in harmful activities, leading to the decline and suffering of the world."
},
"16.10": {
    shloka: "काममाश्रित्य दुष्पूरं दम्भमानमदान्विता:। मोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रता:।।16.10।।",
    meaning: "Taking shelter of insatiable lust and absorbed in false pride and arrogance, possessed by delusion, they act with impure vows, and therefore, they engage in unbeneficial, horrible works meant to destroy the world.",
    explanation: "Krishna describes how those driven by insatiable desires, false pride, and delusion pursue impure goals, engaging in harmful activities that contribute to the world's degradation."
},
"16.11": {
    shloka: "चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिता:। कामोपभोगपरमा एतावदिति निश्चिता:।।16.11।।",
    meaning: "Taking refuge in endless anxieties and pleasures of the senses, convinced that the gratification of desires is the highest goal, they become ensnared in a net of delusion.",
    explanation: "Krishna reveals how the demoniac, immersed in relentless worries and sensory indulgence, mistakenly consider hedonism as the ultimate purpose of life, leading them deeper into illusion."
},
"16.12": {
    shloka: "आशा पाशशतैर्बद्धा: कामक्रोधपरायणा:। ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान्।।16.12।।",
    meaning: "Bound by hundreds of desires and absorbed in lust and anger, they strive to amass wealth by unjust means for the gratification of their senses.",
    explanation: "Krishna describes how those enslaved by countless desires, driven by lust and anger, resort to unlawful accumulation of wealth to indulge their senses."
},
"16.13": {
    shloka: "इदमद्य मया लब्धं इमं प्राप्स्ये मनोरथम्। इदमस्तीदमपि मे भविष्यति पुनर्धनम्।।16.13।।",
    meaning: "This wealth today is mine, and tomorrow it will be spent. All these are mine, and in the future I will have more. That enemy has been slain by me, and I will slay others too. I am the lord. I am the enjoyer. I am successful, powerful, and happy.",
    explanation: "Krishna depicts the delusional mindset of those driven by arrogance and greed, believing in their control over wealth and success, considering themselves the masters and enjoyers of life."
},
"16.14": {
    shloka: "असौ मया हतः शत्रुर्हनिष्ये चापरानपि। ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी।।16.14।।",
    meaning: "I shall kill the enemies, Arjuna, and I am also the one who enjoys and am capable. I am the powerful and happy one.",
    explanation: "In this verse, Krishna declares His supremacy over all, affirming His role as the ultimate wielder of power and enjoyer of everything, including victory over enemies."
},
"16.15": {
    shloka: "आत्मसंभाविता बुद्धिर्एका इह कुरुनन्दन। बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्।।16.15।।",
    meaning: "O Arjuna, the intelligence of those who are demoniac does not consider the eternal soul as the cause of material manifestation; neither do they consider the existence of various factors of determining success. Such intelligence is said to be driven by many branches and is endlessly diverse.",
    explanation: "Krishna describes the nature of demoniac intelligence, which is ignorant of the eternal soul's role in creation and fails to recognize the multifaceted factors influencing outcomes, exhibiting scattered and misguided understanding."
},
"16.16": {
    shloka: "तां त्वा कृत्स्नस्य वश्यानि यस्याहं मोहितो जना:। अपश्यत: सर्वे अर्थान्विद्धं स चेन्मां अप्रति।।16.16।।",
    meaning: "O Arjuna, those who are foolish and bewildered by the material energy are attracted to demoniac and atheistic views. In that deluded condition, their hopes for success are defeated, and they lose sight of the ultimate goal of life.",
    explanation: "Krishna explains how those deluded by material energy and misguided views become enslaved by demoniac ideologies, resulting in the loss of true purpose and direction in life."
},
"16.17": {
    shloka: "आत्मसंभाविता: स्तब्धा धनमानमदान्विता:। यजन्ते नामयज्ञैस्ते दम्भेनाविदिपूर्वकम्।।16.17।।",
    meaning: "They are self-conceited, stubborn, and arrogant, full of pride and false prestige. They perform ostentatious sacrifices without proper regard or understanding.",
    explanation: "Krishna describes the arrogance and pretentiousness of those who are self-centered, proud, and lacking in genuine humility, engaging in rituals for show rather than sincere devotion."
},
"16.18": {
    shloka: "अहङ्कारं बलं दर्पं कामं क्रोधं परिग्रहम्। विमुच्य निर्मम: शान्तो ब्रह्मभूयाय कल्पते।।16.18।।",
    meaning: "Being freed from egoism, power, arrogance, desire, anger, and possessiveness, with a peaceful mind, they are fit for attaining the state of Brahman.",
    explanation: "Krishna explains that those who renounce ego, power, arrogance, desire, anger, and possessiveness, achieving inner peace, become eligible for realization of the Supreme."
},
"16.19": {
    shloka: "तानहं द्विषतः क्रूरान्संसारेषु नराधमान्।क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु।।16.19।।",
    meaning: "Yet, those who are envious, cruel, sinful, and vile of mind, O Arjuna, they get born amongst the demoniacal species of life.",
    explanation: "Krishna reveals that those who are envious, malevolent, and immoral in nature are reborn into demoniac species, reflecting their degraded consciousness."
},
"16.20": {
    shloka: "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि। मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम्।।16.20।।",
    meaning: "Attaining repeated birth among the demoniac species, O son of Kunti, such persons can never reach Me. Gradually, they sink down to the most abominable type of existence.",
    explanation: "Krishna explains that those who acquire demoniac qualities are reborn among demoniac species and fail to attain Him, instead descending into increasingly degraded life forms."
},
"16.21": {
    shloka: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मन:। काम: क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्।।16.21।।",
    meaning: "There are three gates leading to the hellish worlds—lust, anger, and greed. Therefore, one must renounce these three.",
    explanation: "Krishna advises renouncing lust, anger, and greed as they lead to self-destruction and eventual entry into hellish existence."
},
"16.22": {
    shloka: "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नर:। आचरत्यात्मन: श्रेयस्ततो याति परां गतिम्।।16.22।।",
    meaning: "O son of Kunti, the person who has been released from these three gates to darkness—lust, anger, and greed—acts in the best interest of the self and thus attains the supreme destination.",
    explanation: "In this verse, Krishna explains that one who has overcome the gates of darkness represented by lust, anger, and greed, acts for the welfare of the self and attains the highest spiritual goal."
},
"16.23": {
    shloka: "शास्त्रं योऽनुतिष्ठन्नस्य या: स्यात् निश्चला समाधिः। असम्प्रज्ञाता समाधिस्तस्य प्रकाशयति।।16.23।।",
    meaning: "He who is disciplined by the scriptural injunctions and who has his mind fixed in devotion attains wisdom. This wisdom dispels all ignorance.",
    explanation: "Krishna describes the state of samadhi (deep meditation) attained by one disciplined in scriptural principles and devoted in mind, leading to the dispelling of ignorance and the attainment of true wisdom."
},
"16.24": {
    shloka: "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ। ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि।।16.24।।",
    meaning: "Therefore, let the scriptures be your authority in determining what should be done and what should not be done. Knowing the scriptural injunctions, you should perform your duty in this world.",
    explanation: "Krishna advises Arjuna to follow the guidelines of scriptures, discerning right and wrong actions, and perform duties accordingly, guided by the wisdom derived from scriptural teachings."
},
"17.1": {
    shloka: "अर्जुन उवाच | ये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयाऽन्विता:। तेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तम:।।17.1।।",
    meaning: "Arjuna said: O Krishna, what is the situation of those who disregard the principles of scripture but still perform worship with faith? Is their faith in goodness (sattva), passion (rajas), or ignorance (tamas)?",
    explanation: "Arjuna seeks clarification from Krishna about the disposition of those who, though not strictly adhering to scriptural injunctions, engage in worship with devotion. He inquires whether such faith is influenced by goodness, passion, or ignorance."
},
"17.2": {
    shloka: "श्री भगवानुवाच | त्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा। सात्त्विकी राजसी चैव तामसी चेति तां श्रृणु।।17.2।।",
    meaning: "The Supreme Personality of Godhead said: According to the modes of material nature acquired by the embodied soul, one's faith can be of three kinds—in goodness, passion, or ignorance. Now hear about this.",
    explanation: "Krishna explains that the nature of one's faith, manifested through worship, is determined by the predominant mode of material nature (sattva, rajas, or tamas) influencing the individual soul."
},
"17.3": {
    shloka: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत। श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्ध: स एव स:।।17.3।।",
    meaning: "O Arjuna, the faith of each is in accordance with one's own nature. One is known by one's faith, and one can develop faith according to one's association.",
    explanation: "Krishna asserts that an individual's faith corresponds to their inherent nature (guna). Faith defines a person, and one's association and experiences shape the development of faith."
},
"17.4": {
    shloka: "यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसाः। प्रेतान्भूतगणांश्चान्ये यजन्ते तामसा जनाः।।17.4।।",
    meaning: "Men in the mode of goodness worship the demigods; those in the mode of passion worship the demons; and those in the mode of ignorance worship ghosts and spirits.",
    explanation: "Krishna describes the types of worship corresponding to different modes of material nature—worship of demigods by those in goodness, demons by those in passion, and ghosts/spirits by those in ignorance."
},
"17.5": {
    shloka: "अशास्त्रविहितं घोरं तप्यन्ते ये तपो जना:। दम्भाहंकारसंयुक्ता: कामरागबलान्विता:।।17.5।।",
    meaning: "Those who undergo severe austerities and penances not recommended by the scriptures, being motivated by pride, egoism, attachment, and lust, are bewildered in their knowledge and engage in horrible acts of austerity.",
    explanation: "Krishna warns against austere practices motivated by false pride, ego, attachment, and desire, which are contrary to scriptural guidelines and lead to delusion."
},
"17.6": {
    shloka: "कर्षयन्त: शरीरस्थं भूतग्राममचेतस:। मां चैवान्त:शरीरस्थं तान्विद्ध्यासुरनिश्चयान्।।17.6।।",
    meaning: "The bewildered souls, with little intelligence, engage in unbeneficial activities that cause pain to the body and others. Know them to be of demoniac resolve.",
    explanation: "Krishna identifies those lacking intelligence who harm themselves and others through senseless activities as possessing a demoniac nature."
},
"17.7": {
    shloka: "आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रिय:। यज्ञस्तपस्तथा दानं तेषां भेदमिमं श्रृणु।।17.7।।",
    meaning: "Even the food each person prefers is of three kinds—according to the three modes of material nature. The same is true of sacrifices, austerities, and charity. Now hear about the distinctions between them.",
    explanation: "Krishna explains that preferences in food, as well as other offerings such as sacrifices, austerities, and charity, are influenced by the modes of material nature, leading to distinctions in their quality and effectiveness."
},
"17.8": {
    shloka: "आयु:सत्त्वबलारोग्यसुखप्रीतिविवर्धना:। रस्या: स्निग्धा: स्थिरा हृद्या आहारा: सात्त्विकप्रिया:।।17.8।।",
    meaning: "Foods that increase life, purify one's existence, give strength, health, happiness, and satisfaction, which are juicy, fatty, wholesome, and pleasing to the heart, are dear to those in the mode of goodness.",
    explanation: "Krishna describes sattvic foods that promote longevity, health, happiness, and mental satisfaction, and are considered wholesome, juicy, and pleasing to the heart."
},
"17.9": {
    shloka: "कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिन:। आहारा: राजसस्येष्टा दु:खशोकामयप्रदा:।।17.9।।",
    meaning: "Foods that are too bitter, too sour, salty, hot, pungent, dry, and burning are dear to those in the mode of passion. Such foods cause distress, misery, and disease.",
    explanation: "Krishna explains that rajasic foods, characterized by excess bitterness, sourness, saltiness, spiciness, dryness, and heat, are preferred by those in the mode of passion but lead to discomfort, misery, and diseases."
},
"17.10": {
    shloka: "यातयामं गतरसं पूति पर्युषितं च यत्। उच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम्।।17.10।।",
    meaning: "Food prepared more than three hours before being eaten, food tasteless, decomposed and putrid, and food consisting of remnants and untouchable things is dear to those in the mode of ignorance.",
    explanation: "Krishna describes tamasic foods, which are stale, tasteless, decomposed, putrid, or consisting of remnants, as preferred by those in ignorance. Such foods are impure and detrimental to health."
},
"17.11": {
    shloka: "अफलाकाङ्क्षिभिर्यज्ञो विधिदृष्टो य इज्यते। यष्टव्यमेवेति मन: समाधाय स सात्त्विक:।।17.11।।",
    meaning: "The sacrifice performed according to scriptural regulations, with no expectation of reward, and with the firm conviction that it should be performed, is in the mode of goodness (sattva).",
    explanation: "Krishna describes the nature of sattvic sacrifice, which is performed as a duty according to scriptural injunctions, without desire for personal gain, and with a firm understanding of its necessity."
},
"17.12": {
    shloka: "अभिसंधाय तु फलं दम्भार्थमपि चैव यत्। इज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम्।।17.12।।",
    meaning: "But the sacrifice performed for some material benefit or for the sake of pride, O best of the Bharatas, know that to be in the mode of passion (rajas).",
    explanation: "Krishna explains that sacrifices performed with a desire for personal gain or out of egoistic motives belong to the mode of passion (rajas). Such sacrifices are driven by worldly aspirations and pride."
},
"17.13": {
    shloka: "विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम्। श्रद्धाविरहितं यज्ञं तामसं परिचक्षते।।17.13।।",
    meaning: "Any food that is tasteless, stale, putrid, polluted, and impure, and offerings made without mantras, without proper distribution, and without faith, is considered in the mode of ignorance (tamas).",
    explanation: "Krishna describes tamasic sacrifices as those made with impure and tasteless food, without proper rituals, mantras, or offerings, and lacking faith or understanding. Such sacrifices are performed negligently and are considered ignorant."
},
"17.14": {
    shloka: "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम्। ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते।।17.14।।",
    meaning: "Worship of the gods, the twice-born, teachers, and the wise, purity, honesty, celibacy, and non-violence—these are the austerities of the body.",
    explanation: "Krishna defines the austerities of the body, which include worship of deities, brahmanas (twice-born), gurus (teachers), and the wise, along with practicing purity, honesty, celibacy, and non-violence."
},
"17.15": {
    shloka: "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्। स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते।।17.15।।",
    meaning: "Words that do not cause distress, are truthful, beneficial, and pleasing, and regular study of the scriptures—these are the austerities of speech.",
    explanation: "Krishna describes the austerities of speech, which involve speaking words that are non-agitating, truthful, beneficial, and pleasant, along with consistent study and recitation of scriptures."
},
"17.16": {
    shloka: "मनः प्रसाद: सौम्यत्वं मौनमात्मविनिग्रह:। भावसंशुद्धिरित्येतत्तपो मानसमुच्यते।।17.16।।",
    meaning: "Serenity of mind, gentleness, silence, self-control, and purity of thought—these are the austerities of the mind.",
    explanation: "Krishna explains the austerities of the mind, which include maintaining mental calmness, being gentle in demeanor, practicing silence, self-restraint, and cultivating pure thoughts."
},
"17.17": {
    shloka: "श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरै:। अफलाकाङ्क्षिभिर्युक्तै: सात्त्विकं परिचक्षते।।17.17।।",
    meaning: "This threefold austerity performed with utmost faith by men not desiring any reward is said to be in the mode of goodness (sattva).",
    explanation: "Krishna explains that austerity performed with supreme faith and without desire for personal gain is considered sattvic. Such austerity is characterized by selfless devotion and pure intention."
},
"17.18": {
    shloka: "सत्कारमानपूजार्थं तपो दम्भेन चैव यत्। क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम्।।17.18।।",
    meaning: "Austerity performed with the aim of gaining respect, honor, and reverence, and with hypocrisy, is said to be in the mode of passion (rajas). It is unstable and temporary.",
    explanation: "Krishna describes rajasic austerity as that which is performed with the desire for recognition, admiration, and outward show, done with insincerity and hypocrisy. Such austerity lacks stability and lasting value."
},
"17.19": {
    shloka: "मूढग्राहेणात्मनो यत्पीडया क्रियते तप:। परस्तापार्थकं वाऽऽपि न तत्सात्त्विकमुच्यते।।17.19।।",
    meaning: "Austerity performed out of foolishness, with self-torture or to harm others, is said to be in the mode of ignorance (tamas).",
    explanation: "Krishna explains that tamasic austerity is performed out of ignorance, involving self-inflicted pain or causing harm to others. Such austerity is considered deluded and devoid of true understanding."
},
"17.20": {
    shloka: "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्।।17.20।।",
    meaning: "Charity given out of duty, without expectation of return, to the deserving and at the right place and time is considered to be in the mode of goodness (sattva).",
    explanation: "Krishna describes sattvic charity as that which is given as a duty, selflessly, to deserving recipients, and at the appropriate place and time. Such charity is considered noble and beneficial."
},
"17.21": {
    shloka: "यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुन:। दीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम्।।17.21।।",
    meaning: "But charity given with expectation of some return, or with a desire for fruits, or grudgingly, is said to be in the mode of passion (rajas).",
    explanation: "Krishna describes rajasic charity as that which is given with the expectation of receiving something in return, or given reluctantly and with discomfort. Such charity is driven by selfish motives and lacks selflessness."
},
"17.22": {
    shloka: "अदेशकाले यद्दानमपात्रेभ्यश्च दीयते। असत्कृतमवज्ञातं तत्तामसमुदाहृतम्।।17.22।।",
    meaning: "And charity given at an improper place and time, to unworthy recipients, or without respect and with contempt is said to be in the mode of ignorance (tamas).",
    explanation: "Krishna explains tamasic charity as that which is given at inappropriate places and times, to unworthy recipients, and without proper respect or consideration. Such charity is deemed ignorant and devoid of discernment."
},
"17.23": {
    shloka: "ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविध: स्मृत:। ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिता: पुरा।।17.23।।",
    meaning: "From the beginning of creation, the transcendental syllable Om has been used to indicate the Supreme Absolute Truth. Brahmanas, the Vedas, and sacrifices were all created through this syllable 'Om'.",
    explanation: "Krishna explains the significance of the syllable 'Om' as representing the Supreme Absolute Truth, from which the Brahmanas (priests), Vedas (scriptures), and rituals (sacrifices) originated."
},
"17.24": {
    shloka: "तस्मादोंकारसम्भवो जातवेदो यतः प्रभु:। यद्यप्यन्योन्यजुह्वति ज्ञानतेऽत्यर्पितमन:।।17.24।।",
    meaning: "Therefore, the transcendental syllable Om, which is the name of the Supreme Lord, should be uttered when performing sacrifices, offering gifts, or practicing austerities.",
    explanation: "Krishna instructs the significance of chanting 'Om' as the name of the Supreme Lord during sacrifices, offerings, and austerities, indicating devotion and surrender to the divine."
},
"17.25": {
    shloka: "तदित्यनभिसन्धाय फलं यज्ञतप:क्रिया:। दानक्रियाश्च विविधा: क्रियन्ते मोक्षकाङ्क्षिभि:।।17.25।।",
    meaning: "With the word 'Tat', acts of sacrifice, austerity, and charity are begun by those desiring liberation. The purpose of such transcendental activities is to please the Supreme.",
    explanation: "Krishna explains that those aspiring for liberation begin sacred activities like sacrifice, austerity, and charity with the word 'Tat' ('that'), aiming to please the Supreme Lord."
},
"17.26": {
    shloka: "सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते। प्रशस्ते कर्मणि तथा सच्छब्द: पार्थ युज्यते।।17.26।।",
    meaning: "The word 'Sat' is used to describe acts that are righteous, virtuous, and in accordance with scriptural injunctions. And O Arjuna, the word 'Sat' is also used to denote the Supreme.",
    explanation: "Krishna explains that the term 'Sat' is employed to denote righteous and virtuous actions performed in accord with scriptural principles, as well as to indicate the Supreme Absolute Truth."
},
"17.27": {
    shloka: "यज्ञे तपसि दाने च स्थिति: सदिति चोच्यते। कर्म चैव तदर्थीयं सदित्येवाभिधीयते।।17.27।।",
    meaning: "Acts of sacrifice, austerity, and charity are also known as 'Sat' when performed without expectation of reward. The word 'Sat' is used to denote any such action performed for spiritual advancement.",
    explanation: "Krishna explains that the term 'Sat' refers to acts like sacrifice, austerity, and charity when performed selflessly and without attachment to rewards, indicative of actions done for spiritual growth and divine purpose."
},
"17.28": {
    shloka: "अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत्। असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह।।17.28।।",
    meaning: "O Partha, offerings made without faith, regardless of the austerity or the act performed, and gifts made without due respect are considered 'Asat'. They are neither beneficial in this life nor in the next.",
    explanation: "Krishna concludes that actions performed without faith, without proper devotion, and lacking sincerity are deemed 'Asat' (not good). Such acts hold no benefit either in this life or in the hereafter."
},
"18.1": {
    shloka: "अर्जुन उवाच | नये योऽस्य परित्यागी त्यागिनस्त्यागमाच्छिनु। यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम्।।18.1।।",
    meaning: "Arjuna said: O mighty-armed Krishna, I wish to understand the nature of renunciation (tyaga) and of the renounced order of life (sannyasa), and the difference between them, O Hrishikesha.",
    explanation: "Arjuna seeks knowledge about renunciation (tyaga) and the renounced order of life (sannyasa) from Krishna, particularly their significance and distinctions in spiritual practice."
},
"18.2": {
    shloka: "श्रीभगवानुवाच | काम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः। सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः।।18.2।।",
    meaning: "The Supreme Lord said: The sages understand renunciation to be the giving up of all desires for enjoyment (karma), undertaken by one who has discerned the truth. The wise declare the abandonment of the fruits of all actions as renunciation.",
    explanation: "Krishna explains that true renunciation involves giving up desires for selfish enjoyment and relinquishing attachment to the results of actions. This renunciation is understood by wise sages as a path to spiritual realization."
},
"18.3": {
    shloka: "त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः। यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत्।।18.3।।",
    meaning: "Some learned men declare that all kinds of work should be given up as evil, while others say that acts of sacrifice, charity, and austerity should not be abandoned.",
    explanation: "Different perspectives exist regarding renunciation: Some consider all actions to be faulty and advocate complete abandonment, while others emphasize the performance of sacrificial duties, charity, and austerity without attachment to their fruits."
},
"18.4": {
    shloka: "निश्चयं शृणु मे तत्र त्यागे भरतसत्तम। त्यागो हि पुरुषव्याघ्र त्रिविधः संप्रकीर्तितः।।18.4।।",
    meaning: "O best of the Bharatas, hear from Me now about renunciation, O tiger among men, for renunciation is declared in the scriptures to be of three kinds.",
    explanation: "Krishna now elaborates on the three types of renunciation, explaining their significance and application as outlined in the scriptures."
},
"18.5": {
    shloka: "यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत्। यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्।।18.5।।",
    meaning: "Acts of sacrifice, charity, and austerity should not be given up, but should be performed. Indeed, sacrifice, charity, and austerity are the purifiers of the wise.",
    explanation: "Krishna emphasizes the importance of performing acts of sacrifice, charity, and austerity, as they are purifying practices that contribute to spiritual growth and inner purification."
},
"18.6": {
    shloka: "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च। कर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम्।।18.6।।",
    meaning: "O Arjuna, but the duties prescribed by the Vedas should be performed here without attachment or desire for the fruits. This is My definite supreme advice.",
    explanation: "Krishna instructs Arjuna to perform prescribed duties according to the Vedas without attachment to outcomes, emphasizing the importance of duty fulfillment without selfish motives."
},
"18.7": {
    shloka: "नियतस्य तु संन्यासः कर्मणो नोपपद्यते। मोहात्तस्य परित्यागस्तामसः परिकीर्तितः।।18.7।।",
    meaning: "Renunciation of obligatory duties is not proper. The abandonment of duty due to delusion is declared to be in the mode of ignorance.",
    explanation: "Krishna explains that renouncing prescribed duties out of delusion or ignorance is inappropriate and categorized as tamasic renunciation, devoid of understanding and clarity."
},
"18.8": {
    shloka: "दु:खमित्येव यत्कर्म कायक्लेशभयात्त्यजेत्। स कृत्वा राजसं त्यागं नैव त्यागफलं लभेत्।।18.8।।",
    meaning: "One should not abandon duties because they are troublesome, O Arjuna, for if one abandons them out of fear of physical discomfort, such renunciation is rajasic, and it does not yield the benefits of renunciation.",
    explanation: "Krishna advises against giving up responsibilities merely because they are difficult or uncomfortable. Renunciation motivated by avoiding discomfort is considered rajasic and lacks the benefits of true renunciation."
},
"18.9": {
    shloka: "कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन। सङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः।।18.9।।",
    meaning: "O Arjuna, the renunciation of obligatory duties is considered sattvic. It is motivated by the knowledge of the soul and results in the complete abandonment of attachment.",
    explanation: "Renunciation of prescribed duties performed without attachment to rewards is considered sattvic renunciation, guided by spiritual wisdom and leading to liberation from the bondage of desires."
},
"18.10": {
    shloka: "न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते। त्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः।।18.10।।",
    meaning: "Neither hatred for unskilled action nor attachment to skilled action arises in the mind of a renouncer (tyagi) who is endowed with sattva (goodness), whose doubts have been cut asunder, and who possesses spiritual intelligence.",
    explanation: "A person established in sattva (goodness) does not despise unskilled action nor become overly attached to skilled action. Such a renouncer possesses spiritual intelligence and has dispelled doubts."
},
"18.11": {
    shloka: "न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः। यस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते।।18.11।।",
    meaning: "It is not possible for an embodied being to renounce all activities. But one who renounces the fruits of actions is said to have truly renounced.",
    explanation: "Krishna clarifies that complete renunciation of all activities is not feasible for embodied beings. However, renunciation of the fruits of actions signifies true renunciation and leads to liberation from karmic bondage."
},
"18.12": {
    shloka: "अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मण: फलम्। भवत्यत्यागिनां प्रेत्य न तु सन्न्यासिनां क्वचित्।।18.12।।",
    meaning: "Actions that are ordained, that are contrary to ordination, and that are mixed, are the three kinds of fruit of action that accrue after death to those who do not renounce; but not to those who have renounced.",
    explanation: "Krishna explains that the consequences of actions—whether in accordance with duty, contrary to duty, or a combination of both—result in karmic reactions after death for those who do not renounce the fruits of actions. Renouncers, however, are not subject to such consequences."
},
"18.13": {
    shloka: "पञ्चैतानि महाबाहो कारणानि निबोध मे। साङ्ख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम्।।18.13।।",
    meaning: "O mighty-armed Arjuna, learn from Me these five causes for the accomplishment of all actions, as declared in the Sankhya philosophy—अधिष्ठानं तथा कर्ता करणं च पृथग्विधम्। विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम्।।18.14।।",
    meaning: "The place of action, the performer, the senses, the endeavor, and ultimately, the Supersoul—these are the five factors of action as taught in the Sankhya philosophy.",
    explanation: "Krishna elaborates on the five factors that contribute to the accomplishment of all actions, according to the Sankhya philosophy. These factors include the place of action, the doer, the senses, the endeavor, and the divine."
},
"18.15": {
    shloka: "शरीरवाङ्मनोभिर्यत्कर्म प्रारभते नर:। न्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः।।18.15।।",
    meaning: "Whatever action a man performs with his body, speech, and mind, whether right (according to scriptural injunctions) or the reverse (opposed to scriptural injunctions), these five are its causes.",
    explanation: "Krishna explains that actions are initiated by the body, speech, and mind of an individual. Whether these actions are in accordance with or against scriptural principles, the five factors mentioned earlier determine their nature and consequences."
},
"18.16": {
    shloka: "तत्रैवं सति कर्तारमात्मानं केवलं तु यः। पश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः।।18.16।।",
    meaning: "Therefore, one who perceives the truth in this way—that the soul is passive while the modes of material nature act, and that the Self does nothing—such a person is not considered to be the doer, despite their actions.",
    explanation: "Krishna clarifies that those who understand that the soul is passive and the modes of material nature are active, perceiving the Self as distinct from material actions, are wise. Such individuals are not entangled in karma despite engaging in actions."
},
"18.17": {
    shloka: "यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते। हत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते।।18.17।।",
    meaning: "One who is free from egoism, whose intelligence is not contaminated, even though killing these creatures, they neither kill nor are bound by their actions.",
    explanation: "Krishna describes the state of one who is free from egoism and unaffected by material desires. Such a person, even when engaged in actions like killing, remains unbound by karma due to their detached attitude and purified consciousness."
},
"18.18": {
    shloka: "ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना। करणं कर्म कर्तेति त्रिविधः कर्मसंग्रहः।।18.18।।",
    meaning: "Knowledge, the object of knowledge, and the knower are the three factors that motivate action. The instruments of action, the performer, and the various senses, along with their respective functions, comprise the threefold basis of action.",
    explanation: "Krishna explains the three components that prompt action: knowledge, the object of knowledge, and the knower. Similarly, he outlines the three bases of action: the instruments of action, the doer, and the senses involved in performing the action."
},
"18.19": {
    shloka: "ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदतः। प्रोच्यते गुणसंख्याने यथावच्छृणु तान्यपि।।18.19।।",
    meaning: "Knowledge, action, and the doer are said to be of three kinds according to the three modes of material nature. Listen to this distinction, O Arjuna, as I explain them in detail.",
    explanation: "Krishna elaborates on how knowledge, action, and the doer vary according to the modes of material nature (guna), explaining their diverse natures and implications in the pursuit of spiritual growth."
},
"18.20": {
    shloka: "सर्वभूतेषु येनैकं भावमव्ययमीक्षते। अविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम्।।18.20।।",
    meaning: "That knowledge by which one sees the undivided, imperishable reality in all beings, undivided within the divided, know that knowledge to be in the mode of goodness (sattva).",
    explanation: "Krishna describes sattvic knowledge as the understanding that perceives the unchanging and eternal essence within all diverse manifestations of life, recognizing unity amidst diversity."
},
"18.21": {
    shloka: "पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान्। वेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम्।।18.21।।",
    meaning: "But that knowledge by which one sees various entities as separate and discrete, know that knowledge to be in the mode of passion (rajas).",
    explanation: "Krishna explains rajasic knowledge as the perception that identifies various beings as separate and unrelated entities, viewing diversity as the dominant reality."
},
"18.22": {
    shloka: "यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम्। अतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम्।।18.22।।",
    meaning: "But that knowledge which clings to a single effect as if it were the whole, without reason, without considering the truth, and which is trivial, know that knowledge to be in the mode of ignorance (tamas).",
    explanation: "Krishna describes tamasic knowledge as limited, ignorant understanding that fixates on trivial aspects, lacks depth, and fails to recognize the broader truths of existence."
},
"18.23": {
    shloka: "नियतं सङ्गरहितमरागद्वेषतः कृतम्। अप्राप्य योगसंसिद्धिं कां कृष्ण गच्छति।।18.23।।",
    meaning: "O Krishna, what is the fate of one who performs his duty, giving up attachment and hatred, and is unsuccessful in achieving perfection in yoga?",
    explanation: "Arjuna seeks to understand the destiny of one who faithfully performs their duties, detaching themselves from desires and aversions, yet fails to attain perfection in yoga (union with the divine)."
},
"18.24": {
    shloka: "यत्तु कामेप्सुना कर्म साहङ्कारेण वा पुनः। क्रियते बहुलायासं तद्राजसमुदाहृतम्।।18.24।।",
    meaning: "But that action which is performed with great effort by one seeking to gratify desires or to satisfy the ego, that action is called rajasic—undertaken with much attachment and fruitive results.",
    explanation: "Krishna explains rajasic action as effortful deeds done with attachment to personal desires or ego gratification, focusing on immediate gains and outcomes."
},
"18.25": {
    shloka: "अनुबन्धं क्षयं हिंसामनपेक्ष्य च पौरुषम्। मोहादारभ्यते कर्म यत्तत्तामसमुच्यते।।18.25।।",
    meaning: "That action performed in delusion, without consideration of future bondage or consequences, or of one’s own strength, is declared to be in the mode of ignorance.",
    explanation: "Krishna describes tamasic action as being driven by ignorance, undertaken without foresight or awareness of consequences, lacking effort and insight."
},
"18.26": {
    shloka: "मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः। सिद्ध्यसिद्ध्योर्निर्विकार: कर्ता सात्त्विक उच्यते।।18.26।।",
    meaning: "The performer who is free from attachment, non-egotistic, endowed with resolve and enthusiasm, and unaffected by success or failure, is called sattvic—steadfast in action.",
    explanation: "Krishna explains sattvic action as being performed with detachment, devoid of ego, with firm determination and enthusiasm, remaining unaffected by success or failure."
},
"18.27": {
    shloka: "रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः। हर्षशोकान्वित: कर्ता राजस: परिकीर्तित:।।18.27।।",
    meaning: "The performer who is attached, desiring the fruits of actions, greedy, violent, impure, and affected by happiness and distress, is said to be in the mode of passion.",
    explanation: "Krishna describes rajasic action as driven by attachment, characterized by greed, violence, impurity, and being swayed by emotions like happiness and sorrow."
},
"18.28": {
    shloka: "अयुक्त: प्राकृत: स्तब्ध: शठो नैष्कृतिकोऽलस:। विषादी दीर्घसूत्री च कर्ता तामस उच्यते।।18.28।।",
    meaning: "The performer who is unsteady, vulgar, stubborn, deceitful, malicious, lazy, despondent, and procrastinating is said to be in the mode of ignorance.",
    explanation: "Krishna describes tamasic action as being performed without direction or steadiness, characterized by laziness, deceitfulness, and being prone to procrastination and despair."
},
"18.29": {
    shloka: "बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं श्रृणु। प्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय।।18.29।।",
    meaning: "Understand now the distinctions of intellect and fortitude as per the three qualities, O Arjuna. Hear them fully explained, each separately, as I describe them.",
    explanation: "Krishna explains to Arjuna the distinctions among intellect, determination, and fortitude based on the three gunas (qualities of material nature) - sattva, rajas, and tamas."
},
"18.30": {
    shloka: "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये। बन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी।।18.30।।",
    meaning: "The intellect that knows duty and non-duty, what ought to be done and what ought not to be done, fear and fearlessness, bondage and liberation - that intellect is sattvic, O Arjuna.",
    explanation: "Krishna describes sattvic intellect as the one that discerns between righteousness and unrighteousness, duty and non-duty, and understands the concepts of fear, fearlessness, bondage, and liberation."
},
"18.31": {
    shloka: "यया धर्ममधर्मं च कार्यं चाकार्यमेव च। अयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी।।18.31।।",
    meaning: "The intellect by which one incorrectly understands dharma as adharma and adharma as dharma, and also incorrectly understands what should be done as not to be done and vice versa - that intellect is rajasic, O Arjuna.",
    explanation: "Krishna explains rajasic intellect as the one that is clouded by ignorance and incorrectly perceives righteousness as unrighteousness and vice versa, as well as misunderstands what should be done and what should not be done."
},
"18.32": {
    shloka: "अधर्मं धर्ममिति या मन्यते तमसावृता। सर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी।।18.32।।",
    meaning: "The intellect that is enveloped in darkness, which perceives dharma as adharma and all things wrongly, that intellect, O Arjuna, is tamasic.",
    explanation: "Krishna describes tamasic intellect as the one enveloped in ignorance and confusion, perceiving unrighteousness as righteousness and all things incorrectly."
},
"18.33": {
    shloka: "धृत्या यया धारयते मन:प्राणेन्द्रियक्रियाः। योगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी।।18.33।।",
    meaning: "The determination by which the mind, vital airs, and senses are held in check through unwavering devotion in yoga - that determination, O Arjuna, is sattvic.",
    explanation: "Krishna describes sattvic determination as unwavering, achieved through dedicated yoga practice, where the mind, breath, and senses are controlled."
},
"18.34": {
    shloka: "यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन। प्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी।।18.34।।",
    meaning: "The determination by which one holds fast to dharma, artha, and kama with attachment, expecting a reward - that determination, O Arjuna, is rajasic.",
    explanation: "Krishna explains rajasic determination as the one driven by desires and attachment, seeking rewards and benefits while adhering to righteousness, wealth, and pleasures."
},
"18.35": {
    shloka: "यया स्वप्नं भयं शोकं विषादं मदमेव च। न विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी।।18.35।।",
    meaning: "The determination by which the foolish do not abandon sleep, fear, sorrow, despair, and also conceit - that determination, O Arjuna, is tamasic.",
    explanation: "Krishna describes tamasic determination as that of the ignorant, who cling to delusions and fail to overcome sleep, fear, sorrow, and pride."
},
"18.36": {
    shloka: "सुखं त्विदानीं त्रिविधं श्रृणु मे भरतर्षभ। अभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति।।18.36।।",
    meaning: "Now hear from Me, O Arjuna, about the three kinds of happiness in which one rejoices through practice, and by which one reaches the end of suffering.",
    explanation: "Krishna explains the three types of happiness obtained through practice, leading to the cessation of suffering."
},
"18.37": {
    shloka: "यत्तदग्रे विषमिव परिणामेऽमृतोपमम्। तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम्।।18.37।।",
    meaning: "That which appears like poison in the beginning, but is like nectar in the end, and arises from the clear understanding of the self, is considered sattvic happiness.",
    explanation: "Krishna describes sattvic happiness as that which, although initially bitter, leads to nectar-like joy and arises from the clarity of self-realization."
},
"18.38": {
    shloka: "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम्। परिणामे विषमिव तत्सुखं राजसं स्मृतम्।।18.38।।",
    meaning: "That which arises from contact between the senses and their objects and seems like nectar in the beginning but is like poison in the end is regarded as rajasic happiness.",
    explanation: "Krishna describes rajasic happiness as arising from sensory experiences that initially appear pleasurable but lead to dissatisfaction and pain."
},
"18.39": {
    shloka: "यदग्रे चानुबन्धे च सुखं मोहनमात्मन:। निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम्।।18.39।।",
    meaning: "That happiness which deludes the self in the beginning and binds the soul by excessive attachment to sleep, laziness, and illusion is declared as tamasic.",
    explanation: "Krishna describes tamasic happiness as that which leads to delusion and binds the soul through attachment to laziness, negligence, and illusion."
},
"18.40": {
    shloka: "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः। सत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रभिर्गुणैः।।",
    meaning: "There is no being, whether on earth or in heaven among the gods, that is free from these three gunas (qualities) born of prakriti (nature).",
    explanation: "Krishna explains that all beings, whether earthly or divine, are bound by the three gunas (qualities) of nature—sattva (goodness), rajas (passion), and tamas (ignorance). These qualities influence actions and behaviors in the material world."
},
"18.41": {
    shloka: "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप। कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः।।",
    meaning: "O Arjuna, the duties of the Brahmanas, Kshatriyas, Vaishyas, and also of the Shudras are clearly divided according to the qualities (guna) born of their own nature.",
    explanation: "Krishna clarifies that the duties assigned to individuals in society—whether Brahmanas (priests), Kshatriyas (warriors), Vaishyas (merchants), or Shudras (workers)—are determined by their inherent qualities (guna) and nature."
},
"18.42": {
    shloka: "शमो दमस्तप: शौचं क्षान्तिरार्जवमेव च। ज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम्।।",
    meaning: "Peacefulness, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom, and religiousness—these are the natural qualities of work for the Brahmanas.",
    explanation: "Krishna describes the natural qualities and duties of Brahmanas (priests and scholars), which include traits like peacefulness, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom, and commitment to religious practices."
},
"18.43": {
    shloka: "शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम्। दानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम्।।",
    meaning: "Valor, strength, fortitude, skill in weaponry, resolve in battle, generosity, and leadership qualities are the natural qualities of work for the Kshatriyas.",
    explanation: "Krishna outlines the inherent traits and duties of Kshatriyas (warriors and rulers), including qualities such as courage, physical strength, endurance, skill in warfare, determination, generosity, and leadership abilities."
},
"18.44": {
    shloka: "कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम्। परिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम्।।",
    meaning: "Farming, cattle-rearing, and trade are the natural qualities of work for the Vaishyas, and service to others is the natural quality of work for the Shudras.",
    explanation: "Krishna defines the inherent occupations and duties of Vaishyas (merchants and agriculturists), who engage in farming, animal husbandry, and business, as well as those of Shudras (laborers and servants), who perform service-oriented roles."
},
"18.45": {
    shloka: "स्वे स्वे कर्मण्यभिरत: संसिद्धिं लभते नर:। स्वकर्मनिरत: सिद्धिं यथा विन्दति तच्छृणु।।",
    meaning: "By worship of the Lord through one's own duties, man attains perfection. Hear how one finds perfection by devotion to one's own duty.",
    explanation: "Krishna emphasizes the importance of performing one's own duties diligently and as an offering to the Divine. By dedicating actions to the Supreme, individuals achieve fulfillment and perfection in life."
},
"18.46": {
    shloka: "यत: प्रवृत्तिर्भूतानां येन सर्वमिदं ततम्। स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः॥",
    meaning: "By worship of the Lord, who is the source of all beings and by whom all this is pervaded, a man attains perfection through the performance of his own duties.",
    explanation: "Krishna teaches that by dedicating one's actions to the Supreme Being, the source and sustainer of all creation, one achieves success and fulfillment in life."
},
"18.47": {
    shloka: "श्रेयान्स्वधर्मो विगुण: परधर्मात्स्वनुष्ठितात्। स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम्॥",
    meaning: "It is better to perform one's own duties imperfectly than to master the duties of another. By fulfilling the obligations born of one's own nature, a person does not incur sin.",
    explanation: "Krishna emphasizes the importance of performing one's own duties according to one's innate nature and abilities. It is more beneficial to do one's own duties to the best of one's ability rather than attempting the duties of another, which can lead to negative consequences."
},
"18.48": {
    shloka: "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्। सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः॥",
    meaning: "O Arjuna, every endeavor is covered by some fault, just as fire is covered by smoke. One should not give up the work which is born of one's own nature, even though such work is full of fault.",
    explanation: "Krishna advises Arjuna not to abandon his natural duties due to imperfections or faults associated with them. Like fire covered by smoke, every action may have flaws, but one should persist in performing their duties in accordance with their inherent nature."
},
"18.49": {
    shloka: "श्रेयान्स्वधर्मो विगुण: परधर्मात्स्वनुष्ठितात्। स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम्॥",
    meaning: "It is better to engage in one's own occupation, even though one may perform it imperfectly, than to accept another's occupation and perform it perfectly. Duties prescribed according to one's nature are never affected by sinful reactions.",
    explanation: "Krishna reiterates the importance of adhering to one's own prescribed duties, even if done imperfectly, rather than taking up the duties of another. By performing one's duties as ordained by one's nature, one avoids negative consequences and sinful reactions."
},
"18.50": {
    shloka: "सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मॆ। समासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा॥",
    meaning: "O son of Kunti, learn from Me in brief how one who has attained perfection reaches the supreme state of Brahman. Established thus in transcendental knowledge, one quickly attains supreme spiritual peace.",
    explanation: "Krishna instructs Arjuna on the path to attaining the supreme state of Brahman, the ultimate reality. By cultivating unwavering devotion and knowledge of the divine, one achieves liberation and eternal peace."
},
"18.51": {
    shloka: "बुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च। शब्दादीन् विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च॥",
    meaning: "By subduing the mind with a purified intellect, restraining the self with determination, giving up objects of sense gratification, and overcoming attachment and hatred.",
    explanation: "Krishna advises the disciplined control of the mind and senses through a purified intellect. By renouncing attachment and aversion towards objects of the senses, one can attain self-mastery and spiritual elevation."
},
"18.52": {
    shloka: "विविक्तसेवी लघ्वाशी यतवाक्कायमानस:। ध्यानयोगपरो नित्यं वैराग्यं समुपाश्रित:॥",
    meaning: "He who lives in solitude, eats lightly, controls the body, mind, and speech, always engaged in meditation and cultivation of detachment.",
    explanation: "Krishna describes the lifestyle of a seeker committed to spiritual progress, emphasizing solitude, moderation in diet, self-control, and constant meditation, supported by a sense of detachment from worldly attractions."
},
"18.53": {
    shloka: "अहङ्कारं बलं दर्पं कामं क्रोधं परिग्रहम्। विमुच्य निर्मम: शान्तो ब्रह्मभूयाय कल्पते॥",
    meaning: "Being free from egoism, forcefulness, arrogance, desire, anger, and possessiveness, with a tranquil mind, one is fit for attaining oneness with Brahman (the supreme reality).",
    explanation: "Krishna explains the qualities of a tranquil and liberated individual who has overcome ego, pride, desire, anger, and attachment. Such a person is prepared to merge into the ultimate reality of Brahman."
},
"18.54": {
    shloka: "ब्रह्मभूत: प्रसन्नात्मा न शोचति न काङ्क्षति। सम: सर्वेषु भूतेषु मद्भक्तिं लब्ध्वा पराम्॥",
    meaning: "The one who is enlightened with the knowledge of Brahman (the supreme consciousness) remains joyous and neither grieves nor desires. Being equally disposed towards all beings, such a devotee attains supreme devotion unto Me (God).",
    explanation: "Krishna reiterates the characteristics of a self-realized soul who is free from sorrow and desire, treats all beings with equanimity, and is fully devoted to the Supreme."
},
"18.55": {
    shloka: "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्वत:। ततो मां तत्वतो ज्ञात्वा विशते तदनन्तरम्॥",
    meaning: "Through devotion, one can understand Me truly, how great I am. Having understood Me thus in truth, one enters into Me immediately.",
    explanation: "Krishna explains that true understanding of the divine comes through loving devotion (bhakti). By knowing the Supreme in essence, one merges with the divine without delay."
},
"18.56": {
    shloka: "सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रय:। मत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम्॥",
    meaning: "By taking refuge in Me and performing all actions for My sake, one attains eternal and imperishable abode by My grace.",
    explanation: "Krishna emphasizes the path of selfless devotion and surrender to Him. By dedicating all actions to the Divine and seeking His grace, one attains the eternal and indestructible spiritual realm."
},
"18.57": {
    shloka: "चेतसा सर्वकर्माणि मयि सन्न्यस्य मत्पर:। बुद्धियोगमुपाश्रित्य मच्चित्त: सततं भव॥",
    meaning: "With the mind centered on Me, by surrendering all actions to Me, being devoted to Me through intellect, fix your consciousness on Me.",
    explanation: "Krishna advises dedicating all actions and thoughts to Him, practicing the yoga of intelligence (buddhi-yoga) with unwavering devotion and concentration on the Divine."
},
"18.58": {
    shloka: "मच्चित्त: सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि। अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि॥",
    meaning: "With your consciousness focused on Me, you will overcome all obstacles by My grace. But if you become egoistic and refuse to listen, you will perish.",
    explanation: "Krishna assures that those who align their consciousness with Him will overcome challenges and receive His grace. However, those who act out of ego and ignore His guidance will face downfall."
},
"18.59": {
    shloka: "यदहङ्कारमाश्रित्य न योत्स्य इति मन्यसे। मिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति॥",
    meaning: "If you, due to egoism, think 'I will not fight,' your resolution is in vain. Your nature will compel you to engage in the battle.",
    explanation: "Krishna warns Arjuna against false ego and indecision. He explains that Arjuna's inherent nature and duty as a warrior will inevitably compel him to fight, regardless of his ego-driven reluctance."
},
"18.60": {
    shloka: "स्वभावजेन कौन्तेय निबद्ध: स्वेन कर्मणा। कर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत्॥",
    meaning: "O Arjuna, bound by your own nature, born of your own karma, which is acquired through delusion, you will involuntarily do that which you do not wish to do.",
    explanation: "Krishna explains the concept of svabhava (inherent nature) and karma (action), emphasizing that one is compelled to act according to their nature and past deeds, even if one desires otherwise due to delusion."
},
"18.61": {
    shloka: "ईश्वर: सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति। भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया॥",
    meaning: "The Supreme Lord dwells in the hearts of all beings, O Arjuna, causing all beings to revolve as if mounted on a machine, by His mysterious power.",
    explanation: "Krishna reveals His omnipresence as the Supreme Controller residing within the hearts of all living beings, directing their actions and movements like puppets on a string through His divine energy."
},
"18.62": {
    shloka: "तमैव शरणं गच्छ सर्वभावेन भारत। तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम्॥",
    meaning: "Seek refuge in Him alone with all your being, O Bharata. By His grace, you will attain supreme peace and the eternal abode.",
    explanation: "Krishna urges Arjuna to take complete refuge in Him with unwavering devotion. By the grace of the Supreme Lord, one attains ultimate peace and reaches the eternal spiritual realm."
},
"18.63": {
    shloka: "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया। विमृश्यैतदशेषेण यथेच्छसि तथा कुरु॥",
    meaning: "Thus, I have explained to you this knowledge that is more secret than all secrets. Ponder over it deeply, and then do as you wish.",
    explanation: "Krishna concludes His teachings by imparting the most profound and confidential knowledge to Arjuna, urging him to contemplate it thoroughly and act according to his own understanding and will."
},
"18.64": {
    shloka: "सर्वगुह्यतमं भूय: शृणु मे परमं वच:। इष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम्॥",
    meaning: "Listen again to My supreme word, the most secret of all. Because you are very dear to Me, I will speak what is beneficial for you.",
    explanation: "Out of affection for Arjuna, Krishna reiterates His supreme teachings, emphasizing their importance and assuring that they are for Arjuna's ultimate welfare and spiritual growth."
},
"18.65": {
    shloka: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि युक्त्वैवमात्मानं मत्परायण:॥",
    meaning: "Fix your mind on Me, be devoted to Me, offer obeisance to Me, and surely you will come to Me alone, having surrendered yourself to Me.",
    explanation: "Krishna instructs Arjuna to constantly remember Him, be devoted, and offer reverence, assuring that by such devotion and surrender, Arjuna will attain union with the Supreme."
},
"18.66": {
    shloka: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुच:॥",
    meaning: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    explanation: "Krishna urges Arjuna to abandon all other paths and take refuge in Him alone. By surrendering completely to the Supreme, one is liberated from all sins and fears."
},
"18.67": {
    shloka: "इदं ते नातपस्काय नाभक्ताय कदाचन। न चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति॥",
    meaning: "This confidential knowledge should never be explained to those who are not austere or devoted, nor to one who is not willing to listen, nor to one who criticizes Me.",
    explanation: "Krishna advises that His profound teachings should be shared only with those who are austere, devoted, receptive, and free from envy or criticism towards the Supreme."
},
"18.68": {
    shloka: "य इमं परमं गुह्यं मद्भक्तेष्वभिधास्यति। भक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशय:॥",
    meaning: "Anyone who explains this supreme secret to My devotees will undoubtedly come to Me, having performed supreme devotion unto Me.",
    explanation: "Krishna assures that one who imparts His confidential teachings to His devoted followers will surely attain union with Him, having cultivated unwavering devotion."
},
"18.69": {
    shloka: "न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तम:। भविता न च मे तस्मादन्य: प्रियतरो भुवि॥",
    meaning: "There is no servant in this world more dear to Me than he, nor will there ever be one more dear.",
    explanation: "Krishna declares that no one in the world is dearer to Him than a devoted servant who spreads His divine message, expressing unparalleled affection towards such a servant."
},
"18.70": {
    shloka: "अध्येष्यते च य इमं धर्म्यं संवादमावयो:। ज्ञानयज्ञेन तेनाहमिष्ट: स्यामिति मे मति:॥",
    meaning: "And I declare that anyone who studies this sacred conversation of ours worships Me by the sacrifice of knowledge, and I consider that person to be the recipient of loving service.",
    explanation: "Krishna proclaims that one who studies and disseminates the teachings of the Bhagavad Gita engages in the sacrifice of knowledge (jnanayajna), which is highly pleasing to Him, and such a person is cherished by the Supreme."
},
"18.71": {
    shloka: "श्रद्धावाननसूयश्च श्रृणुयादपि यो नर:। सोऽपि मुक्त: शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम्॥",
    meaning: "And that person who listens with faith and without envy becomes free and attains the auspicious planets where the pious dwell.",
    explanation: "Krishna assures that anyone who attentively hears the Bhagavad Gita with faith and without envy will be liberated and will attain the celestial abode of the righteous."
},
"18.72": {
    shloka: "कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा। कच्चिदज्ञानसम्मोह: प्रनष्टस्ते धनञ्जय॥",
    meaning: "O Arjuna, have you listened to this with concentrated mind? Has your ignorance and illusion been dispelled, O Dhananjaya (Arjuna)?",
    explanation: "Krishna inquires of Arjuna whether he has comprehended the teachings with a focused mind and if his ignorance and delusion have been eradicated."
},
"18.73": {
    shloka: "नष्टो मोह: स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत। स्थितोऽस्मि गतसन्देह: करिष्ये वचनं तव॥",
    meaning: "O Achyuta (Krishna), by Your grace, my delusion is dispelled, and I have regained my memory. I am steadfast and free from doubts. I will act according to Your word.",
    explanation: "Arjuna gratefully acknowledges that by Krishna's grace, his confusion is dispelled, and he has regained his clarity and resolve. Arjuna commits to following Krishna's instructions without hesitation."
},
"18.74": {
    shloka: "सञ्जय उवाच | इत्यहं वासुदेवस्य पार्थस्य च महात्मन:। संवादमिममश्रौषमद्भुतं रोमहर्षणम्॥",
    meaning: "Sanjaya said: Thus I heard this wonderful dialogue between Vasudeva (Krishna) and the great-souled Partha (Arjuna), causing my hair to stand on end in amazement.",
    explanation: "Sanjaya concludes his narration by expressing his awe and reverence upon hearing the profound dialogue between Krishna and Arjuna."
},
"18.75": {
    shloka: "व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम्। योगं योगेश्वरात्कृष्णात्साक्षात्कथयत: स्वयम्॥",
    meaning: "By the mercy of Vyasa, I have heard this supreme and most confidential Yoga directly from Krishna, the Lord of Yoga, who Himself declared it to me.",
    explanation: "Sanjaya acknowledges his fortune in hearing this profound and confidential yoga directly from Krishna, the supreme master of all yogas, through the grace of Vyasa."
},
"18.76": {
    shloka: "राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम्। केशवार्जुनयो: पुण्यं हृष्यामि च मुहुर्मुहु:॥",
    meaning: "O King, remembering this wonderful dialogue between Krishna and Arjuna, I am thrilled again and again. I rejoice over and over.",
    explanation: "Sanjaya expresses his continuous joy and excitement in recollecting the extraordinary conversation between Krishna and Arjuna."
},
"18.77": {
    shloka: "तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरे:। विस्मयो मे महान् राजन्हृष्यामि च पुन: पुन:॥",
    meaning: "O King, and remembering that most wonderful form of Hari (Krishna), I am struck with great wonder again and again, and I rejoice over and over.",
    explanation: "Sanjaya is amazed and delighted by repeatedly recollecting the awe-inspiring divine form of Hari (Krishna), experiencing profound wonder and joy."
},
"18.78": {
    shloka: "यत्र योगेश्वर: कृष्णो यत्र पार्थो धनुर्धर:। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    meaning: "Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. This is my opinion.",
    explanation: "Sanjaya concludes by affirming that wherever Krishna, the master of all yogas, and Arjuna, the exceptional warrior, are present together, there will be prosperity, triumph, strength, and righteousness without fail. This is Sanjaya's firm conviction based on what he has witnessed."
}
};

function searchShloka() {
    const input = document.getElementById("searchInput").value.trim();

    if (shlokas[input]) {
        const shlokaDetails = shlokas[input];
        const shlokaNumber = input;
        const shlokaText = shlokaDetails.shloka;
        const shlokaMeaning = shlokaDetails.meaning;
        const shlokaExplanation = shlokaDetails.explanation;

        const shlokaHTML = `
            <p><strong>${shlokaNumber}</strong>: ${shlokaText}</p>
            <p><em>Meaning:</em> ${shlokaMeaning}</p>
            <p><em>Explanation:</em> ${shlokaExplanation}</p>
        `;
        document.getElementById("shlokaDisplay").innerHTML = shlokaHTML;
    } 
    else {
        document.getElementById("shlokaDisplay").innerHTML = "<p>Shloka not found. Please enter a valid shloka or chapter number.</p>";
    }
}
