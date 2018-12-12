import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { PlaylistCard } from './../../Reusables';

import { View, ScrollView, Dimensions } from 'react-native';

class MyCarousel extends Component {


    _renderItem({ item, index }) {
        return (
            <ScrollView>
                {item}
            </ScrollView>

        );
    }

    renderSlides() {
        let cards = [];

        for (var i = 0; i < 6; i++) {
            cards.push((<PlaylistCard style={{ height: 180 }} />));
        }
        return cards;
    }

    render() {
        let dim = Dimensions.get('window');
        let itemWidth = dim.width * 0.7;
        let sliderWidth = dim.width;

        return (

            <Carousel

                data={this.renderSlides()}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                activeSlideAlignment={'center'}
                inactiveSlideScale={0.85}
                inactiveSlideOpacity={0.5}
                loop={true}
                slideStyle={{ height: 300 }}
                autoplay={true}

            />

        );
    }
}

export { MyCarousel };