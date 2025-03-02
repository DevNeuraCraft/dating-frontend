'use client';

import { useState } from 'react';
import { useClientOnce } from '../../hooks/useClientOnce';
import TelegramSDK from './telegram';




export default function TelegramProvider({ children }: React.PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);

  useClientOnce(() => {
    TelegramSDK().then(() => setIsReady(true));
  });

  if (!isReady) return; // Пока SDK загружается, ничего не рендерим

  return children;
}
