import React from "react";
import styles from "./home.module.scss";
import Banner from "@elements/Banner/Banner";
import BannerImg from "@/public/banner/banner.jpg";
import { Button } from "@elements/Button";

const HomeBlock = () => {
    return(
        <>
            <section className={styles['banner-container']}>
                <section className={styles['img-bg']}>
                    <Banner src={BannerImg} />
                </section>
                <section className={styles['banner-overlay']}>
                    <h1 className={styles['banner-tagline']}>Supersenang Tagline</h1>
                    <Button.CTA href={"/check-available"} callToAction={"Make Your Reservation"} />
                </section>
            </section>
            <section className={styles['intro-container']}>
                <p className={styles.intro}>
                    Quick intro to Supersenang Resort (brief overview of location and experience)
                </p>
                <Button.SecCTA href={'/rooms'} callToAction={'View Room Type'} />
            </section>
            <section className={styles['gallery-container']}>
                <section></section>
                <section></section>
                <section></section>
            </section>
        </>
    )
}

export default HomeBlock;