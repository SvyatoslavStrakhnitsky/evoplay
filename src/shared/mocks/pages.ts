import type { IBook } from '@/entities/Book';
import pageOne from '@/shared/assets/image/page_1.png';
import pageTwo from '@/shared/assets/image/page_2.png';
import pageThree from '@/shared/assets/image/page_3.png';
import pageFour from '@/shared/assets/image/page_4.png';
import pageFive from '@/shared/assets/image/page_5.png';
import pageSix from '@/shared/assets/image/page_6.png';
import pageSeven from '@/shared/assets/image/page_7.png';
import pageEight from '@/shared/assets/image/page_8.png';

export const pages: IBook[] = [
    {
        title: 'История создания',
        text: 'Эта история берет свое начало в послевоенное время, когда мир пытался справиться с последствиями разрухи.',
        image: pageOne
    },
    {
        text: 'Собрав на последние средства нашего селения экспедицию, мы отправились к берегам Южной Америки,  на последние средства нашего селения экспедицию, мы отправились к берегам Южной Америки, где за легендами...',
        image: pageTwo
    },
    {
        text: 'Собрав на последние средства нашего селения экспедицию, мы отправились к берегам Южной Америки, где за легендами...',
        image: pageThree
    },
    {
        text: 'Но нашим мечтам было не суждено сбыться. Судно попало в сильный шторм и было полностью разрушено, а мы вынесены волнами на необитаемый остров.',
        image: pageFour
    },
    {
        text: '7 долгих дней блужданий по острову обессилили нас. Лишь смелость сердец и вера в удачу вела вперед.',
        image: pageFive
    },
    {
        text: 'В тот день, когда отчаяние начало брать верх, впереди замаячил свет костра в непроходимых джунглях. Это казалось чудом. Им оно и было. ',
        image: pageSix
    },
    {
        text: 'В тот день, когда отчаяние начало брать верх, впереди замаячил свет костра в непроходимых джунглях. Это казалось чудом. Им оно и было.',
        image: pageSeven
    },
    {
        text: 'У костра сидела девушка, красота которой затмевала лунный свет и заставляла сердце биться чаще.',
        image: pageEight
    }
];