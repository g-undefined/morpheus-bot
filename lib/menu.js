module.exports = {
    menuPrincipal : ()=>{
        return `
╭─| ☾🌐 *Morpheu's Bot®*☽
|
|>---- ☾ 🛠️ *MENU PRINCIPAL* 🛠️ ☽
|
|- Digite um dos comandos abaixo:
|
|- *!menu* 0 - Informação
|- *!menu* 1 - Figurinhas
|- *!menu* 2 - Utilidades
|- *!menu* 3 - Downloads
|- *!menu* 4 - Grupo
|- *!menu* 5 - Diversão
|- *!menu* 6 - Créditos
|
╰╼❥ M'BOT® by *Dreynus*
`
    },

    menuFigurinhas: ()=>{
        return `
╭─| ☾🌐 *Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ 🖼️ *FIGURINHAS* 🖼️☽
|
|- *!s* - Transfome uma IMAGEM em sticker.
|- *!s* 1 - Transfome uma IMAGEM em sticker circular.
|- *!sgif* - Transforme um VIDEO/GIF em sticker.
|- *!sgif* 1 - Transforme um VIDEO/GIF em sticker (Sem corte).
|- *!sgif* 2 - Transforme um VIDEO/GIF em sticker circular.
|- *!simg* - Transforme um STICKER em foto.
|- *!tps* - Transforme um TEXTO em sticker.
|- *!atps* - Transforme um TEXTO em sticker animado.
|- *!ssf* - Transforme uma IMAGEM em sticker sem fundo.
|
╰╼❥ M'BOT® by *Dreynus*
`
    },

    menuInfoSuporte: ()=>{
        return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ ❓ *INFO/SUPORTE* ❓☽
|
|- *!info* - Informações do bot e contato do dono.
|- *!changelog* - Veja as últimas atualizações e melhorias.
|- *!reportar* _[mensagem]_ - Reporte um problema para o dono.
|- *!meusdados* - Exibe seus dados de uso.
|
╰╼❥ M'BOT® by *Dreynus*
`
    },

    menuDownload: ()=>{
        return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ 📥 *DOWNLOADS* 📥☽
|
|- *!play* _[nome-musica]_ - Faz download de uma música e envia.
|- *!yt* _[nome-video]_ - Faz download de um video do Youtube e envia.
|- *!fb* _[link-post]_ - Faz download de um video do Facebook e envia.
|- *!ig* _[link-post]_ - Faz download de um video/foto do Instagram e envia.
|- *!tw* _[link-tweet]_ - Faz download de um video/foto do Twitter e envia.
|- *!tk* _[link-tiktok]_ - Faz download de um video do Tiktok e envia.
|- *!img* _[tema-imagem]_ - Faz download de uma imagem e envia.
|
╰╼❥ M'BOT® by *Dreynus*
`
    },

    menuUtilidades: ()=>{
        return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ ⚒️ *UTILITÁRIOS* ⚒️☽
|
|- *!voz* _[idioma]_ _[mensagem]_ - Transforma texto em audio.
|- *!audio* _[tipo-edicao]_ - Responda um audio com este comando para fazer a edição.
|- *!qualmusica* - Responda um audio/video para identificar a música.
|- *!letra* _[nome-musica]_ - Envia a letra da música que você digitar.
|- *!anime* -  Identifica o anime por foto de uma cena.
|- *!animelanc* -  Mostra os lançamentos atuais de animes.
|- *!tabela* -  Mostra tabela com letras para criação de nicks.
|- *!traduz* _[idioma]_ _[texto]_ - Traduz um texto para o idioma escolhido.
|- *!ddd* - Responda alguém para ver o estado/região.
|- *!pesquisa* _[tema]_ - Faz uma rápida pesquisa na internet.
|- *!clima* _[cidade]_ - Mostra a temperatura atual.
|- *!noticias* - Obtem noticias atuais.
|- *!moeda* _[real|dolar|euro]_ _[valor]_ - Converte o valor de uma determinada moeda para outras.
|- *!calc* _[expressão-matemática]_ - Calcula alguma conta que queira fazer.
|- *!rastreio* _[código-rastreio]_ - Rastreamento dos CORREIOS.
|
╰╼❥ M'BOT® by *Dreynus*
`
    },

    menuGrupo: (isGroupAdmin)=>{
        if(isGroupAdmin){
            return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ 👨‍👩‍👧‍👦 *GRUPO* 👨‍👩‍👧‍👦☽ 
|
|-- ☾ GERAL ☽
|
|- *!status* - Vê os recursos ligados/desligados.
|- *!regras* - Exibe a descrição do grupo com as regras.
|- *!adms* - Lista todos administradores.
|- *!destravar* - Envia destravas para o grupo.
|- *!fotogrupo* - Altera foto do grupo
|- *!mt* _[mensagem]_ - Marca todos MEMBROS/ADMINS com uma mensagem.
|- *!mm* _[mensagem]_ - Marca os MEMBROS com uma mensagem.
|- *!dono* - Mostra dono do grupo.
|
|-- ☾ CONTROLE DE ATIVIDADE ☽
|
|- *!contador* - Liga/desliga o contador de atividade (Mensagens).
|- *!atividade* @marcarmembro - Mostra a atividade do usuário no grupo. 
|- *!alterarcont* _[quantidade]_ @membro - Altera a quantidade de mensagens de um membro.
|- *!imarcar* 1-50 - Marca todos os inativos com menos de 1 até 50 mensagens.
|- *!ibanir* 1-50 - Bane todos os inativos com  menos de 1 até 50 mensagens.
|- *!topativos* 1-50 - Marca os membros mais ativos em um ranking de 1-50 pessoas.
|
|-- ☾ BLOQUEIO DE COMANDOS ☽ 
|
|- *!bcmd* _[comando1 comando2 etc]_ - Bloqueia os comandos escolhidos no grupo.
|- *!dcmd* _[comando1 comando2 etc]_ - Desbloqueia os comandos escolhidos no grupo.
|
|-- ☾ LISTA NEGRA ☽ 
|
|- *!blista* +55 (xx) 9xxxx-xxxx - Adiciona o número na lista negra do grupo.
|- *!dlista* +55 (xx) 9xxxx-xxxx - Remove o número na lista negra do grupo.
|- *!listanegra* - Exibe a lista negra do grupo.
|
|-- ☾ RECURSOS ☽ 
|
|- *!mutar* - Ativa/desativa o uso de comandos.
|- *!autosticker* - Ativa/desativa a criação automática de stickers.
|- *!aporno* - Ativa/desativa o anti-pornô em imagens.
|- *!alink* - Ativa/desativa o anti-link.
|- *!atrava* - Ativa/desativa o anti-trava.
|- *!bv* - Ativa/desativa o bem-vindo.
|- *!afake* - Ativa/desativa o anti-fake.
|- *!aflood* - Ativa/desativa o anti-flood.
|
|-- ☾ ADMINISTRATIVO ☽
|
|- *!add* +55 (xx) 9xxxx-xxxx - Adiciona ao grupo.
|- *!ban* @marcarmembro - Bane do grupo.
|- *!f* - Abre/fecha o grupo.
|- *!promover* @marcarmembro - Promove a ADM.
|- *!rebaixar* @marcaradmin - Rebaixa a MEMBRO.
|- *!link* - Exibe o link do grupo.
|- *!rlink* - Redefine o link do grupo.
|- *!apg* - Apaga mensagem do BOT.
|- *!bantodos* - Bane todos os membros.
|
|-- ☾ VOTAÇÃO BAN ☽
|
|- *!votacao* - Veja se tem algum membro em votação de ban.
|- *!vb* @marcarmembro [max-votos] - Abre uma votação de ban.
|- *!votar* - Vota no membro que está em votação.
|
|-- ☾ ENQUETE ☽
|
|- *!enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com uma pergunta e as opçôes.
|- *!enquete* - Encerra a enquete atual e exibe os resultados.
|- *!verenquete* - Veja se tem alguma enquete em aberto.
|- *!votarenquete* [numero-opcao] - Vota na opção selecionada na enquete.
|
|-- ☾ ETC.. ☽
|
|- *!roletarussa* - Expulsa um membro aleatório do grupo.
|
╰╼❥ M'BOT® by *Dreynus*
`
        } else {
            return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ 👨‍👩‍👧‍👦 *GRUPO* 👨‍👩‍👧‍👦☽
|
|-- ☾ GERAL ☽
|- *!regras* - Exibe a descrição do grupo com as regras.
|- *!adms* - Lista todos administradores.
|- *!dono* - Mostra dono do grupo.
|
|-- ☾ VOTAÇÃO BAN ☽
|
|- *!votacao* - Veja se tem algum membro em votação de ban.
|- *!votar* - Vota no membro que está em votação.
|
|--☾ ENQUETE ☽
|
|- *!verenquete* - Veja se tem alguma enquete em aberto.
|- *!votarenquete* _[numero-opcao]_ - Vota na opção selecionada na enquete.
|
╰╼❥ M'BOT® by *Dreynus*
`
        }
    },

    menuDiversao:(isGroup)=>{
        if(isGroup){
            return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ 🧩 *DIVERSÃO/OUTROS* ☽
|
|- *!mascote* - Exibe o mascote.
|- *!caracoroa* - Decide no cara ou coroa.
|- *!ppt* [pedra, papel, tesoura] - Pedra, papel ou tesoura.
|- *!detector* - Detecta mentiras utilizando uma IA avançada.
|- *!casal* - Seleciona aleatoriamente um casal.
|- *!fch* - Gera uma frase contra a humanidade.
|- *!viadometro* - Mede o nível de viadagem de alguma pessoa.
|- *!gadometro* - Mede o nível de gadice de uma pessoa.
|- *!bafometro* - Mede o nível de álcool de uma pessoa.
|- *!macacometro* - Mede o nível de primata de uma pessoa.
|- *!brisometro* - Mede o quão brisado a pessoa está.
|- *!piada* - Conta uma piada aleatória.
|- *!gato* - Envia uma imagem aleatória de gatos.
|- *!chance* - Calcula a chance de algo acontecer.
|- *!top5* [tema] - Ranking dos Top 5 com o tema que você escolher.
|- *!par* @pessoa1 @pessoa2 - Mede o nivel de compatibilidade entre 2 pessoas.
|
╰╼❥ M'BOT® by *Dreynus*
`
        } else {
            return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ 🧩 *DIVERSÃO/OUTROS* ☽
|
|- *!mascote* - Exibe o mascote.
|- *!chance* - Calcula a chance de algo acontecer.
|- *!fch* - Gera uma frase contra a humanidade.
|- *!caracoroa* - Decide no cara ou coroa.
|- *!ppt* _[pedra, papel, tesoura]_ - Pedra, papel ou tesoura.
|
╰╼❥ M'BOT® by *Dreynus*
`
        }
    },

    menuCreditos: ()=>{
        return `
☾ 🌐*Morpheu's Bot®*☽

👤 Dono: Gabriel D. Santos
🌐 GitHub: github.com/dreynus

✨ Obrigado por escolher o Morpheu's BOT!
`
    },

    menuAdmin: ()=>{
        return `
╭─| ☾ 🌐*Morpheu's Bot®*☽
|
|>- Guia: *!comando* guia
|
|>---- ☾ ⚙️ *ADMINISTRAÇÃO* ⚙️☽
|
|-- ☾ GERAL ☽
|
|- *!infocompleta* - Informação completa do BOT.
|- *!ping* - Informação do sistema e de tempo de resposta.
|- *!print* - Mostra tela inicial do bot.
|- *!limpartudo*  - Limpa todos os chats(Grupos e contatos).
|- *!limpar*  - Limpa todos os chats de contatos.
|- *!bloquear* @usuario  - Bloqueia o usuário mencionado.
|- *!desbloquear* @usuario  - Desbloqueia o usuário mencionado.
|- *!listablock*  - Lista todos os usuários bloqueados.
|- *!fotobot* - Altera foto do BOT
|- *!estado* _[online, offline ou manutencao]_  - Seleciona o estado atual do bot.
|- *!bctodos* _[mensagem]_ - Faz um anúncio com uma mensagem para todos os CHATS.
|- *!bcgrupos* _[mensagem]_ - Faz um anúncio com uma mensagem somente para os GRUPOS.
|- *!bccontatos* _[mensagem]_ - Faz um anúncio com uma mensagem somente para os CONTATOS.
|- *!desligar* - Desliga o bot.
|
|-- ☾ BLOQUEIO DE COMANDOS ☽ 
|
|- *!bcmdglobal* _[comando1 comando2 etc]_ - Bloqueia os comandos escolhidos globalmente.
|- *!dcmdglobal* _[comando1 comando2 etc]_ - Desbloqueia os comandos escolhidos globalmente.
|
|-- ☾ BOT USUÁRIOS ☽
|
|- *!verdados* @usuario - Mostra os dados do usuario cadastrado no bot.
|- *!tipos* - Mostra todos os tipos de usuário disponíveis.
|- *!alterartipo* _[tipo]_ @usuario - Muda o tipo de conta do usuário.
|- *!limpartipo* _[tipo]_ @usuario - Limpa todos os usuários desse tipo e transforma em usuarios comuns.
|- *!usuarios* _[tipo]_  - Mostra todos os usuários do tipo escolhido.
|
|-- ☾ CONTROLE/LIMITE ☽
|
|- *!pvliberado* - Ativa/desativa os comandos em mensagens privadas.
|- *!autostickerpv* - Ativa/desativa a criação automática de stickers no privado.
|- *!taxalimite* _[qtd-comandos]_ _[tempo-bloqueio]_ - Ativa/desativa a taxa de comandos por minuto.
|- *!limitediario* - Ativa/desativa o limite diario de comandos por dia.
|- *!limitarmsgs* _[qtd-msgs]_ _[intervalo]_ - Ativa/desativa o limite de mensagens privadas em um intervalo.
|- *!mudarlimite* _[tipo]_ _[novo-limite]_ - Muda o limite de comandos por dia de um tipo de usuário.
|- *!rtodos* - Reseta os comandos diários de todos.
|- *!r* @usuario - Reseta os comandos diários de um usuário.
|
|-- ☾ GRUPOS ☽
|
|- *!sair* - Sai do grupo.
|- *!sairgrupos* - Sai de todos os grupos.
|- *!entrargrupo* [link-grupo] - BOT entra no grupo.
|- *!rconfig* - Reseta as configurações dos grupos.
|
╰╼❥ M'BOT® by *Dreynus*
`
    }
}
