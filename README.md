# Caderno de Dono(a) · versão pra celular

Os cadernos dos Protocolos da Prática (Prática Business) pra preencher no celular, um por protocolo:
- `nao-anda-sem-mim/`: **Minha empresa não anda sem mim** (ícone "Sem Mim", chave `caderno-dono-gerber-v2`).
- `tarefa-barata/`: **Gasto meu dia com tarefa barata** (ícone "Meu Dia", chave `caderno-dono-martell-v1`).

O texto abaixo descreve o primeiro; o segundo segue o mesmo molde (instalação, Guardar, cópia de segurança, exemplo), com o conteúdo do caderno do Martell: quanto vale a sua hora (taxa de recompra), as bolinhas das tarefas de assistente, a auditoria de 15 em 15 minutos (abre no horário que acabou de passar; toca na tarefa e em V ou R), as somas da sexta calculadas a partir das auditorias, as semanas 1 a 4, o dia 30 e os anexos A, B e C.
O caderno abre no navegador do celular, salva tudo no próprio aparelho (nada vai pra internet) e pode ser posto na Tela de Início como um app.

Versão completa: capa, antes de começar, dia 1 em 4 passos, a terça daqui a 5 anos, as semanas (com o teste da ausência e “+ Mais uma semana”), o dia 30 e os anexos (contratos A e B, passo a passo C, me chamaram D, franquia E).
Em “Guardar”: lembretes na agenda (.ics), PDF do caderno pela impressão do celular, cópia de segurança em arquivo ou texto e apagar tudo.
Endereço: https://caderno.praticabusiness.com (DNS: CNAME `caderno` → `fabiokkt.github.io`, no cPanel da hospedagem do praticabusiness.com; o arquivo `CNAME` liga o domínio no GitHub Pages).
Um caderno por protocolo, cada um na sua pasta: `nao-anda-sem-mim/` é o do protocolo Minha empresa não anda sem mim. A raiz (`index.html`) lista os cadernos.
Cada caderno é um arquivo só (`index.html` da pasta), sem servidor. Os dados ficam no `localStorage` do aparelho, numa chave por protocolo (`caderno-dono-gerber-v2` neste).
Quem ainda não abriu pelo ícone começa pela tela de instalação, que mostra só o caso do aparelho: iPhone no Safari, iPhone ou Android dentro de outro app (Hotmart, Instagram, WhatsApp), Android no Chrome (com o botão "Instalar o caderno" quando o Chrome libera) e computador (código QR). O ícone se chama "Sem Mim" (`manifest.webmanifest`, `apple-mobile-web-app-title`). O `sw.js` guarda a página pra abrir sem internet (sempre tenta a internet primeiro).
