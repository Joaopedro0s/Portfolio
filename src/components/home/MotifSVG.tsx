function schemaCluster(colX: number, header: string, hub: string, children: string[], grandchildren: (string | undefined)[] & { extra?: boolean }): string {
  const hubX = colX + 10, hubW = 92, hubY = 28, hubH = 22, hubCx = colX + 56;
  const rowBY = 92, rowCY = 156, boxH = 22;
  const leftX = colX, rightX = colX + 58, boxW = 54;
  const leftCx = colX + 27, rightCx = colX + 85;
  const esc = (s: string) => s.replace(/&/g, '&amp;');
  const box = (x: number, y: number, w: number, h: number, label: string, isHub: boolean) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${isHub ? 'rgba(255,93,46,.07)' : 'none'}" stroke="${isHub ? '#FF5D2E' : 'rgba(233,238,247,.32)'}" stroke-width="1.1"/>
    <circle cx="${x + 7}" cy="${y + h / 2}" r="1.6" fill="${isHub ? '#FF5D2E' : 'rgba(233,238,247,.45)'}"/>
    <text x="${x + w / 2}" y="${y + h / 2 + 2.6}" text-anchor="middle" font-family="JetBrains Mono, ui-monospace, monospace" font-size="${isHub ? 7.4 : 5.9}" font-weight="${isHub ? 700 : 500}" fill="${isHub ? '#EEF2F9' : 'rgba(233,238,247,.78)'}">${esc(label)}</text>`;
  const line = (x1: number, y1: number, x2: number, y2: number) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="rgba(233,238,247,.28)" stroke-width="1.1"/>`;
  return `
    <text x="${colX}" y="15" font-family="JetBrains Mono, ui-monospace, monospace" font-size="9.5" font-weight="700" letter-spacing="1" fill="#FF5D2E">${esc(header)}</text>
    ${line(hubCx, hubY + hubH, leftCx, rowBY)}
    ${children[1] ? line(hubCx, hubY + hubH, rightCx, rowBY) : ''}
    ${children[0] && grandchildren[0] ? line(leftCx, rowBY + boxH, leftCx, rowCY) : ''}
    ${children[1] && grandchildren[1] ? line(rightCx, rowBY + boxH, rightCx, rowCY) : ''}
    ${grandchildren.extra ? line(rightX - 4, rowCY + boxH / 2, leftX + boxW + 4, rowCY + boxH / 2) : ''}
    ${box(hubX, hubY, hubW, hubH, hub, true)}
    ${children[0] ? box(leftX, rowBY, boxW, boxH, children[0], false) : ''}
    ${children[1] ? box(rightX, rowBY, boxW, boxH, children[1], false) : ''}
    ${grandchildren[0] ? box(leftX, rowCY, boxW, boxH, grandchildren[0]!, false) : ''}
    ${grandchildren[1] ? box(rightX, rowCY, boxW, boxH, grandchildren[1]!, false) : ''}
  `;
}

function schemaDiagramSVG(): string {
  const eduCash = schemaCluster(8, 'EDUCASH', 'users', ['user_cofrinhos', 'user_planilhas'], ['cofrinho_deposits', 'planilha_despesas']);
  const k4math = schemaCluster(144, 'K4MATH', 'users', ['user_progress', 'user_achievements'], ['activities', 'achievements']);
  const grandLoja: (string | undefined)[] & { extra?: boolean } = ['itens_pedido', 'produtos'];
  grandLoja.extra = true;
  const lojaReal = schemaCluster(280, 'LOJA REAL', 'clientes', ['pedidos'], grandLoja);
  return `<g>
    <g stroke="rgba(233,238,247,.06)"><path d="M132 6v213M268 6v213"/></g>
    ${eduCash}${k4math}${lojaReal}
  </g>`;
}

/** Port of motifSVG() from index.html — the decorative line-art used on cards without a screenshot,
 *  plus the 'schema' kind: a real ER-diagram overview built from the 3 actual .sql schemas (EduCash, K4Math, Loja Real). */
export default function MotifSVG({ kind }: { kind: 'curve' | 'nodes' | 'schema' }) {
  if (kind === 'schema') {
    return (
      <svg className="card__motif" viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: schemaDiagramSVG() }} />
    );
  }
  if (kind === 'curve') {
    return (
      <svg className="card__motif" viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="rgba(233,238,247,.07)">
          <path d="M0 56h400M0 112h400M0 168h400" />
          <path d="M100 0v225M200 0v225M300 0v225" />
        </g>
        <path className="dash" d="M12 200C70 198 96 168 128 128S186 44 232 40s84 34 156 22" stroke="#FF5D2E" strokeWidth="2" strokeLinecap="round" />
        <path className="dash" d="M12 210C74 208 108 190 148 168s72-58 128-62 84 22 112 30" stroke="rgba(233,238,247,.28)" strokeWidth="1.5" strokeLinecap="round" />
        <g fill="#FF5D2E">
          <circle cx="128" cy="128" r="3.5" />
          <circle cx="232" cy="40" r="3.5" />
        </g>
      </svg>
    );
  }
  return (
    <svg className="card__motif" viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="rgba(233,238,247,.22)" strokeWidth="1.4" className="dash">
        <path d="M74 112h72M182 112h64M246 112c26 0 26-46 52-46M246 112c26 0 26 46 52 46" />
      </g>
      <g fill="none" stroke="rgba(233,238,247,.3)">
        <rect x="26" y="94" width="48" height="36" rx="9" />
        <rect x="298" y="30" width="52" height="34" rx="9" />
        <rect x="298" y="140" width="52" height="34" rx="9" />
      </g>
      <rect x="146" y="88" width="40" height="48" rx="10" fill="rgba(255,93,46,.14)" stroke="#FF5D2E" />
      <circle cx="166" cy="112" r="4" fill="#FF5D2E" />
    </svg>
  );
}
