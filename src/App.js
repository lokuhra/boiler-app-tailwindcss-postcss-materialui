import React,{Fragment} from 'react'
import {Helmet} from "react-helmet";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './styles/styles.css'
import 'effeckt/css/effeckt.css'
import 'animate.css/animate.min.css'


const content = [
    {
        title: 'Proyecto UX',
        description: 'Ventas diarias de cada producto de Mercado Libre',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png',
        className:"slide-from-bottom"
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png',
        className:"rotate-to-front"
    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png',
        className:"flip-to-top-front"
    }
];

const App = () => (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Proyecto UX</title>
        </Helmet>
    <Slider className="slider-wrapper">
        {content.map((item, index) => (
            <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
            >
                <div className={`inner ${item.className}`}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}
    </Slider>
    </Fragment>
);

export default App
