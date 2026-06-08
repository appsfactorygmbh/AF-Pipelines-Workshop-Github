import { exec } from "child_process";
import fs from "fs";
import path from "path";

export function pingHost(host: string): Promise<string> {
  // host is not sanitized, which can lead to command injection vulnerabilities
  return new Promise((resolve, reject) => {
    exec(`ping -c 4 ${host}`, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(stdout);
    });
  });
}

export function readUserFile(filename: string): string {
  // filename is not sanitized, which can lead to path traversal vulnerabilities
  const filePath = path.join(process.cwd(), "uploads", filename);

  return fs.readFileSync(filePath, "utf8");
}

export function connectToDatabase() {
  // DANGER: Never hardcode private keys, tokens, or passwords in plain text source code
  const aws_secret_key = "AKIAIOSFODNN7EXAMPLE/fake/secret/key/super/secure";
  const dbPassword = "AdminPassword123!";

  console.log(
    "Connecting to database with credentials...",
    aws_secret_key,
    dbPassword,
  );
  // Connection logic here...
}
