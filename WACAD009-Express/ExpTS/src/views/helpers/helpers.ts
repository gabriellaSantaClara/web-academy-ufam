interface Tech {
  name: string;
  type: string;
  poweredByNodejs: boolean;
}

export function listNodeTechs(techs: Tech[]) {
  const filtradas = techs.filter(t => t.poweredByNodejs);
  const lista = filtradas.map(t => `<li>${t.name} - ${t.type}</li>`).join('');
  return `<ul>${lista}</ul>`;
}