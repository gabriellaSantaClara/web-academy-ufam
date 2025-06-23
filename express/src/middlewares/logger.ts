import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

type LogType = 'simples' | 'completo';

// Função que retorna middleware
export function createLogger(tipo: LogType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const logDir = process.env.LOG_DIR || 'logs';
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    const logFile = path.join(logDir, 'access.log');
    const hora = new Date().toISOString();
    let linha = `${hora} ${req.method} ${req.url}`;

    if (tipo === 'completo') {
      linha += ` HTTP/${req.httpVersion} ${req.get('User-Agent')}`;
    }

    linha += '\n';
    fs.appendFileSync(logFile, linha, { encoding: 'utf-8' });
    next();
  };
}
