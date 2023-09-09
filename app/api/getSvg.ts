import prisma from "@/lib/prisma";
export default async function getSvg() {
  const res = await fetch("");
  if (res.ok!) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}
