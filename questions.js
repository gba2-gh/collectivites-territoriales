// Banque de questions — Catégorie A
// Format : { id, theme, question, choices: [...], answer: index de la bonne réponse, explanation }
window.QUESTIONS = [
  {
    id: 1, theme: "Cadre constitutionnel",
    question: "Quel article de la Constitution de 1958 énumère les collectivités territoriales de la République ?",
    choices: ["Article 34", "Article 72", "Article 24", "Article 89"],
    answer: 1,
    explanation: "L'article 72 cite les communes, départements, régions, collectivités à statut particulier et collectivités d'outre-mer régies par l'article 74."
  },
  {
    id: 2, theme: "Cadre constitutionnel",
    question: "Depuis quelle révision constitutionnelle l'article 1er dispose-t-il que « l'organisation de la République est décentralisée » ?",
    choices: ["Loi constitutionnelle du 4 août 1995", "Loi constitutionnelle du 28 mars 2003", "Loi constitutionnelle du 23 juillet 2008", "Loi constitutionnelle du 8 juillet 1999"],
    answer: 1,
    explanation: "La révision du 28 mars 2003 (« Acte II de la décentralisation ») a inscrit l'organisation décentralisée à l'article 1er."
  },
  {
    id: 3, theme: "Cadre constitutionnel",
    question: "Le principe selon lequel les collectivités « ont vocation à prendre les décisions pour l'ensemble des compétences qui peuvent le mieux être mises en œuvre à leur échelon » est le principe :",
    choices: ["De libre administration", "De subsidiarité", "De spécialité", "De continuité"],
    answer: 1,
    explanation: "C'est le principe de subsidiarité, inscrit à l'article 72 alinéa 2 depuis 2003."
  },
  {
    id: 4, theme: "Cadre constitutionnel",
    question: "Une collectivité territoriale peut-elle exercer une tutelle sur une autre ?",
    choices: ["Oui, la région sur le département", "Oui, le département sur les communes", "Non, c'est interdit par l'article 72", "Oui, si la loi l'autorise expressément"],
    answer: 2,
    explanation: "L'article 72 al. 5 interdit toute tutelle d'une collectivité sur une autre ; la loi peut seulement désigner une collectivité « chef de file »."
  },
  {
    id: 5, theme: "Cadre constitutionnel",
    question: "Quel texte a précisé le principe d'autonomie financière des collectivités (article 72-2) ?",
    choices: ["La loi organique du 1er août 2001 (LOLF)", "La loi organique du 29 juillet 2004", "La loi du 13 août 2004", "La loi du 16 décembre 2010"],
    answer: 1,
    explanation: "La loi organique n° 2004-758 du 29 juillet 2004 définit les ressources propres et la part déterminante qu'elles doivent représenter."
  },
  {
    id: 6, theme: "Cadre constitutionnel",
    question: "Le référendum local décisionnel est prévu par :",
    choices: ["L'article 11 de la Constitution", "L'article 72-1 de la Constitution", "L'article 3 de la Constitution", "Uniquement par le CGCT, sans base constitutionnelle"],
    answer: 1,
    explanation: "L'article 72-1 (révision de 2003), précisé par la loi organique du 1er août 2003."
  },
  {
    id: 7, theme: "Histoire de la décentralisation",
    question: "Quelle loi supprime la tutelle administrative a priori et transfère l'exécutif départemental du préfet au président du conseil général ?",
    choices: ["Loi du 10 août 1871", "Loi du 2 mars 1982", "Loi du 6 février 1992", "Loi du 12 juillet 1999"],
    answer: 1,
    explanation: "La loi Defferre du 2 mars 1982 relative aux droits et libertés des communes, des départements et des régions."
  },
  {
    id: 8, theme: "Histoire de la décentralisation",
    question: "Quelle loi a supprimé la clause de compétence générale des départements et des régions ?",
    choices: ["Loi MAPTAM (2014)", "Loi NOTRe (2015)", "Loi RCT (2010)", "Loi 3DS (2022)"],
    answer: 1,
    explanation: "La loi NOTRe du 7 août 2015 ; seule la commune conserve la clause de compétence générale."
  },
  {
    id: 9, theme: "Histoire de la décentralisation",
    question: "Depuis le 1er janvier 2016, combien de régions compte la France métropolitaine (Corse incluse) ?",
    choices: ["22", "18", "13", "12"],
    answer: 2,
    explanation: "La loi du 16 janvier 2015 a ramené le nombre de régions métropolitaines de 22 à 13 (dont la collectivité de Corse)."
  },
  {
    id: 10, theme: "Histoire de la décentralisation",
    question: "Quelle loi a créé le statut de métropole de droit commun et la métropole de Lyon ?",
    choices: ["Loi NOTRe du 7 août 2015", "Loi MAPTAM du 27 janvier 2014", "Loi Chevènement du 12 juillet 1999", "Loi Engagement et proximité du 27 décembre 2019"],
    answer: 1,
    explanation: "La loi MAPTAM (modernisation de l'action publique territoriale et d'affirmation des métropoles) ; la métropole de Lyon existe depuis le 1er janvier 2015."
  },
  {
    id: 11, theme: "Collectivités à statut particulier",
    question: "Depuis quand la collectivité de Corse remplace-t-elle les deux départements corses et l'ancienne collectivité territoriale ?",
    choices: ["1er janvier 1982", "1er janvier 2002", "1er janvier 2018", "1er janvier 2021"],
    answer: 2,
    explanation: "La collectivité de Corse, créée par la loi NOTRe, existe depuis le 1er janvier 2018."
  },
  {
    id: 12, theme: "Collectivités à statut particulier",
    question: "La Collectivité européenne d'Alsace a été créée au :",
    choices: ["1er janvier 2016", "1er janvier 2019", "1er janvier 2021", "1er janvier 2024"],
    answer: 2,
    explanation: "Loi du 2 août 2019 ; elle regroupe les départements du Bas-Rhin et du Haut-Rhin depuis le 1er janvier 2021."
  },
  {
    id: 13, theme: "Collectivités à statut particulier",
    question: "Depuis le 1er janvier 2019, la Ville de Paris est :",
    choices: ["Une commune et un département distincts", "Une collectivité à statut particulier exerçant les compétences communales et départementales", "Une métropole", "Une collectivité d'outre-mer"],
    answer: 1,
    explanation: "La loi du 28 février 2017 a fusionné la commune et le département de Paris en une collectivité à statut particulier."
  },
  {
    id: 14, theme: "Intercommunalité",
    question: "Lequel de ces groupements n'est PAS un EPCI à fiscalité propre ?",
    choices: ["Communauté de communes", "Communauté d'agglomération", "Syndicat intercommunal à vocation unique (SIVU)", "Métropole"],
    answer: 2,
    explanation: "Le SIVU est un syndicat sans fiscalité propre, financé par les contributions des communes membres."
  },
  {
    id: 15, theme: "Intercommunalité",
    question: "Une communauté d'agglomération doit en principe regrouper un ensemble d'au moins :",
    choices: ["15 000 habitants", "50 000 habitants autour d'une ville-centre de plus de 15 000 habitants", "250 000 habitants", "400 000 habitants"],
    answer: 1,
    explanation: "Article L5216-1 CGCT : ensemble de plus de 50 000 habitants d'un seul tenant et sans enclave, autour d'une ou plusieurs communes centre de plus de 15 000 habitants (avec des dérogations)."
  },
  {
    id: 16, theme: "Intercommunalité",
    question: "Quel principe interdit à un EPCI d'intervenir en dehors des compétences qui lui ont été transférées ?",
    choices: ["Principe de subsidiarité", "Principe de spécialité", "Principe de libre administration", "Principe de mutabilité"],
    answer: 1,
    explanation: "Les EPCI sont des établissements publics soumis au principe de spécialité (fonctionnelle et territoriale)."
  },
  {
    id: 17, theme: "Compétences",
    question: "Quelle collectivité est compétente pour la construction et l'entretien des collèges ?",
    choices: ["La commune", "Le département", "La région", "L'État"],
    answer: 1,
    explanation: "Collèges : département. Lycées : région. Écoles maternelles et élémentaires : commune."
  },
  {
    id: 18, theme: "Compétences",
    question: "Le versement du revenu de solidarité active (RSA) relève principalement :",
    choices: ["De la commune via le CCAS", "Du département", "De la région", "De la CAF uniquement, sans collectivité"],
    answer: 1,
    explanation: "Le département est chef de file de l'action sociale et finance le RSA (le versement est assuré par les CAF/MSA pour son compte)."
  },
  {
    id: 19, theme: "Compétences",
    question: "Quelle collectivité est chef de file en matière de développement économique depuis la loi NOTRe ?",
    choices: ["La commune", "Le département", "La région", "La métropole exclusivement"],
    answer: 2,
    explanation: "La région élabore le SRDEII (schéma régional de développement économique, d'innovation et d'internationalisation)."
  },
  {
    id: 20, theme: "Institutions et élus",
    question: "Comment sont élus les conseillers départementaux depuis 2015 ?",
    choices: ["Scrutin de liste proportionnel à un tour", "Scrutin binominal mixte majoritaire à deux tours", "Scrutin uninominal majoritaire à deux tours", "Au suffrage indirect par les maires"],
    answer: 1,
    explanation: "Loi du 17 mai 2013 : un binôme femme-homme est élu dans chaque canton."
  },
  {
    id: 21, theme: "Institutions et élus",
    question: "Lorsqu'il tient les registres d'état civil, le maire agit en qualité :",
    choices: ["D'exécutif de la commune", "D'agent de l'État", "De président de l'EPCI", "De représentant du département"],
    answer: 1,
    explanation: "Le maire a une double casquette : exécutif communal et agent de l'État (état civil, OPJ, organisation des élections…)."
  },
  {
    id: 22, theme: "Institutions et élus",
    question: "Les pouvoirs de police administrative générale du maire (bon ordre, sûreté, sécurité, salubrité publiques) sont définis à l'article :",
    choices: ["L2212-2 du CGCT", "L1111-1 du CGCT", "L3211-1 du CGCT", "L4221-1 du CGCT"],
    answer: 0,
    explanation: "Article L2212-2 du CGCT."
  },
  {
    id: 23, theme: "Institutions et élus",
    question: "Depuis la loi du 21 mai 2025, applicable aux municipales de mars 2026, les conseillers municipaux des communes de moins de 1 000 habitants sont élus :",
    choices: ["Au scrutin plurinominal majoritaire avec panachage", "Au scrutin de liste paritaire", "Au scrutin uninominal", "Par tirage au sort"],
    answer: 1,
    explanation: "La loi n° 2025-444 a étendu le scrutin de liste paritaire à toutes les communes, supprimant le panachage."
  },
  {
    id: 24, theme: "Contrôle",
    question: "De quel délai dispose le préfet pour déférer un acte qu'il estime illégal au tribunal administratif ?",
    choices: ["15 jours", "1 mois", "2 mois", "6 mois"],
    answer: 2,
    explanation: "Le déféré préfectoral doit être formé dans les deux mois suivant la transmission de l'acte."
  },
  {
    id: 25, theme: "Contrôle",
    question: "Quel organe intervient dans le contrôle budgétaire des collectivités (budget non voté, déséquilibré, dépense obligatoire non inscrite) ?",
    choices: ["Le Conseil d'État", "La chambre régionale des comptes", "Le tribunal judiciaire", "Le Conseil constitutionnel"],
    answer: 1,
    explanation: "La CRC, saisie par le préfet, émet des propositions ; le préfet peut ensuite régler le budget."
  },
  {
    id: 26, theme: "Finances locales",
    question: "Hors année de renouvellement des assemblées, le budget primitif doit être voté au plus tard le :",
    choices: ["31 décembre de l'année précédente", "31 mars", "15 avril", "30 juin"],
    answer: 2,
    explanation: "Article L1612-2 CGCT : 15 avril (30 avril l'année de renouvellement)."
  },
  {
    id: 27, theme: "Finances locales",
    question: "Selon la règle de l'équilibre réel, le remboursement du capital de la dette doit être couvert par :",
    choices: ["De nouveaux emprunts", "Des ressources propres (épargne, recettes propres d'investissement)", "La dotation globale de fonctionnement uniquement", "Une subvention de l'État"],
    answer: 1,
    explanation: "L'emprunt ne peut financer que l'investissement ; le remboursement du capital doit être couvert par des ressources propres (art. L1612-4 CGCT)."
  },
  {
    id: 28, theme: "Finances locales",
    question: "Quelle est la principale dotation de fonctionnement versée par l'État aux collectivités ?",
    choices: ["La DETR", "La DGF", "Le FCTVA", "La DSIL"],
    answer: 1,
    explanation: "La dotation globale de fonctionnement (DGF). DETR et DSIL sont des dotations d'investissement ; le FCTVA compense la TVA sur investissements."
  },
  {
    id: 29, theme: "Fonction publique territoriale",
    question: "Depuis le 1er mars 2022, les dispositions statutaires de la fonction publique territoriale (ex-loi du 26 janvier 1984) figurent dans :",
    choices: ["Le Code général des collectivités territoriales", "Le Code général de la fonction publique", "Le Code de l'action publique", "Le Code du travail"],
    answer: 1,
    explanation: "L'ordonnance du 24 novembre 2021 a créé le Code général de la fonction publique (CGFP), entré en vigueur le 1er mars 2022."
  },
  {
    id: 30, theme: "Fonction publique territoriale",
    question: "Quel établissement public assure la formation des agents territoriaux et organise les concours de catégorie A+ ?",
    choices: ["Les centres de gestion (CDG)", "Le CNFPT", "L'INSP", "La DGCL"],
    answer: 1,
    explanation: "Le Centre national de la fonction publique territoriale (CNFPT) : formation et concours A+ (administrateurs, ingénieurs en chef, conservateurs…)."
  }
];
