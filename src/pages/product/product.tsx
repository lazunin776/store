import {Rate, Tabs} from 'antd';
import styles from './product.module.scss'
import React, {useState} from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {AiOutlineCheck} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import {PhoneOutlined} from "@ant-design/icons";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";

const onChange = (key: string) => {
    console.log(key);
};

const Product = () => {
    const {TabPane} = Tabs
    const [basket, setBasket] = useState(false)
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: 'https://i.pinimg.com/564x/f8/43/73/f8437304e525833fcfb4333c495ffdcb.jpg',
            thumbnail: 'https://i.pinimg.com/564x/f8/43/73/f8437304e525833fcfb4333c495ffdcb.jpg'
        }
    ];

    return (
        <div className={styles.content}>
            <div className={styles.product_content}>
                <div className={styles.product_title}>Product Title</div>

            </div>
            <div className={styles.product_content}>
                <div className={styles.tabs}>
                    <Tabs
                        onChange={onChange}
                        type="line"
                    >
                        <TabPane key={'1'} tab={'Main'}>

                            <div className={styles.photo_and_info}>
                                <div className={styles.photo}>
                                    <ImageGallery items={images} showPlayButton={false} lazyLoad={true}
                                                  thumbnailPosition={'left'}/>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.component_info}>
                                        <div className={styles.info_main}>
                                            <div>
                                                Articul:
                                            </div>
                                            <div>
                                                articul
                                            </div>
                                        </div>
                                        <div className={styles.info_main}>
                                            <div>
                                                Category:
                                            </div>
                                            <div>
                                                category
                                            </div>
                                        </div>
                                        <div className={styles.info_main}>
                                            <div>
                                                SubCategory:
                                            </div>
                                            <div>
                                                subcategory
                                            </div>
                                        </div>
                                        <div className={styles.info_main}>
                                            <div>
                                                Rate
                                            </div>
                                            <div>
                                                <Rate count={5} defaultValue={3} disabled/>
                                            </div>
                                        </div>
                                        <div className={styles.main_btn}>
                                            <div className={styles.price_product}>Price: 1000</div>
                                            <div>
                                                <button className={basket ? styles.button_good : styles.button}
                                                        onClick={() => setBasket(!basket)}>
                                                    {basket ?
                                                        <AiOutlineCheck/>
                                                        :
                                                        <SlBasket/>
                                                    }
                                                </button>
                                                <a href={'phone:12341234'} className={styles.call}><PhoneOutlined/></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.desk_info}>
                                <div className={styles.desk}>
                                    <div className={styles.product_title}>Description</div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat elit eu
                                        metus tincidunt, ac accumsan urna venenatis. Duis nulla augue, interdum vitae
                                        molestie  quis, egestas non felis. Pellentesque porttitor dapibus sodales. Donec
                                        a sodales neque. Ut sit amet est ultrices nulla mattis facilisis eu facilisis
                                        eros. In volutpat nulla semper vulputate fermentum. Pellentesque condimentum
                                        odio nec odio elementum, at malesuada felis posuere. Pellentesque habitant morbi
                                        tristique senectus et netus et malesuada fames ac turpis egestas. Integer quis
                                        libero a mauris mattis eleifend malesuada vel tellus. Aliquam lobortis libero
                                        eget lorem tempor, sed accumsan mauris feugiat. Donec egestas egestas nisl, quis
                                        fermentum lectus dapibus a. Vivamus fringilla enim ut est fermentum, eu pulvinar
                                        lorem ullamcorper. Quisque eget egestas elit, sed faucibus arcu. Mauris
                                        pellentesque in neque et cursus.

                                        Ut suscipit mi vel pharetra finibus. Maecenas et justo tortor. In auctor
                                        accumsan ipsum, cursus commodo augue vehicula fringilla. Phasellus tortor dolor,
                                        sollicitudin vitae dapibus eu, tempus et ligula. Quisque vel vehicula lectus.
                                        Nullam accumsan lorem vel erat efficitur, facilisis pulvinar nulla convallis.
                                        Aliquam tortor tortor, blandit at eros vel, finibus mollis dolor.

                                        Fusce pellentesque justo elit, at convallis velit scelerisque sit amet. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam eros, congue at
                                        nulla eu, consectetur euismod magna. Proin in lectus ornare, faucibus libero
                                        eget, luctus leo. In nec volutpat nunc, id consectetur arcu. Mauris ac sagittis
                                        dui, quis posuere ex. Proin malesuada consectetur risus, id efficitur dui tempor
                                        sit amet. Nam vehicula, nulla quis sodales porttitor, elit diam venenatis metus,
                                        et vestibulum ante arcu eu libero. Maecenas nec dignissim sapien.

                                        Curabitur bibendum metus vitae tristique pulvinar. Duis suscipit, justo in
                                        convallis molestie, nunc odio bibendum tellus, eu commodo justo nulla a ligula.
                                        Cras et feugiat turpis. Ut ultricies, ligula sed consequat gravida, magna felis
                                        ultricies ex, vel eleifend erat est sed dolor. Mauris facilisis ante nisi, vel
                                        pellentesque mauris venenatis vel. Suspendisse at ex blandit, consectetur mauris
                                        eu, venenatis dui. Vestibulum ac metus sit amet odio ornare condimentum.
                                        Phasellus tincidunt, justo ornare suscipit suscipit, quam lorem fringilla justo,
                                        eget ultricies sem mauris vel nisl. Nunc pulvinar dui justo, a tempor turpis
                                        ullamcorper eu. Quisque lacinia vitae neque et mattis. Nunc non tincidunt nunc.
                                        Morbi eget ornare ex. Suspendisse a mattis felis, vel tincidunt eros. Vivamus
                                        eleifend nibh nisl, quis gravida dolor congue id. Quisque a sollicitudin eros.
                                    </p>
                                </div>
                            </div>

                        </TabPane>
                        <TabPane key={'2'} tab={'Charakteristic'}>
                            Charakteristic
                        </TabPane>
                        <TabPane key={'3'} tab={'Photo'}>
                            <div>
                                <div>
                                    <ImageGallery items={images} showPlayButton={false} lazyLoad={true}
                                                  thumbnailPosition={'left'}/>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </div>
    );
};

export default Product;