const quizDataSociais = [
    // --- Antropologia.md (20 Questions) ---
    {
        id: "Antropologia_1",
        disciplina: "Antropologia",
        tipo: "AG", // Afirmações em Grupo
        contexto: "Pesquisadores do campo da antropologia digital têm debatido sobre a aplicabilidade do método etnográfico tradicional em ambientes virtuais. Durante a pandemia de COVID-19, muitos antropólogos foram forçados a adaptar suas pesquisas para plataformas online, gerando questionamentos sobre a validade da \"etnografia virtual\" ou \"netnografia\".",
        pergunta: "Sobre o método etnográfico e suas adaptações contemporâneas, analise as afirmações:",
        afirmacoes: [
            "A observação participante, elemento central do método etnográfico desde Bronislaw Malinowski, pressupõe necessariamente a copresença física do pesquisador e dos sujeitos pesquisados, sendo metodologicamente inviável em ambientes digitais.",
            "Daniel Miller e outros proponentes da antropologia digital argumentam que os ambientes virtuais constituem campos etnográficos legítimos, exigindo adaptações metodológicas sem abandonar os princípios fundamentais da imersão prolongada e participação ativa na vida social estudada.",
            "Para Christine Hine, a etnografia virtual deve reconhecer as especificidades da socialidade online, como a possibilidade de múltiplas identidades e a fluidez entre contextos online e offline, desenvolvendo abordagens que transcendam a dicotomia real/virtual.",
            "O método etnográfico clássico, fundamentado na tradição boasiana, rejeita qualquer forma de registro tecnológico, priorizando exclusivamente notas manuscritas do pesquisador como forma de documentação.",
            "A validade da etnografia em ambientes digitais depende exclusivamente da quantidade de dados coletados, sendo irrelevantes questões como reflexividade, posicionalidade do pesquisador e retorno aos participantes."
        ],
        opcoes: [
            "I, III e IV",
            "II, III e V",
            "I, II e V",
            "II e III",
            "Todas as afirmações estão incorretas"
        ],
        resposta: "D"
    },
    {
        id: "Antropologia_2",
        disciplina: "Antropologia",
        tipo: "MC", // Múltipla Escolha
        contexto: "Em seu trabalho sobre sistemas de classificação e pensamento mítico, Claude Lévi-Strauss analisou como diferentes culturas organizam e categorizam o mundo natural e social. Seus estudos sobre o \"pensamento selvagem\" revelaram lógicas sofisticadas de ordenação simbólica em sociedades tradicionais, desafiando concepções etnocêntricas sobre racionalidade e conhecimento.",
        pergunta: "A respeito do estruturalismo lévi-straussiano, assinale a alternativa correta:",
        opcoes: [
            "Lévi-Strauss considerava os mitos como expressões irracionais e pré-lógicas das sociedades \"primitivas\", confirmando a superioridade do pensamento científico ocidental sobre outros sistemas de conhecimento.",
            "Na análise estrutural dos mitos, Lévi-Strauss identificava unidades mínimas de significação (mitemas) organizadas em oposições binárias que expressam contradições fundamentais da experiência humana, como natureza/cultura, cru/cozido, vida/morte.",
            "O estruturalismo lévi-straussiano rejeita completamente a noção de universalidade, afirmando o relativismo cultural radical como único princípio válido para compreender sistemas classificatórios humanos.",
            "Em obras como \"O Pensamento Selvagem\", Lévi-Strauss argumenta que o pensamento mítico é incapaz de abstração e generalização, limitando-se a reproduzir acriticamente categorias derivadas da experiência imediata.",
            "O método estruturalista prioriza a dimensão histórica e diacrônica dos fenômenos culturais, analisando como sistemas simbólicos evoluem linearmente ao longo do tempo em resposta a pressões adaptativas."
        ],
        resposta: "B"
    },
    {
        id: "Antropologia_3",
        disciplina: "Antropologia",
        tipo: "VF", // Verdadeiro/Falso
        contexto: "Povos indígenas da Amazônia frequentemente descrevem encontros com seres não-humanos (animais, espíritos) que se veem a si mesmos como humanos e percebem os humanos como predadores ou presas. Tais narrativas desafiam pressupostos ontológicos ocidentais sobre a distinção entre natureza e cultura, humanidade e animalidade.",
        pergunta: "Com base na teoria do perspectivismo ameríndio, desenvolvida por Eduardo Viveiros de Castro, julgue as afirmações a seguir como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "O perspectivismo propõe que diversos seres (humanos, animais, espíritos) compartilham uma mesma \"cultura\" ou subjetividade, diferindo quanto a seus \"corpos\" ou naturezas, invertendo assim o multiculturalismo ocidental.",
            "Para Viveiros de Castro, o xamanismo amazônico pode ser compreendido como uma prática de \"tradução\" entre diferentes perspectivas ontológicas, permitindo a comunicação entre mundos humanos e não-humanos.",
            "A teoria perspectivista é incompatível com o estruturalismo lévi-straussiano, rejeitando completamente a análise de oposições binárias como natureza/cultura em favor de um relativismo radical.",
            "Segundo o perspectivismo ameríndio, a capacidade de assumir uma perspectiva (ponto de vista) é uma propriedade exclusiva dos seres humanos biológicos, negada a animais e outros seres.",
            "O perspectivismo ameríndio desafia o conceito antropológico clássico de relativismo cultural ao propor uma instabilidade ontológica onde as categorias \"humano\" e \"não-humano\" não são fixas, mas posicionais e relacionais."
        ],
        opcoes: [
            "V, V, F, F, V",
            "F, F, V, V, F",
            "V, F, F, V, V",
            "F, V, V, F, F",
            "V, V, V, F, F"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_4",
        disciplina: "Antropologia",
        tipo: "MC", // Múltipla Escolha (Incorreta)
        contexto: "Em seu famoso ensaio \"Um Jogo Absorvente: Notas sobre a Briga de Galos Balinesa\", Clifford Geertz analisa como um ritual aparentemente trivial revela aspectos profundos da cultura balinesa, demonstrando seu método de \"descrição densa\" e sua concepção semiótica da cultura.",
        pergunta: "Sobre a antropologia interpretativa de Clifford Geertz, assinale a alternativa INCORRETA:",
        opcoes: [
            "Geertz define cultura como um sistema de significados publicamente compartilhados, comparando-a a um \"texto\" que pode ser lido e interpretado pelo antropólogo.",
            "A \"descrição densa\" proposta por Geertz busca captar não apenas comportamentos observáveis, mas também os significados e estruturas simbólicas que os contextualizam dentro de um quadro cultural específico.",
            "Na análise da briga de galos balinesa, Geertz demonstra como um ritual pode funcionar como \"texto cultural\" que dramatiza hierarquias, valores e tensões sociais, permitindo aos balineses contar uma história sobre si mesmos para si mesmos.",
            "Para Geertz, o objetivo da etnografia é alcançar uma compreensão objetiva e definitiva das culturas estudadas, eliminando completamente a subjetividade do pesquisador no processo interpretativo.",
            "A antropologia interpretativa geertziana reconhece que as interpretações do antropólogo são sempre \"interpretações de interpretações\", construções de segunda ou terceira ordem sobre significados que os próprios nativos já elaboram sobre suas práticas."
        ],
        resposta: "D"
    },
    {
        id: "Antropologia_5",
        disciplina: "Antropologia",
        tipo: "AG", // Afirmações em Grupo
        contexto: "Em diversas societies melanésias existe o sistema de troca conhecido como Kula, onde braceletes e colares circulam entre ilhas diferentes seguindo regras específicas de reciprocidade. Marcel Mauss analisou este e outros sistemas de troca em seu \"Ensaio sobre a Dádiva\" (1925), obra fundamental para a antropologia econômica.",
        pergunta: "Considerando as contribuições de Marcel Mauss para a compreensão das trocas como fatos sociais totais, analise o grupo de afirmativas a seguir:",
        afirmacoes: [
            "Segundo Mauss, a dádiva (ou dom) aparentemente voluntária e desinteressada mascara uma tríplice obrigação social: dar, receber e retribuir, criando vínculos entre pessoas e grupos.",
            "O conceito de \"fato social total\" desenvolvido por Mauss indica que fenômenos como o Kula não são apenas econômicos, mas articulam simultaneamente dimensões religiosas, jurídicas, morais, estéticas e políticas da vida social.",
            "Na teoria maussiana, as trocas em sociedades \"arcaicas\" são motivadas exclusivamente pelo interesse material imediato, diferenciando-se fundamentalmente da economia moderna baseada em princípios morais.",
            "Mauss demonstrou como o hau (espírito da coisa dada) entre os Maori revela que objetos trocados não são inertes, mas carregam algo da identidade do doador, criando laços e obrigações entre os participantes.",
            "Para Mauss, sistemas como o Kula representam estágios evolutivos primitivos destinados a desaparecer com a modernização, devendo ser substituídos por formas mais eficientes de troca mercantil."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "Todas as afirmações estão incorretas"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_6",
        disciplina: "Antropologia",
        tipo: "MC", // Múltipla Escolha
        contexto: "O debate sobre direitos humanos universais versus práticas culturais específicas permanece central na antropologia contemporânea. Casos como a excisão genital feminina, casamentos forçados ou sistemas de castas geram tensões entre o respeito à diversidade cultural e princípios éticos considerados universais.",
        pergunta: "Sobre o relativismo cultural e suas implicações éticas, avalie as alternativas:",
        opcoes: [
            "O relativismo cultural, conforme formulado por Franz Boas, defende que todas as práticas culturais são igualmente válidas e justificáveis em seus próprios termos, proibindo qualquer crítica intercultural, inclusive a práticas violentas ou opressivas.",
            "A antropologia contemporânea tende a rejeitar tanto o relativismo cultural extremo (que impossibilita qualquer avaliação ética transcultural) quanto o universalismo etnocêntrico (que impõe valores ocidentais como padrão universal), buscando abordagens dialógicas que reconheçam tanto a diversidade cultural quanto a possibilidade de princípios éticos compartilhados.",
            "O relativismo metodológico (suspensão temporária de julgamentos para compreender práticas culturais em seus próprios termos) é incompatível com o engajamento ético e político dos antropólogos em questões de justiça social e direitos humanos.",
            "A crítica ao etnocentrismo desenvolvida pela antropologia exige necessariamente a adesão ao relativismo moral absoluto, que considera impossível estabelecer quaisquer valores transculturais ou princípios éticos compartilhados entre diferentes sociedades.",
            "A tradição antropológica boasiana demonstrou cientificamente a impossibilidade de comunicação significativa entre culturas diferentes, justificando políticas de segregação cultural como forma de preservar a autenticidade das tradições."
        ],
        resposta: "B"
    },
    {
        id: "Antropologia_7",
        disciplina: "Antropologia",
        tipo: "MC", // Múltipla Escolha
        contexto: "Estudos recentes sobre famílias contemporâneas revelam configurações cada vez mais diversas: famílias homoparentais, monoparentais, reconstituídas, multigeracionais, além de arranjos como coabitação sem casamento formal e relacionamentos não-monogâmicos. Estas transformações desafiam concepções tradicionais sobre parentesco e família.",
        pergunta: "Com base nas teorias antropológicas sobre sistemas de parentesco, assinale a alternativa correta:",
        opcoes: [
            "David Schneider, em \"Crítica aos Estudos de Parentesco\", argumentava que o parentesco é universalmente estruturado a partir de fatos biológicos da reprodução, sendo invariável em suas características fundamentais apesar da diversidade cultural.",
            "A teoria da aliança de Claude Lévi-Strauss explica o parentesco exclusivamente a partir das trocas matrimoniais entre grupos, ignorando completamente aspectos simbólicos e sistemas classificatórios que organizam relações de descendência.",
            "Segundo a antropologia contemporânea, as novas configurações familiares observadas nas sociedades ocidentais representam anomalias disfuncionais que comprometem a função social básica da família, conforme demonstrado por estudos comparativos transculturais.",
            "Marilyn Strathern, analisando o impacto das tecnologias reprodutivas, propõe que estas não apenas se adaptam a concepções existentes de parentesco, mas também transformam fundamentalmente as formas como concebemos conexões biológicas e sociais.",
            "A antropologia do parentesco estabeleceu que sistemas de filiação patrilinear (descendência traçada pelo lado paterno) são universalmente mais comuns e funcionalmente superiores aos sistemas matrilineares, por razões ligadas à divisão sexual do trabalho."
        ],
        resposta: "D"
    },
    {
        id: "Antropologia_8",
        disciplina: "Antropologia",
        tipo: "VF", // Verdadeiro/Falso
        contexto: "No final do século XIX, antropólogos como Lewis Henry Morgan e Edward Tylor propuseram teorias evolucionistas que classificavam sociedades em estágios de desenvolvimento (selvageria, barbárie, civilização). Estas teorias influenciaram políticas coloniais e justificavam hierarquias raciais, sendo posteriormente criticadas por antropólogos como Franz Boas.",
        pergunta: "Sobre a crítica boasiana ao evolucionismo antropológico, julgue os itens como verdadeiros (V) ou falsos (F):",
        vfStatements: [
            "Franz Boas contestou o método comparativo dos evolucionistas, que agrupava traços culturais descontextualizados de diferentes sociedades para construir sequências evolutivas especulativas.",
            "A crítica de Boas ao evolucionismo baseava-se no particularismo histórico, que enfatizava a necessidade de estudar cada cultura em seus próprios termos e contexto histórico específico.",
            "Boas rejeitou completamente a noção de evolução cultural, negando qualquer possibilidade de mudança ou desenvolvimento nas sociedades humanas ao longo do tempo.",
            "Os estudos empíricos de Boas sobre plasticidade craniana e desenvolvimento infantil em diferentes grupos étnicos contribuíram para desafiar teorias raciais deterministas que fundamentavam muitas abordagens evolucionistas.",
            "O relativismo cultural desenvolvido na tradição boasiana era compatível com o racismo científico da época, pois ambos postulavam diferenças inatas e hierárquicas entre grupos humanos."
        ],
        opcoes: [
            "V, V, F, V, F",
            "F, V, V, F, V",
            "V, F, F, V, V",
            "F, F, V, V, F",
            "V, V, V, F, F"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_9",
        disciplina: "Antropologia",
        tipo: "AG", // Afirmações em Grupo
        contexto: "O desenvolvimento de tecnologias como próteses avançadas, implantes, modificações genéticas e interfaces cérebro-máquina tem transformado as fronteiras entre corpos humanos e dispositivos tecnológicos. Estas transformações desafiam concepções culturais sobre corporalidade, identidade e o que significa ser humano.",
        pergunta: "A partir das contribuições da antropologia do corpo e teorias sobre pós-humanismo, avalie as proposições:",
        afirmacoes: [
            "Mary Douglas, em \"Pureza e Perigo\", demonstra como o corpo funciona como símbolo natural e microcosmo da sociedade, com suas fronteiras e estruturas refletindo preocupações sociais sobre ordem e contaminação.",
            "Donna Haraway, em seu \"Manifesto Ciborgue\", propõe o híbrido humano-máquina como figura metafórica e política que desafia dualismos ocidentais como natureza/cultura, organismo/máquina e físico/não-físico.",
            "Para Thomas Csordas, a corporeidade (embodiment) representa um paradigma antropológico que considera o corpo não apenas como objeto de representações culturais, mas como sujeito da cultura e base existencial da mesma.",
            "A antropologia contemporânea do corpo tem estabelecido consenso sobre a universalidade das experiências corporais básicas, demonstrando que sensações físicas são interpretadas de maneira idêntica através de diferentes contextos culturais.",
            "David Le Breton argumenta que as modificações tecnológicas do corpo necessariamente alienam os indivíduos de suas experiências corporais autênticas, resultando em formas patológicas de subjetividade desconectadas da materialidade corporal."
        ],
        opcoes: [
            "I, II e III",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "Todas as afirmações estão incorretas"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_10",
        disciplina: "Antropologia",
        tipo: "MC", // Múltipla Escolha (Incorreta)
        contexto: "Em 2022, antropólogos analisaram como as formaturas universitárias brasileiras, especialmente na modalidade remota durante a pandemia, mantiveram elementos rituais tradicionais (juramentos, discursos, vestes específicas) mesmo adaptados ao ambiente digital, evidenciando sua importância simbólica para marcar a transição social dos graduandos.",
        pergunta: "Considerando as teorias antropológicas sobre rituais e ritos de passagem, assinale a alternativa INCORRETA:",
        opcoes: [
            "Segundo Arnold Van Gennep, os ritos de passagem estruturam-se tipicamente em três fases: separação (afastamento do estado anterior), liminaridade (período ambíguo entre estados) e reagregação (incorporação ao novo estado), podendo ser identificadas mesmo em versões contemporâneas e adaptadas destes rituais.",
            "Victor Turner ampliou a análise da fase liminar, destacando como a communitas (experiência de igualdade e comunhão entre participantes) suspende temporariamente hierarquias sociais, permitindo reflexão sobre valores e estruturas da sociedade.",
            "Os rituais, na perspectiva de Clifford Geertz, funcionam como \"modelos de\" e \"modelos para\" a realidade social, simultaneamente refletindo valores culturais e moldando a compreensão e ação dos participantes no mundo.",
            "Para as teorias funcionalistas, rituais como formaturas universitárias são superstições anacrônicas que persistem apenas por inércia cultural, não cumprindo funções sociais significativas nas societies tecnologicamente avançadas.",
            "Mary Douglas analisou como rituais funcionam para administrar simbolicamente perigos e ambiguidades, ajudando a restabelecer categorias e fronteiras sociais em momentos de transição ou crise, como pode ocorrer na passagem da identidade de estudante para profissional."
        ],
        resposta: "D"
    },
    {
        id: "Antropologia_11",
        disciplina: "Antropologia",
        tipo: "VF",
        contexto: "A antropologia como disciplina acadêmica desenvolveu-se no contexto da expansão colonial europeia, gerando debates sobre a cumplicidade da disciplina com projetos imperiais. Nas últimas décadas, antropólogos têm revisitado criticamente essa história, propondo perspectivas decoloniais que reconhecem e desafiam legados coloniais na produção de conhecimento antropológico.",
        pergunta: "Sobre a relação entre antropologia e colonialismo, julgue as afirmações abaixo como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "Talal Asad, em \"Anthropology and the Colonial Encounter\", argumenta que, mesmo quando antropólogos individuais se opunham ao colonialismo, a disciplina como instituição estava estruturalmente implicada nas relações de poder coloniais.",
            "A antropologia aplicada colonial, desenvolvida por administradores como Malinowski na África britânica, representou uma ruptura radical com o colonialismo, estabelecendo desde o início uma abordagem emancipatória e anti-imperialista.",
            "O conceito de \"colonialidade do saber\", desenvolvido por Aníbal Quijano, refere-se à persistência de hierarquias epistemológicas coloniais mesmo após o fim do colonialismo formal, privilegiando conhecimentos ocidentais sobre saberes indígenas e não-ocidentais.",
            "A crítica pós-colonial à antropologia, exemplificada por autores como Edward Said, questiona a autoridade etnográfica tradicional e as representações ocidentais do \"outro\" não-ocidental como primitivo, exótico ou atrasado.",
            "Johannes Fabian, em \"O Tempo e o Outro\", demonstra como a antropologia clássica frequentemente colocava seus objetos de estudo em um \"tempo diferente\" (alocronismo), negando contemporaneidade aos povos estudados e posicionando-os como relíquias de estágios anteriores da evolução humana."
        ],
        opcoes: [
            "V, F, V, V, V",
            "F, V, F, V, F",
            "V, V, F, F, V",
            "F, F, V, F, V",
            "V, F, F, V, F"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_12",
        disciplina: "Antropologia",
        tipo: "MC",
        contexto: "Pesquisas recentes no campo da antropologia urbana têm se concentrado na análise etnográfica de grandes metrópoles brasileiras, documentando transformações em bairros periféricos, políticas de gentrificação, segregação espacial e novas formas de sociabilidade urbana, como ocorre nos encontros de jovens em \"rolezinhos\" em shoppings ou nas relações estabelecidas em comunidades afetadas por processos de remoção forçada.",
        pergunta: "Com base nas teorias da antropologia urbana, assinale a alternativa correta:",
        opcoes: [
            "A Escola de Chicago, pioneira na antropologia urbana, propunha que o ambiente urbano necessariamente deteriora laços sociais e comunitários, produzindo invariavelmente anomia social e isolamento individual, tese que permanece consensual na disciplina.",
            "A abordagem etnográfica em contextos urbanos é metodologicamente inviável devido à escala e complexidade das cidades modernas, exigindo a substituição do trabalho de campo tradicional por métodos exclusivamente quantitativos e baseados em grandes amostras estatísticas.",
            "José Guilherme Magnani desenvolveu o conceito de \"pedaço\" para analisar sociabilidades urbanas intermediárias entre a casa e a rua, identificando formas de pertencimento e reconhecimento mútuo que organizam práticas culturais e relações sociais em espaços urbanos como bairros periféricos, praças e outros pontos de encontro.",
            "A antropologia urbana contemporânea estabeleceu um consenso sobre a universalidade dos processos de urbanização, demonstrando que diferentes cidades globais seguem necessariamente os mesmos padrões de desenvolvimento espacial e sociocultural, independentemente de contextos históricos e regionais específicos.",
            "Roberto DaMatta, em sua análise sobre as categorias \"casa\" e \"rua\" na sociedade brasileira, argumenta que essas esferas são completamente separadas e impermeáveis, não havendo mediações ou trânsitos significativos entre os domínios doméstico e público no Brasil urbano."
        ],
        resposta: "C"
    },
    {
        id: "Antropologia_13",
        disciplina: "Antropologia",
        tipo: "AG",
        contexto: "No Brasil contemporâneo, processos de reetnização têm levado ao reconhecimento oficial de comunidades quilombolas, indígenas e outras comunidades tradicionais. De 2003 a 2023, centenas de comunidades quilombolas obtiveram certificação da Fundação Cultural Palmares, enquanto grupos indígenas considerados \"extintos\" passaram por processos de reivindicação identitária, como os Pankararé, Tuxá e Pataxó no Nordeste.",
        pergunta: "A respeito das teorias antropológicas sobre etnicidade e processos identitários, analise as afirmações:",
        afirmacoes: [
            "Fredrik Barth, em \"Grupos Étnicos e suas Fronteiras\", propôs uma abordagem que enfatiza a etnicidade como processo relacional e dinâmico, definido pela manutenção de fronteiras entre grupos sociais, e não pelo \"conteúdo cultural\" isolado de cada grupo.",
            "O conceito de \"essencialismo estratégico\", proposto por Gayatri Spivak, reconhece que grupos subalternos podem mobilizar temporariamente identidades aparentemente essencializadas como recurso político para reivindicação de direitos, mesmo reconhecendo a natureza construída e heterogênea dessas identidades.",
            "As teorias primordialistas da etnicidade, dominantes na antropologia contemporânea, argumentam que identidades étnicas são baseadas em vínculos primordiais fixos e imutáveis, transmitidos biologicamente e impermeáveis a processos históricos de transformação.",
            "A etnogênese, processo pelo qual grupos sociais emergem ou se redefinem como entidades étnicas distintas, é considerada pela antropologia atual como fenômeno ilegítimo que produz \"falsos índios\" ou \"falsos quilombolas\", devendo ser desencorajada por políticas públicas.",
            "Stuart Hall, teórico dos estudos culturais, argumenta que identidades culturais na modernidade tardia são cada vez mais fragmentadas, múltiplas e sujeitas a transformações históricas, desafiando concepções essencialistas de pertencimento étnico ou cultural."
        ],
        opcoes: [
            "I, II e V",
            "I, III e IV",
            "II, III e V",
            "I, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_14",
        disciplina: "Antropologia",
        tipo: "MC", // Incorreta
        contexto: "Grandes projetos de desenvolvimento na Amazônia, como hidrelétricas, rodovias e mineração, têm impactado significativamente povos indígenas e comunidades tradicionais. A construção da Usina de Belo Monte, por exemplo, alterou profundamente a vida de povos como os Juruna, Arara e Xikrin, gerando deslocamentos forçados, mudanças ambientais e transformações socioculturais, apesar de programas de mitigação e compensação.",
        pergunta: "Considerando as contribuições da antropologia do desenvolvimento, assinale a alternativa INCORRETA:",
        opcoes: [
            "Arturo Escobar, em \"Encountering Development\", analisa criticamente como o discurso do desenvolvimento constrói o \"Terceiro Mundo\" como objeto de intervenção técnica, naturalizando relações de poder e representando culturas locais como obstáculos ao progresso.",
            "A antropologia colaborativa em contextos de desenvolvimento prioriza metodologias participativas que incorporam conhecimentos e prioridades locais, reconhecendo comunidades afetadas como agentes ativos e não meros \"beneficiários\" passivos de projetos exógenos.",
            "O conceito de \"conhecimento local\" ou \"etnociência\", utilizado na antropologia do desenvolvimento, reconhece sistemas de conhecimento indígenas e tradicionais como epistemologicamente equivalentes ao conhecimento científico ocidental, embora aplicáveis a contextos específicos.",
            "A antropologia do desenvolvimento contemporânea considera que as intervenções desenvolvimentistas falham primordialmente devido à resistência cultural irracional de comunidades tradicionais, que devem ser reeducadas para aceitar valores progressistas ocidentais.",
            "James Ferguson, em \"The Anti-Politics Machine\", demonstra como projetos de desenvolvimento frequentemente despolitizam questões estruturais de desigualdade e poder, reduzindo-as a problemas técnicos solucionáveis através de intervenções burocráticas e conhecimento especializado."
        ],
        resposta: "D"
    },
    {
        id: "Antropologia_15",
        disciplina: "Antropologia",
        tipo: "AG",
        contexto: "Fenômenos transnacionais como migrações em massa, fluxos de capital, circulação de bens culturais e tecnologias digitais têm transformado paisagens culturais locais. Comunidades diaspóricas mantêm conexões com seus lugares de origem através de remessas financeiras, comunicação digital e práticas culturais híbridas, desafiando noções tradicionais sobre cultura e território.",
        pergunta: "Sobre a antropologia da globalização, avalie as proposições:",
        afirmacoes: [
            "Arjun Appadurai propõe cinco dimensões de fluxos culturais globais (ethnoscapes, mediascapes, technoscapes, financescapes e ideoscapes) para analisar a complexidade da globalização além de modelos simplistas de homogeneização cultural.",
            "O conceito de \"glocalização\", desenvolvido por Roland Robertson, refere-se à forma como processos globais são reinterpretados e incorporados em contextos locais específicos, produzindo resultados culturais heterogêneos e não simplesmente uma cultura global uniforme.",
            "Ulf Hannerz, com sua noção de \"ecumene global\", argumenta que fluxos culturais transnacionais são unidirecionais, partindo exclusivamente de centros metropolitanos para periferias passivas, em um processo de americanização inevitável e irreversível.",
            "A teoria antropológica da globalização define culturas como entidades claramente delimitadas e internamente homogêneas, cujas fronteiras coincidem necessariamente com territórios nacionais, permitindo análises culturais discretas e separadas.",
            "James Clifford desenvolve o conceito de \"culturas viajantes\" para analisar como mobilidades, deslocamentos e rotas (e não apenas raízes) são constitutivos de identidades culturais contemporâneas, desafiando o isomorfismo tradicional entre lugar, cultura e identidade."
        ],
        opcoes: [
            "I, II e V",
            "I, III e IV",
            "II, III e V",
            "I, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_16",
        disciplina: "Antropologia",
        tipo: "VF",
        contexto: "O uso de imagens na antropologia tem uma longa história, desde as fotografias coloniais até o cinema etnográfico e, mais recentemente, metodologias participativas que fornecem câmeras a membros das comunidades estudadas. O projeto \"Vídeo nas Aldeias\", desenvolvido no Brasil desde 1986, tem capacitado cineastas indígenas a produzirem seus próprios filmes, gerando um rico acervo de narrativas visuais autorepresentativas.",
        pergunta: "Sobre antropologia visual e suas abordagens metodológicas, julgue os itens como verdadeiros (V) ou falsos (F):",
        vfStatements: [
            "Jean Rouch, pioneiro do cinema etnográfico, desenvolveu a abordagem da \"antropologia compartilhada\", reconhecendo os sujeitos filmados como colaboradores ativos no processo cinematográfico e explorando a reflexividade e a intersubjetividade na produção de conhecimento antropológico.",
            "A fotografia e o filme etnográficos são valorizados na antropologia contemporânea exclusivamente como técnicas de registro objetivo da realidade cultural, sendo considerados superiores aos métodos textuais justamente por eliminarem a subjetividade e interpretação do pesquisador.",
            "Margaret Mead e Gregory Bateson, em seu trabalho pioneiro \"Balinese Character\", demonstraram como a análise sistemática de fotografias poderia revelar padrões comportamentais e relações sociais não facilmente captáveis apenas pela observação não mediada ou descrição textual.",
            "A antropologia visual participativa, que fornece tecnologias de imagem às comunidades estudadas, fundamenta-se no reconhecimento de que diferentes grupos culturais podem ter formas distintas de visualidade e representação, resultando em produções visuais que refletem epistemologias e estéticas próprias.",
            "David MacDougall argumenta que o conhecimento visual antropológico é meramente ilustrativo de conceitos desenvolvidos textualmente, não constituindo uma forma distinta de conhecimento com potencial para transformar a teoria antropológica."
        ],
        opcoes: [
            "V, F, V, V, F",
            "F, V, F, V, V",
            "V, V, F, F, V",
            "F, F, V, V, F",
            "V, F, F, F, V"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_17",
        disciplina: "Antropologia",
        tipo: "MC",
        contexto: "O Brasil contemporâneo passa por significativa transformação em seu campo religioso. Dados do último censo mostram o crescimento acelerado de denominações evangélicas pentecostais e neopentecostais, declínio percentual de católicos, persistência de religiões de matriz africana e aumento de pessoas sem religião, configurando um cenário de pluralismo e competição religiosa.",
        pergunta: "Sobre as teorias antropológicas da religião, assinale a alternativa correta:",
        opcoes: [
            "Clifford Geertz define religião como sistema cultural que estabelece estados de ânimo e motivações através de concepções de ordem geral da existência, revestidas de uma aura de factualidade que as faz parecer singularmente realistas.",
            "Victor Turner, em sua análise do ritual Ndembu, demonstra que símbolos religiosos são universalmente interpretados da mesma forma em todas as culturas, revelando arquétipos junguianos invariáveis da psique humana.",
            "A teoria racionalista de E.B. Tylor e James Frazer, predominante na antropologia contemporânea, estabelece que práticas religiosas são essencialmente tentativas racionais de controlar o ambiente natural, destinadas a desaparecer com o avanço da ciência moderna.",
            "Mary Douglas, em \"Pureza e Perigo\", argumenta que tabus e noções de poluição religiosa são universalmente irracionais e disfuncionais, representando obstáculos ao pensamento lógico que devem ser superados pela educação científica.",
            "O perspectivismo ameríndio, conforme elaborado por Eduardo Viveiros de Castro, estabelece que cosmologias indígenas são fundamentalmente equivalentes às crenças religiosas ocidentais, podendo ser analisadas com os mesmos conceitos teológicos desenvolvidos para o estudo do cristianismo."
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_18",
        disciplina: "Antropologia",
        tipo: "AG",
        contexto: "Durante a pandemia de COVID-19, diferentes respostas culturais à doença emergiram globalmente. Enquanto alguns países adotaram rapidamente o uso de máscaras a partir de práticas culturais preexistentes, em outros lugares surgiram resistências a medidas preventivas baseadas em visões políticas, religiosas ou concepções alternativas sobre corpo e imunidade.",
        pergunta: "Com base nas teorias da antropologia médica e da saúde, analise as afirmações:",
        afirmacoes: [
            "Arthur Kleinman propõe a distinção entre disease (patologia na perspectiva biomédica), illness (experiência subjetiva do sofrimento) e sickness (dimensão social da doença), contribuindo para uma compreensão da saúde/doença como fenômeno multidimensional.",
            "O conceito de \"eficácia simbólica\", desenvolvido por Claude Lévi-Strauss, reconhece como práticas terapêuticas culturalmente significativas podem produzir efeitos fisiológicos concretos através da mobilização de sistemas simbólicos compartilhados.",
            "A antropologia médica crítica, desenvolvida por autores como Nancy Scheper-Hughes, argumenta que contextos de desigualdade estrutural, violência e pobreza devem ser ignorados na análise de sistemas médicos tradicionais, privilegiando explicações puramente culturalistas.",
            "Para Byron Good, sistemas médicos funcionam como sistemas culturais que produzem realidades clínicas através de processos interpretativos, construindo objetos específicos (como \"doentes\" e \"doenças\") através de redes semânticas culturalmente específicas.",
            "A antropologia médica contemporânea estabeleceu consenso de que modelos explicativos biomédicos são cientificamente superiores e universalmente mais eficazes que sistemas médicos tradicionais, recomendando a substituição completa destes por aqueles em contextos interculturais."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_19",
        disciplina: "Antropologia",
        tipo: "VF",
        contexto: "Plataformas como TikTok, Instagram e Twitter tornaram-se não apenas espaços de interação social, mas também campos etnográficos importantes. Estudos recentes têm analisado como comunidades online desenvolvem normas próprias, linguagens especializadas, rituais digitais e formas de sociabilidade específicas, desafiando distinções tradicionais entre mundos \"real\" e \"virtual\".",
        pergunta: "Considerando os desenvolvimentos teóricos da antropologia digital, julgue as afirmações como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "A antropologia digital, conforme proposta por Daniel Miller e Heather Horst, não se limita a estudar tecnologias digitais como objetos, mas compreende o digital como constitutivo de grande parte da vida cultural contemporânea, exigindo métodos etnográficos adaptados.",
            "Tom Boellstorff, em seu estudo etnográfico sobre o Second Life (\"Coming of Age in Second Life\"), demonstra que ambientes virtuais simplesmente reproduzem estruturas sociais do mundo físico, sem desenvolver culturalidades ou sociabilidades específicas ao meio digital.",
            "O conceito de \"materialidade digital\", central na antropologia digital contemporânea, reconhece que tecnologias digitais não são meramente virtuais ou imateriais, mas possuem materialidades específicas que condicionam práticas, relações e experiências.",
            "A etnografia digital, segundo Christine Hine, deve analisar o online e o offline como esferas completamente separadas e autônomas, evitando qualquer abordagem que considere sua interconexão ou coprodução mútua na vida cotidiana.",
            "A corrente teórica dominante na antropologia digital argumenta que comunidades online são necessariamente menos \"reais\" ou significativas que comunidades baseadas em território físico compartilhado, constituindo apenas simulacros empobrecidos de sociabilidade autêntica."
        ],
        opcoes: [
            "V, F, V, F, F",
            "F, V, F, V, V",
            "V, V, F, F, V",
            "F, F, V, V, F",
            "V, F, F, F, V"
        ],
        resposta: "A"
    },
    {
        id: "Antropologia_20",
        disciplina: "Antropologia",
        tipo: "MC",
        contexto: "Antropólogos têm atuado cada vez mais em contextos aplicados, como defesa de direitos territoriais indígenas, elaboração de laudos antropológicos para reconhecimento de comunidades quilombolas, assessoria em políticas públicas e projetos de desenvolvimento comunitário. Esta atuação levanta questões sobre o papel político do antropólogo e a relação entre produção de conhecimento e intervenção social.",
        pergunta: "Sobre a antropologia aplicada e engajada, avalie as alternativas:",
        opcoes: [
            "A antropologia aplicada contemporânea defende posição de neutralidade absoluta do pesquisador, rejeitando qualquer forma de compromisso ou engajamento com as comunidades estudadas como violação da objetividade científica.",
            "Charles Hale propõe o conceito de \"pesquisa ativista\" para descrever uma prática antropológica que explicitamente alinha seus métodos com as lutas políticas de grupos estudados, desenvolvendo uma metodologia que combina rigor acadêmico e compromisso político, sem ver contradição entre ambos.",
            "Nancy Scheper-Hughes, em sua defesa da \"antropologia militante\", argumenta que o compromisso ético primeiro do antropólogo deve ser com a comunidade científica e seus padrões disciplinares, evitando envolvimento em questões políticas que possam comprometer a neutralidade da pesquisa.",
            "Os laudos antropológicos produzidos para reconhecimento de territórios tradicionais são considerados incompatíveis com o fazer antropológico acadêmico, pois exigem simplificação excessiva de realidades culturais complexas, sendo rejeitados pela antropologia contemporânea.",
            "A antropologia aplicada representa uma ruptura radical com a antropologia teórica, abandonando completamente questões conceituais e epistemológicas em favor de soluções puramente técnicas para problemas sociais concretos."
        ],
        resposta: "B"
    },

    // --- Economia.md (10 Questions) ---
    {
        id: "Economia_1",
        disciplina: "Economia",
        tipo: "AG",
        contexto: "A Economia Política Clássica, desenvolvida entre os séculos XVIII e XIX, estabeleceu as bases do pensamento econômico moderno. Seus principais teóricos buscavam compreender as leis que regiam a produção e distribuição da riqueza no nascente sistema capitalista industrial, em um contexto de profundas transformações sociais e econômicas.",
        pergunta: "Sobre a Economia Política Clássica, analise as afirmações abaixo:",
        afirmacoes: [
            "Adam Smith, em \"A Riqueza das Nações\" (1776), desenvolveu a teoria do valor-trabalho, argumentando que o valor das mercadorias deriva fundamentalmente da quantidade de trabalho necessária para produzi-las.",
            "David Ricardo, ao analisar a renda da terra, demonstrou como os proprietários fundiários se apropriavam de parte crescente do excedente econômico à medida que terras menos férteis eram incorporadas à produção, gerando tensões distributivas entre classes sociais.",
            "Thomas Malthus defendia que o crescimento populacional seguiria progressão geométrica enquanto a produção de alimentos cresceria em progressão aritmética, o que necessariamente levaria à pobreza dos trabalhadores independentemente do desenvolvimento econômico.",
            "Os economistas clássicos eram unânimes em defender o livre mercado sem qualquer intervenção estatal, rejeitando completamente o papel do Estado na economia.",
            "Jean-Baptiste Say formulou a \"Lei de Say\", segundo a qual a oferta cria sua própria demanda, impossibilitando crises de superprodução no capitalismo, tese aceita pela maioria dos economistas clássicos."
        ],
        opcoes: [
            "I, II e III",
            "I, III e IV",
            "II, III e V",
            "I, II e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Economia_2",
        disciplina: "Economia",
        tipo: "MC",
        contexto: "Karl Marx desenvolveu sua crítica à economia política clássica em obras como \"O Capital\", analisando as contradições internas do modo de produção capitalista. Sua teoria continua influente na análise contemporânea de fenômenos como a concentração de renda e riqueza, precarização do trabalho e crises econômicas recorrentes.",
        pergunta: "Assinale a alternativa que melhor caracteriza o conceito marxiano de mais-valia:",
        opcoes: [
            "É a diferença entre o preço final de venda de uma mercadoria e a soma dos custos de produção, representando o lucro empresarial justo que remunera o risco do investidor.",
            "Refere-se ao valor adicional criado pelo trabalho não pago aos trabalhadores, apropriado pelos proprietários dos meios de produção, constituindo a base da exploração capitalista.",
            "Corresponde à diferença entre o valor nominal e o valor real da moeda, causada pela inflação e manipulação monetária governamental.",
            "É o resultado de transações especulativas nos mercados financeiros, sem relação com a produção real de mercadorias.",
            "Representa o aumento de produtividade devido à inovação tecnológica, que beneficia igualmente trabalhadores e capitalistas em uma economia de mercado."
        ],
        resposta: "B"
    },
    {
        id: "Economia_3",
        disciplina: "Economia",
        tipo: "VF",
        contexto: "Após a Segunda Guerra Mundial, o debate sobre desenvolvimento econômico ganhou centralidade, especialmente na América Latina. Enquanto teorias convencionais viam o subdesenvolvimento como estágio transitório, teorias críticas como a Teoria da Dependência e a Análise do Sistema-Mundo propunham explicações estruturais para as desigualdades globais persistentes.",
        pergunta: "Julgue as afirmações a seguir como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "A Teoria da Dependência, desenvolvida por autores como Raúl Prebisch e Celso Furtado, argumenta que o subdesenvolvimento não é uma etapa prévia ao desenvolvimento, mas resultado histórico das relações econômicas internacionais desiguais.",
            "A análise do Sistema-Mundo, proposta por Immanuel Wallerstein, divide a economia global em centro, semiperiferia e periferia, sustentando que estas posições estruturais determinam as possibilidades de desenvolvimento econômico das nações.",
            "A Teoria da Modernização, defendida por W.W. Rostow, propõe que todos os países seguem as mesmas etapas lineares de desenvolvimento, sendo o subdesenvolvimento apenas um estágio temporário que será superado pela industrialização.",
            "Teóricos da dependência como Fernando Henrique Cardoso desenvolveram o conceito de \"desenvolvimento dependente-associado\", reconhecendo possibilidades limitadas de desenvolvimento capitalista na periferia, ainda que em condições de dependência estrutural.",
            "A Análise do Sistema-Mundo considera que a mobilidade de países entre centro e periferia é impossível, estabelecendo posições fixas e imutáveis na hierarquia econômica global."
        ],
        opcoes: [
            "V, V, V, V, F",
            "F, V, F, V, V",
            "V, V, V, F, F",
            "F, F, V, V, V",
            "V, F, F, V, F"
        ],
        resposta: "A"
    },
    {
        id: "Economia_4",
        disciplina: "Economia",
        tipo: "MC", // Incorreta
        contexto: "A partir da década de 1970, o modelo neoliberal ganhou proeminência global como resposta à crise do Estado de bem-estar social e às dificuldades econômicas do período. Implementado inicialmente no Chile sob Pinochet, expandiu-se para Reino Unido (Thatcher), EUA (Reagan) e posteriormente para diversos países em desenvolvimento, frequentemente associado a programas de ajuste estrutural promovidos pelo FMI e Banco Mundial.",
        pergunta: "Sobre o neoliberalismo e suas consequências sociais, assinale a alternativa INCORRETA:",
        opcoes: [
            "O neoliberalismo defende a redução do papel do Estado na economia, privatização de empresas estatais, desregulamentação dos mercados e liberalização comercial e financeira.",
            "Políticas neoliberais têm sido associadas ao aumento da desigualdade social em diversos países, com crescimento da concentração de renda e riqueza, como demonstrado por economistas como Thomas Piketty.",
            "David Harvey caracteriza o neoliberalismo como um projeto político de restauração do poder de classe, mais do que simplesmente um conjunto de políticas econômicas técnicas e neutras.",
            "O Consenso de Washington, termo cunhado por John Williamson, refere-se ao conjunto de medidas econômicas que organismos financeiros internacionais passaram a recomendar para países em desenvolvimento, centradas na austeridade fiscal e liberalização econômica.",
            "O neoliberalismo produziu resultados uniformemente positivos em termos de crescimento econômico e redução da pobreza em todos os países onde foi implementado, eliminando crises financeiras e instabilidades econômicas."
        ],
        resposta: "E"
    },
    {
        id: "Economia_5",
        disciplina: "Economia",
        tipo: "AG",
        contexto: "A economia institucional surgiu como crítica à visão neoclássica, enfatizando o papel das instituições no desempenho econômico. Desde Thorstein Veblen até Douglass North e Daron Acemoglu, institucionalistas têm investigado como regras formais e informais, valores culturais e estruturas de poder moldam o comportamento econômico e as trajetórias de desenvolvimento.",
        pergunta: "Sobre a economia institucional, analise as afirmações:",
        afirmacoes: [
            "Instituições, na definição de Douglass North, são \"regras do jogo\" que estruturam incentivos nas interações humanas, podendo ser formais (leis, constituições) ou informais (costumes, tradições).",
            "A teoria da \"dependência da trajetória\" (path dependence) sugere que escolhas institucionais passadas constrangem possibilidades futuras, explicando por que instituições ineficientes podem persistir ao longo do tempo.",
            "A Nova Economia Institucional, representada por autores como Oliver Williamson, analisa como arranjos institucionais surgem para minimizar custos de transação em situações de informação imperfeita e racionalidade limitada.",
            "Para economistas institucionalistas, mercados são instituições históricas e socialmente construídas, não entidades naturais que operariam independentemente de contextos institucionais específicos.",
            "A economia institucional rejeita completamente análises quantitativas e formalizações matemáticas, defendendo abordagens exclusivamente qualitativas e narrativas históricas."
        ],
        opcoes: [
            "I, II, III e IV",
            "I, II e V",
            "II, III e IV",
            "I, III, IV e V",
            "II, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Economia_6",
        disciplina: "Economia",
        tipo: "MC",
        contexto: "No contexto da globalização e financeirização da economia mundial, as relações entre Estados, mercados financeiros e empresas transnacionais têm se transformado significativamente. A crise financeira global de 2008 e a subsequente Grande Recessão evidenciaram a complexidade das interconexões econômicas globais e a fragilidade dos arranjos regulatórios existentes.",
        pergunta: "Com base nas teorias da Economia Política Internacional, assinale a alternativa correta:",
        opcoes: [
            "A teoria da estabilidade hegemônica, associada a Robert Gilpin e Charles Kindleberger, argumenta que a ordem econômica liberal internacional depende da presença de uma potência hegemônica disposta e capaz de estabelecer e manter suas regras, explicando parcialmente crises de governança global em períodos de transição hegemônica.",
            "A visão neorrealista da economia política internacional considera que a cooperação econômica entre nações é facilmente alcançável mesmo na ausência de instituições internacionais, uma vez que o livre mercado naturalmente harmoniza interesses nacionais divergentes.",
            "A financeirização da economia global, processo pelo qual os mercados financeiros ganham proeminência sobre a economia real, tem promovido distribuição mais equitativa da riqueza e reduzido a volatilidade econômica internacional.",
            "Segundo a perspectiva liberal institucionalista, regimes e organizações internacionais são irrelevantes para a cooperação econômica global, uma vez que Estados sempre priorizam ganhos relativos sobre ganhos absolutos.",
            "A abordagem marxista da economia política internacional rejeita a análise de conflitos interestatais, focando exclusivamente na cooperação entre elites capitalistas transnacionais como único fator relevante nas relações econômicas globais."
        ],
        resposta: "A"
    },
    {
        id: "Economia_7",
        disciplina: "Economia",
        tipo: "VF",
        contexto: "Além das correntes dominantes, economistas heterodoxos têm oferecido contribuições importantes para compreender fenômenos como desigualdade, desenvolvimento sustentável e alternativas ao modelo econômico convencional. Essas abordagens ganharam relevância especial após a crise financeira de 2008, que expôs limitações dos modelos econômicos ortodoxos.",
        pergunta: "Julgue as afirmações a seguir como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "Amartya Sen propôs uma abordagem do desenvolvimento como liberdade, enfatizando capacidades humanas e funcionamentos como métricas mais adequadas de bem-estar do que indicadores puramente monetários como PIB.",
            "Thomas Piketty, em \"O Capital no Século XXI\", demonstra empiricamente como a taxa de retorno do capital tende a superar a taxa de crescimento econômico (r > g), gerando concentração crescente de riqueza quando não contrabalançada por políticas redistributivas.",
            "Elinor Ostrom, primeira mulher a receber o Prêmio Nobel de Economia, demonstrou a inviabilidade absoluta da gestão de bens comuns por comunidades locais, defendendo privatização ou controle estatal como únicas soluções para a \"tragédia dos comuns\".",
            "A economia feminista, representada por autoras como Marilyn Waring, critica a invisibilidade do trabalho doméstico não remunerado nas contas nacionais e teorias econômicas convencionais, propondo abordagens que reconheçam a economia do cuidado.",
            "Kate Raworth, com seu modelo de \"Economia Donut\", propõe uma visão econômica que busca equilibrar as necessidades humanas básicas (limite interno) com os limites planetários ecológicos (limite externo), criticando a fixação no crescimento econômico ilimitado."
        ],
        opcoes: [
            "V, V, F, V, V",
            "V, F, V, F, V",
            "F, V, V, V, F",
            "V, V, V, F, F",
            "F, F, F, V, V"
        ],
        resposta: "A"
    },
    {
        id: "Economia_8",
        disciplina: "Economia",
        tipo: "AG",
        contexto: "A concentração de propriedade dos meios de comunicação e plataformas digitais levanta questões sobre poder econômico e diversidade cultural. Segundo dados recentes, apenas cinco empresas tecnológicas (Alphabet, Amazon, Apple, Meta e Microsoft) controlam parcela significativa do mercado digital global, enquanto conglomerados de mídia tradicionais passam por processos de fusão e aquisição, aumentando a concentração do setor.",
        pergunta: "Sobre a Economia Política da Comunicação e Cultura, analise as afirmações:",
        afirmacoes: [
            "A mercantilização da cultura e informação, analisada por teóricos como Dallas Smythe e Herbert Schiller, envolve a transformação de bens culturais e comunicacionais em mercadorias sujeitas à lógica de acumulação capitalista.",
            "O conceito de \"trabalho do espectador\" (audience labor), desenvolvido na economia política da comunicação, sugere que audiências de mídia realizam trabalho não remunerado ao \"produzir\" sua própria atenção como mercadoria que é vendida pelos meios de comunicação a anunciantes.",
            "Plataformas digitais como Google e Facebook operam segundo um modelo de negócios que independe completamente da venda de publicidade, eliminando qualquer conflito potencial entre interesses comerciais e função informativa dos meios de comunicação.",
            "A economia política da comunicação analisa como políticas de propriedade intelectual, ao estender direitos autorais e patentes, podem beneficiar grandes corporações enquanto restringem acesso ao conhecimento e criatividade culturais.",
            "A concentração de propriedade nos setores de mídia e telecomunicações é vista unanimemente por economistas políticos da comunicação como positiva para a inovação e diversidade cultural, sendo desnecessária qualquer forma de regulação antimonopólio nestes setores."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Economia_9",
        disciplina: "Economia",
        tipo: "MC", // Incorreta
        contexto: "A escola neoclássica, dominante no ensino e prática econômica contemporâneos, desenvolveu-se a partir da revolução marginalista do final do século XIX com autores como William Stanley Jevons, Carl Menger e León Walras. Seus conceitos fundamentais estruturam modelos econômicos convencionais utilizados por governos, bancos centrais e instituições financeiras internacionais.",
        pergunta: "Sobre os pressupostos fundamentais da economia neoclássica, assinale a alternativa INCORRETA:",
        opcoes: [
            "A teoria da utilidade marginal, central na economia neoclássica, estabelece que o valor dos bens deriva da utilidade adicional que proporcionam ao consumidor, substituindo a teoria do valor-trabalho dos economistas clássicos.",
            "O homo economicus neoclássico é caracterizado como agente racional que busca maximizar utilidade (consumidores) ou lucro (produtores), com informação perfeita e preferências estáveis, atuando em mercados competitivos.",
            "A economia neoclássica utiliza extensivamente métodos matemáticos formais para modelar comportamentos econômicos, buscando estabelecer leis gerais semelhantes às das ciências naturais.",
            "A teoria neoclássica reconhece amplamente as limitações de seus pressupostos simplificadores, como racionalidade perfeita e informação completa, considerando-os apenas instrumentos heurísticos temporários que devem ser substituídos por pressupostos mais realistas.",
            "O equilíbrio geral walrasiano representa situação ideal onde oferta e demanda estão equilibradas em todos os mercados simultaneamente, estabelecendo preços que otimizam alocação de recursos escassos."
        ],
        resposta: "D"
    },
    {
        id: "Economia_10",
        disciplina: "Economia",
        tipo: "VF",
        contexto: "Após a crise financeira global de 2008, intensificaram-se as críticas à economia neoclássica, questionando sua capacidade de prever crises e oferecer respostas adequadas a problemas econômicos contemporâneos. Movimentos como Rethinking Economics e Institute for New Economic Thinking têm promovido pluralismo teórico e metodológico nas ciências econômicas.",
        pergunta: "Sobre as críticas à economia neoclássica, julgue as afirmações a seguir como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "A crítica pós-keynesiana argumenta que a economia neoclássica subestima a incerteza fundamental presente nas decisões econômicas, tratando risco probabilístico e incerteza não-quantificável como equivalentes.",
            "A economia comportamental, representada por pesquisadores como Daniel Kahneman e Richard Thaler, demonstra experimentalmente como agentes econômicos reais frequentemente violam pressupostos de racionalidade da teoria neoclássica.",
            "A crítica ecológica à economia neoclássica aponta como esta trata recursos naturais e serviços ecossistêmicos como substituíveis por capital produzido pelo homem, ignorando limites biofísicos e termodinâmicos do crescimento econômico.",
            "Economistas institucionalistas criticam a abstração da teoria neoclássica em relação a instituições, normas sociais e relações de poder que estruturam mercados reais.",
            "A abordagem neoclássica tem demonstrado sucesso consistente na previsão de crises financeiras sistêmicas, graças a seus modelos de equilíbrio geral que incorporam plenamente a instabilidade inerente aos mercados financeiros."
        ],
        opcoes: [
            "V, V, V, V, F",
            "F, V, F, V, V",
            "V, F, V, F, V",
            "F, F, V, V, F",
            "V, V, F, F, V"
        ],
        resposta: "A"
    },

    // --- Epistemologia.md (10 Questions) ---
    {
        id: "Epistemologia_1",
        disciplina: "Epistemologia",
        tipo: "AG",
        contexto: "A relação entre conhecimento científico e senso comum constitui tema central para a epistemologia das ciências sociais. Diversos autores, como Bachelard e Bourdieu, propuseram a necessidade de ruptura com o senso comum para constituir conhecimento científico, enquanto outros, como Santos e Moscovici, defendem possibilidades de diálogo entre estas formas de conhecimento.",
        pergunta: "Sobre a relação entre conhecimento científico e senso comum nas ciências sociais, analise as afirmações:",
        afirmacoes: [
            "Para Pierre Bourdieu, a construção do objeto científico exige ruptura epistemológica com representações do senso comum, que funcionam como obstáculos ao conhecimento científico por naturalizarem fenômenos socialmente construídos.",
            "Boaventura de Sousa Santos propõe, em sua \"epistemologia do Sul\", uma \"dupla ruptura epistemológica\" onde, após romper com o senso comum, a ciência deve transformá-lo, criando um \"senso comum esclarecido\" que incorpore conhecimentos científicos.",
            "A relação entre ciência e senso comum é unidirecional: a ciência fornece conhecimentos que eventualmente se popularizam, enquanto o senso comum não contribui significativamente para a produção científica.",
            "Para Bachelard, os obstáculos epistemológicos podem se originar não apenas do senso comum, mas também da própria ciência, quando esta se torna dogmática e resistente a inovações conceituais.",
            "A distinção entre conhecimento científico e senso comum nas ciências sociais é absoluta e intransponível, não havendo qualquer forma de continuidade ou complementaridade entre ambos."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Epistemologia_2",
        disciplina: "Epistemologia",
        tipo: "MC", // Incorreta
        contexto: "O positivismo, como tradição epistemológica nas ciências sociais, tem suas raízes no pensamento de Auguste Comte e Émile Durkheim, enquanto abordagens pós-positivistas surgiram como críticas a seus pressupostos fundamentais. Este debate permeia questões metodológicas e teóricas centrais para a pesquisa social contemporânea.",
        pergunta: "Assinale a alternativa que caracteriza INCORRETAMENTE a distinção entre positivismo e pós-positivismo nas ciências sociais:",
        opcoes: [
            "O positivismo defende a unidade metodológica entre ciências naturais e sociais, enquanto perspectivas pós-positivistas frequentemente argumentam pela especificidade epistemológica das ciências sociais devido à natureza de seu objeto.",
            "A tradição positivista enfatiza a neutralidade axiológica e a objetividade como ideais científicos, enquanto abordagens pós-positivistas reconhecem a impossibilidade de separação completa entre fatos e valores na pesquisa social.",
            "O pós-positivismo nas ciências sociais engloba diversas correntes como hermenêutica, fenomenologia e teoria crítica, que compartilham a crítica à concepção positivista de ciência, embora proponham alternativas epistemológicas distintas.",
            "Para o positivismo, o objetivo principal das ciências sociais é identificar regularidades sociais análogas às leis naturais, enquanto perspectivas pós-positivistas frequentemente enfatizam a compreensão interpretativa e contextual dos fenômenos sociais.",
            "O pós-positivismo representa uma evolução cronológica do positivismo, tendo superado completamente esta abordagem nas ciências sociais contemporâneas, que abandonaram definitivamente a busca por objetividade e generalizações empíricas."
        ],
        resposta: "E"
    },
    {
        id: "Epistemologia_3",
        disciplina: "Epistemologia",
        tipo: "VF",
        contexto: "A noção de paradigma, desenvolvida por Thomas Kuhn em \"A Estrutura das Revoluções Científicas\" (1962), tem sido aplicada e debatida nas ciências sociais, gerando discussões sobre sua adequação para compreender o desenvolvimento do conhecimento em campos como sociologia, antropologia e ciência política.",
        pergunta: "Julgue as afirmações a seguir sobre a aplicabilidade do conceito kuhniano de paradigma às ciências sociais:",
        vfStatements: [
            "Diferentemente das ciências naturais, as ciências sociais são caracterizadas pelo que Robert Merton chamou de \"pluralismo teórico\", com múltiplos paradigmas coexistindo simultaneamente, o que problematiza a noção kuhniana de paradigma dominante e revolução científica.",
            "Segundo Kuhn, as ciências sociais ainda não alcançaram o status de ciência normal por não possuírem um paradigma unificador, permanecendo em estágio pré-paradigmático caracterizado por debates sobre fundamentos.",
            "A incomensurabilidade entre paradigmas, conceito central na teoria kuhniana, implica impossibilidade de tradução completa entre diferentes estruturas conceituais, o que explica parcialmente a dificuldade de comunicação entre diferentes tradições teóricas nas ciências sociais.",
            "Na perspectiva kuhniana, exemplares (exemplos compartilhados de resolução de problemas) são tão importantes quanto generalizações simbólicas na constituição de paradigmas, o que tem implicações para compreender como estudos de caso exemplares funcionam nas ciências sociais.",
            "A teoria dos paradigmas de Kuhn é completamente inaplicável às ciências sociais, pois estas lidam com fenômenos históricos, culturalmente situados e não generalizáveis, diferentemente das ciências naturais que tratam de fenômenos universais."
        ],
        opcoes: [
            "V, V, V, V, F",
            "V, F, V, V, F",
            "F, V, F, V, V",
            "V, V, F, F, V",
            "F, F, V, V, V"
        ],
        resposta: "A"
    },
    {
        id: "Epistemologia_4",
        disciplina: "Epistemologia",
        tipo: "MC",
        contexto: "Gaston Bachelard desenvolveu o conceito de \"obstáculos epistemológicos\" para analisar impedimentos ao progresso do conhecimento científico. Embora sua teoria tenha sido originalmente formulada pensando nas ciências físicas, autores como Pierre Bourdieu e Loïc Wacquant adaptaram esta perspectiva para as ciências sociais.",
        pergunta: "Sobre os obstáculos epistemológicos nas ciências sociais, assinale a alternativa correta:",
        opcoes: [
            "O obstáculo da \"experiência primeira\" não se aplica às ciências sociais, uma vez que estas lidam exclusivamente com fenômenos não observáveis diretamente, sem relação com percepções imediatas.",
            "O \"conhecimento geral\" como obstáculo epistemológico manifesta-se nas ciências sociais quando conceitos vagos ou excessivamente amplos (como \"globalização\" ou \"cultura\") são utilizados para explicar fenômenos diversos sem especificação adequada de mecanismos ou relações causais.",
            "Segundo Bachelard, os obstáculos epistemológicos são superados definitivamente com o avanço da ciência, não podendo ressurgir em novos contextos ou sob novas formas nas ciências sociais contemporâneas.",
            "O antropomorfismo, tendência a atribuir características humanas a entidades não-humanas, não constitui obstáculo epistemológico para as ciências sociais, uma vez que estas estudam especificamente fenômenos humanos.",
            "A \"psicanálise do conhecimento objetivo\" proposta por Bachelard sugere que obstáculos epistemológicos têm origem exclusivamente em fatores psicológicos individuais dos pesquisadores, não sendo influenciados por estruturas sociais ou institucionais do campo científico."
        ],
        resposta: "B"
    },
    {
        id: "Epistemologia_5",
        disciplina: "Epistemologia",
        tipo: "AG",
        contexto: "O debate entre métodos quantitativos e qualitativos nas ciências sociais tem uma longa história, refletindo não apenas diferenças técnicas, mas também posições epistemológicas sobre a natureza da realidade social e como esta pode ser conhecida. Abordagens contemporâneas frequentemente questionam esta dicotomia, propondo perspectivas integradas.",
        pergunta: "Com base no debate sobre métodos quantitativos e qualitativos nas ciências sociais, analise as afirmações:",
        afirmacoes: [
            "A diferença entre métodos quantitativos e qualitativos reflete apenas escolhas técnicas de coleta e análise de dados, não estando relacionada a posições epistemológicas ou ontológicas mais amplas sobre a natureza da realidade social.",
            "O desenho de métodos mistos, que combina abordagens quantitativas e qualitativas em um mesmo estudo, pode servir a diferentes propósitos como triangulação (convergência de resultados), complementaridade (elaboração de diferentes aspectos) ou desenvolvimento (resultados de um método informando o outro).",
            "Segundo autores como Norman Denzin e Yvonna Lincoln, métodos qualitativos estão necessariamente vinculados a uma epistemologia interpretativa que enfatiza a construção social da realidade, enquanto métodos quantitativos vinculam-se exclusivamente a epistemologias positivistas.",
            "A dicotomia quantitativo-qualitativo tem sido criticada por autores como John Law e Bruno Latour, que argumentam que métodos não apenas descrevem realidades, mas participam ativamente em sua produção, questionando pressupostos objetivistas de ambas tradições metodológicas.",
            "Dados os avanços em métodos computacionais e análise de grandes volumes de dados (big data), a pesquisa qualitativa tornou-se obsoleta nas ciências sociais contemporâneas, sendo gradualmente substituída por abordagens quantitativas mais precisas e objetivas."
        ],
        opcoes: [
            "I, II e III",
            "I, III e V",
            "II e IV",
            "II, III e IV",
            "III, IV e V"
        ],
        resposta: "C"
    },
    {
        id: "Epistemologia_6",
        disciplina: "Epistemologia",
        tipo: "MC", // Incorreta
        contexto: "Diferentes lógicas de investigação – dedução, indução e abdução – estruturam o raciocínio científico nas ciências sociais, orientando a relação entre teoria e dados empíricos. Cada uma destas abordagens lógicas possui implicações distintas para o desenho de pesquisa e para a construção de conhecimento.",
        pergunta: "Sobre as lógicas de investigação nas ciências sociais, assinale a alternativa INCORRETA:",
        opcoes: [
            "A lógica dedutiva, característica de abordagens hipotético-dedutivas como a de Karl Popper, parte de premissas gerais (teorias) para derivar hipóteses específicas que são então confrontadas com a realidade empírica.",
            "A lógica indutiva, associada ao positivismo lógico e a tradições empiristas, parte de observações particulares para estabelecer generalizações, enfatizando acumulação de evidências como base para inferências sobre regularidades sociais.",
            "A lógica abdutiva, teorizada por Charles S. Peirce e aplicada em abordagens como a teoria fundamentada (grounded theory), envolve um processo criativo de geração de hipóteses explanatórias para fenômenos surpreendentes ou anômalos.",
            "Na prática da pesquisa social, dedução, indução e abdução frequentemente se combinam em um processo iterativo, com movimentos entre teoria e dados que não seguem rigidamente uma única lógica em todas as etapas da investigação.",
            "A escolha entre dedução, indução ou abdução é determinada exclusivamente pelo método de pesquisa selecionado, sendo a dedução necessariamente vinculada a métodos quantitativos e a indução e abdução a métodos qualitativos."
        ],
        resposta: "E"
    },
    {
        id: "Epistemologia_7",
        disciplina: "Epistemologia",
        tipo: "VF",
        contexto: "Os conceitos de validade (grau em que uma medida ou observação representa adequadamente o fenômeno que pretende captar) e confiabilidade (consistência ou estabilidade de resultados em repetidas observações) são fundamentais para avaliar o rigor científico na pesquisa social, embora sejam conceitualizados diferentemente em tradições metodológicas distintas.",
        pergunta: "Julgue as afirmações a seguir sobre validade e confiabilidade na pesquisa social:",
        vfStatements: [
            "Enquanto a tradição quantitativa enfatiza validade interna, validade externa, validade de construto e confiabilidade estatística, pesquisadores qualitativos frequentemente propõem critérios alternativos como credibilidade, transferibilidade, dependabilidade e confirmabilidade (Lincoln e Guba).",
            "A triangulação metodológica (uso de múltiplos métodos para estudar um mesmo fenômeno) contribui potencialmente para a validade da pesquisa ao corroborar resultados por diferentes vias, mas não garante automaticamente maior validade se os diferentes métodos compartilharem os mesmos vieses.",
            "A validade ecológica refere-se ao grau em que descobertas científicas são aplicáveis ao mundo social real, para além de ambientes artificiais ou controlados de pesquisa, sendo particularmente relevante para estudos experimentais nas ciências sociais.",
            "A reflexividade, processo pelo qual pesquisadores examinam criticamente como sua posição social, pressupostos e decisões metodológicas influenciam a pesquisa, é irrelevante para questões de validade na pesquisa social qualitativa.",
            "A confiabilidade intercoder ou interrater, que mede concordância entre diferentes codificadores ou avaliadores analisando os mesmos dados, é um critério aplicável apenas à pesquisa quantitativa, não tendo equivalente em abordagens qualitativas."
        ],
        opcoes: [
            "V, V, V, F, F",
            "F, V, F, V, V",
            "V, F, V, F, V",
            "F, F, V, V, F",
            "V, V, F, F, V"
        ],
        resposta: "A"
    },
    {
        id: "Epistemologia_8",
        disciplina: "Epistemologia",
        tipo: "AG",
        contexto: "Nas últimas décadas, tem havido um crescente interesse por abordagens que transcendem fronteiras disciplinares nas ciências sociais, seja através da interdisciplinaridade (integração de conceitos e métodos de diferentes disciplinas) ou da transdisciplinaridade (transcendência das estruturas disciplinares em direção a novos quadros conceituais integrados).",
        pergunta: "Sobre interdisciplinaridade e transdisciplinaridade nas ciências sociais, analise as proposições:",
        afirmacoes: [
            "A interdisciplinaridade pode ser conceitualizada em diferentes níveis: multidisciplinaridade (justaposição de perspectivas), interdisciplinaridade (integração parcial) e transdisciplinaridade (integração que transcende as disciplinas originais), representando diferentes graus de integração epistêmica.",
            "Segundo Immanuel Wallerstein, a divisão do conhecimento social em disciplinas distintas (economia, sociologia, ciência política, etc.) reflete a epistemologia do século XIX e sua visão compartimentalizada da realidade social, que se tornou crescentemente problemática para compreender fenômenos complexos contemporâneos.",
            "A transdisciplinaridade, como proposta por Basarab Nicolescu, implica não apenas integração entre disciplinas acadêmicas, mas também abertura a outras formas de conhecimento (tradicional, experiencial, artístico), questionando a hierarquia que coloca o conhecimento científico-disciplinar como superior.",
            "Campos interdisciplinares consolidados nas ciências sociais, como estudos de gênero, estudos culturais, estudos pós-coloniais e estudos ambientais, representam tentativas bem-sucedidas de superar completamente estruturas disciplinares, tendo eliminado resquícios das disciplinas que os originaram.",
            "A institucionalização acadêmica em departamentos, periódicos e associações disciplinares não constitui barreira significativa à interdisciplinaridade nas ciências sociais contemporâneas, sendo um fator neutro que não influencia práticas de pesquisa ou trajetórias profissionais."
        ],
        opcoes: [
            "I, II e III",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "Epistemologia_9",
        disciplina: "Epistemologia",
        tipo: "MC",
        contexto: "O debate entre posições relativistas e realistas perpassa a epistemologia das ciências sociais, envolvendo questões sobre a natureza da realidade social, a possibilidade de conhecimento objetivo e o status das teorias sociais. Este debate ganhou particular proeminência após a chamada \"guerra das ciências\" e as controvérsias em torno do construtivismo social.",
        pergunta: "Sobre o debate entre relativismo e realismo nas ciências sociais, assinale a alternativa correta:",
        opcoes: [
            "O relativismo epistemológico defende necessariamente que todas as afirmações sobre o mundo social são igualmente válidas, negando qualquer possibilidade de avaliação racional ou comparativa entre diferentes teorias ou explicações sociais.",
            "O realismo crítico, associado a Roy Bhaskar, combina um realismo ontológico (existe uma realidade independente de nossas percepções) com um relativismo epistemológico moderado (nosso conhecimento dessa realidade é sempre parcial e historicamente situado), propondo uma alternativa tanto ao positivismo quanto ao construtivismo radical.",
            "A virada pós-moderna nas ciências sociais, representada por autores como Jean-François Lyotard e Jean Baudrillard, afirma a impossibilidade de qualquer forma de objetividade ou verdade, defendendo que a ciência social deve abandonar completamente pretensões explanatórias em favor de narrativas puramente literárias.",
            "O programa forte da sociologia do conhecimento científico (Barry Barnes, David Bloor) defende que apenas o conhecimento social, não o natural, é socialmente construído, estabelecendo uma assimetria epistemológica fundamental entre ciências naturais e sociais.",
            "As ciências sociais contemporâneas estabeleceram consenso em torno do realismo científico tradicional, rejeitando uniformemente perspectivas construtivistas ou interpretativas como incompatíveis com a objetividade científica."
        ],
        resposta: "B"
    },
    {
        id: "Epistemologia_10",
        disciplina: "Epistemologia",
        tipo: "VF",
        contexto: "Questões éticas na pesquisa social envolvem não apenas conformidade com regulamentos e códigos institucionais, mas também reflexões epistemológicas fundamentais sobre a relação entre pesquisador e pesquisados, potenciais consequências da pesquisa e responsabilidades sociais da ciência.",
        pergunta: "Com base nas discussões contemporâneas sobre ética e epistemologia na pesquisa social, julgue os itens a seguir:",
        vfStatements: [
            "A neutralidade axiológica proposta por Max Weber implica que pesquisadores sociais devem abster-se de julgamentos de valor em sua pesquisa, o que elimina completamente dilemas éticos no processo de investigação científica.",
            "Metodologias participativas e colaborativas, como pesquisa-ação e etnografia colaborativa, representam não apenas escolhas técnicas, mas posicionamentos epistemológicos que desafiam hierarquias tradicionais entre pesquisador e pesquisados, reconhecendo estes últimos como coprodutores de conhecimento.",
            "A questão do consentimento informado nas ciências sociais envolve complexidades específicas, como em etnografias de longa duração ou pesquisas em contextos públicos, que não são adequadamente contempladas por modelos éticos importados das ciências biomédicas.",
            "Segundo a epistemologia feminista de pesquisadores como Donna Haraway, a objetividade nas ciências sociais não requer neutralidade desengajada, mas \"conhecimentos situados\" que reconheçam explicitamente a posicionalidade do pesquisador e suas implicações éticas e políticas.",
            "Considerações éticas na pesquisa social são extrínsecas ao processo de produção de conhecimento, constituindo restrições externas que limitam a liberdade científica sem contribuir para a qualidade epistemológica da investigação."
        ],
        opcoes: [
            "F, V, V, V, F",
            "V, F, V, F, V",
            "F, V, F, V, F",
            "V, F, F, V, V",
            "F, F, V, F, V"
        ],
        resposta: "A"
    },

    // --- Ciencia Politica.md (20 Questions) ---
    {
        id: "CienciaPolitica_1",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "Nos últimos anos, diversos países têm experimentado crises de legitimidade política, com manifestações populares, desconfiança institucional e o surgimento de movimentos que questionam o funcionamento dos sistemas democráticos tradicionais. No Brasil, esse fenômeno se manifesta em pesquisas que apontam baixos índices de confiança em instituições como o Congresso Nacional, partidos políticos e o sistema judiciário.",
        pergunta: "Sobre o conceito de legitimidade na teoria política weberiana e suas aplicações contemporâneas, analise as afirmações:",
        afirmacoes: [
            "Para Max Weber, a legitimidade racional-legal, baseada na crença na legalidade das ordens estabelecidas e do direito de mando daqueles que exercem a dominação, constitui o principal fundamento de autoridade no Estado moderno.",
            "A erosão da confiança nas instituições democráticas poderia ser interpretada, na perspectiva weberiana, como uma crise da dominação carismática, sem afetar necessariamente a legitimidade racional-legal.",
            "Weber considera que os três tipos puros de dominação legítima (tradicional, carismática e racional-legal) são mutuamente excludentes, impossibilitando a coexistência de diferentes fontes de legitimidade em um mesmo sistema político.",
            "O conceito weberiano de legitimidade se baseia na probabilidade de obter obediência a determinado mandato, o que implica reconhecer a dimensão subjetiva da aceitação da autoridade política.",
            "Nas democracias contemporâneas, o surgimento de líderes populistas que estabelecem conexões diretas com seus seguidores, desafiando procedimentos institucionais, poderia exemplificar a tensão entre legitimidade carismática e legitimidade racional-legal descrita por Weber."
        ],
        opcoes: [
            "I, II e III",
            "I, IV e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "B"
    },
    {
        id: "CienciaPolitica_2",
        disciplina: "Ciencia Politica",
        tipo: "VF",
        contexto: "A pandemia de COVID-19 reacendeu debates sobre os limites da autoridade estatal e as liberdades individuais. Medidas como lockdowns, obrigatoriedade de vacinação e restrições à circulação geraram controvérsias políticas e jurídicas em diversos países, evidenciando tensões entre segurança coletiva e direitos individuais.",
        pergunta: "Considerando a teoria contratualista de Thomas Hobbes, julgue as afirmações a seguir como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "Segundo Hobbes, no estado de natureza, os indivíduos viveriam em constante medo e insegurança, havendo \"guerra de todos contra todos\", o que justificaria a transferência de liberdades naturais para um poder soberano capaz de garantir paz e segurança.",
            "Em uma interpretação hobbesiana, a aceitação de restrições temporárias às liberdades individuais durante uma pandemia poderia ser justificada pelo objetivo primordial do contrato social: a preservação da vida.",
            "Para Hobbes, o poder soberano estabelecido pelo contrato social deve ser limitado pela separação de poderes e por um sistema de freios e contrapesos, garantindo o equilíbrio entre autoridade estatal e liberdades individuais.",
            "A teoria hobbesiana reconhece um direito inalienável de resistência contra o soberano sempre que este impuser restrições às liberdades individuais, mesmo quando tais restrições visem à segurança coletiva.",
            "No Leviatã, Hobbes argumenta que o poder soberano deve ser absoluto e indivisível, uma vez que a fragmentação da autoridade poderia reconduzir à insegurança que caracteriza o estado de natureza."
        ],
        opcoes: [
            "V, V, F, F, V",
            "V, F, V, V, F",
            "F, V, V, F, F",
            "F, F, V, V, V",
            "V, V, F, V, F"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_3",
        disciplina: "Ciencia Politica",
        tipo: "MC",
        contexto: "Em diversos países, incluindo o Brasil, observa-se o fenômeno da judicialização da política, caracterizado pela crescente intervenção do Poder Judiciário em questões tradicionalmente decididas pelas instâncias representativas. Esse processo tem suscitado debates sobre os limites de atuação de cada poder e o equilíbrio institucional no Estado Democrático de Direito contemporâneo.",
        pergunta: "A respeito da teoria da separação dos poderes e sua aplicação contemporânea, assinale a alternativa correta:",
        opcoes: [
            "A teoria da separação dos poderes, conforme elaborada por Montesquieu em \"O Espírito das Leis\", defende a independência absoluta entre os poderes, sem qualquer possibilidade de interferência mútua ou sistema de freios e contrapesos.",
            "Na concepção original de Montesquieu, o Poder Judiciário deveria exercer a função de árbitro final em conflitos políticos fundamentais, o que legitima historicamente o fenômeno contemporâneo da judicialização da política.",
            "O princípio da separação dos poderes tornou-se irrelevante nas democracias contemporâneas, uma vez que a complexidade das sociedades modernas exige centralização decisória e subordinação dos poderes Legislativo e Judiciário ao Executivo.",
            "Segundo a teoria de Montesquieu, a separação dos poderes visa impedir a concentração de autoridade nas mesmas mãos, distribuindo funções estatais distintas entre órgãos independentes e instituindo mecanismos de controle recíproco para evitar o abuso de poder.",
            "A judicialização da política representa necessariamente uma violação da teoria clássica da separação dos poderes, sendo incompatível com qualquer interpretação contemporânea do pensamento de Montesquieu ou dos fundamentos do Estado de Direito."
        ],
        resposta: "D"
    },
    {
        id: "CienciaPolitica_4",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "A ascensão de movimentos conservadores em diversos países nos últimos anos tem sido acompanhada por transformações no campo cultural e educacional. No Brasil, observam-se fenômenos como a proliferação de escolas com propostas pedagógicas tradicionais, o movimento Escola sem Partido e o crescimento de influenciadores digitais que difundem valores conservadores, paralelamente à disputa por políticas públicas na área de educação e cultura.",
        pergunta: "Considerando a teoria gramsciana sobre hegemonia e Estado ampliado, analise as afirmativas a seguir:",
        afirmacoes: [
            "Para Antonio Gramsci, a hegemonia se constrói não apenas pelo controle dos aparelhos coercitivos do Estado, mas também pela direção intelectual e moral exercida através da sociedade civil, incluindo escolas, meios de comunicação, igrejas e outras instituições culturais.",
            "O conceito gramsciano de \"Estado ampliado\" compreende tanto a sociedade política (aparelhos coercitivos) quanto a sociedade civil (aparelhos privados de hegemonia), superando a visão restrita do Estado como mero aparelho repressivo a serviço da classe dominante.",
            "Segundo Gramsci, a luta pela hegemonia nas sociedades ocidentais modernas seria primordialmente militar e econômica, com pouca relevância para os aspectos culturais, educacionais e morais.",
            "A \"guerra de posições\" na teoria gramsciana refere-se à disputa prolongada pelo consenso no âmbito da sociedade civil, em contraste com a \"guerra de movimento\" baseada no confronto direto pelo controle do aparelho estatal.",
            "Para Gramsci, os intelectuais orgânicos vinculados às classes subalternas teriam como função principal reproduzir fielmente o senso comum, evitando elaborações críticas que pudessem desestabilizar a ordem social existente."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_5",
        disciplina: "Ciencia Politica",
        tipo: "MC",
        contexto: "Crises políticas recentes em países com diferentes sistemas de governo têm reacendido o debate sobre vantagens e desvantagens do presidencialismo e do parlamentarismo. Em países como Brasil (presidencialista) e Reino Unido (parlamentarista), observam-se distintas dinâmicas de formação de maiorias, responsabilização política e estabilidade governamental.",
        pergunta: "Sobre os sistemas presidencialista e parlamentarista, avalie as alternativas:",
        opcoes: [
            "O presidencialismo caracteriza-se pela fusão entre os poderes Executivo e Legislativo, com o chefe de governo sendo necessariamente o líder do partido majoritário no parlamento, o que garante maior governabilidade e estabilidade política.",
            "No sistema parlamentarista, crises de governabilidade são tipicamente resolvidas pela dissolução do parlamento e convocação de novas eleições, enquanto no presidencialismo, a rigidez dos mandatos fixos pode prolongar impasses políticos até o término do período presidencial.",
            "O voto de desconfiança, mecanismo que permite ao parlamento destituir o primeiro-ministro e seu gabinete no sistema parlamentarista, tem equivalente direto no impeachment presidencial, que cumpre exatamente a mesma função política nos sistemas presidencialistas.",
            "Sistemas presidencialistas necessariamente adotam representação majoritária nas eleições legislativas, enquanto sistemas parlamentaristas obrigatoriamente utilizam representação proporcional, não havendo variações ou combinações possíveis entre esses elementos.",
            "No parlamentarismo, o chefe de Estado (monarca ou presidente) exerce as principais funções executivas, enquanto o primeiro-ministro limita-se a funções cerimoniais e representativas, invertendo a lógica que prevalece no sistema presidencialista."
        ],
        resposta: "B"
    },
    {
        id: "CienciaPolitica_6",
        disciplina: "Ciencia Politica",
        tipo: "MC", // Incorreta
        contexto: "A pandemia de COVID-19 evidenciou diferentes arranjos nas relações intergovernamentais em estados federativos. No Brasil, observaram-se conflitos entre União, estados e municípios sobre medidas de enfrentamento da crise sanitária, enquanto em outros países federativos, como Alemanha e Canadá, predominaram mecanismos de coordenação e cooperação entre níveis de governo.",
        pergunta: "Com base nas teorias sobre federalismo e descentralização política, e considerando o contexto apresentado, assinale a alternativa INCORRETA:",
        opcoes: [
            "O federalismo dual, caracterizado pela separação rígida de competências entre União e unidades subnacionais, tem sido progressivamente substituído por modelos cooperativos e de competências compartilhadas, que reconhecem a interdependência entre níveis de governo na implementação de políticas públicas.",
            "A descentralização política no federalismo pode assumir diferentes dimensões: administrativa (transferência de responsabilidades), fiscal (transferência de recursos e autonomia tributária) e decisória (capacidade de formular políticas próprias), que nem sempre avançam no mesmo ritmo ou intensidade.",
            "Segundo a teoria do federalismo fiscal, a descentralização favorece a eficiência na alocação de recursos públicos ao aproximar as decisões das preferências locais, embora possa comprometer objetivos de redistribuição e estabilização macroeconômica que exigem coordenação nacional.",
            "O princípio da subsidiariedade, influente em arranjos federativos contemporâneos, estabelece que as decisões devem ser tomadas no nível mais centralizado possível, transferindo-se à União todas as competências que possam ser exercidas de forma minimamente adequada pelo governo central.",
            "Sistemas federativos podem apresentar diferentes graus de simetria/assimetria constitucional (reconhecimento de diferenças entre unidades federadas) e centralização/descentralização (distribuição de recursos e competências entre níveis de governo), resultando em arranjos institucionais diversos."
        ],
        resposta: "D"
    },
    {
        id: "CienciaPolitica_7",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "Ao redor do mundo, diferentes sistemas eleitorais produzem resultados distintos em termos de representatividade, governabilidade e comportamento dos atores políticos. Nas eleições legislativas brasileiras, o sistema proporcional de lista aberta tem sido objeto de críticas quanto à fragmentação partidária e à personalização da política, motivando propostas de reforma.",
        pergunta: "Sobre os sistemas eleitorais e seus efeitos políticos, analise as seguintes afirmações:",
        afirmacoes: [
            "De acordo com as Leis de Duverger, sistemas majoritários de turno único tendem a produzir sistemas bipartidários, enquanto sistemas proporcionais e majoritários de dois turnos favorecem o multipartidarismo.",
            "O sistema proporcional de lista fechada, adotado em países como Espanha e Portugal, fortalece os partidos políticos ao dar-lhes controle sobre a ordem dos candidatos, enquanto o sistema de lista aberta, utilizado no Brasil, privilegia a competição intrapartidária e a conexão direta entre candidatos e eleitores.",
            "Sistemas mistos, como o alemão, combinam representação proporcional e majoritária, buscando equilibrar os objetivos de representatividade e governabilidade.",
            "O sistema de voto único transferível, utilizado na Irlanda e Malta, permite que o eleitor ordene suas preferências entre candidatos individuais, transferindo votos excedentes ou insuficientes e maximizando o aproveitamento das escolhas eleitorais.",
            "Independentemente do contexto sociopolítico e institucional, um mesmo sistema eleitoral produzirá sempre os mesmos efeitos sobre o sistema partidário, a representação de minorias e o comportamento dos atores políticos."
        ],
        opcoes: [
            "I, II e III",
            "I, II e IV",
            "I, III e IV",
            "II, III e V",
            "III, IV e V"
        ],
        resposta: "C"
    },
    {
        id: "CienciaPolitica_8",
        disciplina: "Ciencia Politica",
        tipo: "VF",
        contexto: "Experiências democráticas contemporâneas têm combinado elementos representativos tradicionais com inovações participativas e deliberativas. No Brasil, instrumentos como orçamentos participativos, conselhos de políticas públicas e consultas populares coexistem com instituições representativas, enquanto plataformas digitais abrem novas possibilidades de engajamento político dos cidadãos.",
        pergunta: "Considerando os diferentes modelos teóricos de democracia, julgue os itens a seguir como verdadeiros (V) ou falsos (F):",
        vfStatements: [
            "A democracia deliberativa, associada a autores como Jürgen Habermas e Joshua Cohen, enfatiza a qualidade do processo comunicativo na formação da vontade política, valorizando a troca pública de razões em condições de igualdade e a construção de consensos baseados no melhor argumento.",
            "Para a teoria da democracia participativa, desenvolvida por autores como Carole Pateman e Benjamin Barber, a participação política deve restringir-se às eleições periódicas, evitando sobrecarregar os cidadãos com decisões técnicas complexas que exigem conhecimento especializado.",
            "O modelo competitivo-elitista de democracia, representado por Joseph Schumpeter, concebe a democracia primordialmente como um método de seleção de líderes políticos através da competição pelo voto popular, limitando a participação dos cidadãos ao momento eleitoral.",
            "A democracia representativa, na concepção liberal, baseia-se no princípio da soberania popular, mas reconhece a impossibilidade prática da participação direta de todos os cidadãos em sociedades complexas e populosas, instituindo mecanismos de representação e accountability.",
            "As abordagens contemporâneas da teoria democrática tendem a considerar os modelos representativo, participativo e deliberativo como necessariamente incompatíveis, impossibilitando arranjos institucionais que combinem elementos dos diferentes modelos."
        ],
        opcoes: [
            "V, F, V, V, F",
            "V, V, F, F, V",
            "F, V, V, F, V",
            "F, F, V, V, V",
            "V, F, F, V, F"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_9",
        disciplina: "Ciencia Politica",
        tipo: "MC",
        contexto: "O Brasil tem experimentado diferentes trajetórias na implementação de políticas públicas setoriais. Enquanto algumas políticas, como o Sistema Único de Saúde (SUS), demonstram considerável resiliência institucional apesar de mudanças de governo, outras áreas apresentam maior vulnerabilidade a descontinuidades administrativas e reversões programáticas, especialmente após transições políticas.",
        pergunta: "Com base nas abordagens neoinstitucionalistas para análise de políticas públicas, assinale a alternativa correta:",
        opcoes: [
            "O neoinstitucionalismo histórico, ao enfatizar o conceito de path dependence (dependência de trajetória), sustenta que decisões iniciais na formulação de uma política pública são irrelevantes para seu desenvolvimento posterior, prevalecendo sempre a racionalidade técnica dos atores do momento presente.",
            "Para o neoinstitucionalismo da escolha racional, as preferências dos atores políticos são determinadas exclusivamente por fatores culturais e normativos, independentemente de cálculos estratégicos sobre custos e benefícios ou de constrangimentos institucionais.",
            "O conceito de \"conjunturas críticas\", central no neoinstitucionalismo histórico, refere-se a momentos históricos que abrem possibilidades de mudança institucional significativa, podendo estabelecer novos padrões de desenvolvimento das políticas públicas com efeitos duradouros.",
            "Segundo o neoinstitucionalismo sociológico, as instituições influenciam o comportamento dos atores exclusivamente através de incentivos e sanções materiais, sem qualquer efeito sobre valores, identidades ou percepções sobre o que é apropriado ou legítimo.",
            "As diferentes vertentes do neoinstitucionalismo (histórico, da escolha racional e sociológico) concordam que as instituições são irrelevantes para explicar a estabilidade ou mudança nas políticas públicas, defendendo que apenas fatores econômicos e ideológicos determinam os resultados políticos."
        ],
        resposta: "C"
    },
    {
        id: "CienciaPolitica_10",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "O cenário político global tem testemunhado a ascensão de movimentos identificados como populistas de diferentes orientações ideológicas. De Donald Trump nos EUA a partidos de extrema-direita na Europa, passando por governos de esquerda na América Latina, o termo \"populismo\" é aplicado a fenômenos diversos, gerando debates sobre sua definição, características e relação com a democracia.",
        pergunta: "Sobre o populismo e outras ideologias políticas contemporâneas, analise as afirmações a seguir:",
        afirmacoes: [
            "Na definição de Ernesto Laclau, o populismo caracteriza-se como uma lógica política que constrói um \"povo\" como sujeito político coletivo em oposição a um \"establishment\" ou elite, podendo articular-se tanto com posições de esquerda quanto de direita.",
            "O neoliberalismo, enquanto ideologia política e econômica, defende a redução da intervenção estatal na economia, a desregulamentação dos mercados e a privatização de serviços públicos, fundamentando-se nas teorias de Friedrich Hayek e Milton Friedman.",
            "O fascismo histórico caracterizou-se por elementos como ultranacionalismo, culto ao líder carismático, militarismo, anticomunismo e antiliberalismo, enquanto teorias sobre o neofascismo contemporâneo identificam adaptações desses elementos às condições políticas atuais.",
            "O conservadorismo contemporâneo, em suas diversas vertentes, caracteriza-se pela rejeição unânime a qualquer intervenção estatal na economia, adotando integralmente os princípios do liberalismo econômico clássico.",
            "O socialismo democrático distingue-se do comunismo revolucionário por defender a transformação gradual do capitalismo através de reformas dentro do marco institucional democrático, em vez da ruptura revolucionária e da ditadura do proletariado."
        ],
        opcoes: [
            "I, II e III",
            "I, II e V",
            "I, IV e V",
            "II, III e IV",
            "III, IV e V"
        ],
        resposta: "B"
    },
    {
        id: "CienciaPolitica_11",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "Organizações supranacionais, empresas transnacionais, acordos internacionais de comércio e mudanças climáticas globais têm desafiado concepções tradicionais de soberania estatal. A União Europeia, por exemplo, representa um arranjo político onde estados-nação compartilham aspectos de sua soberania, enquanto corporações globais frequentemente exercem influência econômica que transcende fronteiras nacionais.",
        pergunta: "Considerando as teorias sobre Estado e soberania, analise as afirmações a seguir:",
        afirmacoes: [
            "Segundo a definição weberiana clássica, o Estado moderno caracteriza-se pelo monopólio legítimo do uso da força em determinado território, elemento que permanece central mesmo em contextos de interdependência global.",
            "Giorgio Agamben, em sua teoria do estado de exceção, argumenta que a soberania se manifesta precisamente na capacidade de suspender a ordem jurídica normal, criando zonas onde o direito é simultaneamente aplicado e suspenso.",
            "O conceito de \"soberania westfaliana\", derivado da Paz de Westfália (1648), estabelece o princípio de não-intervenção nos assuntos internos de outros Estados, fundamento que se mantém absolutamente intacto no sistema internacional contemporâneo.",
            "Para Michel Foucault, a soberania como forma de poder foi completamente substituída por formas disciplinares e biopolíticas na contemporaneidade, tornando o conceito irrelevante para a análise política atual.",
            "A emergência de problemas transnacionais, como mudanças climáticas e fluxos migratórios, tem estimulado teorias de \"soberania compartilhada\" ou \"pós-soberania\" que reconhecem a interdependência entre Estados sem necessariamente abandonar completamente o conceito."
        ],
        opcoes: [
            "I, II e V",
            "I, III e IV",
            "II, III e V",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_12",
        disciplina: "Ciencia Politica",
        tipo: "MC", // Incorreta
        contexto: "As redes sociais têm transformado as formas de mobilização política contemporâneas. Movimentos como a Primavera Árabe, Occupy Wall Street, protestos brasileiros de 2013 e mais recentemente manifestações ambientais como Fridays for Future apresentam características distintas de ondas anteriores de ativismo: coordenação descentralizada, ausência de lideranças claras e capacidade de mobilização rápida e transnacional.",
        pergunta: "Considerando as teorias sobre movimentos sociais e sua aplicação aos movimentos contemporâneos, assinale a alternativa INCORRETA:",
        opcoes: [
            "Manuel Castells, analisando movimentos em rede, identifica como característica central destes a interação entre espaços virtuais e ocupação de espaços urbanos, criando comunidades de prática baseadas simultaneamente na conectividade digital e na ressignificação de lugares físicos.",
            "Sidney Tarrow desenvolve o conceito de \"estrutura de oportunidades políticas\" para explicar como mudanças no ambiente político (como divisões entre elites ou redução da repressão) podem abrir janelas para a ação coletiva, mesmo quando recursos e organização dos movimentos permanecem constantes.",
            "A Teoria do Processo Político, associada a autores como Charles Tilly e Doug McAdam, estabelece que os repertórios de ação coletiva (como manifestações, ocupações ou campanhas virtuais) são completamente determinados por cálculos racionais de custo-benefício, independentemente de fatores culturais ou históricos.",
            "Movimentos sociais contemporâneos frequentemente combinam demandas materiais (redistribuição econômica) e pós-materiais (reconhecimento identitário, questões ambientais, direitos sexuais), desafiando a separação rígida entre \"velhos\" e \"novos\" movimentos sociais proposta por algumas teorias.",
            "Alain Touraine argumenta que movimentos sociais são potenciais agentes históricos que não apenas reagem a condições estruturais, mas também produzem novos modelos culturais e formas de organização social, exercendo papel ativo na construção da historicidade das sociedades."
        ],
        resposta: "C"
    },
    {
        id: "CienciaPolitica_13",
        disciplina: "Ciencia Politica",
        tipo: "VF",
        contexto: "Debates contemporâneos sobre políticas de redistribuição de renda, ações afirmativas e reconhecimento de direitos de minorias envolvem diferentes concepções de justiça. No Brasil, políticas como cotas raciais em universidades e programas de transferência de renda têm gerado controvérsias que refletem visões distintas sobre igualdade, mérito e compensação histórica.",
        pergunta: "Com base nas principais teorias da justiça desenvolvidas na filosofia política contemporânea, julgue os itens como verdadeiros (V) ou falsos (F):",
        vfStatements: [
            "John Rawls, em \"Uma Teoria da Justiça\", propõe uma concepção de \"justiça como equidade\" baseada em princípios que seriam escolhidos por pessoas livres e iguais em uma posição original sob o \"véu da ignorância\", onde desconheceriam sua posição social específica.",
            "Robert Nozick, em sua teoria libertariana da justiça, defende que a distribuição de recursos é justa independentemente de seu padrão resultante, desde que derive de aquisições justas e transferências voluntárias, criticando qualquer redistribuição compulsória de renda ou riqueza.",
            "A teoria da justiça de Amartya Sen foca exclusivamente na igualdade de resultados materiais como critério de justiça, rejeitando considerações sobre capacidades, oportunidades ou processos na avaliação de arranjos sociais.",
            "Nancy Fraser propõe um modelo tridimensional de justiça que integra demandas por redistribuição econômica, reconhecimento cultural e representação política, argumentando que estas dimensões são interligadas mas não redutíveis umas às outras.",
            "Charles Taylor, em sua abordagem comunitarista, defende que princípios de justiça universalistas como os propostos por Rawls devem sempre prevalecer sobre valores culturais particulares, estabelecendo a primazia da justiça liberal sobre concepções comunitárias do bem."
        ],
        opcoes: [
            "V, V, F, V, F",
            "F, V, V, F, V",
            "V, F, F, V, V",
            "F, F, V, V, F",
            "V, V, V, F, F"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_14",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "Nas últimas décadas, observa-se globalmente a emergência de regimes que combinam elementos formalmente democráticos (como eleições regulares) com práticas autoritárias substantivas (como restrições à liberdade de imprensa, perseguição a opositores e enfraquecimento de instituições de controle). Países como Hungria, Turquia e Venezuela exemplificam diferentes trajetórias de erosão democrática que desafiam classificações binárias entre democracia e autoritarismo.",
        pergunta: "Sobre as teorias contemporâneas que analisam regimes autoritários e híbridos, analise as afirmações:",
        afirmacoes: [
            "O conceito de \"autoritarismo competitivo\", desenvolvido por Steven Levitsky e Lucan Way, descreve regimes onde instituições democráticas formais existem e são consideradas meios legítimos de acesso ao poder, mas nos quais incumbentes violam regras democráticas com tal frequência e intensidade que o regime não atende a padrões mínimos de democracia.",
            "Juan Linz, em sua análise clássica sobre regimes autoritários, identifica como características distintivas destes regimes o pluralismo limitado, a ausência de ideologia elaborada e a desmobilização política, distinguindo-os tanto de democracias quanto de totalitarismos.",
            "A teoria do \"autoritarismo eleitoral\" argumenta que eleições em contextos autoritários são sempre irrelevantes, servindo apenas como fachada sem qualquer impacto real na dinâmica política destes regimes.",
            "Guillermo O'Donnell desenvolveu o conceito de \"democracia delegativa\" para descrever regimes formalmente democráticos onde presidentes eleitos governam com mínimas restrições institucionais, apoiando-se na legitimidade de sua eleição para ignorar o papel de instituições intermediárias e mecanismos de accountability horizontal.",
            "A literatura sobre \"autocratização\" ou \"recessão democrática\" contemporânea identifica que os principais desafios à democracia no século XXI vêm predominantemente de golpes militares tradicionais, seguindo o mesmo padrão observado durante a Guerra Fria."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_15",
        disciplina: "Ciencia Politica",
        tipo: "MC",
        contexto: "O federalismo brasileiro, redesenhado pela Constituição de 1988, estabeleceu um arranjo com três níveis federativos (União, estados e municípios) e competências compartilhadas em diversas áreas de políticas públicas. Este modelo tem produzido diferentes padrões de coordenação intergovernamental: enquanto o SUS desenvolveu mecanismos institucionalizados de cooperação, outras áreas enfrentam fragmentação e competição predatória.",
        pergunta: "Sobre a relação entre federalismo e implementação de políticas públicas no Brasil contemporâneo, assinale a alternativa correta:",
        opcoes: [
            "O arranjo federativo brasileiro caracteriza-se por um municipalismo autárquico, onde governos locais possuem ampla autonomia financeira e capacidade técnica para implementar políticas públicas independentemente de transferências ou apoio técnico de níveis superiores de governo.",
            "O fenômeno da \"coordenação federativa\", estudado por autores como Marta Arretche, refere-se à capacidade do governo federal de induzir comportamentos subnacionais através de mecanismos institucionais como regras de aplicação de recursos transferidos e sistemas de incentivos, mesmo em um contexto de autonomia política dos entes.",
            "Segundo a literatura especializada, o Sistema Único de Saúde (SUS) é considerado um exemplo de fracasso em termos de coordenação federativa, devido à ausência de mecanismos institucionalizados de compartilhamento decisório como comissões intergestores e transferências condicionadas.",
            "A Constituição de 1988 estabeleceu uma divisão clara e exclusiva de competências entre União, estados e municípios, eliminando completamente áreas de competência compartilhada ou concorrente, o que simplifica a implementação de políticas públicas no federalismo brasileiro.",
            "As desigualdades regionais no Brasil são irrelevantes para a análise do federalismo e suas implicações para políticas públicas, uma vez que todos os municípios e estados possuem capacidades estatais equivalentes para implementar políticas descentralizadas."
        ],
        resposta: "B"
    },
    {
        id: "CienciaPolitica_16",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "O avanço das tecnologias digitais apresenta tanto oportunidades quanto desafios para sistemas democráticos. Por um lado, plataformas de participação digital, como o orçamento participativo online de cidades como Porto Alegre e Barcelona, prometem ampliar o engajamento cidadão. Por outro, fenômenos como desinformação algorítmica, vigilância massiva e manipulação eleitoral via big data (exemplificados pelo caso Cambridge Analytica) levantam preocupações sobre a viabilidade da deliberação democrática no ambiente digital.",
        pergunta: "Sobre a relação entre democracia e tecnologias digitais, avalie as proposições:",
        afirmacoes: [
            "A teoria da democracia digital deliberativa, inspirada em Habermas, argumenta que plataformas online podem constituir esferas públicas digitais que ampliam a participação no debate político, desde que garantidas condições de inclusão digital e proteção contra manipulação algorítmica.",
            "O conceito de \"capitalismo de vigilância\", desenvolvido por Shoshana Zuboff, analisa como a extração massiva de dados comportamentais por plataformas digitais cria assimetrias informacionais que podem comprometer a autonomia cidadã necessária ao funcionamento democrático.",
            "O determinismo tecnológico predominante na ciência política contemporânea estabelece que novas tecnologias digitais invariavelmente fortalecem práticas democráticas, independentemente dos contextos institucionais, socioeconômicos ou culturais em que são implementadas.",
            "Evgeny Morozov, em sua crítica ao \"solucionismo tecnológico\", argumenta que a abordagem tecnocrática para problemas políticos tende a despolitizar questões fundamentalmente normativas, substituindo deliberação democrática por supostas soluções técnicas neutras.",
            "Estudos empíricos sobre plataformas de participação digital têm demonstrado que estas necessariamente ampliam a participação de grupos historicamente excluídos, eliminando desigualdades socioeconômicas e assimetrias de poder no processo político."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_17",
        disciplina: "Ciencia Politica",
        tipo: "VF",
        contexto: "Democracias contemporâneas enfrentam o que alguns teóricos chamam de \"crise de representação\", marcada pela desconfiança em instituições representativas tradicionais. No Brasil, pesquisas de opinião mostram níveis historicamente baixos de confiança em partidos políticos e no Congresso Nacional, enquanto novos atores como movimentos sociais, organizações da sociedade civil e até mesmo celebridades reivindicam papéis representativos fora dos canais eleitorais formais.",
        pergunta: "Considerando as teorias contemporâneas sobre representação política, julgue os itens como verdadeiros (V) ou falsos (F):",
        vfStatements: [
            "Hanna Pitkin, em sua obra clássica \"O Conceito de Representação\", distingue diferentes dimensões da representação: descritiva (semelhança entre representantes e representados), substantiva (atuação no interesse dos representados) e simbólica (identificação emocional), demonstrando a complexidade do fenômeno representativo.",
            "A teoria da \"representação como advocacy\", desenvolvida por Nadia Urbinati, enfatiza o caráter dinâmico e comunicativo da representação como atividade contínua que vai além do momento eleitoral, envolvendo relações discursivas entre representantes e representados.",
            "Bernard Manin, em \"Os Princípios do Governo Representativo\", identifica uma transição histórica da democracia parlamentar para a democracia de partido e, posteriormente, para a \"democracia de audiência\", caracterizada pela personalização da política e pela importância crescente da mídia.",
            "Iris Marion Young argumenta que a representação política deve ser concebida em termos estritamente formais e procedimentais, rejeitando qualquer consideração sobre inclusão de perspectivas sociais diversas ou representação de grupos marginalizados nos processos decisórios.",
            "A teoria deliberativa da representação, proposta por Jane Mansbridge, defende a \"representação antecipada\", na qual representantes agem com base nas preferências futuras projetadas dos eleitores, não apenas respondendo a preferências atuais ou cumprindo promessas passadas."
        ],
        opcoes: [
            "V, V, V, F, V",
            "V, F, V, V, F",
            "F, V, F, V, V",
            "V, V, F, F, F",
            "F, F, V, V, V"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_18",
        disciplina: "Ciencia Politica",
        tipo: "MC", // Incorreta
        contexto: "A ordem internacional liberal estabelecida após a Segunda Guerra Mundial enfrenta crescentes contestações. A ascensão da China como potência global, tensões entre nacionalismo e globalização, e crises do multilateralismo (exemplificadas pela saída dos EUA de acordos como o Acordo de Paris sobre o clima e a Organização Mundial da Saúde durante a administração Trump) suscitam debates sobre os fundamentos normativos e arranjos institucionais do sistema internacional.",
        pergunta: "Sobre as tradições teóricas das Relações Internacionais e suas perspectivas sobre ordem global, assinale a alternativa INCORRETA:",
        opcoes: [
            "O realismo político, associado a autores como Hans Morgenthau e Kenneth Waltz, enfatiza a centralidade do poder e do interesse nacional na política internacional, considerando o sistema internacional como essencialmente anárquico e competitivo, onde estados buscam primordialmente sua própria segurança.",
            "A tradição liberal das Relações Internacionais, desenvolvida por autores como Immanuel Kant e atualizada por Robert Keohane, argumenta que a interdependência econômica, instituições internacionais e valores democráticos compartilhados podem mitigar a anarquia internacional e promover cooperação entre estados.",
            "A teoria crítica nas Relações Internacionais, influenciada pelo pensamento marxista e pela Escola de Frankfurt, analisa como a ordem internacional reflete e reproduz relações de poder e dominação, questionando a neutralidade de conceitos como \"segurança\" e \"interesse nacional\".",
            "O construtivismo, associado a Alexander Wendt, sustenta que estruturas fundamentais da política internacional são essencialmente materiais e imutáveis, sendo independentes de práticas sociais, ideias compartilhadas ou processos de construção de identidades coletivas.",
            "Teorias pós-coloniais e decoloniais nas Relações Internacionais, representadas por autores como Gayatri Spivak e Walter Mignolo, questionam o eurocentrismo das teorias dominantes e analisam como legados coloniais continuam a moldar hierarquias na política global contemporânea."
        ],
        resposta: "D"
    },
    {
        id: "CienciaPolitica_19",
        disciplina: "Ciencia Politica",
        tipo: "AG",
        contexto: "Apesar dos avanços nas últimas décadas, a sub-representação política das mulheres persiste globalmente. No Brasil, mulheres ocupam menos de 15% das cadeiras no Congresso Nacional, embora representem 52% do eleitorado. Políticas de cotas eleitorais têm eficácia limitada, e mulheres eleitas frequentemente enfrentam obstáculos específicos no exercício de seus mandatos, como demonstrado por estudos sobre violência política de gênero.",
        pergunta: "A respeito das contribuições da teoria política feminista para a análise da participação política das mulheres, analise as afirmações:",
        afirmacoes: [
            "Carole Pateman, em \"O Contrato Sexual\", argumenta que o contrato social clássico que fundamenta as teorias democráticas liberais pressupõe um contrato sexual implícito que exclui as mulheres da categoria de \"indivíduos\" plenamente livres e iguais no domínio público.",
            "O conceito de \"política de presença\", desenvolvido por Anne Phillips, defende que a representação substantiva dos interesses das mulheres pode ser plenamente alcançada mesmo sem sua presença física em espaços decisórios, desde que representantes homens sejam devidamente sensibilizados para questões de gênero.",
            "Iris Marion Young propõe que a inclusão política efetiva de grupos historicamente oprimidos, como as mulheres, requer não apenas direitos formais iguais, mas também mecanismos que garantam a representação de suas perspectivas sociais distintas, formadas a partir de experiências estruturalmente situadas.",
            "A teoria feminista interseccional, desenvolvida inicialmente por Kimberlé Crenshaw e aplicada à ciência política por autoras como Mala Htun, analisa como diferentes eixos de poder (gênero, raça, classe, sexualidade) se entrecruzam, gerando padrões específicos de exclusão política que afetam diferentemente mulheres em distintas posições sociais.",
            "Susan Moller Okin, em \"Justiça, Gênero e Família\", argumenta que a separação liberal entre esfera pública e privada é politicamente neutra em termos de gênero, não tendo implicações para a participação política desigual de homens e mulheres."
        ],
        opcoes: [
            "I, III e IV",
            "I, II e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "CienciaPolitica_20",
        disciplina: "Ciencia Politica",
        tipo: "MC",
        contexto: "Reformas administrativas em diversos países têm buscado transformar burocracias tradicionais através de princípios da Nova Gestão Pública (gerencialismo) e, mais recentemente, governança digital. No Brasil, desde a reforma gerencial da década de 1990, observam-se tensões entre diferentes modelos administrativos: patrimonialista, burocrático weberiano, gerencialista e abordagens participativas de gestão pública.",
        pergunta: "Sobre teorias da administração pública e do Estado administrativo, assinale a alternativa correta:",
        opcoes: [
            "Max Weber, em sua análise da burocracia moderna, considerava-a uma forma organizacional intrinsecamente ineficiente e irracional, defendendo sua completa substituição por modelos de gestão baseados em relações pessoais e tradicionais.",
            "A teoria da escolha pública (public choice), associada a economistas como James Buchanan, argumenta que burocratas são invariavelmente motivados pelo interesse público, ao contrário de atores do mercado que seriam guiados por interesses particulares.",
            "O conceito de \"burocracia representativa\", desenvolvido por autores como Kenneth Meier, sugere que a composição demográfica da burocracia pública (em termos de gênero, raça, origem social) pode afetar a implementação de políticas e sua responsividade a diferentes grupos sociais.",
            "O New Public Management (Nova Gestão Pública) baseia-se nos princípios do modelo weberiano clássico, fortalecendo características como centralização decisória, formalismo procedimental e organização hierárquica rígida.",
            "Estudos contemporâneos sobre capacidades estatais defendem unanimemente que o Estado mínimo com burocracia reduzida constitui o arranjo institucional ideal para promover desenvolvimento econômico e implementar políticas públicas efetivas em todas as áreas."
        ],
        resposta: "C"
    },

    // --- Psicologia social.md (10 Questions) ---
    {
        id: "PsicologiaSocial_1",
        disciplina: "Psicologia social",
        tipo: "AG",
        contexto: "A comunicação não-verbal constitui componente fundamental das interações sociais, transmitindo emoções, atitudes e informações sobre status social. Estudos indicam que entre 60% e 70% da comunicação humana ocorre por canais não-verbais, variando significativamente entre culturas. Com o aumento das interações mediadas por tecnologia, especialmente durante a pandemia, novas questões surgiram sobre como a comunicação não-verbal se adapta a ambientes digitais.",
        pergunta: "Sobre a comunicação não-verbal e seus efeitos nas interações sociais, analise as afirmações a seguir:",
        afirmacoes: [
            "Paul Ekman, em suas pesquisas transculturais, identificou expressões faciais básicas de emoção (como alegria, tristeza, raiva, medo, nojo e surpresa) que são universalmente reconhecidas, embora sua expressão pública seja regulada por \"regras de exibição\" culturalmente específicas.",
            "A teoria da expectativa de violação, proposta por Judee Burgoon, explica como infrações às normas de proximidade física (proxêmica) e contato corporal podem gerar reações negativas ou positivas, dependendo da avaliação que se faz do violador.",
            "Gestos emblemáticos (como o sinal de \"ok\" ou \"positivo\") possuem significados universais e invariáveis através de diferentes culturas, facilitando a comunicação intercultural sem riscos de mal-entendidos.",
            "O efeito de vazamento não-verbal refere-se à tendência de sinais não-verbais revelarem emoções verdadeiras mesmo quando tentamos escondê-las verbalmente, sendo mais difíceis de controlar que a comunicação verbal.",
            "Estudos sobre comunicação mediada por computador demonstram que a ausência de pistas não-verbais tradicionais (como em e-mails ou mensagens de texto) necessariamente empobrece a comunicação, sem possibilidade de compensação através de emoticons, GIFs ou outros substitutos digitais."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "PsicologiaSocial_2",
        disciplina: "Psicologia social",
        tipo: "MC",
        contexto: "Em situações de crise como desastres naturais ou pandemias, observam-se tanto comportamentos de ajuda e solidariedade quanto omissão e indiferença. Durante a pandemia de COVID-19, por exemplo, enquanto muitos grupos organizaram redes de apoio a populações vulneráveis, também se observou o fenômeno da \"fadiga da compaixão\" à medida que a crise se prolongava.",
        pergunta: "Com base nos estudos psicossociais sobre comportamento pró-social, assinale a alternativa correta:",
        opcoes: [
            "O efeito espectador, identificado por Latané e Darley após o caso Kitty Genovese, refere-se ao fenômeno pelo qual a probabilidade de uma pessoa ajudar em situações de emergência aumenta proporcionalmente ao número de outras pessoas presentes, devido à pressão normativa para agir prosocialmente.",
            "Segundo a hipótese empatia-altruísmo de Daniel Batson, a empatia induz motivação genuinamente altruísta para ajudar o outro, não apenas para reduzir o próprio desconforto emocional, o que contrasta com explicações puramente egoístas do comportamento de ajuda.",
            "Normas sociais como a reciprocidade e a responsabilidade social não influenciam significativamente comportamentos de ajuda, que são determinados exclusivamente por traços de personalidade estáveis e invariáveis em diferentes contextos.",
            "Estudos transculturais demonstram que comportamentos pró-sociais apresentam padrões idênticos em todas as sociedades, sem variações significativas quanto à influência de fatores como individualismo-coletivismo ou valores culturais específicos.",
            "O modelo de custos-recompensas do comportamento de ajuda foi refutado empiricamente, demonstrando-se que decisões de auxiliar outrem não são influenciadas pela avaliação de potenciais benefícios (materiais, sociais ou psicológicos) ou custos (tempo, esforço, perigo) associados ao ato."
        ],
        resposta: "B"
    },
    {
        id: "PsicologiaSocial_3",
        disciplina: "Psicologia social",
        tipo: "VF",
        contexto: "A teoria da dissonância cognitiva, proposta por Leon Festinger em 1957, tem amplas aplicações para compreender fenômenos contemporâneos como a persistência em crenças falsas mesmo diante de evidências contrárias, a justificação de comportamentos moralmente questionáveis, ou a racionalização de escolhas difíceis. Estudos recentes em neurociência têm identificado correlatos neurais dos processos de redução de dissonância.",
        pergunta: "Julgue as afirmações a seguir como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "A dissonância cognitiva é um estado de desconforto psicológico que ocorre quando uma pessoa mantém simultaneamente cognições (crenças, atitudes, valores) contraditórias entre si, ou quando age de maneira inconsistente com suas atitudes, motivando esforços para reduzir essa inconsistência.",
            "No paradigma experimental da \"justificação do esforço\", Festinger e Carlsmith demonstraram que pessoas tendem a valorizar mais resultados ou grupos para os quais tiveram que realizar esforços significativos, reduzindo a dissonância potencial entre o esforço despendido e o valor percebido.",
            "O paradigma da \"obediência induzida\" demonstra que, ao convencer pessoas a defenderem posições contrárias às suas próprias atitudes (com justificação insuficiente), elas tendem a mudar suas atitudes na direção da posição defendida para reduzir a dissonância.",
            "A teoria da auto-afirmação, desenvolvida como extensão da teoria da dissonância, sugere que ameaças à auto-imagem em um domínio podem ser compensadas afirmando valores pessoais importantes em outros domínios, reduzindo a necessidade de resolver diretamente a dissonância.",
            "Segundo Festinger, quanto maior o número de cognições consonantes com uma determinada crença e quanto mais importantes forem essas cognições para o indivíduo, menor será a pressão para reduzir a dissonância quando essa crença for desafiada."
        ],
        opcoes: [
            "V, V, V, V, V",
            "F, V, F, V, F",
            "V, V, V, F, F",
            "F, F, V, V, V",
            "V, F, F, V, V"
        ],
        resposta: "A"
    },
    {
        id: "PsicologiaSocial_4",
        disciplina: "Psicologia social",
        tipo: "MC", // Incorreta
        contexto: "Relações de poder permeiam interações sociais em diversos contextos, desde pequenos grupos até organizações complexas. Estudos experimentais e observacionais têm demonstrado como o poder social influencia cognição, comportamento e tomada de decisões, com implicações para compreender fenômenos como assédio no trabalho, dinâmicas de liderança e comportamentos discriminatórios.",
        pergunta: "Sobre os estudos psicossociais de poder, assinale a alternativa INCORRETA:",
        opcoes: [
            "A abordagem da dependência de recursos, proposta por Emerson, define poder social como o inverso da dependência, sendo que A tem poder sobre B na medida em que B depende de recursos controlados por A, e essa dependência é proporcional à importância do recurso e inversamente proporcional à disponibilidade de fontes alternativas.",
            "Pesquisas conduzidas por Keltner, Gruenfeld e Anderson demonstram que indivíduos em posições de poder tendem a processar informações de maneira mais abstrata e heurística, focar em seus próprios objetivos e estados internos, e expressar-se mais diretamente, comparados a pessoas em posições de baixo poder.",
            "O fenômeno conhecido como \"corrução pelo poder\", estudado por Kipnis e colaboradores, refere-se à tendência de pessoas em posições de autoridade desvalorizarem gradualmente as contribuições dos subordinados e atribuírem resultados positivos predominantemente à sua própria influência.",
            "O poder social é um fenômeno exclusivamente individual, baseado em características de personalidade fixas, não sendo significativamente influenciado por fatores situacionais ou estruturais como posição hierárquica, controle de recursos ou legitimidade institucional.",
            "Estudos sobre efeitos comportamentais do poder mostram que posições de alto poder podem tanto aumentar comportamentos pró-sociais orientados pelo interesse coletivo quanto comportamentos egoístas e impulsivos, dependendo de fatores moderadores como valores pessoais, cultura e estabilidade da hierarquia."
        ],
        resposta: "D"
    },
    {
        id: "PsicologiaSocial_5",
        disciplina: "Psicologia social",
        tipo: "AG",
        contexto: "As relações interpessoais e grupais podem ser analisadas a partir de modelos de troca social, que examinam como custos, recompensas e processos de comparação influenciam a formação, manutenção e dissolução de relações. Estes modelos têm aplicações em diversos contextos, desde relacionamentos amorosos até relações de trabalho e comportamento organizacional.",
        pergunta: "Com base na teoria da troca social, analise as proposições:",
        afirmacoes: [
            "De acordo com o modelo de interdependência de Thibaut e Kelley, a satisfação com um relacionamento depende não apenas do balanço entre recompensas e custos, mas também da comparação com o \"nível de comparação\" (expectativas baseadas em experiências anteriores) e o \"nível de comparação para alternativas\" (qualidade percebida de relacionamentos alternativos disponíveis).",
            "A norma da reciprocidade, estudada por Gouldner, estabelece a expectativa social de que as pessoas retribuam o tipo de tratamento que recebem, favorecendo trocas equilibradas ao longo do tempo e sancionando aqueles que violam esse princípio.",
            "O modelo de equidade de Walster, Berscheid e Walster propõe que relações são percebidas como justas quando a razão entre contribuições e benefícios é igual para todos os participantes, gerando desconforto psicológico quando existe inequidade, seja por subbenefício ou por superbenefício.",
            "Segundo a teoria da troca social, todas as relações humanas são baseadas exclusivamente em cálculos racionais de custo-benefício material imediato, sem influência de fatores como afeto, compromisso ou normas sociais.",
            "O investimento em relacionamentos, conforme o modelo de Rusbult, inclui recursos diretos (tempo, esforço, revelação pessoal), oportunidades renunciadas e associações cognitivas compartilhadas, que aumentam o compromisso mesmo quando a satisfação diminui."
        ],
        opcoes: [
            "I, II e III",
            "I, II e V",
            "I, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "B"
    },
    {
        id: "PsicologiaSocial_6",
        disciplina: "Psicologia social",
        tipo: "VF",
        contexto: "Os processos subjacentes à atração interpessoal e formação de relacionamentos têm sido transformados pelo advento das tecnologias digitais. Aplicativos de relacionamento, redes sociais e ambientes virtuais criam novos contextos para o desenvolvimento de laços afetivos, mantendo, porém, muitos dos princípios psicossociais básicos identificados por décadas de pesquisa.",
        pergunta: "Sobre os fatores que influenciam a atração interpessoal, julgue os itens como verdadeiros (V) ou falsos (F):",
        vfStatements: [
            "O efeito de mera exposição, demonstrado por Zajonc, indica que a exposição repetida a um estímulo social (como uma pessoa) tende a aumentar a atração por esse estímulo, mesmo na ausência de interação, desde que a exposição inicial não seja negativa.",
            "A hipótese da complementaridade, que propõe que nos sentimos mais atraídos por pessoas com características de personalidade opostas ou complementares às nossas, recebeu mais suporte empírico que a hipótese da similaridade, que sugere atração baseada em semelhanças.",
            "A atratividade física, embora influenciada por padrões culturais específicos, apresenta alguns elementos universais ou transculturais, como a preferência por simetria facial e proporções corporais associadas à saúde e fertilidade, conforme estudos evolutivos.",
            "A teoria da equidade sugere que nos sentimos mais satisfeitos em relacionamentos percebidos como justos e equilibrados em termos de trocas, enquanto percepções persistentes de inequidade (seja por subbenefício ou superbenefício) tendem a gerar insatisfação.",
            "A autopercepção de mercado (market value), conforme estudos em psicologia econômica de relacionamentos, não influencia significativamente as expectativas e escolhas de parceiros, sendo irrelevante para compreender dinâmicas de atração e seleção."
        ],
        opcoes: [
            "V, F, V, V, F",
            "F, V, F, V, V",
            "V, F, F, F, V",
            "F, V, V, F, F",
            "V, V, F, V, V"
        ],
        resposta: "A"
    },
    {
        id: "PsicologiaSocial_7",
        disciplina: "Psicologia social",
        tipo: "MC",
        contexto: "A maneira como formamos impressões e fazemos julgamentos sobre outras pessoas está sujeita a diversos vieses cognitivos. Compreender esses processos ajuda a explicar fenômenos como estereotipagem, discriminação e polarização social, que têm se intensificado em ambientes digitais caracterizados por informações fragmentadas e contextos sociais ambíguos.",
        pergunta: "Sobre os processos de percepção social e cognição, assinale a alternativa correta:",
        opcoes: [
            "A teoria da atribuição, desenvolvida inicialmente por Fritz Heider, investiga como as pessoas explicam comportamentos, distinguindo entre atribuições internas (disposicionais) e externas (situacionais), sendo que culturas individualistas e coletivistas apresentam exatamente os mesmos padrões atribucionais.",
            "O modelo de formação de impressões de Asch demonstrou que características centrais (como \"caloroso\" versus \"frio\") têm maior impacto na impressão global formada sobre uma pessoa do que características periféricas, ilustrando o efeito de primazia na organização de informações sociais.",
            "Heurísticas de julgamento, como a heurística da disponibilidade e da representatividade, facilitam sempre julgamentos precisos sobre outras pessoas, eliminando completamente vieses cognitivos ao simplificar o processamento de informações sociais complexas.",
            "Estudos sobre percepção social estabeleceram que primeiras impressões são completamente irrelevantes para interações subsequentes, sendo facilmente substituídas por informações mais recentes, sem persistência de julgamentos iniciais mesmo quando contraditos.",
            "A teoria da inferência correspondente propõe que atribuições disposicionais (relacionadas à personalidade) são realizadas apenas quando temos evidências claras de que o comportamento foi escolhido livremente e não resultou de pressões situacionais, eliminando o erro fundamental de atribuição."
        ],
        resposta: "B"
    },
    {
        id: "PsicologiaSocial_8",
        disciplina: "Psicologia social",
        tipo: "AG",
        contexto: "Formas tradicionais e explícitas de preconceito têm sido socialmente condenadas em muitas sociedades contemporâneas. No entanto, pesquisas utilizando medidas implícitas como o Teste de Associação Implícita (IAT) revelam a persistência de vieses inconscientes que podem influenciar comportamentos discriminatórios sutis, mesmo entre pessoas que explicitamente endossam valores igualitários.",
        pergunta: "Considerando os estudos sobre processos implícitos relacionados a estereótipos e preconceito, analise as afirmações:",
        afirmacoes: [
            "Estereótipos implícitos são associações automáticas entre categorias sociais e atributos que podem operar sem intenção consciente ou controle, sendo ativados rapidamente na presença de pistas relevantes e potencialmente influenciando julgamentos e comportamentos subsequentes.",
            "O modelo de processo duplo do preconceito, proposto por Devine, distingue entre processos automáticos (ativação de estereótipos culturalmente aprendidos) e processos controlados (aplicação ou supressão consciente desses estereótipos), explicando como pessoas igualitárias podem experimentar ativação automática de estereótipos contra os quais conscientemente se opõem.",
            "Medidas de atitudes implícitas, como o IAT, baseiam-se em tempos de reação para inferir associações automáticas, sendo completamente imunes a fatores como desejabilidade social, que afetam apenas medidas explícitas de preconceito.",
            "O efeito de ameaça do estereótipo, demonstrado por Claude Steele e colaboradores, ocorre quando pessoas pertencentes a grupos estereotipados negativamente em determinados domínios (como mulheres em matemática) têm seu desempenho prejudicado pela ansiedade de confirmar o estereótipo negativo.",
            "Segundo pesquisas contemporâneas, estereótipos implícitos são completamente determinados por experiências individuais diretas com membros de grupos sociais, não sendo influenciados por representações culturais, mídia ou socialização indireta."
        ],
        opcoes: [
            "I, II e IV",
            "I, III e V",
            "II, III e IV",
            "II, IV e V",
            "III, IV e V"
        ],
        resposta: "A"
    },
    {
        id: "PsicologiaSocial_9",
        disciplina: "Psicologia social",
        tipo: "VF",
        contexto: "As redes sociais digitais intensificaram processos de comparação social, com potenciais impactos no bem-estar psicológico e na formação identitária. Estudos indicam que a exposição seletiva a representações idealizadas da vida alheia pode afetar a autoavaliação e a satisfação com a própria vida, especialmente entre jovens.",
        pergunta: "Sobre os processos de comparação social e seus efeitos, julgue as afirmações como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "A teoria da comparação social, proposta inicialmente por Leon Festinger, sugere que as pessoas têm uma tendência a se comparar com outros para avaliar suas próprias opiniões e habilidades, especialmente na ausência de padrões objetivos.",
            "Comparações para baixo (com pessoas percebidas como em situação pior) tendem a elevar a autoestima e gerar afetos positivos, enquanto comparações para cima (com pessoas percebidas como em melhor situação) podem tanto inspirar e motivar quanto ameaçar o autoconceito, dependendo de fatores moderadores.",
            "A teoria da identidade social propõe que parte significativa do autoconceito deriva de pertencimentos grupais, motivando comportamentos que favoreçam uma distinção positiva do próprio grupo em comparação com outros grupos relevantes.",
            "Pesquisas sobre os efeitos das redes sociais demonstram que comparações sociais online têm impacto negligenciável na autoimagem e bem-estar, independentemente da frequência de uso, tipo de conteúdo consumido ou vulnerabilidades psicológicas preexistentes.",
            "O fenômeno da comparação social contrafactual envolve comparações não com outras pessoas reais, mas com versões alternativas do próprio self (\"o que poderia ter sido\"), gerando emoções como arrependimento, alívio ou ressentimento que influenciam decisões futuras."
        ],
        opcoes: [
            "V, V, V, F, V",
            "F, V, V, V, F",
            "V, F, F, V, V",
            "F, F, V, F, V",
            "V, V, F, V, F"
        ],
        resposta: "A"
    },
    {
        id: "PsicologiaSocial_10",
        disciplina: "Psicologia social",
        tipo: "MC", // Incorreta
        contexto: "O conceito de estigma, desenvolvido por Erving Goffman, refere-se a atributos que desacreditam socialmente os indivíduos, reduzindo-os a uma identidade deteriorada. Pesquisas contemporâneas examinam como pessoas pertencentes a grupos estigmatizados desenvolvem estratégias para proteger seu bem-estar psicológico e resistir à desvalorização social, bem como os impactos do estigma na saúde mental, física e nas oportunidades sociais.",
        pergunta: "Sobre o estigma e suas consequências psicossociais, assinale a alternativa INCORRETA:",
        opcoes: [
            "O modelo de ameaça de identidade por estigma, proposto por Major e O'Brien, identifica quatro mecanismos pelos quais o estigma afeta os estigmatizados: experiência direta de discriminação, consciência do estereótipo negativo, ameaça de confirmação do estereótipo e internalização do estigma social.",
            "Pesquisas sobre estigma por associação (ou estigma por cortesia) demonstram que pessoas próximas a indivíduos estigmatizados, como familiares de pessoas com transtornos mentais, podem experimentar preconceito e discriminação por associação, afetando suas próprias interações sociais e oportunidades.",
            "O conceito de interseccionalidade, aplicado aos estudos de estigma, reconhece que múltiplas identidades estigmatizadas (como raça, gênero, orientação sexual, deficiência) podem interagir de maneiras complexas, produzindo experiências únicas de discriminação que não são redutíveis à soma de estigmas individuais.",
            "A literatura psicossocial estabelece que o impacto do estigma é invariavelmente negativo, sem possibilidade de desenvolvimento de resiliência, identidade positiva ou estratégias de enfrentamento eficazes por parte de membros de grupos estigmatizados.",
            "O fenômeno do estigma estrutural refere-se a políticas institucionais, normas culturais e arranjos sociais que sistematicamente desvantagem grupos estigmatizados, indo além de atitudes e comportamentos individuais para incluir processos sociais mais amplos de exclusão e marginalização."
        ],
        resposta: "D"
    },

    // --- Sociologia.md (20 Questions) ---
    {
        id: "Sociologia_1",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "Em seu estudo sobre o suicídio (1897), Émile Durkheim demonstrou como um fenômeno aparentemente individual poderia ser analisado como fato social. Diversos estudos contemporâneos confirmam a persistência de padrões sociais nos índices de suicídio, como demonstram dados da OMS que indicam taxas até três vezes maiores entre homens do que entre mulheres em países industrializados, bem como variações significativas entre diferentes grupos étnicos e religiosos.",
        pergunta: "Considerando a teoria durkheimiana, analise as afirmações:\n\nO conceito de \"anomia\" elaborado por Durkheim para explicar certos tipos de suicídio refere-se a:",
        opcoes: [
            "Um estado psicológico individual caracterizado pela tendência à autoagressão, independente do contexto social.",
            "A insuficiência dos laços de solidariedade mecânica nas sociedades tradicionais, levando ao isolamento do indivíduo.",
            "Um estado de desregulação social no qual as normas perdem sua força coercitiva, deixando os indivíduos sem diretrizes claras para orientar seu comportamento.",
            "O excesso de regulação social que constrange excessivamente o indivíduo, impedindo-o de satisfazer suas necessidades básicas.",
            "A consciência coletiva enfraquecida pela divisão do trabalho social, resultando na prevalência do egoísmo sobre a solidariedade."
        ],
        resposta: "C"
    },
    {
        id: "Sociologia_2",
        disciplina: "Sociologia",
        tipo: "AG",
        contexto: "Max Weber, em sua obra \"Economia e Sociedade\" (1922), desenvolve uma sociologia compreensiva que busca entender o sentido da ação social e as formas de dominação. Atualmente, observamos transformações significativas nas formas de autoridade, como evidenciado pela ascensão de líderes com características carismáticas em democracias consolidadas e pelo crescimento de burocracias digitais que utilizam algoritmos e inteligência artificial.",
        pergunta: "Sobre a tipologia weberiana das formas de dominação, julgue as afirmações a seguir:",
        afirmacoes: [
            "A dominação tradicional baseia-se na crença na santidade das tradições e na legitimidade daqueles que exercem autoridade em virtude do costume.",
            "A dominação carismática é impessoal e se fundamenta na crença em regras racionalmente estabelecidas e no direito daqueles nomeados conforme essas regras para exercer a autoridade.",
            "A burocracia, para Weber, caracteriza-se por elementos como hierarquia administrativa, especialização de funções e impessoalidade nas relações, constituindo a forma mais eficiente de organização.",
            "A dominação racional-legal pode coexistir com elementos carismáticos nas democracias contemporâneas, gerando tensões entre a racionalidade procedimental e o apelo emocional a líderes específicos.",
            "Weber considera que, historicamente, há uma tendência inexorável à substituição completa das formas tradicionais e carismáticas pela dominação racional-legal."
        ],
        opcoes: [
            "Apenas as afirmações I, III e IV estão corretas.",
            "Apenas as afirmações I, II e III estão corretas.",
            "Apenas as afirmações II, IV e V estão corretas.",
            "Apenas as afirmações I, II e V estão corretas.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_3",
        disciplina: "Sociologia",
        tipo: "VF",
        contexto: "A teoria marxista sobre classes sociais e alienação permanece influente na análise de fenômenos como precarização do trabalho e concentração de riqueza. Segundo dados do World Inequality Report de 2022, os 10% mais ricos da população mundial capturam atualmente 52% da renda global, enquanto a metade mais pobre captura apenas 8,5%. Na última década, o avanço da gig economy e do trabalho mediado por plataformas digitais trouxe novos desafios para a compreensão das relações de trabalho contemporâneas.",
        pergunta: "Julgue as afirmações seguintes como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "Para Marx, a alienação do trabalho manifesta-se apenas na separação entre o trabalhador e o produto de seu trabalho, não tendo relação com o processo produtivo em si.",
            "Na teoria marxista, as classes sociais são definidas fundamentalmente pela posição que os indivíduos ocupam nas relações de produção, especialmente pela propriedade ou não dos meios de produção.",
            "O conceito de mais-valia refere-se à diferença entre o valor que o trabalho produz e o valor que o trabalhador recebe como salário, constituindo a base da exploração capitalista.",
            "Segundo Marx, a infraestrutura econômica determina de forma mecânica e unidirecional a superestrutura ideológica, não havendo possibilidade de influência recíproca entre ambas.",
            "A noção de \"consciência de classe\" em Marx refere-se à compreensão que uma classe tem de seus interesses objetivos, sendo que a \"classe em si\" (condição objetiva) precede historicamente a \"classe para si\" (consciência subjetiva)."
        ],
        opcoes: [
            "F, V, V, F, V",
            "V, V, F, V, F",
            "F, F, V, V, F",
            "V, F, V, F, V",
            "F, V, F, V, F"
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_4",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "Pesquisas recentes sobre desigualdade educacional no Brasil mostram persistentes disparidades no acesso ao ensino superior: segundo dados do IBGE (2023), apenas 25,1% dos jovens de 18 a 24 anos frequentam o ensino superior, com significativas variações conforme raça e classe social. Estudantes pretos, pardos e de baixa renda continuam sub-representados nas universidades mais prestigiosas e em cursos de maior retorno econômico.",
        pergunta: "Pierre Bourdieu desenvolveu uma teoria sociológica que ajuda a compreender esses mecanismos de reprodução das desigualdades educacionais. De acordo com essa perspectiva:",
        opcoes: [
            "O sistema educacional funciona como um espaço neutro de meritocracia, onde as desigualdades refletem apenas diferenças naturais de talento e esforço individual.",
            "O capital cultural incorporado pelos indivíduos desde a primeira infância no ambiente familiar é irrelevante para o desempenho escolar, que depende exclusivamente da qualidade do ensino oferecido.",
            "A violência simbólica no sistema educacional consiste na imposição da cultura dominante como legítima, fazendo com que os estudantes das classes populares vejam seu fracasso escolar como resultado de incapacidade pessoal, e não como efeito de desigualdades estruturais.",
            "O habitus, enquanto conjunto de disposições duráveis incorporadas pelos indivíduos, é facilmente modificável pela experiência escolar, permitindo rápida mobilidade social ascendente.",
            "As estratégias de distinção social através da educação são fenômenos exclusivos das elites econômicas, não ocorrendo entre outros grupos sociais em busca de ascensão."
        ],
        resposta: "C"
    },
    {
        id: "Sociologia_5",
        disciplina: "Sociologia",
        tipo: "AG",
        contexto: "Anthony Giddens propôs a Teoria da Estruturação como uma tentativa de superar a dicotomia entre agência e estrutura nas Ciências Sociais. O debate sobre essa relação dialética tem importantes implicações para a análise de transformações sociais contemporâneas, como as mudanças nas relações de trabalho durante a pandemia de COVID-19. Dados do IBGE mostram que o trabalho remoto, que atingiu 11% dos trabalhadores brasileiros durante a pandemia, permaneceu em 6,5% após esse período, sugerindo transformações estruturais nas práticas organizacionais e individuais.",
        pergunta: "Sobre a Teoria da Estruturação de Giddens, analise as afirmações:",
        afirmacoes: [
            "A dualidade da estrutura refere-se ao fato de que as estruturas sociais são tanto meio quanto resultado da ação social, sendo simultaneamente habilitadoras e constrangedoras.",
            "A noção de \"consciência prática\" refere-se ao conhecimento tácito que os agentes possuem sobre como agir em diferentes contextos sociais, sem necessariamente articulá-lo discursivamente.",
            "Segundo Giddens, as instituições sociais são completamente determinadas por forças estruturais, não havendo espaço para a agência individual na reprodução ou transformação institucional.",
            "A reflexividade institucional, conceito central para Giddens, diz respeito à capacidade das instituições modernas de sistematicamente incorporar novos conhecimentos e informações, modificando suas práticas.",
            "Na teoria de Giddens, tempo e espaço são vistos apenas como contextos externos da ação social, não participando ativamente da constituição das práticas sociais."
        ],
        opcoes: [
            "Apenas as afirmações I, II e IV estão corretas.",
            "Apenas as afirmações II, III e V estão corretas.",
            "Apenas as afirmações I, III e IV estão corretas.",
            "Apenas as afirmações I, II e V estão corretas.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_6",
        disciplina: "Sociologia",
        tipo: "VF",
        contexto: "Estudos interseccionais têm evidenciado como diferentes eixos de opressão se articulam na produção de desigualdades. No Brasil, o Atlas da Violência 2023 mostra que 77% das vítimas de homicídio são pessoas negras, e que mulheres negras têm probabilidade 65% maior de serem assassinadas em comparação a mulheres não-negras. No mercado de trabalho, dados da PNAD Contínua indicam que mulheres negras recebem, em média, apenas 43% do salário de homens brancos para funções equivalentes.",
        pergunta: "Considerando as perspectivas teóricas sobre interseccionalidade e racismo estrutural, julgue as afirmações como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "O conceito de interseccionalidade, desenvolvido por Kimberlé Crenshaw, busca compreender como diferentes sistemas de opressão (como racismo, sexismo e classismo) se entrecruzam, produzindo experiências específicas que não podem ser entendidas pela simples adição de categorias.",
            "Racismo estrutural, na perspectiva de Silvio Almeida, refere-se exclusivamente a manifestações explícitas de preconceito racial em situações interpessoais, não abrangendo dimensões institucionais ou sistêmicas.",
            "A teoria interseccional argumenta que, embora categorias como raça, gênero e classe produzam opressões específicas, existe uma hierarquia universal entre esses eixos, sendo o classismo sempre determinante em última instância.",
            "Patricia Hill Collins propõe o conceito de \"matriz de dominação\" para compreender como diferentes sistemas de opressão estão interconectados e organizados em domínios de poder específicos, como o estrutural, disciplinar, hegemônico e interpessoal.",
            "As abordagens interseccionais defendem que políticas identitárias isoladas são suficientes para enfrentar desigualdades complexas, dispensando análises mais amplas sobre transformações estruturais e econômicas."
        ],
        opcoes: [
            "V, F, F, V, F",
            "V, V, F, F, V",
            "F, V, V, V, F",
            "V, F, V, F, V",
            "F, F, V, V, V"
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_7",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "O Brasil tem testemunhado a emergência de novos movimentos sociais e formas de mobilização coletiva mediadas por tecnologias digitais. Entre 2013 e 2023, observou-se desde as manifestações de junho de 2013, que levaram milhões às ruas, até mobilizações setoriais como as greves de entregadores de aplicativos durante a pandemia, que reivindicavam melhores condições de trabalho e proteção social. Estudos recentes apontam para transformações nas formas de organização, recrutamento e ação desses movimentos.",
        pergunta: "Sobre as teorias sociológicas dos movimentos sociais contemporâneos, é correto afirmar que:",
        opcoes: [
            "A Teoria da Mobilização de Recursos, desenvolvida por McCarthy e Zald, enfatiza exclusivamente aspectos emotivos e identitários dos movimentos sociais, negligenciando completamente dimensões organizacionais e estratégicas.",
            "O conceito de \"repertório de ação coletiva\", proposto por Charles Tilly, refere-se ao conjunto limitado de rotinas de protesto que estão disponíveis para os atores em determinado contexto histórico, sendo estas constantemente objeto de inovação e adaptação.",
            "A abordagem dos Novos Movimentos Sociais, representada por autores como Alain Touraine e Alberto Melucci, argumenta que os movimentos contemporâneos são essencialmente idênticos aos movimentos operários clássicos, centrados exclusivamente em demandas materiais e econômicas.",
            "A teoria do Processo Político, associada a Doug McAdam, defende que os movimentos sociais surgem independentemente da existência de oportunidades políticas, sendo determinados apenas pela capacidade de mobilização de recursos materiais.",
            "Segundo Manuel Castells, os movimentos sociais na era da internet caracterizam-se pela organização hierárquica centralizada e pela primazia de lideranças carismáticas, reproduzindo as estruturas dos movimentos tradicionais."
        ],
        resposta: "B"
    },
    {
        id: "Sociologia_8",
        disciplina: "Sociologia",
        tipo: "AG",
        contexto: "A pandemia de COVID-19 acelerou processos de digitalização da vida social, transformando trabalho, educação e sociabilidade. Segundo pesquisa do Centro Regional de Estudos para o Desenvolvimento da Sociedade da Informação (Cetic.br), o número de brasileiros que utilizam a internet aumentou de 74% em 2019 para 84% em 2022, embora persistam significativas desigualdades digitais: enquanto 99% das classes A e B têm acesso à internet, esse percentual cai para 64% nas classes D/E.",
        pergunta: "Sobre a sociologia digital e a sociedade em rede, analise as seguintes afirmações:",
        afirmacoes: [
            "Para Manuel Castells, a sociedade em rede caracteriza-se pela transformação das dimensões de tempo e espaço, com a emergência do \"espaço de fluxos\" e do \"tempo atemporal\", que redefinem as experiências sociais contemporâneas.",
            "O conceito de \"digital divide\" (exclusão digital) refere-se apenas às desigualdades de acesso físico às tecnologias, não contemplando disparidades relacionadas às competências digitais ou à qualidade do uso.",
            "A sociedade algorítmica, segundo Deborah Lupton, caracteriza-se pelo governo de sistemas automatizados que classificam, monitoram e modulam comportamentos, estabelecendo novas formas de estratificação social e controle.",
            "As plataformas digitais, de acordo com José van Dijck e Tarleton Gillespie, constituem infraestruturas neutras que apenas facilitam interações sociais, sem moldá-las através de escolhas arquitetônicas, políticas ou econômicas específicas.",
            "O conceito de \"capitalismo de vigilância\", desenvolvido por Shoshana Zuboff, refere-se à nova lógica de acumulação que extrai valor econômico de dados comportamentais coletados massivamente, utilizando-os para prever e modificar comportamentos futuros."
        ],
        opcoes: [
            "Apenas as afirmações I, III e V estão corretas.",
            "Apenas as afirmações II, III e IV estão corretas.",
            "Apenas as afirmações I, II e V estão corretas.",
            "Apenas as afirmações I, IV e V estão corretas.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_9",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "Dados recentes sobre estratificação social no Brasil revelam a persistência de profundas desigualdades. Segundo o Relatório de Desigualdade Global 2022, o 1% mais rico da população brasileira concentra 49,3% da riqueza nacional, enquanto os 50% mais pobres detêm apenas 1,2%. Estudos longitudinais mostram que a mobilidade social intergeracional permanece baixa, com forte correlação entre a origem social dos indivíduos e suas trajetórias educacionais e ocupacionais.",
        pergunta: "Considerando as teorias sociológicas sobre estratificação social e mobilidade, assinale a alternativa correta:",
        opcoes: [
            "A perspectiva funcionalista da estratificação social, representada por Talcott Parsons e Kingsley Davis, argumenta que a desigualdade social é disfuncional para a sociedade, impedindo a alocação eficiente de talentos e recursos.",
            "Ralf Dahrendorf, em sua crítica ao modelo marxista, propõe que as classes sociais contemporâneas são definidas primordialmente pelo acesso a diferentes tipos de capital (econômico, cultural, social), e não pelas relações de autoridade e poder nas organizações.",
            "A teoria da reprodução social de Pierre Bourdieu e a teoria credencialista de Randall Collins convergem ao reconhecer que os sistemas educacionais, longe de promoverem mobilidade igualitária, tendem a reproduzir e legitimar hierarquias sociais pré-existentes.",
            "Os estudos neoweberianos sobre estratificação social, como os de John Goldthorpe, desconsideram completamente a dimensão ocupacional na formação de classes, focando exclusivamente em critérios subjetivos de identificação de classe.",
            "A teoria marxista contemporânea, representada por autores como Erik Olin Wright, define classes sociais exclusivamente em termos de renda e consumo, abandonando completamente a análise das relações de produção e exploração."
        ],
        resposta: "C"
    },
    {
        id: "Sociologia_10",
        disciplina: "Sociologia",
        tipo: "VF",
        contexto: "A Escola de Frankfurt desenvolveu importantes contribuições para a compreensão crítica da cultura e da sociedade contemporâneas. Fenômenos como a concentração de propriedade dos meios de comunicação (com os 50 maiores conglomerados de mídia controlando mais de 70% do conteúdo global), o crescimento das redes sociais algorítmicas e a mercantilização de expressões culturais diversas têm sido analisados sob a perspectiva da teoria crítica.",
        pergunta: "Sobre a Escola de Frankfurt e seus conceitos, julgue as afirmações como verdadeiras (V) ou falsas (F):",
        vfStatements: [
            "O conceito de \"indústria cultural\", desenvolvido por Adorno e Horkheimer, refere-se à transformação da cultura em mercadoria, padronizada e administrada segundo princípios da racionalidade técnica e econômica.",
            "Herbert Marcuse, em \"O Homem Unidimensional\", defende que a sociedade industrial avançada integra as forças potencialmente opositoras através da satisfação de necessidades materiais e da manipulação das necessidades, criando um universo totalitário de racionalidade tecnológica.",
            "Walter Benjamin, em \"A Obra de Arte na Era de sua Reprodutibilidade Técnica\", celebra integralmente a massificação cultural proporcionada pelas novas tecnologias, sem identificar nenhuma perda significativa em relação às formas tradicionais de experiência artística.",
            "Jürgen Habermas, em sua teoria da ação comunicativa, propõe que a racionalidade instrumental coloniza progressivamente o \"mundo da vida\", substituindo o entendimento comunicativo por imperativos sistêmicos orientados ao êxito.",
            "Axel Honneth, representante da terceira geração da Escola de Frankfurt, desenvolve uma teoria do reconhecimento que abandona completamente as preocupações com as dimensões econômicas e de classe, focando exclusivamente em questões identitárias."
        ],
        opcoes: [
            "V, V, F, V, F",
            "V, F, V, V, F",
            "F, V, F, F, V",
            "V, V, V, F, F",
            "F, F, V, V, V"
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_11",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "A estratificação social é um fenômeno presente em todas as sociedades, influenciando oportunidades e recursos disponíveis para diferentes grupos.",
        pergunta: "Segundo a teoria funcionalista, qual é a principal função da estratificação social?",
        opcoes: [
            "Promover a igualdade absoluta entre todos os membros da sociedade.",
            "Garantir que os recursos sejam distribuídos de forma aleatória.",
            "Assegurar que as posições sociais mais importantes sejam ocupadas pelos indivíduos mais qualificados.",
            "Eliminar as diferenças sociais para evitar conflitos.",
            "Manter a mobilidade social irrestrita."
        ],
        resposta: "C"
    },
    {
        id: "Sociologia_12",
        disciplina: "Sociologia",
        tipo: "AG",
        contexto: "O avanço das tecnologias digitais tem transformado as formas de interação social e organização coletiva.",
        pergunta: "Sobre a sociologia digital, julgue as afirmações a seguir:",
        afirmacoes: [
            "A sociologia digital estuda as interações sociais mediadas por tecnologias digitais, considerando tanto aspectos positivos quanto negativos.",
            "A exclusão digital refere-se apenas à falta de acesso físico à internet, não envolvendo questões de habilidades ou uso.",
            "Redes sociais digitais podem reforçar desigualdades sociais existentes, reproduzindo padrões de exclusão.",
            "A sociologia digital ignora as transformações culturais decorrentes do uso das tecnologias.",
            "O conceito de capital social é irrelevante para a análise das redes digitais."
        ],
        opcoes: [
            "Apenas as afirmações I e III estão corretas.",
            "Apenas as afirmações II e IV estão corretas.",
            "Apenas as afirmações I, III e V estão corretas.",
            "Apenas as afirmações II, IV e V estão corretas.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_13",
        disciplina: "Sociologia",
        tipo: "VF",
        contexto: "Movimentos sociais têm desempenhado papel crucial na transformação das sociedades contemporâneas.",
        pergunta: "Julgue as afirmações a seguir sobre movimentos sociais:",
        vfStatements: [
            "Movimentos sociais são sempre organizados formalmente com lideranças claras.",
            "A Teoria da Mobilização de Recursos destaca a importância da organização e dos recursos para o sucesso dos movimentos.",
            "Movimentos sociais contemporâneos frequentemente utilizam estratégias digitais para mobilização.",
            "A ação coletiva é sempre motivada exclusivamente por interesses econômicos.",
            "A repressão estatal pode tanto enfraquecer quanto fortalecer movimentos sociais."
        ],
        opcoes: [
            "F, V, V, F, V",
            "V, F, V, V, F",
            "F, V, F, V, V",
            "V, V, F, F, V",
            "F, F, V, V, F"
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_14",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "A globalização tem impactos profundos nas estruturas sociais e nas identidades culturais.",
        pergunta: "Qual das alternativas melhor descreve o conceito de globalização segundo a sociologia contemporânea?",
        opcoes: [
            "Processo exclusivo de homogeneização cultural promovido pelo Ocidente.",
            "Dinâmica complexa que envolve integração econômica, cultural e política, com efeitos diferenciados em diferentes contextos.",
            "Fenômeno restrito ao aumento do comércio internacional.",
            "Processo que elimina todas as formas de desigualdade social.",
            "Movimento que reduz a importância das identidades locais."
        ],
        resposta: "B"
    },
    {
        id: "Sociologia_15",
        disciplina: "Sociologia",
        tipo: "AG",
        contexto: "Diversas teorias sociológicas oferecem perspectivas distintas sobre a sociedade e suas dinâmicas.",
        pergunta: "Sobre as teorias sociológicas clássicas e contemporâneas, julgue as afirmações:",
        afirmacoes: [
            "Karl Marx enfatiza a centralidade das relações econômicas na estrutura social.",
            "Max Weber destaca a importância da cultura e da ação social na análise sociológica.",
            "A teoria funcionalista ignora as desigualdades sociais e seus impactos.",
            "A teoria do conflito vê a sociedade como arena de lutas por poder e recursos.",
            "A teoria da ação racional considera que os indivíduos agem sempre de forma irracional."
        ],
        opcoes: [
            "Apenas as afirmações I, II e IV estão corretas.",
            "Apenas as afirmações I, III e V estão corretas.",
            "Apenas as afirmações II, III e IV estão corretas.",
            "Apenas as afirmações II, IV e V estão corretas.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_16",
        disciplina: "Sociologia",
        tipo: "VF",
        contexto: "A estratificação social influencia oportunidades e desigualdades em diferentes societies.",
        pergunta: "Julgue as afirmações a seguir sobre estratificação social:",
        vfStatements: [
            "A mobilidade social é sempre alta em sociedades estratificadas.",
            "A teoria marxista define classes sociais com base na relação com os meios de produção.",
            "A estratificação pode ser baseada em fatores econômicos, culturais e sociais.",
            "A teoria funcionalista justifica a desigualdade como necessária para o funcionamento social.",
            "A estratificação social não afeta o acesso à educação e saúde."
        ],
        opcoes: [
            "F, V, V, V, F",
            "V, F, V, F, V",
            "F, V, F, V, F",
            "V, V, V, F, F",
            "F, F, V, V, V"
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_17",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "As cidades são espaços de intensa dinâmica social, econômica e cultural.",
        pergunta: "Qual das alternativas melhor descreve o conceito de segregação urbana?",
        opcoes: [
            "Processo pelo qual diferentes grupos sociais ocupam espaços distintos na cidade, frequentemente de forma desigual.",
            "Integração completa de todos os grupos sociais em todos os espaços urbanos.",
            "Fenômeno exclusivo de cidades em países desenvolvidos.",
            "Processo que elimina desigualdades sociais através da urbanização.",
            "Movimento de pessoas do campo para a cidade."
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_18",
        disciplina: "Sociologia",
        tipo: "AG",
        contexto: "Transformações recentes no mundo do trabalho têm impactado relações laborais e condições de emprego.",
        pergunta: "Sobre a sociologia do trabalho, julgue as afirmações:",
        afirmacoes: [
            "A precarização do trabalho tem aumentado com a expansão da economia informal e do trabalho temporário.",
            "A sociologia do trabalho ignora as relações de poder entre empregadores e empregados.",
            "O fordismo e o toyotismo representam modelos distintos de organização do trabalho.",
            "A automação e a digitalização não afetam as dinâmicas laborais.",
            "Sindicatos desempenham papel importante na defesa dos direitos dos trabalhadores."
        ],
        opcoes: [
            "Apenas as afirmações I, III e V estão corretas.",
            "Apenas as afirmações I, II e IV estão corretas.",
            "Apenas as afirmações II, III e V estão corretas.",
            "Apenas as afirmações II, IV e V estão corretas.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_19",
        disciplina: "Sociologia",
        tipo: "VF",
        contexto: "Cultura e identidade são conceitos centrais para a compreensão das sociedades.",
        pergunta: "Julgue as afirmações a seguir sobre cultura e identidade:",
        vfStatements: [
            "A cultura é um conjunto fixo e imutável de práticas e valores.",
            "Identidades sociais são construídas socialmente e podem ser múltiplas e fluidas.",
            "A globalização tem impacto na transformação das identidades culturais.",
            "A cultura não influencia o comportamento social.",
            "A identidade é sempre determinada biologicamente."
        ],
        opcoes: [
            "F, V, V, F, F",
            "V, F, V, F, V",
            "F, V, F, V, F",
            "V, V, V, F, F",
            "F, F, V, V, V"
        ],
        resposta: "A"
    },
    {
        id: "Sociologia_20",
        disciplina: "Sociologia",
        tipo: "MC",
        contexto: "A educação é um campo central para a reprodução ou transformação das desigualdades sociais.",
        pergunta: "Segundo Pierre Bourdieu, qual conceito explica como a educação contribui para a reprodução das desigualdades sociais?",
        opcoes: [
            "Capital econômico.",
            "Capital cultural.",
            "Capital social.",
            "Capital simbólico.",
            "Capital político."
        ],
        resposta: "B"
    },

    // --- Geografia Humana.md (10 Questions) ---
    {
        id: "GeografiaHumana_1",
        disciplina: "Geografia Humana",
        tipo: "MC",
        contexto: "A teoria da produção social do espaço, desenvolvida por Henri Lefebvre e posteriormente expandida por David Harvey, constitui um dos fundamentos teóricos da geografia crítica contemporânea.",
        pergunta: "De acordo com a perspectiva lefebvriana sobre a produção do espaço, assinale a alternativa correta:",
        opcoes: [
            "O espaço é um receptáculo neutro onde as relações sociais ocorrem, sem influência significativa na configuração dessas relações.",
            "A produção do espaço é determinada exclusivamente por fatores econômicos, não sofrendo influência de aspectos culturais ou políticos.",
            "O espaço é simultaneamente produto social e meio de produção, sendo tanto resultado quanto condicionante das relações sociais.",
            "As contradições na produção do espaço são anomalias que tendem a ser eliminadas pelo desenvolvimento equilibrado do capitalismo.",
            "A teoria lefebvriana propõe que o espaço deve ser analisado apenas em sua dimensão material, desconsiderando representações e aspectos simbólicos."
        ],
        resposta: "C"
    },
    {
        id: "GeografiaHumana_2",
        disciplina: "Geografia Humana",
        tipo: "AG",
        contexto: "Para analisar o processo de produção do espaço, Henri Lefebvre desenvolveu uma tríade conceitual que permite compreender diferentes dimensões desta produção.",
        pergunta: "Sobre a tríade conceitual proposta por Lefebvre, analise as afirmações:",
        afirmacoes: [
            "O \"espaço concebido\" refere-se às representações do espaço elaboradas por planejadores, urbanistas e tecnocratas.",
            "O \"espaço vivido\" corresponde ao espaço das representações, carregado de simbolismos e significados construídos pelos habitantes.",
            "O \"espaço percebido\" relaciona-se às práticas espaciais materiais e aos fluxos cotidianos.",
            "A análise lefebvriana privilegia o espaço concebido como dimensão determinante sobre as demais."
        ],
        opcoes: [
            "I e IV",
            "II e III",
            "I, II e III",
            "I, III e IV",
            "II, III e IV"
        ],
        resposta: "C"
    },
    {
        id: "GeografiaHumana_3",
        disciplina: "Geografia Humana",
        tipo: "MC",
        contexto: "O conceito de desenvolvimento geográfico desigual é central para compreender como o capitalismo produz e reproduz desigualdades espaciais em diferentes escalas.",
        pergunta: "Assinale a alternativa que melhor caracteriza o desenvolvimento geográfico desigual na perspectiva da geografia crítica:",
        opcoes: [
            "Fenômeno resultante exclusivamente de vantagens naturais pré-existentes nos territórios.",
            "Processo que tende a se atenuar naturalmente com o avanço das forças produtivas e a expansão do capitalismo.",
            "Resultado inevitável de diferenças culturais entre povos, sem relação com dinâmicas econômicas estruturais.",
            "Estratégia deliberada do capital para criar condições espaciais diferenciadas que permitam superar crises de acumulação.",
            "Consequência temporária de políticas públicas inadequadas, solucionável através da melhor governança territorial."
        ],
        resposta: "D"
    },
    {
        id: "GeografiaHumana_4",
        disciplina: "Geografia Humana",
        tipo: "VF",
        contexto: "Originalmente formulada por Leon Trotsky e posteriormente incorporada à geografia por Neil Smith e David Harvey, a teoria do desenvolvimento desigual e combinado oferece uma perspectiva sobre as desigualdades espaciais no capitalismo.",
        pergunta: "Sobre esta teoria, julgue os itens como verdadeiros (V) ou falsos (F):",
        vfStatements: [
            "O desenvolvimento desigual e combinado refere-se à coexistência, em um mesmo espaço geográfico, de formas avançadas e arcaicas de produção.",
            "Segundo esta teoria, a tendência homogeneizadora do capital (equalização) opera simultaneamente à sua tendência diferenciadora, criando arranjos espaciais contraditórios.",
            "A teoria propõe que as desigualdades espaciais são resultados exclusivos de fatores naturais ou culturais específicos de cada região.",
            "O conceito do \"desenvolvimento em saltos\" explica como regiões periféricas podem incorporar tecnologias avançadas sem percorrer as mesmas etapas históricas das regiões centrais."
        ],
        opcoes: [
            "V, V, F, V",
            "F, V, V, F",
            "V, F, F, V",
            "F, F, V, V",
            "V, V, V, F"
        ],
        resposta: "A"
    },
    {
        id: "GeografiaHumana_5",
        disciplina: "Geografia Humana",
        tipo: "MC", // Incorreta
        contexto: "O conceito de território na geografia contemporânea está intrinsecamente relacionado às relações de poder que se materializam no espaço.",
        pergunta: "Sobre territorialidade e relações de poder, assinale a alternativa INCORRETA:",
        opcoes: [
            "Para Claude Raffestin, o território se forma a partir do espaço, sendo resultado de uma ação conduzida por atores que se apropriam do espaço concreta ou abstratamente.",
            "O território pode ser compreendido exclusivamente como o espaço delimitado e controlado pelo Estado-nação, sendo irrelevantes outras formas de territorialidade.",
            "A territorialidade humana pode ser definida como um conjunto de relações que se originam num sistema tridimensional sociedade-espaço-tempo.",
            "As relações de poder que configuram territórios não se restringem ao poder do Estado, incluindo poderes econômicos, culturais e simbólicos.",
            "Para Robert Sack, a territorialidade representa uma estratégia de controle de pessoas e recursos através do controle de áreas."
        ],
        resposta: "B"
    },
    {
        id: "GeografiaHumana_6",
        disciplina: "Geografia Humana",
        tipo: "AG",
        contexto: "As transformações contemporâneas nas relações espaço-temporais têm levado a novas formas de territorialidade e experiências territoriais.",
        pergunta: "Analise as proposições sobre multiterritorialidade:",
        afirmacoes: [
            "O conceito de multiterritorialidade, desenvolvido por Rogério Haesbaert, refere-se à possibilidade de acessar ou conectar diversos territórios simultaneamente, seja através da mobilidade física ou virtual.",
            "Processos contemporâneos de desterritorialização implicam necessariamente o fim dos territórios tradicionais, sem possibilidade de reterritorialização.",
            "A multiterritorialidade está relacionada à complexificação das relações de poder no espaço, permitindo que diferentes atores exerçam territorialidades sobrepostas em um mesmo espaço físico.",
            "A experiência da multiterritorialidade é igualmente acessível a todos os grupos sociais, independentemente de sua condição socioeconômica."
        ],
        opcoes: [
            "I e III",
            "II e IV",
            "I, II e III",
            "II, III e IV",
            "I, III e IV"
        ],
        resposta: "A"
    },
    {
        id: "GeografiaHumana_7",
        disciplina: "Geografia Humana",
        tipo: "MC",
        contexto: "Os processos de urbanização e metropolização têm se intensificado globalmente, com importantes transformações nas formas e funções das cidades.",
        pergunta: "Sobre urbanização e metropolização contemporâneas, assinale a alternativa correta:",
        opcoes: [
            "A urbanização nos países do Sul Global seguiu os mesmos padrões e temporalidades observados nos países industrializados do Norte, caracterizando-se pelo desenvolvimento equilibrado e planejado.",
            "O processo de metropolização refere-se exclusivamente ao crescimento populacional e expansão territorial das grandes cidades, sem implicar reorganização funcional ou novos arranjos de governança.",
            "Regiões metropolitanas são estruturas espaciais caracterizadas pela concentração populacional e de atividades econômicas, pela integração funcional entre municípios e pelo compartilhamento de problemas comuns.",
            "A formação de megarregiões ou megalópoles é um fenômeno exclusivo de países desenvolvidos, não ocorrendo em contextos de desenvolvimento desigual.",
            "O conceito de metapolização, proposto por François Ascher, sugere o declínio irreversível das grandes metrópoles em favor de cidades médias, devido à desconcentração produtiva e populacional."
        ],
        resposta: "C"
    },
    {
        id: "GeografiaHumana_8",
        disciplina: "Geografia Humana",
        tipo: "VF",
        contexto: "A segregação socioespacial constitui uma das características mais marcantes das cidades capitalistas, especialmente em contextos de elevada desigualdade social.",
        pergunta: "Julgue as afirmações sobre segregação socioespacial:",
        vfStatements: [
            "A segregação residencial pode ser definida como a separação espacial de diferentes grupos sociais na cidade, resultando em áreas com relativa homogeneidade interna e heterogeneidade entre si.",
            "Segundo a perspectiva marxista, a segregação urbana é um fenômeno natural resultante de preferências individuais de moradia, sem relação com dinâmicas estruturais do capitalismo.",
            "A gentrificação refere-se ao processo de transformação e valorização de áreas urbanas anteriormente degradadas, frequentemente resultando no deslocamento de populações de baixa renda.",
            "Para geógrafos críticos como David Harvey, a produção de espaços segregados na cidade está diretamente relacionada aos processos de acumulação de capital e especulação imobiliária."
        ],
        opcoes: [
            "V, F, V, V",
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V",
            "V, F, F, F"
        ],
        resposta: "A"
    },
    {
        id: "GeografiaHumana_9",
        disciplina: "Geografia Humana",
        tipo: "MC", // Incorreta
        contexto: "A geopolítica contemporânea tem passado por significativas transformações com o reordenamento do sistema mundial e novas configurações de poder.",
        pergunta: "Sobre geopolítica e fronteiras no mundo contemporâneo, assinale a alternativa INCORRETA:",
        opcoes: [
            "A globalização econômica e o avanço tecnológico promoveram uma relativização das fronteiras nacionais para fluxos de capital e informação, mas não necessariamente para fluxos de pessoas.",
            "Fronteiras são construções sociais e históricas que refletem relações de poder, podendo ser analisadas tanto como linhas de separação quanto como espaços de interação e hibridização cultural.",
            "Com o fim da Guerra Fria e o avanço da globalização, as questões territoriais e fronteiriças tornaram-se irrelevantes na geopolítica contemporânea, sendo completamente substituídas por conflitos de natureza econômica.",
            "A securitização das fronteiras, intensificada após os atentados de 11 de setembro de 2001, representa uma reafirmação do controle territorial estatal em um contexto de fluxos transnacionais crescentes.",
            "O conceito de geopolítica crítica, desenvolvido por autores como Gearóid Ó Tuathail, propõe uma análise que vai além da perspectiva estadocêntrica tradicional, considerando uma multiplicidade de atores e escalas."
        ],
        resposta: "C"
    },
    {
        id: "GeografiaHumana_10",
        disciplina: "Geografia Humana",
        tipo: "AG",
        contexto: "O controle sobre recursos naturais estratégicos constitui um elemento fundamental na geopolítica contemporânea, gerando disputas territoriais em diferentes escalas.",
        pergunta: "Analise as proposições sobre recursos estratégicos e conflitos territoriais:",
        afirmacoes: [
            "A teoria do heartland, proposta por Halford Mackinder, mantém-se como principal paradigma para compreender conflitos territoriais contemporâneos, independentemente da natureza dos recursos em disputa.",
            "O controle sobre fontes de água doce tem se tornado um elemento geopolítico crescentemente importante, especialmente em regiões com escassez hídrica como Oriente Médio e Norte da África.",
            "A exploração de recursos naturais em zonas de fronteira frequentemente gera tensões diplomáticas entre Estados, especialmente quando envolve reservas compartilhadas.",
            "A emergência de novas potências como China e Índia tem intensificado a competição global por acesso a recursos estratégicos, reconfigurando alianças e zonas de influência."
        ],
        opcoes: [
            "I e III",
            "II e IV",
            "I, II e III",
            "II, III e IV",
            "I, III e IV"
        ],
        resposta: "D"
    }
]
