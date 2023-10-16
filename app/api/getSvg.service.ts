import prisma from "@/lib/prisma";
export default async function getSvg(logo: string) {
  const foundLogo = await prisma.svgs.findFirst({
    where: {
      title: logo,
    },
  });
  if (foundLogo === null) {
    throw new Error(`${logo}`);
  }

  return foundLogo;
}
