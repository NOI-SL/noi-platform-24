import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return twMerge(clsx(inputs));
}

export function generateRandomFileName(originalFileName: string): string {
  // Extract file extension
  const fileExtension = originalFileName.split(".").pop();

  // Generate a random string
  const randomString = Math.random().toString(36).substring(2);

  // Create a timestamp to ensure uniqueness
  const timestamp = Date.now();

  // Combine random string, timestamp, and file extension
  const randomFileName = `${randomString}_${timestamp}.${fileExtension}`;

  return randomFileName;
}
