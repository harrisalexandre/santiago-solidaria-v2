# Santiago Solidária

Plataforma comunitária para conectar moradores, voluntários, doadores e organizações de Santiago (RS).

## Estado desta entrega

Esta é uma primeira versão navegável em HTML, CSS e JavaScript sem dependências de build. Inclui páginas responsivas, fluxos de pedido de apoio, cadastro de voluntariado e oferta de doações. Os registros são salvos somente no localStorage do navegador utilizado. **Não existe backend, autenticação, envio de notificações, publicação pública de pedidos ou painel administrativo nesta demonstração.**

Os dados de abrigo e contato reaproveitados do protótipo inicial estão marcados como pendentes de validação. Não divulgar como informação oficial sem confirmação do responsável municipal.

## Executar

Abra index.html no navegador ou publique o diretório em hospedagem estática.

## Análise de referências

- [VOL](https://vol.org.br/): conecta voluntários, OSCs e poder público; traz inscrição em oportunidades, decisão pela organização, registro de participação, certificados e relatórios. Referência para governança e rastreabilidade do voluntariado.
- [Atados](https://atados.com.br/): conecta pessoas a vagas de voluntariado e ajuda organizações a identificar demandas, publicar vagas, preparar voluntários e acompanhar ações. Referência para gestão da oferta de voluntariado.
- [Solidarizando](https://solidarizando.com.br/): aproxima pessoas e instituições com descoberta por geolocalização e participação em doações ou voluntariado. Referência para descoberta local.
- [Conecta Brasil](https://conectabrasil.org/): articula campanhas, doadores, voluntários e instituições sociais. Referência para campanhas e ofertas institucionais.

## Plano em cinco passos

1. **Descoberta e governança:** mapear prefeitura, Defesa Civil, assistência social, entidades, abrigos e lideranças; validar canais, critérios de triagem, responsáveis e fluxo de escalonamento.
2. **Produto e experiência:** fechar jornadas de solicitante, voluntário, doador, organização e operador; testar linguagem simples, acessibilidade e uso em celular/rede lenta.
3. **Dados e segurança:** escolher backend (ex.: Supabase/PostgreSQL), modelar perfis, organizações, pedidos privados, ofertas, campanhas, inscrições e auditoria; definir RLS, consentimento, retenção e perfis de acesso antes de receber dados reais.
4. **Operação e integrações:** construir painel restrito de triagem, status e atribuição; notificações opt-in (e-mail/WhatsApp oficial), mapa apenas de pontos públicos verificados, gestão de estoque/ofertas e relatórios agregados.
5. **Piloto e escala:** rodar piloto com poucas organizações, simular casos, medir tempo de resposta, demandas atendidas, ofertas utilizadas e desistências; corrigir gargalos e expandir por bairros/municípios.

## Requisitos para produção

- Autenticação robusta e perfis (admin, operador, organização, voluntário).
- Acesso restrito por função e organização; RLS validada com testes negativos.
- Não expor nome, telefone, endereço, relato ou localização de famílias em listas públicas.
- Moderação e verificação de organizações e campanhas; trilha de auditoria.
- Política de privacidade, base legal e retenção de dados revisadas com responsável jurídico/encarregado LGPD.
- Fluxo explícito para emergências: plataforma não substitui 190, 192 ou 193.
- Backup, monitoramento, prevenção de spam, rate limit e plano de incidentes.

## Estrutura

- index.html — interface e modais.
- styles.css — identidade visual responsiva.
- app.js — navegação, formulários e persistência local de demonstração.
