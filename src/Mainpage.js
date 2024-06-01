import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; 
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import styled from 'styled-components';

const firebaseConfig = {
    apiKey: "AIzaSyA736xAgiNc4V1iYdvxOC8OyaYfCy0kuOI",
    authDomain: "mgsurvey-a06ea.firebaseapp.com",
    projectId: "mgsurvey-a06ea",
    storageBucket: "mgsurvey-a06ea.appspot.com",
    messagingSenderId: "783821287261",
    appId: "1:783821287261:web:d248ef3c9d7f4507f882b4",
    measurementId: "G-L55G7JJZJW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Main = () => {
    const navigate = useNavigate(); 

    const handleLogin = () => {
        signInAnonymously(auth)
            .then(() => {
                console.log('익명 로그인 성공');
                navigate('/Subpage'); 
            })
            .catch((error) => {
                console.error('익명 로그인 실패:', error);
            });
    };
    

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  width: 10rem;
  height: 2.8rem;
  font-family: 'Pretendard JP', sans-serif;
  color: white;
  margin-top: 20px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;


const Text = styled.div`
    font-size: 1rem;
    color: #48C370;
    font-weight: 700;
    margin-right: 0px;
`;
const TimeIcon = () => (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.761C12 10.794 11.984 10.823 11.981 10.855C11.9754 10.9227 11.9616 10.9895 11.94 11.054C11.9038 11.1736 11.8447 11.285 11.766 11.382C11.722 11.435 11.676 11.482 11.622 11.526C11.597 11.546 11.582 11.575 11.555 11.593L6.829 14.743C6.60832 14.8846 6.34086 14.9338 6.08423 14.8801C5.8276 14.8264 5.60233 14.6741 5.45692 14.4559C5.31152 14.2377 5.25761 13.9712 5.30682 13.7136C5.35602 13.4561 5.5044 13.2282 5.72 13.079L10 10.226V5.556C10 5.29078 10.1054 5.03643 10.2929 4.84889C10.4804 4.66136 10.7348 4.556 11 4.556C11.2652 4.556 11.5196 4.66136 11.7071 4.84889C11.8946 5.03643 12 5.29078 12 5.556V10.761V10.761ZM11 0.5C5.201 0.5 0.5 5.201 0.5 11C0.5 16.799 5.201 21.5 11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.201 16.799 0.5 11 0.5Z" fill="#48C370"/>
        </svg>
  );

const Button = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 6vh;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 24px;
  color: white;
  background-color: #A5EA99;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;



const ButtonText = styled.span`
  margin-right: 8px;
`;


    return (
        <div>
            <div style={{
                marginTop: '4vh',
                fontSize: '11vw',
                fontWeight: 800,
                lineHeight: '14vw',
                color: 'white',}}>
            
                쫀득쫀득<br/>
                맛있는 망개랑 설문지

            </div>

            <Container>
                <Icon>
                <TimeIcon />
                </Icon>
                <Text>약 3분, 16개 질문</Text>
            </Container>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: 0, // 요소를 오른쪽으로 붙이기 위해 추가
                top: '20vh',
                zIndex: '-1'
                }}>

            <svg width="362" height="520" viewBox="0 0 362 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M149.863 224.142C161.506 263.658 197.989 335.823 300.183 393.743L391.74 444.322L391.74 169.068L344.368 139.369C290.712 106.938 262.308 103.945 213.989 119.717C201.563 96.6399 197.41 91.9008 192.13 91.5798C189.535 91.422 187.138 92.8807 185.448 94.8558C168.787 114.322 157.296 150.033 150.929 174.163C146.639 190.42 145.111 208.014 149.863 224.142Z" fill="#7AEBA1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M209.92 177.461C210.594 181.797 207.625 185.857 203.289 186.531C198.954 187.204 194.893 184.236 194.219 179.9C193.546 175.564 196.515 171.504 200.85 170.83C205.186 170.157 209.247 173.126 209.92 177.461ZM220.028 198.924L228.049 205.256C229.375 206.303 231.298 206.076 232.345 204.75C233.392 203.425 233.166 201.501 231.84 200.454L222.883 193.383C220.424 191.442 216.813 192.156 215.279 194.887L210.15 204.017C209.322 205.49 209.845 207.355 211.318 208.182C212.791 209.01 214.656 208.487 215.483 207.014L220.028 198.924ZM239.194 182.415C243.53 181.742 246.498 177.681 245.825 173.345C245.151 169.01 241.091 166.041 236.755 166.715C232.42 167.388 229.451 171.449 230.124 175.784C230.798 180.12 234.859 183.089 239.194 182.415Z" fill="#272525"/>
                <path d="M213.895 116.482C240.797 82.3558 247.704 77.4195 254.695 77.8611C261.937 79.6252 264.617 91.2576 269.584 110.55" stroke="#272525" stroke-width="6" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7084 116.266L3.79428 135.26C2.78797 135.596 1.95629 136.318 1.4822 137.267C1.00811 138.216 0.93044 139.315 1.26628 140.321L24.0593 208.618C24.3951 209.624 25.1169 210.456 26.066 210.93C27.015 211.404 28.1135 211.482 29.1198 211.146L61.3712 200.383L55.0398 181.411C53.2949 176.183 56.1313 170.505 61.3598 168.76L80.3312 162.428L65.769 118.794C65.4332 117.788 64.7113 116.956 63.7623 116.482C62.8132 116.008 61.7147 115.93 60.7084 116.266" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7312 179.512L67.0626 198.483L82.2306 168.12L63.2592 174.451C62.2529 174.787 61.4213 175.509 60.9472 176.458C60.4731 177.407 60.3954 178.506 60.7312 179.512Z" fill="#7AEBA1"/>
                <path d="M16.0975 142.283L56.034 128.955" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M19.5797 152.717L59.5163 139.389" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M23.062 163.151L62.9986 149.823" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M26.5442 173.585L66.4808 160.257" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M30.0265 184.02L48.0493 178.005" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M33.5088 194.454L51.5316 188.439" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M134.026 223.54L95.7278 209.909C95.0506 209.668 94.3055 209.706 93.6562 210.014C93.007 210.322 92.5068 210.876 92.2658 211.553L75.9087 257.512C75.6677 258.189 75.7056 258.934 76.014 259.583C76.3224 260.232 76.8761 260.732 77.5532 260.974L99.2558 268.698L103.799 255.931C105.052 252.413 108.936 250.568 112.454 251.82L125.221 256.364L135.671 227.002C135.912 226.324 135.874 225.579 135.566 224.93C135.257 224.281 134.704 223.781 134.026 223.54" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M107.629 257.295L103.086 270.061L123.857 260.194L111.091 255.65C110.414 255.409 109.669 255.447 109.02 255.755C108.37 256.064 107.87 256.617 107.629 257.295Z" fill="#7AEBA1"/>
                <path d="M99.36 218.793L126.234 228.358" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M96.861 225.814L123.735 235.379" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M94.3621 232.836L121.236 242.4" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M91.8629 239.857L118.737 249.422" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M89.364 246.879L101.492 251.195" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
                <path d="M86.865 253.9L98.9929 258.216" stroke="#7AEBA1" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
            </svg>
            </div>


            <div style={{
                display: 'inline-flex',
                marginTop: '28vh',
                fontSize: '1.8vh',
                fontWeight: 800,
                lineHeight: '24px',
                color: 'white',
                backgroundColor: '#6DCF8D',
                padding: '12px 16px',
                borderRadius: '0 16px 16px 16px'
                }}>
                
                안녕하세요. 망개랑입니다! <br/>
                저희 망개랑 떡을 구매해주셔서 진심으로 감사드립니다!

            </div>
            
            <div style={{
                display: 'inline-flex',
                marginTop: '1rem',
                fontSize: '1.8vh',
                fontWeight: 800,
                lineHeight: '24px',
                color: 'white',
                backgroundColor: '#6DCF8D',
                padding: '12px 16px',
                borderRadius: '0 16px 16px 16px'
                }}>
                
                설문조사를 완료해주신 분들 중 추첨을 통해 5분께
                망굴세트 M (26,000원 상당)을 드릴 예정이에요!

            </div>

            <Button onClick={handleLogin}>
                <ButtonText>지금 시작하기</ButtonText>

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5396 12.6001H19.9149L13.5554 6.24063C13.4237 6.11102 13.3189 5.95661 13.2472 5.7863C13.1754 5.61599 13.1381 5.43316 13.1373 5.24835C13.1365 5.06354 13.1724 4.88041 13.2428 4.70953C13.3131 4.53864 13.4167 4.38338 13.5473 4.2527C13.678 4.12202 13.8333 4.01851 14.0042 3.94813C14.1751 3.87776 14.3582 3.84191 14.543 3.84266C14.7278 3.84342 14.9106 3.88075 15.0809 3.95252C15.2512 4.02428 15.4057 4.12906 15.5353 4.2608L24.2853 13.0108C24.2888 13.0131 24.2899 13.0178 24.2934 13.0213C24.4854 13.2172 24.6156 13.4651 24.6678 13.7343C24.7201 14.0035 24.6921 14.2822 24.5874 14.5356C24.5174 14.7025 24.4183 14.8506 24.2934 14.979L24.2853 14.9906L15.5353 23.7406C15.2611 24.0136 14.9029 24.149 14.5459 24.149C14.2691 24.149 13.9985 24.0669 13.7683 23.9131C13.5382 23.7594 13.3587 23.5408 13.2527 23.2851C13.1467 23.0294 13.1189 22.748 13.1728 22.4765C13.2267 22.2049 13.3598 21.9555 13.5554 21.7596L19.9138 15.4001H3.53844C3.16713 15.4001 2.81104 15.2526 2.54848 14.9901C2.28593 14.7275 2.13844 14.3714 2.13844 14.0001C2.13844 13.6288 2.28593 13.2727 2.54848 13.0102C2.81104 12.7476 3.16713 12.6001 3.53844 12.6001" fill="white"/>
                </svg>

             </Button>

        </div>
    );
};

export default Main;
