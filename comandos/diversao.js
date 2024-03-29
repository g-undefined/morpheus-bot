//REQUERINDO MODULOS
const msgs_texto = require("../lib/msgs");
const {
  criarTexto,
  primeiraLetraMaiuscula,
  erroComandoMsg,
  removerNegritoComando,
} = require("../lib/util");
const path = require("path");
const api = require("../lib/api");
const axios = require('axios');
const fs = require('fs');

module.exports = diversao = async (client, message) => {
  try {
    const {
      id,
      chatId,
      sender,
      isGroupMsg,
      chat,
      caption,
      quotedMsg,
      quotedMsgObj,
      mentionedJidList,
      body,
    } = message;
    const commands = caption || body || "";
    var command = commands.toLowerCase().split(" ")[0] || "";
    command = removerNegritoComando(command);
    const args = commands.split(" ");
    const ownerNumber = process.env.NUMERO_DONO.trim(); // Número do administrador do bot
    const icaroNumber = process.env.NUMERO_ICARO.trim(); // Número do Icaro (zuar no pirokometro)
    const botNumber = await client.getHostNumber();
    const groupId = isGroupMsg ? chat.groupMetadata.id : "";
    const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : "";
    const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false;
    const isBotGroupAdmins = isGroupMsg
      ? groupAdmins.includes(botNumber + "@c.us")
      : false;
    const groupOwner = isGroupMsg ? chat.groupMetadata.owner : "";

    switch (command) {
      case "!detector":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!quotedMsg)
          return await client.reply(chatId, erroComandoMsg(command), id);
        var imgsDetector = [
          "verdade",
          "vaipra",
          "mentiroso",
          "meengana",
          "kao",
          "incerteza",
          "estresse",
          "conversapraboi",
        ];
        var indexAleatorio = Math.floor(Math.random() * imgsDetector.length);
        await client.sendFile(
          chatId,
          "./media/img/comandos/detector/calibrando.png",
          "detector.png",
          msgs_texto.diversao.detector.espera,
          id
        );
        await client.sendFile(
          chatId,
          `./media/img/comandos/detector/${imgsDetector[indexAleatorio]}.png`,
          "detector.png",
          "",
          quotedMsgObj.id
        );
        break;

      case "!viadometro":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!quotedMsg && mentionedJidList.length == 0)
          return await client.reply(chatId, erroComandoMsg(command), id);
        if (mentionedJidList.length > 1)
          return await client.reply(
            chatId,
            msgs_texto.diversao.viadometro.apenas_um,
            id
          );
        var respostas = msgs_texto.diversao.viadometro.respostas;
        var indexAleatorio = Math.floor(Math.random() * respostas.length),
          idResposta = null,
          alvo = null;
        if (mentionedJidList.length == 1)
          (idResposta = id), (alvo = mentionedJidList[0].replace(/@c.us/g, ""));
        else
          (idResposta = quotedMsgObj.id),
            (alvo = quotedMsgObj.author.replace(/@c.us/g, ""));
        // if (ownerNumber == alvo) indexAleatorio = 0;
        var respostaTexto = criarTexto(
          msgs_texto.diversao.viadometro.resposta,
          respostas[indexAleatorio]
        );
        await client.reply(chatId, respostaTexto, idResposta);
        break;

      case "!bafometro":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!quotedMsg && mentionedJidList.length == 0)
          return await client.reply(chatId, erroComandoMsg(command), id);
        if (mentionedJidList.length > 1)
          return await client.reply(
            chatId,
            msgs_texto.diversao.bafometro.apenas_um,
            id
          );
        var respostas = msgs_texto.diversao.bafometro.respostas;
        var indexAleatorio = Math.floor(Math.random() * respostas.length),
          idResposta = null,
          alvo = null;
        if (mentionedJidList.length == 1)
          (idResposta = id), (alvo = mentionedJidList[0].replace(/@c.us/g, ""));
        else
          (idResposta = quotedMsgObj.id),
            (alvo = quotedMsgObj.author.replace(/@c.us/g, ""));
        // if (ownerNumber == alvo) indexAleatorio = 0;
        var respostaTexto = criarTexto(
          msgs_texto.diversao.bafometro.resposta,
          respostas[indexAleatorio]
        );
        await client.reply(chatId, respostaTexto, idResposta);
        break;

      case "!macacometro":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!quotedMsg && mentionedJidList.length == 0)
          return await client.reply(chatId, erroComandoMsg(command), id);
        if (mentionedJidList.length > 1)
          return await client.reply(
            chatId,
            msgs_texto.diversao.macacometro.apenas_um,
            id
          );
        var respostas = msgs_texto.diversao.macacometro.respostas;
        var indexAleatorio = Math.floor(Math.random() * respostas.length),
          idResposta = null,
          alvo = null;
        if (mentionedJidList.length == 1)
          (idResposta = id), (alvo = mentionedJidList[0].replace(/@c.us/g, ""));
        else
          (idResposta = quotedMsgObj.id),
            (alvo = quotedMsgObj.author.replace(/@c.us/g, ""));
        // if (ownerNumber == alvo) indexAleatorio = 0;
        var respostaTexto = criarTexto(
          msgs_texto.diversao.macacometro.resposta,
          respostas[indexAleatorio]
        );
        await client.reply(chatId, respostaTexto, idResposta);
        break;

      case "!pirokometro":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!quotedMsg && mentionedJidList.length == 0)
          return await client.reply(chatId, erroComandoMsg(command), id);
        if (mentionedJidList.length > 1)
          return await client.reply(
            chatId,
            msgs_texto.diversao.pirokometro.apenas_um,
            id
          );
        var respostas = msgs_texto.diversao.pirokometro.respostas;
        var indexAleatorio = Math.floor(Math.random() * respostas.length),
          idResposta = null,
          alvo = null;
        if (mentionedJidList.length == 1)
          (idResposta = id), (alvo = mentionedJidList[0].replace(/@c.us/g, ""));
        else
          (idResposta = quotedMsgObj.id),
            (alvo = quotedMsgObj.author.replace(/@c.us/g, ""));
        // if (ownerNumber == alvo) indexAleatorio = 0;
        var respostaTexto = criarTexto(
          msgs_texto.diversao.pirokometro.resposta,
          respostas[indexAleatorio]
        );
        await client.reply(chatId, respostaTexto, idResposta);
        break;

      case "!brisometro":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!quotedMsg && mentionedJidList.length == 0)
          return await client.reply(chatId, erroComandoMsg(command), id);
        if (mentionedJidList.length > 1)
          return await client.reply(
            chatId,
            msgs_texto.diversao.brisometro.apenas_um,
            id
          );
        var respostas = msgs_texto.diversao.brisometro.respostas;
        var indexAleatorio = Math.floor(Math.random() * respostas.length),
          idResposta = null,
          alvo = null;
        if (mentionedJidList.length == 1)
          (idResposta = id), (alvo = mentionedJidList[0].replace(/@c.us/g, ""));
        else
          (idResposta = quotedMsgObj.id),
            (alvo = quotedMsgObj.author.replace(/@c.us/g, ""));
        // if (ownerNumber == alvo) indexAleatorio = 0;
        var respostaTexto = criarTexto(
          msgs_texto.diversao.brisometro.resposta,
          respostas[indexAleatorio]
        );
        await client.reply(chatId, respostaTexto, idResposta);
        break;

      case "!piada":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);

        var respostasPiadas = msgs_texto.diversao.piadas.respostas;
        var indexAleatorioPiada = Math.floor(Math.random() * respostasPiadas.length);

        var respostaPiada = respostasPiadas[indexAleatorioPiada];
        await client.reply(chatId, respostaPiada, id);
        break;

      case "!gato":
        try {
          const apiKey = "live_PRcURjqogegpouQz7rgSnyV753TSUrTZbhdUMvsU7f1wLrCjmpULPcNGv0WkVzqY";
          const response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
            headers: {
              'x-api-key': apiKey
            }
          });

          if (response.data && response.data.length > 0) {
            const imageUrl = response.data[0].url;
            await client.sendImage(chatId, imageUrl, 'gato.jpg', 'Aqui está uma imagem de um gato aleatório:');
          } else {
            await client.reply(chatId, 'Desculpe, não consegui encontrar uma imagem de gato neste momento.', id);
          }
        } catch (error) {
          console.error('Erro ao obter imagem de gato:', error);
          await client.reply(chatId, 'Ocorreu um erro ao buscar a imagem de gato. Por favor, tente novamente mais tarde.', id);
        }
        break;

      case "!xereca":
        try {
          const pastaImagens = path.join(__dirname, '..', 'media', 'img', 'comandos', 'xer');
          const imagens = fs.readdirSync(pastaImagens);

          if (imagens.length === 0) {
            await client.reply(chatId, 'Nenhuma xereca encontrada.', id);
            return;
          }

          const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
          const imagePath = path.join(pastaImagens, imagemAleatoria);

          await client.sendImage(chatId, imagePath, imagemAleatoria, 'Uma xereca saindo do forno:');
        } catch (error) {
          console.error('Erro ao obter xereca:', error);
          await client.reply(chatId, 'Ocorreu um erro ao buscar uma xereca. Por favor, tente novamente mais tarde.', id);
        }
        break;

      case "!piroka":
        try {
          const pastaImagens = path.join(__dirname, '..', 'media', 'img', 'comandos', 'pen');
          const imagens = fs.readdirSync(pastaImagens);

          if (imagens.length === 0) {
            await client.reply(chatId, 'Nenhuma piroka encontrada.', id);
            return;
          }

          const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
          const imagePath = path.join(pastaImagens, imagemAleatoria);

          await client.sendImage(chatId, imagePath, imagemAleatoria, 'Uma piroka saindo do forno:');
        } catch (error) {
          console.error('Erro ao obter piroka:', error);
          await client.reply(chatId, 'Ocorreu um erro ao buscar uma piroka. Por favor, tente novamente mais tarde.', id);
        }
        break;

      case "!peitos":
        try {
          const pastaImagens = path.join(__dirname, '..', 'media', 'img', 'comandos', 'pei');
          const imagens = fs.readdirSync(pastaImagens);

          if (imagens.length === 0) {
            await client.reply(chatId, 'Nenhuma peito encontrado.', id);
            return;
          }

          const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
          const imagePath = path.join(pastaImagens, imagemAleatoria);

          await client.sendImage(chatId, imagePath, imagemAleatoria, 'Um peitos saindo do forno:');
        } catch (error) {
          console.error('Erro ao obter peitos:', error);
          await client.reply(chatId, 'Ocorreu um erro ao buscar um peito. Por favor, tente novamente mais tarde.', id);
        }
        break;

      case "!motivar":
        const pastaPerfeito = path.join(__dirname, '..', 'media', 'img', 'comandos', 'perfeito');
        const imagemPerfeito = fs.readdirSync(pastaPerfeito);
        const imagePerfeitoPath = path.join(pastaPerfeito, imagemPerfeito[0]);

        try {
          await client.sendImage(chatId, imagePerfeitoPath, 'imagem-perfeito.jpg', msgs_texto.diversao.motivar.resposta);
        } catch (error) {
          console.error(error);
          await client.reply(chatId, 'Ocorreu um erro, por favor tente novamente mais tarde', id);
        }
        break;

      case "!chance":
        if (args.length === 1)
          return await client.reply(chatId, erroComandoMsg(command), id);
        var num = Math.floor(Math.random() * 100),
          temaChance = body.slice(8).trim();
        if (quotedMsg) {
          //SE O COMANDO TIVER SIDO USADO EM RESPOSTA
          await client.reply(
            chatId,
            criarTexto(msgs_texto.diversao.chance.resposta, num, temaChance),
            quotedMsgObj.id
          );
        } else {
          await client.reply(
            chatId,
            criarTexto(msgs_texto.diversao.chance.resposta, num, temaChance),
            id
          );
        }
        break;

      case "!caracoroa":
        var ladosMoeda = ["cara", "coroa"],
          indexAleatorio = Math.floor(Math.random() * ladosMoeda.length);
        await client.reply(chatId, msgs_texto.diversao.caracoroa.espera, id);
        var respostaTexto = criarTexto(
          msgs_texto.diversao.caracoroa.resposta,
          primeiraLetraMaiuscula(ladosMoeda[indexAleatorio])
        );
        await client.sendFile(
          chatId,
          path.resolve(
            `media/img/comandos/caracoroa/${ladosMoeda[indexAleatorio]}.png`
          ),
          `${ladosMoeda[indexAleatorio]}.png`,
          respostaTexto,
          id
        );
        break;

      case "!ppt":
        var ppt = ["pedra", "papel", "tesoura"],
          indexAleatorio = Math.floor(Math.random() * ppt.length);
        if (args.length === 1)
          return await client.reply(chatId, erroComandoMsg(command), id);
        if (!ppt.includes(args[1].toLowerCase()))
          return await client.reply(
            chatId,
            msgs_texto.diversao.ppt.opcao_erro,
            id
          );
        var escolhaBot = ppt[indexAleatorio],
          iconeEscolhaBot = null,
          escolhaUsuario = args[1].toLowerCase(),
          iconeEscolhaUsuario = null,
          vitoriaUsuario = null;
        if (escolhaBot == "pedra") {
          iconeEscolhaBot = "✊";
          if (escolhaUsuario == "pedra")
            (vitoriaUsuario = null), (iconeEscolhaUsuario = "✊");
          if (escolhaUsuario == "tesoura")
            (vitoriaUsuario = false), (iconeEscolhaUsuario = "✌️");
          if (escolhaUsuario == "papel")
            (vitoriaUsuario = true), (iconeEscolhaUsuario = "✋");
        } else if (escolhaBot == "papel") {
          iconeEscolhaBot = "✋";
          if (escolhaUsuario == "pedra")
            (vitoriaUsuario = false), (iconeEscolhaUsuario = "✊");
          if (escolhaUsuario == "tesoura")
            (vitoriaUsuario = true), (iconeEscolhaUsuario = "✌️");
          if (escolhaUsuario == "papel")
            (vitoriaUsuario = null), (iconeEscolhaUsuario = "✋");
        } else {
          iconeEscolhaBot = "✌️";
          if (escolhaUsuario == "pedra")
            (vitoriaUsuario = true), (iconeEscolhaUsuario = "✊");
          if (escolhaUsuario == "tesoura")
            (vitoriaUsuario = null), (iconeEscolhaUsuario = "✌️");
          if (escolhaUsuario == "papel")
            (vitoriaUsuario = false), (iconeEscolhaUsuario = "✋");
        }
        var textoResultado = "";
        if (vitoriaUsuario == true)
          textoResultado = msgs_texto.diversao.ppt.resposta.vitoria;
        else if (vitoriaUsuario == false)
          textoResultado = msgs_texto.diversao.ppt.resposta.derrota;
        else textoResultado = msgs_texto.diversao.ppt.resposta.empate;
        await client.reply(
          chatId,
          criarTexto(textoResultado, iconeEscolhaUsuario, iconeEscolhaBot),
          id
        );
        break;

      case "!massacote":
      case "!mascote":
        var mascoteFotoURL = "https://i.imgur.com/mVwa7q4.png";
        await client.sendFileFromUrl(
          chatId,
          mascoteFotoURL,
          "mascote.jpeg",
          "Whatsapp Jr.",
          id
        );
        break;

      case "!malacos":
        const malacosFotoURL = "https://i.imgur.com/7bcn2TK.jpg";
        await client.sendFileFromUrl(
          chatId,
          malacosFotoURL,
          "malacos.jpg",
          "Somos o problema",
          id
        );
        break;

      case "!roletarussa":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!isGroupAdmins)
          return await client.reply(
            chatId,
            msgs_texto.permissao.apenas_admin,
            id
          );
        if (!isBotGroupAdmins)
          return await client.reply(chatId, msgs_texto.permissao.bot_admin, id);
        var idParticipantesAtuais = await client.getGroupMembersId(groupId);
        idParticipantesAtuais.splice(
          idParticipantesAtuais.indexOf(groupOwner),
          1
        );
        idParticipantesAtuais.splice(
          idParticipantesAtuais.indexOf(botNumber + "@c.us"),
          1
        );
        if (idParticipantesAtuais.length == 0)
          return await client.reply(
            chatId,
            msgs_texto.diversao.roletarussa.sem_membros,
            id
          );
        var indexAleatorio = Math.floor(
          Math.random() * idParticipantesAtuais.length
        );
        var respostaTexto = criarTexto(
          msgs_texto.diversao.roletarussa.resposta,
          idParticipantesAtuais[indexAleatorio].replace(/@c.us/g, "")
        );
        await client.reply(chatId, msgs_texto.diversao.roletarussa.espera, id);
        await client.sendTextWithMentions(chatId, respostaTexto);
        await client.removeParticipant(
          groupId,
          idParticipantesAtuais[indexAleatorio]
        );
        break;

      case "!casal":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        var idParticipantesAtuais = await client.getGroupMembersId(groupId);
        if (idParticipantesAtuais.length < 2)
          return await client.reply(
            chatId,
            msgs_texto.diversao.casal.minimo,
            id
          );
        var indexAleatorio = Math.floor(
          Math.random() * idParticipantesAtuais.length
        );
        var pessoaEscolhida1 = idParticipantesAtuais[indexAleatorio];
        idParticipantesAtuais.splice(indexAleatorio, 1);
        indexAleatorio = Math.floor(
          Math.random() * idParticipantesAtuais.length
        );
        var pessoaEscolhida2 = idParticipantesAtuais[indexAleatorio];
        var respostaTexto = criarTexto(
          msgs_texto.diversao.casal.resposta,
          pessoaEscolhida1.replace(/@c.us/g, ""),
          pessoaEscolhida2.replace(/@c.us/g, "")
        );
        await client.sendTextWithMentions(chatId, respostaTexto);
        break;

      case "!gozei":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);

        var idParticipantesAtuais = await client.getGroupMembersId(groupId);
        var indexAleatorio = Math.floor(
          Math.random() * idParticipantesAtuais.length
        );
        var pessoaEscolhida = idParticipantesAtuais
        [indexAleatorio];

        var respostaTexto = criarTexto(
          msgs_texto.diversao.gozei.resposta,
          `@${pessoaEscolhida.replace(/@c\.us/g, "")}`
        );
        
        await client.sendReplyWithMentions(chatId, respostaTexto, id);
        break;

      case "!":

        break;

      case "!gadometro":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (!quotedMsg && mentionedJidList.length === 0)
          return await client.reply(chatId, erroComandoMsg(command), id);
        if (mentionedJidList.length > 1)
          return await client.reply(
            chatId,
            msgs_texto.diversao.gadometro.apenas_um,
            id
          );
        var respostas = msgs_texto.diversao.gadometro.respostas;
        var indexAleatorio = Math.floor(Math.random() * respostas.length),
          idResposta = null,
          alvo = null;
        if (mentionedJidList.length == 1)
          (idResposta = id), (alvo = mentionedJidList[0].replace(/@c.us/g, ""));
        else
          (idResposta = quotedMsgObj.id),
            (alvo = quotedMsgObj.author.replace(/@c.us/g, ""));
        if (ownerNumber == alvo) indexAleatorio = 0;
        var respostaTexto = criarTexto(
          msgs_texto.diversao.gadometro.resposta,
          respostas[indexAleatorio]
        );
        await client.reply(chatId, respostaTexto, idResposta);
        break;

      case "!top5":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (args.length === 1)
          return await client.reply(chatId, erroComandoMsg(command), id);
        var temaRanking = body.slice(6).trim(),
          idParticipantesAtuais = await client.getGroupMembersId(groupId);
        if (idParticipantesAtuais.length < 5)
          return await client.reply(
            chatId,
            msgs_texto.diversao.top5.erro_membros,
            id
          );
        var respostaTexto = criarTexto(
          msgs_texto.diversao.top5.resposta_titulo,
          temaRanking
        );
        for (let i = 0; i < 5; i++) {
          var medalha = "";
          switch (i + 1) {
            case 1:
              medalha = "🥇";
              break;
            case 2:
              medalha = "🥈";
              break;
            case 3:
              medalha = "🥉";
              break;
            default:
              medalha = "";
          }
          var indexAleatorio = Math.floor(
            Math.random() * idParticipantesAtuais.length
          );
          var membroSelecionado = idParticipantesAtuais[indexAleatorio];
          respostaTexto += criarTexto(
            msgs_texto.diversao.top5.resposta_itens,
            medalha,
            i + 1,
            membroSelecionado.replace(/@c.us/g, "")
          );
          idParticipantesAtuais.splice(
            idParticipantesAtuais.indexOf(membroSelecionado),
            1
          );
        }
        await client.sendTextWithMentions(chatId, respostaTexto);
        break;

      case "!par":
        if (!isGroupMsg)
          return await client.reply(chatId, msgs_texto.permissao.grupo, id);
        if (mentionedJidList.length !== 2)
          return await client.reply(chatId, erroComandoMsg(command), id);
        var respostas = msgs_texto.diversao.par.respostas;
        var indexAleatorio = Math.floor(Math.random() * respostas.length);
        var respostaTexto = criarTexto(
          msgs_texto.diversao.par.resposta,
          mentionedJidList[0].replace(/@c.us/g, ""),
          mentionedJidList[1].replace(/@c.us/g, ""),
          respostas[indexAleatorio]
        );
        await client.sendTextWithMentions(chatId, respostaTexto);
        break;

      case "!fch":
        try {
          var respostaFrase = await api.obterCartasContraHu();
          await client.reply(chatId, respostaFrase, id);
        } catch (err) {
          await client.reply(chatId, err.message, id);
        }
        break;
    }
  } catch (err) {
    throw err;
  }
};
