import { forwardRef } from 'react';
import cls from './BookCover.module.css';

interface BookCoverProps {
    coverImage: string;
}

export const BookCover = forwardRef<HTMLDivElement, BookCoverProps>((props, ref) => {    
    const {
        coverImage
    } = props;

    return (
        <div ref={ref} className={cls.cover}>
            <img src={coverImage} alt="" />
        </div>
    );
});