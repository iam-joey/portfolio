import {
  AngularIcon,
  BashIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  JavascriptIcon,
  KafkaIcon,
  MongoIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  RedisIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/components/icons';
import { AWS } from '@/components/icons/aws';
import { GithubActions } from '@/components/icons/githubactions';
import { LinuxIcon } from '@/components/icons/linux';
import { Turborepo } from '@/components/icons/turborepo';
import { JSX } from 'react';

export type SkillPillProps = {
  name: string;
  icon: JSX.Element;
};

export const LANGUAGES: SkillPillProps[] = [
  {
    name: 'Javascript',
    icon: <JavascriptIcon />,
  },
  {
    name: 'Typescript',
    icon: <TypescriptIcon />,
  },
];

export const FRAMEWORKS: SkillPillProps[] = [
  {
    name: 'express',
    icon: <ExpressIcon />,
  },
  {
    name: 'react',
    icon: <ReactIcon />,
  },
  { name: 'nextjs', icon: <NextIcon /> },
  {
    name: 'tailwindcss',
    icon: <TailwindIcon />,
  },
];

export const DATABASES: SkillPillProps[] = [
  {
    name: 'Postgres',
    icon: <PostgresIcon />,
  },
  {
    name: 'Redis',
    icon: <RedisIcon />,
  },
  {
    name: 'Mongodb',
    icon: <MongoIcon />,
  },
];

export const TOOLS: SkillPillProps[] = [
  {
    name: 'Turborepo',
    icon: <Turborepo />,
  },
  {
    name: 'git',
    icon: <GitIcon />,
  },
  {
    name: 'Github Actions',
    icon: <GithubActions />,
  },
  {
    name: 'docker',
    icon: <DockerIcon />,
  },
  {
    name: 'kafka',
    icon: <KafkaIcon />,
  },
  {
    name: 'linux',
    icon: <LinuxIcon />,
  },
  {
    name: 'Aws',
    icon: <AWS />,
  },
];
