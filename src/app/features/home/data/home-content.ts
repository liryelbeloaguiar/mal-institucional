import {
  LucideBlocks,
  LucideBoxes,
  LucideBraces,
  LucideCheckCheck,
  LucideCircuitBoard,
  LucideFingerprint,
  LucideGauge,
  LucideLayers3,
  LucideLockKeyhole,
  LucideNetwork,
  LucidePanelsTopLeft,
  LucideRefreshCw,
  LucideRepeat2,
  LucideShieldCheck,
  LucideSparkles,
  LucideWorkflow,
} from '@lucide/angular';
import { ContentCard, ProcessStep, Solution } from '../../../core/models/home-content.model';

export const ABOUT_HIGHLIGHTS: readonly ContentCard[] = [
  {
    title: 'Soluções personalizadas',
    description: 'Cada decisão parte da realidade e dos objetivos do projeto.',
    icon: LucideSparkles.icon,
  },
  {
    title: 'Arquitetura bem planejada',
    description: 'Bases técnicas organizadas para crescer com segurança.',
    icon: LucideBlocks.icon,
  },
  {
    title: 'Evolução contínua',
    description: 'Produtos preparados para aprender, adaptar e avançar.',
    icon: LucideRefreshCw.icon,
  },
];

export const SOLUTIONS: readonly Solution[] = [
  {
    name: 'Alfândega',
    headline: 'Organização, controle e segurança de processos.',
    description:
      'Uma solução desenvolvida para auxiliar na validação, organização e acompanhamento de fluxos digitais, proporcionando mais controle e confiabilidade.',
    status: 'Em desenvolvimento',
    code: '01 / OPS',
    icon: LucideShieldCheck.icon,
  },
  {
    name: 'DS',
    headline: 'Consistência para produtos digitais.',
    description:
      'O Design System da MAL reúne padrões, componentes e diretrizes para construir interfaces mais acessíveis, reutilizáveis e eficientes.',
    status: 'Em desenvolvimento',
    code: '02 / UI',
    icon: LucideLayers3.icon,
  },
  {
    name: 'Severino',
    headline: 'Tecnologia para simplificar tarefas e rotinas.',
    description:
      'Uma solução criada para apoiar a organização e a automação de processos, reduzindo tarefas repetitivas e tornando as rotinas mais práticas.',
    status: 'Em desenvolvimento',
    code: '03 / AUTO',
    icon: LucideWorkflow.icon,
  },
];

export const SERVICES: readonly ContentCard[] = [
  {
    title: 'Sistemas web sob medida',
    description: 'Aplicações seguras alinhadas aos fluxos reais do seu negócio.',
    icon: LucideBraces.icon,
  },
  {
    title: 'Plataformas internas',
    description: 'Ambientes centralizados para organizar operações e equipes.',
    icon: LucidePanelsTopLeft.icon,
  },
  {
    title: 'Automação de processos',
    description: 'Menos tarefas repetitivas, mais tempo para decisões relevantes.',
    icon: LucideWorkflow.icon,
  },
  {
    title: 'Experiências digitais',
    description: 'Interfaces claras, acessíveis e projetadas para uso cotidiano.',
    icon: LucideGauge.icon,
  },
  {
    title: 'Produtos digitais',
    description: 'Da descoberta a uma estrutura pronta para evoluir.',
    icon: LucideBoxes.icon,
  },
  {
    title: 'Integração entre sistemas',
    description: 'Dados e ferramentas conectados em fluxos mais inteligentes.',
    icon: LucideNetwork.icon,
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: '01',
    title: 'Entendimento',
    description: 'Compreendemos o problema, o contexto e as necessidades do projeto.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Definimos arquitetura, experiência, tecnologias e etapas de desenvolvimento.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Construímos a solução com organização, qualidade e acompanhamento contínuo.',
  },
  {
    number: '04',
    title: 'Evolução',
    description: 'Avaliamos resultados e preparamos o produto para futuras melhorias.',
  },
];

export const DIFFERENTIALS: readonly ContentCard[] = [
  {
    title: 'Sob medida de verdade',
    description: 'A tecnologia se adapta ao problema, e não o contrário.',
    icon: LucideCircuitBoard.icon,
  },
  {
    title: 'Código sustentável',
    description: 'Organização que facilita manutenção e continuidade.',
    icon: LucideCheckCheck.icon,
  },
  {
    title: 'Componentes reutilizáveis',
    description: 'Consistência e agilidade em cada nova evolução.',
    icon: LucideRepeat2.icon,
  },
  {
    title: 'Interfaces responsivas',
    description: 'Experiências eficientes em qualquer dispositivo.',
    icon: LucideGauge.icon,
  },
  {
    title: 'Segurança desde o início',
    description: 'Proteção considerada em arquitetura e implementação.',
    icon: LucideLockKeyhole.icon,
  },
  {
    title: 'Comunicação próxima',
    description: 'Visibilidade e alinhamento durante todo o projeto.',
    icon: LucideFingerprint.icon,
  },
];
