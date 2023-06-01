//@ts-nocheck
import HTMLFlipBook from 'react-pageflip';
import { BookCover } from '../BookCover/BookCover';
import { FC, useRef, useState } from 'react';
import { BookSize, IBook } from '../../types/book';
import { BookPage } from '../BookPage/BookPage';
import { BookControl } from '../BookControl/BookControl';
import { useCallback } from 'react';
import prev from '@/shared/assets/image/prev.png';
import cls from './Book.module.css';

interface BookProps  {
    pages: IBook[];
    coverImage?: string;
    width?: number;
    height?: number;
    minHeight?: number;
    maxWidth?: number;
    minWidth?: number;
    size?: BookSize;
    drawShadow?: boolean;
    showCover?: boolean;
}

export const Book: FC<BookProps> = (props) => {
    const {
        pages,
        coverImage,
        width = 470,
        height = 600,
        maxWidth = 465,
        minWidth = 288,
        minHeight = 428,
        size = 'stretch',
        drawShadow = false,
        showCover = true,
    } = props;

    const [page, setPage] = useState(0);

    const bookRef = useRef();

    const onNextPage = useCallback(() => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext(); 
        }  
    }, []);

    const onPrevPage = useCallback(() => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();  
        }
    }, []);

    const onFlipPage = useCallback(({data}: {data: number}) => {
        setPage(data);
    }, []);

    return (
        <>
            <HTMLFlipBook
                ref={bookRef}     
                className={cls.book}
                width={width} 
                height={height}
                maxWidth={maxWidth}
                minWidth={minWidth}
                minHeight={minHeight}
                size={size}
                drawShadow={drawShadow}
                showCover={showCover}
                onFlip={onFlipPage}
            >
                {coverImage && 
                <div className={cls.wrapper}>
                    <BookCover coverImage={coverImage}/>
                    <button>
                        <img src={prev} alt="Start reading" />
                    </button>
                </div>
                }
                {
                    pages.map((book, idx) => {
                        const {
                            title,
                            text,
                            image,
                            alt
                        } = book;

                        const page = idx + 1;

                        return (
                            <BookPage
                                key={idx} 
                                page={page}
                                title={title}
                                text={text}
                                image={image}
                                alt={alt}
                            />
                        );
                    })
                }
            </HTMLFlipBook>
            <BookControl 
                page={page}
                onNextPage={onNextPage}
                onPrevPage={onPrevPage}
            />
        </>
    );
};