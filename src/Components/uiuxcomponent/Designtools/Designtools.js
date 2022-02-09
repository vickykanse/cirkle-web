import React, { Component } from 'react';
import "./designtools.css"
import Tilt from '../../3dTilt/Tilt'

import Character from '../../../images/uiux/character-animation.gif'
import mobileilllu from '../../../images/uiux/stats-illo2.gif';
import skatch from '../../../images/uiux/logo-sketch.png'
import figma from '../../../images/uiux/logo-figma.png'
import ai from '../../../images/uiux/logo-illustrator.png'
import Photoshop from '../../../images/uiux/logo-photoshop.png'
import rp from '../../../images/uiux/rpicon.png'
import xd from '../../../images/uiux/xd.png'
import inVision from '../../../images/uiux/invisn.png'
import Maya from '../../../images/uiux/maya.png'
import moho from '../../../images/uiux/moho.png'
import blend from '../../../images/uiux/blend.png'
import ae from '../../../images/uiux/ae.png'
import s1 from '../../../images/uiux/big_ils_2.png'
import s2 from '../../../images/uiux/shapes.png'
import s3 from '../../../images/uiux/shapes-right.png'
class Designtools extends Component {
    render() {
        return (
            <section data-header-group="black_header" className="cm-visual-tools-section-new">
                <div className="left-bottom"><img src={s1} /></div>
                <div className="right-tri"><img src={s3} /></div>
                <div className="inner_content_wrap">
                    <div className="cm-section-title text-center anim-title">
                        <div className="aos" data-aos="fade-right">
                            <h2>Visual and Interaction Design Tools</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-up"></div>
                    </div>
                    <div className="cm-visual-parts-row">
                        <div className="cm-visual-parts-col one-seventh">
                            <div className="cm-static-editors aos" data-aos="fade-right">
                                <h2>Static Editors</h2>
                                <div className="cm-features">
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={skatch} alt="Sketch" />
                                        <span>Sketch</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={figma} alt="Figma" />
                                        <span>Figma</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={ai} alt="Adobe Illustrator" />
                                        <span>Adobe Illustrator</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={Photoshop} alt="Adobe Photoshop" />
                                        <span>Adobe Photoshop</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={xd} alt="Adobe XD" />
                                        <span>Adobe XD</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={rp} alt="axure" />
                                        <span>axure</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={inVision} alt="inVision" />
                                        <span>inVision</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cm-visual-parts-col one-fifth">
                            <div className="cm-static-editor-img aos" data-aos="slide-left">
                                <Tilt>
                                    <img src={Character} data-tilt data-tilt-perspective="600"
                                        className="social media" />
                                </Tilt>
                            </div>
                        </div>
                    </div>
                    <div className="cm-visual-parts-row">
                        <div className="cm-visual-parts-col one-fifth right-col order-2">
                            <div className="cm-static-editors aos" data-aos="fade-left">
                                <h2>Animation editors</h2>
                                <div className="cm-features">
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={Maya} alt="maya" />
                                        <span>maya</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={moho} alt="moho" />
                                        <span>moho</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={blend} alt="Blender" />
                                        <span>Blender</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={ae} alt="After Effects" />
                                        <span>After Effects</span>
                                    </a>
                                    <a href="javascript:;" className="cm-features-item">
                                        <img src={rp} alt="axure" />
                                        <span>axure</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cm-visual-parts-col one-seventh">
                            <Tilt>
                                <img src={mobileilllu} width="370" className="social media" />
                            </Tilt>
                        </div>
                    </div>
                </div>
                <div className="right-bottom"><img src={s1} /></div>
                <div className="left-tri"><img src={s2} /></div>
            </section>
        );
    }
}

export default Designtools;