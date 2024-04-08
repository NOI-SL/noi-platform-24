import * as ftp from "basic-ftp";

let ftpClient;

const connectFTP = async () => {
  ftpClient = new ftp.Client();
  await ftpClient.access({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    port: process.env.FTP_PORT,
    secure: process.env.FTP_SECURE,
  });
};

const closeFTP = async () => {
  if (ftpClient) {
    await ftpClient.close();
  }
};

export { connectFTP, closeFTP, ftpClient };