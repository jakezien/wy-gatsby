import React, { Component } from "react"
import * as ScrollMagic from "scrollmagic"; 
import { TweenLite, TimelineLite } from "gsap"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { withTheme } from 'styled-components';

if (ScrollMagicPluginGsap) {
  ScrollMagicPluginGsap(ScrollMagic, TweenLite, TimelineLite);
}

class ScrollAnimation extends Component {

  componentDidMount() {
    this.controller = new ScrollMagic.Controller();
    this.createQerosScenes();
  }

  render() {
    return null;
  }

  createQerosScenes() {
    let scenes = [];

    let tween = new TimelineLite()
      .to(".qeros-animation-0 .scrim", 1, {backgroundColor: "transparent"})
      .from(".qeros-animation-0 .caption", 1, {color: this.props.theme.hotPink}, 0);

    scenes.push(new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: '.qeros-animation-0',
      triggerHook: 'onCenter'
    }).setTween(tween))

    this.controller.addScene(scenes);
  }

}

export default withTheme(ScrollAnimation);