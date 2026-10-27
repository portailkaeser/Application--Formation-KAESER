// ==========================================
// CONFIGURATION ENVOI VERS GOOGLE SHEET (DRIVE)
// ==========================================
// Collez ici l'URL complète de votre déploiement Apps Script (se termine par /exec)
const URL_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycbyoLljLKLDZ3o3t_9SwXJbC2tHSNzE6DUCGD6TCHcR_YH2wJyODa-MYFS6rUXvU4k6_/exec";

// ==========================================
// BANQUE DE QUESTIONS ET CONFIGURATION
// ==========================================
const banquesQuestions = {
    // 1. PRÉ-FORMATIONS SPÉCIFIQUES
    'AIR COMPRIMÉ NOVICES': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation par KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable d'expliquer le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet d'aspiration ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet anti-retour ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet thermostatique ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le moteur ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le bloc vis ?", options: ["Oui", "Non"] },
        { q: "Savez-vous différencier les différents contrôleurs (Kaeser Control, Sigma Control 1 et 2, Sigma Control Basic) ?", options: ["Oui", "Non"] },
        { q: "Connaissez-vous les gammes d'entretien d'un compresseur à vis ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'BASIC TRAINING': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable d'expliquer le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Savez-vous différencier les contrôleurs (Kaeser Control, Sigma Control Basic, Sigma Control 1 et 2) ?", options: ["Oui", "Non"] },
        { q: "Savez-vous différencier les sécheurs frigorifiques et sécheurs à adsorption ?", options: ["Oui", "Non"] },
        { q: "Savez-vous ce qu'est un variateur de puissance sur un compresseur et sa fonction ?", options: ["Oui", "Non"] },
        { q: "Savez-vous lire un schéma électrique ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'BOOSTER, OMEGA & VIS BP': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Connaissez-vous les machines suivantes :", options: ["Booster", "Omega", "Vis BP", "Aucune de ces machines"], type: "multiple" },
        { q: "Pouvez-vous expliquer la différence entre ces machines ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Connaissez-vous les applications industrielles d'un bloc Omega ?", options: ["Oui", "Non"] },
        { q: "Avez-vous déjà fait un entretien sur un Booster ?", options: ["Oui", "Non"] },
        { q: "Avez-vous déjà fait un entretien sur un bloc Omega ?", options: ["Oui", "Non"] },
        { q: "Avez-vous déjà fait un entretien sur une Vis BP ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'INDUSTRIE 1': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable d'expliquer le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet d'aspiration ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : La vanne de pression mini. ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : La vanne auxi. de décharge ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet thermostatique ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le moteur ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le bloc vis ?", options: ["Oui", "Non"] },
        { q: "Savez-vous différencier les différents contrôleurs (Kaeser Control, Sigma Control Basic, Sigma Control 1 et 2) ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'INDUSTRIE 2': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable d'expliquer le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Êtes-vous capable de : Réinitialiser les compteurs d'entretien ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Faire un update du SC2 ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Faire une copie de sauvegarde ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Programmer un SC2 ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Utiliser KAESER Connect ?", options: ["Oui", "Non"] },
        { q: "Savez-vous différencier les différents contrôleurs (Kaeser Control, Sigma Control Basic, Sigma Control 1 et 2) ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'INDUSTRIE 3': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable d'expliquer le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Connaissez-vous les gammes d'entretiens KAESER ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Quel type de protection doit-on mettre sur une machine équipée d'un variateur ?", options: ["Un disjoncteur courbe D", "Un disjoncteur différentiel courbe B, 30mA", "Un disjoncteur différentiel courbe B, 300mA", "Je ne sais pas"] },
        { q: "Savez-vous manipuler un BOP ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Savez-vous tester l'isolement d'un moteur ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'MISE EN SERVICE STATION': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Avez-vous déjà effectué une mise en service d'une station d'air comprimé ?", options: ["Oui", "Non"] },
        { q: "Quels points doit-on vérifier lors d'une mise en service d'une station ?", options: ["Le type de protection", "La taille des câbles d'alimentation ainsi que la matière", "Les entrées et sorties d'air", "Aucune idée"], type: "multiple" },
        { q: "Y a-t-il des réglages spécifiques pour les machines variables ?", options: ["Oui", "Non", "Aucune idée"] },
        { q: "Doit-on faire un rapport de mise en service ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'TP MOBILAIR': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation par KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable d'expliquer le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet d'aspiration ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : L'alternateur ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le régulateur proportionnel ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet thermostatique ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le moteur ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le bloc vis ?", options: ["Oui", "Non"] },
        { q: "Savez-vous différencier les différents contrôleurs (Sigma Control Smart, Sigma Control Mobil, Sigma Control Mobil 2) ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'TP MOBILAIR ELECTRIQUE': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation par KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable d'expliquer le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non", "Partiellement"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet d'aspiration ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le régulateur proportionnel ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le clapet thermostatique ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le moteur ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable d'identifier formellement : Le bloc vis ?", options: ["Oui", "Non"] },
        { q: "Savez-vous différencier les différents contrôleurs (Sigma Control Smart, Sigma Control Mobil, Sigma Control Mobil 2) ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'SAM - Fonctions avancées': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "formation_sam_complete", q: "Avez-vous fait la formation SAM 4.0 Formule complète ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_periode_sam", q: "Si Oui, à quelle période ?", type: "texte_conditionnel", condition: "formation_sam_complete", valeur_declencheur: "Oui" },
        { id: "details_pourquoi_pas_sam", q: "Si Non, pourquoi ?", type: "texte_conditionnel", condition: "formation_sam_complete", valeur_declencheur: "Non" },
        { q: "Que savez-vous à propos du SAM ?", options: ["Rien", "Très peu de chose", "Quelques notions", "Beaucoup"] },
        { id: "manipule_sam", q: "Avez-vous déjà manipulé un SAM ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "sam_installer", q: "Si Oui : Êtes-vous capable d'installer un SAM ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { id: "sam_updater", q: "Si Oui : Êtes-vous capable d'updater un SAM ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { id: "sam_importer", q: "Si Oui : Êtes-vous capable d'importer une configuration ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { id: "sam_sauvegarde", q: "Si Oui : Êtes-vous capable de faire une sauvegarde pour analyse ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { q: "Savez-vous ce qu'est une régulation Kp/Ki ?", options: ["Oui", "Non"] },
        { q: "Savez-vous ce qu'est une interface com ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions, des attentes spécifiques lors de cette formation ?", type: "texte" }
    ],

    'SAM - Formule complète': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Que savez-vous à propos du SAM ?", options: ["Rien", "Très peu de chose", "Quelques notions", "Beaucoup"] },
        { id: "manipule_sam", q: "Avez-vous déjà manipulé un SAM ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "sam_installer", q: "Si Oui : Êtes-vous capable d'installer un SAM ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { id: "sam_updater", q: "Si Oui : Êtes-vous capable d'updater un SAM ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { id: "sam_importer", q: "Si Oui : Êtes-vous capable d'importer une configuration ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { id: "sam_sauvegarde", q: "Si Oui : Êtes-vous capable de faire une sauvegarde pour analyse ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { id: "sam_horloge", q: "Si Oui : Êtes-vous capable d'établir un programme horloge ?", type: "texte_conditionnel", condition: "manipule_sam", valeur_declencheur: "Oui" },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions, des attentes spécifiques lors de cette formation ?", type: "texte" }
    ],

    "TRAITEMENT DE L'AIR": [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Êtes-vous capable de différencier une ligne avec une cuve humide ou une cuve sèche ?", options: ["Oui", "Non"] },
        { q: "Connaissez-vous le fonctionnement d'un filtre cyclonique ?", options: ["Oui", "Non"] },
        { q: "Pouvez-vous expliquer le fonctionnement d'un sécheur frigorifique ?", options: ["Oui", "Non"] },
        { q: "Pouvez-vous expliquer le fonctionnement d'un sécheur d'adsorption ?", options: ["Oui", "Non"] },
        { q: "Connaissez-vous la réglementation des équipements sous pression ESP ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'VARIATEUR EXPERT': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Savez-vous reconnaître une machine équipée d'un variateur ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Se servir du BOP ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Relever un message d'erreur ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Modifier un paramètre ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Faire une recharge du programme ?", options: ["Oui", "Non"] },
        { q: "Êtes-vous capable de : Savoir quelle protection mettre pour une machine équipée d'un variateur ?", options: ["Oui", "Non"] },
        { q: "Savez-vous différencier les différents types de variateurs ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    'VIS SECHE': [
        { q: "Depuis quand travaillez-vous sur du matériel KAESER ou concurrent ?", options: ["Moins d'un an", "1 à 5 ans", "Plus de 5 ans"] },
        { id: "premiere_formation", q: "Est-ce votre 1ère formation chez KAESER ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_ancienne_formation", q: "Si Non = Quelle formation avez-vous déjà faite ? et à quelle date ?", type: "texte_conditionnel", condition: "premiere_formation", valeur_declencheur: "Non" },
        { q: "Savez-vous reconnaître une machine Vis sèche ?", options: ["Oui", "Non"] },
        { q: "La compression de l'air dans un compresseur vis sèche se fait :", options: ["Via un seul bloc", "Via un bloc BP et HP", "Aucune idée"] },
        { q: "Quel contrôleur équipe un compresseur à vis sèche ?", options: ["Sigma Control", "Sigma Control 2", "On peut avoir les 2", "Aucune idée"] },
        { q: "Savez-vous lire un schéma synoptique ?", options: ["Oui", "Non"] },
        { q: "Qu'attendez-vous de cette formation ?", type: "texte" },
        { q: "Les objectifs de la formation tels que décrits ci-dessus répondent-ils à vos attentes ?", type: "texte" },
        { q: "Que souhaiteriez-vous apprendre d'autre lors de cette formation, qui vous serait utile dans le cadre de votre fonction ?", type: "texte" },
        { q: "Avez-vous des suggestions ?", type: "texte" }
    ],

    // 2. POST-FORMATIONS SPÉCIFIQUES
    'POST_INDUSTRIE 1': [
        { q: "Quels sont les différents types de contrôleurs utilisés par KAESER ?", options: ["Kaeser Control", "Enercom", "Sigma Control 1", "Contrôleurs PF4000", "Aucune idée"], correct: [0, 2], type: "multiple" },
        { q: "Quelles pièces servent à comprimer l’air ambiant ?", options: ["Moteur", "Bloc vis", "Contrôleur", "Je ne sais pas"], correct: 1, type: "unique" },
        { q: "Quelles sont les fonctions de l’huile ?", options: ["Pour avoir un meilleur contrôle de la température", "Pour lubrifier les roulements", "Pour nettoyer l’air ambiant", "Pour empêcher les rotors de se toucher", "Je ne sais pas"], correct: [0, 1, 3], type: "multiple" },
        { q: "Pouvez-vous effectuer une maintenance gamme B ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "À quel moment doit-on faire une maintenance gamme B ?", options: ["3 000h", "6 000h", "12 000h"], correct: 1, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_INDUSTRIE 3': [
        { q: "Mon compresseur a actuellement 13 690 h de fonctionnement, quelle gamme d’entretien dois-je faire ?", options: ["Gamme B", "Gamme C", "Aucune idée"], correct: 1, type: "unique" },
        { q: "Expliquez votre choix de gamme d'entretien :", correct: "La gamme C s'effectue généralement à 12 000 h (ou multiples), ainsi qu'à 13 690 h si elle n'a pas été réalisée.", type: "texte" },
        { q: "Pouvez-vous mettre en pratique une liaison KAESER Connect ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Comment dois-je contrôler le sens de rotation d’un moteur contrôlé par un variateur ?", correct: "Visuellement en mode impulsion/pas à pas ou à l'aide d'un contrôleur d'ordre de phases conforme avant accouplement.", type: "texte" },
        { q: "Je suis capable de :", options: ["Relever un code défaut via le BOP", "Modifier un ou plusieurs paramètres via le BOP", "Charger le programme sur un variateur", "Naviguer avec aisance sur un SC 2"], correct: [0, 1, 2, 3], type: "multiple" },
        { q: "Par quel biais charge-t-on le programme sur un variateur ?", options: ["Avec une carte SD Standard", "Via un ordinateur et un programme (Starter)", "Avec une carte SD Siemens", "Aucune idée"], correct: 2, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_MISE EN SERVICE STATION': [
        { q: "Comment trouvez-vous la taille des câbles d’alimentation à mettre en place ?", correct: "En vous référant au manuel technique KAESER, en tenant compte de la puissance absorbée, du courant nominal et de la longueur de ligne (norme NF C 15-100).", type: "texte" },
        { q: "Comment définir le type et la taille de la protection électrique du compresseur ?", correct: "Selon l'intensité maximale de la machine, le type de démarrage (étoile/triangle, variateur, direct) et la fiche technique constructeur.", type: "texte" },
        { q: "Quelle courbe doit-on prendre afin de protéger un compresseur à vis étoile/triangle ?", options: ["Courbe A", "Courbe B", "Courbe C", "Je ne sais pas"], correct: 2, type: "unique" },
        { q: "Citez quelques réglages spécifiques pour un compresseur équipé d’un variateur de puissance :", correct: "Consigne de pression (pression cible), plage de vitesse/fréquence (min/max), temps d'accélération/décélération, paramètres PID.", type: "texte" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_TP MOBILAIR': [
        { q: "Quels sont les différents types de contrôleurs utilisés par KAESER ?", options: ["Sigma Control Smart", "Sigma Control Mobil", "Sigma Control 1", "Sigma Control Mobil 2", "Aucune idée"], correct: [0, 1, 3], type: "multiple" },
        { q: "Quelles sont les différentes sécurités sur un MOBILAIR ?", options: ["Pression huile compresseur", "Température liquide de refroidissement", "Pression huile moteur", "Température huile compresseur", "Pression liquide de refroidissement", "Aucune idée"], correct: [1, 2, 3], type: "multiple" },
        { q: "Quelles pièces servent à comprimer l’air ambiant ?", options: ["Moteur", "Bloc vis", "Contrôleur", "Je ne sais pas"], correct: 1, type: "unique" },
        { q: "Quelles sont les fonctions de l’huile ?", options: ["Pour avoir un meilleur contrôle de la température", "Pour lubrifier les roulements", "Pour nettoyer l’air ambiant", "Pour empêcher les rotors de se toucher", "Je ne sais pas"], correct: [0, 1, 3], type: "multiple" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_TP MOBILAIR ELECTRIQUE': [
        { q: "Quels sont les différents types de contrôleurs utilisés par KAESER ?", options: ["Sigma Control Smart", "Sigma Control Mobil", "Sigma Control 1", "Sigma Control Mobil 2", "Aucune idée"], correct: [0, 1, 3], type: "multiple" },
        { q: "Quelles sont les différentes sécurités sur un MOBILAIR ?", options: ["Pression huile compresseur", "Température liquide de refroidissement", "Pression huile moteur", "Température huile compresseur", "Pression liquide de refroidissement", "Aucune idée"], correct: [1, 2, 3], type: "multiple" },
        { q: "Quelles pièces servent à comprimer l’air ambiant ?", options: ["Moteur", "Bloc vis", "Contrôleur", "Je ne sais pas"], correct: 1, type: "unique" },
        { q: "Quelles sont les fonctions de l’huile ?", options: ["Pour avoir un meilleur contrôle de la température", "Pour lubrifier les roulements", "Pour nettoyer l’air ambiant", "Pour empêcher les rotors de se toucher", "Je ne sais pas"], correct: [0, 1, 3], type: "multiple" },
        { q: "Comment je définis la protection en tête d’un compresseur électrique sur un chantier ?", correct: "Selon l'intensité maximale admissible, la courbe du disjoncteur (souvent D/interrupteur différentiel adapté) et le régime de neutre de l'installation du chantier.", type: "texte" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_SAM - Fonctions avancées': [
        { q: "Êtes-vous capable de : Installer un SAM ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Êtes-vous capable de : Updater un SAM ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Êtes-vous capable de : Importer une configuration ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Êtes-vous capable de : Faire une sauvegarde pour analyse ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "En quoi consiste le réglage Kp/Ki ?", correct: "Ajuster le gain proportionnel (Kp) et le temps d'intégration (Ki) de la boucle de régulation PID pour stabiliser la pression et réagir aux variations sans pompage.", type: "texte" },
        { q: "Dans quel menu doit-on faire le reset du volume tampon ?", correct: "Dans le menu de configuration/paramétrage de la station (Menu Réseau/Volume tampon ou Maintenance).", type: "texte" },
        { q: "Peut-on piloter des compresseurs d’autres marques sur un SAM 4.0 ?", options: ["Oui", "Non"], correct: 0, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Si non, que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_SAM - Formule complète': [
        { q: "Quel est le nombre maximum de compresseurs pouvant être raccordés directement sur un switch SIGMA NETWORK standard d'un SAM 4.0 -4 ?", options: ["4 compresseurs", "7 compresseurs", "8 compresseurs", "16 compresseurs"], correct: 0, type: "unique" },
        { q: "Dans le réseau SIGMA NETWORK, quelle est la distance maximale autorisée pour un câblage RJ45 standard (Ethernet) sans passer par un module d'extension (SBU / FOC) ?", options: ["30 m", "50 m", "100 m", "800 m"], correct: 2, type: "unique" },
        { q: "Quelle est l'adresse réseau standard affectée d'office au contrôleur de bus du bloc d'entrées/sorties (E/S) dans le SIGMA NETWORK ?", options: ["Adresse 1", "Adresse 65", "Adresse 169.254.100.65", "Adresse 102"], correct: 2, type: "unique" },
        { q: "On a un point violet sur un compresseur, le compresseur est en secours actif :", options: ["La machine est en mode local.", "La machine va démarrer uniquement en cas de chute de pression et si les autres machines sont déjà enclenchées.", "La machine est en réserve avec deux heures de fonctionnement par semaine.", "La machine ne peut pas être commandée à distance."], correct: 1, type: "unique" },
        { q: "Quelle est la procédure exacte pour passer l'interface de commande en mode \"Commande\" (autorisation de modification) avec la carte RFID ?", options: ["Maintenir la carte RFID plaquée contre le lecteur pendant 5 secondes.", "Passer la carte RFID 1 fois devant le lecteur.", "Passer la carte RFID 2 fois devant le lecteur.", "Saisir un code PIN sur l'écran tactile après passage de la carte."], correct: 2, type: "unique" },
        { q: "Comment est calculée l'adresse IP statique attribuée par le SAM 4.0 à un compresseur équipé d'un automate SIGMA CONTROL 2 ou 3 (SC2 / SC3) ?", options: ["169.254.100.(N° du compresseur)", "169.254.100.(N° du compresseur + 2)", "169.254.100.(N° du compresseur + 65)", "169.254.100.(N° du compresseur + 102)"], correct: 3, type: "unique" },
        { q: "Dans le menu de régulation avancée, quel est l'effet d'un réglage à 100 % du paramètre \"Optimisation par rapport à la durée de marche\" ?", options: ["Privilégier la puissance spécifique globale de la station en équilibrant la vitesse des compresseurs à vitesse variable.", "Pousser le compresseur à vitesse variable à sa vitesse/débit maximum avant d'engager d'autres compresseurs.", "Répartir équitablement les heures de fonctionnement entre toutes les machines de la centrale.", "Forcer la marche à vide de tous les compresseurs pendant 1 heure par jour."], correct: 1, type: "unique" },
        { q: "À quoi sert l'interface réseau physique nommée \"X7-T11\" située à l'arrière de l'écran tactile du SAM 4.0 ?", options: ["Au raccordement des compresseurs sur le bus SIGMA NETWORK.", "À la connexion d'un maître PROFIBUS optionnel.", "À la visualisation de l'écran sur le réseau client via le serveur Web KAESER CONNECT.", "À l'alimentation électrique 24V DC du terminal."], correct: 2, type: "unique" },
        { q: "Lors du câblage d'un capteur de pression passif à 2 fils (4-20 mA) sur le module d'entrées analogiques (AI1), quel pontage devez-vous effectuer ?", options: ["Un pont entre la borne 1+ et le +24V.", "Un pont entre la borne 1- et le GND de la borne d'alimentation 24 V (X4).", "Un pont entre la borne 1+ et la borne 2+.", "Aucun pontage n'est nécessaire pour un capteur passif."], correct: 1, type: "unique" },
        { q: "Quelle manipulation devez-vous effectuer si la valeur du \"Volume tampon\" calculée par le SAM 4.0 devient anormale et provoque des régulations incohérentes (plusieurs compresseurs qui régulent en même temps) ?", options: ["Réinitialiser l'adresse IP du SBU.", "Réinitialiser le volume tampon dans l'onglet \"Valeurs actuelles\" du menu État.", "Modifier le mot de passe de l'utilisateur.", "Passer la vanne DHS 4.0 en mode manuel."], correct: 1, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Si non, que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    "POST_TRAITEMENT DE L'AIR": [
        { q: "Comment est composée une ligne avec une cuve “humide” ?", options: ["Compresseur - cuve - filtre - sécheur - filtre", "Compresseur - filtre cyclonique - cuve - sécheur - filtre", "Compresseur - filtre - sécheur - filtre - cuve", "Aucune idée"], correct: 1, type: "unique" },
        { q: "Nous avons une cuve de 19L à une pression de 10 B, est-elle soumise à un contrôle d’un équipement sous pression (ESP) ?", options: ["Oui", "Non"], correct: 1, type: "unique" },
        { q: "Pourquoi (précisez pour la cuve de 19L / 10B) :", correct: "Non, car le produit P x V (10 bar x 19 L = 190 bar.L) est inférieur au seuil réglementaire de 200 bar.L exigeant les contrôles périodiques ESP.", type: "texte" },
        { q: "Pourquoi doit-on mettre en place un Aquamat ?", correct: "Pour séparer l'huile de l'eau présente dans les condensats avant leur rejet au tout-à-l'égout, afin de respecter les normes environnementales.", type: "texte" },
        { q: "Quelle est la différence entre un sécheur à adsorption et un sécheur frigorifique ?", correct: "Le sécheur frigorifique refroidit l'air pour condenser l'eau (point de rosée ~+3°C), tandis que le sécheur à adsorption fixe l'humidité sur un dessiccant (point de rosée jusqu'à -40°C ou -70°C).", type: "texte" },
        { q: "Quelle est la durée de vie de l’alumine sphérique activée ?", options: ["1 fois par an", "tous les 3 ans", "tous les 5 ans", "au bout de 10 ans"], correct: 2, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente précise vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_VARIATEUR EXPERT': [
        { q: "Pour charger un programme dans la carte mère du variateur, il vous faut :", options: ["Le SFL", "Une carte SD", "Un câble USB", "Un ordinateur", "Aucune idée"], correct: 1, type: "unique" },
        { q: "Quelle protection en tête dois-je mettre sur une machine équipée d’un variateur ?", options: ["Une protection courbe D", "Une protection courbe B avec un disjoncteur 30 mA", "Des fusibles NH de classe de service gG", "Rien", "Une protection courbe B à dispositif DDR 300mA", "Aucune idée"], correct: 2, type: "unique" },
        { q: "Quelle est la différence entre variateur STO et un variateur non STO ?", correct: "Le variateur STO (Safe Torque Off) possède une fonction de sécurité intégrée qui coupe le couple moteur en toute sécurité sans couper l'alimentation globale du variateur.", type: "texte" },
        { q: "Dois-je vérifier le sens de rotation d’un moteur avec un variateur ?", options: ["Non pas la peine, le variateur fera le nécessaire", "Oui"], correct: 1, type: "unique" },
        { q: "Si oui, avec quel outil (précisez la réponse précédente) :", correct: "Avec un contrôleur/indicateur de sens de rotation de phase (ou visu directe en rotation manuelle/impulsion).", type: "texte" },
        { q: "Le BOP est-il fourni avec le compresseur ?", options: ["Oui pour le variateur de puissance", "Oui pour le variateur des moto-ventilateurs", "Non", "Oui jusqu’à fin 2023, après cette date non"], correct: 3, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente précise vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_VIS SECHE': [
        { q: "Pourquoi y a-t-il 2 blocs de compression sur les vis sèches ?", correct: "Pour atteindre la pression finale souhaitée sans échauffement excessif, la compression se fait en 2 étages (BP et HP) avec un refroidissement intermédiaire.", type: "texte" },
        { q: "À quelle température l’air sort du 1er étage de compression ?", options: ["80 °C", "180 °C", "280 °C", "Aucune idée"], correct: 1, type: "unique" },
        { q: "À quoi servent les amortisseurs de pulsations ?", correct: "À réduire les ondes de choc et vibrations acoustiques/mécaniques générées par le refoulement haute fréquence de l'air non lubrifié.", type: "texte" },
        { q: "Peut-on avoir un compresseur à vis sèche avec un sécheur intégré ?", options: ["Oui", "Non"], correct: 0, type: "unique" },
        { q: "Quel type de contrôleur trouve-t-on sur les vis sèches ?", options: ["Kaeser Control", "SC 1", "Sigma Control 2 / SC 2", "Aucun"], correct: 2, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente précise vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_BASIC TRAINING': [
        { q: "Savez-vous lire un schéma électrique ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Avez-vous des notions concernant le fonctionnement d'un compresseur d'air ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Pouvez-vous l'expliquer facilement ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Quelles sont les fonctions de l'huile ?", options: ["Pour avoir un meilleur contrôle de la température", "Pour lubrifier les roulements", "Pour nettoyer l'air ambiant", "Pour empêcher les rotors de se toucher", "Je ne sais pas"], correct: [0, 1, 3], type: "multiple" },
        { q: "Pouvez-vous effectuer une maintenance gamme B ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "À quel moment doit-on faire une maintenance gamme B ?", options: ["3 000h", "6 000h", "12 000h"], correct: 1, type: "unique" },
        { q: "Pouvez-vous expliquer le fonctionnement d'un sécheur à adsorption ?", options: ["Oui", "Non"], type: "personnel" },
        { q: "Indiquer la durée de vie de l'alumine :", options: ["2 ans", "4 ans", "5 ans", "10 ans"], correct: 1, type: "unique" },
        { q: "Quel type de protection dois-je mettre en place sur une machine SFC ?", options: ["Disjoncteur courbe D", "Fusible NH de classe gG", "Disjoncteur courbe B (DDR) avec un différentiel 30 mA", "Disjoncteur courbe B (DDR) avec un différentiel 300 mA"], correct: 1, type: "unique" },
        { id: "regime_elec", q: "Le régime électrique du compresseur et du client n'est pas important :", options: ["Vrai", "Faux"], correct: 1, type: "unique" },
        { q: "Pourquoi (précisez pour la question précédente) :", correct: "Une incompatibilité entre le régime du client et de la machine peut détruire les équipements électroniques/variateurs et causer des défauts de sécurité d'isolement.", type: "texte" },
        { q: "Un compresseur piston peut fonctionner à 100% de son temps de travail :", options: ["Vrai", "Faux"], correct: 1, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'POST_BOOSTER, OMEGA & VIS BP': [
        { q: "Dans quel type d’industrie utilisons-nous des blocs OMEGA ?", correct: "Traitement des eaux usées (aération de bassins), transport pneumatique de matières en vrac (agroalimentaire, cimenterie, chimie), et applications sous vide/surpression.", type: "texte" },
        { q: "Quelle pression de refoulement maxi. peut atteindre un Booster type CN à DN ?", options: ["15 B", "20 B", "25 B", "35 B"], correct: 3, type: "unique" },
        { q: "Quelle pression de refoulement maxi. peut atteindre un Booster type N …. G ?", options: ["15 B", "25 B", "40 B", "45 B"], correct: 3, type: "unique" },
        { q: "Quelle pression différentielle maxi. peut atteindre un surpresseur BB … ?", options: ["1000 mbar", "8 B", "15 B", "45 B"], correct: 0, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    'quiz-final': [
        { q: "Merci de décrire ci-dessous le fonctionnement de base d'un compresseur à vis :", correct: "Aspiration de l'air ambiant, compression par la rotation de deux vis hélicoïdales réduisant le volume, lubrification/refroidissement par injection d'huile, puis séparation huile/air avant refoulement.", type: "texte" },
        { q: "À quoi sert le filtre à air ?", correct: "Capturer les poussières et impuretés de l'air ambiant avant l'aspiration pour protéger le bloc vis et l'huile de toute contamination.", type: "texte" },
        { q: "Nommer les rôles de l'huile de refroidissement :", correct: "Refroidir (évacuer la chaleur de compression), étancher (entre les vis et le carter), lubrifier (les roulements et engrenages) et protéger contre la corrosion.", type: "texte" },
        { q: "On comprime l'air dans :", options: ["Le bloc vis", "Le moteur", "La tête d'aspiration", "Je ne sais pas"], correct: 0, type: "unique" },
        { q: "Ma machine a 5 799 h de fonctionnement, je fais une gamme :", options: ["A", "B", "C", "D"], correct: 1, type: "unique" },
        { q: "Quels sont les différents types de contrôleurs utilisés par KAESER ?", options: ["Kaeser Control", "Enercom", "Sigma Control 2", "Contrôleurs PF4000", "Aucune idée"], correct: [0, 2], type: "multiple" },
        { q: "Quel matériel est nécessaire pour faire un update du SC 2 ?", options: ["Une carte SD 64Go", "Un cordon RJ45", "Une carte SD 8Go", "Rien", "Le programme d'update", "Aucune idée"], correct: [2, 4], type: "multiple" },
        { q: "Peut-on faire un update sur un SC2 MCSIO “non préparé” ?", options: ["Oui", "Non"], correct: 1, type: "unique" },
        { id: "attente_claire", q: "Aviez-vous une attente claire vis-à-vis de la formation ?", options: ["Oui", "Non"], type: "personnel" },
        { id: "details_attente", q: "Si oui, à quoi vous attendiez-vous ?", type: "texte_conditionnel", condition: "attente_claire", valeur_declencheur: "Oui" },
        { q: "Le contenu de la formation a-t-il répondu à vos attentes ?", options: ["Oui", "Non"], type: "personnel_avec_commentaire", placeholder_si_non: "Non = que vous a-t-il manqué ?" },
        { q: "La formation a-t-elle couvert les sujets que vous attendiez ?", options: ["Oui", "Partiellement", "Non"], type: "personnel" },
        { q: "Avez-vous acquis de nouvelles informations ?", options: ["Aucune", "Peu", "Beaucoup", "Ne se prononce pas"], type: "personnel" }
    ],

    // 3. ÉVALUATION FORMATEUR
    'evaluation-questions': [
        { section: "Évaluation de l'organisation", q: "J'ai eu le sentiment d'être suffisamment informé(e) avant la formation", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation de l'organisation", q: "Le lieu et les équipements sur place étaient bien adaptés pour la formation", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation de l'organisation", q: "Les dates de la formation ont été respectées ou nous avons été suffisamment informés des changements", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation de l'organisation", q: "Il y avait suffisamment de temps pour les pauses et la détente", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation de l'organisation", q: "La planification des dates était satisfaisante", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation de l'organisation", q: "Qu'est-ce qui, de votre point de vue, pourrait encore être amélioré sur le plan de l'organisation ?", type: "texte" },
        { section: "Contenu de la formation", q: "Les contenus de la formation étaient d'actualité et bien choisis", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Contenu de la formation", q: "La documentation pour les participants était utile", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Contenu de la formation", q: "L'étendue du sujet traité était bien adaptée", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Contenu de la formation", q: "Le niveau de complexité des sujets était adapté", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Contenu de la formation", q: "La qualité des supports pédagogiques était satisfaisante", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Contenu de la formation", q: "Qu'est-ce que vous auriez aimé avoir en plus, sur le plan du contenu ?", type: "texte" },
        { section: "Évaluation du formateur", q: "Le formateur connaît parfaitement son sujet", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation du formateur", q: "Les explications étaient claires", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation du formateur", q: "L'attitude du formateur a contribué à installer une ambiance propice à l'apprentissage", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation du formateur", q: "Le formateur a adapté sa pédagogie au groupe de participants", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation du formateur", q: "Le formateur était-il disponible et ouvert aux questions", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Évaluation du formateur", q: "Qu'est-ce que le formateur aurait pu faire mieux ?", type: "texte" },
        { section: "Intérêt pratique", q: "La formation a été très utile pour mon travail", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Intérêt pratique", q: "Je pense pouvoir facilement mettre en application au quotidien ce que j'ai appris", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Intérêt pratique", q: "Les sujets traités et les connaissances acquises vont améliorer ma productivité", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Intérêt pratique", q: "La formation a laissé une place suffisante aux exercices pratiques", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Intérêt pratique", q: "Je me sens bien préparé(e) à mettre moi-même en application ce que j'ai appris", options: ["Pas du tout d'accord", "Pas tout à fait d'accord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"] },
        { section: "Conclusion", q: "Qu'est-ce qui vous a paru le plus utile ?", type: "texte" },
        { section: "Conclusion", q: "Qu'est-ce qui vous a paru le moins utile ?", type: "texte" },
        { section: "Conclusion", q: "Si vous aviez deux changements à proposer ?", type: "texte" },
        { section: "Conclusion", q: "Autres remarques", type: "texte" }
    ]
};

const TEXTES_INTRO_PREFORM = {
    'AIR COMPRIMÉ NOVICES': { obj: "Permettre aux stagiaires d'être capable de comprendre les bases de l'air comprimé, la construction / le fonctionnement d'un compresseur à vis lubrifiée et distinguer les différentes gammes d'entretien et pièces d'origine." },
    'BASIC TRAINING': { obj: "Permettre aux stagiaires d'être rapidement autonomes dans le domaine de l'air comprimé, et acquérir les connaissances fondamentales de l'Industrie sur un programme intensif d'une semaine." },
    'BOOSTER, OMEGA & VIS BP': { obj: "Permettre aux stagiaires d'être capable de comprendre la construction et le fonctionnement d'un surpresseur 'Booster' et des compresseurs basse pression 'OMEGA' et 'Vis BP', distinguer les différentes gammes d'entretien et pièces d'origine et comprendre le fonctionnement des SIGMA CONTROL 2." },
    'INDUSTRIE 1': { obj: "Permettre aux stagiaires d'être capable de comprendre le fonctionnement du compresseur à vis lubrifiée, reconnaître les pièces principales, connaître les gammes de maintenance, comprendre le fonctionnement des contrôleurs (Sigma Control Basic, Sigma Control 1, Sigma Control 2)." },
    'INDUSTRIE 2': { obj: "Permettre aux stagiaires d'approfondir les connaissances de l'air comprimé et la construction / le fonctionnement d'un compresseur à vis lubrifiée et de connaître les conditions d'exploitation et la maintenance pour les compresseurs lubrifiés. D'être capable de distinguer les différentes gammes d'entretien et pièces d'origine, comprendre le fonctionnement des SIGMA CONTROL et savoir reconnaître les défauts et relevés de données pour étude." },
    'INDUSTRIE 3': { obj: "Permettre aux stagiaires d'approfondir les connaissances du fonctionnement des SIGMA CONTROL 2 et de comprendre le fonctionnement des variateurs SINAMICS. D'être capable d'interpréter les résultats de contrôle des moteurs de puissance, d'analyser les différents dommages sur les roulements et pouvoir les remplacer sur le moteur de puissance." },
    'MISE EN SERVICE STATION': { obj: "Permettre aux stagiaires d'être capable d'acquérir les bonnes pratiques d'une mise en service de compresseur, sécheur, cuve..., de distinguer les différentes gammes d'entretien et les points à vérifier. De comprendre les réglages du SIGMA CONTROL 2 et ceux spécifiques aux variateurs." },
    'TP MOBILAIR': { obj: "Permettre aux stagiaires d'être capable de comprendre le fonctionnement du compresseur de chantier, distinguer les gammes de maintenance, de comprendre le fonctionnement des contrôleurs (Sigma Control Smart, Sigma Control Mobil, Sigma Control Mobil 2) et savoir modifier leurs paramètres." },
    'TP MOBILAIR ELECTRIQUE': { obj: "Permettre aux stagiaires d'être capable de comprendre les bases de l'air comprimé et le fonctionnement d'un compresseur de chantier électrique, distinguer les gammes de maintenance, et savoir lire un schéma électrique." },
    'SAM - Fonctions avancées': { obj: "Permettre aux stagiaires d'approfondir les connaissances du fonctionnement du SAM, d'être capable de faire un update, importer une configuration, analyser les messages d'erreur, importer une sauvegarde, installer et câbler une installation d'un SAM sur site client." },
    'SAM - Formule complète': { obj: "Permettre aux stagiaires d'être capable de comprendre le fonctionnement du SAM, de faire un update, importer une configuration, analyser les messages d'erreur, importer une sauvegarde, installer et câbler une installation d'un SAM sur site client." },
    "TRAITEMENT DE L'AIR": { obj: "Permettre aux stagiaires de comprendre les composants d'une station d'air comprimé et de revoir les bases de fonctionnement des sécheurs frigorifiques et adsorption. D'être capable de distinguer les différentes pannes et comprendre le fonctionnement des contrôleurs." },
    'VARIATEUR EXPERT': { obj: "Permettre aux stagiaires de perfectionner les connaissances d'un variateur, d'être capable de reconnaître les pièces internes, de dépanner le variateur et le reprogrammer." },
    'VIS SECHE': { obj: "Permettre aux stagiaires d'être capable de comprendre les bases de l'air comprimé du compresseur à vis sèche, sa construction / son fonctionnement, de distinguer les gammes d'entretien, et de comprendre et appliquer les spécificités vis sèche sans le Sigma Control 2." }
};

const CODES_FORMATIONS = {
    "AIR COMPRIMÉ NOVICES": "NOVkaeser",
    "BASIC TRAINING": "BASICkaeser",
    "BOOSTER, OMEGA & VIS BP": "BOOSTERkaeser",
    "INDUSTRIE 1": "INDUS1kaeser",
    "INDUSTRIE 2": "INDUS2kaeser",
    "INDUSTRIE 3": "INDUS3kaeser",
    "MISE EN SERVICE STATION": "MISEkaeser",
    "SAM - Fonctions avancées": "SAM1kaeser",
    "SAM - Formule complète": "SAMcomkaeser",
    "TP MOBILAIR": "MOBIkaeser",
    "TP MOBILAIR ELECTRIQUE": "MOBEleckaeser",
    "TRAITEMENT DE L'AIR": "KAESERAir",
    "VARIATEUR EXPERT": "EXPERTVAR",
    "VIS SECHE": "KAESERvis"
};

// ==========================================
// VARIABLES DE L'APPLICATION
// ==========================================
let formationSelectionnee = ""; 
let moduleActuel = ""; 
let indexQuestion = 0; 
let reponsesStagiaire = []; 
let progressionFormations = {}; // Stocke la progression séparément pour chaque formation

// Formations déjà déverrouillées par le code d'accès : le code n'est demandé qu'une seule fois par formation
let formationsDeverrouillees = {};
try { formationsDeverrouillees = JSON.parse(sessionStorage.getItem('kaeser_codes_ok') || '{}'); } catch (e) {}
function memoriserDeverrouillage(formation) {
    formationsDeverrouillees[formation] = true;
    try { sessionStorage.setItem('kaeser_codes_ok', JSON.stringify(formationsDeverrouillees)); } catch (e) {}
}

// INITIALISATION & RESTAURATION AUTO DE LA SESSION
window.addEventListener('DOMContentLoaded', () => {
    restaurerSession();
});

function sauvegarderSession() {
    const data = {
        nom: document.getElementById('nom')?.value || "",
        prenom: document.getElementById('prenom')?.value || "",
        societe: document.getElementById('societe')?.value || "",
        experience: document.getElementById('experience')?.value || "",
        formationSelectionnee: formationSelectionnee,
        progressionFormations: progressionFormations
    };
    localStorage.setItem('kaeser_portal_session', JSON.stringify(data));
}

function restaurerSession() {
    const saved = localStorage.getItem('kaeser_portal_session');
    if (!saved) return;
    try {
        const data = JSON.parse(saved);
        if (data.nom) document.getElementById('nom').value = data.nom;
        if (data.prenom) document.getElementById('prenom').value = data.prenom;
        if (data.societe) document.getElementById('societe').value = data.societe;
        if (data.experience) document.getElementById('experience').value = data.experience;
        
        progressionFormations = data.progressionFormations || {};

        if (data.nom && data.prenom && data.societe) {
            if (data.formationSelectionnee) {
                document.getElementById('liste-formations').value = data.formationSelectionnee;
                changerFormation();
            }
            switchTo(['user-info'], 'selection-module');
        }
    } catch(e) {
        console.error("Erreur restaure session", e);
    }
}

function changerFormation() {
    formationSelectionnee = document.getElementById('liste-formations').value;
    const badge = document.getElementById('formation-active-badge');
    
    if (formationSelectionnee) {
        if (badge) {
            badge.style.display = 'inline-block';
            badge.textContent = `Formation : ${formationSelectionnee}`;
        }
    } else {
        if (badge) badge.style.display = 'none';
    }

    mettreAJourBadgesApresRetour();
    sauvegarderSession();
}

function mettreAJourBadgesApresRetour() {
    const btnPreform = document.getElementById('btn-preform');
    const lockedModules = document.getElementById('locked-modules');
    const btnQuizPost = document.getElementById('btn-quiz-post');
    const postQuizOnly = document.getElementById('post-quiz-only');

    const prog = progressionFormations[formationSelectionnee] || { pre: false, post: false };

    if (prog.pre) {
        if (btnPreform) btnPreform.style.display = 'none';
        if (lockedModules) lockedModules.style.display = 'block';
    } else {
        if (btnPreform) btnPreform.style.display = 'block';
        if (lockedModules) lockedModules.style.display = 'none';
    }

    if (prog.post) {
        if (btnQuizPost) btnQuizPost.style.display = 'none';
        if (postQuizOnly) postQuizOnly.style.display = 'block';
    } else {
        if (btnQuizPost) btnQuizPost.style.display = 'block';
        if (postQuizOnly) postQuizOnly.style.display = 'none';
    }
}

/* ---------------- TOAST NOTIFICATIONS ---------------- */
function notify(message, type = "info") {
    const host = document.getElementById('toast-host');
    if (!host) return;
    const el = document.createElement('div');
    el.className = 'toast' + (type === 'error' ? ' err' : '');
    const icon = type === 'error'
        ? '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#fff" stroke-width="1.6"/><path d="M10 6v5" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="13.5" r="1" fill="#fff"/></svg>'
        : '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#ffc700" stroke-width="1.6"/><path d="M6.5 10.2l2.2 2.2 4.8-5" stroke="#ffc700" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    el.innerHTML = icon + '<span>' + message + '</span>';
    host.appendChild(el);
    setTimeout(() => {
        el.classList.add('leaving');
        setTimeout(() => el.remove(), 250);
    }, 3200);
}

/* ---------------- MODAL CODE D'ACCÈS ---------------- */
function askCode(formationName) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
          <div class="modal-box">
            <h3>Code d'accès requis</h3>
            <p>Formation : <strong>${formationName}</strong></p>
            <input type="text" id="modal-code-input" placeholder="Saisir le code" autocomplete="off">
            <div class="modal-actions">
              <button class="btn btn-secondary" id="modal-cancel">Annuler</button>
              <button class="btn btn-primary" id="modal-confirm">Valider</button>
            </div>
          </div>`;
        document.body.appendChild(overlay);
        const input = overlay.querySelector('#modal-code-input');
        input.focus();
        const close = (value) => { overlay.remove(); resolve(value); };
        overlay.querySelector('#modal-confirm').onclick = () => close(input.value);
        overlay.querySelector('#modal-cancel').onclick = () => close(null);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') close(input.value); });
        overlay.addEventListener('click', (e) => { if (e.target === overlay) close(null); });
    });
}

/* ---------------- GAUGE (MANOMÈTRE) ---------------- */
const GAUGE_CIRCUMFERENCE = 2 * Math.PI * 32;
const MODULE_NAMES = { 'quiz-final': 'Quiz de formation', 'evaluation-questions': "Évaluation formateur" };

function updateGauge(current, total, moduleLabel) {
    const pct = total ? current / total : 0;
    const offset = GAUGE_CIRCUMFERENCE * (1 - pct);
    const fillEl = document.getElementById('gauge-fill');
    const pctEl = document.getElementById('gauge-pct');
    const nameEl = document.getElementById('gauge-module-name');
    const countEl = document.getElementById('gauge-step-count');
    
    if(fillEl) fillEl.style.strokeDashoffset = offset;
    if(pctEl) pctEl.textContent = Math.round(pct * 100) + '%';
    if(nameEl) nameEl.textContent = moduleLabel;
    if(countEl) countEl.textContent = `Question ${Math.min(current + 1, total)} / ${total}`;
}

function switchTo(hideIds, showId) {
    hideIds.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });
    const el = document.getElementById(showId);
    if(el) {
        el.style.display = 'block';
        el.classList.remove('view-fade-enter'); 
        void el.offsetWidth; 
        el.classList.add('view-fade-enter');
    }
}

function validerInfos() {
    const champsVides = ['nom', 'prenom', 'societe', 'experience'].some(id => document.getElementById(id).value.trim() === "");
    if (champsVides) return notify("Merci de compléter tous les champs.", "error");
    sauvegarderSession();
    switchTo(['user-info'], 'selection-module');
}

async function verifierEtDemarrer(typeBouton) {
    formationSelectionnee = document.getElementById('liste-formations').value;
    if (formationSelectionnee === "") return notify("Veuillez choisir une formation.", "error");

    // Le code d'accès n'est demandé qu'à la pré-formation (le quiz et l'évaluation ne sont accessibles qu'ensuite)
    if (typeBouton === 'pre-formation' && !formationsDeverrouillees[formationSelectionnee]) {
        const codeSaisi = await askCode(formationSelectionnee);
        if (codeSaisi === null) return;
        if (codeSaisi.trim() !== CODES_FORMATIONS[formationSelectionnee]) {
            return notify("Code incorrect. Merci de réessayer.", "error");
        }
        memoriserDeverrouillage(formationSelectionnee);
    }

    sauvegarderSession();
    if (typeBouton === 'evaluation') {
        switchTo(['selection-module'], 'eval-info-area');
    } else if (typeBouton === 'pre-formation') {
        moduleActuel = banquesQuestions[formationSelectionnee] ? formationSelectionnee : 'INDUSTRIE 2';
        afficherIntroduction();
    } else {
        let clePost = "POST_" + formationSelectionnee;
        if (banquesQuestions[clePost]) {
            moduleActuel = clePost;
        } else {
            moduleActuel = 'quiz-final';
        }
        demarrerModule();
    }
}

function afficherIntroduction() {
    switchTo(['selection-module'], 'intro-area');
    let info = TEXTES_INTRO_PREFORM[formationSelectionnee] || TEXTES_INTRO_PREFORM['INDUSTRIE 2'];
    
    let texteIntro = `
        <h2 style="font-family:'Barlow Semi Condensed',sans-serif; color:#1a1a1a; margin-top:0;">Cher Stagiaire,</h2>
        <p>Dans le cadre de cette formation, nous vous remercions de renseigner ce questionnaire pour nous permettre de :</p>
        <ul style="margin-left:20px; padding-left:0;">
            <li>S'assurer des prérequis et du niveau de connaissance dans le domaine ciblé, de façon à déterminer le contenu de formation et adapter la pédagogie.</li>
            <li>Vérifier l'adhésion au projet de formation, faire émerger les attentes et les besoins en termes de contenu de formation, repérer les blocages ou les freins éventuels, qu'ils soient d'ordre pratique, cognitif ou motivationnel.</li>
        </ul>
        <hr style="border:0; border-top:1px solid #dde5ec; margin:18px 0;">
        <h3 style="font-family:'Barlow Semi Condensed',sans-serif; color:#1a1a1a;">Objectif de la formation :</h3>
        <p>${info.obj}</p>
        <p style="font-size:0.9em; color:#5c594e; font-style:italic; margin-top:15px;">Ce questionnaire est très important. Il permettra au formateur d'adapter au mieux les contenus à vos besoins et attentes.</p>
    `;
    document.getElementById('intro-content').innerHTML = texteIntro;
}

function demarrerQuestionsEval() {
    if (!document.getElementById('nom-formateur').value.trim() || !document.getElementById('date-formation').value || !document.getElementById('lieu-formation').value.trim()) {
        return notify("Merci de renseigner les détails de la session.", "error");
    }
    moduleActuel = 'evaluation-questions';
    demarrerModule();
}

function lancerQuestionsApresIntro() {
    demarrerModule();
}

function demarrerModule() {
    indexQuestion = 0; 
    reponsesStagiaire = []; 
    switchTo(['intro-area', 'selection-module', 'eval-info-area'], 'quiz-area');
    afficherQuestion();
}

function afficherQuestion() {
    let q = banquesQuestions[moduleActuel][indexQuestion];
    if (q.type === "texte_conditionnel") {
        let repPrecedente = reponsesStagiaire.find(r => r && r.id === q.condition);
        if (!repPrecedente || repPrecedente.texte !== q.valeur_declencheur) {
            reponsesStagiaire[indexQuestion] = { id: q.id, texte: "N/A", index: null };
            suivant(); return;
        }
    }

    const total = banquesQuestions[moduleActuel].length;
    const label = MODULE_NAMES[moduleActuel] || formationSelectionnee;
    updateGauge(indexQuestion, total, label);

    const btnPrec = document.getElementById('btn-question-precedente');
    if (btnPrec) {
        btnPrec.style.display = (indexQuestion > 0) ? 'inline-block' : 'none';
    }

    let section = q.section ? `<div class="section-header">${q.section}</div>` : "";
    document.getElementById('question-text').innerHTML = `${section}<h3>${q.q}</h3>`;
    let html = "";
    let valExistante = reponsesStagiaire[indexQuestion] ? reponsesStagiaire[indexQuestion].texte : "";

    if (q.type === "texte" || q.type === "texte_conditionnel") {
        html = `<textarea id="txt-rep" placeholder="Votre réponse ici...">${valExistante === "N/A" ? "" : valExistante}</textarea><button class="btn btn-primary" onclick="sauverTexte()">Valider</button>`;
    } else if (q.type === "personnel_avec_commentaire") {
        q.options.forEach(opt => html += `<button class="option-btn" onclick="sauverOptionSpeciale('${opt}')"><span class="bullet"></span>${opt}</button>`);
        html += `<textarea id="txt-complement" style="margin-top:10px;" placeholder="${q.placeholder_si_non}"></textarea>`;
    } else if (q.type === "multiple") {
        q.options.forEach((opt, i) => {
            let checked = (reponsesStagiaire[indexQuestion] && reponsesStagiaire[indexQuestion].indices && reponsesStagiaire[indexQuestion].indices.includes(i)) ? "checked" : "";
            html += `<div class="check-container" onclick="let cb=this.querySelector('input'); cb.checked=!cb.checked;">
                <input type="checkbox" class="check-opt" value="${i}" id="opt${i}" ${checked}>
                <label for="opt${i}">${opt}</label>
            </div>`;
        });
        html += `<button class="btn btn-primary" onclick="sauverMultiple()">Valider</button>`;
    } else {
        q.options.forEach((opt, i) => html += `<button class="option-btn" onclick="sauverOption(${i})"><span class="bullet"></span>${opt}</button>`);
    }
    document.getElementById('options-container').innerHTML = html;
}

function questionConditionnelleIgnoree(q) {
    if (q.type !== "texte_conditionnel") return false;
    const rep = reponsesStagiaire.find(r => r && r.id === q.condition);
    return !rep || rep.texte !== q.valeur_declencheur;
}

function precedent() {
    if (indexQuestion > 0) {
        indexQuestion--;
        // On saute les questions conditionnelles qui n'ont pas été posées
        while (indexQuestion > 0 && questionConditionnelleIgnoree(banquesQuestions[moduleActuel][indexQuestion])) {
            indexQuestion--;
        }
        afficherQuestion();
    }
}

function sauverOption(i) {
    let q = banquesQuestions[moduleActuel][indexQuestion];
    reponsesStagiaire[indexQuestion] = { id: q.id || null, texte: q.options[i], index: i };
    suivant();
}

function sauverOptionSpeciale(choix) {
    let complement = document.getElementById('txt-complement').value.trim();
    if (choix === "Non" && complement === "") return notify("Merci de préciser ce qu'il vous a manqué.", "error");
    reponsesStagiaire[indexQuestion] = { texte: choix + (complement ? " (Détail: " + complement + ")" : ""), index: null };
    suivant();
}

function sauverMultiple() {
    let checkboxes = document.querySelectorAll('.check-opt:checked');
    let indices = Array.from(checkboxes).map(cb => parseInt(cb.value));
    if (indices.length === 0) return notify("Sélectionnez au moins une réponse.", "error");
    let q = banquesQuestions[moduleActuel][indexQuestion];
    reponsesStagiaire[indexQuestion] = { texte: indices.map(idx => q.options[idx]).join(", "), indices: indices };
    suivant();
}

function sauverTexte() {
    let val = document.getElementById('txt-rep').value.trim();
    let q = banquesQuestions[moduleActuel][indexQuestion];
    reponsesStagiaire[indexQuestion] = { id: q.id || null, texte: val || "N/A", index: null };
    suivant();
}

function suivant() {
    indexQuestion++;
    if (indexQuestion < banquesQuestions[moduleActuel].length) {
        afficherQuestion();
    } else {
        terminer();
    }
}

function echapperHtml(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function terminer() {
    const total = banquesQuestions[moduleActuel].length;
    updateGauge(total, total, MODULE_NAMES[moduleActuel] || formationSelectionnee);

    switchTo(['quiz-area'], 'result-area');
    let label = (moduleActuel === 'evaluation-questions') ? "EVAL" : (moduleActuel === formationSelectionnee ? "Pre" : "Post");
    
    if (!progressionFormations[formationSelectionnee]) {
        progressionFormations[formationSelectionnee] = { pre: false, post: false };
    }

    if (moduleActuel === formationSelectionnee) {
        progressionFormations[formationSelectionnee].pre = true;
    }
    if (moduleActuel !== 'evaluation-questions' && moduleActuel !== formationSelectionnee) {
        progressionFormations[formationSelectionnee].post = true;
    }
    sauvegarderSession();

    let recapHTML = "";
    let totalQuestionsNotees = 0;
    let scoreObtenu = 0;

    if (moduleActuel !== 'evaluation-questions' && moduleActuel !== formationSelectionnee) {
        recapHTML = `<table class="recap-table"><thead><tr><th>Question</th><th>Votre réponse</th><th>Correction</th></tr></thead><tbody>`;
        
        banquesQuestions[moduleActuel].forEach((q, idx) => {
            let status = "";
            let rep = reponsesStagiaire[idx] || { texte: "N/A", index: null, indices: [] };

            if (q.type === "personnel" || q.type === "texte_conditionnel" || q.type === "personnel_avec_commentaire" || q.type === "texte") {
                status = `<span class="badge badge-info">Avis / Rep</span>`;
            } else if (q.type === "multiple") {
                totalQuestionsNotees++;
                let isCorrect = JSON.stringify((rep.indices || []).slice().sort()) === JSON.stringify(q.correct.slice().sort());
                if (isCorrect) { scoreObtenu++; status = `<span class="badge badge-ok">✓ Correct</span>`; }
                else { status = `<span class="badge badge-ko">✕ Incorrect</span>`; }
            } else {
                totalQuestionsNotees++;
                let isCorrect = rep.index === q.correct;
                if (isCorrect) { scoreObtenu++; status = `<span class="badge badge-ok">✓ Correct</span>`; }
                else { status = `<span class="badge badge-ko">✕ Incorrect</span>`; }
            }
            recapHTML += `<tr><td>${q.q}</td><td>${echapperHtml(rep.texte)}</td><td>${status}</td></tr>`;
        });
        recapHTML += `</tbody></table>`;
    } else {
        // Pré-formation et évaluation du formateur : récapitulatif des réponses (sans correction)
        recapHTML = `<table class="recap-table"><thead><tr><th>Question</th><th>Votre réponse</th></tr></thead><tbody>`;
        banquesQuestions[moduleActuel].forEach((q, idx) => {
            const rep = reponsesStagiaire[idx] || { texte: "N/A" };
            // On masque les questions conditionnelles qui n'ont pas été posées
            if (q.type === "texte_conditionnel" && rep.texte === "N/A") return;
            recapHTML += `<tr><td>${q.q}</td><td>${echapperHtml(rep.texte)}</td></tr>`;
        });
        recapHTML += `</tbody></table>`;
    }

    let bannerScore = "";
    if (totalQuestionsNotees > 0) {
        let pctScore = Math.round((scoreObtenu / totalQuestionsNotees) * 100);
        let statusClass = pctScore >= 70 ? "badge-ok" : "badge-ko";
        bannerScore = `
            <div class="result-banner" style="text-align:center; margin-bottom:15px;">
                <h3 style="margin:0;">Votre Score : <span class="badge ${statusClass}" style="font-size:18px;">${scoreObtenu} / ${totalQuestionsNotees} (${pctScore}%)</span></h3>
            </div>
        `;
    }

    let boutonAction = "";
    if (moduleActuel === 'evaluation-questions') {
        boutonAction = `<div class="result-banner">
            <h3>L'équipe KAESER Formation vous remercie !</h3>
            <p>Merci pour votre retour.</p>
        </div>
        <button onclick="quitterApplication()" class="btn btn-primary" style="margin-top:18px;">Terminer et quitter</button>`;
    } else {
        boutonAction = `<button onclick="retourMenu()" class="btn btn-secondary" style="margin-top:14px;">Passer à la suite / Retour au menu</button>`;
    }

    document.getElementById('result-area').innerHTML = `
        <h2>Terminé !</h2>
        <p class="sub">Voici le récapitulatif de vos réponses.</p>
        ${bannerScore}
        ${recapHTML}
        <div id="statut-envoi" class="module-done" style="color:var(--slate-600); background:var(--slate-50); border-color:var(--slate-200);">
          Envoi en cours…
        </div>
        ${boutonAction}
    `;

    envoyerAuDrive({
        etape: label,
        score: totalQuestionsNotees > 0 ? `${scoreObtenu}/${totalQuestionsNotees}` : ""
    });
}

async function envoyerAuDrive(extra) {
    const questions = banquesQuestions[moduleActuel];
    const payload = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        societe: document.getElementById('societe').value,
        experience: document.getElementById('experience').value,
        formation: formationSelectionnee,
        formateur: document.getElementById('nom-formateur')?.value || "",
        dateFormation: document.getElementById('date-formation')?.value || "",
        lieu: document.getElementById('lieu-formation')?.value || "",
        reponses: questions.map((q, i) => ({
            question: q.q,
            reponse: reponsesStagiaire[i] ? reponsesStagiaire[i].texte : "N/A"
        })),
        ...extra
    };

    const statut = document.getElementById('statut-envoi');
    const options = {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
    };
    const ok = () => { if (statut) { statut.style.cssText = ""; statut.textContent = "✓ Réponses enregistrées"; } };
    const ko = (msg) => {
        if (statut) {
            statut.style.cssText = "color:#e35555; background:#fdecec; border-color:#f5c2c2;";
            statut.textContent = "Échec de l'envoi (" + msg + "). Prévenez le formateur.";
        }
    };

    try {
        // Essai 1 : envoi normal avec lecture de la confirmation
        const resp = await fetch(URL_APPS_SCRIPT, options);
        const texte = await resp.text();
        let retour = {};
        try { retour = JSON.parse(texte); } catch (_) {}
        if (!resp.ok || retour.ok !== true) {
            throw new Error("HTTP " + resp.status + " / " + texte.slice(0, 120));
        }
        ok();
    } catch (e1) {
        console.warn("Essai 1 échoué :", e1);
        try {
            // Essai 2 : envoi sans lecture de la réponse (contourne un blocage CORS)
            await fetch(URL_APPS_SCRIPT, { ...options, mode: "no-cors" });
            if (statut) {
                statut.style.cssText = "";
                statut.textContent = "✓ Réponses envoyées (confirmation non disponible)";
            }
        } catch (e2) {
            console.error("Essai 2 échoué :", e2);
            ko((e2 && e2.message ? e2.message : e2) + " | " + (e1 && e1.message ? e1.message : e1));
        }
    }
}

function quitterApplication() {
    // Efface les données du stagiaire (utile sur un poste partagé)
    try {
        localStorage.removeItem('kaeser_portal_session');
        sessionStorage.removeItem('kaeser_codes_ok');
    } catch (e) {}
    progressionFormations = {};
    formationsDeverrouillees = {};
    formationSelectionnee = "";
    moduleActuel = "";
    reponsesStagiaire = [];
    ['nom', 'prenom', 'societe', 'experience', 'nom-formateur', 'date-formation', 'lieu-formation'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    const liste = document.getElementById('liste-formations');
    if (liste) liste.value = "";
    const badge = document.getElementById('formation-active-badge');
    if (badge) badge.style.display = 'none';

    // Un navigateur ne peut fermer que les pages ouvertes par un script : on essaie, sinon on affiche un écran de fin
    try { window.close(); } catch (e) {}
    document.getElementById('result-area').innerHTML = `
        <h2>Merci !</h2>
        <p class="sub">Votre session est terminée. Vous pouvez fermer cette page.</p>
        <button onclick="nouveauStagiaire()" class="btn btn-secondary">Nouveau stagiaire</button>`;
}

function nouveauStagiaire() {
    switchTo(['result-area', 'selection-module', 'eval-info-area', 'intro-area', 'quiz-area'], 'user-info');
    mettreAJourBadgesApresRetour();
}

function retourMenu() {
    switchTo(['result-area'], 'selection-module');
    mettreAJourBadgesApresRetour();
}