import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "::-webkit-scrollbar": {
        "width": 0.2,
        "height": 0.2
    },
    "::-webkit-scrollbar-track": {
        "backgroundColor": "rgb(128,140,54)"
    },
    "::-webkit-scrollbar-thumb": {
        "backgroundColor": "rgb(0,0,0)",
        "outline": "1px solid rgb(0,0,0)"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Roboto', sans-serif",
        "background": "#fff"
    },
    "body a": {
        "WebkitTransition": "0.5s all",
        "MozTransition": "0.5s all",
        "OTransition": "0.5s all",
        "MsTransition": "0.5s all",
        "transition": "0.5s all",
        "textDecoration": "none"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Cinzel Decorative', cursive"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Cinzel Decorative', cursive"
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Cinzel Decorative', cursive"
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Cinzel Decorative', cursive"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Cinzel Decorative', cursive"
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Cinzel Decorative', cursive"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 1,
        "color": "#555",
        "lineHeight": 2,
        "fontWeight": "400"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "body a:hover": {
        "textDecoration": "none"
    },
    "banner": {
        "minHeight": 780,
        "background": "url(../images/2.jpg)no-repeat center 0px",
        "backgroundSize": "cover",
        "position": "relative"
    },
    "header": {
        "position": "relative",
        "paddingTop": 2
    },
    "navbar-header h1": {
        "fontSize": 2.5,
        "display": "block"
    },
    "navbar-header h1 a": {
        "color": "#FFFFFF",
        "textDecoration": "none",
        "display": "inline-block"
    },
    "navbar-default": {
        "background": "none",
        "border": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minHeight": "inherit"
    },
    "ulnavnavbar-navnavbar-right": {
        "marginTop": 0.6,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "navbar-default navbar-nav > active > a": {
        "color": "#99abd5",
        "background": "none"
    },
    "navbar-default navbar-nav > active > a:hover": {
        "color": "#99abd5",
        "background": "none"
    },
    "navbar-default navbar-nav > active > a:focus": {
        "color": "#99abd5",
        "background": "none"
    },
    "navbar-nav > li": {
        "marginTop": 0,
        "marginRight": 1.2,
        "marginBottom": 0,
        "marginLeft": 1.2
    },
    "navbar-default navbar-nav > li > a": {
        "color": "#fff",
        "fontSize": 1.2,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "position": "relative",
        "fontWeight": "300"
    },
    "navbar-default navbar-nav > li > a:hover": {
        "color": "#ff8c00"
    },
    "navbar-default navbar-nav > li > a:focus": {
        "color": "#ff8c00"
    },
    "navbar-default navbar-nav li aactive": {
        "color": "#ff8c00"
    },
    "navbar-default navbar-nav > li > a:before": {
        "content": "''",
        "position": "absolute",
        "top": 10,
        "background": "#ffffff",
        "height": 2,
        "width": 16,
        "right": -26,
        "WebkitTransition": ".5s all",
        "MozTransition": ".5s all",
        "transition": ".5s all",
        "WebkitTransform": "rotate(-64deg)",
        "MozTransform": "rotate(-64deg)",
        "OTransform": "rotate(-64deg)",
        "MsTransform": "rotate(-64deg)",
        "transform": "rotate(-64deg)"
    },
    "navbar-default navbar-nav > li:nth-child(6) > a:before": {
        "width": 0
    },
    "banner-text": {
        "textAlign": "center",
        "paddingTop": 13,
        "paddingRight": 0,
        "paddingBottom": 13,
        "paddingLeft": 0
    },
    "banner-text h2": {
        "color": "#fff",
        "fontSize": 4
    },
    "banner-text h3": {
        "color": "#fff",
        "fontSize": 4
    },
    "banner-text p": {
        "width": "62%",
        "color": "#fff",
        "marginTop": 1,
        "marginRight": "auto",
        "marginBottom": 1,
        "marginLeft": "auto",
        "fontSize": 1.1,
        "fontWeight": "300",
        "lineHeight": 2,
        "letterSpacing": 4
    },
    "banner-text h6": {
        "fontSize": 3,
        "color": "#fff"
    },
    "banner-text h6 span": {
        "marginTop": 0,
        "marginRight": 0.3,
        "marginBottom": 0,
        "marginLeft": 0.3
    },
    "banner-text amore": {
        "fontSize": 1,
        "color": "#fff",
        "fontWeight": "300",
        "paddingTop": 0.6,
        "paddingRight": 1.5,
        "paddingBottom": 0.6,
        "paddingLeft": 1.5,
        "border": "3px solid #fff",
        "display": "inline-block",
        "marginTop": 1,
        "textDecoration": "none"
    },
    "banner-text amore:hover": {
        "borderColor": "#639",
        "background": "#639"
    },
    "welcome": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "menu": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "gallery": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "agile-title": {
        "textAlign": "center"
    },
    "agile-title h3": {
        "fontSize": 2.5,
        "textAlign": "center",
        "color": "#000",
        "marginBottom": 2,
        "border": "1px solid #000",
        "display": "inline-block",
        "paddingTop": 0.4,
        "paddingRight": 1,
        "paddingBottom": 0.2,
        "paddingLeft": 1
    },
    "welcome-img": {
        "overflow": "hidden",
        "WebkitBoxShadow": "0px 0px 10px 0px #656060",
        "MozBoxShadow": "0px 0px 10px 0px #656060",
        "boxShadow": "0px 0px 10px 0px #656060"
    },
    "welcome-left img-responsive": {
        "width": "100%"
    },
    "welcome-left-grids": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 1
    },
    "welcome-left-grids:nth-child(2)": {
        "paddingRight": 0.5
    },
    "welcome-left-grids:nth-child(3)": {
        "paddingLeft": 0.5
    },
    "welcome p": {
        "letterSpacing": 1
    },
    "open-hours-row": {
        "marginTop": 2,
        "background": "#ffe4c4",
        "border": "1px solid #ff8c00"
    },
    "open-hours-left": {
        "paddingTop": 3.85,
        "paddingRight": 0,
        "paddingBottom": 3.85,
        "paddingLeft": 0,
        "textAlign": "center",
        "WebkitTransition": ".5s all",
        "MozTransition": ".5s all",
        "transition": ".5s all"
    },
    "open-hours-left:nth-child(1)": {
        "background": "#ff8c00",
        "paddingTop": 2.8,
        "paddingRight": 0,
        "paddingBottom": 2.8,
        "paddingLeft": 0
    },
    "open-hours-left:nth-child(3)": {
        "borderLeft": "1px solid #ff8c00",
        "borderRight": "1px solid #ff8c00"
    },
    "open-hours-left h4": {
        "fontSize": 1.5,
        "color": "#fff",
        "lineHeight": 1.8
    },
    "open-hours-left h6": {
        "fontSize": 1,
        "fontFamily": "'Roboto', sans-serif",
        "color": "#555",
        "WebkitTransition": ".5s all",
        "MozTransition": ".5s all",
        "transition": ".5s all"
    },
    "open-hours-left:hover h6": {
        "color": "#fff"
    },
    "open-hours-left h5": {
        "fontSize": 1.3,
        "color": "#000",
        "marginTop": 0.5,
        "fontWeight": "700"
    },
    "open-hours-left:hover": {
        "background": "#ff8c00"
    },
    "imgzoom-img": {
        "WebkitTransform": "scale(1, 1)",
        "transform": "scale(1, 1)",
        "MozTransform": "scale(1, 1)",
        "MsTransform": "scale(1, 1)",
        "OTransform": "scale(1, 1)",
        "transitionTimingFunction": "ease-out",
        "WebkitTransitionTimingFunction": "ease-out",
        "MozTransitionTimingFunction": "ease-out",
        "MsTransitionTimingFunction": "ease-out",
        "OTransitionTimingFunction": "ease-out",
        "WebkitTransitionDuration": ".5s",
        "MozTransitionDuration": ".5s",
        "MsTransitionDuration": ".5s",
        "OTransitionDuration": ".5s"
    },
    "imgzoom-img:hover": {
        "WebkitTransform": "scale(1.2)",
        "transform": "scale(1.2)",
        "MozTransform": "scale(1.2)",
        "MsTransform": "scale(1.2)",
        "OTransform": "scale(1.2)",
        "WebkitTransitionTimingFunction": "ease-in-out",
        "WebkitTransitionDuration": "750ms",
        "MozTransitionTimingFunction": "ease-in-out",
        "MozTransitionDuration": "750ms",
        "MsTransitionTimingFunction": "ease-in-out",
        "OTransitionTimingFunction": "ease-in-out",
        "MsTransitionDuration": "750ms",
        "OTransitionDuration": "750ms",
        "overflow": "hidden"
    },
    "slid": {
        "background": "url(../images/2.jpg)no-repeat center 0px",
        "backgroundSize": "cover",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "slid h4": {
        "fontSize": 3,
        "color": "#fff"
    },
    "slid h5": {
        "fontSize": 3.5,
        "color": "#fff",
        "fontWeight": "600",
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0,
        "display": "inline-block",
        "background": "#ff8c00",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "width": 145,
        "height": 145,
        "paddingTop": 0.6,
        "paddingRight": 0,
        "paddingBottom": 0.6,
        "paddingLeft": 0,
        "WebkitTransition": ".5s all",
        "MozTransition": ".5s all",
        "transition": ".5s all"
    },
    "slid h5 span": {
        "fontFamily": "'Roboto', sans-serif",
        "display": "block",
        "fontSize": 0.45,
        "fontWeight": "100",
        "marginTop": 5,
        "letterSpacing": 2
    },
    "slid p": {
        "color": "#fff",
        "width": "65%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "slid:hover h5": {
        "background": "#639",
        "WebkitTransform": "rotatez(360deg)",
        "MozTransform": "rotatez(360deg)",
        "OTransform": "rotatez(360deg)",
        "MsTransform": "rotatez(360deg)",
        "transform": "rotatez(360deg)"
    },
    "menu-left": {
        "position": "relative"
    },
    "menu-left img": {
        "width": "100%"
    },
    "menu-right": {
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "WebkitTransform": "translate(500px)",
        "MozTransform": "translate(500px)",
        "OTransform": "translate(500px)",
        "MsTransform": "translate(500px)",
        "transform": "translate(500px)",
        "WebkitTransition": ".5s all",
        "MozTransition": ".5s all",
        "transition": ".5s all",
        "position": "absolute",
        "right": 0,
        "width": "57%",
        "top": 0,
        "backgroundColor": "rgba(128,140,54,0.86)",
        "height": "100%"
    },
    "menu-right h4": {
        "color": "#fff",
        "fontSize": 1.5
    },
    "menu-right h5": {
        "fontSize": 2.5,
        "color": "#000",
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0,
        "fontWeight": "700"
    },
    "menu-right p": {
        "color": "#fff",
        "fontWeight": "300"
    },
    "accordion li:hover menu-right": {
        "WebkitTransform": "translate(0px)",
        "MozTransform": "translate(0px)",
        "OTransform": "translate(0px)",
        "MsTransform": "translate(0px)",
        "transform": "translate(0px)"
    },
    "accordion": {
        "width": "100%",
        "overflow": "hidden",
        "listStyle": "none"
    },
    "accordion li": {
        "float": "left",
        "width": "20%",
        "overflow": "hidden",
        "height": 250,
        "MozTransition": "width 0.2s ease-out",
        "WebkitTransition": "width 0.2s ease-out",
        "OTransition": "width 0.2s ease-out",
        "transition": "width 0.2s ease-out",
        "background": "#ff8c00"
    },
    "accordion li:first-of-type": {
        "MozBorderRadius": "0 0 0 0",
        "WebkitBorderRadius": "0 0 0 0",
        "OBorderRadius": "0 0 0 0",
        "borderRadius": "0 0 0 0"
    },
    "accordion li:last-of-type": {
        "MozBorderRadius": "0 0 0 0",
        "WebkitBorderRadius": "0 0 0 0",
        "OBorderRadius": "0 0 0 0",
        "borderRadius": "0 0 0 0"
    },
    "accordion li:hover img": {
        "width": "100%"
    },
    "accordion:hover li": {
        "width": "10%"
    },
    "accordion:hover li menu-left img": {
        "width": "152%"
    },
    "accordion li:hover": {
        "width": "60%"
    },
    "accordion:hover li:hover menu-left img": {
        "width": "100%"
    },
    "vertical": {
        "width": 940,
        "height": 300
    },
    "vertical li": {
        "height": "20%",
        "width": "100%",
        "MozTransition": "height 0.2s ease-out",
        "WebkitTransition": "height 0.2s ease-out",
        "OTransition": "height 0.2s ease-out",
        "transition": "height 0.2s ease-out"
    },
    "vertical li:first-of-type": {
        "MozBorderRadius": "0 0 0 0",
        "WebkitBorderRadius": "0 0 0 0",
        "OBorderRadius": "0 0 0 0",
        "borderRadius": "0 0 0 0"
    },
    "vertical li:last-of-type": {
        "MozBorderRadius": "0 0 0 0",
        "WebkitBorderRadius": "0 0 0 0",
        "OBorderRadius": "0 0 0 0",
        "borderRadius": "0 0 0 0"
    },
    "vertical:hover li": {
        "height": "10%",
        "width": "100%"
    },
    "vertical li:hover": {
        "height": "60%",
        "width": "100%"
    },
    "team": {
        "background": "url(../images/bg1.jpg)no-repeat center 0px",
        "backgroundSize": "cover",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "w3ls-effect": {
        "display": "block",
        "height": 300,
        "overflow": "hidden",
        "position": "relative",
        "WebkitBoxShadow": "0 0 19px 4px rgba(0, 0, 0, 0.65)",
        "MozBoxShadow": "0 0 19px 4px rgba(0, 0, 0, 0.65)",
        "boxShadow": "0 0 19px 4px rgba(0, 0, 0, 0.65)",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "MsTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "w3ls-effect img": {
        "height": "100%",
        "width": "100%",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "MsTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "w3ls-effect:before": {
        "content": "''",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "left": 0,
        "top": 0,
        "right": 0,
        "bottom": 0,
        "position": "absolute",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "MsTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "w3ls-effect:hover:before": {
        "backgroundColor": "rgba(0, 0, 0, 0.8)"
    },
    "w3ls-effect:hover view-caption": {
        "MozTransform": "translateY(-100%)",
        "OTransform": "translateY(-100%)",
        "MsTransform": "translateY(-100%)",
        "WebkitTransform": "translateY(-100%)",
        "transform": "translateY(-100%)",
        "borderRadius": "0 0 0 0"
    },
    "w3ls-effect:hover social-icon": {
        "bottom": "25%",
        "MozTransform": "translateY(-80%)",
        "OTransform": "translateY(-80%)",
        "MsTransform": "translateY(-80%)",
        "WebkitTransform": "translateY(-80%)",
        "transform": "translateY(-80%)"
    },
    "w3ls-effect:hover social-icon a": {
        "WebkitAnimationName": "translate-transition",
        "WebkitAnimationDuration": "0.8s",
        "WebkitAnimationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationName": "translate-transition",
        "animationDuration": "0.8s",
        "animationTimingFunction": "liner",
        "animationIterationCount": 1
    },
    "w3ls-effect view-caption": {
        "backgroundColor": "#FFF",
        "WebkitTransition": "all cubic-bezier(0.27, 0.89, 0.95, 0.59) 0.5s",
        "MozTransition": "all cubic-bezier(0.27, 0.89, 0.95, 0.59) 0.5s",
        "MsTransition": "all cubic-bezier(0.27, 0.89, 0.95, 0.59) 0.5s",
        "OTransition": "all cubic-bezier(0.27, 0.89, 0.95, 0.59) 0.5s",
        "transition": "all cubic-bezier(0.27, 0.89, 0.95, 0.59) 0.5s",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "height": "29%",
        "textAlign": "left",
        "position": "relative",
        "zIndex": 99,
        "WebkitBorderRadius": "0 0 0 0",
        "MozBorderRadius": "0 0 0 0",
        "borderRadius": "0 0 0 0"
    },
    "w3ls-effect view-caption h4": {
        "color": "#5f1ca2",
        "fontSize": 1.3
    },
    "w3ls-effect view-caption p": {
        "marginTop": 0.3
    },
    "w3ls-effect social-icon": {
        "bottom": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "left": 0,
        "position": "absolute",
        "right": 0,
        "textAlign": "left",
        "overflow": "hidden",
        "zIndex": 9,
        "WebkitTransition": "all 0.5s cubic-bezier(0.27, 0.89, 0.95, 0.59)",
        "MozTransition": "all 0.5s cubic-bezier(0.27, 0.89, 0.95, 0.59)",
        "MsTransition": "all 0.5s cubic-bezier(0.27, 0.89, 0.95, 0.59)",
        "OTransition": "all 0.5s cubic-bezier(0.27, 0.89, 0.95, 0.59)",
        "transition": "all 0.5s cubic-bezier(0.27, 0.89, 0.95, 0.59)",
        "MozTransform": "translateY(1000%)",
        "OTransform": "translateY(1000%)",
        "MsTransform": "translateY(1000%)",
        "WebkitTransform": "translateY(1000%)",
        "transform": "translateY(1000%)"
    },
    "social-button": {
        "display": "inline-block",
        "backgroundColor": "#fff",
        "width": 32,
        "height": 32,
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3,
        "lineHeight": 32,
        "textAlign": "center",
        "position": "relative",
        "overflow": "hidden",
        "opacity": 0.99,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "social-button:before": {
        "content": "''",
        "backgroundColor": "#000",
        "width": "120%",
        "height": "120%",
        "position": "absolute",
        "top": "102%",
        "left": "-118%",
        "WebkitTransition": "all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59)",
        "MozTransition": "all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59)",
        "transition": "all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59)"
    },
    "social-button fa": {
        "fontSize": 18,
        "verticalAlign": "middle",
        "WebkitTransform": "scale(0.8)",
        "MozTransform": "scale(0.8)",
        "OTransform": "scale(0.8)",
        "MsTransform": "scale(0.8)",
        "transform": "scale(0.8)",
        "WebkitTransition": "all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59)",
        "MozTransition": "all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59)",
        "transition": "all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59)"
    },
    "social-buttonfacebook:before": {
        "backgroundColor": "#3B5998"
    },
    "social-buttonfacebook fa": {
        "color": "#3B5998"
    },
    "social-buttontwitter:before": {
        "backgroundColor": "#3CF"
    },
    "social-buttontwitter fa": {
        "color": "#3CF"
    },
    "social-buttongoogle:before": {
        "backgroundColor": "#DC4A38"
    },
    "social-buttongoogle fa": {
        "color": "#DC4A38"
    },
    "social-buttondribbble:before": {
        "backgroundColor": "#F26798"
    },
    "social-buttondribbble fa": {
        "color": "#F26798"
    },
    "social-buttonskype:before": {
        "backgroundColor": "#00AFF0"
    },
    "social-buttonskype fa": {
        "color": "#00AFF0"
    },
    "social-button:focus:before": {
        "top": "-10%",
        "left": "-10%"
    },
    "social-button:hover:before": {
        "top": "-10%",
        "left": "-10%"
    },
    "social-button:focus fa": {
        "color": "#fff",
        "WebkitTransform": "scale(1)",
        "OTransform": "scale(1)",
        "MozTransform": "scale(1)",
        "MsTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "social-button:hover fa": {
        "color": "#fff",
        "WebkitTransform": "scale(1)",
        "OTransform": "scale(1)",
        "MozTransform": "scale(1)",
        "MsTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "team agile-title h3": {
        "color": "#fff",
        "borderColor": "#fff"
    },
    "gallery-gridsgallery-grids-mdl": {
        "paddingTop": 2,
        "paddingRight": 1,
        "paddingBottom": 2,
        "paddingLeft": 1
    },
    "hover": {
        "width": "100%",
        "height": "100%",
        "float": "left",
        "overflow": "hidden",
        "position": "relative",
        "textAlign": "center",
        "cursor": "default"
    },
    "hover overlay": {
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "overflow": "hidden",
        "top": 0,
        "left": 0
    },
    "hover img": {
        "display": "block",
        "position": "relative"
    },
    "hover h4": {
        "textTransform": "uppercase",
        "color": "#fff",
        "textAlign": "center",
        "position": "relative",
        "fontSize": 1.5,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "letterSpacing": 1
    },
    "hover buttoninfo": {
        "display": "inline-block",
        "textDecoration": "none",
        "paddingTop": 7,
        "paddingRight": 14,
        "paddingBottom": 7,
        "paddingLeft": 14,
        "color": "#fff",
        "border": "none",
        "backgroundColor": "transparent",
        "fontSize": 1.1,
        "outline": "none",
        "fontWeight": "300"
    },
    "hover buttoninfo:hover": {
        "WebkitBoxShadow": "0 0 5px #fff",
        "MozBoxShadow": "0 0 5px #fff",
        "boxShadow": "0 0 5px #fff"
    },
    "ehover14 img": {
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s"
    },
    "ehover14:hover img": {
        "MsFilter": "brightness(1.4)",
        "filter": "brightness(1.4)",
        "WebkitFilter": "brightness(1.4)"
    },
    "ehover14 overlay": {
        "MozOpacity": 0,
        "opacity": 0,
        "width": 235,
        "height": 185,
        "left": "16%",
        "top": "11%",
        "border": "5px solid #fff",
        "WebkitTransition": "opacity 0.35s, transform 0.35s",
        "MozTransition": "opacity 0.35s, transform 0.35s",
        "transition": "opacity 0.35s, transform 0.35s",
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "WebkitTransform": "scale(0)",
        "MozTransform": "scale(0)",
        "transform": "scale(0)",
        "OTransform": "scale(0)",
        "MsTransform": "scale(0)"
    },
    "ehover14:hover overlay": {
        "backgroundColor": "rgba(0, 0, 0, 0.71)",
        "MozOpacity": 1,
        "opacity": 1,
        "WebkitTransform": "scale(1)",
        "MozTransform": "scale(1)",
        "transform": "scale(1)",
        "OTransform": "scale(1)",
        "MsTransform": "scale(1)"
    },
    "ehover14 button": {
        "color": "#FFF",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "opacity": 0,
        "WebkitTransition": "opacity 0.35s, -webkit-transform 0.35s",
        "MozTransition": "opacity 0.35s, transform 0.35s",
        "transition": "opacity 0.35s, transform 0.35s",
        "WebkitTransform": "translate3d(-150%,-400%,0)",
        "MozTransform": "translate3d(-150%,-400%,0)",
        "OTransform": "translate3d(-150%,-400%,0)",
        "MsTransform": "translate3d(-150%,-400%,0)",
        "transform": "translate3d(-150%,-400%,0)"
    },
    "ehover14 h4": {
        "backgroundColor": "transparent",
        "color": "#FFF",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "MozOpacity": 0,
        "opacity": 0,
        "WebkitTransition": "opacity 0.5s, -webkit-transform 0.5s",
        "MozTransition": "opacity 0.5s, transform 0.5s",
        "transition": "opacity 0.5s, transform 0.5s",
        "WebkitTransform": "translate3d(-150%,-400%,0)",
        "MozTransform": "translate3d(-150%,-400%,0)",
        "OTransform": "translate3d(-150%,-400%,0)",
        "transform": "translate3d(-150%,-400%,0)",
        "MsTransform": "translate3d(-150%,-400%,0)"
    },
    "ehover14:hover button": {
        "MozOpacity": 1,
        "opacity": 1,
        "WebkitTransform": "translate3d(0,0,0)",
        "MozTransform": "translate3d(0,0,0)",
        "OTransform": "translate3d(0,0,0)",
        "MsTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)"
    },
    "ehover14:hover h4": {
        "MozOpacity": 1,
        "opacity": 1,
        "WebkitTransform": "translate3d(0,0,0)",
        "MozTransform": "translate3d(0,0,0)",
        "OTransform": "translate3d(0,0,0)",
        "MsTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)"
    },
    "address": {
        "background": "#ffead1",
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0
    },
    "address agile-title h3": {
        "fontSize": 2.2,
        "marginBottom": 1.5
    },
    "address ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "address ul li": {
        "listStyleType": "none",
        "fontSize": 1.3,
        "color": "#333",
        "display": "inline-block",
        "width": "33%",
        "textAlign": "center"
    },
    "address ul li ifa": {
        "fontSize": 2,
        "color": "#639",
        "marginRight": 0.3,
        "verticalAlign": "middle"
    },
    "address ul li a": {
        "color": "#333"
    },
    "address ul li a:hover": {
        "color": "#ff8c00"
    },
    "contact h4": {
        "fontSize": 2,
        "color": "#fff",
        "marginBottom": 1
    },
    "contact-left": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "contact-right": {
        "background": "url(../images/bg1.jpg)no-repeat center 0px",
        "backgroundSize": "cover",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "wthree-contact-row": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "background": "rgba(0, 0, 0, 0.53)"
    },
    "contact-left iframe": {
        "width": "100%",
        "height": 29.4,
        "border": "none"
    },
    "contact-right input[type=\"text\"]": {
        "width": "48.5%",
        "color": "#fff",
        "outline": "none",
        "fontSize": 1,
        "fontWeight": "300",
        "paddingTop": 0.6,
        "paddingRight": 1,
        "paddingBottom": 0.6,
        "paddingLeft": 1,
        "marginBottom": 1,
        "WebkitAppearance": "none",
        "background": "none",
        "border": "1px solid #ffffff",
        "borderRadius": 0,
        "WebkitBorderRadius": "0    -moz-border-radius: 0",
        "OBorderRadius": 0,
        "MsBorderRadius": 0
    },
    "contact-right inputemail": {
        "marginLeft": 1
    },
    "contact-right  textarea": {
        "resize": "none",
        "width": "100%",
        "color": "#fff",
        "fontSize": 1,
        "fontWeight": "300",
        "outline": "none",
        "paddingTop": 0.8,
        "paddingRight": 1,
        "paddingBottom": 0.8,
        "paddingLeft": 1,
        "border": "1px solid #fff",
        "minHeight": 8,
        "WebkitAppearance": "none",
        "background": "none",
        "borderRadius": 0,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "OBorderRadius": 0,
        "MsBorderRadius": 0
    },
    "contact-right input[type=\"submit\"]": {
        "border": "none",
        "outline": "none",
        "color": "#fff",
        "background": "#663399",
        "width": "31%",
        "paddingTop": 0.8,
        "paddingRight": 0.8,
        "paddingBottom": 0.8,
        "paddingLeft": 0.8,
        "fontSize": 1,
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "WebkitAppearance": "none",
        "borderRadius": 0,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "OBorderRadius": 0,
        "MsBorderRadius": 0,
        "transition": "0.5s all",
        "WebkitTransition": "0.5s all",
        "MozTransition": "0.5s all",
        "MsTransition": "0.5s all",
        "OTransition": "0.5s all"
    },
    "contact-right  input[type=\"submit\"]:hover": {
        "background": "#ff8c00"
    },
    "::-webkit-input-placeholder": {
        "color": "#fff !important"
    },
    ":-moz-placeholder": {
        "color": "#fff !important"
    },
    "::-moz-placeholder": {
        "color": "#fff !important"
    },
    ":-ms-input-placeholder": {
        "color": "#fff !important"
    },
    "footer": {
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "textAlign": "center",
        "background": "#000"
    },
    "footer p": {
        "color": "#fff",
        "marginTop": 0.5
    },
    "footer p a": {
        "color": "#fff"
    },
    "footer p a:hover": {
        "color": "#988AEE"
    },
    "modal-open modal": {
        "background": "rgba(0, 0, 0, 0.48)"
    },
    "modal-body": {
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "textAlign": "left",
        "borderRadius": "0 !important"
    },
    "modal-dialog": {
        "marginTop": 6,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderRadius": "0 !important"
    },
    "modal-body iframe": {
        "border": "none !important",
        "width": "100%",
        "minHeight": 300
    },
    "about-modal modal-header": {
        "border": "none",
        "minHeight": 2.5,
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "background": "#ffebd0"
    },
    "about-modal buttonclose": {
        "color": "#639",
        "opacity": 0.9,
        "fontSize": 2.5,
        "outline": "none"
    },
    "h4modal-title": {
        "color": "#639",
        "fontSize": 1.3,
        "fontWeight": "600"
    },
    "book-form input[type=\"text\"]": {
        "width": "100%",
        "color": "#999",
        "fontSize": 1,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 40,
        "outline": "none",
        "background": "#fff",
        "border": "1px solid #dedede"
    },
    "selectcountry": {
        "width": "100%",
        "color": "#999",
        "fontSize": 1,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 40,
        "outline": "none",
        "background": "#fff",
        "border": "1px solid #dedede"
    },
    "selectcountry1": {
        "width": "100%",
        "color": "#999",
        "fontSize": 1,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 40,
        "outline": "none",
        "background": "#fff",
        "border": "1px solid #dedede"
    },
    "phone_email": {
        "float": "left",
        "width": "48.5%",
        "marginBottom": 1.5
    },
    "phone_emailphone_email1": {
        "float": "right"
    },
    "phone_email1": {
        "width": "48.5%",
        "marginBottom": 1.5
    },
    "cuisine": {
        "marginBottom": 2
    },
    "book-form form-text": {
        "position": "relative"
    },
    "book_date": {
        "position": "relative"
    },
    "section_room": {
        "position": "relative"
    },
    "book-form label": {
        "fontSize": 1,
        "color": "#555",
        "fontWeight": "400",
        "marginBottom": 0.5
    },
    "span1_of_1": {
        "float": "left",
        "listStyle": "none",
        "width": "31.5%"
    },
    "span1_of_1:nth-child(2)": {
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "book-form span": {
        "position": "absolute",
        "color": "#ff8c00",
        "fontSize": 1,
        "top": 1,
        "left": 1.2
    },
    "book-form input[type=\"submit\"]": {
        "textTransform": "capitalize",
        "width": "100%",
        "background": "#639",
        "color": "#ffffff",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "border": "none",
        "fontSize": 1,
        "marginTop": 2,
        "outline": "none",
        "fontWeight": "600",
        "WebkitTransition": ".5s all",
        "MozTransition": ".5s all",
        "transition": ".5s all"
    },
    "book-form input[type=\"submit\"]:hover": {
        "background": "#ff8c00",
        "color": "#fff"
    },
    "book-form ::-webkit-input-placeholder": {
        "color": "#999 !important"
    },
    "book-form :-moz-placeholder": {
        "color": "#999 !important"
    },
    "book-form ::-moz-placeholder": {
        "color": "#999 !important"
    },
    "book-form :-ms-input-placeholder": {
        "color": "#999 !important"
    },
    "toTop": {
        "display": "none",
        "textDecoration": "none",
        "position": "fixed",
        "bottom": "3%",
        "right": "3%",
        "overflow": "hidden",
        "width": 32,
        "height": 32,
        "border": "none",
        "textIndent": "100%",
        "background": "url(\"../images/move-up.png\") no-repeat 0px 0px"
    },
    "toTopHover": {
        "width": 32,
        "height": 32,
        "display": "block",
        "overflow": "hidden",
        "float": "right",
        "opacity": 0,
        "MozOpacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "navbar-toggle": {
        "borderRadius": "0 !important",
        "backgroundColor": "rgba(0,0,0,0) !important"
    },
    "modal": {
        "borderRadius": "0 !important"
    },
    "modal-content": {
        "borderRadius": "0 !important"
    },
    "modal-header": {
        "borderRadius": "0 !important"
    }
});