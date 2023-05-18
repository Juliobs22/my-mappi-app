import React, { useRef } from 'react';
import Slider from 'react-slick';
//import { InfoCards } from '../helpers/Info';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './module/avisos.module.css';

const dataCard = [
    {
        image:'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        title: 'Aviso No #',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'Ubicacion: ',
        features: ['lorem', 'ipsum is ammet', 'lorem ipsum',]
    },
    {
        image: 'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Aviso No #',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'Ubicacion: ',
        features: ['lorem', 'ipsum is ammet', 'lorem ipsum',]
    },
    {
        image: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        title: 'Aviso No #',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 150/Day',
        features: ['lorem', 'ipsum is ammet', 'lorem ipsum',]
    },
    {
        image: 'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Aviso No #',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'Ubicacion: ',
        features: ['lorem', 'ipsum is ammet', 'text whit', 'lorem ipsum']
    }
];
const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

const Avisos = ():JSX.Element => {
    const sliderRef = useRef<Slider>(null);

    function toPrev():void {
        sliderRef.current?.slickPrev();
    }

    function toNext():void {
        sliderRef.current?.slickNext();
    }

    return (
        <div className={styles.content}>
            <div className={styles.sliderControls}>
                <h2 className={styles.sliderTitler}>Avisos</h2>
                <div className={styles.controlsSl}>
                    <button 
                        className={styles.slideButton}
                        onClick={toPrev}>
                        <AiOutlineArrowLeft />
                    </button>
                    <button 
                        className={styles.slideButton}
                        onClick={toNext}>
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
            <Slider ref={sliderRef} {...sliderSettings}>
                {dataCard.map((card,  index) => (
                    <div key={index} className={styles.cardItem}>
                        <h3>{card.title + (index+1)}</h3>
                        <img className={styles.cardImg} src={card.image} alt={card.title.toUpperCase()} width='100' />
                        <p>{card.description}</p>
                        <ul className={styles.cardList}>
                            {card.features.map((freature, i) => (
                                <li key={i}>
                                    {freature}
                                </li>
                            ))}
                        </ul>
                        <button className={styles.cardButton}>Saber mas...</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
 
export default Avisos;