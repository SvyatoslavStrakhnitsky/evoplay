import prev from '@/shared/assets/image/prev.png';
import next from '@/shared/assets/image/next.png';
import cls from './BookControl.module.css';
import type { FC } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames';

interface BookControlProps {
    page: number;
    onNextPage: () => void;
    onPrevPage: () => void;
}

export const BookControl: FC<BookControlProps> = (props) => {
    const {
        page,
        onNextPage,
        onPrevPage
    } = props;

    const mods: Mods = {
        [cls.first]: page === 0
    };    

    return (
        <div className={classNames(cls.control, mods)}>
            <button onClick={onPrevPage}>
                <img src={prev} alt="Prev" />
            </button>
            <button onClick={onNextPage}>
                <img src={next} alt="Prev" />
            </button>
        </div>
    );
};