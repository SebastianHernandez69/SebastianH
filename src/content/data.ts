// src/content/data.js

import JavaScript from "../icons/tech/front/JavaScript.astro";
import TypeScript from "../icons/tech/front/TypeScript.astro";
import Nextjs from "../icons/tech/front/Nextjs.astro";
import React from "../icons/tech/front/React.astro";
import ReactQuery from "../icons/tech/front/ReactQuery.astro";
import Tailwind from "../icons/tech/front/Tailwind.astro";
import Zustand from "../icons/tech/front/Zustand.astro";

import Nodejs from "../icons/tech/back/Nodejs.astro";
import Nestjs from "../icons/tech/back/Nestjs.astro";
import Dotnet from "../icons/tech/back/Dotnet.astro";
import SpringBoot from "../icons/tech/back/SpringBoot.astro";
import Java from "../icons/tech/back/Java.astro";
import Csharp from "../icons/tech/back/Csharp.astro";
import Graphql from "../icons/tech/back/Graphql.astro";

import MySql from "../icons/tech/db/MySql.astro";
import Postgres from "../icons/tech/db/Postgre.astro";
import Mongodb from "../icons/tech/db/Mongodb.astro";
import Sqlserver from "../icons/tech/db/Sqlserver.astro";
import Prisma from "../icons/tech/db/Prisma.astro";

// tools
import Git from "../icons/tech/tools/Git.astro";
import Aws from "../icons/tech/tools/Aws.astro";
import Azure from "../icons/tech/tools/Azure.astro";
import Docker from "../icons/tech/tools/Docker.astro";
import Terraform from "../icons/tech/tools/Terraform.astro";

export const TECH_STACK = [
  {
    section: "FRONTEND",
    data: [
      { title: "JavaScript", Icon: JavaScript },
      { title: "TypeScript", Icon: TypeScript },
      { title: "Next.js", Icon: Nextjs },
      { title: "React", Icon: React },
      { title: "React Query", Icon: ReactQuery },
      { title: "Tailwind CSS", Icon: Tailwind },
      { title: "Zustand", Icon: Zustand },
    ],
  },
  {
    section: "BACKEND",
    data: [
      { title: "Node.js", Icon: Nodejs },
      { title: "NestJS", Icon: Nestjs },
      { title: ".NET", Icon: Dotnet },
      { title: "Spring Boot", Icon: SpringBoot },
      { title: "Java", Icon: Java },
      { title: "C#", Icon: Csharp },
      { title: "GraphQL", Icon: Graphql },
    ],
  },
  {
    section: "DATABASES",
    data: [
      { title: "MySQL", Icon: MySql },
      { title: "PostgreSQL", Icon: Postgres },
      { title: "MongoDB", Icon: Mongodb },
      { title: "SQL Server", Icon: Sqlserver },
      { title: "Prisma", Icon: Prisma },
    ],
  },
  {
    section: "TOOLS",
    data: [
      { title: "Git", Icon: Git },
      { title: "AWS", Icon: Aws },
      { title: "Azure", Icon: Azure },
      { title: "Docker", Icon: Docker },
      { title: "Terraform", Icon: Terraform },
    ],
  },
];
