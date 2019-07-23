/*
<script type="text/javascript">

  for (var i = 0; i < 10; i++) {
    alert("Neck! / Tease! / Taquine! / Brinca!");
    if(i == 4) {
      var weiterNecken = confirm("Dörf ii dii wittr Neckä? / May I keep teasing you? / Puis-je continuer à te taquiner? / Posso continuar provocar contigo? :b");
      if(!weiterNecken) {
        break;
      }
    }
  }

</script>
*/

var dictionary = [

                    //AAA



                    //__________________________________________________________



                    //__________________________________________________________

                    //BBB



                    //CCC



                    //DDD



                    //EEE

                    {
                      word:"essen",
                      def:"eat / manger / comer ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Deutsch".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "ich" + " esse".bold().fontcolor("#0BAEFF"),
                          "du" + " isst".bold().fontcolor("#0BAEFF"),
                          "er/sie/es" + " isst".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "wir" + " essen".bold().fontcolor("#0BAEFF"),
                          "ihr" + " esst".bold().fontcolor("#0BAEFF"),
                          "sie" + " essen".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Präsens".fontcolor("#F1ED7C"),
                          ("Ihr " + "esst".bold().fontcolor("#0BAEFF") + " den gegrillten Mais.").fontsize(3),
                          "-".fontsize(1),
                          "Präteritum".fontcolor("#F1ED7C"),
                          ("Ihr " + "aßt".bold().fontcolor("#0BAEFF") + " den gegrillten Mais.").fontsize(3),
                          "-".fontsize(1),
                          "Perfekt".fontcolor("#F1ED7C"),
                          ("Ihr " + "habt".bold().fontcolor("#FF5E5E") + " den gegrillten Mais" + " gegessen".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                          "-".fontsize(1),
                          "Futur I".fontcolor("#F1ED7C"),
                          ("Ihr " + "werdet".bold().fontcolor("#FF5E5E") + " den gegrillten Mais" + " essen".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Hilfsverb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Vollverb".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"eat",
                      def:"essen / manger / comer ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "English".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "I" + " eat".bold().fontcolor("#0BAEFF"),
                          "you" + " eat".bold().fontcolor("#0BAEFF"),
                          "he/she/it" + " eats".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "we" + " eat".bold().fontcolor("#0BAEFF"),
                          "you" + " eat".bold().fontcolor("#0BAEFF"),
                          "they" + " eat".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Present".fontcolor("#F1ED7C"),
                          ("You (guys) " + "eat".bold().fontcolor("#0BAEFF") + " the grilled corn.").fontsize(3),
                          "-".fontsize(1),
                          "Preterite".fontcolor("#F1ED7C"),
                          ("You (guys) " + "ate".bold().fontcolor("#0BAEFF") + " the grilled corn.").fontsize(3),
                          "-".fontsize(1),
                          "Present Perfect".fontcolor("#F1ED7C"),
                          ("You (guys)" + " have ".bold().fontcolor("#FF5E5E") + "eaten ".bold().fontcolor("#0BAEFF") + "the grilled corn.").fontsize(3),
                          "-".fontsize(1),
                          "Future".fontcolor("#F1ED7C"),
                          ("You (guys)" + " will ".bold().fontcolor("#FF5E5E") + "eat ".bold().fontcolor("#0BAEFF") + "the grilled corn.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Auxiliary Verb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Main Verb".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"manger",
                      def:"essen / eat / comer ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Français".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "je" + " mange".bold().fontcolor("#0BAEFF"),
                          "tu" + " manges".bold().fontcolor("#0BAEFF"),
                          "il/elle/on" + " mange".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "nous" + " mangeons".bold().fontcolor("#0BAEFF"),
                          "vous" + " mangez".bold().fontcolor("#0BAEFF"),
                          "ils/elles" + " mangent".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Présent".fontcolor("#F1ED7C"),
                          ("Vous " + "mangez".bold().fontcolor("#0BAEFF") + " le maïs grillé.").fontsize(3),
                          "-".fontsize(1),
                          "Imparfait".fontcolor("#F1ED7C"),
                          ("Vous" + " mangiez ".bold().fontcolor("#0BAEFF") + "le maïs grillé.").fontsize(3),
                          "-".fontsize(1),
                          "Passé Composé".fontcolor("#F1ED7C"),
                          ("Vous" + " avez ".bold().fontcolor("#FF5E5E") + "mangé ".bold().fontcolor("#0BAEFF") + "le maïs grillé.").fontsize(3),
                          "-".fontsize(1),
                          "Futur Composé".fontcolor("#F1ED7C"),
                          ("Vous" + " allez ".bold().fontcolor("#FF5E5E") + "manger ".bold().fontcolor("#0BAEFF") + "le maïs grillé.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Verbe Auxiliaire".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbe Plaindre".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"comer",
                      def:"essen / eat / manger ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Português (BR)".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "eu" + " como".bold().fontcolor("#0BAEFF"),
                          "você" + " come".bold().fontcolor("#0BAEFF"),
                          "ele/ela" + " come".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "nós" + " comemos".bold().fontcolor("#0BAEFF"),
                          "vocês" + " comem".bold().fontcolor("#0BAEFF"),
                          "eles/elas" + " comem".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Presente".fontcolor("#F1ED7C"),
                          ("Vocês " + "comem".bold().fontcolor("#0BAEFF") + " o milho grelhado.").fontsize(3),
                          "-".fontsize(1),
                          "Perfeito".fontcolor("#F1ED7C"),
                          ("Vôces" + " comeram ".bold().fontcolor("#0BAEFF") + " o milho grelhado.").fontsize(3),
                          "-".fontsize(1),
                          "Perfeito Composto".fontcolor("#F1ED7C"),
                          ("Vôces" + " têm ".bold().fontcolor("#FF5E5E") + "comido ".bold().fontcolor("#0BAEFF") + " o milho grelhado.").fontsize(3),
                          "-".fontsize(1),
                          "Futuro Imediato".fontcolor("#F1ED7C"),
                          ("Vocês" + " vão ".bold().fontcolor("#FF5E5E") + "comer ".bold().fontcolor("#0BAEFF") + " o milho grelhado.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Verbo Auxiliar".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbo principal".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },


                    //__________________________________________________________



                    //FFF



                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________



                    //GGG



                    //__________________________________________________________

                    //HHH

                    {
                      word:"haben",
                      def:"have / avoir / ter ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Deutsch".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "ich" + " habe".bold().fontcolor("#0BAEFF"),
                          "du" + " hast".bold().fontcolor("#0BAEFF"),
                          "er/sie/es" + " hat".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "wir" + " haben".bold().fontcolor("#0BAEFF"),
                          "ihr" + " habt".bold().fontcolor("#0BAEFF"),
                          "sie" + " haben".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Präsens".fontcolor("#F1ED7C"),
                          ("Sie " + "haben".bold().fontcolor("#0BAEFF") + " eine Hund.").fontsize(3),
                          "-".fontsize(1),
                          "Präteritum".fontcolor("#F1ED7C"),
                          ("Sie " + "hatten".bold().fontcolor("#0BAEFF") + "eine Hund.").fontsize(3),
                          "-".fontsize(1),
                          "Perfekt".fontcolor("#F1ED7C"),
                          ("Sie " + "haben".bold().fontcolor("#FF5E5E") + " eine Hund" + " gehabt".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                          "-".fontsize(1),
                          "Futur I".fontcolor("#F1ED7C"),
                          ("Sie " + "werden".bold().fontcolor("#FF5E5E") + " eine Hund" + " haben".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Hilfsverb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Vollverb".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"have",
                      def:"haben / avoir / ter ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "English".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "I" + " have".bold().fontcolor("#0BAEFF"),
                          "you" + " have".bold().fontcolor("#0BAEFF"),
                          "he/she/it" + " haves".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "we" + " have".bold().fontcolor("#0BAEFF"),
                          "you" + " have".bold().fontcolor("#0BAEFF"),
                          "they" + " have".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Present".fontcolor("#F1ED7C"),
                          ("They " + "have".bold().fontcolor("#0BAEFF") + " a dog.").fontsize(3),
                          "-".fontsize(1),
                          "Preterite".fontcolor("#F1ED7C"),
                          ("They " + "had".bold().fontcolor("#0BAEFF") + " a dog.").fontsize(3),
                          "-".fontsize(1),
                          "Present Perfect".fontcolor("#F1ED7C"),
                          ("They" + " have ".bold().fontcolor("#FF5E5E") + "had ".bold().fontcolor("#0BAEFF") + "a dog.").fontsize(3),
                          "-".fontsize(1),
                          "Future".fontcolor("#F1ED7C"),
                          ("They" + " will ".bold().fontcolor("#FF5E5E") + "have ".bold().fontcolor("#0BAEFF") + "a dog.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Auxiliary Verb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Main Verb".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"avoir",
                      def:"haven / have / ter ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Français".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "j'" + " ai".bold().fontcolor("#0BAEFF"),
                          "tu" + " as".bold().fontcolor("#0BAEFF"),
                          "il/elle/on" + " a".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "nous" + " avons".bold().fontcolor("#0BAEFF"),
                          "vous" + " avez".bold().fontcolor("#0BAEFF"),
                          "ils/elles" + " ont".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Présent".fontcolor("#F1ED7C"),
                          ("Elles " + "ont".bold().fontcolor("#0BAEFF") + " un chien.").fontsize(3),
                          "-".fontsize(1),
                          "Imparfait".fontcolor("#F1ED7C"),
                          ("Elles" + " avaient ".bold().fontcolor("#0BAEFF") + "un chien.").fontsize(3),
                          "-".fontsize(1),
                          "Passé Composé".fontcolor("#F1ED7C"),
                          ("Elles" + " ont ".bold().fontcolor("#FF5E5E") + "eu ".bold().fontcolor("#0BAEFF") + "un chien.").fontsize(3),
                          "-".fontsize(1),
                          "Futur Composé".fontcolor("#F1ED7C"),
                          ("Elles" + " vont ".bold().fontcolor("#FF5E5E") + "avoir ".bold().fontcolor("#0BAEFF") + "un chien.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Verbe Auxiliaire".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbe Plaindre".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"ter",
                      def:"haben / have / avoir ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Português (BR)".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "eu" + " tenho".bold().fontcolor("#0BAEFF"),
                          "você" + " tem".bold().fontcolor("#0BAEFF"),
                          "ele/ela" + " tem".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "nós" + " temos".bold().fontcolor("#0BAEFF"),
                          "vocês" + " têm".bold().fontcolor("#0BAEFF"),
                          "eles/elas" + " têm".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Presente".fontcolor("#F1ED7C"),
                          ("Elas " + "têm".bold().fontcolor("#0BAEFF") + " um cachorro.").fontsize(3),
                          "-".fontsize(1),
                          "Perfeito".fontcolor("#F1ED7C"),
                          ("Elas" + " tiveram ".bold().fontcolor("#0BAEFF") + " um cachorro.").fontsize(3),
                          "-".fontsize(1),
                          "Perfeito Composto".fontcolor("#F1ED7C"),
                          ("Elas" + " têm ".bold().fontcolor("#FF5E5E") + "tido ".bold().fontcolor("#0BAEFF") + " um cachorro.").fontsize(3),
                          "-".fontsize(1),
                          "Futuro Imediato".fontcolor("#F1ED7C"),
                          ("Elas" + " vão ".bold().fontcolor("#FF5E5E") + "ter ".bold().fontcolor("#0BAEFF") + " um cachorro.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Verbo Auxiliar".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbo principal".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },

                    //__________________________________________________________

                    //III



                    //JJJ



                    //KKK



                    //__________________________________________________________



                    //__________________________________________________________



                    //LLL



                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________

                    //MMM



                    //__________________________________________________________



                    //__________________________________________________________

                    //NNN


                    {
                      word:"nehmen",
                      def:"take / prendre / tomar ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Deutsch".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "ich" + " nehme".bold().fontcolor("#0BAEFF"),
                          "du" + " nimmst".bold().fontcolor("#0BAEFF"),
                          "er/sie/es" + " nimmt".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "wir" + " nehmen".bold().fontcolor("#0BAEFF"),
                          "ihr" + " nehmt".bold().fontcolor("#0BAEFF"),
                          "sie" + " nehmen".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Präsens".fontcolor("#F1ED7C"),
                          ("Sie " + "nimmt".bold().fontcolor("#0BAEFF") + " ein Bad.").fontsize(3),
                          "-".fontsize(1),
                          "Präteritum".fontcolor("#F1ED7C"),
                          ("Sie " + "nahm".bold().fontcolor("#0BAEFF") + " ein Bad.").fontsize(3),
                          "-".fontsize(1),
                          "Perfekt".fontcolor("#F1ED7C"),
                          ("Sie " + "hat".bold().fontcolor("#FF5E5E") + " ein Bad" + " genommen".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                          "-".fontsize(1),
                          "Futur I".fontcolor("#F1ED7C"),
                          ("Sie " + "wird".bold().fontcolor("#FF5E5E") + " ein Bad" + " nehmen".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Hilfsverb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Vollverb".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"take",
                      def:"nehmen / prendre / tomar ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "English".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "I" + " take".bold().fontcolor("#0BAEFF"),
                          "you" + " take".bold().fontcolor("#0BAEFF"),
                          "he/she/it" + " takes".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "we" + " take".bold().fontcolor("#0BAEFF"),
                          "you" + " take".bold().fontcolor("#0BAEFF"),
                          "they" + " take".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Present".fontcolor("#F1ED7C"),
                          ("She" + " takes".bold().fontcolor("#0BAEFF") + " a bath.").fontsize(3),
                          "-".fontsize(1),
                          "Preterite".fontcolor("#F1ED7C"),
                          ("She " + "took".bold().fontcolor("#0BAEFF") + " a bath.").fontsize(3),
                          "-".fontsize(1),
                          "Present Perfect".fontcolor("#F1ED7C"),
                          ("She" + " have ".bold().fontcolor("#FF5E5E") + "taken ".bold().fontcolor("#0BAEFF") + "a bath.").fontsize(3),
                          "-".fontsize(1),
                          "Future".fontcolor("#F1ED7C"),
                          ("She" + " will ".bold().fontcolor("#FF5E5E") + "take ".bold().fontcolor("#0BAEFF") + "a bath.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Auxiliary Verb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Main Verb".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"prendre",
                      def:"nehmen / take / tomar ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Français".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "je" + " prends".bold().fontcolor("#0BAEFF"),
                          "tu" + " prends".bold().fontcolor("#0BAEFF"),
                          "il/elle/on" + " prend".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "nous" + " prenons".bold().fontcolor("#0BAEFF"),
                          "vous" + " prenez".bold().fontcolor("#0BAEFF"),
                          "ils/elles" + " prennent".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Présent".fontcolor("#F1ED7C"),
                          ("Elle " + "prend".bold().fontcolor("#0BAEFF") + " un bain.").fontsize(3),
                          "-".fontsize(1),
                          "Imparfait".fontcolor("#F1ED7C"),
                          ("Elle" + " prenait ".bold().fontcolor("#0BAEFF") + "un bain.").fontsize(3),
                          "-".fontsize(1),
                          "Passé Composé".fontcolor("#F1ED7C"),
                          ("Elle" + " a ".bold().fontcolor("#FF5E5E") + "pris ".bold().fontcolor("#0BAEFF") + "un bain.").fontsize(3),
                          "-".fontsize(1),
                          "Futur Composé".fontcolor("#F1ED7C"),
                          ("Elle" + " va ".bold().fontcolor("#FF5E5E") + "prendre ".bold().fontcolor("#0BAEFF") + "un bain.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Verbe Auxiliaire".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbe Plaindre".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },
                    {
                      word:"tomar",
                      def:"nehmen / take / prendre ".fontsize(2).bold().fontcolor("#0BAEFF"),
                      rel:[
                          "Português (BR)".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                          "▫▪▫▪▫▪▫▪▫",
                          "eu" + " tomo".bold().fontcolor("#0BAEFF"),
                          "você" + " toma".bold().fontcolor("#0BAEFF"),
                          "ele/ela" + " toma".bold().fontcolor("#0BAEFF"),
                          "-".fontsize(1),
                          "nós" + " tomamos".bold().fontcolor("#0BAEFF"),
                          "vocês" + " tomam".bold().fontcolor("#0BAEFF"),
                          "eles/elas" + " tomam".bold().fontcolor("#0BAEFF"),
                          "▫▪▫▪▫▪▫▪▫",
                          "Presente".fontcolor("#F1ED7C"),
                          ("Ela " + "toma".bold().fontcolor("#0BAEFF") + " um banho.").fontsize(3),
                          "-".fontsize(1),
                          "Perfeito".fontcolor("#F1ED7C"),
                          ("Ela" + " tomou ".bold().fontcolor("#0BAEFF") + " um banho.").fontsize(3),
                          "-".fontsize(1),
                          "Perfeito Composto".fontcolor("#F1ED7C"),
                          ("Ela" + " tem ".bold().fontcolor("#FF5E5E") + "tomado ".bold().fontcolor("#0BAEFF") + " um banho.").fontsize(3),
                          "-".fontsize(1),
                          "Futuro Imediato".fontcolor("#F1ED7C"),
                          ("Ela" + " vai ".bold().fontcolor("#FF5E5E") + "tomar ".bold().fontcolor("#0BAEFF") + " um banho.").fontsize(3),
                          "▫▪▫▪▫▪▫▪▫",
                          "Verbo Auxiliar".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbo principal".fontsize(2).fontcolor("#0BAEFF").bold(),
                        ]
                    },


                    //OOO



                    //PPP



                    //QQQ



                    //RRR



                    //SSS



                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________


                    {
                    word:"sein",
                    def:"be / être / ser ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Deutsch".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "ich" + " bin".bold().fontcolor("#0BAEFF"),
                        "du" + " bist".bold().fontcolor("#0BAEFF"),
                        "er/sie/es" + " ist".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "wir" + " sind".bold().fontcolor("#0BAEFF"),
                        "ihr" + " seid".bold().fontcolor("#0BAEFF"),
                        "sie" + " sind".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Präsens".fontcolor("#F1ED7C"),
                        ("Ich " + "bin".bold().fontcolor("#0BAEFF") + " ein Rechner.").fontsize(3),
                        "-".fontsize(1),
                        "Präteritum".fontcolor("#F1ED7C"),
                        ("Ich " + "war".bold().fontcolor("#0BAEFF") + " ein Rechner.").fontsize(3),
                        "-".fontsize(1),
                        "Perfekt".fontcolor("#F1ED7C"),
                        ("Ich " + "bin".bold().fontcolor("#FF5E5E") + " ein Rechner" + " gewesen".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                        "-".fontsize(1),
                        "Futur I".fontcolor("#F1ED7C"),
                        ("Ich " + "werde".bold().fontcolor("#FF5E5E") + " ein Rechner" + " sein".bold().fontcolor("#0BAEFF") + ".").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Hilfsverb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Vollverb".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"be",
                    def:"sein / être / ser ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "English".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "I" + " am".bold().fontcolor("#0BAEFF"),
                        "you" + " are".bold().fontcolor("#0BAEFF"),
                        "he/she/it" + " is".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "we" + " are".bold().fontcolor("#0BAEFF"),
                        "you" + " are".bold().fontcolor("#0BAEFF"),
                        "they" + " are".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Present".fontcolor("#F1ED7C"),
                        ("I" + " am".bold().fontcolor("#0BAEFF") + " a computer.").fontsize(3),
                        "-".fontsize(1),
                        "Preterite".fontcolor("#F1ED7C"),
                        ("I " + "was".bold().fontcolor("#0BAEFF") + " a computer.").fontsize(3),
                        "-".fontsize(1),
                        "Present Perfect".fontcolor("#F1ED7C"),
                        ("I" + " have ".bold().fontcolor("#FF5E5E") + "been ".bold().fontcolor("#0BAEFF") + "a computer.").fontsize(3),
                        "-".fontsize(1),
                        "Future".fontcolor("#F1ED7C"),
                        ("I" + " will ".bold().fontcolor("#FF5E5E") + "be ".bold().fontcolor("#0BAEFF") + "a computer.").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Auxiliary Verb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Main Verb".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"être",
                    def:"sein / be / ser ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Français".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "je" + " suis".bold().fontcolor("#0BAEFF"),
                        "tu" + " es".bold().fontcolor("#0BAEFF"),
                        "il/elle/on" + " est".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "nous" + " sommes".bold().fontcolor("#0BAEFF"),
                        "vous" + " êtes".bold().fontcolor("#0BAEFF"),
                        "ils/elles" + " sont".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Présent".fontcolor("#F1ED7C"),
                        ("Je " + "suis".bold().fontcolor("#0BAEFF") + " un ordinateur.").fontsize(3),
                        "-".fontsize(1),
                        "Imparfait".fontcolor("#F1ED7C"),
                        ("J'" + "étais ".bold().fontcolor("#0BAEFF") + "un ordinateur.").fontsize(3),
                        "-".fontsize(1),
                        "Passé Composé".fontcolor("#F1ED7C"),
                        ("J'" + "ai ".bold().fontcolor("#FF5E5E") + "été ".bold().fontcolor("#0BAEFF") + "un ordinateur.").fontsize(3),
                        "-".fontsize(1),
                        "Futur Composé".fontcolor("#F1ED7C"),
                        ("Je" + " vais ".bold().fontcolor("#FF5E5E") + "être ".bold().fontcolor("#0BAEFF") + "un ordinateur.").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Verbe Auxiliaire".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbe Plaindre".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"ser",
                    def:"sein / be / être ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Português (BR)".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "eu" + " sou".bold().fontcolor("#0BAEFF"),
                        "você" + " toma".bold().fontcolor("#0BAEFF"),
                        "ele/ela" + " é".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "nós" + " somos".bold().fontcolor("#0BAEFF"),
                        "vocês" + " tomam".bold().fontcolor("#0BAEFF"),
                        "eles/elas" + " são".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Presente".fontcolor("#F1ED7C"),
                        ("Eu " + "sou".bold().fontcolor("#0BAEFF") + " um computador.").fontsize(3),
                        "-".fontsize(1),
                        "Perfeito".fontcolor("#F1ED7C"),
                        ("Eu" + " fui ".bold().fontcolor("#0BAEFF") + " um computador.").fontsize(3),
                        "-".fontsize(1),
                        "Perfeito Composto".fontcolor("#F1ED7C"),
                        ("Eu" + " tenho ".bold().fontcolor("#FF5E5E") + "sido ".bold().fontcolor("#0BAEFF") + " um computador.").fontsize(3),
                        "-".fontsize(1),
                        "Futuro Imediato".fontcolor("#F1ED7C"),
                        ("Eu" + " vou ".bold().fontcolor("#FF5E5E") + "ser ".bold().fontcolor("#0BAEFF") + " um computador.").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Verbo Auxiliar".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbo principal".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },

                    //TTT

                    {
                    word:"trinken",
                    def:"drink / boire / beber ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Deutsch".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "ich" + " trinke".bold().fontcolor("#0BAEFF"),
                        "du" + " trinkst".bold().fontcolor("#0BAEFF"),
                        "er/sie/es" + " trinkt".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "wir" + " trinken".bold().fontcolor("#0BAEFF"),
                        "ihr" + " trinkt".bold().fontcolor("#0BAEFF"),
                        "sie" + " trinken".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Präsens".fontcolor("#F1ED7C"),
                        ("Er " + "trinkt".bold().fontcolor("#0BAEFF") + " einen Liter Bier mit Vergnügen!").fontsize(3),
                        "-".fontsize(1),
                        "Präteritum".fontcolor("#F1ED7C"),
                        ("Er " + "trank".bold().fontcolor("#0BAEFF") + " einen Liter Bier mit Vergnügen!").fontsize(3),
                        "-".fontsize(1),
                        "Perfekt".fontcolor("#F1ED7C"),
                        ("Er " + "hat".bold().fontcolor("#FF5E5E") + " einen Liter Bier mit Vergnügen" + " getrunken".bold().fontcolor("#0BAEFF") + "!").fontsize(3),
                        "-".fontsize(1),
                        "Futur I".fontcolor("#F1ED7C"),
                        ("Er " + "wird".bold().fontcolor("#FF5E5E") + " einen Liter Bier mit Vergnügen" + " trinken".bold().fontcolor("#0BAEFF") + "!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Hilfsverb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Vollverb".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"drink",
                    def:"trinken / boire / beber ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "English".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "I" + " drink".bold().fontcolor("#0BAEFF"),
                        "you" + " drink".bold().fontcolor("#0BAEFF"),
                        "he/she/it" + " drinks".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "we" + " drink".bold().fontcolor("#0BAEFF"),
                        "you" + " drink".bold().fontcolor("#0BAEFF"),
                        "they" + " drink".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Present".fontcolor("#F1ED7C"),
                        ("He" + " drinks".bold().fontcolor("#0BAEFF") + " a litre beer with pleasure!").fontsize(3),
                        "-".fontsize(1),
                        "Preterite".fontcolor("#F1ED7C"),
                        ("He " + "drank".bold().fontcolor("#0BAEFF") + " a litre beer with pleasure!").fontsize(3),
                        "-".fontsize(1),
                        "Present Perfect".fontcolor("#F1ED7C"),
                        ("He" + " has ".bold().fontcolor("#FF5E5E") + "drunk ".bold().fontcolor("#0BAEFF") + "a litre beer with pleasure!").fontsize(3),
                        "-".fontsize(1),
                        "Future".fontcolor("#F1ED7C"),
                        ("He" + " will ".bold().fontcolor("#FF5E5E") + "drink ".bold().fontcolor("#0BAEFF") + "a litre beer with pleasure!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Auxiliary Verb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Main Verb".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"boire",
                    def:"trinken / drink / beber ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Français".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "je" + " bois".bold().fontcolor("#0BAEFF"),
                        "tu" + " bois".bold().fontcolor("#0BAEFF"),
                        "il/elle/on" + " boit".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "nous" + " buvons".bold().fontcolor("#0BAEFF"),
                        "vous" + " buvez".bold().fontcolor("#0BAEFF"),
                        "ils/elles" + " boivent".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Présent".fontcolor("#F1ED7C"),
                        ("Il " + "boit".bold().fontcolor("#0BAEFF") + " un litre de bière avec plaisir!").fontsize(3),
                        "-".fontsize(1),
                        "Imparfait".fontcolor("#F1ED7C"),
                        ("Il" + " buvait ".bold().fontcolor("#0BAEFF") + "un litre de bière avec plaisir!").fontsize(3),
                        "-".fontsize(1),
                        "Passé Composé".fontcolor("#F1ED7C"),
                        ("Il" + " a ".bold().fontcolor("#FF5E5E") + "bu ".bold().fontcolor("#0BAEFF") + "un litre de bière avec plaisir!").fontsize(3),
                        "-".fontsize(1),
                        "Futur Composé".fontcolor("#F1ED7C"),
                        ("Il" + " va ".bold().fontcolor("#FF5E5E") + "boire ".bold().fontcolor("#0BAEFF") + "un litre de bière avec plaisir!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Verbe Auxiliaire".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbe Plaindre".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"beber",
                    def:"trinken / drink / boire ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Português (BR)".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "eu" + " bebo".bold().fontcolor("#0BAEFF"),
                        "você" + " bebe".bold().fontcolor("#0BAEFF"),
                        "ele/ela" + " bebe".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "nós" + " bebemos".bold().fontcolor("#0BAEFF"),
                        "vocês" + " bebem".bold().fontcolor("#0BAEFF"),
                        "eles/elas" + " bebem".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Presente".fontcolor("#F1ED7C"),
                        ("Ele " + "bebe".bold().fontcolor("#0BAEFF") + " um litro de cerveja com prazer!").fontsize(3),
                        "-".fontsize(1),
                        "Perfeito".fontcolor("#F1ED7C"),
                        ("Ele" + " bebeu ".bold().fontcolor("#0BAEFF") + " um litro de cerveja com prazer!").fontsize(3),
                        "-".fontsize(1),
                        "Perfeito Composto".fontcolor("#F1ED7C"),
                        ("Ele" + " tem ".bold().fontcolor("#FF5E5E") + "bebido ".bold().fontcolor("#0BAEFF") + " um litro de cerveja com prazer!").fontsize(3),
                        "-".fontsize(1),
                        "Futuro Imediato".fontcolor("#F1ED7C"),
                        ("Ele" + " vai ".bold().fontcolor("#FF5E5E") + "beber ".bold().fontcolor("#0BAEFF") + " um litro de cerveja com prazer!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Verbo Auxiliar".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbo principal".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },


                    //UUU



                    //VVV



                    //WWW



                    //__________________________________________________________

                    {
                    word:"werden",
                    def:"become / devenir / tornar-se ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Deutsch".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "ich" + " werde".bold().fontcolor("#0BAEFF"),
                        "du" + " wirst".bold().fontcolor("#0BAEFF"),
                        "er/sie/es" + " wird".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "wir" + " werden".bold().fontcolor("#0BAEFF"),
                        "ihr" + " werdet".bold().fontcolor("#0BAEFF"),
                        "sie" + " werden".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Präsens".fontcolor("#F1ED7C"),
                        ("Sie " + "wird".bold().fontcolor("#0BAEFF") + " eine fantastische Ärztin!").fontsize(3),
                        "-".fontsize(1),
                        "Präteritum".fontcolor("#F1ED7C"),
                        ("Sie " + "wurde".bold().fontcolor("#0BAEFF") + " eine fantastische Ärztin!").fontsize(3),
                        "-".fontsize(1),
                        "Perfekt".fontcolor("#F1ED7C"),
                        ("Sie " + "ist".bold().fontcolor("#FF5E5E") + " eine  fantaischte Ärztin" + " geworden".bold().fontcolor("#0BAEFF") + "!").fontsize(3),
                        "-".fontsize(1),
                        "Futur I".fontcolor("#F1ED7C"),
                        ("Sie " + "wird".bold().fontcolor("#FF5E5E") + " eine fantastische Ärztin." + " werden".bold().fontcolor("#0BAEFF") + "!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Hilfsverb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Vollverb".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"become",
                    def:"werden / devenir / tornar-se ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "English".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "I" + " become".bold().fontcolor("#0BAEFF"),
                        "you" + " become".bold().fontcolor("#0BAEFF"),
                        "he/she/it" + " becomes".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "we" + " become".bold().fontcolor("#0BAEFF"),
                        "you" + " become".bold().fontcolor("#0BAEFF"),
                        "they" + " become".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Present".fontcolor("#F1ED7C"),
                        ("She" + " becomes".bold().fontcolor("#0BAEFF") + " a fantastic doctor!").fontsize(3),
                        "-".fontsize(1),
                        "Preterite".fontcolor("#F1ED7C"),
                        ("She " + "became".bold().fontcolor("#0BAEFF") + " a fantastic doctor!").fontsize(3),
                        "-".fontsize(1),
                        "Present Perfect".fontcolor("#F1ED7C"),
                        ("She" + " has ".bold().fontcolor("#FF5E5E") + "become ".bold().fontcolor("#0BAEFF") + "a fantastic doctor!").fontsize(3),
                        "-".fontsize(1),
                        "Future".fontcolor("#F1ED7C"),
                        ("She" + " will ".bold().fontcolor("#FF5E5E") + "become ".bold().fontcolor("#0BAEFF") + "a fantastic doctor!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Auxiliary Verb".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Main Verb".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"devenir",
                    def:"werden / become / tornar-se ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Français".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "je" + " deviens".bold().fontcolor("#0BAEFF"),
                        "tu" + " deviens".bold().fontcolor("#0BAEFF"),
                        "il/elle/on" + " devient".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "nous" + " devenons".bold().fontcolor("#0BAEFF"),
                        "vous" + " devenez".bold().fontcolor("#0BAEFF"),
                        "ils/elles" + " deviennent".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Présent".fontcolor("#F1ED7C"),
                        ("Elle " + "devient".bold().fontcolor("#0BAEFF") + " une médecine fantastique!").fontsize(3),
                        "-".fontsize(1),
                        "Imparfait".fontcolor("#F1ED7C"),
                        ("Elle" + " devenait ".bold().fontcolor("#0BAEFF") + "une médecine fantastique!").fontsize(3),
                        "-".fontsize(1),
                        "Passé Composé".fontcolor("#F1ED7C"),
                        ("Elle " + "est ".bold().fontcolor("#FF5E5E") + "devenu ".bold().fontcolor("#0BAEFF") + "une médecine fantastique!").fontsize(3),
                        "-".fontsize(1),
                        "Futur Composé".fontcolor("#F1ED7C"),
                        ("Elle" + " va ".bold().fontcolor("#FF5E5E") + "devenir ".bold().fontcolor("#0BAEFF") + "une médecine fantastique!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Verbe Auxiliaire".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbe Plaindre".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },
                  {
                    word:"tornar-se",
                    def:"werden / become / devenir ".fontsize(2).bold().fontcolor("#0BAEFF"),
                    rel:[
                        "Português (BR)".bold().fontsize(5.5).fontcolor("#F1ED7C"),
                        "▫▪▫▪▫▪▫▪▫",
                        "eu" + " torno-me".bold().fontcolor("#0BAEFF"),
                        "você" + " torna-se".bold().fontcolor("#0BAEFF"),
                        "ele/ela" + " torna-se".bold().fontcolor("#0BAEFF"),
                        "-".fontsize(1),
                        "nós" + " tornamo-nos".bold().fontcolor("#0BAEFF"),
                        "vocês" + " tornam-se".bold().fontcolor("#0BAEFF"),
                        "eles/elas" + " tornam-se".bold().fontcolor("#0BAEFF"),
                        "▫▪▫▪▫▪▫▪▫",
                        "Presente".fontcolor("#F1ED7C"),
                        ("Ela " + "se torna".bold().fontcolor("#0BAEFF") + " uma médica fantástica!").fontsize(3),
                        "-".fontsize(1),
                        "Perfeito".fontcolor("#F1ED7C"),
                        ("Ela" + " se tornou ".bold().fontcolor("#0BAEFF") + " uma médica fantástica!").fontsize(3),
                        "-".fontsize(1),
                        "Perfeito Composto".fontcolor("#F1ED7C"),
                        ("Ela" + " se".bold().fontcolor("#0BAEFF") + " tem ".bold().fontcolor("#FF5E5E") + "tornado ".bold().fontcolor("#0BAEFF") + " uma médica fantástica!").fontsize(3),
                        "-".fontsize(1),
                        "Futuro Imediato".fontcolor("#F1ED7C"),
                        ("Ela" + " vai ".bold().fontcolor("#FF5E5E") + "se torna ".bold().fontcolor("#0BAEFF") + " uma médica fantástica!").fontsize(3),
                        "▫▪▫▪▫▪▫▪▫",
                        "Verbo Auxiliar".fontsize(2).fontcolor("#FF5E5E").bold() + " → ".fontsize(2) + "Verbo principal".fontsize(2).fontcolor("#0BAEFF").bold(),
                      ]
                  },

                    //__________________________________________________________



                    //__________________________________________________________



                    //__________________________________________________________

                    //XXX



                    //YYY



                    //ZZZ



                    //ÄÄÄ



                    //ÖÖÖ



                    //ÜÜÜ



                    //__________________________________________________________





];

//________________________________


init = function() {
    for (var i = 0; i < dictionary.length; i++) {
              document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" +
                    dictionary[i].word + "</li>";
        }
}

init();

show = function(i) {
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('description').innerHTML = dictionary[i].def;

    var list = "";

    for (var j = 0; j < dictionary[i].rel.length; j++) {
        list += "<li>" + dictionary[i].rel[j];
        document.getElementById('translated').innerHTML = list;
    }
}

show(0);

search = function() {
    query = document.getElementById('search').value;

    if (query == "") {
        return;
    }

    found = -1;

    for (var i = 0; i < dictionary.length; i++) {
        if (query == dictionary[i].word) {
            found = i;
            break;
        }else {
            document.getElementById('word_text').innerHTML = "Yässes, nüd daa! X.x".fontsize(3);
            document.getElementById('description').innerHTML = "viilicht es andrsmool...".fontsize(2);
            document.getElementById('translated').innerHTML = "-";
        }
    }

    if (found >= 0) {
        show(found);
    }
}


//Marvin Grüeess
function openGreating(greatingName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(greatingName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
