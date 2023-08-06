import prisma from "@/api/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { language } = request.query;
  console.log(request.query)
  console.log(language);
  
  const works = await prisma.work.findMany({
    where: {
      language: language as string,
      is_hidden: false,
    },
    select: {
      id: true,
      job_role: true,
      company: true,
      description: true,
      end_date: true,
      start_date: true,
    },
    orderBy: {
      end_date: "asc",
    }
  });
  return response.status(200).json(works);
}
