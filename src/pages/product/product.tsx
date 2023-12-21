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
import useProductHooks from '../../Hooks/useProductHooks';

const onChange = (key: string) => {
    console.log(key);
};

const Product = () => {
    const {TabPane} = Tabs;
    
    const productHooks = useProductHooks();
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
                                                {productHooks.articul}
                                            </div>
                                        </div>
                                        <div className={styles.info_main}>
                                            <div>
                                                Category:
                                            </div>
                                            <div>
                                                {productHooks.category}
                                            </div>
                                        </div>
                                        <div className={styles.info_main}>
                                            <div>
                                                SubCategory:
                                            </div>
                                            <div>
                                                {productHooks.subcategory}
                                            </div>
                                        </div>
                                        <div className={styles.info_main}>
                                            <div>
                                                Rate
                                            </div>
                                            <div>
                                                <Rate count={5} defaultValue={productHooks.rate} disabled/>
                                            </div>
                                        </div>
                                        <div className={styles.main_btn}>
                                            <div className={styles.price_product}>Price: {productHooks.price}</div>
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
                                        {productHooks.description}
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