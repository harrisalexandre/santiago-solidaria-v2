# Santiago Solidária

Plataforma comunitária para conectar moradores, voluntários, doadores e organizações de Santiago (RS).

## Esta entrega

Primeira versão navegável em HTML, CSS e JavaScript sem dependências de build. Inclui interface responsiva, pedido de apoio, cadastro de voluntariado e oferta de doações. Os registros são salvos somente no localStorage do navegador usado. **Não existe backend, autenticação, envio de notificações ou painel administrativo.** Não cadastre dados pessoais reais nesta demonstração.

Abrigo e telefone reaproveitados do protótipo original aparecem como pendentes de validação; confirme com o responsável municipal antes de divulgar.

## Executar
Abra `index.html` no navegador ou publique o diretório em hospedagem estática.

## Referências de produto
- [VOL](https://vol.org.br/): inscrição em ações, decisão pela organização, registro de participação, certificados e relatórios.
- [Atados](https://atados.com.br/): conexão entre voluntários e vagas, publicação de demandas e acompanhamento por organizações.
- [Solidarizando](https://solidarizando.com.br/): descoberta de instituições e conexão geográfica para doações ou voluntariado.
- [Conecta Brasil](https://conectabrasil.org/): articulação de campanhas, doadores, voluntários e instituições.

## Plano em cinco passos
1. **Descoberta e governança:** mapear prefeitura, Defesa Civil, assistência social, entidades, abrigos e lideranças; validar responsáveis, contatos, triagem e escalonamento.
2. **Produto e experiência:** fechar jornadas de solicitante, voluntário, doador, organização e operador; testar linguagem, acessibilidade e uso em celular/rede lenta.
3. **Dados e segurança:** backend (ex.: Supabase/PostgreSQL), perfis, organizações, pedidos privados, ofertas, campanhas, inscrições e auditoria; definir RLS, consentimento e retenção antes de receber dados reais.
4. **Operação e integrações:** painel de triagem, status e atribuição; notificações opt-in, mapa de locais públicos validados, estoque/ofertas e relatórios agregados.
5. **Piloto e escala:** testar com organizações reais, simular casos, medir tempo de resposta, pedidos atendidos, ofertas usadas e desistências; corrigir e expandir por bairros.

## Requisitos antes de produção
- Autenticação e perfis (admin, operador, organização, voluntário).
- Acesso por função/organização e RLS testada; não expor nome, telefone, endereço, relato ou localização de famílias.
- Verificação de organizações/campanhas, moderação e trilha de auditoria.
- Política de privacidade, base legal e retenção revisadas com responsável LGPD.
- Emergências: a plataforma não substitui 190, 192 ou 193.
- Backup, monitoramento, proteção contra spam e plano de incidentes.

## Arquivos
- `index.html`: interface e modais.
- `styles.css`: identidade visual responsiva.
- `app.js`: navegação, formulários e persistência de demonstração.
