import { forwardRef } from 'react';
import PageNumberIcon from '@/shared/assets/icons/page_number.svg';
import cls from './BookPage.module.css';
import { Icon } from '@/shared/ui/Icon';
import { classNames, Mods } from '@/shared/lib/helpers/classNames';

interface BookCoverProps {
    image: string;
    text: string;
    page: number;
    alt?: string;
    title?: string;
}

export const BookPage = forwardRef<HTMLDivElement, BookCoverProps>((props, ref) => {
    const {
        image,
        title,
        text,
        page,
        alt = ''
    } = props;

    const mods: Mods = {
        [cls.left]: Boolean(page % 2), 
        [cls.right]: !(page % 2), 
    };

    return (
        <div ref={ref} className={classNames(cls.page, mods)}>
            {title && <h1>{title}</h1>}
            <img src={image} alt={alt} />
            <p>{text}</p>
            <div className={cls.pageNumber}>
                <Icon Svg={PageNumberIcon}/>
                <span className={cls.number}>{page}</span>
            </div>
        </div>
    );
});