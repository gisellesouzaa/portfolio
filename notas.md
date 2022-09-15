GIFs grandes não são eficientes para exibir conteúdo animado. Use vídeos MPEG4/WebM para animações e PNG/WebP para imagens estáticas em vez de GIF para economizar bytes de rede. Saiba mais
[Git para MP4](https://web.dev/efficient-animated-content/?utm_source=lighthouse&utm_medium=devtools)

Veicule imagens que tenham o tamanho adequado para economizar dados da rede celular e melhorar o tempo de carregamento. Saiba mais.
[Redimensione imagens](https://web.dev/uses-responsive-images/?utm_source=lighthouse&utm_medium=devtools)

<!-- Formatos de imagem como WebP e AVIF costumam ter uma compressão melhor que PNG e JPEG, o que gera downloads mais rápidos e menos consumo dados. Saiba mais.
[imagens em formatos modernos](https://web.dev/uses-webp-images/?utm_source=lighthouse&utm_medium=devtools) -->

Os recursos estão bloqueando a primeira exibição da sua página. Exiba JS/CSS crítico inline e adie todos os JS/estilos não críticos. Saiba mais.
[bloqueio de renderização](https://web.dev/render-blocking-resources/?utm_source=lighthouse&utm_medium=devtools)

Grandes payloads de rede geram custos para o usuário e estão diretamente relacionados a tempos de carregamento maiores. Saiba mais.
[cargas de rede](https://web.dev/total-byte-weight/?utm_source=lighthouse&utm_medium=devtools)

Defina uma largura e altura explícitas em elementos de imagem para reduzir mudanças de layout e melhorar a CLS. Saiba mais
*logo tecs no card projetos
[ mudanças repentinas de layout ](https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=devtools#images-without-dimensions)


As cores de primeiro e segundo plano não têm uma taxa de contraste suficiente.
*tag p, sobre
[ contraste de cor](https://dequeuniversity.com/rules/axe/4.4/color-contrast?utm_source=lighthouse&utm_medium=devtools)


# W3

The element button must not appear as A descendant of the a element.
<a> <button>Enviar

Considere usar o h1elemento apenas como um título de nível superior
*apenas 1 na página

# opção copiar em JS:
document.querySelector('#copie').select();
document.execCommand('copy');