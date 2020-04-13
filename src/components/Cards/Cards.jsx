import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Cards = ({
    data: {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
}) => {

    if (!confirmed) {
        return 'loading......';
    }

    return ( < div className = { styles.contanier } >
        <
        Typography className = { styles.appTitle }
        variant = "h4"
        gutterBottom align = "center" > Global Coronavirus Live Tracker < /Typography>


        <
        Typography className = { styles.appCreator }
        variant = "h4"
        gutterBottom align = "center" > Developed by Aman Sharma: ) < /Typography>

    <
    Grid container spacing = { 3 }
    justify = "center" >
        <
        Grid item component = { Card }
    xs = { 12 }
    md = { 3 }
    className = {
            cx(styles.card, styles.infected)
        } >
        <
        CardContent >
        <
        Typography className = { styles.cardTitle1 }
    color = "textSecondary"
    gutterBottom > Infected < /Typography>  

    <
    Typography variant = "h4" >
        <
        CountUp start = { 0 }
    end = { confirmed.value }
    duration = { 3.5 }
    separator = "," / > < /
    Typography >

        <
        Typography className = { styles.cardFooter }
    color = "textSecondary" > {
        new Date(lastUpdate).toDateString()
    } < /Typography> 

    <
    Typography className = { styles.cardFooter }
    variant = "body2" >
        Number of active cases of COVID - 19. <
        /Typography> < /
    CardContent > <
        /Grid>

    <
    Grid item component = { Card }
    xs = { 12 }
    md = { 3 }
    className = {
            cx(styles.card, styles.recovered)
        } >
        <
        CardContent >
        <
        Typography className = { styles.cardTitle2 }
    color = "textSecondary"
    gutterBottom > Recovered < /Typography>  

    <
    Typography variant = "h4" >
        <
        CountUp start = { 0 }
    end = { recovered.value }
    duration = { 3.5 }
    separator = "," / > < /
    Typography >

        <
        Typography className = { styles.cardFooter }
    color = "textSecondary" > {
        new Date(lastUpdate).toDateString()
    } < /Typography> 

    <
    Typography className = { styles.cardFooter }
    variant = "body2" >
        Number of recovered patients of COVID - 19. <
        /Typography> < /
    CardContent > <
        /Grid>

    <
    Grid item component = { Card }
    xs = { 12 }
    md = { 3 }
    className = {
            cx(styles.card, styles.deaths)
        } >
        <
        CardContent >
        <
        Typography className = { styles.cardTitle3 }
    color = "textSecondary"
    gutterBottom > Deaths < /Typography>  

    <
    Typography variant = "h4" >
        <
        CountUp start = { 0 }
    end = { deaths.value }
    duration = { 3.5 }
    separator = "," / > < /
    Typography >

        <
        Typography className = { styles.cardFooter }
    color = "textSecondary" > {
        new Date(lastUpdate).toDateString()
    } < /Typography> 

    <
    Typography className = { styles.cardFooter }
    variant = "body2" >
        Number of deaths caused by COVID - 19. <
        /
    Typography > < /CardContent> < /Grid >

        <
        /Grid> <
    Typography className = { styles.countryText }
    variant = "h4"
    gutterBottom align = "center" > View by country < /Typography> < /
    div >

)
}

export default Cards;
