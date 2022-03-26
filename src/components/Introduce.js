import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import axios from 'axios';

import './Introduce.scss';
import face from './images/face.jpg';


function Introduce() {


    return (
        <div className="contain">
            <div className="main_contain">
                <h1>[미완성]INDEX 페이지입니다.</h1>

                <div className="index_div">

                    <div className="index_aboutme">
                        <h2>About Me</h2>
                        <img src={face}></img>
                    </div>
                    <div className="index_about2">
                        <div className="index_career">
                            <h2>career DB 불러오는 곳</h2>
                        </div>
                        <div className="index_hashtag">
                            <h2>해쉬태그 등록</h2>
                            <button onClick="saveName()">저장</button>
                        </div>
                    </div>

                </div>
                <div className="index_div2">
                    <div className="icando">
                        <h2>주력스킬</h2>
                        <p>stach DB 에서 값 뽑아오기</p>
                    </div>
                    <div className="andicandotoo">
                        <h2>보조스킬</h2>
                        <p>stach DB 에서 값 뽑아오기</p>
                    </div>
                </div>
                <div className="index_div3">
                    <h1>PORTFOLIO</h1>
                    <div className="index_portfolio">
                        <h3>포트폴리오 리스트 뽑아서 탭키로 만들기</h3>
                        <p>탭 누르면 해당하는 포트폴리오 데이터 화면에 가져오기</p>
                        <div className="index_port_div">
                            <div className="index_port_text">
                                <h3>포트폴리오 정보 띄우는 곳</h3>
                                <p>text 형태</p>
                            </div>
                            <div className="index_port_img">
                                <h3>포트폴리오에 저장된 이미지 띄우는 곳</h3>
                                <p>img 형태</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Introduce;