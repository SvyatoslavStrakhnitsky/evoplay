import { Book } from '@/entities/Book';
import { pages } from '@/shared/mocks/pages';
import coverImage from '@/shared/assets/image/cover.png';
import cls from './App.module.css';

export const App = () => {
    return (
        <div className={cls.app}>
            <Book pages={pages} coverImage={coverImage}/>
        </div>
    );
};