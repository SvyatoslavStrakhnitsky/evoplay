import { createRoot } from 'react-dom/client';
import {App} from '@/app/App';
import '@/shared/fonts/Mariupol-Regular.ttf';
import '@/app/styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(<App/>);