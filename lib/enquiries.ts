import "server-only";
import { promises as fs } from "fs";
import path from "path";

export type EnquirySource = "quote" | "contact" | "upload";

export type Enquiry = {
  id: string;
  createdAt: string;
  source: EnquirySource;
  email?: string;
  name?: string;
  product?: string;
  quantity?: string;
  paper?: string;
  finish?: string;
  message?: string;
  ip?: string;
  userAgent?: string;
};

const FILE = path.join(process.cwd(), "data", "enquiries.json");

async function ensureFile(): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  try {
    await fs.access(FILE);
  } catch {
    await fs.writeFile(FILE, "[]", "utf8");
  }
}

async function readAll(): Promise<Enquiry[]> {
  await ensureFile();
  const text = await fs.readFile(FILE, "utf8");
  try {
    const data = JSON.parse(text);
    if (!Array.isArray(data)) return [];
    return data as Enquiry[];
  } catch {
    return [];
  }
}

async function writeAll(arr: Enquiry[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(FILE, JSON.stringify(arr, null, 2), "utf8");
}

export async function listEnquiries(): Promise<Enquiry[]> {
  const arr = await readAll();
  return [...arr].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function appendEnquiry(
  entry: Omit<Enquiry, "id" | "createdAt">,
): Promise<Enquiry> {
  const arr = await readAll();
  const enquiry: Enquiry = {
    id: `enq_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date().toISOString(),
    ...entry,
  };
  arr.unshift(enquiry);
  await writeAll(arr);
  return enquiry;
}

export async function deleteEnquiry(id: string): Promise<boolean> {
  const arr = await readAll();
  const next = arr.filter((e) => e.id !== id);
  if (next.length === arr.length) return false;
  await writeAll(next);
  return true;
}
